# Contenu textuel centralisé — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Regrouper tout le texte « en dur » du site (accueil, blog, CV, meta SEO) dans un seul fichier `content/site.ts` typé, pour pouvoir le modifier facilement.

**Architecture:** Un module TypeScript exporte un objet `content` (typé via `as const`). Chaque composant/page importe `content` et remplace ses chaînes en dur par des références `content.x.y`. Les icônes (composants React) restent dans les composants, mappées par une clé string présente dans `content`. Aucun changement de routing, de data-fetching ni de structure. Le rendu doit rester identique.

**Tech Stack:** Next.js 15 (Pages Router), React 19, TypeScript, Tailwind. Pas de librairie i18n, pas de nouvelle dépendance.

**Contexte tests:** Le repo n'a pas de tests unitaires (cf. CLAUDE.md). La vérification de chaque tâche = `npx tsc --noEmit` (typage) + contrôle visuel dans le preview. Pas de TDD.

**Hors périmètre:** corps d'articles Notion ; fichiers `data/` (experiences, passions, testimonials) ; multilingue.

---

## File Structure

- **Create:** `content/site.ts` — toutes les chaînes en dur + infos de contact partagées (email, téléphone, LinkedIn, URL de réservation). Une seule responsabilité : contenir le texte.
- **Modify (consommateurs):**
  - `pages/index.tsx` (meta SEO accueil)
  - `components/Navigation.tsx`
  - `components/sections/Hero.tsx`
  - `components/sections/About.tsx`
  - `components/sections/Services.tsx`
  - `components/sections/Experiences.tsx`
  - `components/sections/Testimonials.tsx`
  - `components/sections/BlogPreview.tsx`
  - `components/sections/Contact.tsx`
  - `components/sections/Footer.tsx`
  - `pages/blog/index.tsx`
  - `pages/blog/[slug].tsx`
  - `components/BlogMiniHeader.tsx`
  - `components/BlogHead.tsx`
  - `pages/cv.tsx`

**Convention d'apostrophe:** le code existant utilise l'apostrophe typographique `’` (U+2019), pas `'`. Reproduire **exactement** les chaînes existantes (mêmes apostrophes, accents, `&` et espaces insécables rendus en texte).

---

## Task 1: Créer `content/site.ts`

**Files:**
- Create: `content/site.ts`

- [ ] **Step 1: Écrire le fichier `content/site.ts`**

