import { useState, useEffect, useRef } from "react";

/* ─── DATA ─────────────────────────────────────────── */
/* ── SVG illustrations for each service card ── */
const WheelSVG = ({ color, variant = 0 }) => {
  const spokes = variant === 0 ? 5 : variant === 1 ? 6 : variant === 2 ? 8 : 10;
  const angleStep = (Math.PI * 2) / spokes;
  const spokeLines = Array.from({ length: spokes }, (_, i) => {
    const a = i * angleStep - Math.PI / 2;
    return { x1: 50, y1: 50, x2: 50 + Math.cos(a) * 38, y2: 50 + Math.sin(a) * 38 };
  });
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <defs>
        <radialGradient id={`rg${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill={`url(#rg${variant})`} />
      {/* Outer ring */}
      <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="5" strokeOpacity="0.6" />
      {/* Middle ring */}
      <circle cx="50" cy="50" r="28" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.35" />
      {/* Inner hub */}
      <circle cx="50" cy="50" r="8" fill={color} fillOpacity="0.5" />
      <circle cx="50" cy="50" r="4" fill={color} fillOpacity="0.9" />
      {/* Spokes */}
      {spokeLines.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
          stroke={color} strokeWidth="3.5" strokeOpacity="0.55" strokeLinecap="round" />
      ))}
      {/* Bolt holes */}
      {spokeLines.map((s, i) => {
        const a = i * angleStep - Math.PI / 2;
        return <circle key={i} cx={50 + Math.cos(a) * 28} cy={50 + Math.sin(a) * 28}
          r="2.5" fill={color} fillOpacity="0.7" />;
      })}
    </svg>
  );
};

const ServiceIllustration = ({ color, variant, icon }) => (
  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden",
    background: `radial-gradient(ellipse at 60% 50%, ${color}18 0%, #0d0d10 70%)` }}>
    {/* Big wheel */}
    <div style={{ position: "absolute", right: -20, top: -20, width: 180, height: 180, opacity: 0.6 }}>
      <WheelSVG color={color} variant={variant} />
    </div>
    {/* Small wheel bottom-left */}
    <div style={{ position: "absolute", left: -15, bottom: -15, width: 90, height: 90, opacity: 0.25 }}>
      <WheelSVG color={color} variant={(variant + 1) % 4} />
    </div>
    {/* Horizontal lines */}
    {[20, 35, 50, 65, 80].map((y, i) => (
      <div key={i} style={{ position: "absolute", top: `${y}%`, left: 0, right: 0,
        height: 1, background: `${color}`, opacity: 0.06 }} />
    ))}
    {/* Big emoji center-left */}
    <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
      fontSize: 52, filter: "drop-shadow(0 0 12px " + color + "88)" }}>
      {icon}
    </div>
  </div>
);

const SERVICES = [
  {
    id: 1, emoji: "🎨", title: "Покраска дисков",
    short: "Любой цвет, матовый или глянцевый, порошок или жидкая краска.",
    price: "от 2 500 ₽", tag: "Хит", color: "#ff6b00", variant: 0,
  },
  {
    id: 2, emoji: "💎", title: "Алмазная проточка",
    short: "Токарный станок с ЧПУ — восстанавливаем заводской блеск и геометрию.",
    price: "от 1 800 ₽", tag: "Популярно", color: "#00d4ff", variant: 1,
  },
  {
    id: 3, emoji: "🔧", title: "Ремонт и восстановление",
    short: "Правка, сварка TIG/аргон, устранение трещин, сколов и деформаций.",
    price: "от 1 500 ₽", tag: null, color: "#ff0080", variant: 2,
  },
  {
    id: 4, emoji: "✨", title: "Полировка",
    short: "Зеркальная полировка вручную и машинным способом. Защитный лак.",
    price: "от 800 ₽", tag: null, color: "#ffd700", variant: 3,
  },
  {
    id: 5, emoji: "🛡️", title: "Антикоррозийная обработка",
    short: "Грунтование и защитное покрытие — результат на годы вперёд.",
    price: "от 600 ₽", tag: null, color: "#39ff14", variant: 0,
  },
  {
    id: 6, emoji: "🎯", title: "Кастомный дизайн",
    short: "Двухцветные схемы, хром, карбон-эффект, брендирование под ваш стиль.",
    price: "от 4 000 ₽", tag: "Эксклюзив", color: "#bf00ff", variant: 1,
  },
  {
    id: 7, emoji: "🏎️", title: "Покраска суппортов",
    short: "Яркие цвета, термостойкая краска — выглядит мощно сквозь спицы.",
    price: "от 2 000 ₽", tag: null, color: "#ff6b00", variant: 2,
  },
  {
    id: 8, emoji: "🔩", title: "Шиномонтаж",
    short: "Монтаж, демонтаж, балансировка. Работаем с любыми размерами.",
    price: "от 300 ₽", tag: null, color: "#00d4ff", variant: 3,
  },
];

