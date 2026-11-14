// Local test of api/push.js (no network: the push service is faked; one
// test runs the real web-push encryption without sending):
//   node scripts/push-relay.test.mjs
import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import { test } from 'node:test'
import webpush from 'web-push'
import { handle, knownEndpoint } from '../api/push.js'

const keys = webpush.generateVAPIDKeys()
const ENV = {
  BC_RELAY_KEY: 'k'.repeat(64),
  VAPID_PUBLIC: keys.publicKey,
  VAPID_PRIVATE: keys.privateKey,
  VAPID_SUBJECT: 'https://bi-color.ru',
}
const URL0 = 'https://bi-color.ru/api/push'

// A browser's subscription: its own P-256 key and a 16-byte auth secret.
const ecdh = crypto.createECDH('prime256v1')
ecdh.generateKeys()
const SUB = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/abc:def',
  keys: { p256dh: ecdh.getPublicKey().toString('base64url'), auth: crypto.randomBytes(16).toString('base64url') },
}
const PAYLOAD = { id: 'n1', kind: 'ready', title: 'Заказ №1047 готов', body: 'Отмечен «Готово».', url: '/?order=x', tag: 'ready:x' }

function fakePush(fail) {
  const calls = []
  const impl = async (sub, payload, opts) => {
    calls.push({ sub, payload, opts })
    if (fail !== undefined) {
      const e = new Error('push failed: ' + sub.endpoint)
      if (fail) e.statusCode = fail
      throw e
    }
    return { statusCode: 201 }
  }
  return { calls, impl }
}

const post = ({ key = ENV.BC_RELAY_KEY, type = 'application/json', body = { subscription: SUB, payload: PAYLOAD, ttl: 600 } } = {}) =>
  new Request(URL0, {
    method: 'POST',
    headers: { ...(key === null ? {} : { 'X-Relay-Key': key }), 'Content-Type': type },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })

test('no key, wrong key or a key of another length: 401, nothing sent', async () => {
  for (const key of [null, 'wrong', ENV.BC_RELAY_KEY + 'x', ENV.BC_RELAY_KEY.slice(1)]) {
    const p = fakePush()
    const res = await handle(post({ key }), ENV, p.impl)
    assert.equal(res.status, 401)
    assert.equal(p.calls.length, 0)
  }
})

test('without its env vars the relay refuses everything', async () => {
  for (const drop of ['BC_RELAY_KEY', 'VAPID_PUBLIC', 'VAPID_PRIVATE', 'VAPID_SUBJECT']) {
    const env = { ...ENV }
    delete env[drop]
    const p = fakePush()
    const res = await handle(post(), env, p.impl)
    assert.equal(res.status, 503, drop)
    assert.equal(p.calls.length, 0)
  }
})

test('only POST, only JSON, size limits', async () => {
  const p = fakePush()
  assert.equal((await handle(new Request(URL0, { headers: { 'X-Relay-Key': ENV.BC_RELAY_KEY } }), ENV, p.impl)).status, 405)
  assert.equal((await handle(post({ type: 'text/plain' }), ENV, p.impl)).status, 415)
  assert.equal((await handle(post({ body: 'x'.repeat(9000) }), ENV, p.impl)).status, 413)
  assert.equal((await handle(post({ body: '{not json' }), ENV, p.impl)).status, 400)
  assert.equal((await handle(post({ body: { subscription: SUB, payload: { title: 'я'.repeat(3100) } } }), ENV, p.impl)).status, 413)
  assert.equal((await handle(post({ body: { subscription: SUB, payload: 'text' } }), ENV, p.impl)).status, 400)
  assert.equal(p.calls.length, 0)
})

