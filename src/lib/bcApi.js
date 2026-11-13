// Связь сайта с CRM BI Color. Если VITE_BC_SITE_KEY не задан — новые функции выключены.
const SITE_KEY = (import.meta.env.VITE_BC_SITE_KEY || "").trim();
const API_BASE = ((import.meta.env.VITE_BC_API || "").trim() || "https://crm.bi-color.ru").replace(/\/+$/, "");
export const CAPTCHA_KEY = (import.meta.env.VITE_SMARTCAPTCHA_KEY || "").trim();

export const bcEnabled = SITE_KEY !== "";
export const captchaEnabled = CAPTCHA_KEY !== "";

async function post(path, body) {
  const res = await fetch(`${API_BASE}/api/bc/public/${encodeURIComponent(SITE_KEY)}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let data = {};
  try { data = await res.json(); } catch { /* пустой или не-JSON ответ */ }
  return { status: res.status, ok: res.ok, data };
}

// → { ok:true } | { ok:false, error:"phone"|"captcha"|"rate"|"network"|"server" }
export async function sendLead({ name, phone, service, comment, website, captcha }) {
  if (!bcEnabled) return { ok: false, error: "disabled" };
  try {
    const r = await post("lead", { name, phone, service, comment, website: website || "", captcha: captcha || "" });
    if (r.ok && r.data.ok) return { ok: true };
    if (r.status === 429) return { ok: false, error: "rate" };
    return { ok: false, error: r.data.error || "server" };
  } catch {
    return { ok: false, error: "network" };
  }
}

// → { kind:"found", status, status_text, due_date, to_pay } | { kind:"notfound" } | { kind:"rate"|"captcha"|"network"|"server" }
export async function checkStatus({ order, phone4, captcha }) {
  try {
    const r = await post("status", { order, phone4, captcha: captcha || "" });
    if (r.status === 429) return { kind: "rate" };
    if (r.status === 400 && r.data.error === "captcha") return { kind: "captcha" };
    if (r.status === 400 && r.data.error === "input") return { kind: "input" };
    if (!r.ok) return { kind: "server" };
    if (r.data.found) return { kind: "found", ...r.data };
    return { kind: "notfound" };
  } catch {
    return { kind: "network" };
  }
}
