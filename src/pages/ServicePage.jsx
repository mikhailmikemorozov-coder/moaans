import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

const PHONES = [
  { label: "+7 (499) 136-55-00", href: "tel:+74991365500" },
  { label: "+7 (925) 110-10-52", href: "tel:+79251101052" },
];

const GUARANTEE_ITEMS = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, text: "Гарантия 4 года" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, text: "Бесплатная диагностика" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "Срок 1–2 дня" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>, text: "Фото-отчёт" },
];

export default function ServicePage({ meta, color = "#ff6b00", h1, h1Accent, intro, price, benefits, faqItems, gallery, relatedServices }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={`https://bi-color.ru${meta.path}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://bi-color.ru${meta.path}`} />
        <meta property="og:image" content={`https://bi-color.ru${meta.ogImage || "/og-image.png"}`} />
        {faqItems?.length > 0 && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a },
            })),
          })}</script>
        )}
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;900&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        .sp-grad { background: linear-gradient(135deg,#ff6b00,#ff0080); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .sp-btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:14px 32px; border:none; border-radius:50px; font-family:'Rajdhani',sans-serif; font-size:16px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; cursor:pointer; transition:all .25s; text-decoration:none; }
        .sp-btn-grad { background:linear-gradient(135deg,#ff6b00,#ff0080); color:#fff; box-shadow:0 6px 28px rgba(255,107,0,.35); }
        .sp-btn-grad:hover { transform:translateY(-2px); box-shadow:0 12px 40px rgba(255,107,0,.5); }
        .sp-btn-outline { background:transparent; color:#fff; border:1.5px solid rgba(255,107,0,.5); }
        .sp-btn-outline:hover { background:rgba(255,107,0,.1); border-color:#ff6b00; }
        @media (max-width:768px) {
          .sp-hero { padding:100px 20px 60px !important; }
          .sp-section { padding:60px 20px !important; }
          .sp-header { padding:0 20px !important; }
          .sp-benefits { grid-template-columns:1fr !important; }
          .sp-btns { flex-direction:column; }
          .sp-footer-inner { flex-direction:column; align-items:flex-start !important; gap:16px !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header className="sp-header" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
        padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,9,12,.96)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,107,0,.15)",
      }}>
        <Link to="/"><Logo /></Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href={PHONES[0].href} style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.75)", letterSpacing: 0.5, display: "flex", alignItems: "center", gap: 6 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
            {PHONES[0].label}
          </a>
          <a href="/#contact" className="sp-btn sp-btn-grad" style={{ padding: "10px 24px", fontSize: 14 }}>Записаться</a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="sp-hero" style={{ padding: "130px 40px 80px", maxWidth: 1200, margin: "0 auto", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", width: "40vw", maxWidth: 480, height: "40vw", maxHeight: 480, opacity: 0.06, pointerEvents: "none" }}>
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="4"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="2"/>
            {[0,72,144,216,288].map((deg,i) => {
              const r = deg * Math.PI / 180; return <line key={i} x1="50" y1="50" x2={50+Math.cos(r)*44} y2={50+Math.sin(r)*44} stroke={color} strokeWidth="3"/>;
            })}
            <circle cx="50" cy="50" r="8" fill={color}/>
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
            <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
            <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,107,0,.7)", letterSpacing: 1 }}>{h1Accent ? `${h1} ${h1Accent}` : h1}</span>
          </div>
          <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1, letterSpacing: 1, marginBottom: 28 }}>
            {h1}{" "}
            {h1Accent && <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{h1Accent}</span>}
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 560, marginBottom: 40 }}>{intro}</p>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: "'Rajdhani'", fontSize: 52, fontWeight: 700, color, lineHeight: 1, marginBottom: 6 }}>{price}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)" }}>Финальная цена после осмотра · Бесплатная диагностика</div>
          </div>
          <div className="sp-btns" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={PHONES[0].href} className="sp-btn sp-btn-grad">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>
              Позвонить
            </a>
            <a href="/#contact" className="sp-btn sp-btn-outline">Оставить заявку</a>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="sp-section" style={{ padding: "80px 40px", background: "rgba(255,255,255,.015)", borderTop: "1px solid rgba(255,255,255,.06)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#ff6b00", marginBottom: 12 }}>Что вы получаете</p>
          <h2 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, marginBottom: 48 }}>Преимущества нашего <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>сервиса</span></h2>
          <div className="sp-benefits" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.04)", border: `1px solid ${color}22`, borderRadius: 20, padding: "28px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${color}15`, border: `1px solid ${color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{b.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Rajdhani'", fontSize: 19, fontWeight: 700, marginBottom: 8, letterSpacing: .3 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="sp-section" style={{ padding: "48px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {GUARANTEE_ITEMS.map((g, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 20px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,107,0,.12)", borderRadius: 14 }}>
              <span style={{ fontSize: 22 }}>{g.icon}</span>
              <span style={{ fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,.7)" }}>{g.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      {gallery?.length > 0 && (
        <section className="sp-section" style={{ padding: "80px 40px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#ff6b00", marginBottom: 12 }}>Наши работы</p>
            <h2 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, marginBottom: 40 }}>
              Примеры <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>выполненных заказов</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
              {gallery.map((item, i) => (
                <div key={i} style={{ borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                  <img src={item.src} alt={item.alt || "Работа BI Color"} loading="lazy"
                    style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
                  {item.caption && (
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 16px 14px", background: "linear-gradient(transparent,rgba(0,0,0,.7))", fontSize: 13, color: "rgba(255,255,255,.8)" }}>
                      {item.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED SERVICES ── */}
      {relatedServices?.length > 0 && (
        <section className="sp-section" style={{ padding: "80px 40px", background: "rgba(255,255,255,.015)", borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#ff6b00", marginBottom: 12 }}>Также у нас</p>
            <h2 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, marginBottom: 40 }}>
              Другие <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>услуги</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {relatedServices.map((s, i) => (
                <Link key={i} to={s.href} style={{
                  display: "block", padding: "28px 24px", borderRadius: 20,
                  background: `${s.color}08`, border: `1px solid ${s.color}22`,
                  transition: "all .25s", textDecoration: "none",
                }}>
                  <div style={{ marginBottom: 14, color: s.color }}>{s.icon}</div>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</div>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, color: s.color }}>{s.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {faqItems?.length > 0 && (
        <section className="sp-section" style={{ padding: "80px 40px", maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#ff6b00", marginBottom: 12 }}>FAQ</p>
          <h2 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.05, marginBottom: 40 }}>Частые вопросы</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ border: `1px solid ${openFaq === i ? "rgba(255,107,0,.35)" : "rgba(255,255,255,.08)"}`, borderRadius: 16, overflow: "hidden", transition: "border-color .2s" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", background: openFaq === i ? "rgba(255,107,0,.06)" : "rgba(255,255,255,.02)", border: "none", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", gap: 16, textAlign: "left" }}>
                  <span style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, color: "#fff" }}>{item.q}</span>
                  <span style={{ color: "#ff6b00", fontSize: 22, flexShrink: 0, transition: "transform .2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.75 }}>{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="sp-section" style={{ padding: "80px 40px", background: "linear-gradient(135deg, rgba(255,107,0,.06), rgba(255,0,128,.04))", borderTop: "1px solid rgba(255,107,0,.1)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1, marginBottom: 16 }}>
            Готовы к записи?<br />
            <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Звоните — ответим быстро</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,.45)", marginBottom: 40, lineHeight: 1.7 }}>Бесплатная диагностика и расчёт стоимости. Ежедневно с 10:00 до 19:00.<br />Москва, пос. Внуково, Центральная ул., 18с2</p>
          <div className="sp-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={PHONES[0].href} className="sp-btn sp-btn-grad">{PHONES[0].label}</a>
            <a href="https://t.me/+79652130999" target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-outline">Telegram</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)", padding: "32px 40px" }}>
        <div className="sp-footer-inner" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <Link to="/"><Logo /></Link>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)", textAlign: "center", lineHeight: 1.7 }}>
              г. Москва, пос. Внуково, Центральная ул., 18с2<br />Ежедневно 10:00–19:00
            </div>
            <Link to="/tseny" style={{ fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 600, color: "rgba(255,107,0,.6)", letterSpacing: 1 }}>Прайс-лист →</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {PHONES.map(p => (
              <a key={p.href} href={p.href} style={{ fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,.55)", letterSpacing: 0.5 }}>{p.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
