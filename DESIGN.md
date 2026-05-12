# DESIGN.md — offres.liut.me

> Companion file — format Stitch. Source de vérité pour toute décision de design.
> Ne pas modifier sans raison documentée.

---

## 1. Brand & Positioning

**Qui** : Fabrice Liut — Associé Opérationnel & Stratégique, basé à Lyon.

**Ce que je suis** : Pas un consultant externe qui pond un rapport. Un associé opérationnel qui vient sur le terrain, comprend les flux de l'intérieur, et co-construit avec les équipes.

**Preuves** : +15 ans, +150 organisations, retour moyen observé x4,5.

**Audience** : Dirigeants de PME & PMI, 10–90 salariés, France.

**Territoire** : Terrain, no-BS, chaleur humaine. Pas de jargon consulting. Des phrases courtes avec des faits.

**Ce que le site doit faire sentir** : "Cette personne comprend mes problèmes mieux que moi. Et elle sait quoi faire."

---

## 2. Archétype visuel

**Editorial warm × Swiss precision**

| Dimension | Description |
|-----------|-------------|
| Chaleur   | Off-white crème, terre cuite accent, typo serif italic, espaces respirants |
| Précision | Grille 12 col stricte, hiérarchie typographique forte, numérotation de sections |
| Éditorial | Sections numérotées 01–06, grand chiffre cinématique (x4,5), copy direct sans fioritures |

**Références d'intention** (ressenti, pas copie) :
- Notion → chaleur, lisibilité, microcopy soignée
- Linear → grille stricte, contraste display/body, micro-animations
- Mintlify → numérotation, sections aérées
- Sanity.io → hiérarchie verticale forte

**Interdits absolus** :
- Gradients multicolores (purple-to-pink, blue-to-cyan)
- Glassmorphisme / neumorphisme
- Stock photos / Lottie cartoons
- "Trusted by" carrousel de logos
- Backdrop-blur partout
- Icônes Heroicons 3×3 sans contenu

---

## 3. Voice & Tone

**Registre** : Tutoiement/vous direct, terrain, phrases courtes, verbes d'action.

**Anti-patterns** :
- ❌ "Transformez votre business avec notre approche innovante"
- ❌ CTA "En savoir plus", "Découvrir", "Get started"
- ❌ Jargon : "synergie", "agilité", "scalable", "disruption"

**Bons exemples** :
- ✓ "Je viens sur place. Je regarde comment ça tourne vraiment."
- ✓ "Vous me dites ce qui bloque. J'observe, je mets en place."
- ✓ "Prendre 45 min" (CTA direct, pas "Réserver une démo")

---

## 4. Color System

Défini en `styles/tokens.css` — `@layer tokens`.

```css
/* Principe : oklch + light-dark() native */
--bg:          light-dark(oklch(98% 0.005 80),  oklch(14% 0.01 250));   /* crème / quasi-noir */
--bg-elevated: light-dark(oklch(100% 0 0),      oklch(18% 0.015 250));  /* blanc / gris foncé */
--ink:         light-dark(oklch(18% 0.02 250),  oklch(96% 0.005 80));   /* quasi-noir / quasi-blanc */
--ink-muted:   light-dark(oklch(45% 0.015 250), oklch(70% 0.01 80));    /* gris mid */
--accent:      light-dark(oklch(55% 0.18 28),   oklch(72% 0.16 28));    /* terre cuite — signature */
--rule:        light-dark(oklch(88% 0.005 80),  oklch(28% 0.01 250));   /* séparateurs subtils */
```

**Règles** :
- L'accent terre cuite est utilisé AVEC intention : chiffres clés, CTA, accents H1, éléments actifs
- Pas de couleurs secondaires "pour faire beau"
- Contraste AA minimum : 4.5:1 sur texte normal, 3:1 sur texte large

---

## 5. Typography

**Polices** (locales, pas de CDN) :
- `Fraunces Variable` — display, titres H1/H2, chiffres cinématiques, italic
- `Inter Variable` — corps, navigation, labels, CTAs

**Échelle modulaire 1.25** (`--step-N` dans tokens.css) :

| Token      | Valeur clamp         | Usage |
|------------|----------------------|-------|
| `--step-6` | 3.81–6.31rem         | Grand chiffre héro (x4,5) |
| `--step-5` | 3.05–4.73rem         | H1 |
| `--step-4` | 2.44–3.55rem         | Numéros de section (01, 02…) |
| `--step-3` | 1.95–2.66rem         | H2 sections |
| `--step-2` | 1.56–2rem            | Stats inline héro |
| `--step-1` | 1.25–1.5rem          | H3, sous-titres |
| `--step-0` | 1–1.13rem            | Corps |
| `--step--1`| 0.83–0.94rem         | Labels, légendes, CTAs |

**Règles** :
- H1 → Fraunces Variable, italic, `--step-5`, `letter-spacing: -0.03em`
- H2, H3 → Fraunces Variable, `font-style: italic` pour H2, `normal` pour H3
- Corps, nav, boutons → Inter Variable
- Nombres importants : `font-variant-numeric: tabular-nums`
- `text-wrap: balance` sur les titres, `text-wrap: pretty` sur les paragraphes

