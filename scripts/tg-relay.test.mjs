// Local test of api/tg.js (no network, Telegram is faked):
//   node scripts/tg-relay.test.mjs
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { handle, ALLOWED_METHODS } from '../api/tg.js'

const ENV = { TELEGRAM_BOT_TOKEN: '123:SECRET-TOKEN', BC_RELAY_KEY: 'k'.repeat(64) }
const URL0 = 'https://bi-color.ru/api/tg'

function fakeTelegram(status = 200, body = { ok: true, result: { message_id: 7 } }) {
  const calls = []
  const impl = async (url, init) => {
    calls.push({ url, init, body: Buffer.from(init.body) })
    return new Response(JSON.stringify(body), { status })
  }
  return { calls, impl }
}

const post = (m, { key = ENV.BC_RELAY_KEY, type = 'application/json', body = '{"chat_id":1,"text":"hi"}' } = {}) =>
  new Request(`${URL0}?m=${m}`, {
    method: 'POST',
    headers: { ...(key === null ? {} : { 'X-Relay-Key': key }), 'Content-Type': type },
    body,
  })

test('no key, wrong key or a key of another length: 401, Telegram not called', async () => {
  for (const key of [null, 'wrong', ENV.BC_RELAY_KEY + 'x', ENV.BC_RELAY_KEY.slice(1)]) {
    const tg = fakeTelegram()
    const res = await handle(post('sendMessage', { key }), ENV, tg.impl)
    assert.equal(res.status, 401)
    assert.equal(tg.calls.length, 0)
  }
})

test('relay without its env vars refuses everything', async () => {
  for (const env of [{}, { TELEGRAM_BOT_TOKEN: 'x' }, { BC_RELAY_KEY: ENV.BC_RELAY_KEY }]) {
    const tg = fakeTelegram()
    const res = await handle(post('sendMessage'), env, tg.impl)
    assert.equal(res.status, 503)
    assert.equal(tg.calls.length, 0)
  }
})

test('only POST', async () => {
  const tg = fakeTelegram()
  const res = await handle(new Request(`${URL0}?m=getMe`, { headers: { 'X-Relay-Key': ENV.BC_RELAY_KEY } }), ENV, tg.impl)
  assert.equal(res.status, 405)
  assert.equal(tg.calls.length, 0)
})

test('methods outside the allow-list are rejected', async () => {
  for (const m of ['setWebhook', 'logOut', 'close', 'sendDocument', 'getFile', 'deleteMessage', '', '../getMe', 'getMe/x']) {
    const tg = fakeTelegram()
    const res = await handle(post(m), ENV, tg.impl)
    assert.equal(res.status, 400, m)
    assert.equal(tg.calls.length, 0)
  }
})

test('other content types and oversized bodies are rejected', async () => {
  const tg = fakeTelegram()
  assert.equal((await handle(post('sendMessage', { type: 'text/plain' }), ENV, tg.impl)).status, 415)
  const big = new Uint8Array(4_500_000)
  assert.equal((await handle(post('sendPhoto', { type: 'multipart/form-data; boundary=x', body: big }), ENV, tg.impl)).status, 413)
  assert.equal(tg.calls.length, 0)
})

test('allowed JSON call is passed through as is', async () => {
  const tg = fakeTelegram(200, { ok: true, result: [{ update_id: 5 }] })
  const body = '{"offset":5,"timeout":0}'
  const res = await handle(post('getUpdates', { body }), ENV, tg.impl)
  assert.equal(res.status, 200)
  assert.deepEqual(await res.json(), { ok: true, result: [{ update_id: 5 }] })
  assert.equal(tg.calls.length, 1)
  assert.equal(tg.calls[0].url, 'https://api.telegram.org/bot123:SECRET-TOKEN/getUpdates')
  assert.equal(tg.calls[0].body.toString(), body)
  assert.equal(tg.calls[0].init.headers['Content-Type'], 'application/json')
})

test('multipart (photos) keeps its boundary and bytes', async () => {
  const tg = fakeTelegram()
  const fd = new FormData()
  fd.append('chat_id', '1')
  fd.append('photo', new Blob([new Uint8Array([1, 2, 3, 255])], { type: 'image/jpeg' }), 'p0.jpg')
  const req = new Request(`${URL0}?m=sendPhoto`, { method: 'POST', headers: { 'X-Relay-Key': ENV.BC_RELAY_KEY }, body: fd })
  const type = req.headers.get('content-type')
  const raw = Buffer.from(await req.clone().arrayBuffer())
  const res = await handle(req, ENV, tg.impl)
  assert.equal(res.status, 200)
  assert.equal(tg.calls[0].init.headers['Content-Type'], type)
  assert.ok(type.startsWith('multipart/form-data; boundary='))
  assert.ok(tg.calls[0].body.equals(raw))
})

test('Telegram errors come back with their status; the token never leaks', async () => {
  const tg = fakeTelegram(403, { ok: false, error_code: 403, description: 'Forbidden: bot was blocked by the user' })
  const res = await handle(post('sendMessage'), ENV, tg.impl)
  assert.equal(res.status, 403)
  assert.equal((await res.json()).error_code, 403)
  const down = await handle(post('sendMessage'), ENV, async (url) => { throw new Error('connect failed ' + url) })
  assert.equal(down.status, 502)
  assert.ok(!(await down.text()).includes('SECRET'))
})

test('allow-list is what the server needs', () => {
  assert.deepEqual([...ALLOWED_METHODS].sort(), [
    'answerCallbackQuery', 'deleteWebhook', 'getMe', 'getUpdates', 'getWebhookInfo',
    'sendMediaGroup', 'sendMessage', 'sendPhoto',
  ])
})
