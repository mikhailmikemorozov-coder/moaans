import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

const PHONES = [{ label: "+7 (499) 136-55-00", href: "tel:+74991365500" }];

const POSTS = [
  {
    slug: "almaznaya-prochka-video-protsessa",
    title: "Алмазная проточка дисков: видео процесса и реальный результат",
    excerpt: "Показываем как это выглядит изнутри — станок с ЧПУ, алмазный резец, вращающийся диск. И результат: многоспицевые диски с зеркальными спицами и тёмным ободом.",
    date: "19 мая 2026",
    readTime: "4 мин",
    image: "/prochka-diamond-result.webp",
    tag: "Алмазная проточка",
    tagColor: "#00d4ff",
  },
  {
    slug: "pokraska-diskov-v-chernyy",
    title: "Покраска дисков в чёрный цвет: матовый, глянец, антрацит — что выбрать",
    excerpt: "Чёрный — самый популярный цвет для дисков. Разбираем три варианта: матовый, глянец и антрацит — чем отличаются, что практичнее и какой подойдёт именно вам.",
    date: "12 мая 2026",
    readTime: "4 мин",
    image: "/pokraska-9.webp",
    tag: "Покраска дисков",
    tagColor: "#ff6b00",
  },
  {
    slug: "remont-litogo-diska-tsena",
    title: "Сколько стоит ремонт литого диска в Москве: цены и технологии",
    excerpt: "Правка, сварка TIG, технология Димет — объясняем когда что применяется, называем честные цены и рассказываем когда диск восстановим, а когда нет.",
    date: "5 мая 2026",
    readTime: "5 мин",
    image: "/work-1.webp",
    tag: "Ремонт дисков",
    tagColor: "#ff0080",
  },
  {
    slug: "almaznaya-prochka-diskov-chto-eto",
    title: "Алмазная проточка дисков: что это, кому подходит и сколько стоит",
    excerpt: "Разбираем технологию diamond cut по шагам: как работает станок с ЧПУ, чем отличается от полировки, когда имеет смысл делать и почему цена начинается от 5 000 ₽.",
    date: "28 апреля 2026",
    readTime: "5 мин",
    image: "/prochka-1.webp",
    tag: "Алмазная проточка",
    tagColor: "#00d4ff",
  },
];

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Блог о дисках — советы, технологии, цены | BI Color</title>
        <meta name="description" content="Статьи об алмазной проточке, покраске и восстановлении дисков. Советы от мастеров BI Color в Москве." />
        <link rel="canonical" href="https://bi-color.ru/blog" />
        <link rel="alternate" type="application/rss+xml" title="BI Color — блог о дисках (Яндекс.Турбо)" href="https://bi-color.ru/turbo.rss" />
        <meta property="og:title" content="Блог BI Color — о дисках и покрытиях" />
        <meta property="og:image" content="https://bi-color.ru/og-image.png" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        .post-card:hover .post-img { transform: scale(1.04); }
        @media (max-width: 768px) {
          .blog-header { padding: 0 20px !important; }
          .blog-hero { padding: 110px 20px 50px !important; }
          .blog-grid { padding: 0 20px 80px !important; grid-template-columns: 1fr !important; }
          .blog-nav { display: none !important; }
        }
      `}</style>

      {/* HEADER */}
      <header className="blog-header" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
        padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,9,12,.96)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,107,0,.15)",
      }}>
        <Link to="/"><Logo /></Link>
        <div className="blog-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[["Главная", "/"], ["Цены", "/tseny"], ["Покраска дисков", "/pokraska-diskov-moskva"], ["Алмазная проточка", "/almaznaya-prochka-diskov"]].map(([label, href]) => (
            <Link key={href} to={href} style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.45)", transition: "color .2s" }}
              onMouseEnter={e => e.currentTarget.style.color="#fff"} onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,.45)"}>{label}</Link>
          ))}
        </div>
        <a href={PHONES[0].href} style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.75)" }}>
          {PHONES[0].label}
        </a>
      </header>

      {/* HERO */}
      <section className="blog-hero" style={{ padding: "130px 40px 50px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,107,0,.7)", letterSpacing: 1 }}>Блог</span>
        </div>
        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, marginBottom: 16 }}>
          Блог о <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>дисках</span>
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,.4)", lineHeight: 1.7 }}>
          Технологии, советы и цены — от мастеров сервиса BI Color
        </p>
      </section>

      {/* POSTS GRID */}
      <main className="blog-grid" style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px 100px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
        {POSTS.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="post-card" style={{
            display: "block", background: "rgba(255,255,255,.03)",
            border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, overflow: "hidden",
            transition: "border-color .25s, transform .25s",
          }}>
            <div style={{ height: 220, overflow: "hidden" }}>
              <img src={post.image} alt={post.title} className="post-img"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .4s ease" }} />
            </div>
            <div style={{ padding: "24px 24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: post.tagColor, padding: "3px 10px", border: `1px solid ${post.tagColor}44`, borderRadius: 50 }}>{post.tag}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,.25)" }}>{post.date} · {post.readTime}</span>
              </div>
              <h2 style={{ fontFamily: "'Rajdhani'", fontSize: 20, fontWeight: 700, lineHeight: 1.25, marginBottom: 10 }}>{post.title}</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.65 }}>{post.excerpt}</p>
              <div style={{ marginTop: 20, fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 600, color: "#ff6b00", letterSpacing: 0.5 }}>Читать →</div>
            </div>
          </Link>
        ))}
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)", padding: "28px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link to="/"><Logo /></Link>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>© 2026 BI Color · bi-color.ru</div>
        </div>
      </footer>
    </div>
  );
}
