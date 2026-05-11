const { Resvg } = require("@resvg/resvg-js");
const { writeFileSync, mkdirSync } = require("fs");
const path = require("path");

const SERVICES = [
  { id: "pokraska",  title: "Покраска дисков",      sub: "Порошковая покраска в Москве",       price: "от 2 500 ₽", color: "#ff6b00" },
  { id: "prochka",   title: "Алмазная проточка",     sub: "Diamond cut на станке с ЧПУ",       price: "от 5 000 ₽", color: "#00d4ff" },
  { id: "remont",    title: "Ремонт дисков",         sub: "Правка, сварка TIG / Димет",        price: "от 1 500 ₽", color: "#ff0080" },
  { id: "supporty",  title: "Покраска суппортов",    sub: "Термостойкая краска, любой цвет",   price: "от 2 000 ₽", color: "#39ff14" },
];

function spokes(color) {
  const out = [];
  for (let i = 0; i < 5; i++) {
    const a = (i * 72 - 90) * Math.PI / 180;
    const x2 = (Math.cos(a) * 108).toFixed(1);
    const y2 = (Math.sin(a) * 108).toFixed(1);
    out.push(`<line x1="0" y1="0" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="10" stroke-opacity="0.55" stroke-linecap="round"/>`);
  }
  return out.join("\n    ");
}

function makeSvg({ title, sub, price, color }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#0d0d10"/>
  <defs>
    <radialGradient id="g1" cx="20%" cy="50%" r="55%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="80%" cy="80%" r="40%">
      <stop offset="0%" stop-color="#ff0080" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#ff0080" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <!-- grid lines -->
  <line x1="0" y1="210" x2="1200" y2="210" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  <line x1="0" y1="420" x2="1200" y2="420" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  <!-- wheel -->
  <g transform="translate(180, 315)">
    <circle cx="0" cy="0" r="120" fill="none" stroke="${color}" stroke-width="14" stroke-opacity="0.3"/>
    <circle cx="0" cy="0" r="80" fill="none" stroke="${color}" stroke-width="2" stroke-opacity="0.2"/>
    ${spokes(color)}
    <circle cx="0" cy="0" r="20" fill="${color}" fill-opacity="0.6"/>
    <circle cx="0" cy="0" r="10" fill="${color}"/>
  </g>
  <!-- service title -->
  <text x="360" y="248" font-family="system-ui,Arial,sans-serif" font-size="74" font-weight="700" fill="white">${title}</text>
  <text x="364" y="306" font-family="system-ui,Arial,sans-serif" font-size="30" fill="rgba(255,255,255,0.45)" letter-spacing="1">${sub}</text>
  <!-- price pill -->
  <rect x="360" y="336" width="280" height="66" rx="33" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-width="1.5" stroke-opacity="0.35"/>
  <text x="500" y="380" font-family="system-ui,Arial,sans-serif" font-size="36" font-weight="700" fill="${color}" text-anchor="middle">${price}</text>
  <!-- domain -->
  <text x="364" y="464" font-family="system-ui,Arial,sans-serif" font-size="26" fill="rgba(255,255,255,0.3)">bi-color.ru · Москва, Внуково</text>
  <!-- brand -->
  <text x="364" y="540" font-family="system-ui,Arial,sans-serif" font-size="20" letter-spacing="5" fill="rgba(255,255,255,0.15)">BI COLOR · BEAUTIFUL IRON</text>
</svg>`;
}

const outDir = path.join(__dirname, "..", "public");
for (const s of SERVICES) {
  const svg = makeSvg(s);
  const resvg = new Resvg(svg, { font: { loadSystemFonts: false } });
  const png = resvg.render().asPng();
  const outPath = path.join(outDir, `og-${s.id}.png`);
  writeFileSync(outPath, png);
  console.log(`✓ og-${s.id}.png`);
}
