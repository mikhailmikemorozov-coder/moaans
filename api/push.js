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
// posts it to the browser's push service. Replies (JSON):
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

import { createHash, timingSafeEqual } from 'node:crypto'
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

export async function handle(request, env = process.env, send = webpush.sendNotification.bind(webpush)) {
  if (request.method !== 'POST') return fail(405, 'POST only')
  const key = env.BC_RELAY_KEY
  const vapid = { publicKey: env.VAPID_PUBLIC, privateKey: env.VAPID_PRIVATE, subject: env.VAPID_SUBJECT }
  if (!key || !vapid.publicKey || !vapid.privateKey || !vapid.subject) return fail(503, 'not configured')
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