const PROMOS = [
  {
    icon: "🎁",
    title: "Комплект — скидка 15%",
    desc: "При сдаче полного комплекта из 4 дисков на покраску.",
    badge: "Акция",
    badgeColor: "#ff6b00",
  },
  {
    icon: "🆓",
    title: "Бесплатная диагностика",
    desc: "Проверим геометрию и состояние ваших дисков совершенно бесплатно.",
    badge: "Бесплатно",
    badgeColor: "#39ff14",
  },
  {
    icon: "⚡",
    title: "Срочный заказ за 24 часа",
    desc: "Нужно быстро? Поднимем срочность — сдадим диски на следующий день.",
    badge: "Срочно",
    badgeColor: "#ff0080",
  },
];

const ADVANTAGES = [
  { icon: "🏆", title: "7 лет на рынке", desc: "Сотни довольных клиентов и тысячи восстановленных дисков." },
  { icon: "⚙️", title: "ЧПУ оборудование", desc: "Токарные станки с числовым управлением — точность до микрона." },
  { icon: "📋", title: "Гарантия 12 месяцев", desc: "Выдаём письменную гарантию на все виды работ." },
  { icon: "🚗", title: "Подменный комплект", desc: "Не останетесь без колёс — дадим подменный комплект бесплатно." },
  { icon: "⏱️", title: "Сроки не срываем", desc: "Назвали дату — сдали в срок. Без «ещё пару дней»." },
  { icon: "💬", title: "Фото-отчёт", desc: "Присылаем фото процесса и результата в мессенджер." },
];

const REVIEWS = [
  { name: "Алексей К.", car: "BMW X5", text: "Сдал 4 диска на алмазную проточку — результат как с завода. Сделали за 1 день, всё по времени. Однозначно рекомендую!", stars: 5 },
  { name: "Мария В.", car: "Audi A4", text: "Делала кастомную покраску в чёрный матовый с оранжевыми спицами. Выглядит просто бомбически! Мастера профессионалы.", stars: 5 },
  { name: "Игорь Н.", car: "Mercedes C200", text: "Восстанавливали диск после встречи с ямой. Правка + покраска, не отличишь от нового. Цена адекватная, работа качественная.", stars: 5 },
];

const STATS = [
  { value: "2 000+", label: "дисков в месяц" },
  { value: "7", label: "лет опыта" },
  { value: "98%", label: "довольных клиентов" },
  { value: "1–2", label: "дня срок работы" },
];

