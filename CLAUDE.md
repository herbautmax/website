# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal website / blog for Maxime Herbaut (Product Manager). Next.js 15 (Pages Router) + React 19 + TypeScript + Tailwind CSS 3, with blog content sourced from Notion. Deployed on **Vercel**.

## Commands

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build (runs postbuild → next-sitemap)
npm start            # Serve production build
npm run lint         # next lint
npm run cv:pdf       # Generate public/cv-maxime-herbaut.pdf from a running server (needs server up)
npm run build:pdf    # Boots `next start` then runs cv:pdf (uses start-server-and-test)
```

There are no unit tests. `postbuild` runs `next-sitemap`, then attempts the PDF build only when **not** on Vercel (an inline node guard in `package.json` checks the `VERCEL` env var).

**CV PDF workflow:** the PDF is **generated locally and committed/pushed** — it is not regenerated on the deploy server. The `postbuild` guard skips PDF generation when `VERCEL` is set, so the deployed PDF is always whatever is committed. After editing the CV page, run `npm run build:pdf` (or boot the server and `npm run cv:pdf`) locally, then commit the updated `public/cv-maxime-herbaut.pdf`.

## Environment

Copy `.env.local.example` → `.env.local`. Required:
- `NOTION_API_KEY`, `NOTION_DATABASE_ID` — without these, blog fetches return `[]` (the site still builds; the blog is just empty).
- `NEXT_PUBLIC_SITE_URL` — used by `next-sitemap.config.js`.
- `NEXT_PUBLIC_UMAMI_ID`, `NEXT_PUBLIC_UMAMI_URL` — analytics (optional).

## Architecture

**Two data sources, two render paths.** Static personal content (experiences, passions, skills, CV) lives in TypeScript files under `data/`. Blog content lives in Notion and is fetched at build time.

- `lib/notion.ts` — the structured Notion client (`@notionhq/client`). `getBlogPosts()` and `getPostBySlug()` query the database and map raw Notion properties (French-named: `titre`, `slug`, `date_publication`, `intro`, `tags`, `image`) into the flat `Post` type (`types/index.ts`). All errors are caught and degrade to `[]`/`null`.
- Blog **article bodies** use a *second* Notion library: `pages/blog/[slug].tsx` calls `notion-client`'s `NotionAPI().getPage()` to get a `recordMap`, rendered by `react-notion-x`'s `<NotionRenderer>`. So the post list/metadata and the post body come from different APIs.
- All pages use `getStaticProps`/`getStaticPaths` with `revalidate: 86400` (ISR, daily). `[slug]` uses `fallback: "blocking"`.

**Pages** (`pages/`): `index.tsx` composes the homepage from `components/sections/*` (Hero, About, Services, Experiences, BlogPreview, Contact). `cv.tsx` is a self-contained CV page (also the print source for the PDF, via `?print=1`). `_app.tsx` wraps everything with the global Footer, Umami script, and Vercel SpeedInsights.

**Styling.** Tailwind utility classes inline, on top of a small design system (the "Émeraude" direction):
- **Design tokens** live in `tailwind.config.js` `theme.extend`: colors `ink` (+950/900/800/700), `brand` (+`hover`/`ink`/`soft`), `mist`/`fog`/`muted`/`paper`; fonts `font-sans` (Schibsted Grotesk) / `font-label` (Space Grotesk, eyebrows); `tracking-tightest`, `shadow-card`/`card-hover`, `max-w-prose`. **Use these tokens, not raw hex.** The single accent is émeraude `#12B981` (`brand`) — no indigo, no rainbow gradients.
- **Shared style strings** in `components/sectionStyles.ts`: `sectionTitleClasses`, `eyebrowClasses`, `cardBaseClasses`. `sectionTitleGradientClasses` is kept as an alias of `sectionTitleClasses` (no gradient) only so old imports don't break — prefer the non-gradient name in new code.
- **Reusable UI primitives** in `components/ui/`: `Button` (variants `primary`/`outline`; `buttonClasses()` helper for applying button styles to a `next/link` `<Link>`), `Chip` (variants `soft`/`tint`, optional icon), `SectionHeading` (eyebrow + title). Reuse these across pages instead of re-inlining CTA/chip/heading markup. `components/ui/Tag.tsx` is a legacy tint chip (currently unused).

Import alias `@/*` maps to the repo root (`tsconfig.json`).

**CV → PDF.** `scripts/generate-cv-pdf.ts` launches Puppeteer against the running CV page (`/cv?print=1`) and writes `public/cv-maxime-herbaut.pdf`. Requires a live server. Run locally and commit the result (see CV PDF workflow above) — Vercel serves the committed file.

## Design guidelines ("Émeraude")

The "Émeraude" direction is the applied design system. Keep further visual work consistent with it. The source of truth for tokens is `tailwind.config.js` — use the tokens, never raw hex.

- **Restyling discipline**: don't change data-fetching, routing, or component structure for cosmetic work — style and visual hierarchy only.
- **Single accent émeraude `#12B981`** (`brand`). No indigo `#6366f1`, no rainbow gradients (`bg-gradient-to-* from-...via-...to-...`). All lucide icons use `text-brand`. Title weights 400/700 (800 reserved for hero/large numbers).
- **Background layering** (important for contrast):
  - Page / content sections: `bg-ink` (`#181B1F`).
  - Cards / surfaces: `bg-ink-800` (`#20242A`) — one subtle step lighter than the page.
  - `ink-950` (`#0E1114`) is reserved for the **footer** and deliberate deep insets only — never as a content-section background (it makes cards look like they float).
- **Cards** read by their edge + shadow, not by fill contrast: `cardBaseClasses` (in `components/sectionStyles.ts`) = `border-white/[0.06]` + `shadow-card` on a `bg-ink-800` surface.
- **Chips** (`components/ui/Chip.tsx`): `soft` = neutral grey surface (`bg-ink-800`, used for passions); `tint` = émeraude (`bg-brand/15 text-brand`, used for skills / strong badges). **Blog tags** (`components/TagLabel.tsx`) are émeraude pills: `rounded-full bg-brand/15 text-brand`, icon `text-brand`.
- **Fonts**: Schibsted Grotesk (`font-sans`, body + titles), Space Grotesk (`font-label`, uppercase eyebrows). Blog article bodies (react-notion-x) are forced to Schibsted via `.notion-content .notion` in `styles/globals.css`.
- **CV print view**: `/cv?print=1` renders a compact **white, single-page A4** layout (2 columns), separate from the dark web view; `pages/_app.tsx` hides the footer and switches to a white background in print mode. After any CV change, regenerate the PDF locally — see CV PDF workflow above.
- **Outstanding asset to supply**: `public/og-image.png` (1200×630) — OG/Twitter meta in `pages/index.tsx` already reference it via `NEXT_PUBLIC_SITE_URL`.

## Conventions

- UI copy and Notion property names are in **French**. Keep new user-facing text in French.
- Accessibility patterns are already in place (skip link, `id="main-content"`, `focus-visible` rings, `aria-*`) — preserve them.
