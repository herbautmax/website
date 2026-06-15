# Design — Contenu textuel centralisé

**Date** : 2026-06-15
**Branche** : `redesign`
**Statut** : approuvé (design)

## Objectif

Regrouper tout le texte « en dur » du site dans un seul fichier afin de le
modifier facilement, sans avoir à chercher dans les composants. **Mono-langue
(FR uniquement)** — pas de bascule de langue, pas de librairie i18n.

## Décisions

- **Format** : module TypeScript typé (`content/site.ts`) exportant un objet
  `content` imbriqué. Bénéfices : autocomplétion, erreur de compilation si une
  clé est mal tapée ou manquante, aucune dépendance ajoutée, compatible
  SSG/Next.js. (Options JSON et librairie i18n écartées — YAGNI.)
- **Périmètre** : uniquement le texte actuellement codé en dur dans les
  composants/pages. Les fichiers `data/` (expériences, passions, témoignages)
  restent tels quels (déjà éditables). Les corps d'articles (Notion) restent
  dans Notion.

## Structure du fichier `content/site.ts`

```
content.meta         → titres/descriptions SEO + OG (index, blog, cv)
content.nav          → libellés de navigation
content.home.hero        → eyebrow, titre, sous-titre, CTA
content.home.about       → eyebrow, titre, paragraphes
content.home.services    → eyebrow, titre + liste des services (titre/description)
content.home.experiences → eyebrow, titre
content.home.blogPreview → eyebrow, titre, lien « voir tout »
content.home.contact     → eyebrow, titre, labels, texte du bouton
content.footer       → texte/mentions du footer
content.cv           → eyebrow, titres de sections, labels contact, bouton PDF, etc.
content.blog         → « Tous les articles », titres/labels de la liste, etc.
```

Le type est dérivé de l'objet (`as const` + `typeof`) pour figer les clés.

## Principe d'intégration

- Chaque composant/page importe `content` et remplace ses chaînes en dur par
  `content.x.y`.
- **Aucun changement** de structure de composants, de routing, ni de
  data-fetching — remplacement de texte uniquement (discipline « contenu only »
  de la charte Émeraude).
- Le texte affiché doit rester **identique au pixel** après migration (même
  chaînes, mêmes accents, mêmes apostrophes typographiques `'`).

## Hors périmètre

- Corps des articles de blog (source : Notion).
- Données structurées `data/` (expériences, passions, témoignages).
- Traduction / support multilingue.

## Critères de réussite

- Un seul fichier `content/site.ts` contient tout le texte en dur du site.
- Le rendu visuel des pages `/`, `/cv`, `/blog` et `/blog/[slug]` est inchangé.
- `npm run build` passe (types OK).
- Aucune dépendance ajoutée.

## Vérification

- Build de production réussi.
- Comparaison visuelle (preview) des pages avant/après : texte identique.
