import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { SiteHeader } from "../../components/SiteHeader";

export default function PolirovkaPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Полировка кузова Honda CR-Z: до и после — убираем царапины и свили | BI Color</title>
        <meta name="description" content="Реальный кейс: полировка чёрного кузова Honda CR-Z — устранение царапин, свилей и потёртостей. Фото процесса, до и после. Сервис BI Color, Москва, Внуково." />
        <meta name="keywords" content="полировка кузова москва, полировка чёрного автомобиля, устранение царапин кузова, полировка авто до после, машинная полировка кузова" />
        <link rel="canonical" href="https://bi-color.ru/blog/polirovka-kuzova-honda-crz" />
        <meta property="og:title" content="Полировка кузова Honda CR-Z: до и после — BI Color" />
        <meta property="og:description" content="Чёрный кузов весь в царапинах и свилях — после машинной полировки ни следа. Фото процесса и результата." />
        <meta property="og:image" content="https://bi-color.ru/polish-after.webp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Полировка кузова Honda CR-Z: до и после",
          "datePublished": "2026-06-05",
          "dateModified": "2026-06-05",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/polish-after.webp",
          "url": "https://bi-color.ru/blog/polirovka-kuzova-honda-crz",
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 768px) {
          .post-hero { padding: 110px 20px 40px !important; }
          .post-body { padding: 0 20px 80px !important; }
          .before-after-grid { grid-template-columns: 1fr !important; }
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
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "#ffd700", letterSpacing: 1 }}>Наши работы</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#ffd700", padding: "3px 10px", border: "1px solid #ffd70044", borderRadius: 50 }}>Наши работы</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#00d4ff", padding: "3px 10px", border: "1px solid #00d4ff44", borderRadius: 50 }}>Полировка кузова</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>5 июня 2026</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Полировка кузова Honda CR-Z: убираем царапины и свили
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8 }}>
          Чёрный кузов — самый требовательный к полировке. Каждая царапина на нём видна как на экране. Смотрим как прошёл процесс на Honda CR-Z — от мойки до зеркального финиша.
        </p>
      </section>

      {/* ПРОЦЕСС — МОЙКА */}
      <div style={{ padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 680, borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 60px rgba(0,0,0,.5)" }}>
            <img src="/polish-wash-2.webp" alt="Мойка Honda CR-Z высоким давлением перед полировкой" loading="eager" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Шаг 1 — тщательная мойка высоким давлением
        </div>
      </div>

      {/* TEXT 1 */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "36px 40px" }}>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", lineHeight: 1.9, textAlign: "center", margin: 0 }}>
          Перед полировкой — обязательная тщательная мойка. Если абразив пройдётся по грязному кузову, результат будет хуже нуля: частицы пыли и песка вотрутся в лак. Моем сами, с активной пеной и ополаскиванием.
        </p>
      </div>

      {/* ПЕНА + СУШКА */}
      <div style={{ padding: "0 20px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 680, borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 60px rgba(0,0,0,.5)" }}>
            <img src="/polish-foam.webp" alt="Нанесение активной пены на Honda CR-Z" loading="lazy" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Активная пена — поднимает загрязнения перед смывкой
        </div>
      </div>

      {/* ВИДЕО */}
      <div style={{ padding: "0 20px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          {["/polish-video-1.mp4", "/polish-video-2.mp4"].map((src, i) => (
            <div key={src} style={{ width: "100%", maxWidth: 340, aspectRatio: "9/16", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 60px rgba(255,215,0,.15)" }}>
              <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Процесс мойки и подготовки
        </div>
      </div>

      {/* ПОЛИРОВКА В БОКСЕ */}
      <div style={{ padding: "0 20px 32px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 680, borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 60px rgba(0,0,0,.5)" }}>
            <img src="/polish-hand-1.webp" alt="Полировка кузова Honda CR-Z в боксе" loading="lazy" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>
          Шаг 2 — полировка в закрытом боксе без пыли
        </div>
      </div>

      {/* TEXT 2 */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "0 40px 36px" }}>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", lineHeight: 1.9, textAlign: "center", margin: 0 }}>
          После мойки — машина заезжает в закрытый бокс. Машинная полировка абразивными пастами снимает тончайший слой лака вместе с царапинами и свилями. Финиш — ручная доработка и защитный состав.
        </p>
      </div>

      {/* ДО / ПОСЛЕ */}
      <div style={{ padding: "0 20px 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,.8)", letterSpacing: 1 }}>Результат</div>
        </div>
        <div className="before-after-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 900, margin: "0 auto" }}>
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="/polish-before-1.webp" alt="Кузов до полировки — царапины и свили" loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>До — царапины и свили</div>
          </div>
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="/polish-after.webp" alt="Кузов после полировки — зеркальная поверхность" loading="lazy" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>После — зеркало</div>
          </div>
        </div>
      </div>

      {/* SPEC TABLE */}
      <article className="post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "40px 40px 0" }}>
        <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, overflow: "hidden" }}>
          {[
            ["Автомобиль", "Honda CR-Z"],
            ["Цвет кузова", "Чёрный"],
            ["Услуга", "Полировка кузова"],
            ["Процесс", "Мойка + машинная полировка абразивом + ручная доработка + защитный состав"],
            ["Срок выполнения", "1 день"],
            ["Стоимость", "По запросу"],
          ].map(([k, v], i) => (
            <div key={k} style={{ display: "flex", padding: "14px 20px", borderBottom: i < 5 ? "1px solid rgba(255,255,255,.05)" : "none" }}>
              <div style={{ width: "45%", fontSize: 14, color: "rgba(255,255,255,.35)", fontFamily: "'Rajdhani'", fontWeight: 600, letterSpacing: .5 }}>{k}</div>
              <div style={{ flex: 1, fontSize: 14, color: "rgba(255,255,255,.75)" }}>{v}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 48, padding: "36px 32px",
          background: "linear-gradient(135deg, rgba(255,215,0,.08), rgba(0,212,255,.06))",
          border: "1px solid rgba(255,215,0,.2)", borderRadius: 20,
        }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Хотите такой же результат?
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Позвоните или приезжайте — оценим состояние кузова и скажем что можно сделать. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+79652130999" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#ffd700,#ff6b00)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              +7 (965) 213-09-99
            </a>
            <Link to="/polirovka-kuzova-moskva" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,215,0,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              Полировка кузова →
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