test('only known push services (no open proxy)', async () => {
  for (const endpoint of [
    'https://evil.example.com/x', 'http://fcm.googleapis.com/fcm/send/x', 'https://fcm.googleapis.com.evil.com/x',
    'https://fcm.googleapis.com:8443/x', 'https://user@fcm.googleapis.com/x', 'https://127.0.0.1/x', 'not a url', '',
  ]) {
    const p = fakePush()
    const res = await handle(post({ body: { subscription: { ...SUB, endpoint }, payload: PAYLOAD } }), ENV, p.impl)
    assert.equal(res.status, 400, endpoint)
    assert.equal(p.calls.length, 0)
  }
  for (const ok of ['https://fcm.googleapis.com/fcm/send/a', 'https://web.push.apple.com/QQ', 'https://updates.push.services.mozilla.com/wpush/v2/x',
    'https://wns2-db5p.notify.windows.com/w/?token=x']) {
    assert.ok(knownEndpoint(ok), ok)
  }
  const p = fakePush()
  const bad = await handle(post({ body: { subscription: { ...SUB, keys: { p256dh: 'a b', auth: 'x' } }, payload: PAYLOAD } }), ENV, p.impl)
  assert.equal(bad.status, 400)
})

test('delivered: subscription, payload, VAPID details and TTL go to web-push', async () => {
  const p = fakePush()
  const res = await handle(post(), ENV, p.impl)
  assert.equal(res.status, 200)
  assert.deepEqual(await res.json(), { ok: true })
  assert.equal(p.calls.length, 1)
  const c = p.calls[0]
  assert.equal(c.sub.endpoint, SUB.endpoint)
  assert.deepEqual(JSON.parse(c.payload), PAYLOAD)
  assert.equal(c.opts.TTL, 600)
  assert.equal(c.opts.vapidDetails.publicKey, ENV.VAPID_PUBLIC)
  assert.equal(c.opts.vapidDetails.subject, ENV.VAPID_SUBJECT)
  const longTtl = fakePush()
  await handle(post({ body: { subscription: SUB, payload: PAYLOAD, ttl: 10 ** 9 } }), ENV, longTtl.impl)
  assert.equal(longTtl.calls[0].opts.TTL, 4 * 24 * 3600)
})

test('gone (404 / 410) → 410 gone; other failures → 502 without the endpoint', async () => {
  for (const code of [404, 410]) {
    const res = await handle(post(), ENV, fakePush(code).impl)
    assert.equal(res.status, 410)
    assert.equal((await res.json()).gone, true)
  }
  for (const code of [500, 429, 0]) {
    const res = await handle(post(), ENV, fakePush(code).impl)
    assert.equal(res.status, 502)
    const text = await res.text()
    assert.ok(!text.includes('fcm.googleapis.com'), text)
  }
})

test('real web-push encryption with these keys (request built, not sent)', async () => {
  let details = null
  const build = async (sub, payload, opts) => {
    details = webpush.generateRequestDetails(sub, payload, opts)
  }
  const res = await handle(post(), ENV, build)
  assert.equal(res.status, 200)
  assert.equal(details.method, 'POST')
  assert.equal(details.endpoint, SUB.endpoint)
  assert.equal(details.headers['Content-Encoding'], 'aes128gcm')
  assert.match(details.headers.Authorization, /^vapid t=.+, k=/)
  assert.ok(details.body.length > JSON.stringify(PAYLOAD).length)
})

test('keys from the CRM script gen-vapid.mjs (uncompressed point / d) are accepted by web-push', async () => {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' })
  const pub = publicKey.export({ format: 'jwk' })
  const raw = Buffer.concat([Buffer.from([4]), Buffer.from(pub.x, 'base64url'), Buffer.from(pub.y, 'base64url')])
  const env = { ...ENV, VAPID_PUBLIC: raw.toString('base64url'), VAPID_PRIVATE: privateKey.export({ format: 'jwk' }).d }
  let details = null
  const res = await handle(post(), env, async (sub, payload, opts) => {
    details = webpush.generateRequestDetails(sub, payload, opts)
  })
  assert.equal(res.status, 200)
  assert.ok(details.headers.Authorization.includes('k=' + env.VAPID_PUBLIC))
})