```typescript
// Tout le texte « en dur » du site, centralisé pour édition facile.
// Mono-langue (FR). Les icônes restent dans les composants (mappées par clé).

export const content = {
  brand: "Maxime Herbaut",

  // Infos de contact réutilisées (Contact, Footer, CV)
  contactInfo: {
    email: "maxime@herbaut.me",
    emailHref: "mailto:maxime@herbaut.me",
    phone: "+33 6 60 16 07 13",
    phoneHref: "tel:+33660160713",
    linkedinUrl: "https://www.linkedin.com/in/maximeherbaut",
    linkedinLabel: "linkedin.com/in/maximeherbaut",
    bookingUrl: "https://calendar.app.google/mp1wi1iaEw7J5A4w6",
    location: "Lille",
  },

  // Métadonnées SEO / OG
  meta: {
    home: {
      title: "Maxime Herbaut — Product Manager & Digital Builder",
      description:
        "Découvrez le profil de Maxime Herbaut, Product Manager à Lille : services, expériences et articles autour du produit et de l’innovation.",
      ogDescription:
        "Product Manager à Lille : discovery, delivery, no-code & IA. Services, expériences et blog.",
      twitterDescription:
        "Product Manager à Lille : discovery, delivery, no-code & IA.",
    },
    blogList: {
      title: "Tous les articles | Maxime Herbaut",
      description:
        "Retrouvez tous les articles du blog de Maxime Herbaut, Product Manager à Lille.",
    },
    cv: {
      title: "Maxime Herbaut — CV",
      description: "Curriculum vitae de Maxime Herbaut, Product Manager.",
    },
    untitled: "Untitled",
  },

  nav: {
    items: [
      { label: "À propos", id: "about" },
      { label: "Services", id: "services" },
      { label: "Expériences", id: "experiences" },
      { label: "Blog", id: "blog" },
    ],
    contact: "Contact",
    menuLabel: "Menu",
  },

  home: {
    hero: {
      badge: "Disponible pour missions · Lille & remote",
      titleLine1: "Product Manager",
      titlePrefix: "&",
      titleHighlight: "digital builder",
      subtitle:
        "J’aide les équipes à imaginer, concevoir et lancer des produits digitaux utiles, robustes et élégants — de la discovery au delivery.",
      ctaPrimary: "Me contacter",
      ctaSecondary: "Voir mes missions",
      avatarAlt: "Maxime Herbaut",
      avatarBadge: "Product",
      socialProof: "Ils m’ont fait confiance",
      clients: [
        { name: "Sergic", className: "tracking-tight" },
        { name: "ROQUETTE", className: "tracking-wide" },
        { name: "Norauto", className: "tracking-tightest" },
        { name: "+12 équipes produit", className: "italic font-semibold" },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Le produit, de l’intuition au lancement.",
      bio1:
        "Product Manager depuis 10 ans, j’ai piloté des produits B2B et B2C dans la proptech, l’industrie et le retail. Mon truc : relier le besoin terrain, la faisabilité technique et l’impact business — sans jamais sacrifier la finition.",
      bio2:
        "Aujourd’hui en freelance, j’embarque les équipes sur des cycles courts : cadrer juste, prototyper vite, livrer ce qui compte. Et j’intègre l’IA là où elle fait gagner du temps réel.",
      stats: [
        { value: "10 ans", label: "en product" },
        { value: "15+", label: "produits lancés" },
        { value: "1 250", label: "collaborateurs outillés" },
      ],
      passionsLabel: "En dehors du produit",
      passions: [
        { iconKey: "soup", label: "Cuisine & gastronomie" },
        { iconKey: "volleyball", label: "Volley, beach-volley" },
        { iconKey: "mountain", label: "Randonnée" },
        { iconKey: "trees", label: "Nature" },
        { iconKey: "theater", label: "Théâtre" },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Quatre façons de travailler ensemble",
      intro:
        "De l’idée floue au produit en prod. Vous prenez le bloc dont vous avez besoin — ou toute la chaîne.",
      items: [
        {
          iconKey: "compass",
          slug: "concevoir",
          title: "Concevoir",
          description:
            "Discovery, interviews, cadrage du problème et des objectifs. On part sur la bonne idée.",
        },
        {
          iconKey: "penLine",
          slug: "creer",
          title: "Créer",
          description:
            "Prototypage, design des parcours, tests utilisateurs. On valide avant de coder.",
        },
        {
          iconKey: "code",
          slug: "developper",
          title: "Développer",
          description:
            "Delivery, priorisation, no-code & IA. On livre ce qui compte, vite et proprement.",
        },
        {
          iconKey: "users",
          slug: "federer",
          title: "Fédérer",
          description:
            "Animation d’équipe, rituels, montée en compétence produit & IA des collaborateurs.",
        },
      ],
    },
    experiences: {
      eyebrow: "Expériences",
      title: "Un fil produit, plusieurs terrains",
    },
    testimonials: {
      ariaLabel: "Témoignages",
    },
    blogPreview: {
      eyebrow: "Blog",
      title: "Méthode produit & IA",
      allLink: "Tous les articles →",
      allLinkAria: "Accéder à tous les articles du blog",
      empty: "Aucun article pour le moment.",
    },
    contact: {
      eyebrow: "Contact",
      title: "On construit votre prochain produit ?",
      text:
        "Parlez-moi de votre sujet en deux lignes. Je reviens vers vous sous 24 h avec une première lecture.",
      ctaBook: "Prendre rendez-vous",
      ctaEmail: "maxime@herbaut.me",
      ctaLinkedin: "LinkedIn",
      newTabSr: " (ouvre dans un nouvel onglet)",
    },
  },

  footer: {
    copyrightSuffix: "Product Manager freelance · Lille",
    navAriaLabel: "Liens de pied de page",
    linkedin: "LinkedIn",
    email: "Email",
    blog: "Blog",
  },

  blog: {
    eyebrow: "Le blog",
    title: "Tous les articles",
    intro:
      "Retrouvez l’ensemble des publications pour approfondir les thématiques produit, design et innovation.",
    backToArticles: "← Tous les articles",
    homeAriaLabel: "Revenir à l’accueil",
    scrollTopAria: "Retour en haut de la page",
    scrollTopTitle: "Retour en haut",
  },

  cv: {
    eyebrow: "Curriculum vitæ",
    badge: "10 ans d’expérience",
    role: "Product Manager · Digital Builder",
    pitchLine1:
      "Avec 10 ans d’expérience, mon approche reste la même : aller vite, bien, et ajuster avec l’usage.",
    pitchLine2: "La valeur se construit dans l’itération, pas dans la théorie.",
    contactAriaLabel: "Coordonnées",
    emailSr: " (ouvre votre client de messagerie)",
    phoneSr: " (composer ce numéro)",
    linkedinSr: " (ouvre dans un nouvel onglet)",
    download: "Télécharger le CV",
    pdfHref: "/cv-maxime-herbaut.pdf",
    quote: "« La perfection, c’est quand il n’y a plus rien à enlever. »",
    quoteAuthor: "— Antoine de Saint-Exupéry",
    sections: {
      experiences: "Expériences",
      skills: "Compétences clés",
      passions: "Passions",
      formation: "Formation",
    },
    degreeLabel: "Diplôme d’ingénieur",
    skills: [
      "Discovery & user research",
      "Delivery",
      "Facilitation d'ateliers",
      "Product builder",
      "Pilotage d'équipes pluridisciplinaires",
      "Management de projets",
      "Méthodologies agiles (Scrum, Kanban)",
      "Data & analytics",
      "SQL / Snowflake",
      "IA générative",
      "No-code & outils d’automatisation (n8n, Make, Supabase)",
      "Design thinking",
      "Product Design Sprint",
      "Collaboration UX / UI",
      "Anglais C1 (TOEIC 905/990)",
      "Communication claire & vulgarisation technique",
    ],
    education: [
      {
        school: "ITEEM Lille",
        degree:
          "Diplôme d’ingénieur de l'École Centrale de Lille et Skema Business School. Double compétence en ingénierie généraliste et management de projet, avec spécialisation e-business et mobilité connectée.",
        date: "2010 – 2015",
      },
    ],
  },
} as const;

export type SiteContent = typeof content;
```

