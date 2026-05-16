import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { SiteHeader } from "../../components/SiteHeader";

const PHONES = [{ label: "+7 (965) 213-09-99", href: "tel:+79652130999" }];

export default function PokraskaCherniyPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Покраска дисков в чёрный цвет: матовый, глянец, антрацит | BI Color Москва</title>
        <meta name="description" content="Как выбрать между матовым чёрным, глянцем и антрацитом для дисков. Разбираем варианты, стойкость покрытий и цены на покраску дисков в чёрный в Москве." />
        <meta name="keywords" content="покраска дисков в чёрный, чёрные диски матовые, покраска дисков антрацит москва, чёрный глянец диски цена" />
        <link rel="canonical" href="https://bi-color.ru/blog/pokraska-diskov-v-chernyy" />
        <meta property="og:title" content="Покраска дисков в чёрный: матовый, глянец или антрацит" />
        <meta property="og:description" content="Разбираем варианты чёрной покраски дисков — что популярнее, что практичнее и сколько стоит в Москве." />
        <meta property="og:image" content="https://bi-color.ru/pokraska-9.jpg" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Покраска дисков в чёрный цвет: матовый, глянец, антрацит — что выбрать",
          "datePublished": "2026-05-12",
          "dateModified": "2026-05-12",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/pokraska-9.jpg",
          "url": "https://bi-color.ru/blog/pokraska-diskov-v-chernyy",
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
        .article ul li::before { content: "—"; position: absolute; left: 0; color: #ff6b00; }
        .article strong { color: rgba(255,255,255,.9); font-weight: 700; }
        .article a { color: #ff6b00; text-decoration: underline; text-underline-offset: 3px; }
        @media (max-width: 768px) {
          .post-hero { padding: 110px 20px 40px !important; }
          .post-body { padding: 0 20px 80px !important; }
          .post-img-grid { grid-template-columns: 1fr !important; }
          .site-hdr-nav { display: none !important; }
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
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,107,0,.7)", letterSpacing: 1 }}>Покраска в чёрный</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#ff6b00", padding: "3px 10px", border: "1px solid #ff6b0044", borderRadius: 50 }}>Покраска дисков</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>12 мая 2026 · 4 мин</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Покраска дисков в чёрный цвет: матовый, глянец, антрацит — что выбрать
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: 0 }}>
          Чёрный — самый популярный цвет для дисков. Но внутри этого выбора скрывается несколько вариантов с очень разным характером и ценой.
        </p>
      </section>

      {/* HERO IMAGE */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 48px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "16/9" }}>
          <img src="/pokraska-9.webp" alt="Покраска дисков в антрацит — порошковая покраска BI Color" loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
          Антрацит, глянцевый финиш — одна из самых популярных комбинаций в сервисе BI Color
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 100px" }}>

        <h2>Три разных чёрных</h2>
        <p>
          Когда клиент говорит «хочу чёрные диски» — это может означать совершенно разные вещи. Чёрный матовый, чёрный глянец и антрацит — три самостоятельных варианта, которые по-разному выглядят, по-разному ведут себя в эксплуатации и по-разному стоят.
        </p>

        <h2>Чёрный матовый</h2>
        <p>
          Матовое покрытие — это отсутствие блеска. Поверхность поглощает свет, а не отражает его. Выглядит агрессивно и дорого, особенно на тёмных автомобилях. Именно этот вариант чаще всего встречается на заряженных версиях BMW, Mercedes AMG и Audi S-line прямо с завода.
        </p>
        <ul>
          <li><strong>Плюс:</strong> мелкие царапины и потёртости почти не видны — матовая поверхность их «прячет».</li>
          <li><strong>Минус:</strong> труднее мыть. Жировые пятна и следы от силикона остаются заметнее, чем на глянце.</li>
          <li><strong>Цена в BI Color:</strong> от 2 500 ₽ за диск.</li>
        </ul>

        {/* inline image */}
        <div style={{ margin: "36px 0", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9" }}>
          <img src="/pokraska-10.webp" alt="Покраска дисков в серебристый — порошковая покраска BI Color" loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div style={{ marginBottom: 36, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>Работы сервиса BI Color — порошковая покраска</div>

        <h2>Чёрный глянец</h2>
        <p>
          Глянцевое покрытие отражает свет зеркально. На свежепомытом автомобиле смотрится очень эффектно — диск буквально светится. Этот вариант выбирают, когда хотят максимального визуального контраста.
        </p>
        <ul>
          <li><strong>Плюс:</strong> эффектный вид, легко мыть — грязь не въедается в поверхность.</li>
          <li><strong>Минус:</strong> царапины и мелкие сколы заметны сразу. Потребуется более аккуратная эксплуатация.</li>
          <li><strong>Цена в BI Color:</strong> от 2 500 ₽ за диск — та же, что и матовый.</li>
        </ul>

        <h2>Антрацит</h2>
        <p>
          Антрацит — это не чёрный, а тёмно-серый с металлическим оттенком. Именно его чаще всего называют «заводским тёмным» цветом — так красят диски Volkswagen, Skoda, Hyundai и многие другие марки в базовой и средней комплектации.
        </p>
        <p>
          Антрацит универсален: он подходит к белым, серым, чёрным и даже красным автомобилям. Не так агрессивен, как глянцевый чёрный, но заметно темнее стандартного серебра.
        </p>
        <ul>
          <li><strong>Плюс:</strong> универсальность, «дорогой» заводской вид.</li>
          <li><strong>Нюанс:</strong> в антраците важен оттенок — холодный (с синевой) и тёплый (с коричневатым тоном) — нужно смотреть образцы.</li>
          <li><strong>Цена в BI Color:</strong> от 2 500 ₽ за диск.</li>
        </ul>

        {/* 2-column images */}
        <div className="post-img-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "36px 0" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="/pokraska-11.webp" alt="Покраска литых дисков — работа BI Color Москва" loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="/pokraska-6.webp" alt="Покраска дисков в золотой цвет — BI Color Внуково" loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
        <div style={{ marginBottom: 36, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>Примеры работ BI Color — покраска дисков в разные оттенки</div>

        <h2>Что выбрать: короткий ответ</h2>
        <ul>
          <li>Хотите агрессивный спортивный вид — <strong>чёрный матовый</strong>.</li>
          <li>Хотите эффектный блеск и не боитесь царапин — <strong>чёрный глянец</strong>.</li>
          <li>Хотите универсальный тёмный вариант «под завод» — <strong>антрацит</strong>.</li>
        </ul>
        <p>
          Все три варианта делаются порошковой покраской: трёхслойное покрытие (грунт — краска — лак), запекание в печи, гарантия 4 года. Цена одинаковая — от 2 500 ₽ за диск.
        </p>
        <p>
          Если сомневаетесь — приезжайте на бесплатную диагностику, покажем образцы порошков вживую. Это принципиально: на экране монитора цвет всегда выглядит иначе, чем на настоящем диске.
        </p>

        {/* CTA block */}
        <div style={{
          marginTop: 48, padding: "36px 32px",
          background: "linear-gradient(135deg, rgba(255,107,0,.08), rgba(255,0,128,.06))",
          border: "1px solid rgba(255,107,0,.2)", borderRadius: 20,
        }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Выбрать цвет и записаться
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Привозите диски — покажем образцы порошков, бесплатно оценим состояние и назовём точную цену. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+79652130999" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              +7 (965) 213-09-99
            </a>
            <Link to="/pokraska-diskov-moskva" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,107,0,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
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
