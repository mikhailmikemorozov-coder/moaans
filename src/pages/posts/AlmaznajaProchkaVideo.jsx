import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { SiteHeader } from "../../components/SiteHeader";

const PHONES = [{ label: "+7 (925) 110-10-52", href: "tel:+79251101052" }];

export default function AlmaznajaProchkaVideoPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Алмазная проточка дисков: видео процесса и результат | BI Color</title>
        <meta name="description" content="Смотри как проходит алмазная проточка литых дисков на станке с ЧПУ — видео процесса от сервиса BI Color. Реальный результат diamond cut на многоспицевых дисках." />
        <meta name="keywords" content="алмазная проточка дисков видео, diamond cut процесс, алмазная проточка как выглядит, алмазная проточка результат фото" />
        <link rel="canonical" href="https://bi-color.ru/blog/almaznaya-prochka-video-protsessa" />
        <meta property="og:title" content="Алмазная проточка дисков: видео процесса и реальный результат" />
        <meta property="og:description" content="Видео алмазной проточки на станке ЧПУ и фото результата из сервиса BI Color, Москва." />
        <meta property="og:image" content="https://bi-color.ru/prochka-diamond-result.webp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Алмазная проточка дисков: видео процесса и реальный результат",
          "datePublished": "2026-05-19",
          "dateModified": "2026-05-19",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "url": "https://bi-color.ru" },
          "image": "https://bi-color.ru/prochka-diamond-result.webp",
          "url": "https://bi-color.ru/blog/almaznaya-prochka-video-protsessa",
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
        .article ul li::before { content: "—"; position: absolute; left: 0; color: #00d4ff; }
        .article strong { color: rgba(255,255,255,.9); font-weight: 700; }
        .article a { color: #ff6b00; text-decoration: underline; text-underline-offset: 3px; }
        .video-wrap video { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 20px; }
        @media (max-width: 768px) {
          .post-hero { padding: 110px 20px 40px !important; }
          .post-body { padding: 0 20px 80px !important; }
          .site-hdr-nav { display: none !important; }
          .video-col { flex-direction: column !important; }
          .video-col .video-wrap { width: 100% !important; max-width: 340px !important; margin: 0 auto !important; }
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
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(0,212,255,.7)", letterSpacing: 1 }}>Алмазная проточка</span>
        </div>

        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#00d4ff", padding: "3px 10px", border: "1px solid #00d4ff44", borderRadius: 50 }}>Алмазная проточка</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.25)" }}>19 мая 2026 · 4 мин</span>
        </div>

        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1, marginBottom: 24 }}>
          Алмазная проточка дисков: видео процесса и реальный результат
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: 0 }}>
          Показываем как это выглядит изнутри — станок с ЧПУ, алмазный резец, вращающийся диск. И результат: многоспицевые литые диски с зеркальными спицами и тёмным ободом.
        </p>
      </section>

      {/* VIDEO SECTION */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 48px" }}>
        <div className="video-col" style={{ display: "flex", gap: 32, alignItems: "center" }}>

          {/* vertical video */}
          <div className="video-wrap" style={{ flexShrink: 0, width: 280, aspectRatio: "9/16", borderRadius: 20, overflow: "hidden", boxShadow: "0 0 60px rgba(0,212,255,.15)" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            >
              <source src="/prochka-process-web.mp4" type="video/mp4" />
            </video>
          </div>

          {/* description next to video */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#fff", lineHeight: 1.2 }}>
              Так работает станок с ЧПУ
            </div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: 20 }}>
              Алмазный резец движется по программе — снимает ровно столько металла, сколько нужно. Ни микрона лишнего. Весь проход по одному диску занимает 20–40 минут.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: 20 }}>
              Характерные микробороздки, которые видны после проточки, — это и есть заводской diamond cut. Поверхность играет на свету, как драгоценный камень.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[["20–40 мин", "на 1 диск"], ["0,1–0,3 мм", "снимает резец"], ["4 года", "гарантия"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 26, fontWeight: 700, color: "#00d4ff" }}>{val}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
          Видео процесса алмазной проточки — сервис BI Color, Москва, Внуково
        </div>
      </div>

      {/* RESULT PHOTO */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 48px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
          <img
            src="/prochka-diamond-result.webp"
            alt="Результат алмазной проточки — многоспицевые диски diamond cut, BI Color Москва"
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
          Результат из нашего сервиса — спицы после проточки, обод в тёмном цвете
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="article post-body" style={{ maxWidth: 780, margin: "0 auto", padding: "0 40px 100px" }}>

        <h2>Почему это выглядит так эффектно</h2>
        <p>
          Многоспицевые диски — особенно благодарный материал для алмазной проточки. Когда каждая спица получает зеркальную обработку и контрастирует с тёмным ободом, диск начинает выглядеть дороже, чем стоил новым.
        </p>
        <p>
          Эффект достигается не краской и не напылением. Алмазный резец буквально открывает металл — алюминиевый сплав под лаком имеет естественный серебристый блеск. После проточки поверхность закрывается прозрачным лаком, который защищает металл и фиксирует сияние.
        </p>

        <h2>Пошагово: что происходит с диском</h2>
        <ul>
          <li><strong>Разбортировка и очистка.</strong> Снимаем резину, убираем старые покрытия — под резцом должен быть голый металл.</li>
          <li><strong>Крепление в станок.</strong> Диск фиксируется в токарный станок с ЧПУ строго по центру. Биение — ноль.</li>
          <li><strong>Проточка алмазным резцом.</strong> Программа ведёт резец по точной траектории, снимая 0,1–0,3 мм металла. Именно эти микробороздки создают «живой» блеск.</li>
          <li><strong>Лакировка.</strong> Сразу после проточки — прозрачный лак. Алюминий окисляется быстро, ждать нельзя.</li>
          <li><strong>Сборка и балансировка.</strong> Новый вентиль, монтаж резины, балансировка на стенде.</li>
        </ul>

        <h2>Когда стоит делать проточку</h2>
        <p>
          Если диски <strong>изначально были с заводским diamond cut</strong> — это единственный способ вернуть им первозданный вид. Перекраска не даст того же эффекта: краска не передаёт игру металла.
        </p>
        <p>
          Также проточка хорошо работает в комбинации: лицевую часть точим, обод красим в выбранный цвет — чёрный, антрацит, бронза. Получается двухтонный диск, который выглядит как дорогой заводской вариант. У нас это стоит <strong>от 7 500 ₽ за диск</strong>.
        </p>

        <h2>Что нельзя сделать проточкой</h2>
        <ul>
          <li>Убрать глубокие царапины и сколы — сначала нужен ремонт</li>
          <li>Восстановить геометрию — это отдельная услуга <Link to="/remont-diskov-moskva">правки дисков</Link></li>
          <li>Обработать кованые диски с тонкой полкой и стальные диски — только литые</li>
          <li>Делать бесконечно: каждый раз снимается слой металла, всего допустимо 2–3 проточки</li>
        </ul>

        <h2>Цена на алмазную проточку в BI Color</h2>
        <p>
          Один диск — <strong>5 000 ₽</strong>. В стоимость входит разбортировка, проточка, лак, монтаж, балансировка. Комплект из 4 дисков — оговаривается индивидуально. Гарантия 4 года.
        </p>
        <p>
          Если диски нуждаются в ремонте перед проточкой — скажем об этом сразу на диагностике, никаких скрытых доплат.
        </p>

        {/* see also */}
        <div style={{ margin: "36px 0", padding: "20px 24px", background: "rgba(0,212,255,.05)", border: "1px solid rgba(0,212,255,.12)", borderRadius: 14 }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "rgba(0,212,255,.6)", marginBottom: 8 }}>Читайте также</div>
          <Link to="/blog/almaznaya-prochka-diskov-chto-eto" style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 600, color: "#fff", textDecoration: "none" }}>
            Алмазная проточка дисков: что это, кому подходит и сколько стоит →
          </Link>
        </div>

        {/* CTA block */}
        <div style={{
          marginTop: 48, padding: "36px 32px",
          background: "linear-gradient(135deg, rgba(0,212,255,.08), rgba(0,119,255,.06))",
          border: "1px solid rgba(0,212,255,.2)", borderRadius: 20,
        }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>
            Хотите такой же результат?
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Привозите диски — сделаем бесплатную диагностику и скажем точную стоимость. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+79251101052" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#00d4ff,#0077ff)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              +7 (925) 110-10-52
            </a>
            <Link to="/almaznaya-prochka-diskov" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(0,212,255,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
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
