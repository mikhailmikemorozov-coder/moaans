import { Logo } from "./Logo";

const PHONE = { label: "+7 (965) 213-09-99", href: "tel:+79652130999" };

const NAV = [
  ["Услуги",   "/#services"],
  ["Акции",    "/#promos"],
  ["Цены",     "/tseny"],
  ["О нас",    "/#about"],
  ["Отзывы",   "/#reviews"],
  ["FAQ",      "/#faq"],
  ["Контакты", "/#contact"],
  ["Блог",     "/blog"],
];

export function SiteHeader() {
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
      padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "rgba(8,9,12,.96)", backdropFilter: "blur(24px)",
      borderBottom: "1px solid rgba(255,107,0,.15)",
    }}>
      <a href="/"><Logo /></a>

      <nav className="site-hdr-nav" style={{ display: "flex", gap: 22, alignItems: "center" }}>
        {NAV.map(([label, href]) => (
          <a key={href} href={href} style={{
            fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "2px",
            textTransform: "uppercase", color: "rgba(255,255,255,.65)",
            transition: "color .2s", textDecoration: "none",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.65)"}
          >{label}</a>
        ))}
      </nav>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <a href={PHONE.href} style={{
          fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700,
          color: "rgba(255,255,255,.75)", letterSpacing: 0.5, textDecoration: "none",
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
          {PHONE.label}
        </a>
        <a href="/#contact" style={{
          display: "inline-flex", alignItems: "center", padding: "10px 24px",
          background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff",
          borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 700,
          letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none",
        }}>Записаться</a>
      </div>
    </header>
  );
}
