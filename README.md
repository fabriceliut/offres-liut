# offres.liut

Site premium de Fabrice Liut pour accompagner les dirigeants de PME & PMI dans leur organisation, leur pilotage et l'intégration concrète de l'IA.

- **Site en production** : https://offres.liut.me
- **Dépôt** : https://github.com/fabriceliut/offres-liut

## Stack

- **Vite** + **React** + **TypeScript**
- **React Router** pour les routes de l'application
- **Tailwind CSS**
- **Framer Motion**
- **Wrangler** pour le déploiement Cloudflare Workers

## Développement local

```bash
npm install
npm run dev
```

## Build et vérifications

```bash
npm run build
npm run lint
```

Le build TypeScript et Vite génère le dossier `dist/`. Le script de build produit également les métadonnées et images Open Graph par route.

## Déploiement

Le site est déployé sur le **Cloudflare Worker `offres-liut`** et servi sur `https://offres.liut.me`.

La configuration de déploiement se trouve dans [`wrangler.jsonc`](./wrangler.jsonc) :

- assets statiques servis depuis `dist/` ;
- fallback SPA activé pour les routes applicatives ;
- compatibilité `nodejs_compat` ;
- observabilité Cloudflare activée.

Après authentification Wrangler :

```bash
npm run build
npx wrangler deploy
```

> GitHub Pages et la branche `gh-pages` sont conservés comme historique. Le chemin de production actuel est Cloudflare Workers.

## SEO et fichiers publics

Les fichiers SEO et de partage sont versionnés dans `public/` :

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `404.html`
- images Open Graph par route
- `preview.html` pour le catalogue visuel

## Structure

```text
src/
├── components/       # Header, Hero, sections, preuves, CTA, footer…
├── lib/               # Utilitaires et logique transverse
├── pages/             # Pages d'offres et de contenus
├── assets/            # Assets importés par l'application
├── styles/            # Tokens et styles globaux
├── App.tsx            # Routage et composition principale
└── main.tsx           # Point d'entrée React

scripts/
├── gen-og.mjs         # Génération d'images Open Graph
└── og-per-route.mjs   # Génération des métadonnées par route
```

## Pages principales

- `/` — vue d'ensemble des offres
- `/entreprises` — programme pour les entreprises
- `/entrepreneurs` — pilotage dirigeant
- `/ia` — intégration IA
- `/diagnostic` — diagnostic Flux & Leviers
- `/place-nette` — offre Faire place nette

## Historique récent

- **2026-11-04** — README réaligné sur l'architecture de production Cloudflare Workers pour un premier test de coopération avec Vibe Coder.
- **2026-10-12** — retrait du déploiement GitHub Pages au profit de Cloudflare Workers.
