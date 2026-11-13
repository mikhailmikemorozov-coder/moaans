import { useRef, useState } from "react";
import { checkStatus } from "../lib/bcApi";
import SmartCaptcha from "./SmartCaptcha";

const label = { fontSize: 13, color: "rgba(255,255,255,.4)", display: "block", marginBottom: 8, letterSpacing: .5 };

function fmtDue(d) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d || "");
  return m ? `${m[3]}.${m[2]}` : "";
}

function isReady(r) {
  return /ready|done|готов/i.test(`${r.status || ""} ${r.status_text || ""}`);
}

const MESSAGES = {
  notfound: "Заказ не найден. Проверьте номер заказа и телефон.",
  rate: "Слишком много попыток, попробуйте через 10 минут.",
  captcha: "Подтвердите, что вы не робот, и попробуйте ещё раз.",
  network: "Не удалось связаться с сервером. Проверьте интернет и попробуйте ещё раз.",
  server: "Сервис временно недоступен. Попробуйте позже или позвоните нам.",
};

// Модальное окно «Узнать статус заказа». Показывается только при включённом VITE_BC_SITE_KEY.
export default function OrderStatusModal({ onClose }) {
  const [order, setOrder] = useState("");
  const [phone4, setPhone4] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const captchaRef = useRef(null);

  const canSubmit = order.trim() !== "" && phone4.length === 4 && !loading;

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setResult(null);
    const r = await checkStatus({ order: order.trim(), phone4, captcha });
    captchaRef.current?.reset();
    setResult(r);
    setLoading(false);
  };

  const toPay = result?.kind === "found" ? Number(result.to_pay) || 0 : 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 480, width: "100%", padding: "28px 24px", maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 24, fontWeight: 700, letterSpacing: 1 }}>Статус заказа</div>
          <button onClick={onClose} aria-label="Закрыть" style={{ background: "none", border: "none", color: "rgba(255,255,255,.4)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>✕</button>
        </div>

        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <label style={label} htmlFor="bc-order">Номер заказа</label>
            <input id="bc-order" className="input-field" value={order} onChange={e => setOrder(e.target.value.slice(0, 32))}
              placeholder="Например, 1024" autoComplete="off" inputMode="numeric" />
          </div>
          <div>
            <label style={label} htmlFor="bc-phone4">Последние 4 цифры телефона</label>
            <input id="bc-phone4" className="input-field" value={phone4} onChange={e => setPhone4(e.target.value.replace(/\D/g, "").slice(-4))}
              placeholder="XXXX" autoComplete="off" inputMode="numeric" />
          </div>
          <SmartCaptcha ref={captchaRef} onToken={setCaptcha} />
          <button type="submit" className="btn btn-grad" disabled={!canSubmit}
            style={{ width: "100%", justifyContent: "center", padding: "16px", opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? "pointer" : "not-allowed" }}>
            {loading ? "Проверяем…" : "Проверить"}
          </button>
        </form>

        {result && result.kind === "found" && (
          <div style={{ marginTop: 20, padding: "20px", borderRadius: 16, background: "rgba(255,107,0,.07)", border: "1px solid rgba(255,107,0,.25)" }}>
            <div className="grad-text" style={{ fontFamily: "'Rajdhani'", fontSize: 30, fontWeight: 700, lineHeight: 1.1, marginBottom: 10 }}>
              {result.status_text || "Заказ в работе"}
            </div>
            {fmtDue(result.due_date) && (
              <div style={{ fontSize: 16, color: "rgba(255,255,255,.75)", marginBottom: 4 }}>Срок: {fmtDue(result.due_date)}</div>
            )}
            <div style={{ fontSize: 16, color: toPay > 0 ? "#fff" : "#39ff14", fontWeight: 700 }}>
              {toPay > 0 ? `К оплате: ${toPay.toLocaleString("ru-RU")} ₽` : "Оплачено"}
            </div>
            {isReady(result) && (
              <div style={{ marginTop: 14, fontSize: 14, color: "rgba(255,255,255,.6)", lineHeight: 1.6 }}>
                Забрать можно по адресу: г. Москва, пос. Внуково, Центральная ул., 18с2<br />
                Ежедневно с 10:00 до 19:00
              </div>
            )}
          </div>
        )}

        {result && result.kind !== "found" && (
          <div role="alert" style={{ marginTop: 20, padding: "16px 18px", borderRadius: 14, background: "rgba(255,85,85,.08)", border: "1px solid rgba(255,85,85,.25)", color: "#ff9a9a", fontSize: 15, lineHeight: 1.5 }}>
            {MESSAGES[result.kind] || MESSAGES.server}
          </div>
        )}

        <p style={{ marginTop: 18, fontSize: 13, color: "rgba(255,255,255,.35)", lineHeight: 1.6 }}>
          Номер заказа указан в квитанции. Вопросы — по телефону <a href="tel:+79652130999" style={{ color: "rgba(255,255,255,.6)" }}>+7 (965) 213-09-99</a>.
        </p>
      </div>
    </div>
  );
}
