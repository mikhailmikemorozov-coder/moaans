import { useState } from "react";
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

const navLinkStyle = {
  fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "2px",
  textTransform: "uppercase", color: "rgba(255,255,255,.65)",
  transition: "color .2s", textDecoration: "none",
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .shdr { padding: 0 40px; }
        .shdr-nav { display: flex; gap: 22px; align-items: center; }
        .shdr-phone { display: flex !important; }
        .shdr-cta { display: inline-flex !important; }
        .shdr-burger { display: none !important; }
        @media (max-width: 900px) {
          .shdr { padding: 0 20px !important; }
          .shdr-nav { display: none !important; }
          .shdr-phone { display: none !important; }
          .shdr-cta { display: none !important; }
          .shdr-burger { display: flex !important; }
        }
      `}</style>

      <header className="shdr" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,9,12,.96)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,107,0,.15)",
      }}>
        <a href="/"><Logo /></a>

        <nav className="shdr-nav">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} style={navLinkStyle}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.65)"}
            >{label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href={PHONE.href} className="shdr-phone" style={{
            fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700,
            color: "rgba(255,255,255,.75)", letterSpacing: 0.5, textDecoration: "none",
            alignItems: "center", gap: 6,
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
            {PHONE.label}
          </a>
          <a href="/#contact" className="shdr-cta" style={{
            alignItems: "center", padding: "10px 24px",
            background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff",
            borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 700,
            letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none",
          }}>Записаться</a>
          <button className="shdr-burger" onClick={() => setOpen(true)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: "rgba(255,255,255,.8)", padding: 8, alignItems: "center", justifyContent: "center",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 300,
          background: "rgba(8,9,12,.97)", padding: "20px 28px 40px",
          display: "flex", flexDirection: "column", overflowY: "auto",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
            <a href="/"><Logo /></a>
            <button onClick={() => setOpen(false)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,.6)", fontSize: 28, lineHeight: 1, padding: 8,
            }}>✕</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} style={{
                fontFamily: "'Nunito', sans-serif", fontSize: 28, fontWeight: 700,
                letterSpacing: 2, textTransform: "uppercase",
                color: "rgba(255,255,255,.7)", padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,.05)",
                textDecoration: "none",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.7)"}
              >{label}</a>
            ))}
          </div>
          <a href={PHONE.href} style={{
            fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700,
            color: "#ff6b00", textDecoration: "none", marginTop: 40, display: "block",
          }}>{PHONE.label}</a>
          <a href="/#contact" style={{
            display: "block", marginTop: 16, padding: "16px 0", textAlign: "center",
            background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff",
            borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
          }}>Записаться</a>
        </div>
      )}
    </>
  );
}