- [ ] **Step 2: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur (le fichier n'est encore importé nulle part).

- [ ] **Step 3: Commit**

```bash
git add content/site.ts
git commit -m "Add centralized site content file (content/site.ts)"
```

---

## Task 2: Câbler les meta de l'accueil + Navigation

**Files:**
- Modify: `pages/index.tsx` (bloc `<Head>`)
- Modify: `components/Navigation.tsx`

- [ ] **Step 1: `pages/index.tsx` — importer le contenu**

Ajouter après les imports existants :

```typescript
import { content } from '../content/site'
```

- [ ] **Step 2: `pages/index.tsx` — remplacer le bloc `<Head>`**

Remplacer le contenu actuel du `<Head>` (lignes ~39-61) par :

```tsx
      <Head>
        <title>{content.meta.home.title}</title>
        <meta name="description" content={content.meta.home.description} />
        <meta property="og:title" content={content.meta.home.title} />
        <meta property="og:description" content={content.meta.home.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:site_name" content={content.brand} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.home.title} />
        <meta name="twitter:description" content={content.meta.home.twitterDescription} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      </Head>
```

- [ ] **Step 3: `components/Navigation.tsx` — importer et remplacer la constante NAV**

Ajouter l'import en tête :

```typescript
import { content } from '../content/site';
```

Supprimer la constante locale `NAV` (lignes 5-10) et la remplacer par :

```typescript
const NAV = content.nav.items;
```

- [ ] **Step 4: `components/Navigation.tsx` — remplacer le libellé de marque**

Remplacer `Maxime Herbaut` (texte dans le `<span>` du logo, ~ligne 100-102) par `{content.brand}`.

- [ ] **Step 5: `components/Navigation.tsx` — remplacer "Contact" et "Menu"**

- Le `<a href="#contact">` du desktop : `Contact` → `{content.nav.contact}`.
- Dans la liste mobile, l'item `{ label: 'Contact', id: 'contact' }` → `{ label: content.nav.contact, id: 'contact' }`.
- `aria-label="Menu"` du bouton burger → `aria-label={content.nav.menuLabel}`.

- [ ] **Step 6: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 7: Commit**

```bash
git add pages/index.tsx components/Navigation.tsx
git commit -m "Wire home meta + Navigation to content/site"
```

---

## Task 3: Câbler le Hero

**Files:**
- Modify: `components/sections/Hero.tsx`

- [ ] **Step 1: Importer le contenu et supprimer la constante `clients`**

Remplacer l'import + la constante `clients` (lignes 1-8) par :

```tsx
import Button from '../ui/Button';
import { content } from '../../content/site';

const hero = content.home.hero;
```

- [ ] **Step 2: Remplacer le texte dans le JSX**

Appliquer ces remplacements dans le JSX :

```tsx
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/35 px-4 py-1.5 text-sm font-medium text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
              {hero.badge}
            </span>

            <h1
              id="hero-title"
              className="text-[2.75rem] font-extrabold leading-[0.95] tracking-tightest text-mist sm:text-6xl lg:text-7xl"
            >
              {hero.titleLine1}<br />
              {hero.titlePrefix} <span className="text-brand">{hero.titleHighlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button href="#contact">{hero.ctaPrimary}</Button>
              <Button href="#experiences" variant="outline">
                {hero.ctaSecondary}
              </Button>
            </div>
```

Et pour l'avatar :

```tsx
              <img
                src="/avatar-mh.png"
                alt={hero.avatarAlt}
                className="h-56 w-56 rounded-full border-4 border-brand bg-ink-800 object-cover shadow-card sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
              <span
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-brand-ink shadow"
                aria-hidden="true"
              >
                {hero.avatarBadge}
              </span>
```

Et la preuve sociale :

```tsx
          <p className="mb-5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {hero.socialProof}
          </p>
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-3" role="list">
            {hero.clients.map((client) => (
              <li key={client.name} className={`text-2xl font-bold text-fog ${client.className}`}>
                {client.name}
              </li>
            ))}
          </ul>
```

- [ ] **Step 2b: Note `&amp;`**

`&amp;` n'est plus nécessaire car le texte vient maintenant d'une string JS (le `&` s'affiche tel quel). Les chaînes du content contiennent déjà `&` littéral — vérifier visuellement que le badge affiche bien « Lille & remote ».

- [ ] **Step 3: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "Wire Hero to content/site"
```

---

## Task 4: Câbler About

**Files:**
- Modify: `components/sections/About.tsx`

- [ ] **Step 1: Importer le contenu, garder le mapping d'icônes, supprimer `stats`/`passions` locaux**

Remplacer les imports + constantes locales `stats` et `passions` (lignes 1-17) par :

```tsx
import { Soup, Volleyball, Mountain, Trees, Theater } from 'lucide-react';
import { eyebrowClasses, sectionTitleClasses } from '../sectionStyles';
import Chip from '../ui/Chip';
import { content } from '../../content/site';

const about = content.home.about;

const passionIcons = {
  soup: Soup,
  volleyball: Volleyball,
  mountain: Mountain,
  trees: Trees,
  theater: Theater,
} as const;
```

- [ ] **Step 2: Remplacer le texte dans le JSX**

```tsx
          <div className="flex flex-col gap-4">
            <span className={eyebrowClasses}>{about.eyebrow}</span>
            <h2 id="about-title" className={sectionTitleClasses}>
              {about.title}
            </h2>
          </div>

          <div>
            <p className="mb-6 text-lg leading-relaxed text-fog sm:text-xl">
              {about.bio1}
            </p>
            <p className="mb-9 text-lg leading-relaxed text-muted sm:text-xl">
              {about.bio2}
            </p>

            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/[0.07] bg-ink p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-4xl font-extrabold tracking-tightest text-brand">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <p className="mb-4 font-label text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {about.passionsLabel}
              </p>
              <ul className="flex flex-wrap gap-3">
                {about.passions.map(({ iconKey, label }) => {
                  const Icon = passionIcons[iconKey];
                  return (
                    <li key={label}>
                      <Chip icon={<Icon className="h-5 w-5" />}>{label}</Chip>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
```

- [ ] **Step 3: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 4: Commit**

```bash
git add components/sections/About.tsx
git commit -m "Wire About to content/site"
```

---

## Task 5: Câbler Services

**Files:**
- Modify: `components/sections/Services.tsx`

- [ ] **Step 1: Importer le contenu, mapper les icônes par clé, supprimer `services` local**

Remplacer les imports + constante `services` (lignes 1-29) par :

```tsx
import { Compass, PenLine, Code, Users } from 'lucide-react';
import { cardBaseClasses, eyebrowClasses, sectionTitleClasses } from '../sectionStyles';
import { content } from '../../content/site';

const servicesContent = content.home.services;

const serviceIcons = {
  compass: Compass,
  penLine: PenLine,
  code: Code,
  users: Users,
} as const;
```

- [ ] **Step 2: Remplacer le texte dans le JSX**

```tsx
          <div className="flex flex-col gap-4">
            <span className={eyebrowClasses}>{servicesContent.eyebrow}</span>
            <h2 id="services-title" className={sectionTitleClasses}>
              {servicesContent.title}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-muted">
            {servicesContent.intro}
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" role="list">
          {servicesContent.items.map((service) => {
            const Icon = serviceIcons[service.iconKey];
            return (
              <li key={service.title} className="w-full">
                <article
                  className={`${cardBaseClasses} h-full w-full p-8 text-left`}
                  aria-labelledby={`service-${service.slug}`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <h3 id={`service-${service.slug}`} className="mb-2.5 text-xl font-bold tracking-tight text-mist">
                    {service.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted">{service.description}</p>
                </article>
              </li>
            );
          })}
        </ul>
```

- [ ] **Step 3: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Services.tsx
git commit -m "Wire Services to content/site"
```

---

## Task 6: Câbler Experiences + Testimonials

**Files:**
- Modify: `components/sections/Experiences.tsx`
- Modify: `components/sections/Testimonials.tsx`

- [ ] **Step 1: `Experiences.tsx` — import + remplacement**

Ajouter l'import :

```tsx
import { content } from '../../content/site';
```

Remplacer le bloc titre :

```tsx
        <div className="mb-12 flex flex-col gap-4">
          <span className={eyebrowClasses}>{content.home.experiences.eyebrow}</span>
          <h2 id="experiences-title" className={sectionTitleClasses}>
            {content.home.experiences.title}
          </h2>
        </div>
```

- [ ] **Step 2: `Testimonials.tsx` — import + aria-label**

Ajouter l'import :

```tsx
import { content } from '../../content/site';
```

Remplacer `aria-label="Témoignages"` par `aria-label={content.home.testimonials.ariaLabel}`.

- [ ] **Step 3: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Experiences.tsx components/sections/Testimonials.tsx
git commit -m "Wire Experiences + Testimonials to content/site"
```

---

## Task 7: Câbler BlogPreview

**Files:**
- Modify: `components/sections/BlogPreview.tsx`

- [ ] **Step 1: Importer le contenu**

Ajouter l'import :

```tsx
import { content } from "../../content/site";
```

- [ ] **Step 2: Remplacer le texte dans le JSX**

```tsx
          <div className="flex flex-col gap-4">
            <span className={eyebrowClasses}>{content.home.blogPreview.eyebrow}</span>
            <h2 id="blog-title" className={sectionTitleClasses}>
              {content.home.blogPreview.title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="rounded text-sm font-semibold text-brand transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            aria-label={content.home.blogPreview.allLinkAria}
          >
            {content.home.blogPreview.allLink}
          </Link>
```

Et le message vide :

```tsx
              <p className="text-center text-fog">{content.home.blogPreview.empty}</p>
```

- [ ] **Step 3: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 4: Commit**

```bash
git add components/sections/BlogPreview.tsx
git commit -m "Wire BlogPreview to content/site"
```

---

## Task 8: Câbler Contact

**Files:**
- Modify: `components/sections/Contact.tsx`

- [ ] **Step 1: Importer le contenu**

Ajouter en tête (après la constante `ringOnBrand`) :

```tsx
import { content } from '../../content/site';

const contact = content.home.contact;
const info = content.contactInfo;
```

- [ ] **Step 2: Remplacer le texte + URLs dans le JSX**

```tsx
          <span className="font-label text-sm font-semibold uppercase tracking-[0.16em] text-brand-ink">
            {contact.eyebrow}
          </span>
          <h2
            id="contact-title"
            className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tightest text-brand-ink sm:text-5xl"
          >
            {contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-ink/80">
            {contact.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href={info.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl bg-brand-ink px-7 py-3.5 text-base font-semibold text-brand transition-colors hover:bg-black ${ringOnBrand}`}
            >
              {contact.ctaBook}
              <span className="sr-only">{contact.newTabSr}</span>
            </a>
            <a
              href={info.emailHref}
              className={`inline-flex items-center justify-center rounded-xl border border-brand-ink/30 px-7 py-3.5 text-base font-semibold text-brand-ink transition-colors hover:bg-brand-ink/10 ${ringOnBrand}`}
            >
              {contact.ctaEmail}
            </a>
            <a
              href={info.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-xl border border-brand-ink/30 px-7 py-3.5 text-base font-semibold text-brand-ink transition-colors hover:bg-brand-ink/10 ${ringOnBrand}`}
            >
              {contact.ctaLinkedin}
              <span className="sr-only">{contact.newTabSr}</span>
            </a>
          </div>
```

Note : `24&nbsp;h` du texte d'origine devient `24 h` (espace normale) dans la string. Acceptable visuellement ; si l'insécable est souhaité, utiliser le caractère ` ` directement dans `content.home.contact.text`.

- [ ] **Step 3: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Contact.tsx
git commit -m "Wire Contact to content/site"
```

---

## Task 9: Câbler Footer

**Files:**
- Modify: `components/sections/Footer.tsx`

- [ ] **Step 1: Importer le contenu**

Ajouter l'import (après `linkClasses`) :

```tsx
import { content } from '../../content/site';
```

- [ ] **Step 2: Remplacer le texte + liens**

```tsx
          <span className="text-sm font-semibold text-mist transition-colors group-hover:text-brand">
            {content.brand}
          </span>
        </a>

        <span className="text-xs text-muted">
          © {new Date().getFullYear()} {content.brand} · {content.footer.copyrightSuffix}
        </span>

        <nav className="flex gap-6" aria-label={content.footer.navAriaLabel}>
          <a
            href={content.contactInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {content.footer.linkedin}
          </a>
          <a href={content.contactInfo.emailHref} className={linkClasses}>
            {content.footer.email}
          </a>
          <a href="/blog" className={linkClasses}>
            {content.footer.blog}
          </a>
        </nav>
```

- [ ] **Step 3: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 4: Commit**

```bash
git add components/sections/Footer.tsx
git commit -m "Wire Footer to content/site"
```

---

## Task 10: Câbler les pages blog

**Files:**
- Modify: `pages/blog/index.tsx`
- Modify: `pages/blog/[slug].tsx`
- Modify: `components/BlogMiniHeader.tsx`
- Modify: `components/BlogHead.tsx`

- [ ] **Step 1: `pages/blog/index.tsx` — import + remplacements**

Ajouter l'import :

```tsx
import { content } from "../../content/site";
```

Remplacer le `<Head>` et l'en-tête :

```tsx
      <Head>
        <title>{content.meta.blogList.title}</title>
        <meta name="description" content={content.meta.blogList.description} />
      </Head>
      <BlogMiniHeader variant="home" />
      <main id="main-content" className="mx-auto flex max-w-3xl flex-grow flex-col gap-10 px-4 pt-20" tabIndex={-1}>
        <header className="flex flex-col gap-3">
          <span className="font-label text-sm font-semibold uppercase tracking-[0.16em] text-brand">{content.blog.eyebrow}</span>
          <h1 className="text-4xl font-bold tracking-tightest text-mist sm:text-5xl">
            {content.blog.title}
          </h1>
          <p className="max-w-2xl text-fog">
            {content.blog.intro}
          </p>
        </header>
```

- [ ] **Step 2: `pages/blog/[slug].tsx` — import + remplacements**

Ajouter l'import :

```tsx
import { content } from "../../content/site";
```

Remplacer les libellés du bouton « retour en haut » :

```tsx
          aria-label={content.blog.scrollTopAria}
```
et
```tsx
          title={content.blog.scrollTopTitle}
```

- [ ] **Step 3: `components/BlogMiniHeader.tsx` — import + remplacements**

Ajouter l'import :

```tsx
import { content } from "@/content/site";
```

Remplacer le texte du lien retour `← Tous les articles` par `{content.blog.backToArticles}`.

- [ ] **Step 4: `components/BlogHead.tsx` — import + remplacements**

Ajouter l'import :

```tsx
import { content } from "../content/site";
```

Remplacer :
- `const displayTitle = post.title || "Untitled";` → `const displayTitle = post.title || content.meta.untitled;`
- `<meta property="og:site_name" content="Maxime Herbaut" />` → `<meta property="og:site_name" content={content.brand} />`

- [ ] **Step 5: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 6: Commit**

```bash
git add pages/blog/index.tsx pages/blog/[slug].tsx components/BlogMiniHeader.tsx components/BlogHead.tsx
git commit -m "Wire blog pages to content/site"
```

---

## Task 11: Câbler la page CV

**Files:**
- Modify: `pages/cv.tsx`

- [ ] **Step 1: Importer le contenu, supprimer `skills` et `education` locaux**

Ajouter l'import :

```tsx
import { content } from '../content/site';
```

Supprimer les constantes locales `skills` (lignes 12-38) et `education` (lignes 40-47). Le `iconMap` (lignes 49-56) reste inchangé (il sert aux passions de `data/`). Ajouter un raccourci sous les imports :

```tsx
const cv = content.cv;
```

- [ ] **Step 2: Remplacer le `<Head>`**

```tsx
      <Head>
        <title>{content.meta.cv.title}</title>
        <meta name="description" content={content.meta.cv.description} />
      </Head>
```

Note : le titre et la description SEO sont dans `content.meta.cv` (Task 1), distincts du contenu de page `content.cv`.

- [ ] **Step 3: Remplacer l'en-tête identité**

```tsx
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-brand md:text-sm">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  <span className="font-label">{cv.eyebrow}</span>
                  <span className="mx-2 h-3 w-px bg-white/20" aria-hidden="true" />
                  <span className="rounded-full bg-brand/15 px-2.5 py-1 text-brand ring-1 ring-inset ring-brand/30">
                    {cv.badge}
                  </span>
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tightest text-mist md:text-5xl">
                  {content.brand}
                </h1>

                <p className="text-lg font-semibold text-fog md:text-xl">
                  {cv.role}
                </p>

                <p className="max-w-2xl leading-relaxed text-fog">
                  {cv.pitchLine1}
                  <br className="hidden sm:block" />
                  {cv.pitchLine2}
                </p>
```

- [ ] **Step 4: Remplacer le bloc coordonnées**

```tsx
              <aside
                className="flex flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-ink-950 p-6 md:p-7"
                aria-label={cv.contactAriaLabel}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-fog">
                    <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href={content.contactInfo.emailHref}
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      {content.contactInfo.email}
                      <span className="sr-only">{cv.emailSr}</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-fog">
                    <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href={content.contactInfo.phoneHref}
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      {content.contactInfo.phone}
                      <span className="sr-only">{cv.phoneSr}</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-fog">
                    <Linkedin className="h-5 w-5 text-brand" aria-hidden="true" />
                    <a
                      href={content.contactInfo.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded transition hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
                    >
                      {content.contactInfo.linkedinLabel}
                      <span className="sr-only">{cv.linkedinSr}</span>
                    </a>
                  </div>
                </div>

                <a
                  href={cv.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-brand/40 bg-brand/20 px-4 py-2 font-semibold text-brand transition hover:bg-brand/30"
                >
                  <Download className="h-4 w-4" /> {cv.download}
                </a>
              </aside>
```

- [ ] **Step 5: Remplacer la citation**

```tsx
                <blockquote className="max-w-xl border-t border-white/10 pt-4 text-center italic leading-relaxed text-fog">
                  {cv.quote}
                  <span className="mt-1 block text-sm text-muted">{cv.quoteAuthor}</span>
                </blockquote>
```

- [ ] **Step 6: Remplacer les titres de sections + skills + education**

Titres de section (4 occurrences) :
- `Expériences` → `{cv.sections.experiences}`
- `Compétences clés` → `{cv.sections.skills}`
- `Passions` → `{cv.sections.passions}`
- `Formation` → `{cv.sections.formation}`

Boucle skills :
```tsx
              {cv.skills.map((skill) => (
                <Chip key={skill} variant="tint" className="rounded-xl px-4 py-2">
                  {skill}
                </Chip>
              ))}
```

Boucle education :
```tsx
              {cv.education.map((item) => (
```
et dans la carte, `Diplôme d’ingénieur` → `{cv.degreeLabel}`.

- [ ] **Step 7: Vérifier le typage**

Run: `npx tsc --noEmit`
Expected: aucune erreur.

- [ ] **Step 8: Commit**

```bash
git add pages/cv.tsx
git commit -m "Wire CV page to content/site"
```

---

## Task 12: Vérification finale (build + visuel + PDF)

**Files:** aucun nouveau ; régénère `public/cv-maxime-herbaut.pdf`.

- [ ] **Step 1: Build de production**

Run: `npm run build`
Expected: build réussi, 9 pages générées, pas d'erreur de type. (Le `postbuild` régénère aussi le PDF du CV — désormais corrigé.)

- [ ] **Step 2: Contrôle visuel dans le preview**

Lancer le preview (`preview_start`) et vérifier que le texte est **identique** sur :
- `/` (hero, about, services, expériences, témoignages, blog preview, contact, footer)
- `/blog` (en-tête, liste)
- `/blog/[slug]` (un article)
- `/cv` (toutes les sections)

Points de contrôle texte : badge hero « Disponible pour missions · Lille & remote », titre « Product Manager & digital builder », copyright footer avec l'année, citation CV, libellés de navigation.

- [ ] **Step 3: Recherche de texte en dur résiduel (optionnel)**

Run: `grep -rn "Product Manager\|Tous les articles\|À propos" components/ pages/ | grep -v content/site`
Expected: ne devrait remonter que des `id`/`aria` structurels ou des références déjà migrées — vérifier qu'aucune chaîne d'affichage n'a été oubliée.

- [ ] **Step 4: Commit (PDF régénéré)**

```bash
git add public/cv-maxime-herbaut.pdf
git commit -m "Regenerate CV PDF after content centralization"
```

---

## Self-Review (effectué)

- **Couverture spec:** meta SEO (Task 2, 10, 11), nav (Task 2), home hero/about/services/experiences/testimonials/blogPreview/contact/footer (Tasks 3-9), blog (Task 10), CV (Task 11). `data/` et Notion explicitement hors périmètre. ✅
- **Placeholders:** aucun « TBD/TODO ». Tout le code est fourni. ✅
- **Cohérence des types:** les clés d'icônes (`soup/volleyball/...`, `compass/penLine/code/users`) sont définies en Task 1 et consommées via des maps locales en Tasks 4-5. `content.meta.cv` (titre/desc SEO) vs `content.cv` (contenu page) : la Task 11 Step 2 corrige explicitement la référence vers `content.meta.cv`. ✅
- **Ambiguïté apostrophes/espaces insécables:** convention fixée (apostrophe typographique `’` ; `&nbsp;`→espace normale, note pour rétablir l'insécable si voulu). ✅
