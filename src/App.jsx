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
    {/* Service icon center-left */}
    <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
      color: color, filter: "drop-shadow(0 0 16px " + color + "99)" }}>
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
    price: "от 5 000 ₽", tag: "Популярно", color: "#00d4ff", variant: 1,
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
    short: "Двухцветные схемы со спицами в акцентном цвете, контрастный обод, брендирование под ваш стиль.",
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
  { icon: "🏆", title: "Гарантия 4 года", desc: "Выдаём письменную гарантию на все виды работ. Редкость на рынке.", highlight: true },
  { icon: "🔍", title: "Бесплатная диагностика", desc: "Осмотрим диски и оценим объём работ бесплатно, без обязательств." },
  { icon: "⏱️", title: "Сроки не срываем", desc: "Назвали дату — сдали в срок. Без «ещё пару дней»." },
  { icon: "💬", title: "Фото-отчёт", desc: "Присылаем фото процесса и результата в мессенджер." },
];

const REVIEWS = [
  { name: "DGS", date: "7 мая 2026", text: "Связались, обговорили нюансы, привёз детали на покраску, всё объяснили, покраску произвели очень качественно. От новых из магазина не отличить. Спасибо большое ещё раз. Рекомендую 👍", stars: 5 },
  { name: "Евгений", date: "2 мая 2026", text: "Красил диски 19 радиуса с алмазной проточкой. Покрасили отлично, без нареканий. В ходе работ была выполнена правка диска и сезонный шиномонтаж. Работа выполнена раньше оговоренного срока. Однозначно рекомендую.", stars: 5 },
  { name: "SapogMl", date: "25 апреля 2026", text: "Выправили и покрасили комплект поеденных коррозией дисков за более чем божеские деньги. Цвет порошка подобрали удачно, покрасили хорошо, диски стали как новые. Мастера дружелюбные и внимательные, впечатление исключительно положительное, в следующий раз поеду сюда же.", stars: 5 },
];

const STATS = [
  { value: "500+", label: "дисков в месяц" },
  { value: "7", label: "лет опыта" },
  { value: "98%", label: "довольных клиентов" },
  { value: "1–2", label: "дня срок работы" },
];

const PROMO_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40"><circle cx="12" cy="12" r="10"/><line x1="8" y1="16" x2="16" y2="8"/><circle cx="9.5" cy="9.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="14.5" cy="14.5" r="1.5" fill="currentColor" stroke="none"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="9 11 11 13 14 9"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
];

const ADVANTAGE_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>,
];

const SERVICE_ICONS = [
  /* 1. Покраска дисков — paintbrush */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/><path d="M20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>,
  /* 2. Алмазная проточка — diamond gem */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M6 3h12l3.3 5-9.3 13-9.3-13z"/><line x1="3" y1="8" x2="21" y2="8"/><path d="M6 3l6 5 6-5"/></svg>,
  /* 3. Ремонт — wrench */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  /* 4. Полировка — rotating arrows */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>,
  /* 5. Антикоррозийная — shield + droplet */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9.5 13c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-1.5-2.5-4.5-2.5-4.5S9.5 11.5 9.5 13z"/></svg>,
  /* 6. Кастомный дизайн — pen/edit */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  /* 7. Покраска суппортов — flame */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><path d="M12 2C9.5 6.5 7 9 7 13a5 5 0 0010 0c0-3.5-1.5-5.5-3-7 0 1.5-.5 2.5-1 3C12.5 7 12.5 4 12 2z"/></svg>,
  /* 8. Шиномонтаж — tire/wheel */
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="48" height="48"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>,
];

