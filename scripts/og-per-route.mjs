/**
 * Post-build: creates per-route index.html copies with correct OG meta tags.
 * Cloudflare serves dist/entrepreneurs/index.html directly for /entrepreneurs/,
 * so social crawlers get the right og:image / og:title without JS execution.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const base = readFileSync(join(DIST, 'index.html'), 'utf-8');

const routes = [
  {
    dir: 'entrepreneurs',
    title: 'Entrepreneurs — Fabrice Liut | Cockpit dirigeant sur Notion',
    description: 'Vous dirigez une PME et votre organisation repose trop sur vous. Fabrice Liut construit votre système de pilotage sur Notion. 6–8h récupérées/semaine.',
    url: 'https://offres.liut.me/entrepreneurs',
    image: 'https://offres.liut.me/og-entrepreneurs.png',
    twitterTitle: 'Entrepreneurs — Cockpit dirigeant sur Notion',
    twitterDesc: 'Votre organisation repose trop sur vous. On change ça.',
  },
  {
    dir: 'entreprises',
    title: 'Entreprises — Fabrice Liut | 10 jours terrain, résultats mesurés',
    description: '10 jours de travail effectif, 6 mois d\'accompagnement terrain. Design organisationnel pour PME & PMI 10–90 salariés. Retour x4,5 observé.',
    url: 'https://offres.liut.me/entreprises',
    image: 'https://offres.liut.me/og-entreprises.png',
    twitterTitle: 'Entreprises — 10 jours terrain, résultats mesurés',
    twitterDesc: '10 jours de travail effectif, 6 mois d\'accompagnement. Retour x4,5.',
  },
  {
    dir: 'ia',
    title: "IA — Fabrice Liut | L'IA aux bons moments, aux bons endroits",
    description: "Intégrez l'intelligence artificielle là où elle crée de la valeur, et nulle part ailleurs. Audit IA, déploiement terrain, formation équipes.",
    url: 'https://offres.liut.me/ia',
    image: 'https://offres.liut.me/og-ia.png',
    twitterTitle: "IA — L'IA aux bons endroits. Pas plus.",
    twitterDesc: "Intégrez l'IA là où elle crée de la valeur. Audit, déploiement, formation.",
  },
];

function replaceMeta(html, route) {
  return html
    // title tag
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${esc(route.title)}</title>`
    )
    // meta description
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${esc(route.description)}"`
    )
    // canonical
    .replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${route.url}"`
    )
    // og:title
    .replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${esc(route.title)}"`
    )
    // og:description
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${esc(route.description)}"`
    )
    // og:url
    .replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${route.url}"`
    )
    // og:image (first occurrence only)
    .replace(
      /<meta property="og:image" content="[^"]*"/,
      `<meta property="og:image" content="${route.image}"`
    )
    // twitter:title
    .replace(
      /<meta name="twitter:title" content="[^"]*"/,
      `<meta name="twitter:title" content="${esc(route.twitterTitle)}"`
    )
    // twitter:description
    .replace(
      /<meta name="twitter:description" content="[^"]*"/,
      `<meta name="twitter:description" content="${esc(route.twitterDesc)}"`
    )
    // twitter:image
    .replace(
      /<meta name="twitter:image" content="[^"]*"/,
      `<meta name="twitter:image" content="${route.image}"`
    );
}

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

for (const route of routes) {
  const dir = join(DIST, route.dir);
  mkdirSync(dir, { recursive: true });
  const html = replaceMeta(base, route);
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
  console.log(`✓ dist/${route.dir}/index.html`);
}

console.log('Per-route OG HTML done.');
