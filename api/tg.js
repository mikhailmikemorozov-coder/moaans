// Telegram relay for the BI Color workshop server (crm.bi-color.ru).
//
// The server in Russia cannot reach api.telegram.org reliably, so it calls
// the Bot API through this function:
//
//   POST /api/tg?m=<method>
//   X-Relay-Key: <BC_RELAY_KEY>
//   Content-Type: application/json | multipart/form-data
//   body: the Bot API request as is
//
// The reply is Telegram's reply as is (status and JSON). Only the methods the
// bot needs are let through. Nothing is stored or logged here: client data
// only passes through. Env (Vercel project settings):
//   TELEGRAM_BOT_TOKEN  token of @bi_color_bot
//   BC_RELAY_KEY        shared secret, the same value as on the server

import { createHash, timingSafeEqual } from 'node:crypto'

export const ALLOWED_METHODS = new Set([
  'getMe',
  'getWebhookInfo',
  'deleteWebhook',
  'getUpdates',
  'sendMessage',
  'sendPhoto',
  'sendMediaGroup',
  'sendDocument',
  'answerCallbackQuery',
])

// Vercel rejects request bodies above 4.5 MB anyway.
export const MAX_BODY = 4_400_000

function reply(status, description) {
  return new Response(JSON.stringify({ ok: false, description: `relay: ${description}` }), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

function sameKey(given, expected) {
  const a = createHash('sha256').update(String(given)).digest()
  const b = createHash('sha256').update(String(expected)).digest()
  return timingSafeEqual(a, b)
}

export async function handle(request, env = process.env, fetchImpl = fetch) {
  if (request.method !== 'POST') return reply(405, 'POST only')
  const token = env.TELEGRAM_BOT_TOKEN
  const key = env.BC_RELAY_KEY
  if (!token || !key) return reply(503, 'not configured')
  const given = request.headers.get('x-relay-key')
  if (!given || !sameKey(given, key)) return reply(401, 'bad key')

  const method = new URL(request.url).searchParams.get('m') || ''
  if (!ALLOWED_METHODS.has(method)) return reply(400, 'method not allowed')
  const type = request.headers.get('content-type') || ''
  if (!/^(application\/json|multipart\/form-data)/i.test(type)) {
    return reply(415, 'JSON or multipart only')
  }
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY) return reply(413, 'too large')
  const body = await request.arrayBuffer()
  if (body.byteLength > MAX_BODY) return reply(413, 'too large')

  let res
  try {
    res = await fetchImpl(`https://api.telegram.org/bot${token}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': type },
      body,
      signal: AbortSignal.timeout(25_000),
    })
  } catch {
    // The error may contain the URL, i.e. the token: never pass it on.
    return reply(502, 'Telegram is unreachable')
  }
  return new Response(await res.text(), {
    status: res.status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  })
}

export function POST(request) {
  return handle(request)
}

export function GET(request) {
  return handle(request)
}
