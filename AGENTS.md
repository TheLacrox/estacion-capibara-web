# Estación Capibara Web

Spanish-language landing site, SEO content, quiz, blog, and full wiki for the Estación Capibara Space Station 14 server. The app is a Next.js 16 static export; production has no Next.js server runtime.

## Fast path

```bash
npm ci                  # deterministic install from package-lock.json
npm run dev             # Turbopack development server
npm run check           # ESLint + TypeScript (fast validation)
npm run build           # production data generation + static export to out/
```

Run `npm run check` after focused edits. Run `npm run build` before declaring work complete when the sibling SS14 data repo is available. There is currently no automated test suite.

## Build-time data dependency

The wiki is generated from `../Estacion-Capibara/Resources/`. A full `npm run build` automatically runs:

1. `npm run generate-guides`
2. `npm run generate-og-image`
3. `next build`

Useful direct commands:

```bash
npm run generate-guides                 # writes src/data/guides.ts and src/data/guide-lookup.ts
node scripts/extract-sprites.mjs        # writes public/sprites/ and src/data/entity-sprites.ts
node scripts/find-missing-sprites.mjs   # diagnoses missing entity sprites
```

Sprite extraction is intentionally manual and can be expensive. Do not run it unless the task concerns sprites or server prototype changes.

The generators read these sibling-repo locations:

- `Prototypes/Guidebook/*.yml`
- `Prototypes/_Capibara/Guidebook/*.yml`
- `Prototypes/_Goobstation/Guidebook/*.yml`
- `ServerInfo/Guidebook/**/*.xml`
- `Prototypes/**/*.yml` and `Textures/**/*.rsi/` for sprite extraction

## Generated-file boundary

Never hand-edit:

- `src/data/guides.ts`
- `src/data/guide-lookup.ts`
- `src/data/entity-sprites.ts`
- generated files under `public/sprites/`

Change the generator or the sibling SS14 source data, then regenerate. Because `npm run build` refreshes tracked generated outputs, inspect `git diff` afterward and do not discard generated changes that may predate your task.

## Architecture

- `next.config.ts` sets `output: "export"`, `trailingSlash: true`, and unoptimized images. The deployable site is `out/`.
- `/` is the animated landing page. Sections are dynamically imported; only the hero explicitly disables SSR. Lenis, GSAP, Framer Motion, and React Three Fiber drive motion and 3D effects.
- `/wiki` is the generated guidebook. `src/app/wiki/[...slug]/page.tsx` uses `generateStaticParams` for every guide route.
- `src/components/wiki/GuideMarkup.tsx` recursively converts SS14 XML/BBCode-style markup into React.
- `src/app/sitemap.ts` and `src/app/robots.ts` require `export const dynamic = "force-static"` for static export.
- Shared URLs and server constants belong in `src/lib/constants.ts`; metadata helpers live in `src/lib/metadata.ts` and schemas in `src/lib/schema.ts`.
- Use `@/` imports for `src/` and `cn()` from `src/lib/cn.ts` for composed class names.

## Guide and sprite rules

Guide markup includes color/bold/italic/head tags, text links, keybinds, boxes, tables, color boxes, entity embeds, and reagent embeds. Preserve recursive parsing and internal wiki-link behavior when modifying the parser.

RSI sprite extraction must account for:

- directional or animated sheets: extract the first frame using `meta.json` dimensions;
- prototype inheritance, including parent arrays;
- children that override only `state` while inheriting the RSI `sprite` path;
- multi-layer sprites composited bottom-to-top, with per-layer RSI paths.

## UI conventions

- User-facing copy and metadata are Spanish. Preserve accents, punctuation, and the established tone.
- Tailwind v4 tokens are declared in `src/app/globals.css` with `@theme`.
- Core palette: `space-void`, `hull-panel`, `grid-line`, `hazard-yellow`, `neon-cyan`, and department colors.
- Space Grotesk is the heading font; JetBrains Mono is the mono/body font.
- Framer Motion `ease` arrays generally need `as const` for TypeScript.
- Respect reduced-motion behavior and preserve the static hero fallback used for initial HTML/LCP.

## Change discipline

- Trace definitions and usages before editing shared components or data shapes.
- Keep the static-export constraint: do not add server actions, runtime-only route handlers, middleware-dependent behavior, or image optimization that requires a Next.js server.
- Do not mix unrelated generated-data updates, mass formatting, or dependency upgrades into a focused change.
- Before finishing, inspect `git diff` and run the narrowest relevant checks followed by `npm run check`; use `npm run build` for final production verification.
