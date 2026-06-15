# Handoff — Refonte du site maximeherbaut.com

## Overview
Refonte visuelle complète du site personnel de **Maxime Herbaut** (Product Manager freelance).
L'objectif n'est PAS de réécrire le site : c'est un **restyling discipliné** du code existant
(Next.js + TypeScript + Tailwind) pour le faire passer de « fait maison » à « studio ».

La direction retenue est **Émeraude** :
- **Un seul accent** : l'émeraude `#12B981`. On supprime l'indigo `#6366f1` et **tous** les dégradés arc-en-ciel.
- **Beaucoup de neutres** : le charcoal `#181B1F` existant + une échelle de gris.
- **Typo** : **Schibsted Grotesk** (titres + corps) et **Space Grotesk** (petits labels/eyebrows en majuscules). On remplace Inter / Manrope / Sora.
- **Discipline** : titres plus gros et plus serrés, corps aéré (line-height ~1.6), 2 graisses utiles (400 + 700).

> Règle d'or transverse : **partout où vous voyez `bg-gradient-to-r from-[#10b981] via-white to-[#6366f1]` (ou `from-[#10b981] to-[#6366f1]`), remplacez par une couleur pleine.** C'est le geste #1 de la refonte.

---

## About the Design Files
Les fichiers `.dc.html` et les captures `references/` de ce bundle sont des **références de design** —
des maquettes montrant l'apparence et le comportement visés, **pas du code de production à copier tel quel**.

Votre tâche : **recréer cette direction dans le codebase existant** (Next.js / Tailwind / lucide-react),
en gardant l'architecture, le data-fetching (Notion), le routing et l'accessibilité déjà en place.
On ne touche qu'au **style** et à la **hiérarchie visuelle**.

## Fidelity
**Haute fidélité (hifi).** Couleurs, typo, espacements et états sont définitifs.
Recréez l'UI au pixel près avec les patterns Tailwind du projet (pas de nouvelle lib UI).

---

## Stack existante (à conserver)
- **Next.js 15** (pages router), **React 19**, **TypeScript 5**
- **Tailwind CSS 3.4** (`theme.extend` actuellement **vide** — on va le remplir)
- **lucide-react** pour les icônes (déjà présent — on garde, on uniformise juste la couleur)
- **react-notion-x** pour le rendu des articles de blog (contenu depuis Notion)
- Polices chargées dans `pages/_document.tsx` (actuellement Inter/Manrope/Sora)

---

## 1) Design Tokens — `tailwind.config.js`
Le `theme.extend` est vide. Remplacez-le par ceci (c'est le « mini design system » du projet) :

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutres (l'ossature) — charcoal existant + échelle
        ink: {
          DEFAULT: '#181B1F', // fond principal
          950: '#0E1114',     // sections profondes / footer
          900: '#181B1F',
          800: '#20242A',     // surfaces / cartes
          700: '#2C313A',     // bordures
        },
        // Accent UNIQUE
        brand: {
          DEFAULT: '#12B981', // émeraude — CTA, liens, détails
          hover: '#0E9D6E',
          ink: '#04150E',     // texte foncé posé SUR l'émeraude
          soft: '#12211B',    // fond vert très sombre (chips, tints)
        },
        // Texte sur fond sombre
        mist: '#F3F5F4',      // titres / texte fort
        fog: '#C7CCD2',       // texte courant
        muted: '#9AA1AB',     // texte secondaire
        paper: '#FAF9F7',     // fond clair (rare)
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        label: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem', // ~20px, valeur des cartes
      },
      boxShadow: {
        card: '0 24px 60px -40px rgba(2,6,23,0.9)',
        'card-hover': '0 30px 80px -36px rgba(18,185,129,0.28)',
      },
      maxWidth: {
        prose: '65ch', // largeur de lecture cible
      },
    },
  },
  plugins: [],
}
```

Après ça, les classes `bg-ink`, `text-brand`, `text-mist`, `font-label`, `shadow-card`, etc. sont disponibles.

---

## 2) Polices — `pages/_document.tsx`
Remplacez le `<link>` Google Fonts actuel (Inter/Manrope/Sora) par :

```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

`theme-color` reste `#181b1f`. Le `<Html lang="fr" className="dark">` ne change pas.

---

