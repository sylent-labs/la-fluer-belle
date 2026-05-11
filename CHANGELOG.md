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
