# SEO Audit Fix Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close all code-fixable findings from the 2026-08-20 SEO audit and add 4 launch blog posts.

**Architecture:** Static Next.js 16 export; fixes land in shared SEO components, schema builders, data files, sitemap, nginx template, and blog data. Verification = `npm run build` + greps over `out/` (repo has no test suite).

**Tech Stack:** Next.js 16 App Router (static export), React 19, Tailwind v4, nginx.

Spec: `docs/superpowers/specs/2026-08-20-seo-audit-fix-pass-design.md`

---

### Task 1: Nav CTA + QuickAnswer + FaqSection (shared components)
**Files:** Modify `src/components/seo/SeoPageLayout.tsx`, `src/components/seo/FaqSection.tsx`, `src/components/seo/ServerSeoPage.tsx`; Create `src/components/seo/QuickAnswer.tsx`; Modify `src/data/server-seo-types.ts`, `src/data/seo-pages.ts` (interface only here).
- [ ] SeoPageLayout: add `wikiHref`/`wikiLabel`/`hubHref` props (defaults `/wiki/`, `Wiki Estación`, `/estacion/`); Discord = filled `#5865F2` button; "Jugar Gratis" = secondary internal Link → `hubHref`; drop hardcoded Wiki Monolith link.
- [ ] FaqSection: replace `{openIndex === i && (...)}` with always-rendered div + `hidden={openIndex !== i}`.
- [ ] QuickAnswer component (accent-borderable box, label "Respuesta rápida").
- [ ] Types: `quickAnswer?: string` on `ServerSeoPageData` + `SeoPageData`.
- [ ] ServerSeoPage: render QuickAnswer above brand box when present; add `hub` to configs; pass layout props.

### Task 2: Schema builders
**Files:** Modify `src/lib/schema.ts`.
- [ ] `personSchema()` for TheLacrox (`@id` anchor, url → /sobre-nosotros/).
- [ ] `articleSchema()` optional `author` param (defaults Organization).
- [ ] `gameEventSchema()`: `@type: EventSeries`, remove `startDate`/`endDate` + `getNextFriday`/`getNextSunday`.

### Task 3: Bespoke estación pages — dates + articleSchema + QuickAnswer render
**Files:** Modify all 12 `src/app/<slug>/page.tsx` bespoke landings + `src/data/seo-pages.ts` entries.
- [ ] Each entry gets `datePublished: "2026-03-19"`, unique `quickAnswer`.
- [ ] Each page.tsx adds `articleSchema({... datePublished, dateModified: LAST_CONTENT_UPDATE})` to its jsonLd array + renders `<QuickAnswer>` under hero.

### Task 4: Landing data content pass (42 quick answers + boilerplate diversification)
**Files:** Modify `src/data/seo-pages.ts`, `marines-seo-pages.ts`, `scp-seo-pages.ts`, `monolith-seo-pages.ts`.
- [ ] Unique Spanish `quickAnswer` per page (1–2 sentences, answers the page's target query, mentions Discord funnel where natural).
- [ ] Rewrite recycled "qué es SS14" paragraphs into per-page variants; de-duplicate competitor-game blurbs that repeat verbatim across pages.
(Marines/SCP/Monolith files parallelizable via subagents; estación inline.)

### Task 5: Sitemap + constants
**Files:** Modify `src/lib/constants.ts`, `src/app/sitemap.ts`.
- [ ] `LAST_CONTENT_UPDATE = "2026-08-20"`.
- [ ] Wiki guide arrays + 4 wiki index entries: no `lastModified`.

### Task 6: Status flag (kill 502s)
**Files:** Modify `src/data/servers.ts` + status widget/hook consumers.
- [ ] `statusLive: boolean` per server (estacion:false, scp:false, marines:true, monolith:true).
- [ ] Fetch gated on flag; widget renders neutral "—/desconocido" state when false.

### Task 7: Wiki prefetch stampede
**Files:** Modify `src/components/wiki/WikiSidebar.tsx`, `WikiContent.tsx`, `GuideMarkup.tsx`.
- [ ] `prefetch={false}` on all `<Link>`s to wiki guide routes.

### Task 8: robots + nginx + IndexNow
**Files:** Modify `src/app/robots.ts`, `nginx.conf.template`, `DEPLOY.md`; Create `public/<key>.txt`, `scripts/indexnow-submit.mjs`.
- [ ] robots: drop `Disallow: /_next/`.
- [ ] nginx: www→apex 301 server block; heroes in cache tier; CSP-Report-Only; COOP same-origin; HSTS preload. NOTE: `add_header` in a location suppresses server-level headers — repeat security headers in every location that sets any header.
- [ ] IndexNow key + submit script + DEPLOY.md instructions (incl. CSP flip note).

### Task 9: Images
**Files:** `public/branding/marines-logo.png` → add `marines-logo.webp`; update referencing components with correct src/width/height.
- [ ] Resize via sharp (devDependency or one-off npx) to 2x display size (~160px h), swap references, keep PNG for og fallbacks if referenced.

### Task 10: Brand + E-E-A-T edits
**Files:** Modify `src/components/sections/WhatIsSS14Section.tsx`, `src/app/como-jugar-space-station-14/page.tsx`, `src/data/blog-posts.ts` (welcome post), `src/app/wiki/WikiIndexClient.tsx`, `src/app/privacidad/page.tsx`, `src/app/sobre-nosotros/page.tsx`, `src/app/blog/[slug]/page.tsx`.
- [ ] 4-hub wording; typo fix; diacritics; bio block on sobre-nosotros; blog articleSchema author = personSchema.

### Task 11: Homepage
**Files:** Modify header/nav component (mobile Discord button), `DiagonalHero.tsx` (per-panel descriptor line in static markup).

### Task 12: Blog posts
**Files:** Modify `src/data/blog-posts.ts`.
- [ ] 4 posts dated 2026-08-20: hub announcement (featured, tags noticias) + Marines + SCP + Monolith launches. Facts from `servers.ts` + landing data. Update welcome-post singular-server wording (Task 10 overlap).

### Task 13: Build + verify + commit
- [ ] `npm run build` clean.
- [ ] Greps over `out/`: FAQ answers in HTML; quickAnswer text present; `datePublished` in bespoke pages; sitemap wiki entries have no `<lastmod>`; EventSeries on homepage; no `api/status/estacion` fetch in gated widgets (spot-check).
- [ ] Commits per logical group (components / data / infra / blog).