---

## 6. Spacing & Grid

**Base** : 4pt (`--s-1` = 0.25rem … `--s-32` = 8rem)

**Grille** :
- Max-width : 1280px (`--max-width`)
- Gutter : 24px (`--gutter`)
- 12 colonnes CSS Grid (classe `.grid-12`)
- Numéros de section : col 1–2, contenu : col 3–12

**Breakpoints** :
| Breakpoint | Valeur |
|-----------|--------|
| xs        | 375px  |
| sm        | 640px  |
| md        | 768px  |
| lg        | 1024px |
| xl        | 1280px |
| 2xl       | 1536px |

**Espacement section** : `--spacing-section-v` = 6rem (desktop), 4rem (mobile).

---

## 7. Motion Principles

**Durées** : 200–400ms (jamais > 400ms sauf cas exceptionnel).

**Easing principal** : `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)` → accélère vite, décélère doucement.

**Systèmes** :

```css
/* Scroll-driven (Progressive Enhancement) */
@supports (animation-timeline: view()) {
  .reveal {
    animation: reveal-up linear both;
    animation-timeline: view();
    animation-range: entry 5% cover 30%;
  }
}
/* Fallback : éléments visibles par défaut si scroll-driven non supporté */

/* Hero load */
.hero-animate {
  animation: hero-in 0.55s var(--ease-out-quart) both;
  animation-delay: var(--delay, 0ms);
}

/* Hover cartes */
.card-base:hover {
  transform: translateY(-2px);
  transition: transform 0.2s var(--ease-out-quart);
}
```

**Règle stricte** : `prefers-reduced-motion: reduce` → TOUTES les animations désactivées (pas réduites — désactivées).

**Pas de** : Framer Motion (supprimé), Lottie, animations purement décoratives.

---

## 8. Components Inventory

| Composant       | Fichier                     | Description |
|----------------|----------------------------|-------------|
| `Header`        | `components/Header.tsx`    | Nav fixe + menu mobile CSS transition |
| `Hero`          | `components/Hero.tsx`      | x4,5 count-up natif + hero-animate + eyebrow |
| `ProofBand`     | `components/ProofBand.tsx` | Bande de proof horizontale |
| `DesignOrg`     | `components/DesignOrg.tsx` | Méthode — 01 |
| `Pillars`       | `components/Pillars.tsx`   | 3 piliers en grid — 02 |
| `Situations`    | `components/Situations.tsx`| 4 situations en 2×2 — 03 |
| `DirigeantSection` | `components/DirigeantSection.tsx` | Pain points dirigeant — 03B |
| `IASection`     | `components/IASection.tsx` | Accélérateur IA — 03C |
| `HowWeWork`     | `components/HowWeWork.tsx` | 3 étapes du déroulé — 04 |
| `Testimonials`  | `components/Testimonials.tsx` | 3 cas résultats — 05 |
| `FinalCTA`      | `components/FinalCTA.tsx`  | CTA final 45 min — 06 |
| `Footer`        | `components/Footer.tsx`    | Footer minimaliste |
| `Container`     | `components/Container.tsx` | Wrapper max-width + gutter |
| `IndexLabel`    | `components/IndexLabel.tsx`| Petit label de section caps |

**Classes CSS globales clés** :
- `.reveal` — scroll-driven animation reveal
- `.hero-animate` — animation au chargement
- `.card-base` — card avec hover standardisé
- `.btn-primary`, `.btn-secondary` — boutons
- `.index-label` — label caps de section
- `.scroll-progress` — indicateur de progress vertical 1px

---

## 9. Accessibility & Performance

### Accessibilité WCAG AA

- Contraste texte : 4.5:1 minimum (texte normal), 3:1 (texte large)
- Focus visible : `outline: 2px solid var(--accent); outline-offset: 2px` sur tous les éléments interactifs
- `prefers-reduced-motion`: toutes les animations désactivées (`animation-duration: 0.01ms`)
- `aria-label` sur tous les SVG et éléments icône
- Titres en hiérarchie logique (H1 → H2 → H3)
- `lang="fr"` sur `<html>`
- Pas de contenu uniquement par la couleur

### Web Vitals 2026 (budgets cibles)

| Métrique | Cible | Note |
|----------|-------|------|
| LCP      | < 2.5s | Pas d'image hero → LCP = H1 text |
| INP      | < 200ms | Handlers légers, pas de heavy JS au tap |
| CLS      | < 0.1 | Fonts + `font-display: swap`, pas d'images sans dimensions |
| JS initial | < 170 kB gzip | ~83 kB actuel (react 16 + main 66) ✓ |
| CSS | < 50 kB gzip | ~4.4 kB actuel ✓ |
| Fonts | Latin subset uniquement | 3 woff2 (Inter normal + Fraunces normal/italic) ✓ |
