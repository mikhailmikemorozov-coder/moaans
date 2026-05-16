import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";

const PHONES = [{ label: "+7 (965) 213-09-99", href: "tel:+79652130999" }];

export default function RemontDiskaPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Сколько стоит ремонт литого диска в Москве: цены и технологии | BI Color</title>
        <meta name="description" content="Цены на ремонт литых дисков в Москве — правка, сварка, Димет. Разбираем что влияет на стоимость, когда диск восстановим, а когда нет. Сервис BI Color, Внуково." />
        <meta name="keywords" content="ремонт литого диска цена москва, восстановление диска стоимость, правка дисков москва, ремонт дисков внуково" />
        <link rel="canonical" href="https://bi-color.ru/blog/remont-litogo-diska-tsena" />
        <meta property="og:title" content="Сколько стоит ремонт литого диска в Москве" />
        <meta property="og:description" content="Разбираем цены, технологии и что влияет на стоимость ремонта литых дисков." />
        <meta property="og:image" content="https://bi-color.ru/work-1.jpg" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Сколько стоит ремонт литого диска в Москве: цены, технологии, что влияет на стоимость",
          "datePublished": "2026-05-05",
          "dateModified": "2026-05-05",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/work-1.jpg",
          "url": "https://bi-color.ru/blog/remont-litogo-diska-tsena",
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        .article h2 { font-family: 'Rajdhani', sans-serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; margin: 48px 0 16px; color: #fff; line-height: 1.2; }
        .article p { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.85; margin-bottom: 20px; }
        .article ul { padding-left: 0; margin-bottom: 20px; list-style: none; }
        .article ul li { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.85; padding: 6px 0 6px 24px; position: relative; }
        .article ul li::before { content: "—"; position: absolute; left: 0; color: #ff0080; }
        .article strong { color: rgba(255,255,255,.9); font-weight: 700; }
        .article a { color: #ff6b00; text-decoration: underline; text-underline-offset: 3px; }
        .price-table { width: 100%; border-collapse: collapse; margin: 24px 0 32px; }
        .price-table th { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,.4); padding: 10px 16px; border-bottom: 1px solid rgba(255,255,255,.08); text-align: left; }
        .price-table td { font-size: 15px; color: rgba(255,255,255,.65); padding: 14px 16px; border-bottom: 1px solid rgba(255,255,255,.05); }
        .price-table tr:last-child td { border-bottom: none; }
        .price-table td:last-child { font-family: 'Rajdhani', sans-serif; font-size: 17px; font-weight: 700; color: #ff0080; }
        @media (max-width: 768px) {
          .post-header { padding: 0 20px !important; }
          .post-hero { padding: 110px 20px 40px !important; }
          .post-body { padding: 0 20px 80px !important; }
          .post-img-grid { grid-template-columns: 1fr !important; }
          .post-nav { display: none !important; }
        }
      `}</style>

      {/* HEADER */}
      <header className="post-header" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 70,
        padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,9,12,.96)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,107,0,.15)",
      }}>
        <Link to="/"><Logo /></Link>
        <div className="post-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[["Главная", "/"], ["Цены", "/tseny"], ["Блог", "/blog"]].map(([label, href]) => (
            <Link key={href} to={href} style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.45)", transition: "color .2s" }}
              onMouseEnter={e => e.currentTarget.style.color="#fff"} onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,.45)"}>{label}</Link>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href={PHONES[0].href} style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.75)" }}>{PHONES[0].label}</a>
          <a href="/#contact" style={{ display: "inline-flex", alignItems: "center", padding: "10px 24px", background: "linear-gradient(135deg,#ff0080,#bf00ff)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Записаться</a>
        </div>
      </header>

      {/* BREADCRUMB + META */}
      <section className="post-hero" style={{ padding: "130px 40px 40px", maxWidth: 780, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <Link to="/blog" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Блог</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,0,128,.7)", letterSpacing: 1 }}>Ремонт диска</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#ff0080", padding: "3px 10px", border: "1px solid #ff008044", borderRadius: 50 }}>Ремонт дисков</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>5 мая 2026 · 5 мин</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Сколько стоит ремонт литого диска в Москве: цены, технологии, что влияет на стоимость
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: 0 }}>
          Разбираем основные виды повреждений, технологии ремонта и честные цены — без «позвоните, скажем цену», а с конкретными цифрами.
        </p>
      </section>

      {/* HERO IMAGE */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 48px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "16/9" }}>
          <img src="/work-1.webp" alt="Ремонт и восстановление литых дисков — BI Color Москва" loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
          Восстановление литого диска в сервисе BI Color — Москва, Внуково
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 100px" }}>

        <h2>Почему нет единой цены</h2>
        <p>
          На вопрос «сколько стоит ремонт диска» невозможно ответить не видя диск. Стоимость зависит от характера повреждения, технологии ремонта и состояния покрытия. Но можно дать ориентиры — и именно это мы сделаем.
        </p>

        <h2>Виды повреждений и цены</h2>

        <table className="price-table">
          <thead>
            <tr>
              <th>Повреждение</th>
              <th>Технология</th>
              <th>Цена от</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Погнутый обод (лёгкая деформация)</td><td>Горячая или холодная правка</td><td>1 500 ₽</td></tr>
            <tr><td>Погнутый обод (сильная деформация)</td><td>Правка + токарная обработка</td><td>2 500 ₽</td></tr>
            <tr><td>Скол, вырыв куска</td><td>Аргонная сварка TIG + обработка</td><td>2 000 ₽</td></tr>
            <tr><td>Трещина</td><td>Аргонная сварка TIG</td><td>2 500 ₽</td></tr>
            <tr><td>Коррозия, раковины</td><td>Технология Димет + грунтовка</td><td>1 500 ₽</td></tr>
            <tr><td>Восстановление геометрии + покраска</td><td>Ремонт + порошковая покраска</td><td>4 000 ₽</td></tr>
          </tbody>
        </table>

        <p>
          Цены указаны за одну операцию на один диск. Финальная стоимость называется после осмотра — диагностика бесплатная.
        </p>

        <h2>Технология Димет — что это</h2>
        <p>
          Димет (динамическое металлизирование) — это нанесение металлического порошка на повреждённую поверхность с помощью сжатого воздуха без нагрева. Металл буквально вбивается в поверхность на высокой скорости и образует прочное покрытие.
        </p>
        <p>
          Главное преимущество — диск не нагревается. При сварке температура влияет на структуру алюминиевого сплава, а Димет этот риск исключает. Для коррозии, раковин и небольших сколов — это оптимальный выбор.
        </p>

        {/* inline image */}
        <div style={{ margin: "36px 0", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
          <img src="/work-3.webp" alt="Восстановление диска — сварка и ремонт BI Color" loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ marginBottom: 36, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>Работы по восстановлению дисков — сервис BI Color</div>

        <h2>Когда диск восстановим, а когда нет</h2>
        <p>
          Большинство повреждений поддаются ремонту. Но есть исключения:
        </p>
        <ul>
          <li><strong>Трещина через весь обод</strong> — сварка делает место ремонта прочным, но диск становится зоной повышенного риска. Мы рекомендуем замену.</li>
          <li><strong>Многократные трещины или трещины у спицы</strong> — структура нарушена, ремонт небезопасен.</li>
          <li><strong>Сильная деформация спицы</strong> — зависит от конкретной геометрии диска, оцениваем индивидуально.</li>
        </ul>
        <p>
          Если диск не подлежит ремонту — скажем об этом честно, не возьмёмся за небезопасную работу.
        </p>

        {/* 2-column images */}
        <div className="post-img-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "36px 0" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="/work-2.webp" alt="Ремонт литого диска — результат работы BI Color" loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="/work-4.webp" alt="Восстановление колёсного диска — BI Color Внуково" loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
        <div style={{ marginBottom: 36, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>Примеры восстановленных дисков — сервис BI Color</div>

        <h2>Ремонт + покраска = одна цена</h2>
        <p>
          Часто ремонт совмещают с покраской — диск всё равно нужно разбортировать, очистить и снять покрытие. Поэтому комбинация «ремонт + покраска» обходится дешевле, чем делать это по отдельности в разное время.
        </p>
        <p>
          В BI Color полный цикл «правка + покраска» начинается от 4 000 ₽ за диск. Гарантия на покрытие — 4 года, на сварку и правку — 1 год.
        </p>

        {/* CTA block */}
        <div style={{
          marginTop: 48, padding: "36px 32px",
          background: "linear-gradient(135deg, rgba(255,0,128,.08), rgba(191,0,255,.06))",
          border: "1px solid rgba(255,0,128,.2)", borderRadius: 20,
        }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Привозите диск на бесплатную диагностику
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Осмотрим диск, скажем точную цену и реальные сроки. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+79652130999" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#ff0080,#bf00ff)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              +7 (965) 213-09-99
            </a>
            <Link to="/remont-diskov-moskva" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,0,128,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              Страница услуги →
            </Link>
          </div>
        </div>

      </article>

      {/* FOOTER */}
      <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)", padding: "28px 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link to="/"><Logo /></Link>
          <Link to="/blog" style={{ fontFamily: "'Rajdhani'", fontSize: 14, color: "rgba(255,255,255,.3)", letterSpacing: 1 }}>← Все статьи</Link>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>© 2026 BI Color · bi-color.ru</div>
        </div>
      </footer>
    </div>
  );
}
