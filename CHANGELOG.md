# Changelog

All notable changes to La Fleur Belle are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project tracks
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) once it ships a 1.0.

## [Unreleased]

### Added

- Scaffolded `frontend/` with Vite 5, React 18, TypeScript in strict mode, and the
  `@/*` path alias.
- Tailwind v3 with brand design tokens (`cream`, `rose-soft`, `rose-deep`, `mauve`,
  `forest`, `ink`) and font families `font-display` (Playfair Display) and
  `font-body` (Inter), self-hosted via `@fontsource/*` so the site works on LTE
  without hitting Google Fonts.
- shadcn/ui configuration (`components.json`) plus the two primitives the home
  page needs: `Button` and `Sheet`, both pre-tinted for the brand palette.
- React Router v6 wired up with a single mounted route, `/` → `routes/Home.tsx`.
- Folder skeleton ready for the next pass: `components/{home,layout,ui}`,
  `data/`, `lib/`, `routes/`, `public/images/`.
- `CHANGELOG.md` (this file) at the repo root.
- Seeded typed catalog at `frontend/src/data/bouquets.ts` with five bouquets from
  the mockups (Crimson Ivory Rose, Sunny Bloom Sunflower, Pink Carnation, Ivory
  Blush Tulip, Lavender Dream). Exports a `Bouquet` interface matching the
  shape in `.claude/rules/10-project-context.md`, a `topPickSlugs` curation
  list for the Home page carousel, and a `getBouquetBySlug()` helper for the
  future `/bouquets/:slug` route. Image paths point at
  `/images/bouquets/<slug>.jpg` — placeholders until real photography lands.
- `frontend/src/data/homeContent.ts` holds typed copy for every Home section
  (hero, "Where Flowers Tell Stories", feature cards, tagline divider, about
  teaser, photo strip, and the four "How to Order" steps). The `OrderStep`
  type uses the exact `"browse" | "inquiry" | "payment" | "receive"` icon
  union from the plan so the section component can do an exhaustive `switch`.
- `frontend/src/data/shopInfo.ts` carries shop metadata for the footer and any
  future "contact us" surfaces — name, tagline, email, phone, address, service
  area, business reg line, copyright string, plus a `socials` array with
  Instagram and Facebook entries (Viber is one line away; the `SocialPlatform`
  union already includes it).
- Shared mobile-first layout under `frontend/src/components/layout/`:
  - `NavBar.tsx` is a sticky cream top bar with the wordmark linking to `/`
    and a burger trigger on the right.
  - `BurgerMenu.tsx` uses the shadcn `Sheet` primitive (right side, ~75% width
    on mobile, capped at `sm:max-w-xs`) and renders the five `Link`s the spec
    calls for: Home, Bouquets, Custom Order, About, FAQ. The active route is
    highlighted via `useLocation`, and the sheet closes both on item click
    (`SheetClose asChild`) and whenever the pathname changes — the latter
    catches the back/forward case where a click never fires.
  - `Footer.tsx` is the mauve panel: centered logo medallion, link cluster
    (About, Bouquets, Custom Order, Delivery Information, FAQ — Delivery and
    FAQ both point at `/faq` for now since there is no separate `/delivery`
    route), social rows driven off `shopInfo.socials` plus an email row, and
    the business reg / copyright lines from `shopInfo`. Social platform →
    lucide icon mapping lives in a `Record<SocialPlatform, LucideIcon>` so
    adding Viber later is one line in `shopInfo.ts` + one line in the map.
  - `Layout.tsx` is a tiny `<NavBar /><main><Outlet /></main><Footer />`
    wrapper, mounted in `App.tsx` as a layout route so every future page
    inherits the chrome for free.
- `routes/Home.tsx` no longer renders its own `<main>` wrapper — `Layout`
  owns that now, so the placeholder is a plain `<section>` until the home
  page sections land.
- `frontend/src/components/SectionDivider.tsx` — reusable centered four-point
  star/asterisk SVG marked `aria-hidden`. Sized at `h-3 w-3` in `text-rose-deep`
  with an optional `showLines` prop that adds hairline rules either side for
  sections that want a fuller eyebrow. Lives in `components/` (not
  `components/home/`) because Top Picks, Flowers Tell Stories, Tagline, and
  several other sections reuse it.
- `frontend/src/components/home/Hero.tsx` — first composed Home section.
  Mobile-first layout: rose-soft blurred blobs and two small rose-deep dots
  behind a rounded `2rem` image frame anchored top-right at 92% width with an
  `aspect-[391/425]` ratio that matches the source SVG so the bouquet doesn't
  letterbox. Below: `font-display` headline at `text-4xl`/`sm:text-5xl`, body
  copy at `text-ink/70`, a stacked `Button` pair — primary forest "Shop
  Bouquets" → `/bouquets` and outline rose-deep "Custom Order" → `/custom`,
  both `asChild` over a React Router `Link`. Closes with a `SectionDivider`.
  All copy, alt text, and hrefs come from `hero` in
  `frontend/src/data/homeContent.ts` — no magic strings in the JSX.
- `frontend/public/images/hero.svg` — placeholder bouquet artwork wired into
  the Hero. Lands at the brand frame above. Note: the file is ~20 MB because
  the underlying raster is base64-embedded inside an SVG wrapper; this needs
  to be replaced with a real WebP/JPEG before launch, since first paint will
  block on the full download on LTE.
- `routes/Home.tsx` now mounts `<Hero />` instead of the scaffold placeholder.

### Fixed

- `tsconfig.app.json` and `tsconfig.node.json` now set `composite: true` with a
  `tsBuildInfoFile` under `node_modules/.tmp/`. Without this, the editor's TS
  language server could not redirect files into the right referenced project,
  which caused spurious `Cannot find module 'react/jsx-runtime'` and
  `JSX element implicitly has type 'any'` errors in the IDE even though `tsc -b`
  passed from the CLI. `tsconfig.node.json`'s `include` also picks up
  `tailwind.config.ts` and `postcss.config.js` so those files aren't orphaned.

### Changed

- `.claude/rules/45-typescript-standards.md` now opens with a **Project Setup**
  section that documents the solution-style tsconfig + project references
  pitfall, lists the required `composite: true` configuration, and gives a
  verification checklist (CLI `tsc -b` is not enough — actually open a `.tsx`
  file in the editor after restarting the TS Server).
