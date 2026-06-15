# Refonte « Émeraude » — Design spec

Date : 2026-06-15 · Branche : `redesign`
Source : `design_handoff_site_refonte/README.md` (high-fidelity).

## Objectif

Restyling **discipliné** du site existant (Next.js 15 Pages Router / React 19 / TS / Tailwind 3).
On ne touche **ni** au data-fetching Notion, **ni** au routing, **ni** à l'état (menu/scroll), **ni** aux
patterns d'accessibilité. **Style et hiérarchie visuelle uniquement.** Contenu actuel prioritaire,
reformulation mineure tolérée là où le handoff restructure (titre du Hero).

## Direction

- **Accent unique** : émeraude `#12B981`. Suppression totale de l'indigo `#6366f1` et de **tous** les
  dégradés `bg-gradient-to-* from-[#10b981]...`.
- **Neutres** : charcoal `#181B1F` + échelle de gris.
- **Typo** : Schibsted Grotesk (titres + corps), Space Grotesk (eyebrows uppercase). Remplace Inter/Manrope/Sora.
- **Graisses** : 400 corps / 700 titres ; 800 réservé aux gros chiffres/hero.

## Décisions verrouillées (validées)

1. **Hero titre** : le rôle devient le h1 — « Product Manager & **digital builder** » (un seul mot en émeraude).
   « Maxime Herbaut » passe en eyebrow.
2. **Hero layout** : grille 2 colonnes (texte gauche / avatar droite) sur desktop, recentré en mobile.
3. **Preuve sociale** : ajout sous le hero — « Ils m'ont fait confiance » → Sergic · Roquette · Norauto · +12 équipes.
4. **Assets images** : on code tout + on câble les chemins ; l'utilisateur génère les images. Voir § Assets.

## Fondations (à modifier une fois, cascade partout)

- `tailwind.config.js` — remplir `theme.extend` (tokens du handoff : colors `ink`/`brand`/`mist`/`fog`/`muted`/`paper`,
  fonts `sans`/`label`, `tracking-tightest`, `rounded-3xl`, `shadow-card`/`card-hover`, `max-w-prose`).
- `pages/_document.tsx` — fonts Google (Schibsted + Space Grotesk) ; body `bg-ink text-fog font-sans` ; balises OG home.
- `styles/globals.css` — `body` tokens ; focus/skip-link → `#12B981` ; Notion (`.notion-text`/`.notion-h2`/`.notion-quote`).
- `components/sectionStyles.ts` — `sectionTitleClasses` plein (no gradient), `sectionTitleGradientClasses` = alias,
  nouveau `eyebrowClasses`, `cardBaseClasses` surface pleine + hover émeraude.

## Composants réutilisables (nouveaux, dans `components/ui/`)

Extraits car répétés sur plusieurs pages :

- `Button.tsx` — CTA `brand` plein + variante `outline`. Utilisé : Hero, BlogPreview, Contact, Navigation, CV.
- `Chip.tsx` — pastille `bg-brand-soft text-fog border-brand/20` + icône optionnelle. Utilisé : About (passions),
  CV (compétences/passions), base de `TagLabel`.
- `SectionHeading.tsx` — eyebrow (Space Grotesk uppercase émeraude) + titre de section. Utilisé : toutes les
  sections home (About, Services, Experiences, BlogPreview, Contact).

`components/ui/Tag.tsx` existant : conservé/aligné sur les tokens (ou remplacé par `Chip` si équivalent).

## Page par page

- **Home** (`pages/index.tsx`) : fond `bg-ink` plein.
  - **Hero** : grille 2 col, pill dispo, h1 rôle (accent 1 mot), CTA plein + outline, ligne preuve sociale.
  - **About** : eyebrow + titre ; icônes toutes `text-brand` ; chips passions via `Chip`.
  - **Services** : 4 icônes en pastille `bg-brand/10` `text-brand` ; cartes `cardBaseClasses` ; titres `text-mist`.
  - **Experiences** : timeline conservée ; eyebrow + titre ; badges date émeraude ; cartes tokens.
  - **BlogPreview** : titre sans dégradé ; bouton `Button` plein ; cartes tokens ; titres `text-mist` hover `text-brand`.
  - **Contact** : CTA prise de RDV (Google Calendar) `Button` plein ; liens `text-brand` ; carte tokens.
  - **Footer** : `bg-ink-950`, liens `text-brand`.
  - **Navigation** : comportement inchangé ; barre `bg-ink-800/90` ; liens `text-muted hover:text-brand` ;
    Contact en bouton plein.
- **Blog liste** (`pages/blog/index.tsx`) : h1 sans dégradé `text-mist` ; cartes tokens.
- **Article** (`pages/blog/[slug].tsx`) : h1 `text-mist` ; bouton retour-haut `bg-brand` ; `BlogMiniHeader`/`BlogHead` alignés.
- **CV** (`pages/cv.tsx`) : fond `bg-ink` ; `font-black`→`font-bold` ; chips via `Chip` ; bouton download tint émeraude.
  Script Puppeteer inchangé — PDF régénéré en local après coup.
- **TagLabel** (`components/TagLabel.tsx`) : `bg-brand-soft text-fog border-brand/20`, icône `text-brand` (mapping conservé).

## Assets (à fournir par l'utilisateur)

| Fichier | Emplacement | Détail |
|---|---|---|
| `avatar-mh.png` | `public/` | Existe — garder/mettre à jour (recadrage anneau émeraude optionnel). |
| `favicon.ico` | `public/` | Existe — version émeraude affinée optionnelle. |
| `og-image.png` | `public/` | **Nouveau** — 1200×630, référencé dans `_document.tsx`. |

## Vérification

- `npm run lint` + `npm run build` OK.
- `grep` : aucune occurrence de `#6366f1` ni de `bg-gradient-to-* from-[#10b981]`.
- Icônes Services + About toutes `text-brand`.
- Polices chargées et appliquées.
- Focus ring émeraude préservé partout ; skip-link OK.
