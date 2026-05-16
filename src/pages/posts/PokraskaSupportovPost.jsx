import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { SiteHeader } from "../../components/SiteHeader";

const PHONES = [{ label: "+7 (965) 213-09-99", href: "tel:+79652130999" }];

export default function PokraskaSupportovPost() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", minHeight: "100vh" }}>
      <Helmet>
        <title>Покраска суппортов: зачем, как и сколько стоит | BI Color</title>
        <meta name="description" content="Зачем красят тормозные суппорты, как выглядит процесс и что даёт термостойкая краска. Разбор от мастеров BI Color в Москве." />
        <link rel="canonical" href="https://bi-color.ru/blog/pokraska-supportov" />
        <meta property="og:title" content="Покраска суппортов: зачем, как и сколько стоит" />
        <meta property="og:description" content="Зачем красят тормозные суппорты, как выглядит процесс и что даёт термостойкая краска. Разбор от мастеров BI Color в Москве." />
        <meta property="og:image" content="https://bi-color.ru/support-red.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Покраска суппортов: зачем, как и сколько стоит",
          "image": "https://bi-color.ru/support-red.webp",
          "datePublished": "2026-05-16",
          "author": { "@type": "Organization", "name": "BI Color" },
          "publisher": { "@type": "Organization", "name": "BI Color", "logo": { "@type": "ImageObject", "url": "https://bi-color.ru/favicon-192.png" } },
        })}</script>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
        @media (max-width: 768px) {
          .post-hero { padding: 100px 20px 40px !important; }
          .post-body { padding: 0 20px 80px !important; }
          .site-hdr-nav { display: none !important; }
          .photo-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .colors-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      {/* HEADER */}
      <SiteHeader />

      {/* HERO */}
      <section className="post-hero" style={{ padding: "120px 40px 0", maxWidth: 860, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          <Link to="/" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Главная</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <Link to="/blog" style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,255,255,.35)", letterSpacing: 1 }}>Блог</Link>
          <span style={{ color: "rgba(255,255,255,.2)" }}>›</span>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 13, color: "rgba(255,107,0,.7)", letterSpacing: 1 }}>Покраска суппортов</span>
        </div>
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Rajdhani'", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#ff6b00", padding: "3px 10px", border: "1px solid #ff6b0044", borderRadius: 50 }}>Покраска суппортов</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.25)" }}>16 мая 2026 · 4 мин</span>
        </div>
        <h1 style={{ fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.05, marginBottom: 24 }}>
          Покраска суппортов: зачем, как{" "}
          <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>и сколько стоит</span>
        </h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,.5)", lineHeight: 1.8, marginBottom: 40 }}>
          Цветные суппорты сквозь спицы — один из самых заметных тюнингов без переделки геометрии. Разбираем почему их красят, какую краску используют и как выглядит процесс.
        </p>
      </section>

      {/* COVER IMAGE */}
      <div style={{ maxWidth: 860, margin: "0 auto 0", padding: "0 40px" }}>
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "16/7" }}>
          <img src="/support-red.webp" alt="Покраска суппортов в красный — BI Color" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>

      {/* BODY */}
      <article className="post-body" style={{ maxWidth: 860, margin: "0 auto", padding: "48px 40px 100px" }}>

        {/* Зачем */}
        <h2 style={{ fontFamily: "'Rajdhani'", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, marginBottom: 16, marginTop: 40 }}>Зачем красить суппорты</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: 16 }}>
          Тормозной суппорт хорошо виден через спицы диска — особенно на R17 и больше. У большинства автомобилей суппорты крашены в скучный серый или вовсе просто загрунтованы. Со временем они ржавеют, покрываются тормозной пылью и выглядят неопрятно.
        </p>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: 16 }}>
          Покраска решает сразу две задачи: <strong style={{ color: "rgba(255,255,255,.8)" }}>эстетику и защиту</strong>. Яркий суппорт — эффектный акцент, который работает без доработки подвески или замены дисков. А качественная краска защищает металл от коррозии и тормозной пыли.
        </p>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: 32 }}>
          Особенно популярно сочетание: <strong style={{ color: "rgba(255,255,255,.8)" }}>чёрные или тёмные диски + яркие суппорты</strong>. Красный, жёлтый, синий — через спицы смотрится как на спорткаре.
        </p>

        {/* Почему нельзя обычную краску */}
        <div style={{ background: "rgba(255,107,0,.06)", border: "1px solid rgba(255,107,0,.2)", borderRadius: 16, padding: "24px 28px", marginBottom: 40 }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, color: "#ff6b00", marginBottom: 10 }}>Почему нельзя обычную краску</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>
            Тормозной суппорт нагревается при активном торможении до 150–200 °C. Обычная краска при такой температуре вздувается, трескается и облезает уже после первой поездки. Нужна специальная термостойкая краска, которая выдерживает постоянный нагрев до 300 °C.
          </p>
        </div>

        {/* Как проходит процесс */}
        <h2 style={{ fontFamily: "'Rajdhani'", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, marginBottom: 24 }}>Как проходит покраска</h2>
        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginBottom: 40 }}>
          {[
            { num: "01", title: "Снятие суппорта", text: "Демонтируем суппорт полностью — только так можно покрасить равномерно со всех сторон и не запачкать тормозные колодки и диск." },
            { num: "02", title: "Подготовка поверхности", text: "Очищаем от ржавчины, тормозной пыли и старой краски. Обезжириваем. Без этого шага даже хорошая краска держится плохо." },
            { num: "03", title: "Грунтование", text: "Наносим термостойкий грунт — он улучшает адгезию и дополнительно защищает металл от коррозии под основным слоем." },
            { num: "04", title: "Покраска и запекание", text: "Красим в выбранный цвет термостойкой краской. После нанесения суппорт нагревают — краска полимеризуется и становится очень прочной." },
          ].map(s => (
            <div key={s.num} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: "22px 20px" }}>
              <div style={{ fontFamily: "'Rajdhani'", fontSize: 36, fontWeight: 700, color: "#ff6b00", opacity: .4, lineHeight: 1, marginBottom: 10 }}>{s.num}</div>
              <div style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}>{s.text}</p>
            </div>
          ))}
        </div>

        {/* Фото */}
        <h2 style={{ fontFamily: "'Rajdhani'", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, marginBottom: 20 }}>Примеры наших работ</h2>
        <div className="photo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginBottom: 40 }}>
          {[
            { src: "/support-brembo-teal.webp", alt: "Brembo суппорт бирюзовый", cap: "Brembo — бирюзовый" },
            { src: "/support-purple-pair.webp", alt: "Пара суппортов фиолетовый", cap: "Два суппорта — фиолетовый" },
            { src: "/support-purple-close.webp", alt: "Суппорт фиолетовый металлик", cap: "Фиолетовый металлик" },
          ].map(p => (
            <div key={p.src} style={{ borderRadius: 14, overflow: "hidden", position: "relative" }}>
              <img src={p.src} alt={p.alt} loading="lazy" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 12px 10px", background: "linear-gradient(transparent,rgba(0,0,0,.65))", fontSize: 12, color: "rgba(255,255,255,.7)", fontFamily: "'Rajdhani'", letterSpacing: .5 }}>{p.cap}</div>
            </div>
          ))}
          <div style={{ borderRadius: 14, overflow: "hidden", position: "relative" }}>
            <img src="/support-red.webp" alt="Суппорт красный глянец" loading="lazy" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 12px 10px", background: "linear-gradient(transparent,rgba(0,0,0,.65))", fontSize: 12, color: "rgba(255,255,255,.7)", fontFamily: "'Rajdhani'", letterSpacing: .5 }}>Красный глянец</div>
          </div>
        </div>

        {/* Популярные цвета */}
        <h2 style={{ fontFamily: "'Rajdhani'", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, marginBottom: 16 }}>Популярные цвета</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: 24 }}>
          Красим в любой цвет RAL — без ограничений. Самые популярные варианты у наших клиентов:
        </p>
        <div className="colors-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 40 }}>
          {[
            { color: "#e53935", name: "Красный", note: "Классика спорта" },
            { color: "#fdd835", name: "Жёлтый", note: "Яркий акцент" },
            { color: "#1e88e5", name: "Синий", note: "Строго и стильно" },
            { color: "#000", border: "rgba(255,255,255,.15)", name: "Чёрный", note: "Глянец или матт" },
            { color: "#6a1b9a", name: "Фиолетовый", note: "Редкий и заметный" },
            { color: "#00acc1", name: "Бирюзовый", note: "Нестандартно" },
          ].map(c => (
            <div key={c.name} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, padding: "16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: c.color, border: c.border ? `1px solid ${c.border}` : "none", flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700 }}>{c.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)" }}>{c.note}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Цена */}
        <h2 style={{ fontFamily: "'Rajdhani'", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, marginBottom: 16 }}>Сколько стоит</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.85, marginBottom: 20 }}>
          Цена зависит от размера суппорта и его состояния. Большие спортивные суппорты (4–6-поршневые) занимают больше времени на подготовку.
        </p>
        <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, overflow: "hidden", marginBottom: 40 }}>
          {[
            ["Стандартный суппорт", "от 2 000 ₽"],
            ["Спортивный (многопоршневой)", "от 3 000 ₽"],
            ["Комплект (4 суппорта)", "от 7 500 ₽"],
            ["Суппорты + диски", "по согласованию"],
          ].map(([label, price], i) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: i < 3 ? "1px solid rgba(255,255,255,.06)" : "none" }}>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,.6)" }}>{label}</span>
              <span style={{ fontFamily: "'Rajdhani'", fontSize: 18, fontWeight: 700, color: "#ff6b00" }}>{price}</span>
            </div>
          ))}
        </div>

        {/* Совет */}
        <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: "24px 28px", marginBottom: 40 }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Совет: делайте вместе с дисками</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>
            Самый популярный вариант — привезти и диски, и суппорты за один приезд. Согласовываем цвета вместе, делаем всё в срок 1–2 дня. Цена за комплект выгоднее, чем по отдельности.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg,rgba(255,107,0,.08),rgba(255,0,128,.05))", border: "1px solid rgba(255,107,0,.2)", borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, marginBottom: 12, lineHeight: 1.1 }}>
            Привозите суппорты —{" "}
            <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>оценим бесплатно</span>
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.7, marginBottom: 24 }}>
            Бесплатная диагностика и расчёт стоимости. Ежедневно 10:00–19:00, Москва, пос. Внуково, Центральная ул., 18с2.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href={PHONES[0].href} style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "linear-gradient(135deg,#ff6b00,#ff0080)", color: "#fff", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              {PHONES[0].label}
            </a>
            <Link to="/pokraska-supportov-moskva" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", background: "transparent", color: "#fff", border: "1.5px solid rgba(255,107,0,.4)", borderRadius: 50, fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>
              Страница услуги →
            </Link>
          </div>
        </div>

        {/* See also */}
        <div style={{ marginTop: 60, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <div style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,.3)", marginBottom: 16, textTransform: "uppercase" }}>Читайте также</div>
          <Link to="/blog/pokraska-diskov-v-chernyy" style={{ display: "block", padding: "20px 24px", background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, transition: "border-color .2s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor="rgba(255,107,0,.3)"} onMouseLeave={e => e.currentTarget.style.borderColor="rgba(255,255,255,.08)"}>
            <div style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, marginBottom: 6 }}>Покраска дисков в чёрный: матовый, глянец или антрацит</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.35)" }}>Покраска дисков · 4 мин</div>
          </Link>
        </div>
      </article>

      {/* FOOTER */}
      <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)", padding: "28px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <Link to="/"><Logo /></Link>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>© 2026 BI Color · bi-color.ru</div>
        </div>
      </footer>
    </div>
  );
}