/* ─── COMPONENT ─────────────────────────────────────── */
export default function App() {
  const [cookieAccepted, setCookieAccepted] = useState(() => !!localStorage.getItem("cookie_ok"));
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePhoneChange = (e) => {
    let digits = e.target.value.replace(/\D/g, '');
    if (digits.startsWith('7') || digits.startsWith('8')) digits = digits.slice(1);
    digits = digits.slice(0, 10);
    let formatted = '+7';
    if (digits.length > 0) formatted += ' ' + digits.slice(0, 3);
    if (digits.length > 3) formatted += ' ' + digits.slice(3, 6);
    if (digits.length > 6) formatted += ' ' + digits.slice(6, 8);
    if (digits.length > 8) formatted += ' ' + digits.slice(8, 10);
    setFormData({ ...formData, phone: formatted });
  };

  const phoneComplete = formData.phone.replace(/\D/g, '').length === 11;

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone) return;
    setSending(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxnu85yoUwZBFlcfccHXGkhcQpnIDH4nwDDX3cTG9VfgQ1ArOvgl05o_tVBb8bBLl8RSg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });
    } catch (_) {}
    setSending(false);
    setSubmitted(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#08090c", color: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;900&family=Rajdhani:wght@500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --orange: #ff6b00;
          --pink: #ff0080;
          --blue: #00d4ff;
          --green: #39ff14;
          --grad: linear-gradient(135deg, #ff6b00 0%, #ff0080 100%);
          --grad2: linear-gradient(135deg, #00d4ff 0%, #bf00ff 100%);
          --surface: rgba(255,255,255,0.04);
          --border: rgba(255,255,255,0.08);
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: var(--grad); border-radius: 2px; }

        a { color: inherit; text-decoration: none; }

        .grad-text {
          background: var(--grad);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 32px; border: none; border-radius: 50px;
          font-family: 'Rajdhani', sans-serif; font-size: 16px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer;
          transition: all .25s ease;
        }
        .btn-grad { background: var(--grad); color: #fff; box-shadow: 0 6px 28px rgba(255,107,0,.35); }
        .btn-grad:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255,107,0,.5); }
        .btn-outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,107,0,.5); }
        .btn-outline:hover { background: rgba(255,107,0,.1); border-color: var(--orange); }
        .btn-sm { padding: 10px 24px; font-size: 14px; }

        .nav-item {
          font-family: 'Rajdhani', sans-serif; font-size: 15px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,.65);
          cursor: pointer; transition: color .2s; padding: 4px 0;
          border-bottom: 2px solid transparent;
        }
        .nav-item:hover { color: #fff; }
        .nav-item.active { color: var(--orange); border-color: var(--orange); }

        .card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden; transition: all .3s ease;
        }
        .card:hover { border-color: rgba(255,107,0,.3); box-shadow: 0 12px 48px rgba(255,107,0,.1); transform: translateY(-4px); }

        .tag {
          display: inline-block; padding: 3px 12px;
          border-radius: 50px; font-size: 11px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
        }

        .section-kicker {
          font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 600;
          letter-spacing: 3px; text-transform: uppercase; color: var(--orange);
          margin-bottom: 12px;
        }
        .section-title {
          font-family: 'Rajdhani', sans-serif; font-weight: 700;
          font-size: clamp(32px, 5vw, 56px); line-height: 1.05; letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .hero-bg {
          position: absolute; inset: 0; overflow: hidden;
        }
        .orb {
          position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
        }
        @keyframes pulse { 0%,100% { opacity: .4; transform: scale(1); } 50% { opacity: .7; transform: scale(1.08); } }

        .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .grid-2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .7s ease both; }
        .d1 { animation-delay: .1s; }
        .d2 { animation-delay: .25s; }
        .d3 { animation-delay: .4s; }
        .d4 { animation-delay: .55s; }

        .input-field {
          width: 100%; padding: 14px 20px; border-radius: 12px;
          background: rgba(255,255,255,.06); border: 1.5px solid rgba(255,255,255,.1);
          color: #fff; font-family: 'Nunito', sans-serif; font-size: 15px;
          outline: none; transition: border .2s;
        }
        .input-field:focus { border-color: var(--orange); }
        .input-field::placeholder { color: rgba(255,255,255,.3); }

        select.input-field option { background: #1a1a2e; }

        .star { color: #ffd700; font-size: 14px; }

        @media (max-width:900px) {
          .grid-3, .grid-4 { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width:600px) {
          .grid-3, .grid-4, .grid-2 { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; }
          .nav-desktop { display: none !important; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
        }

        .ticker-wrap {
          overflow: hidden; border-top: 1px solid rgba(255,107,0,.2); border-bottom: 1px solid rgba(255,107,0,.2);
          background: rgba(255,107,0,.05); padding: 12px 0;
        }
        .ticker {
          display: flex; gap: 80px; white-space: nowrap;
          animation: ticker 18s linear infinite;
        }
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-item {
          font-family: 'Rajdhani', sans-serif; font-size: 15px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,.5);
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
        }
        .ticker-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--orange); flex-shrink: 0; }

        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,.8); backdrop-filter: blur(12px);
          z-index: 999; display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        .modal {
          background: #0f1015; border: 1px solid rgba(255,107,0,.25);
          border-radius: 24px; padding: 40px; max-width: 480px; width: 100%; position: relative;
        }

        .service-icon-wrap {
          width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center;
          font-size: 26px; flex-shrink: 0; margin-bottom: 16px;
        }

        .progress-bar { height: 3px; background: var(--border); border-radius: 2px; overflow: hidden; margin-top: 8px; }
        .progress-fill { height: 100%; background: var(--grad); border-radius: 2px; }

        .review-card {
          background: rgba(255,255,255,.035); border: 1px solid var(--border);
          border-radius: 20px; padding: 28px; transition: border-color .3s;
        }
        .review-card:hover { border-color: rgba(255,107,0,.25); }

        .floating-cta {
          position: fixed; bottom: 28px; right: 28px; z-index: 500;
          animation: fadeUp .5s ease .8s both;
        }
      `}</style>

      {/* ── FLOATING CTA ── */}
      <div className="floating-cta">
        <button className="btn btn-grad btn-sm" onClick={() => scrollTo("contact")} style={{ borderRadius: 50, boxShadow: "0 8px 32px rgba(255,107,0,.5)" }}>
          📞 Записаться
        </button>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 40px", height: 70,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,9,12,.95)" : "rgba(8,9,12,.7)",
        backdropFilter: "blur(24px)",
        borderBottom: scrolled ? "1px solid rgba(255,107,0,.12)" : "none",
        transition: "all .4s ease",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", whiteSpace: "nowrap" }} onClick={() => scrollTo("hero")}>
          <div>
            <div style={{ fontFamily: "'Rajdhani'", fontSize: 20, fontWeight: 700, letterSpacing: 2, lineHeight: 1, whiteSpace: "nowrap" }}>
              WHEEL<span style={{ display: "inline-block", margin: "0 5px", color: "#ff6b00", fontWeight: 500, transform: "translateY(-1px)" }}>/</span><span className="grad-text">CRAFT</span>
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,.35)", letterSpacing: 2, textTransform: "uppercase", whiteSpace: "nowrap" }}>Сервис дисков</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {[["Услуги", "services"], ["Акции", "promos"], ["О нас", "about"], ["Отзывы", "reviews"], ["Контакты", "contact"]].map(([label, id]) => (
            <span key={id} className="nav-item" onClick={() => scrollTo(id)}>{label}</span>
          ))}
        </div>

        {/* CTA + phone */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="tel:+79991234567" style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, color: "rgba(255,255,255,.8)", letterSpacing: 0.5 }}>
            +7 (999) 123-45-67
          </a>
          <button className="btn btn-grad btn-sm" onClick={() => scrollTo("contact")}>Записаться</button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", padding: "100px 40px 60px" }}>
        <div className="hero-bg">
          {/* Background SVG wheel pattern */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
            {/* Giant faded wheel right side */}
            <div style={{ position: "absolute", right: "-8%", top: "50%", transform: "translateY(-50%)", width: "55vh", height: "55vh", opacity: 0.12 }}>
              <WheelSVG color="#ff6b00" variant={1} />
            </div>
            <div style={{ position: "absolute", right: "20%", bottom: "-10%", width: "25vh", height: "25vh", opacity: 0.07 }}>
              <WheelSVG color="#ff0080" variant={2} />
            </div>
          </div>
          {/* Gradient overlay left-to-right so text stays readable */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, #08090c 40%, rgba(8,9,12,0.55) 70%, rgba(8,9,12,0.2) 100%)",
          }} />
          <div className="orb" style={{ width: 600, height: 600, top: "-10%", right: "-5%", background: "rgba(255,107,0,.18)", animation: "pulse 6s ease-in-out infinite" }} />
          <div className="orb" style={{ width: 400, height: 400, bottom: "-5%", left: "-5%", background: "rgba(255,0,128,.12)", animation: "pulse 8s ease-in-out infinite 2s" }} />
          {/* Grid overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,107,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <p className="section-kicker fade-up d1">Профессиональный сервис дисков</p>

            <h1 className="fade-up d2" style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(52px, 8vw, 100px)", fontWeight: 700, lineHeight: .95, letterSpacing: 2, marginBottom: 28 }}>
              <span style={{ color: "#fff" }}>ДИСКИ </span>
              <span className="grad-text">КОТОРЫЕ<br />ВОСХИЩАЮТ</span>
            </h1>

            <p className="fade-up d3" style={{ fontSize: 18, color: "rgba(255,255,255,.55)", lineHeight: 1.75, maxWidth: 520, marginBottom: 44 }}>
              Покраска, алмазная проточка, восстановление и кастомизация литых дисков. Профессиональное оборудование, гарантия результата и чёткие сроки.
            </p>

            <div className="hero-btns fade-up d4" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
              <button className="btn btn-grad" onClick={() => scrollTo("contact")}>🚀 Рассчитать стоимость</button>
              <button className="btn btn-outline" onClick={() => scrollTo("services")}>Наши услуги</button>
            </div>

            {/* Stats row */}
            <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ paddingLeft: 20, borderLeft: "2px solid rgba(255,107,0,.35)" }}>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 36, fontWeight: 700, lineHeight: 1 }} className="grad-text">{s.value}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-wrap">
        <div className="ticker">
          {[...Array(2)].map((_, rep) =>
            ["Покраска дисков", "Алмазная проточка", "Ремонт и восстановление", "Полировка", "Кастомный дизайн", "Покраска суппортов", "Шиномонтаж", "Антикоррозийная защита"].map((item, i) => (
              <span key={`${rep}-${i}`} className="ticker-item">
                <span className="ticker-dot" /> {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── PROMOS ── */}
      <section id="promos" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <p className="section-kicker">Актуальные предложения</p>
        <h2 className="section-title">Акции и <span className="grad-text">спецпредложения</span></h2>

        <div className="grid-3">
          {PROMOS.map((p, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, rgba(255,107,0,.08) 0%, rgba(255,0,128,.06) 100%)",
              border: "1px solid rgba(255,107,0,.2)", borderRadius: 20, padding: "32px 28px",
              display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: 20, right: 20 }}>
                <span className="tag" style={{ background: p.badgeColor + "22", color: p.badgeColor, border: `1px solid ${p.badgeColor}44` }}>{p.badge}</span>
              </div>
              <div style={{ fontSize: 42 }}>{p.icon}</div>
              <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700 }}>{p.title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.55)", lineHeight: 1.65 }}>{p.desc}</div>
              <button className="btn btn-outline btn-sm" onClick={() => scrollTo("contact")} style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                Воспользоваться
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "80px 40px", background: "rgba(255,255,255,.015)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-kicker">Что мы делаем</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Наши <span className="grad-text">услуги</span></h2>
            <a href="#contact" style={{ fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 600, letterSpacing: 1, color: "var(--orange)", textDecoration: "none" }} onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
              Все цены →
            </a>
          </div>

          <div className="grid-4">
            {SERVICES.map((s) => (
              <div key={s.id} className="card" style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}
                onClick={() => setActiveService(s)}>
                {/* Illustration */}
                <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                  <ServiceIllustration color={s.color} variant={s.variant} icon={s.emoji} />
                  {s.tag && (
                    <div style={{ position: "absolute", top: 10, right: 10 }}>
                      <span className="tag" style={{ background: "rgba(255,107,0,.9)", color: "#fff", fontSize: 10, padding: "3px 10px" }}>{s.tag}</span>
                    </div>
                  )}
                </div>
                {/* Text */}
                <div style={{ padding: "18px 20px 22px" }}>
                  <h3 style={{ fontFamily: "'Rajdhani'", fontSize: 18, fontWeight: 700, letterSpacing: .4, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.48)", lineHeight: 1.6, marginBottom: 14 }}>{s.short}</p>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 21, fontWeight: 700, color: s.color }}>{s.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail modal */}
      {activeService && (
        <div className="modal-overlay" onClick={() => setActiveService(null)}>
          <div className="modal" style={{ padding: 0, overflow: "hidden", maxWidth: 500 }} onClick={(e) => e.stopPropagation()}>
            {/* Illustration header */}
            <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
              {activeService && <ServiceIllustration color={activeService.color} variant={activeService.variant} icon={activeService.emoji} />}
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, #0f1015 0%, transparent 60%)` }} />
              <button onClick={() => setActiveService(null)} style={{ position: "absolute", top: 16, right: 16, background: "rgba(0,0,0,.6)", backdropFilter: "blur(8px)", border: "none", color: "#fff", width: 36, height: 36, borderRadius: "50%", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
            </div>
            {/* Content */}
            <div style={{ padding: "24px 32px 32px" }}>
              <h3 style={{ fontFamily: "'Rajdhani'", fontSize: 28, fontWeight: 700, marginBottom: 10 }}>{activeService.title}</h3>
              <p style={{ color: "rgba(255,255,255,.6)", lineHeight: 1.7, marginBottom: 20 }}>{activeService.short}</p>
              <div style={{ fontFamily: "'Rajdhani'", fontSize: 32, fontWeight: 700, color: activeService.color, marginBottom: 24 }}>{activeService.price}</div>
              <button className="btn btn-grad" style={{ width: "100%", justifyContent: "center" }} onClick={() => { setFormData(f => ({ ...f, service: activeService.title })); setActiveService(null); scrollTo("contact"); }}>Записаться на эту услугу</button>
            </div>
          </div>
        </div>
      )}

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p className="section-kicker">Почему выбирают нас</p>
            <h2 className="section-title">Качество,<br />которое <span className="grad-text">говорит само</span></h2>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              Мы специализируемся исключительно на работе с дисками. Никаких попутных услуг — только то, в чём мы профессионалы на 100%.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {ADVANTAGES.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,107,0,.1)", border: "1px solid rgba(255,107,0,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{a.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, marginBottom: 3 }}>{a.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? "linear-gradient(135deg, rgba(255,107,0,.12), rgba(255,0,128,.08))" : "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,107,0,.15)", borderRadius: 20, padding: "32px 24px", textAlign: "center"
              }}>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 52, fontWeight: 700, lineHeight: 1 }} className={i % 2 === 0 ? "grad-text" : ""}>{s.value}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,.5)", marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
            {/* Process badge */}
            <div style={{ gridColumn: "1 / -1", background: "rgba(57,255,20,.06)", border: "1px solid rgba(57,255,20,.2)", borderRadius: 20, padding: "24px", display: "flex", alignItems: "center", gap: 20 }}>
              <span style={{ fontSize: 36 }}>📲</span>
              <div>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, color: "#39ff14" }}>Фото на каждом этапе</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>Присылаем фото в WhatsApp / Telegram</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 40px", background: "rgba(255,107,0,.03)", borderTop: "1px solid rgba(255,107,0,.08)", borderBottom: "1px solid rgba(255,107,0,.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-kicker" style={{ textAlign: "center" }}>Как это работает</p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Всего <span className="grad-text">4 шага</span></h2>
          <div className="grid-4" style={{ marginTop: 40 }}>
            {[
              { n: "01", icon: "📞", title: "Позвоните или оставьте заявку", desc: "Обсудим задачу, назовём цену и назначим удобное время." },
              { n: "02", icon: "🚗", title: "Привезите диски", desc: "Сдаёте диски — мы выдаём подменный комплект бесплатно." },
              { n: "03", icon: "⚙️", title: "Мы работаем", desc: "Фото-отчёт в процессе. Срок — 1–2 рабочих дня." },
              { n: "04", icon: "✅", title: "Забираете результат", desc: "Принимаете работу, убеждаетесь в качестве и уезжаете довольным." },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center", padding: "28px 20px" }}>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 64, fontWeight: 700, lineHeight: 1, color: "rgba(255,107,0,.12)", marginBottom: -16 }}>{step.n}</div>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{step.icon}</div>
                <h4 style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{step.title}</h4>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <p className="section-kicker">Клиенты о нас</p>
        <h2 className="section-title">Что говорят <span className="grad-text">наши клиенты</span></h2>

        <div className="grid-3" style={{ marginTop: 40 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card">
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[...Array(r.stars)].map((_, j) => <span key={j} className="star">★</span>)}
              </div>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.65)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>«{r.text}»</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700 }}>{r.name}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.35)" }}>{r.car}</div>
                </div>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--grad)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                  {r.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" style={{ padding: "80px 40px", background: "linear-gradient(135deg, rgba(255,107,0,.06) 0%, rgba(255,0,128,.04) 100%)", borderTop: "1px solid rgba(255,107,0,.1)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p className="section-kicker">Записаться</p>
          <h2 className="section-title">Оставьте заявку —<br /><span className="grad-text">перезвоним за 30 минут</span></h2>
          <p style={{ color: "rgba(255,255,255,.45)", fontSize: 15, marginBottom: 40 }}>
            Бесплатная консультация и расчёт стоимости. Без обязательств.
          </p>

          {submitted ? (
            <div style={{ padding: "48px 32px", background: "rgba(57,255,20,.08)", border: "1px solid rgba(57,255,20,.25)", borderRadius: 24 }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: "'Rajdhani'", fontSize: 26, fontWeight: 700, color: "#39ff14", marginBottom: 12 }}>Заявка принята!</h3>
              <p style={{ color: "rgba(255,255,255,.5)" }}>Мы перезвоним вам в ближайшие 30 минут.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
              <div className="grid-2">
                <div>
                  <label style={{ fontSize: 13, color: "rgba(255,255,255,.4)", display: "block", marginBottom: 8, letterSpacing: .5 }}>Ваше имя</label>
                  <input className="input-field" placeholder="Александр" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "rgba(255,255,255,.4)", display: "block", marginBottom: 8, letterSpacing: .5 }}>Телефон</label>
                  <input className="input-field" placeholder="+7 XXX XXX XX XX" value={formData.phone} onChange={handlePhoneChange} inputMode="tel" />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, color: "rgba(255,255,255,.4)", display: "block", marginBottom: 8, letterSpacing: .5 }}>Услуга</label>
                <select className="input-field" value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                  <option value="">Выберите услугу</option>
                  {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 13, color: "rgba(255,255,255,.4)", display: "block", marginBottom: 8, letterSpacing: .5 }}>Комментарий (необязательно)</label>
                <textarea className="input-field" rows={3} placeholder="Опишите задачу, марку авто, размер дисков..." value={formData.comment} onChange={e => setFormData({ ...formData, comment: e.target.value })} style={{ resize: "vertical" }} />
              </div>
              <button className="btn btn-grad" onClick={handleSubmit} disabled={sending || !formData.name || !phoneComplete} style={{ width: "100%", justifyContent: "center", marginTop: 8, padding: "18px", fontSize: 18, opacity: (sending || !formData.name || !phoneComplete) ? 0.5 : 1, cursor: (!formData.name || !phoneComplete) ? "not-allowed" : "pointer" }}>
                {sending ? "⏳ Отправка…" : "🚀 Отправить заявку"}
              </button>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.25)", textAlign: "center" }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          )}

          {/* Quick contact */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
            {[["📞", "+7 (999) 123-45-67", "#ff6b00"], ["✈️", "Написать в Telegram", "#00d4ff"], ["💬", "WhatsApp", "#39ff14"]].map(([icon, label, color], i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", background: color + "0f", border: `1px solid ${color}33`, borderRadius: 50, cursor: "pointer", transition: "all .2s" }}>
                <span>{icon}</span>
                <span style={{ fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 600, color }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COOKIE BANNER ── */}
      {!cookieAccepted && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 600,
          background: "rgba(10,11,15,.97)", backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,107,0,.2)",
          padding: "16px 40px", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 20, flexWrap: "wrap",
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", margin: 0, maxWidth: 680, lineHeight: 1.6 }}>
            Мы используем файлы cookie и аналитику для улучшения работы сайта.
            Продолжая использовать сайт, вы соглашаетесь с их использованием.
          </p>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <button className="btn btn-outline btn-sm" onClick={() => setCookieAccepted(true)}>
              Отклонить
            </button>
            <button className="btn btn-grad btn-sm" onClick={() => { localStorage.setItem("cookie_ok", "1"); setCookieAccepted(true); }}>
              Принять
            </button>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer style={{ padding: "48px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 40 }}>
            <div style={{ maxWidth: 280 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 20, fontWeight: 700, letterSpacing: 2, whiteSpace: "nowrap" }}>
                  WHEEL<span style={{ display: "inline-block", margin: "0 5px", color: "#ff6b00", fontWeight: 500, transform: "translateY(-1px)" }}>/</span><span className="grad-text">CRAFT</span>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.35)", lineHeight: 1.7 }}>
                Профессиональный сервис по покраске, проточке и восстановлению литых дисков.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,.3)", marginBottom: 16, textTransform: "uppercase" }}>Услуги</div>
              {SERVICES.slice(0, 5).map(s => (
                <div key={s.id} onClick={() => scrollTo("services")} style={{ fontSize: 14, color: "rgba(255,255,255,.45)", marginBottom: 10, cursor: "pointer" }}>{s.title}</div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Rajdhani'", fontSize: 13, fontWeight: 600, letterSpacing: 2, color: "rgba(255,255,255,.3)", marginBottom: 16, textTransform: "uppercase" }}>Контакты</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)", marginBottom: 10 }}>+7 (999) 123-45-67</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)", marginBottom: 10 }}>Ежедневно с 8:00 до 22:00</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)" }}>г. Москва, ул. Примерная, д. 1</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>© 2026 WheelCraft. Все права защищены.</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>Политика конфиденциальности</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
