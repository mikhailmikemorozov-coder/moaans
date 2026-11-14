// Web Push relay for the BI Color workshop server (crm.bi-color.ru).
//
// PocketBase on the server cannot encrypt Web Push messages, so it hands
// each one to this function:
//
//   POST /api/push
//   X-Relay-Key: <BC_RELAY_KEY>
//   Content-Type: application/json
//   body: {"subscription": {"endpoint", "keys": {"p256dh", "auth"}},
//          "payload": {...}, "ttl": seconds}
//
// The function encrypts the payload with the `web-push` package (VAPID) and
// posts it to the browser's push service.
//
// The same endpoint sends to the Android app through Firebase Cloud
// Messaging (HTTP v1): body {"fcm": {"token"}, "payload": {...}, "ttl"}.
// PocketBase cannot sign the service account's RS256 JWT, so it is done
// here: JWT → OAuth2 access token (cached ~50 min) → messages:send.
// Replies (JSON):
//   200 {ok: true}                 delivered to the push service
//   410 {ok: false, gone: true}    the subscription is gone (404/410): the
//                                  server deletes it
//   502 {ok: false, status}        the push service failed: try again later
//   400 / 401 / 405 / 413 / 415 / 503  bad request, bad key, not POST, too
//                                  large, not JSON, not configured
// Only known push services are reached (no open proxy). Nothing is stored
// or logged here; the payload carries no client personal data. Env (Vercel
// project settings):
//   BC_RELAY_KEY     shared secret, the same value as on the server
//   VAPID_PUBLIC     public key (the server serves the same one to browsers)
//   VAPID_PRIVATE    private key
//   VAPID_SUBJECT    "mailto:…" or "https://bi-color.ru"
//   FCM_SERVICE_ACCOUNT  the Firebase service account JSON (whole file,
//                    one line); without it FCM requests get 503

import { createHash, createSign, timingSafeEqual } from 'node:crypto'
import webpush from 'web-push'

export const MAX_BODY = 8_000
export const MAX_PAYLOAD = 3_000
export const MAX_TTL = 4 * 24 * 3600

// The same list as the server's (pb_hooks/lib/notify.js PUSH_HOSTS).
export const PUSH_HOSTS = [
  /^fcm\.googleapis\.com$/,
  /^android\.googleapis\.com$/,
  /^updates\.push\.services\.mozilla\.com$/,
  /^push\.services\.mozilla\.com$/,
  /^web\.push\.apple\.com$/,
  /^[a-z0-9-]+\.push\.apple\.com$/,
  /^[a-z0-9-]+\.notify\.windows\.com$/,
]

const B64URL = /^[A-Za-z0-9_-]+={0,2}$/

function reply(status, json) {
  return new Response(JSON.stringify(json), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

const fail = (status, description, extra = {}) => reply(status, { ok: false, description: `relay: ${description}`, ...extra })

function sameKey(given, expected) {
  const a = createHash('sha256').update(String(given)).digest()
  const b = createHash('sha256').update(String(expected)).digest()
  return timingSafeEqual(a, b)
}

export function knownEndpoint(s) {
  if (typeof s !== 'string' || s.length > 1000) return false
  let u
  try {
    u = new URL(s)
  } catch {
    return false
  }
  if (u.protocol !== 'https:' || (u.port && u.port !== '443') || u.username || u.password) return false
  return PUSH_HOSTS.some((re) => re.test(u.hostname.toLowerCase()))
}

function validSubscription(sub) {
  if (!sub || typeof sub !== 'object') return null
  const keys = sub.keys && typeof sub.keys === 'object' ? sub.keys : {}
  const { p256dh, auth } = keys
  if (!knownEndpoint(sub.endpoint)) return null
  if (typeof p256dh !== 'string' || !B64URL.test(p256dh) || p256dh.length > 200) return null
  if (typeof auth !== 'string' || !B64URL.test(auth) || auth.length > 100) return null
  return { endpoint: sub.endpoint, keys: { p256dh, auth } }
}

// ---------- FCM ----------

const b64url = (b) => Buffer.from(b).toString('base64url')
const FCM_TOKEN = /^[A-Za-z0-9_:-]{20,400}$/
let cachedAccess = null // {key, token, until}

function serviceAccount(env) {
  try {
    const sa = JSON.parse(env.FCM_SERVICE_ACCOUNT || '')
    if (sa && sa.client_email && sa.private_key && sa.project_id) return sa
  } catch {
    // not configured
  }
  return null
}

// A signed JWT for Google's token endpoint (RS256, the service account key).
export function serviceJwt(sa, nowSec = Math.floor(Date.now() / 1000)) {
  const head = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: sa.token_uri || 'https://oauth2.googleapis.com/token',
    iat: nowSec,
    exp: nowSec + 3600,
  }))
  const sig = createSign('RSA-SHA256').update(`${head}.${claims}`).sign(sa.private_key)
  return `${head}.${claims}.${b64url(sig)}`
}

