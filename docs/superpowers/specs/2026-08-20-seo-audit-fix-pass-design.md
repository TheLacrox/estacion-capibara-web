# SEO Audit Fix Pass + Launch Blog Posts — Design

**Date:** 2026-08-20
**Source:** 10-agent SEO audit of 2026-08-20 (health score 73/100). User approved full fix pass ("fix everything") plus launch blog posts.

## Goals

Close every code-fixable audit finding in one pass and publish 4 blog posts covering the 4-server hub launch.

## Decisions (user-confirmed)

1. **Blog:** 4 posts — 1 hub announcement + 1 launch post per new server (Marines, SCP, Monolith). Spanish, author TheLacrox, dated 2026-08-20.
2. **CTA:** Discord becomes the primary filled button (#5865F2) in the SEO-landing sticky nav. "Jugar Gratis" is repointed to the matching server hub page (internal), demoted to secondary style.
3. **Wiki dates:** sitemap lastmod OMITTED for the ~902 wiki guide pages and 4 wiki indexes (accurate-or-absent per Google guidance). Real per-guide dates = future generator work.
4. **Content scope:** include both content-heavy items — 42 per-page quick answers AND boilerplate diversification across landings.

## Design

### A. Conversion / funnel
- `SeoPageLayout.tsx` gains props: `wikiHref`, `wikiLabel`, `hubHref` (defaults: `/wiki/`, "Wiki Estación", `/estacion/`). Nav becomes: wiki link (per-server) · "Jugar Gratis" secondary → `hubHref` (internal Link) · Discord primary filled button `#5865F2`. Hardcoded "Wiki Monolith" link removed.
- `ServerSeoPage.tsx` passes per-server values from `SERVER_SEO_CONFIGS` + new `hub` field.
- New `QuickAnswer` component: styled answer box rendered directly under the hero. New optional `quickAnswer: string` on `ServerSeoPageData` and `SeoPageData`. All 42 landings get a unique 1–2 sentence Spanish answer to their target query. In `ServerSeoPage`, the quick answer renders inside the existing brand box area (answer prominent, attribution line stays secondary).

### B. AI citability
- `FaqSection.tsx`: answers always rendered in DOM; closed state uses the `hidden` attribute instead of conditional unmount. Visual behavior unchanged.

### C. Dates / freshness
- 12 bespoke estación landings: `datePublished: "2026-03-19"` (real git creation date) + wire `articleSchema()` into each page's JSON-LD.
- `sitemap.ts`: wiki guide pages + wiki index pages lose `lastModified`. Other pages keep it. `LAST_CONTENT_UPDATE` bumped to `2026-08-20` (true: all landings change in this pass).
- `gameEventSchema()`: drop build-time `startDate`/`endDate` (computed "next Friday" — stale on static export); switch `@type` to `EventSeries`, keep `eventSchedule`.

### D. E-E-A-T / brand
- New `personSchema()` (TheLacrox); `articleSchema()` gains optional `author` param — blog posts pass Person (fixes byline/schema mismatch); landings/wiki keep Organization.
- Short team/bio block on `/sobre-nosotros/`.
- Brand fixes: "único servidor" → 4-hub wording (`WhatIsSS14Section.tsx`, `como-jugar-space-station-14/page.tsx`, `blog-posts.ts` welcome post), "Capibara Station" → "Estación Capibara" (`WikiIndexClient.tsx`), diacritics on `/privacidad/`.
- Boilerplate diversification: recycled "qué es SS14" blurb + duplicated competitor-game blurbs get per-page variants across the 4 landing data files.

### E. Performance / infra
- `nginx.conf.template`: second `server` block 301s `www.estacioncapibara.com` → apex; `/heroes/` added to the sprites/branding cache tier (86400); `Content-Security-Policy-Report-Only` (static export forces `'unsafe-inline'`; flip to enforce after console check — noted in DEPLOY.md); `Cross-Origin-Opener-Policy: same-origin`; HSTS gains `preload`.
- `marines-logo.png` → properly-sized WebP (sharp script), width/height set where flagged.
- Wiki prefetch stampede: `prefetch={false}` on links in `WikiSidebar.tsx`, `WikiContent.tsx`, `GuideMarkup.tsx`. (Guide-tree map chunk is already per-wiki — no further split this pass.)
- `servers.ts` gains `statusLive: boolean` (estacion/scp `false` until real upstreams); status widgets/hooks skip fetch when false → no more 502 console errors.
- `robots.ts`: remove `Disallow: /_next/`.
- IndexNow: key file in `public/`, `scripts/indexnow-submit.mjs`, DEPLOY.md step.

### F. Homepage
- Discord button visible in mobile header (not only inside hamburger).
- One-line differentiator per DiagonalHero panel (reuse `descriptor`/`tagline` from `servers.ts`) in static markup.

### G. Blog — 4 posts
Hub announcement + Marines + SCP + Monolith launches. Facts from `servers.ts` + landing data. Tags `noticias`; hub post `featured`.

## Excluded (outside repo)
DNS dead-record removal (registrar), SS14 Hub registration, gameplay screenshots, real estacion/scp status upstreams, brotli (nginx:alpine).

## Verification
`npm run build` clean; grep `out/` HTML: FAQ answer text present, quick answers present, datePublished on bespoke pages, no wiki lastmod in sitemap; nginx template visual review. No test suite exists in repo — build + output greps are the verification layer.
