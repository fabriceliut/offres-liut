# DESIGN.md — offres.liut.me

> Référence du système visuel actuellement présent dans l'application. Les tokens de `src/styles/tokens.css` et les styles globaux de `src/styles/globals.css` font foi en cas d'écart.

---

## 1. Marque et positionnement

**Marque** : Fabrice Liut, allié opérationnel des dirigeants, basé à Lyon.

**Rôle** : intervenir sur le terrain, comprendre les flux et le travail réel, puis construire et tester des changements avec la direction et les équipes. La promesse est opérationnelle, pas celle d'un audit qui s'arrête à un rapport.

**Public** : dirigeants de PME et PMI françaises. Les offres couvrent plusieurs tailles : 10–90 salariés pour l'accompagnement principal, 15–50 pour l'offre d'entrée « Faire place nette ».

**Preuves utilisées sur le site** : plus de 15 ans de terrain, plus de 150 organisations accompagnées, retour moyen observé x4,5, ainsi que des résultats de missions précisés par contexte. Ces chiffres sont des résultats observés, pas une garantie attachée à chaque offre.

**Voix** : directe, concrète et humaine. S'adresser au lecteur avec « vous », parler à la première personne quand Fabrice décrit son rôle, préférer les verbes d'action et les faits au jargon conseil.

Exemples de ton : « Je viens sur place. Vous me dites où ça bloque. On teste, on ajuste. » CTA courts comme « Prendre 45 min ».

---

## 2. Direction visuelle

**Système actuel** : interface sombre, contrastée et opérationnelle, avec une signature violet électrique. La grille discrète des héros, les repères numérotés et les sections aérées donnent de la structure sans transformer le site en tableau de bord générique.

- Fonds presque noirs, surfaces légèrement différenciées et texte clair.
- Violet utilisé pour les titres accentués, les chiffres, les liens actifs et les actions principales.
- Vert réservé aux résultats ou états positifs ; orange aux alertes.
- Héros fréquemment centrés ou alignés à gauche, avec une grille violette très légère en arrière-plan.
- Sections alternant fond principal et surface, avec des bordures fines.
- Cartes réservées aux éléments répétés ou aux contenus réellement regroupés ; rayon actuel de 18 px.

Éviter les dégradés multicolores, les effets décoratifs sans fonction, le glassmorphisme généralisé, les visuels de stock et les carrousels de logos. Les halos violets discrets et le flou du header au défilement sont déjà employés, mais restent ponctuels.

---

## 3. Couleurs

Les valeurs de référence sont définies dans `src/styles/tokens.css` et reprises dans `tailwind.config.js`.

| Token | Valeur actuelle | Usage |
|---|---|---|
| `--bg` | `#07070A` | Fond général |
| `--surface` | `#0D0D14` | Sections et éléments de surface |
| `--surface2` | `#121225` | Cartes et surfaces secondaires |
| `--text` | `#F4F5FF` | Texte principal |
| `--muted` | `rgba(244, 245, 255, 0.72)` | Texte secondaire |
| `--primary` | `#766BFF` | Accent principal, CTA, états actifs |
| `--accent` | `#A79FFF` | Accent secondaire et labels |
| `--success` | `#39D98A` | Résultats positifs |
| `--warning` | `#FFB020` | Alertes |
| `--border` | `rgba(244, 245, 255, 0.10)` | Séparateurs et bordures |
| `--border-strong` | `rgba(118, 107, 255, 0.35)` | Bordures accentuées |

Ne pas introduire une nouvelle couleur de marque sans modifier d'abord les tokens et leur usage dans Tailwind.

---

## 4. Typographie

Les piles déclarées dans les tokens sont :

- Titres et éléments de navigation : `Space Grotesk`, puis `ui-sans-serif` et les polices système.
- Corps : `Inter`, puis `ui-sans-serif` et les polices système.

La feuille globale fixe le corps à 16 px / 1.6 et définit les tailles de titres suivantes :

| Élément | Taille CSS actuelle |
|---|---|
| H1 | `clamp(2.4rem, 5vw, 4rem)` |
| H2 | `clamp(1.8rem, 3vw, 2.6rem)` |
| H3 | `clamp(1.2rem, 2vw, 1.5rem)` |

Les titres utilisent `--font-heading`, un poids semi-gras ou gras, une interligne de 1.2 et `text-wrap: balance`. Les paragraphes utilisent `--font-body`, une interligne de 1.7 et `text-wrap: pretty`. Les labels de section sont en capitales, petits et espacés.

**Chargement des polices à vérifier** : les paquets Fontsource pour Fraunces, Inter et Space Grotesk sont présents dans les dépendances, mais aucun import Fontsource ni `@font-face` n'a été trouvé dans `src/` ou `index.html` lors de cette mise à jour. Les familles Space Grotesk et Inter sont donc configurées comme préférence CSS, mais leur chargement local n'est pas confirmé ; le rendu peut utiliser les polices système. Fraunces n'est pas dans la pile active.

---

## 5. Mise en page et espacement