const Logo = () => {
  const spokes = [[20,10],[29.5,16.9],[25.9,28.1],[14.1,28.1],[10.5,16.9]];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg viewBox="0 0 40 40" width="36" height="36" style={{ flexShrink: 0 }}>
        {/* Rainbow arc ring — 6 arcs × 60° each = full 360° colored halo
            r=15, strokeWidth=5 → inner edge r=12.5 (under tire), outer edge r=17.5 (visible)
            C=94.25, each arc=15.71, gap=78.54; rotate(-90) starts at 12 o'clock */}
        {["#00d4ff","#ffd700","#7fd400","#ff0080","#bf00ff","#00eaff"].map((color, i) => (
          <circle key={i} cx="20" cy="20" r="15" fill="none"
            stroke={color} strokeWidth="5" strokeLinecap="round"
            strokeDasharray="15.71 78.54"
            strokeDashoffset={-(i * 15.71)}
            transform="rotate(-90 20 20)"/>
        ))}
        {/* Tire — solid black on top, hides inner portion of halo */}
        <circle cx="20" cy="20" r="12.8" fill="#090910"/>
        {/* Rim */}
        <circle cx="20" cy="20" r="9.8" fill="#080810"/>
        {/* Spokes */}
        {spokes.map(([x, y], i) => (
          <line key={i} x1="20" y1="20" x2={x} y2={y} stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round"/>
        ))}
        {/* Bolt holes */}
        {spokes.map(([x, y], i) => (
          <circle key={`b${i}`} cx={x} cy={y} r="1.2" fill="#8b5cf6" fillOpacity="0.8"/>
        ))}
        {/* Hub */}
        <circle cx="20" cy="20" r="3" fill="#bf00ff"/>
        <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.7)"/>
      </svg>
      <div>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: 2.5, lineHeight: 1, color: "#fff", whiteSpace: "nowrap" }}>
          BI <span className="grad-text">COLOR</span>
        </div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,.35)", letterSpacing: 2.5, textTransform: "uppercase", whiteSpace: "nowrap", marginTop: 2 }}>BEAUTIFUL IRON</div>
      </div>
    </div>
  );
};

