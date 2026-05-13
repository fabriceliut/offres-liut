import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public');

const BG = '#07070A';
const SURFACE = '#111118';
const PRIMARY = '#766BFF';
const TEXT = '#F5F5FA';
const MUTED = '#8585A0';
const BORDER = 'rgba(118,107,255,0.18)';

const W = 1200;
const H = 630;

const pages = [
  {
    file: 'og-image.png',
    label: 'ASSOCIÉ OPÉRATIONNEL · LYON',
    title: "J'accompagne des dirigeants\nde PME & PMI",
    sub: 'dans la structuration de leur entreprise.',
    stats: ['+15 ans', '+150 organisations', 'retour x4,5'],
    url: 'offres.liut.me',
  },
  {
    file: 'og-entrepreneurs.png',
    label: 'PROGRAMME — ENTREPRENEURS',
    title: "Vous dirigez une PME.",
    sub: 'Votre organisation repose trop sur vous.',
    stats: ['6–8h / sem récupérées', 'Vue 360° en temps réel', 'Délégation ×2'],
    url: 'offres.liut.me/entrepreneurs',
  },
  {
    file: 'og-entreprises.png',
    label: 'PROGRAMME — ENTREPRISES',
    title: '10 jours sur le terrain,',
    sub: 'des résultats mesurés.',
    stats: ['10 jours effectifs', '6 mois terrain', 'retour x4,5'],
    url: 'offres.liut.me/entreprises',
  },
  {
    file: 'og-ia.png',
    label: 'PROGRAMME — INTÉGRATION IA',
    title: "L'IA aux bons moments,\naux bons endroits.",
    sub: "Intégrez l\u2019IA là où elle crée de la valeur. Pas plus.",
    stats: ['Audit IA', 'Déploiement terrain', 'Formation équipes'],
    url: 'offres.liut.me/ia',
  },
];

function makeSVG({ label, title, sub, stats, url }) {
  // Wrap title lines
  const titleLines = title.split('\n');

  // Compute title y start
  const titleY = 210;
  const lineH = 88;

  const titleBlocks = titleLines.map((line, i) =>
    `<text x="72" y="${titleY + i * lineH}" font-family="'Inter', 'Arial', sans-serif" font-size="72" font-weight="800" letter-spacing="-2" fill="${TEXT}">${esc(line)}</text>`
  ).join('\n    ');

  const subY = titleY + titleLines.length * lineH + 10;

  const statW = 260;
  const statGap = 32;
  const statStartX = 72;
  const statY = H - 108;

  const statBadges = stats.map((s, i) => {
    const x = statStartX + i * (statW + statGap);
    return `
    <rect x="${x}" y="${statY}" width="${statW}" height="44" rx="8" fill="${SURFACE}" stroke="${BORDER}" stroke-width="1.5"/>
    <text x="${x + statW / 2}" y="${statY + 28}" text-anchor="middle" font-family="'Inter', 'Arial', sans-serif" font-size="17" font-weight="600" fill="${PRIMARY}">${esc(s)}</text>`;
  }).join('');

  // Decorative violet blur circle
  const svgWidth = W;
  const svgHeight = H;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
  <defs>
    <radialGradient id="glow" cx="75%" cy="25%" r="55%">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="10%" cy="85%" r="35%">
      <stop offset="0%" stop-color="${PRIMARY}" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${svgWidth}" height="${svgHeight}" fill="${BG}"/>
  <rect width="${svgWidth}" height="${svgHeight}" fill="url(#glow)"/>
  <rect width="${svgWidth}" height="${svgHeight}" fill="url(#glow2)"/>

  <!-- Top violet bar -->
  <rect x="0" y="0" width="${svgWidth}" height="4" fill="${PRIMARY}"/>

  <!-- Label pill -->
  <rect x="72" y="64" width="${label.length * 8.4 + 32}" height="36" rx="18" fill="rgba(118,107,255,0.12)" stroke="${BORDER}" stroke-width="1.5"/>
  <text x="${72 + 16}" y="88" font-family="'Inter', 'Arial', sans-serif" font-size="13" font-weight="700" letter-spacing="1.2" fill="${PRIMARY}">${esc(label)}</text>

  <!-- Title -->
  ${titleBlocks}

  <!-- Subtitle -->
  <text x="72" y="${subY + 38}" font-family="'Inter', 'Arial', sans-serif" font-size="28" font-weight="400" fill="${MUTED}">${esc(sub)}</text>

  <!-- Stat badges -->
  ${statBadges}

  <!-- URL -->
  <text x="${svgWidth - 72}" y="${statY + 28}" text-anchor="end" font-family="'Inter', 'Arial', sans-serif" font-size="17" font-weight="500" fill="${MUTED}" opacity="0.7">${esc(url)}</text>

  <!-- Subtle grid lines -->
  <line x1="0" y1="${H - 160}" x2="${svgWidth}" y2="${H - 160}" stroke="${BORDER}" stroke-width="1" opacity="0.4"/>
</svg>`;
}

function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

for (const page of pages) {
  const svg = makeSVG(page);
  const svgBuf = Buffer.from(svg, 'utf-8');
  const outPath = join(OUT, page.file);

  await sharp(svgBuf)
    .resize(W, H)
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`✓ ${page.file}`);
}

console.log('Done.');
