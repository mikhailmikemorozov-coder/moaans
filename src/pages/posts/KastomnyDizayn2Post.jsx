import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { SiteHeader } from "../../components/SiteHeader";

const PHOTOS = [
  { src: "/custom2-11.webp", alt: "Кастомный дизайн — графит и чёрный мат, низкий ракурс", caption: "Низкий ракурс — видна вся глубина двухтонового дизайна" },
  { src: "/custom2-13.webp", alt: "Кастомный дизайн диска — графит плюс чёрный мат, прямо в лоб", caption: "Прямой ракурс — графитовые спицы на фоне чёрного хаба" },
  { src: "/custom2-02.webp", alt: "Диск с кастомной покраской — графит и чёрный, угловой снимок", caption: "Угловой вид — граница цветов идеально чёткая" },
  { src: "/custom2-07.webp", alt: "Кастомный диск графит чёрный — другой ракурс", caption: "Другой ракурс — одинаковое качество на каждой спице" },
  { src: "/custom2-10.webp", alt: "Готовый диск кастомный дизайн — анфас", caption: "Анфас — весь дизайн как на ладони" },
];

export default function KastomnyDizayn2Post() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Кастомный дизайн дисков: графит + чёрный мат — наша работа | BI Color</title>
        <meta name="description" content="Реальный результат: двухтоновая покраска дисков — графитовые спицы и чёрный матовый хаб. Пять фото комплекта под разными ракурсами. Кастомный дизайн BI Color, Москва." />
        <meta name="keywords" content="кастомный дизайн дисков, графит чёрный диски, двухтоновые диски москва, кастом диски работа" />
        <link rel="canonical" href="https://bi-color.ru/blog/kastomnyy-dizayn-grafit-chernyy" />
        <meta property="og:title" content="Кастомный дизайн: графит + чёрный мат — BI Color" />
        <meta property="og:description" content="Результат кастомной покраски: графитовые спицы, чёрный мат на хабе и межспицевых зонах, порошковый лак. Пять ракурсов." />
        <meta property="og:image" content="https://bi-color.ru/custom2-11.webp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Кастомный дизайн дисков: графит + чёрный мат",
          "datePublished": "2026-06-02",
          "dateModified": "2026-06-02",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/custom2-11.webp",
          "url": "https://bi-color.ru/blog/kastomnyy-dizayn-grafit-chernyy",
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        .article p { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.85; margin-bottom: 20px; }
        .article strong { color: rgba(255,255,255,.9); font-weight: 700; }
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
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>2 июня 2026</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Кастомный дизайн: графит + чёрный мат
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8 }}>
          Графитовые спицы и чёрный матовый хаб — двухтоновый кастом на пятиспицевых дисках. Жидкая краска дала идеально чёткую границу между зонами. Финиш — порошковый лак при 200°C.
        </p>
      </section>

      {/* PHOTO GALLERY */}
      <div style={{ padding: "0 20px" }}>
        {PHOTOS.map((photo, i) => (
          <div key={photo.src} style={{ marginBottom: i < PHOTOS.length - 1 ? 32 : 0 }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: "100%", maxWidth: 520, borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 60px rgba(0,0,0,.5)" }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1.5, textTransform: "uppercase" }}>
              {photo.caption}
            </div>
          </div>
        ))}
      </div>

      {/* PROCESS TEXT */}
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "48px 40px" }}>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", lineHeight: 1.9, textAlign: "center", margin: 0 }}>
          Порошковый грунт, затем графитовый цвет жидкой краской по всей поверхности. Межспицевые зоны и хаб замаскированы — и чёрный мат жидкой краской поверх. После снятия маскировки граница идеально чёткая. Финиш — порошковый лак в 200°C.
        </p>
      </div>

      {/* SPEC TABLE */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 0" }}>
        <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, overflow: "hidden" }}>
          {[
            ["Услуга", "Кастомный дизайн дисков"],
            ["Дизайн", "Графит + чёрный мат"],
            ["Технология", "Порошковый грунт → графит (жидкий) → маскировка + чёрный мат (жидкий) → порошковый лак"],
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
          marginTop: 48, marginBottom: 0, padding: "36px 32px",
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
