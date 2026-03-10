# liut-offre-pmi

Site one-page premium pour l'offre **"Pour les PMI"** (Design & Efficience Organisationnelle) de Fabrice Liut, destiné aux dirigeants de PME industrielles (10–90 salariés).

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- Déploiement : **GitHub Pages**

## Développement local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Les fichiers sont générés dans le dossier `dist/`.

## Déploiement sur GitHub Pages

### Option 1 : Déploiement manuel

1. Build le projet : `npm run build`
2. Dans les paramètres GitHub du repo, allez dans **Settings > Pages**
3. Source : sélectionnez **GitHub Actions** (ou **Deploy from a branch**, branche `gh-pages`, dossier `/(root)`)
4. Si vous utilisez la branche : `npm run build && npx gh-pages -d dist`

### Option 2 : Déploiement automatique (recommandé)

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) déploie automatiquement sur chaque push sur `main`.

**Activation :**
1. Allez dans **Settings > Pages** du repo GitHub
2. Source : choisissez **GitHub Actions**
3. Pushez sur `main` — le déploiement se lance automatiquement

Le site sera accessible à : `https://fabriceliut.github.io/liut-offre-pmi/`

## Structure

```
src/
├── components/       # Header, Hero, ProofBand, etc.
├── lib/anchors.ts    # Scroll spy pour la nav active
├── pages/
│   └── OfferPMI.tsx  # Page principale
└── styles/
    ├── tokens.css    # Design tokens CSS
    └── globals.css   # Styles globaux + Tailwind
```