- Largeur maximale du composant `Container` : `1200px` via `--max-width`.
- Gouttières du container : `20px` par défaut, `24px` à partir du breakpoint `sm`.
- Espacement vertical des sections : `112px` par défaut et `64px` sous 768 px, via `--spacing-section-v`.
- Les pages utilisent principalement les grilles utilitaires Tailwind (`grid-cols-*`, `md:grid-cols-*`) et des largeurs maximales (`max-w-*`), pas une grille CSS 12 colonnes dédiée.
- Les breakpoints suivent Tailwind : `sm` 640 px, `md` 768 px, `lg` 1024 px, `xl` 1280 px, `2xl` 1536 px.
- Les héros d'offres utilisent couramment une hauteur minimale de 70 vh, 140 px de padding supérieur et 80 px inférieur. Le héros de la page d'accueil a ses propres valeurs.

Les sections alternent souvent fond général et `--surface`, délimité par des bordures discrètes. Garder des largeurs de lecture mesurées dans les textes et laisser les grilles se réduire naturellement sur mobile.

---

## 6. Composants et styles partagés

| Élément | Fichier | Rôle actuel |
|---|---|---|
| `App` | `src/App.tsx` | Routes des pages d'offres et retour en haut lors d'un changement de route |
| `Header` | `src/components/Header.tsx` | Header fixe, nav d'accueil et menu mobile ; fond flouté après défilement |
| `Footer` | `src/components/Footer.tsx` | Liens externes et liens vers les offres |
| `Container` | `src/components/Container.tsx` | Largeur maximale et gouttières responsives |
| `IndexLabel` | `src/components/IndexLabel.tsx` | Repère de section en capitales |
| `Hero`, `ProofBand`, `DesignOrg`, `Pillars`, `Situations`, `DirigeantSection`, `IASection`, `HowWeWork`, `Testimonials`, `FinalCTA` | `src/components/` | Sections de la page d'accueil `/` |

Pages d'offres déclarées dans `App.tsx` : `/`, `/entreprises`, `/entrepreneurs`, `/ia`, `/diagnostic` et `/place-nette`. Les pages secondaires réutilisent généralement le header, le container, le footer et les mêmes tokens, avec des sections spécifiques à leur offre.

**Classes globales principales**, définies dans `src/styles/globals.css` :

- `.index-label` : label violet en capitales, bordure fine et fond teinté.
- `.card-base` : surface, bordure, rayon `--r-card` (18 px), ombre et léger déplacement au survol.
- `.btn-primary` et `.btn-secondary` : boutons violets ou contour violet, arrondis en pilule.
- `:focus-visible` : contour visible violet avec décalage de 3 px.

---

## 7. Mouvement

Les animations de révélation et d'entrée sont principalement réalisées avec Framer Motion. `src/main.tsx` monte `LazyMotion` avec `domAnimation`; les composants utilisent `m` ou `motion`, souvent avec une montée légère, une apparition et un délai progressif. Les transitions observées sont généralement de 0.3 à 0.6 s. Le hover des cartes est géré en CSS.

Le header utilise une transition de fond au défilement et un blur uniquement lorsqu'il est scrolled. Les halos et grilles de héros sont statiques et décoratifs.

**Mouvement réduit** : `src/styles/globals.css` réduit les animations et transitions CSS et coupe le smooth scroll si `prefers-reduced-motion: reduce` est actif. Les animations Framer Motion ne sont pas toutes explicitement reliées à cette préférence aujourd'hui. Pour toute nouvelle animation Motion, tenir compte de `useReducedMotion` ou d'une configuration Motion adaptée ; ne pas présenter l'accessibilité Motion comme entièrement couverte tant que ce raccord global n'existe pas.

Ne pas réintroduire les classes `.reveal`, `.hero-animate` ou `.scroll-progress` comme composants de système : elles ne sont pas définies dans la feuille globale actuelle.

---

## 8. Ton éditorial et contenu

- S'adresser au dirigeant par « vous » ; utiliser « je » pour l'intervention de Fabrice et « on » pour le travail construit ensemble.
- Écrire des phrases concrètes, ancrées dans le terrain et le fonctionnement réel des équipes.
- Préférer les résultats et livrables précis aux promesses générales.
- Décrire clairement le périmètre, les étapes, le prix et les engagements réciproques lorsqu'ils sont définis.
- Utiliser des CTA explicites : « Prendre 45 min », « Réserver mon diagnostic », « Voir l'accompagnement ».
- Éviter le jargon marketing, les superlatifs non étayés et les garanties implicites sur des résultats observés dans d'autres missions.
- Rester cohérent avec le positionnement d'allié opérationnel : le regard peut être neuf ou extérieur, mais l'intervention se fait au contact du terrain et avec les équipes.

---

## 9. Accessibilité et performance

### Accessibilité constatée et règles

- Le document HTML utilise `lang="fr"`.
- La hiérarchie visée est un H1 par page, puis des H2 et H3 dans l'ordre.
- Les motifs de fond et icônes décoratives doivent être masqués aux lecteurs d'écran (`aria-hidden="true"`).
- Les contrôles interactifs doivent conserver un focus visible ; le style global actuel utilise `--primary` et `outline-offset: 3px`.
- Ne pas communiquer une information uniquement par la couleur. Vérifier les contrastes sur les surfaces réelles avant de revendiquer la conformité WCAG AA.
- Respecter `prefers-reduced-motion`, y compris dans les animations JavaScript ajoutées.

### Performance

Les pages d'offres sont chargées à la demande avec `React.lazy` et le build Vite produit des chunks séparés. Aucun budget Web Vitals actuel ni audit de performance récent n'est défini dans ce document ; ne pas reprendre les anciens chiffres de bundle comme mesures courantes. Mesurer à nouveau avant de publier une cible chiffrée.
