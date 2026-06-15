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

**Styling.** Tailwind utility classes inline. Shared style strings are centralized in `components/sectionStyles.ts` (`sectionTitleClasses`, `sectionTitleGradientClasses`, `cardBaseClasses`) — edit these to restyle all sections at once. Import alias `@/*` maps to the repo root (`tsconfig.json`).

**CV → PDF.** `scripts/generate-cv-pdf.ts` launches Puppeteer against the running CV page (`/cv?print=1`) and writes `public/cv-maxime-herbaut.pdf`. Requires a live server. Run locally and commit the result (see CV PDF workflow above) — Vercel serves the committed file.

## Active redesign (branch `redesign`)

`design_handoff_site_refonte/README.md` is the **design brief** for an in-progress restyling — read it before any visual change. Key rules:
- It is a **restyling only**: do not change data-fetching, routing, or component structure — only styles and visual hierarchy.
- Single accent color **émeraude `#12B981`**. Remove all indigo `#6366f1` and every `bg-gradient-to-* from-[#10b981]...` rainbow gradient (replace with solid colors).
- New design tokens go in `tailwind.config.js` (`theme.extend` is currently empty — the brief specifies the full token set: `ink`, `brand`, `mist`/`fog`/`muted` colors, `Schibsted Grotesk`/`Space Grotesk` fonts).
- All lucide icons unify to `text-brand`. Limit weights to 400/700.
- `references/*.png` are the visual targets; `.dc.html` files are mockups, not production code to copy.

## Conventions

- UI copy and Notion property names are in **French**. Keep new user-facing text in French.
- Accessibility patterns are already in place (skip link, `id="main-content"`, `focus-visible` rings, `aria-*`) — preserve them.
