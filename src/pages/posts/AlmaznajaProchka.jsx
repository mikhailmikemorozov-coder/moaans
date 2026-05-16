import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";

const PHONES = [{ label: "+7 (965) 213-09-99", href: "tel:+79652130999" }];

export default function AlmaznajaProchkaPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Алмазная проточка дисков: что это, кому подходит и сколько стоит | BI Color</title>
        <meta name="description" content="Алмазная проточка литых дисков — как работает технология diamond cut, чем отличается от полировки, когда стоит делать и сколько это стоит в Москве. Ответы от мастеров BI Color." />
        <meta name="keywords" content="алмазная проточка дисков что это, diamond cut диски, алмазная проточка или полировка, алмазная проточка цена москва" />
        <link rel="canonical" href="https://bi-color.ru/blog/almaznaya-prochka-diskov-chto-eto" />
        <link rel="alternate" type="application/rss+xml" title="BI Color — блог о дисках (Яндекс.Турбо)" href="https://bi-color.ru/turbo.rss" />
        <meta property="og:title" content="Алмазная проточка дисков: что это и сколько стоит" />
        <meta property="og:description" content="Разбираем технологию diamond cut по шагам: как работает, чем отличается от полировки и сколько стоит в Москве." />
        <meta property="og:image" content="https://bi-color.ru/prochka-1.jpg" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Алмазная проточка дисков: что это, кому подходит и сколько стоит",
          "datePublished": "2026-04-28",
          "dateModified": "2026-04-28",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/prochka-1.jpg",
          "url": "https://bi-color.ru/blog/almaznaya-prochka-diskov-chto-eto",
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        .article h2 { font-family: 'Rajdhani', sans-serif; font-size: clamp(22px, 3vw, 30px); font-weight: 700; margin: 48px 0 16px; color: #fff; line-height: 1.2; }
        .article h3 { font-family: 'Rajdhani', sans-serif; font-size: 20px; font-weight: 700; margin: 32px 0 12px; color: rgba(255,255,255,.9); }
        .article p { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.85; margin-bottom: 20px; }
        .article ul { padding-left: 0; margin-bottom: 20px; list-style: none; }
        .article ul li { font-size: 16px; color: rgba(255,255,255,.6); line-height: 1.85; padding: 6px 0 6px 24px; position: relative; }
        .article ul li::before { content: "—"; position: absolute; left: 0; color: #ff6b00; }
        .article strong { color: rgba(255,255,255,.9); font-weight: 700; }
        .article a { color: #ff6b00; text-decoration: underline; text-underline-offset: 3px; }
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
          {[["Главная", "/"], ["Блог", "/blog"], ["Цены", "/tseny"], ["Алмазная проточка", "/almaznaya-prochka-diskov"]].map(([label, href]) => (
            <Link key={href} to={href} style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.45)", transition: "color .2s" }}
              onMouseEnter={e => e.currentTarget.style.color="#fff"} onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,.45)"}>{label}</Link>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href={PHONES[0].href} style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,.75)" }}>{PHONES[0].label}</a>
          <Link to="/almaznaya-prochka-diskov" style={{ display: "inline-flex", alignItems: "center", padding: "10px 24px", background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 14, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Записаться</Link>
        </div>
      </header>

      {/* BREADCRUMB + META */}
      <section className="post-hero" style={{ padding: "130px 40px 40px", maxWidth: 780, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <Link to="/blog" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Блог</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,107,0,.7)", letterSpacing: 1 }}>Алмазная проточка</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#00d4ff", padding: "3px 10px", border: "1px solid #00d4ff44", borderRadius: 50 }}>Алмазная проточка</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>28 апреля 2026 · 5 мин</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Алмазная проточка дисков: что это, кому подходит и сколько стоит
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: 0 }}>
          Разбираем технологию diamond cut по шагам — как работает станок с ЧПУ, чем отличается от полировки, когда имеет смысл делать и почему цена начинается от 5 000 ₽.
        </p>
      </section>

      {/* HERO IMAGE */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 48px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "16/9" }}>
          <img src="/prochka-1.webp" alt="Алмазная проточка литого диска — результат diamond cut" loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
          Результат алмазной проточки в сервисе BI Color — Москва, Внуково
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 100px" }}>

        <h2>Что такое алмазная проточка</h2>
        <p>
          Алмазная проточка (diamond cut) — это обработка лицевой поверхности литого диска на токарном станке с числовым программным управлением (ЧПУ). Алмазный резец снимает тончайший слой металла — буквально 0,1–0,3 мм — и открывает первозданную поверхность алюминиевого сплава с характерными микробороздками.
        </p>
        <p>
          Именно этот рисунок и создаёт тот самый эффект «бриллиантового блеска», который можно увидеть на дисках премиальных автомобилей прямо с завода. Поверхность выглядит как живой металл: при попадании света она переливается, играет полутонами. Никакая полировка или покраска такого не даст.
        </p>

        <h2>Как это работает — шаг за шагом</h2>
        <ul>
          <li><strong>Снятие резины и подготовка.</strong> Диск разбортируется, очищается от старого лака и грунта — поверхность должна быть голым металлом.</li>
          <li><strong>Установка на станок.</strong> Диск крепится в токарный станок с ЧПУ. Программа задаёт траекторию резца с точностью до микрона.</li>
          <li><strong>Проточка.</strong> Алмазный резец проходит по лицевой части диска и снимает тончайший слой. Весь процесс занимает 20–40 минут на один диск.</li>
          <li><strong>Нанесение лака.</strong> После проточки поверхность сразу покрывается прозрачным лаком — алюминий окисляется очень быстро, лак защищает и фиксирует блеск.</li>
          <li><strong>Сборка и балансировка.</strong> Диск монтируется обратно с новым вентилем и балансируется.</li>
        </ul>

        {/* inline image */}
        <div style={{ margin: "36px 0", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
          <img src="/prochka-2.webp" alt="Станок с ЧПУ для алмазной проточки дисков" loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ marginBottom: 36, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>Токарный станок с ЧПУ — именно он даёт точность до микрона</div>

        <h2>Алмазная проточка или полировка — в чём разница</h2>
        <p>
          Вопрос, который задают чаще всего. Разница принципиальная:
        </p>
        <ul>
          <li><strong>Полировка</strong> работает с уже нанесённым покрытием: абразив убирает царапины и мутность с лака, но металл при этом не затрагивается. Результат зависит от состояния покрытия и держится 3–6 месяцев.</li>
          <li><strong>Алмазная проточка</strong> снимает весь слой покрытия и часть металла, открывая свежую поверхность. Это не косметика — это восстановление. Результат держится 2–4 года.</li>
        </ul>
        <p>
          Если диск просто потускнел — возможно, хватит полировки. Если есть царапины до металла, потемнения, следы коррозии или диск вообще перекрашен — нужна проточка.
        </p>

        <h2>Кому подходит алмазная проточка</h2>
        <p>Услуга имеет смысл, если:</p>
        <ul>
          <li>Диски изначально были с заводским diamond cut и потеряли блеск</li>
          <li>На лицевой части есть мелкие царапины, потёртости или пятна от реагентов</li>
          <li>Вы хотите освежить внешний вид без полной перекраски</li>
          <li>Планируете комбинацию: проточка лицевой части + покраска обода в контрастный цвет</li>
        </ul>
        <p>
          Проточка <strong>не подходит</strong> для стальных дисков и кованых дисков с тонкой полкой — только для литых алюминиевых. Также нельзя делать её слишком часто: каждый раз снимается слой металла, поэтому в среднем допустимо 2–3 проточки за весь срок службы диска.
        </p>

        {/* 2-column images */}
        <div className="post-img-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "36px 0" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="/prochka-3.webp" alt="Diamond cut диск после алмазной проточки — зеркальный блеск" loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="/prochka-4.webp" alt="Алмазная проточка — чёрный диск с серебристыми спицами" loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
        <div style={{ marginBottom: 36, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>Работы сервиса BI Color — алмазная проточка литых дисков</div>

        <h2>Сколько стоит алмазная проточка в Москве</h2>
        <p>
          В московских сервисах цена варьируется от 3 000 до 8 000 ₽ за диск. Разброс объясняется несколькими факторами:
        </p>
        <ul>
          <li><strong>Оборудование.</strong> Настоящая алмазная проточка делается только на токарном станке с ЧПУ. Если предлагают дешевле 3 000 ₽ — скорее всего, это ручная полировка или «болгарка».</li>
          <li><strong>Радиус диска.</strong> Чем больше диск, тем дольше проточка. R17–18 и R19+ обойдутся дороже, чем R15–16.</li>
          <li><strong>Состояние поверхности.</strong> Сильные повреждения могут потребовать предварительного ремонта.</li>
        </ul>
        <p>
          В <strong>BI Color</strong> алмазная проточка стоит <strong>от 5 000 ₽ за диск</strong>. В стоимость входит снятие резины, сама проточка, нанесение лака, монтаж и балансировка. Гарантия — 4 года.
        </p>

        <h2>Как выглядит популярная комбинация</h2>
        <p>
          Один из самых частых запросов в нашем сервисе — <strong>алмазная проточка лицевой части + покраска обода</strong>. Обод красится в чёрный или антрацит, лицевые спицы протачиваются — получается двухцветный диск, который смотрится как дорогой заводской вариант. Стоимость такой комбинации — от 7 500 ₽ за диск.
        </p>

        {/* CTA block */}
        <div style={{
          marginTop: 48, padding: "36px 32px",
          background: "linear-gradient(135deg, rgba(255,107,0,.08), rgba(0,212,255,.06))",
          border: "1px solid rgba(255,107,0,.2)", borderRadius: 20,
        }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Хотите узнать стоимость для ваших дисков?
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Привозите диски на бесплатную диагностику — оценим состояние, скажем точную цену и сроки. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+79652130999" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              +7 (965) 213-09-99
            </a>
            <Link to="/almaznaya-prochka-diskov" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,107,0,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
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