## 3) Styles globaux — `styles/globals.css`
- `body` : `@apply font-sans bg-ink text-fog;` (Schibsted Grotesk par défaut).
- Le focus émeraude (`:focus-visible { outline: 3px solid #10b981 }`) → passez à `#12B981`. Conservez le reste.
- `.skip-link` : remplacez `background-color: #10b981` → `#12B981`, `color: #0f172a` → `#04150E`.
- **Notion (blog)** : remplacez les polices/couleurs custom :
  - `.notion-text` → `font-family: '"Schibsted Grotesk"', system-ui, sans-serif;` (supprimez Inter/Manrope/Sora), `color: #C7CCD2;`, `max-width: 65ch;`, `line-height: 1.75;`.
  - `.notion-h2` → `color: #12B981; font-weight: 700;` (on descend de 800 à 700), garde le `letter-spacing`.
  - `.notion-quote` → bordure gauche `2px solid #12B981`, texte `#9AA1AB`. (déjà sobre, juste aligner le vert)

---

## 4) Le cœur du restyling — `components/sectionStyles.ts`
C'est le fichier le plus important : ces deux constantes sont utilisées partout.

**AVANT** (à supprimer) :
```ts
export const sectionTitleGradientClasses =
  `${sectionTitleClasses} bg-clip-text text-transparent bg-gradient-to-r from-[#10b981] via-white to-[#6366f1]`;
```

**APRÈS** — titres de section en couleur pleine + eyebrow émeraude optionnelle :
```ts
// Titre de section : blanc, serré, PLUS de dégradé.
export const sectionTitleClasses =
  'text-4xl sm:text-5xl font-bold tracking-tightest text-mist';

// On garde le nom pour ne pas casser les imports, mais SANS dégradé.
export const sectionTitleGradientClasses = sectionTitleClasses;

// Eyebrow réutilisable au-dessus des titres (Space Grotesk, majuscules, émeraude)
export const eyebrowClasses =
  'font-label text-sm font-semibold tracking-[0.16em] uppercase text-brand';

// Carte : surface pleine + bordure fine, plus de dégradé. Hover discret émeraude.
export const cardBaseClasses =
  'rounded-3xl border border-white/[0.07] bg-ink-800 shadow-card transition-all duration-300 ' +
  'hover:-translate-y-1 hover:border-brand/60 hover:shadow-card-hover ' +
  'focus-within:ring-2 focus-within:ring-brand/50';
```

Détails clés :
- `font-black` → `font-bold` (on se limite à 2 graisses : 400 corps, 700 titres). Gardez `font-extrabold` (800) uniquement pour les très grands chiffres/hero si besoin.
- Les titres de section peuvent être **alignés à gauche** avec une eyebrow au-dessus (cf. maquette), plutôt que centrés. Au minimum : couleur pleine, plus de dégradé.

---

## Screens / Views

### A. Page d'accueil — `pages/index.tsx`
Fond : `bg-ink` plein (supprimez le `bg-gradient-to-b from-[#181b1f] via-[#22272a] to-[#191b1f]` → mettez `bg-ink`). Ordre des sections inchangé.

#### Hero — `components/sections/Hero.tsx`  ⭐ priorité
La pièce la plus visible. Voir `references/01-home-hero.png`.
- **Tuez le dégradé sur le nom.** `h1` : `text-mist`, `font-bold`, `tracking-tightest`. Le titre devient **« Product Manager & digital builder »** avec **un seul mot en émeraude** (`<span className="text-brand">digital builder</span>`), ou gardez « Maxime Herbaut » en blanc plein si vous préférez. L'idée : l'accent touche **un mot**, pas tout.
- **Avatar** : `/avatar-mh.png`, cercle, **anneau émeraude** `border-4 border-brand` (au lieu de `border-[#181b1f]`). Badge « Product » : `bg-brand text-brand-ink`.
- **Pill de dispo** au-dessus du titre : `inline-flex items-center gap-2`, bordure `border border-brand/35`, texte `text-brand`, `rounded-full px-4 py-1.5`, petit point `bg-brand`. Texte : « Disponible pour missions · Lille & remote ».
- **CTA** : `bg-brand text-brand-ink font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-hover` — **plus de dégradé, plus de `hover:scale-105`**. Ajoutez un CTA secondaire « Voir mes missions » en outline (`border border-white/15 text-mist`).
- **Layout** : passez d'un hero 100% centré à une grille `md:grid-cols-[1.25fr_1fr]` (texte à gauche, avatar à droite) sur desktop ; reste centré en mobile. Optionnel mais recommandé (cf. maquette).
- **Preuve sociale (NOUVEAU, reco #4)** : sous le hero, une ligne `border-t border-white/10`, label `font-label uppercase tracking-wide text-muted text-xs` « Ils m'ont fait confiance », puis logos texte `Sergic · Roquette · Norauto · +12 équipes` en `text-fog font-bold text-2xl`. (Données issues de `data/experiences.ts`.)

#### About — `components/sections/About.tsx`
Voir `references/02-home-about.png`.
- Titre via `sectionTitleClasses` + eyebrow « À propos ».
- **Uniformisez les icônes** : toutes les icônes lucide passent en `text-brand` (supprimez les `text-[#6366f1]` indigo). 1 seule couleur d'icône.
- **Chips Passions** : remplacez `bg-[#134e4a] text-[#f0fdf4]` (teal) par `bg-brand-soft text-fog border border-brand/20` pour rester dans la palette. Icône en `text-brand`.
- Contenu inchangé (Lille, 10 ans, discovery/delivery/strategy, UX & impact, no-code/IA ; passions cuisine/volley/rando/nature/théâtre).

#### Services — `components/sections/Services.tsx`
Voir `references/03-home-services.png`.
- **Icônes homogènes** : les 4 icônes (`Compass`, `Sparkle`/`Pen`, `Hammer`/`Code`, `Users`) **toutes en `text-brand`** — supprimez `text-indigo-400 / text-yellow-400 / text-blue-400 / text-green-400`. C'est exactement la reco #5.
- Posez chaque icône dans une pastille : `w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5`, icône `w-6 h-6 text-brand`.
- Titres de carte `text-mist` (au lieu de `text-[#10b981]`) ; description `text-muted`. Cartes via `cardBaseClasses`.
- Copy conservable telle quelle (Concevoir / Créer / Développer / Fédérer).

#### Experiences — `components/sections/Experiences.tsx`
- Déjà émeraude — gardez la timeline. Ajustez : titre via `sectionTitleClasses` + eyebrow ; badges de date `bg-brand/15 text-brand border-brand/30` (déjà proche). Cartes via `cardBaseClasses`.
- Données dans `data/experiences.ts` (Villa Finder → Sergic, inchangées).

#### BlogPreview — `components/sections/BlogPreview.tsx`
- Titre « Derniers articles » sans dégradé.
- **Bouton « Tous les articles »** : dégradé → `bg-brand text-brand-ink hover:bg-brand-hover`.
- Cartes via `cardBaseClasses`. Titres de post `text-mist`, hover `group-hover:text-brand`.

#### Contact — `components/sections/Contact.tsx`
- **CTA Calendly** : dégradé → `bg-brand text-brand-ink hover:bg-brand-hover`.
- Liens mail/LinkedIn restent `text-brand`. Carte via `cardBaseClasses`.
- Données réelles : `maxime@herbaut.me`, `linkedin.com/in/maximeherbaut`, `calendly.com/maximeherbaut/30min`.

#### Footer — `components/sections/Footer.tsx`
- Cosmétique : `bg-ink-950`, liens `text-brand`. Rien de structurel.

#### Navigation — `components/Navigation.tsx`
- Garde le comportement (hide-on-scroll, menu mobile, lucide `Menu`/`X`).
- Barre : `bg-ink-800/90 backdrop-blur border border-white/[0.06] rounded-xl`.
- Liens `text-muted hover:text-brand`. Ajoutez le lien **Contact en bouton plein** : `bg-brand text-brand-ink rounded-lg px-4 py-1.5` (au lieu d'un simple lien) — cohérent avec la maquette.

---

### B. Page Blog (liste) — `pages/blog/index.tsx`
- `h1` : supprimez le dégradé → `text-mist font-bold tracking-tightest`.
- Cartes d'article : `border border-white/10 bg-ink-800 hover:border-brand` (déjà proche). Titre `text-brand` OK.

### C. Page Article — `pages/blog/[slug].tsx`
- `h1` : supprimez le dégradé → `text-mist`.
- Le rendu Notion suit `globals.css` (cf. §3). Bouton « retour en haut » : `bg-brand hover:bg-brand-hover text-brand-ink`.
- `BlogMiniHeader`, `BlogHead` : aligner les couleurs sur la palette (vert `#12B981`).

### D. CV — `pages/cv.tsx`
- Déjà très émeraude (peu de dégradé). Actions :
  - Fond : `bg-ink` plein (supprimez le `bg-gradient-to-b ...`).
  - `font-black` → `font-bold` sur les titres. Typo Schibsted Grotesk via le token global.
  - Chips compétences / passions : conservez `bg-brand/15 text-brand border-brand/30` (déjà bon).
  - Le bouton « Télécharger le CV » reste en tint émeraude.
- Le script `scripts/generate-cv-pdf.ts` (Puppeteer) reste fonctionnel ; vérifiez juste le rendu PDF après changement de police.

### E. TagLabel — `components/TagLabel.tsx`
- Remplacez `bg-[#134e4a] text-[#f0fdf4]` (teal) par `bg-brand-soft text-fog border border-brand/20`. Gardez le mapping d'icônes lucide (icône en `text-brand`).

---

## Interactions & Behavior
- **Hover** : transitions sobres (`transition-all duration-300`). Cartes : léger `-translate-y-1` + bordure émeraude. **Supprimez les `hover:scale-105`** sur les boutons (trop « bouncy ») → préférez un changement de fond (`hover:bg-brand-hover`).
- **Focus** : conservez l'anneau `focus-visible:ring-2 ring-brand` partout (accessibilité déjà bonne).
- **Navigation** : hide-on-scroll inchangé. Menu mobile inchangé.
- **Responsive** : mobile-first conservé. Hero passe en 1 colonne < md. Largeur de lecture du texte ≤ `65ch` (`max-w-prose`).
- **Scroll-to-top** (article) : inchangé, juste recoloré.

## State Management
Aucun changement. On ne touche ni au data-fetching Notion (`lib/notion.ts`), ni à `getStaticProps`, ni à l'état du menu/scroll. **Restyling uniquement.**

## Design Tokens (récap hex)
| Rôle | Hex | Token Tailwind |
|---|---|---|
| Accent (émeraude) | `#12B981` | `brand` |
| Accent hover | `#0E9D6E` | `brand-hover` |
| Texte sur émeraude | `#04150E` | `brand-ink` |
| Vert sombre (chips) | `#12211B` | `brand-soft` |
| Fond principal | `#181B1F` | `ink` |
| Fond profond / footer | `#0E1114` | `ink-950` |
| Surface / carte | `#20242A` | `ink-800` |
| Bordure | `#2C313A` | `ink-700` |
| Titre / texte fort | `#F3F5F4` | `mist` |
| Texte courant | `#C7CCD2` | `fog` |
| Texte secondaire | `#9AA1AB` | `muted` |
| ❌ À SUPPRIMER (indigo) | `#6366f1` | — |

- **Type scale** : hero `text-5xl`→`text-7xl` ; titres section `text-4xl/5xl` ; H3 `text-xl/2xl` ; corps `text-base/lg` (line-height 1.6) ; eyebrow `text-sm` Space Grotesk uppercase.
- **Graisses** : 400 (corps) + 700 (titres). 800 réservé aux gros chiffres/hero.
- **Radius** : cartes `rounded-3xl` (~20px) ; boutons/pills `rounded-xl` / `rounded-full`.
- **Spacing** : système 8px ; sections `py-20`/`py-24` ; conteneur `max-w-5xl/6xl mx-auto px-6`.

## Assets
- `public/avatar-mh.png` — photo de profil (idéalement recadrée avec anneau émeraude). À conserver/mettre à jour.
- `public/logo.png` + `public/favicon.ico` — monogramme MH. Un favicon émeraude affiné est proposé dans `references/` (cf. fichier `Assets — Favicon & Open Graph.dc.html`).
- Icônes : **lucide-react** (déjà installé). Pas de SVG custom.
- Image **Open Graph** (`1200×630`) à générer puis référencer en `<meta property="og:image">` (absente aujourd'hui) — maquette dans `references/`.

## Files (dans ce bundle)
- `references/Site — Page d'accueil.dc.html` — **maquette cible de la home** (la référence #1).
- `references/Identité — Maxime Herbaut.dc.html` — charte de marque (couleurs, typo, logo, règles).
- `references/Assets — Favicon & Open Graph.dc.html` — favicon + image OG.
- `references/*.png` — captures des écrans clés.

> Note : les `.dc.html` sont des maquettes ; ouvrez les `.png` pour la référence visuelle rapide.

## Checklist de recette
- [ ] Aucune occurrence restante de `#6366f1` ni de `bg-gradient-to-* from-[#10b981]...` dans le code.
- [ ] Toutes les icônes de Services + About sont en `text-brand` (une seule couleur).
- [ ] Polices : Schibsted Grotesk (corps/titres) + Space Grotesk (eyebrows) chargées et appliquées.
- [ ] Hero : nom/accent discipliné, pill de dispo, CTA plein, ligne de logos clients.
- [ ] Contraste AA vérifié (émeraude sur charcoal OK pour large/labels ; pour petit texte de lien sur fond clair, foncer si besoin).
- [ ] PDF du CV régénéré et vérifié avec la nouvelle police.
