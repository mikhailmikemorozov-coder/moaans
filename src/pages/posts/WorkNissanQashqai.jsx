import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { SiteHeader } from "../../components/SiteHeader";

const PHONES = [{ label: "+7 (925) 110-10-52", href: "tel:+79251101052" }];

export default function WorkNissanQashqaiPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Покраска дисков Nissan: до и после — кейс BI Color | Москва</title>
        <meta name="description" content="Реальный кейс: покраска четырёх дисков Nissan в алюмохром цвет. Фото до и после, видео результата. Сервис BI Color, Москва, Внуково." />
        <meta name="keywords" content="покраска дисков Nissan, покраска дисков до после, покраска литых дисков серебристый, порошковая покраска дисков москва" />
        <link rel="canonical" href="https://bi-color.ru/blog/pokraska-diskov-nissan" />
        <meta property="og:title" content="Покраска дисков Nissan: до и после — BI Color" />
        <meta property="og:description" content="Кейс: четыре диска Nissan — покраска в алюмохром. Фото и видео результата." />
        <meta property="og:image" content="https://bi-color.ru/work-nissan-compare.webp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Покраска дисков Nissan: до и после",
          "datePublished": "2026-05-14",
          "dateModified": "2026-05-14",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/work-nissan-compare.webp",
          "url": "https://bi-color.ru/blog/pokraska-diskov-nissan",
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        .article p { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.85; margin-bottom: 20px; }
        .article strong { color: rgba(255,255,255,.9); font-weight: 700; }
        .article a { color: #ff6b00; text-decoration: underline; text-underline-offset: 3px; }
        @media (max-width: 768px) {
          .post-hero { padding: 110px 20px 40px !important; }
          .post-body { padding: 0 20px 80px !important; }
          .site-hdr-nav { display: none !important; }
          .ba-grid { grid-template-columns: 1fr !important; }
          .video-row { flex-direction: column !important; }
          .video-row .v-wrap { width: 100% !important; max-width: 320px !important; margin: 0 auto !important; }
        }
      `}</style>

      {/* HEADER */}
      <SiteHeader />

      {/* BREADCRUMB + META */}
      <section className="post-hero" style={{ padding: "130px 40px 40px", maxWidth: 780, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <Link to="/blog" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Блог</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "#f0b429", letterSpacing: 1 }}>Наши работы</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#f0b429", padding: "3px 10px", border: "1px solid #f0b42944", borderRadius: 50 }}>Наши работы</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#ff6b00", padding: "3px 10px", border: "1px solid #ff6b0044", borderRadius: 50 }}>Покраска дисков</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>14 мая 2026</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Покраска дисков Nissan: до и после
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8 }}>
          Комплект из четырёх дисков R17 — потёртый заводской серебристый превратился в свежий алюмохром. Фото, сплит-сравнение и видео результата.
        </p>
      </section>

      {/* COMPARE IMAGE */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 16px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden" }}>
          <img
            src="/work-nissan-compare.webp"
            alt="Покраска дисков Nissan — до и после сравнение"
            loading="eager"
            style={{ width: "100%", display: "block" }}
          />
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
          Сплит до / после — диск Nissan R17, алюмохром цвет
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "32px 40px 0" }}>
        <p>
          Клиент привёз четыре диска Nissan R17 — заводской серебристый потускнел, появились потёртости и пятна от реагентов. Задача: восстановить внешний вид, сохранив оригинальный металлический характер цвета.
        </p>
        <p>
          Технология — трёхэтапная. <strong>Порошковый грунт</strong> создаёт адгезионную основу и защищает металл. Затем наносится <strong>алюмохром жидким способом</strong> — это не порошок, а жидкая краска, которую распыляют как лак: только она даёт тот самый холодный металлический блеск с алюминиевым отливом, которого не добиться порошком. Финиш — <strong>порошковый прозрачный лак</strong>, он запечатывает покрытие и даёт твёрдость.
        </p>
      </article>

      {/* BEFORE / AFTER GRID */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "24px 40px 0" }}>
        <div className="ba-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "1/1" }}>
              <img src="/work-nissan-before.webp" alt="Диск Nissan до покраски — потёртый серебристый"
                loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,.3)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1 }}>ДО</div>
          </div>
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "1/1" }}>
              <img src="/work-nissan-after.webp" alt="Диск Nissan после покраски — свежий алюмохром"
                loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,.3)", textAlign: "center", fontFamily: "'Rajdhani'", letterSpacing: 1 }}>ПОСЛЕ</div>
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 40px 0" }}>
        <div className="video-row" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          <div className="v-wrap" style={{ flexShrink: 0, width: 240, aspectRatio: "9/16", borderRadius: 18, overflow: "hidden", boxShadow: "0 0 60px rgba(255,107,0,.12)" }}>
            <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
              <source src="/work-nissan-result.mp4" type="video/mp4" />
            </video>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 14, lineHeight: 1.2 }}>
              Результат — комплект готов к установке
            </div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.5)", lineHeight: 1.85, marginBottom: 20 }}>
              Все четыре диска покрашены в одной партии — цвет одинаковый на каждом. После покраски — новые вентили, балансировка на стенде.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {[["R17", "размер дисков"], ["3 слоя", "грунт + цвет + лак"], ["4 года", "гарантия"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 26, fontWeight: 700, color: "#ff6b00" }}>{v}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
          Видео готового комплекта — сервис BI Color, Москва, Внуково
        </div>
      </div>

      {/* SPEC TABLE */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "40px 40px 0" }}>
        <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, overflow: "hidden" }}>
          {[
            ["Автомобиль", "Nissan"],
            ["Диски", "R17, литые, заводской дизайн"],
            ["Услуга", "Покраска дисков"],
            ["Цвет", "Алюмохром"],
            ["Технология", "Порошковый грунт → алюмохром (жидкий) → порошковый лак"],
            ["Срок выполнения", "1 день"],
            ["Гарантия", "4 года"],
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
          background: "linear-gradient(135deg, rgba(255,107,0,.08), rgba(255,0,128,.06))",
          border: "1px solid rgba(255,107,0,.2)", borderRadius: 20,
        }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Хотите также для своих дисков?
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Привозите — сделаем бесплатную диагностику и назовём точную цену. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+79251101052" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              +7 (925) 110-10-52
            </a>
            <Link to="/pokraska-diskov-moskva" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,107,0,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              Покраска дисков →
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
