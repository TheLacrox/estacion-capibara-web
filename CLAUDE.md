# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page + full wiki for **Estacion Capibara**, a Spanish-language Space Station 14 game server. Static site built with Next.js, deployed as static HTML files.

## Commands

```bash
npm run dev              # Dev server with Turbopack
npm run build            # Full build (runs prebuild → generate-guides → next build)
npm run lint             # ESLint
node scripts/generate-guides.mjs    # Parse server YAML/XML → src/data/guides.ts
node scripts/extract-sprites.mjs    # Extract entity sprites → public/sprites/ + src/data/entity-sprites.ts
node scripts/find-missing-sprites.mjs  # Diagnostic: which sprites are missing and why
```

The `prebuild` hook runs `generate-guides` automatically before `next build`. Sprite extraction must be run manually.

## Architecture

### Static Export
Next.js is configured with `output: "export"` — all pages are statically generated to `out/`. No server runtime. Images are unoptimized (served directly). Wiki pages use `generateStaticParams` for static generation of 200+ guide pages.

### Two Main Sections
1. **Landing page** (`/`) — 6 sections loaded via `dynamic()` with `ssr: false`. Uses Lenis smooth scrolling, GSAP, React Three Fiber for 3D star field hero.
2. **Wiki** (`/wiki`) — Full guidebook system parsed from SS14 server data files. Has its own layout with sidebar navigation.

### Build-Time Data Pipeline
The wiki content comes from a sibling repo at `../Estacion-Capibara/Resources/`:
- **`scripts/generate-guides.mjs`** — Reads `Prototypes/Guidebook/*.yml` for hierarchy, reads `ServerInfo/Guidebook/**/*.xml` for content, writes `src/data/guides.ts` (auto-generated, ~5000 lines)
- **`scripts/extract-sprites.mjs`** — Scans ALL `Prototypes/**/*.yml` for entity definitions, resolves sprite paths through parent inheritance chains, extracts first frames from RSI sprite sheets (using `sharp`), composites multi-layer sprites, outputs PNGs to `public/sprites/` and mapping to `src/data/entity-sprites.ts`

### SS14 RSI Sprite System
Entity sprites live in RSI directories (e.g. `Textures/Objects/Fun/figurines.rsi/`) containing `meta.json` + state PNGs. Key concepts:
- Sprites can be multi-direction (2×2 or 4×1 grids) — extract top-left frame only
- Sprites can be animated (multiple frames in one PNG) — extract first frame using `meta.json` size
- Entities inherit sprite definitions from parents via `parent:` field (can be array)
- Child entities may override only `state:` while inheriting `sprite:` RSI path from parent
- Layers are composited bottom-to-top; each layer can specify its own `sprite:` RSI path

### Guide Markup Parser
`src/components/wiki/GuideMarkup.tsx` converts SS14's custom XML/BBCode markup to React:
- `[color=X]...[/color]`, `[bold]`, `[italic]`, `[head=N]...[/head]`
- `[textlink="Label" link="GuideId"]` → internal wiki links
- `<GuideEntityEmbed Entity="X" Caption="Y"/>` → sprite image + badge
- `<GuideReagentEmbed>`, `<Box>`, `<Table>`, `<ColorBox>`, `[keybind]`
- Block parsing is recursive (`parseBlocks` function) so nested structures work

### Design System
- Dark space theme: `space-void` (#0b0f19), `hull-panel` (#121824), `grid-line` (#1c2331)
- Accent: `hazard-yellow` (#F1C40F), `neon-cyan` (#00ffff), `alert-red`
- Department colors: `dept-command`, `dept-security`, `dept-engineering`, etc.
- Fonts: Space Grotesk (headings), JetBrains Mono (mono/body)
- Tailwind v4 with `@theme` block in `globals.css`
- Framer Motion for animations — `ease` arrays need `as const` assertion for TypeScript

### Key Patterns
- All landing page sections use `dynamic()` with `ssr: false` (client-only for animations)
- `src/lib/cn.ts` — `clsx` + `tailwind-merge` utility
- `sitemap.ts` and `robots.ts` need `export const dynamic = "force-static"` for static export
- Auto-generated files (`src/data/guides.ts`, `src/data/entity-sprites.ts`) should not be manually edited

## Server Data Location

The SS14 server repo is expected at `../Estacion-Capibara/Resources/` relative to this project root. The build scripts read from:
- `Prototypes/Guidebook/*.yml` — guide hierarchy
- `Prototypes/_Capibara/Guidebook/*.yml` — custom guides
- `Prototypes/_Goobstation/Guidebook/*.yml` — Goobstation guides
- `ServerInfo/Guidebook/**/*.xml` — guide content (Spanish)
- `Prototypes/**/*.yml` — ALL entity prototype definitions (for sprite resolution)
- `Textures/**/*.rsi/` — RSI sprite directories
