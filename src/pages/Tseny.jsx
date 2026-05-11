import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

const PHONES = [
  { label: "+7 (499) 136-55-00", href: "tel:+74991365500" },
  { label: "+7 (925) 110-10-52", href: "tel:+79251101052" },
];

const PRICE_SECTIONS = [
  {
    id: "pokraska",
    title: "Покраска дисков",
    color: "#ff6b00",
    icon: "🎨",
    href: "/pokraska-diskov-moskva",
    note: "Скидка 15% при сдаче комплекта 4 дисков",
    items: [
      { name: "1 диск R13–R16", price: "2 750 ₽" },
      { name: "1 диск R17–R18", price: "3 250 ₽" },
      { name: "1 диск R19 и выше", price: "3 500 ₽" },
      { name: "Комплект 4 диска R13–R16", price: "11 000 ₽" },
      { name: "Комплект 4 диска R17–R18", price: "13 000 ₽" },
    ],
  },
  {
    id: "prochka",
    title: "Алмазная проточка",
    color: "#00d4ff",
    icon: "💎",
    href: "/almaznaya-prochka-diskov",
    note: "Только для литых алюминиевых дисков",
    items: [
      { name: "1 диск (алмазная проточка)", price: "5 000 ₽" },
      { name: "Проточка + покраска обода (1 диск)", price: "7 500 ₽" },
    ],
  },
  {
    id: "remont",
    title: "Ремонт и восстановление",
    color: "#ff0080",
    icon: "🔧",
    href: "/remont-diskov-moskva",
    note: "Бесплатная диагностика ремонтопригодности",
    items: [
      { name: "Правка геометрии (1 диск)", price: "от 1 500 ₽" },
      { name: "Ремонт — Димет / сварка TIG (1 диск)", price: "от 2 500 ₽" },
    ],
  },
  {
    id: "supporty",
    title: "Покраска суппортов",
    color: "#39ff14",
    icon: "🏎️",
    href: "/pokraska-supportov-moskva",
    note: "Термостойкая краска до 300°C",
    items: [
      { name: "1 суппорт", price: "2 000 ₽" },
      { name: "Комплект 4 суппорта", price: "8 000 ₽" },
    ],
  },
];

export default function Tseny() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Прайс-лист — цены на покраску и ремонт дисков в Москве | BI Color</title>
        <meta name="description" content="Цены на покраску дисков, алмазную проточку, ремонт и восстановление, покраску суппортов в Москве. BI Color, Внуково. +7 (499) 136-55-00" />
        <link rel="canonical" href="https://bi-color.ru/tseny" />
        <meta property="og:title" content="Прайс-лист — BI Color" />
        <meta property="og:description" content="Цены на все услуги: покраска дисков, алмазная проточка, ремонт, суппорты." />
        <meta property="og:image" content="https://bi-color.ru/og-image.png" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 768px) {
          .tseny-grid { grid-template-columns: 1fr !important; }
          .tseny-header { padding: 0 20px !important; }
          .tseny-hero { padding: 110px 20px 60px !important; }
          .tseny-main { padding: 40px 20px 80px !important; }
        }
      `}</style>

      {/* HEADER */}
      <header className="tseny-header" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
        padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,9,12,.96)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,107,0,.15)",
      }}>
        <Link to="/"><Logo /></Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href={PHONES[0].href} style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.75)" }}>
            {PHONES[0].label}
          </a>
          <a href="/#contact" style={{
            display: "inline-flex", alignItems: "center", padding: "10px 24px",
            background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff",
            borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 700,
            letterSpacing: 1.5, textTransform: "uppercase",
          }}>Записаться</a>
        </div>
      </header>

      {/* HERO */}
      <section className="tseny-hero" style={{ padding: "130px 40px 60px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,107,0,.7)", letterSpacing: 1 }}>Прайс-лист</span>
        </div>
        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1, letterSpacing: 1, marginBottom: 20 }}>
          Цены на{" "}
          <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            все услуги
          </span>
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,.45)", lineHeight: 1.75, maxWidth: 560 }}>
          Финальная стоимость уточняется после осмотра. Бесплатная диагностика — без записи.
        </p>
      </section>

      {/* PRICE SECTIONS */}
      <main className="tseny-main" style={{ padding: "0 40px 100px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {PRICE_SECTIONS.map((section) => (
            <div key={section.id} style={{
              background: "rgba(255,255,255,.03)",
              border: `1px solid ${section.color}22`,
              borderRadius: 24, overflow: "hidden",
            }}>
              {/* Section header */}
              <div style={{
                padding: "24px 32px",
                background: `${section.color}0a`,
                borderBottom: `1px solid ${section.color}18`,
                display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ fontSize: 32 }}>{section.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Rajdhani'", fontSize: 24, fontWeight: 700 }}>{section.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.35)", marginTop: 2 }}>{section.note}</div>
                  </div>
                </div>
                <Link to={section.href} style={{
                  fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 600,
                  color: section.color, letterSpacing: 1,
                }}>
                  Подробнее →
                </Link>
              </div>
              {/* Price rows */}
              <div>
                {section.items.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "18px 32px",
                    borderBottom: i < section.items.length - 1 ? "1px solid rgba(255,255,255,.05)" : "none",
                  }}>
                    <span style={{ fontSize: 15, color: "rgba(255,255,255,.7)" }}>{item.name}</span>
                    <span style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, color: section.color, flexShrink: 0, marginLeft: 20 }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 48, padding: "28px 32px",
          background: "rgba(57,255,20,.05)", border: "1px solid rgba(57,255,20,.2)",
          borderRadius: 20, display: "flex", gap: 20, alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 28, flexShrink: 0 }}>💬</span>
          <div>
            <div style={{ fontFamily: "'Rajdhani'", fontSize: 18, fontWeight: 700, marginBottom: 6 }}>Точная цена — после осмотра</div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}>
              Звоните или приезжайте без записи — бесплатно оценим состояние дисков и назовём финальную стоимость работ.
              Ежедневно 10:00–19:00. Москва, пос. Внуково, Центральная ул., 18с2.
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
              {PHONES.map(p => (
                <a key={p.href} href={p.href} style={{
                  fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, color: "#39ff14",
                }}>
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)", padding: "32px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <Link to="/"><Logo /></Link>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>© 2025 BI Color · bi-color.ru</div>
        </div>
      </footer>
    </div>
  );
}