/* ─── COMPONENT ─────────────────────────────────────── */
export default function App() {
  const [cookieAccepted, setCookieAccepted] = useState(() => !!localStorage.getItem("cookie_ok"));
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const nameInputRef = useRef(null);

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
      await fetch("https://script.google.com/macros/s/AKfycbySBq271s3uAjtSQQApJnRHVt3fHu3UTcABr7ZGJq4FndK8LHtpr1FTKZgvpi0a4Q1Vyg/exec", {
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
    if (id === "contact") setTimeout(() => nameInputRef.current?.focus(), 600);
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
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
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

        /* ── Hamburger ── */
        .hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; }
        .hamburger span { display: block; width: 22px; height: 2px; background: #fff; border-radius: 2px; transition: all .3s ease; }

        /* ── Mobile menu ── */
        .mobile-menu {
          position: fixed; inset: 0; z-index: 400;
          background: rgba(8,9,12,.98); backdrop-filter: blur(24px);
          display: flex; flex-direction: column;
          animation: slideInRight .3s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }

        @media (max-width:768px) {
          .nav-phone { display: none !important; }
          .nav-cta-btn { display: none !important; }
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-section { padding: 100px 20px 60px !important; }
          .section-pad { padding: 60px 20px !important; }
          .section-pad-center { padding: 60px 20px !important; max-width: 100% !important; }
          .nav-bar { padding: 0 20px !important; }
          .footer-inner { padding: 40px 20px !important; }
          .ticker-wrap { display: none; }
        }
        @media (max-width:600px) {
          .grid-3, .grid-4, .grid-2 { grid-template-columns: 1fr; }
          .hero-btns { flex-direction: column; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
          .timeline-line { display: none; }
          .about-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .cookie-banner { padding: 16px 20px !important; }
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
        .ticker:hover { animation-play-state: paused; }
        .ticker-item {
          font-family: 'Rajdhani', sans-serif; font-size: 15px; font-weight: 600;
          letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,.5);
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
          cursor: pointer; transition: color .2s;
        }
        .ticker-item:hover { color: #fff; }
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

      {/* ── MOBILE MENU ── */}
      {mobileMenu && (
        <div className="mobile-menu">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 70, borderBottom: "1px solid rgba(255,255,255,.06)", flexShrink: 0 }}>
            <Logo />
            <button onClick={() => setMobileMenu(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,.6)", cursor: "pointer", padding: 8 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="24" height="24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 32px", gap: 8 }}>
            {[["Услуги", "services"], ["Акции", "promos"], ["О нас", "about"], ["Отзывы", "reviews"], ["Контакты", "contact"]].map(([label, id]) => (
              <div key={id} onClick={() => scrollTo(id)} style={{ fontFamily: "'Rajdhani'", fontSize: 36, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,.7)", cursor: "pointer", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.05)", transition: "color .2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#ff6b00"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.7)"}>
                {label}
              </div>
            ))}
          </div>
          <div style={{ padding: "24px 32px 48px", borderTop: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column", gap: 16 }}>
            <a href="tel:+74991365500" style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,.6)", letterSpacing: 1 }}>+7 (499) 136-55-00</a>
            <a href="tel:+79251101052" style={{ fontFamily: "'Rajdhani'", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,.45)", letterSpacing: 1 }}>+7 (925) 110-10-52</a>
            <button className="btn btn-grad" onClick={() => scrollTo("contact")} style={{ justifyContent: "center" }}>Записаться</button>
          </div>
        </div>
      )}

      {/* ── NAVBAR ── */}
      <nav className="nav-bar" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 40px", height: 70,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,9,12,.95)" : "rgba(8,9,12,.7)",
        backdropFilter: "blur(24px)",
        borderBottom: scrolled ? "1px solid rgba(255,107,0,.12)" : "none",
        transition: "all .4s ease",
      }}>
        <div style={{ cursor: "pointer" }} onClick={() => scrollTo("hero")}>
          <Logo />
        </div>

        <div className="nav-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {[["Услуги", "services"], ["Акции", "promos"], ["О нас", "about"], ["Отзывы", "reviews"], ["Контакты", "contact"]].map(([label, id]) => (
            <span key={id} className="nav-item" onClick={() => scrollTo(id)}>{label}</span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a className="nav-phone" href="tel:+74991365500" style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, color: "rgba(255,255,255,.8)", letterSpacing: 0.5 }}>
            +7 (499) 136-55-00
          </a>
          <button className="btn btn-grad btn-sm nav-cta-btn" onClick={() => scrollTo("contact")}>Записаться</button>
          <button className="hamburger" onClick={() => setMobileMenu(true)} aria-label="Меню">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero-section" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", padding: "100px 40px 60px" }}>
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
              <button className="btn btn-grad" onClick={() => scrollTo("contact")}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Рассчитать стоимость
              </button>
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
            SERVICES.map((s) => (
              <span key={`${rep}-${s.id}`} className="ticker-item" onClick={() => setActiveService(s)}>
                <span className="ticker-dot" style={{ background: s.color }} /> {s.title}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── PROMOS ── */}
      <section id="promos" className="section-pad" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
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
              <div style={{ color: p.badgeColor, marginBottom: 4 }}>{PROMO_ICONS[i]}</div>
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
      <section id="services" className="section-pad" style={{ padding: "80px 40px", background: "rgba(255,255,255,.015)" }}>
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
              <div key={s.id} className="card" style={{ cursor: "pointer", padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
                onClick={() => setActiveService(s)}>
                {/* Illustration */}
                <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                  <ServiceIllustration color={s.color} variant={s.variant} icon={SERVICE_ICONS[s.id - 1]} />
                  {s.tag && (
                    <div style={{ position: "absolute", top: 10, right: 10 }}>
                      <span className="tag" style={{ background: "rgba(255,107,0,.9)", color: "#fff", fontSize: 10, padding: "3px 10px" }}>{s.tag}</span>
                    </div>
                  )}
                </div>
                {/* Text */}
                <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontFamily: "'Rajdhani'", fontSize: 18, fontWeight: 700, letterSpacing: .4, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.48)", lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{s.short}</p>
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
              {activeService && <ServiceIllustration color={activeService.color} variant={activeService.variant} icon={SERVICE_ICONS[activeService.id - 1]} />}
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
      <section id="about" className="section-pad" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p className="section-kicker">Почему выбирают нас</p>
            <h2 className="section-title">Качество,<br />которое <span className="grad-text">говорит само</span></h2>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 16, lineHeight: 1.75, marginBottom: 36 }}>
              Мы специализируемся исключительно на работе с дисками. Никаких попутных услуг — только то, в чём мы профессионалы на 100%.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {ADVANTAGES.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", ...(a.highlight ? { background: "linear-gradient(135deg, rgba(255,215,0,.07), rgba(255,165,0,.04))", border: "1px solid rgba(255,215,0,.25)", borderRadius: 14, padding: "12px 14px", margin: "-12px -14px" } : {}) }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: a.highlight ? "rgba(255,215,0,.12)" : "rgba(255,107,0,.08)", border: `1px solid ${a.highlight ? "rgba(255,215,0,.35)" : "rgba(255,107,0,.18)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: a.highlight ? "#ffd700" : "#ff6b00" }}>
                    {ADVANTAGE_ICONS[i]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Rajdhani'", fontSize: 17, fontWeight: 700, marginBottom: 3, color: a.highlight ? "#ffd700" : "inherit" }}>{a.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className="about-stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
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
              <div style={{ color: "#39ff14", flexShrink: 0 }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg></div>
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
          <p className="section-kicker" style={{ textAlign: "center" }}>Процесс работы</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 64 }}>От звонка до <span className="grad-text">результата</span></h2>

          <div style={{ position: "relative" }}>
            {/* Connector line — desktop only */}
            <div className="timeline-line" style={{
              position: "absolute", top: 31, left: "calc(12.5% + 8px)", right: "calc(12.5% + 8px)", height: 1,
              backgroundImage: "repeating-linear-gradient(90deg, rgba(255,107,0,.4) 0, rgba(255,107,0,.4) 6px, transparent 6px, transparent 14px)",
            }} />

            <div className="grid-4">
              {[
                { n: "01", label: "Заявка",  title: "Позвоните или оставьте заявку", desc: "Обсудим задачу, назовём цену и назначим удобное время." },
                { n: "02", label: "Приёмка", title: "Привезите диски",               desc: "Сдаёте диски — проводим бесплатную диагностику и согласовываем объём работ." },
                { n: "03", label: "Работа",  title: "Мы работаем",                   desc: "Фото-отчёт в процессе. Срок — 1–2 рабочих дня." },
                { n: "04", label: "Выдача",  title: "Забираете результат",           desc: "Принимаете работу, убеждаетесь в качестве и уезжаете довольным." },
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, rgba(255,107,0,.14), rgba(255,0,128,.08))",
                    border: "1.5px solid rgba(255,107,0,.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 24, position: "relative", zIndex: 1,
                    boxShadow: "0 0 28px rgba(255,107,0,.12)",
                  }}>
                    <span style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, background: "var(--grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.n}</span>
                  </div>
                  <span className="tag" style={{ background: "rgba(255,107,0,.1)", color: "var(--orange)", border: "1px solid rgba(255,107,0,.22)", marginBottom: 14, fontSize: 10, letterSpacing: 2 }}>{step.label}</span>
                  <h4 style={{ fontFamily: "'Rajdhani'", fontSize: 18, fontWeight: 700, marginBottom: 10, letterSpacing: .5 }}>{step.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,.42)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="section-pad" style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
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
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.35)" }}>{r.date}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--grad)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
                    {r.name[0]}
                  </div>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,.3)", letterSpacing: .5 }}>Авито</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://www.avito.ru/odintsovo/predlozheniya_uslug/poroshkovaya_pokraska_diskov_restavratsiya_oshipovka_4511357658" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", background: "rgba(0,170,255,0.06)", border: "1px solid rgba(0,170,255,0.2)", borderRadius: 50, color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: 15, transition: "all .2s" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2L2 22h4.5l2-4.5h7l2 4.5H22L12 2zm0 6l2.5 6.5h-5L12 8z"/></svg>
            Все отзывы на Авито
          </a>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="section-pad" style={{ padding: "80px 40px", background: "linear-gradient(135deg, rgba(255,107,0,.06) 0%, rgba(255,0,128,.04) 100%)", borderTop: "1px solid rgba(255,107,0,.1)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p className="section-kicker">Записаться</p>
          <h2 className="section-title">Оставьте заявку —<br /><span className="grad-text">перезвоним за 30 минут</span></h2>
          <p style={{ color: "rgba(255,255,255,.45)", fontSize: 15, marginBottom: 40 }}>
            Бесплатная консультация и расчёт стоимости. Без обязательств.
          </p>

          {submitted ? (
            <div style={{ padding: "48px 32px", background: "rgba(57,255,20,.08)", border: "1px solid rgba(57,255,20,.25)", borderRadius: 24 }}>
              <div style={{ marginBottom: 16, color: "#39ff14" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="64" height="64"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 style={{ fontFamily: "'Rajdhani'", fontSize: 26, fontWeight: 700, color: "#39ff14", marginBottom: 12 }}>Заявка принята!</h3>
              <p style={{ color: "rgba(255,255,255,.5)" }}>Мы перезвоним вам в ближайшие 30 минут.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
              <div className="grid-2">
                <div>
                  <label style={{ fontSize: 13, color: "rgba(255,255,255,.4)", display: "block", marginBottom: 8, letterSpacing: .5 }}>Ваше имя</label>
                  <input ref={nameInputRef} className="input-field" placeholder="Александр" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
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
                {sending ? (
                  <><svg style={{ animation: "spin 0.8s linear infinite", flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="18" height="18"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M22 12A10 10 0 0012 2"/></svg> Отправка…</>
                ) : (
                  <><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Отправить заявку</>
                )}
              </button>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.25)", textAlign: "center" }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          )}

          {/* Quick contact */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>,
                label: "+7 (499) 136-55-00", color: "#ff6b00", href: "tel:+74991365500",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg>,
                label: "+7 (925) 110-10-52", color: "#ff6b00", href: "tel:+79251101052",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
                label: "Telegram", color: "#00d4ff", href: "https://t.me/+79652130999",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                label: "WhatsApp", color: "#39ff14", href: "https://wa.me/+79652130999",
              },
              {
                icon: <svg viewBox="0 0 720 720" fill="currentColor" fillRule="evenodd" width="20" height="20"><path d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z"/></svg>,
                label: "MAX", color: "#5b8af5", href: "https://max.ru/u/f9LHodD0cOJYTxRVH7UNrYX5gEvGuAuZmHCZvWv-gAKZxJ9uqv1t6BtCeY8",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2L2 22h4.5l2-4.5h7l2 4.5H22L12 2zm0 6l2.5 6.5h-5L12 8z"/></svg>,
                label: "Авито", color: "#00aaff", href: "https://www.avito.ru/odintsovo/predlozheniya_uslug/poroshkovaya_pokraska_diskov_restavratsiya_oshipovka_4511357658",
              },
            ].map(({ icon, label, color, href }, i) => (
              <a key={i} href={href} target={href.startsWith("tel:") ? "_self" : "_blank"} rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", background: color + "0f", border: `1px solid ${color}33`, borderRadius: 50, cursor: "pointer", transition: "all .2s" }}>
                <span style={{ color, display: "flex", alignItems: "center" }}>{icon}</span>
                <span style={{ fontFamily: "'Rajdhani'", fontSize: 15, fontWeight: 600, color }}>{label}</span>
              </a>
            ))}
          </div>

          {/* Address */}
          <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
            <a
              href="https://yandex.ru/maps/org/beautiful_iron/229939060915/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14, padding: "16px 28px", background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.15)", borderRadius: 16, maxWidth: 460 }}
            >
              <span style={{ color: "#ff6b00", flexShrink: 0, display: "flex" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,.8)", letterSpacing: 0.3 }}>
                  Москва, пос. Внуково, Центральная ул., 18с2
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,107,0,.5)", marginTop: 3, letterSpacing: 0.3 }}>
                  Открыть на Яндекс Картах →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── PRIVACY MODAL ── */}
      {privacyOpen && (
        <div className="modal-overlay" onClick={() => setPrivacyOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()} style={{
            maxWidth: 640, maxHeight: "80vh", display: "flex", flexDirection: "column", padding: 0, overflow: "hidden"
          }}>
            {/* Header */}
            <div style={{ padding: "28px 36px 20px", borderBottom: "1px solid rgba(255,255,255,.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
              <div>
                <div style={{ fontFamily: "'Rajdhani'", fontSize: 22, fontWeight: 700, letterSpacing: 1 }}>Политика конфиденциальности</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)", marginTop: 4 }}>Последнее обновление: май 2026</div>
              </div>
              <button onClick={() => setPrivacyOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,.4)", fontSize: 22, cursor: "pointer", lineHeight: 1 }}>✕</button>
            </div>
            {/* Scrollable content */}
            <div style={{ padding: "24px 36px 32px", overflowY: "auto", fontSize: 14, color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>
              {[
                ["1. Общие положения", "Настоящая политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта BI Color (далее — Сайт). Используя Сайт и заполняя форму заявки, вы соглашаетесь с условиями настоящей политики."],
                ["2. Какие данные мы собираем", "При отправке заявки через форму на Сайте мы собираем следующие данные:\n• Имя\n• Номер телефона\n• Выбранная услуга\n• Комментарий (если указан)\n\nДанные передаются через защищённое соединение."],
                ["3. Цели обработки данных", "Собранные данные используются исключительно для:\n• Связи с вами по вопросу оставленной заявки\n• Записи на услугу и согласования удобного времени\n\nМы не используем ваши данные для маркетинговых рассылок без вашего согласия."],
                ["4. Передача данных третьим лицам", "Ваши персональные данные не передаются и не продаются третьим лицам. Данные используются исключительно сотрудниками BI Color для обработки вашей заявки."],
                ["5. Файлы cookie и аналитика", "Сайт использует файлы cookie и инструменты веб-аналитики для улучшения качества обслуживания и анализа посещаемости. Вы можете отказаться от использования cookie в настройках браузера или через баннер на сайте."],
                ["6. Хранение и удаление данных", "Данные хранятся в течение срока, необходимого для обработки заявки. По вашему запросу мы удалим ваши персональные данные в течение 5 рабочих дней."],
                ["7. Ваши права", "Вы имеете право:\n• Запросить информацию о хранящихся данных\n• Потребовать исправления или удаления данных\n• Отозвать согласие на обработку данных\n\nДля реализации прав свяжитесь с нами по телефону +7 (499) 136-55-00."],
                ["8. Контакты", "По всем вопросам, связанным с обработкой персональных данных:\nТелефон: +7 (499) 136-55-00\nАдрес: г. Москва, пос. Внуково, Центральная ул., 18с2"],
              ].map(([title, text], i) => (
                <div key={i} style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "'Rajdhani'", fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8, letterSpacing: .5 }}>{title}</div>
                  <div style={{ whiteSpace: "pre-line" }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── COOKIE BANNER ── */}
      {!cookieAccepted && (
        <div className="cookie-banner" style={{
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
      <footer style={{ background: "#050508", borderTop: "1px solid rgba(255,255,255,.05)" }}>
        <div className="footer-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40, marginBottom: 40 }}>
            <div style={{ maxWidth: 280 }}>
              <div style={{ marginBottom: 16 }}>
                <Logo />
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
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)", marginBottom: 10 }}>+7 (499) 136-55-00</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)", marginBottom: 10 }}>Ежедневно с 8:00 до 22:00</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,.45)" }}>г. Москва, пос. Внуково, Центральная ул., 18с2</div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)" }}>© 2026 BI Color. Все права защищены.</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.2)", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3 }} onClick={() => setPrivacyOpen(true)}>Политика конфиденциальности</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