async function accessToken(sa, fetchImpl) {
  const now = Date.now()
  if (cachedAccess && cachedAccess.key === sa.client_email && cachedAccess.until > now) return cachedAccess.token
  const res = await fetchImpl(sa.token_uri || 'https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: serviceJwt(sa) }).toString(),
    signal: AbortSignal.timeout(10_000),
  })
  if (!res.ok) throw new Error('token ' + res.status)
  const j = await res.json()
  if (!j.access_token) throw new Error('no token')
  const life = Math.max(60, Math.min(Number(j.expires_in) || 3600, 3600))
  cachedAccess = { key: sa.client_email, token: j.access_token, until: now + (life - 600) * 1000 }
  return j.access_token
}

export function resetFcmCache() {
  cachedAccess = null
}

const str = (v, max) => (typeof v === 'string' ? v.slice(0, max) : '')

async function sendFcm(body, env, fetchImpl) {
  const sa = serviceAccount(env)
  if (!sa) return fail(503, 'FCM not configured')
  const token = body.fcm && body.fcm.token
  if (typeof token !== 'string' || !FCM_TOKEN.test(token)) return fail(400, 'bad token')
  const p = body.payload
  if (!p || typeof p !== 'object') return fail(400, 'bad payload')
  if (JSON.stringify(p).length > MAX_PAYLOAD) return fail(413, 'payload too large')
  const ttl = Number.isInteger(body.ttl) && body.ttl >= 0 ? Math.min(body.ttl, MAX_TTL) : 86400
  const url = str(p.url, 200)
  const message = {
    token,
    notification: { title: str(p.title, 200) || 'BI Color', body: str(p.body, 300) },
    data: { id: str(p.id, 40), kind: str(p.kind, 20), url: url.charAt(0) === '/' ? url : '/' },
    android: {
      priority: 'HIGH',
      ttl: `${ttl}s`,
      notification: { channel_id: 'bc_events', tag: str(p.tag, 80) || undefined, sound: 'default' },
    },
  }
  let res
  try {
    const access = await accessToken(sa, fetchImpl)
    res = await fetchImpl(`https://fcm.googleapis.com/v1/projects/${encodeURIComponent(sa.project_id)}/messages:send`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${access}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
      signal: AbortSignal.timeout(10_000),
    })
  } catch {
    // The error may carry the token or the key: never pass it on.
    return fail(502, 'FCM unreachable', { status: 0 })
  }
  if (res.ok) return reply(200, { ok: true })
  if (res.status === 401) cachedAccess = null
  let code = ''
  try {
    const j = await res.json()
    const details = (j.error && j.error.details) || []
    code = (details.find((d) => d && d.errorCode) || {}).errorCode || (j.error && j.error.status) || ''
  } catch {
    // no JSON
  }
  // The app was uninstalled or the token is old: the server deletes it.
  if (res.status === 404 || code === 'UNREGISTERED' || (res.status === 400 && code === 'INVALID_ARGUMENT')) {
    return fail(410, 'token gone', { gone: true })
  }
  return fail(502, 'FCM failed', { status: res.status })
}

// ---------- entry ----------

export async function handle(request, env = process.env, send = webpush.sendNotification.bind(webpush), fetchImpl = fetch) {
  if (request.method !== 'POST') return fail(405, 'POST only')
  const key = env.BC_RELAY_KEY
  if (!key) return fail(503, 'not configured')
  const given = request.headers.get('x-relay-key')
  if (!given || !sameKey(given, key)) return fail(401, 'bad key')
  if (!/^application\/json/i.test(request.headers.get('content-type') || '')) return fail(415, 'JSON only')
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY) return fail(413, 'too large')
  const text = await request.text()
  if (text.length > MAX_BODY) return fail(413, 'too large')
  let body
  try {
    body = JSON.parse(text)
  } catch {
    return fail(400, 'bad JSON')
  }
  if (body && body.fcm) return sendFcm(body, env, fetchImpl)
  const vapid = { publicKey: env.VAPID_PUBLIC, privateKey: env.VAPID_PRIVATE, subject: env.VAPID_SUBJECT }
  if (!vapid.publicKey || !vapid.privateKey || !vapid.subject) return fail(503, 'not configured')
  const sub = validSubscription(body && body.subscription)
  if (!sub) return fail(400, 'bad subscription')
  if (!body.payload || typeof body.payload !== 'object') return fail(400, 'bad payload')
  const payload = JSON.stringify(body.payload)
  if (payload.length > MAX_PAYLOAD) return fail(413, 'payload too large')
  const ttl = Number.isInteger(body.ttl) && body.ttl >= 0 ? Math.min(body.ttl, MAX_TTL) : 86400

  try {
    await send(sub, payload, { vapidDetails: vapid, TTL: ttl, urgency: 'high', timeout: 10_000 })
  } catch (err) {
    const status = Number(err && err.statusCode) || 0
    if (status === 404 || status === 410) return fail(410, 'subscription gone', { gone: true })
    // The push service's answer may echo the endpoint: never pass it on.
    return fail(502, 'push service failed', { status })
  }
  return reply(200, { ok: true })
}

export function POST(request) {
  return handle(request)
}

export function GET(request) {
  return handle(request)
}
