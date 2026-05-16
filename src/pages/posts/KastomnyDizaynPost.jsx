import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { SiteHeader } from "../../components/SiteHeader";

export default function KastomnyDizaynPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Кастомный дизайн дисков: чёрный + алюмохром — кейс BI Color | Москва</title>
        <meta name="description" content="Реальный кейс: двухтоновая покраска дисков — порошковый грунт, алюмохром жидкой краской, маскировка, чёрный жидкой краской, порошковый лак. Фото до и после, видео результата. BI Color, Москва." />
        <meta name="keywords" content="кастомный дизайн дисков, двухтоновые диски до после, алюмохром чёрный диски, кастом диски москва, кейс покраска дисков" />
        <link rel="canonical" href="https://bi-color.ru/blog/kastomnyy-dizayn-diskov" />
        <meta property="og:title" content="Кастомный дизайн дисков: чёрный + алюмохром — BI Color" />
        <meta property="og:description" content="Кейс: четыре слоя работы — грунт, алюмохром, маскировка + чёрный, лак. Фото и видео результата." />
        <meta property="og:image" content="https://bi-color.ru/custom-after.webp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Кастомный дизайн дисков: чёрный + алюмохром",
          "datePublished": "2026-05-16",
          "dateModified": "2026-05-16",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/custom-after.webp",
          "url": "https://bi-color.ru/blog/kastomnyy-dizayn-diskov",
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        .article p { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.85; margin-bottom: 20px; }
        .article strong { color: rgba(255,255,255,.9); font-weight: 700; }
        .article a { color: #bf00ff; text-decoration: underline; text-underline-offset: 3px; }
        @media (max-width: 768px) {
          .post-hero { padding: 110px 20px 40px !important; }
          .post-body { padding: 0 20px 80px !important; }
        }
      `}</style>

      <SiteHeader />

      {/* BREADCRUMB + META */}
      <section className="post-hero" style={{ padding: "130px 40px 40px", maxWidth: 780, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <Link to="/blog" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Блог</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "#bf00ff", letterSpacing: 1 }}>Наши работы</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#bf00ff", padding: "3px 10px", border: "1px solid #bf00ff44", borderRadius: 50 }}>Наши работы</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#ff6b00", padding: "3px 10px", border: "1px solid #ff6b0044", borderRadius: 50 }}>Кастомный дизайн</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>16 мая 2026</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Кастомный дизайн дисков: чёрный + алюмохром
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8 }}>
          Четыре слоя работы на каждом диске: порошковый грунт, алюмохром жидкой краской, маскировка и чёрный жидкой краской, финишный порошковый лак. Результат — двухтоновый комплект, которого нет больше ни у кого.
        </p>
      </section>

      {/* БЫЛО */}
      <div style={{ padding: "0 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 500, borderRadius: 20, overflow: "hidden" }}>
            <img
              src="/custom-before.webp"
              alt="Диск в процессе работы — алюмохром нанесён, зоны замаскированы лентой"
              loading="eager"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Было — алюмохром нанесён, маскировка на месте
        </div>
      </div>

      {/* PROCESS TEXT */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "36px 40px" }}>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", lineHeight: 1.9, textAlign: "center", margin: 0 }}>
          Порошковый грунт, алюмохром жидкой краской, маскировка спиц — и чёрный жидкой краской поверх. После снятия маскировки граница чёткая. Финиш — порошковый лак при 200°C.
        </p>
      </div>

      {/* СТАЛО */}
      <div style={{ padding: "0 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 500, borderRadius: 20, overflow: "hidden" }}>
            <img
              src="/custom-after.webp"
              alt="Готовый диск — чёрный глянец и алюмохром на спицах"
              loading="lazy"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Стало — чёрный глянец + алюмохром, финишный порошковый лак
        </div>
      </div>

      {/* VIDEO */}
      <div style={{ padding: "48px 0 0" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "0 20px" }}>
          <div style={{ width: "100%", maxWidth: 420, aspectRatio: "9/16", borderRadius: 24, overflow: "hidden", boxShadow: "0 0 120px rgba(191,0,255,.3)" }}>
            <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
              <source src="/custom-design.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "28px 40px 0", textAlign: "center" }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
            Готовый комплект — уникальный дизайн
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,.5)", lineHeight: 1.85, marginBottom: 24, maxWidth: 520, margin: "0 auto 24px" }}>
            Все четыре диска покрашены в одной партии — цвет одинаковый, граница алюмохром/чёрный на каждом диске стоит на одних и тех же спицах.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 48 }}>
            {[["4", "слоя нанесения"], ["3–5 дн.", "срок на комплект"], ["4 года", "гарантия"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 30, fontWeight: 700, color: "#bf00ff" }}>{v}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,.2)" }}>
            Видео готового комплекта — сервис BI Color, Москва, Внуково
          </div>
        </div>
      </div>

      {/* SPEC TABLE */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "40px 40px 0" }}>
        <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, overflow: "hidden" }}>
          {[
            ["Услуга", "Кастомный дизайн дисков"],
            ["Дизайн", "Алюмохром + чёрный глянец"],
            ["Технология", "Порошковый грунт → алюмохром (жидкий) → маскировка + чёрный (жидкий) → порошковый лак"],
            ["Этапов нанесения", "4"],
            ["Срок выполнения", "3–5 рабочих дней"],
            ["Гарантия", "4 года"],
            ["Стоимость", "По запросу"],
          ].map(([k, v], i) => (
            <div key={k} style={{ display: "flex", padding: "14px 20px", borderBottom: i < 6 ? "1px solid rgba(255,255,255,.05)" : "none" }}>
              <div style={{ width: "45%", fontSize: 14, color: "rgba(255,255,255,.35)", fontFamily: "'Rajdhani'", fontWeight: 600, letterSpacing: .5 }}>{k}</div>
              <div style={{ flex: 1, fontSize: 14, color: "rgba(255,255,255,.75)" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 48, padding: "36px 32px",
          background: "linear-gradient(135deg, rgba(191,0,255,.08), rgba(255,0,128,.06))",
          border: "1px solid rgba(191,0,255,.2)", borderRadius: 20,
        }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Хотите уникальный дизайн для своих дисков?
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Расскажите идею или принесите референс — согласуем дизайн до начала работ. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+79652130999" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#bf00ff,#ff0080)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              +7 (965) 213-09-99
            </a>
            <Link to="/kastomnyy-dizayn-diskov" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(191,0,255,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              Кастомный дизайн →
            </Link>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer style={{ marginTop: 80, background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)", padding: "28px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link to="/"><Logo /></Link>
          <Link to="/blog" style={{ fontFamily: "'Rajdhani'", fontSize: 14, color: "rgba(255,255,255,.3)", letterSpacing: 1 }}>← Все статьи</Link>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>© 2026 BI Color · bi-color.ru</div>
        </div>
      </footer>
    </div>
  );
}
