export const WheelSVG = ({ color, variant = 0 }) => {
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
      <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="5" strokeOpacity="0.6" />
      <circle cx="50" cy="50" r="28" fill="none" stroke={color} strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="50" cy="50" r="8" fill={color} fillOpacity="0.5" />
      <circle cx="50" cy="50" r="4" fill={color} fillOpacity="0.9" />
      {spokeLines.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2}
          stroke={color} strokeWidth="3.5" strokeOpacity="0.55" strokeLinecap="round" />
      ))}
      {spokeLines.map((s, i) => {
        const a = i * angleStep - Math.PI / 2;
        return <circle key={i} cx={50 + Math.cos(a) * 28} cy={50 + Math.sin(a) * 28}
          r="2.5" fill={color} fillOpacity="0.7" />;
      })}
    </svg>
  );
};

export const Logo = () => {
  const spokes = [[20,10],[29.5,16.9],[25.9,28.1],[14.1,28.1],[10.5,16.9]];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg viewBox="0 0 40 40" width="36" height="36" style={{ flexShrink: 0 }}>
        {["#00d4ff","#ffd700","#7fd400","#ff0080","#bf00ff","#00eaff"].map((color, i) => (
          <circle key={i} cx="20" cy="20" r="15" fill="none"
            stroke={color} strokeWidth="5" strokeLinecap="round"
            strokeDasharray="15.71 78.54"
            strokeDashoffset={-(i * 15.71)}
            transform="rotate(-90 20 20)"/>
        ))}
        <circle cx="20" cy="20" r="12.8" fill="#090910"/>
        <circle cx="20" cy="20" r="9.8" fill="#080810"/>
        {spokes.map(([x, y], i) => (
          <line key={i} x1="20" y1="20" x2={x} y2={y} stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round"/>
        ))}
        {spokes.map(([x, y], i) => (
          <circle key={`b${i}`} cx={x} cy={y} r="1.2" fill="#8b5cf6" fillOpacity="0.8"/>
        ))}
        <circle cx="20" cy="20" r="3" fill="#bf00ff"/>
        <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.7)"/>
      </svg>
      <div>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: 2.5, lineHeight: 1, color: "#fff", whiteSpace: "nowrap" }}>
          BI <span style={{ background: "linear-gradient(135deg,#ff6b00,#ff0080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>COLOR</span>
        </div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,.35)", letterSpacing: 2.5, textTransform: "uppercase", whiteSpace: "nowrap", marginTop: 2 }}>BEAUTIFUL IRON</div>
      </div>
    </div>
  );
};

export const getMoscowIsOpen = () => {
  const now = new Date();
  const moscow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
  const h = moscow.getHours();
  return h >= 10 && h < 19;
};

export default Logo;
