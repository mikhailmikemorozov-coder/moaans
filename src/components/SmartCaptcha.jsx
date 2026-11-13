import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { CAPTCHA_KEY, captchaEnabled } from "../lib/bcApi";

// Ленивая загрузка Yandex SmartCaptcha — скрипт подключается только когда виджет впервые нужен.
let loader = null;
function loadSmartCaptcha() {
  if (window.smartCaptcha) return Promise.resolve(window.smartCaptcha);
  if (loader) return loader;
  loader = new Promise((resolve, reject) => {
    window.__bcSmartCaptchaOnload = () => resolve(window.smartCaptcha);
    const s = document.createElement("script");
    s.src = "https://smartcaptcha.yandexcloud.net/captcha.js?render=onload&onload=__bcSmartCaptchaOnload";
    s.async = true;
    s.defer = true;
    s.onerror = () => { loader = null; reject(new Error("captcha load failed")); };
    document.head.appendChild(s);
  });
  return loader;
}

// Виджет SmartCaptcha. onToken(token) вызывается при прохождении проверки и с "" при сбросе.
// ref.reset() — сбросить виджет (токен одноразовый, сбрасываем после каждой отправки).
const SmartCaptcha = forwardRef(function SmartCaptcha({ onToken }, ref) {
  const box = useRef(null);
  const widgetId = useRef(null);
  const cb = useRef(onToken);
  useEffect(() => { cb.current = onToken; }, [onToken]);

  useImperativeHandle(ref, () => ({
    reset() {
      cb.current?.("");
      if (widgetId.current != null && window.smartCaptcha) window.smartCaptcha.reset(widgetId.current);
    },
  }), []);

  useEffect(() => {
    if (!captchaEnabled) return;
    let alive = true;
    loadSmartCaptcha().then((sc) => {
      if (!alive || !box.current || widgetId.current != null) return;
      widgetId.current = sc.render(box.current, {
        sitekey: CAPTCHA_KEY,
        hl: "ru",
        callback: (token) => cb.current?.(token || ""),
      });
    }).catch(() => { /* капча не загрузилась — отправим пустой токен, сервер решит */ });
    return () => {
      alive = false;
      if (widgetId.current != null && window.smartCaptcha?.destroy) {
        try { window.smartCaptcha.destroy(widgetId.current); } catch { /* ignore */ }
      }
      widgetId.current = null;
    };
  }, []);

  if (!captchaEnabled) return null;
  return <div ref={box} style={{ minHeight: 102 }} />;
});

export default SmartCaptcha;
