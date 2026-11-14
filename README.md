# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## BI Color: связь с CRM
Заявки в CRM, «Статус заказа» и SmartCaptcha включаются переменными `VITE_BC_SITE_KEY`, `VITE_BC_API`, `VITE_SMARTCAPTCHA_KEY`.
Подробно — [docs/crm-site.md](docs/crm-site.md).

## BI Color: посредники для сервера CRM (`api/`)
- `api/tg.js` — Telegram Bot API (env `TELEGRAM_BOT_TOKEN`, `BC_RELAY_KEY`), тест `node scripts/tg-relay.test.mjs`.
- `api/push.js` — Web Push в браузеры сотрудников: сервер присылает подписку и короткий текст без персональных данных, функция шифрует (пакет `web-push`, VAPID) и отправляет в Chrome / Firefox / Safari. Env: `BC_RELAY_KEY` (тот же), `VAPID_PUBLIC`, `VAPID_PRIVATE`, `VAPID_SUBJECT` (из `~/.bicolor/vapid.env`, см. server/DEPLOY.md CRM «Notifications and Web Push»). Без них отвечает 503. Тест `node scripts/push-relay.test.mjs`.
