# Server SEO Pages (Marines + SCP) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 20 SEO landing pages (10 Marines/RMC14, 10 SCP) via a generalized `ServerSeoPage` renderer, plus a review pass over the 10 existing Monolith SEO pages.

**Architecture:** Generalize the existing data-driven `MonolithSeoPage` into `ServerSeoPage` (accent + branding per server, optional games listicle block with comparison table and ItemList JSON-LD). Page content lives in `src/data/marines-seo-pages.ts` / `src/data/scp-seo-pages.ts`; each page gets a thin route in `src/app/<slug>/page.tsx`; sitemap enumerates the new arrays.

**Tech Stack:** Next.js 16 App Router (static export), TypeScript, Tailwind v4 tokens (`marine-green`, `scp-purple`, `neon-cyan`), existing schema helpers in `src/lib/schema`.

**Spec:** `docs/superpowers/specs/2026-08-18-server-seo-pages-design.md`

---

## File structure

- Create `src/data/server-seo-types.ts` — shared `ServerSeoPageData`, `ServerSeoSection`, `ServerSeoGamesBlock`, `ServerSeoGame` types.
- Create `src/components/seo/ServerSeoPage.tsx` — generalized renderer + `createServerSeoMetadata` + `createServerSeoSchemas`, per-server config map (accent classes, logo, brand line, wiki root, CTA copy, OG image).
- Modify `src/data/monolith-seo-pages.ts` — re-export types from server-seo-types (compat aliases).
- Modify `src/components/seo/MonolithSeoPage.tsx` — thin delegation to ServerSeoPage with `server="monolith"` (10 monolith routes untouched).
- Create `src/data/marines-seo-pages.ts` — 10 page objects + `MARINES_SEO_PAGES`.
- Create `src/data/scp-seo-pages.ts` — 10 page objects + `SCP_SEO_PAGES`.
- Create 20 × `src/app/<slug>/page.tsx` thin routes.
- Modify `src/app/sitemap.ts` — add both arrays.
- Modify monolith page data (review pass): fix meta lengths where needed, add cross-links, switch OG to `og-monolith.png` via config.

## Task 1: Shared types

**Files:** Create `src/data/server-seo-types.ts`

```ts
export interface ServerSeoSection {
  title: string;
  paragraphs: string[];
  points?: string[];
}

export interface ServerSeoGame {
  name: string;
  description: string;
  free: boolean;
  features: Record<string, boolean>;
  highlighted?: boolean;
}

export interface ServerSeoGamesBlock {
  heading: string;
  intro: string;
  columns: { key: string; label: string }[];
  entries: ServerSeoGame[];
}

export interface ServerSeoPageData {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  searchQueries: string[];
  eyebrow: string;
  sections: ServerSeoSection[];
  games?: ServerSeoGamesBlock;
  faqs: { question: string; answer: string }[];
  wikiLinks: { label: string; href: string }[];
  relatedPages: { label: string; href: string; description: string }[];
}
```

- [ ] Create file, `npx tsc --noEmit` clean, commit.

## Task 2: ServerSeoPage component

**Files:** Create `src/components/seo/ServerSeoPage.tsx`; Modify `src/data/monolith-seo-pages.ts` (type re-export), `src/components/seo/MonolithSeoPage.tsx` (delegate).

- Config map keyed `"monolith" | "marines" | "scp"`:
  - monolith: neon-cyan accents, `/branding/monolith-logo.svg`, wiki `/wiki-monolith/`, CTA "Explora el Sector Colossus", OG `/branding/og-monolith.png`, brand line as today.
  - marines: marine-green accents (`text-marine-green`, `border-marine-green/25`, `bg-marine-green/5`, `hover:border-marine-green/40`), `/branding/marines-logo.png`, wiki `/wiki-marines/`, guides heading "Guías de Capibara Marines", CTA "Alístate en Capibara Marines", OG `/branding/og-marines.png`, brand line "Contenido basado en las guías y recursos del servidor comunitario Capibara Marines (RMC14 en español)."
  - scp: scp-purple accents, `/branding/logo.svg` (placeholder logo), wiki `/wiki-scp/`, guides heading "Guías de Capibara SCP", CTA "Accede al Sitio de la Fundación", OG `/branding/og-scp.png`, brand line "Contenido basado en las guías y recursos del servidor comunitario Capibara SCP en español."
- Render = current MonolithSeoPage markup with accent classes from config + NEW games block between sections and wikiLinks: card list (like juegos-como-among-us cards, accent for highlighted) + generic comparison table built from `columns`/`features` Record (same styles as GameComparisonTable, "Gratis"/check marks).
- `createServerSeoMetadata(page, server)` — same as monolith helper but OG image from config.
- `createServerSeoSchemas(page, server)` — article + breadcrumb + faq + (if `page.games`) `itemListSchema(entries)`.
- MonolithSeoPage.tsx keeps exports `createMonolithSeoMetadata/createMonolithSeoSchemas/MonolithSeoPage` delegating with `"monolith"`; monolith-seo-pages.ts re-exports `MonolithSeoPageData`/`MonolithSeoSection` as aliases of shared types.
- [ ] Implement, `npx tsc --noEmit` + `npm run lint` clean, commit.

## Task 3: Marines data + routes

**Files:** Create `src/data/marines-seo-pages.ts`, 10 routes `src/app/<slug>/page.tsx`.

Pages (slug — metaTitle ≤60 — content brief; all wikiLinks verified against `marines-guides.ts` slugs; editorial rules from spec §Contenido):

1. `rmc14-en-espanol` — "RMC14 en Español: Capibara Marines | SS14" — hub: qué es RMC14 (recreación de CM-SS13 sobre SS14, marines vs xenónidos), qué aporta Capibara (comunidad + wiki es-ES), queries: rmc14 español / rmc14 space station 14 / colonial marines ss14. Wiki: `/wiki-marines/rmc14/`, `/wiki-marines/rmc-guide-new-player/`, `/wiki-marines/rmc-guide-marine-roles/`, `/wiki-marines/rmc-guide-xenonid-roles/`.
2. `como-jugar-capibara-marines` — "Cómo Jugar Capibara Marines | Guía RMC14" — tutorial: descarga SS14 gratis, primeros pasos, empezar de fusilero, Discord para dirección. Wiki: rmc-guide-new-player, controls, rmc-guide-role-rifleman, rmc-guide-marine-communications.
3. `roles-y-escuadras-marines-rmc14` — "Roles de Marines en RMC14 | Escuadras" — fusilero, líder de escuadra, especialistas (francotirador/demoliciones/granadero/explorador), médico hospitalario/de campo, técnico de combate, policía militar, mando, CAS, requisiciones. Wiki: rmc-guide-marine-roles, rmc-guide-squad-leader, rmc-guide-role-spec, rmc-guide-command-roles, rmc-requisitions.
4. `xenonidos-rmc14` — "Xenónidos en RMC14 | Castas y Colmena" — jugar la colmena: castas T1 (runner/defender/sentinel/drone), T2 (warrior/lurker/spitter…), T3 (crusher/ravager/praetorian/boiler), Reina, estructuras de resina. Wiki: rmc-guide-xenonid-roles, rmc-guide-xenonid-t1, rmc-guide-xenonid-t2, rmc-guide-xenonid-t3, rmc-guide-role-queen, rmc-guide-hive-structures.
5. `cm-ss13-en-espanol` — "CM-SS13 en Español: Alternativa RMC14" — puente: qué es CM-SS13, cómo RMC14 lo recrea en motor moderno, comunidad hispana. Wiki: rmc14, rmc-guide-new-player, rmc-guide-marine-roles.
6. `juegos-de-marines-espaciales` — "Juegos de Marines Espaciales PC | 2026" — games block: Space Marine 2, Helldivers 2, Deep Rock Galactic, Aliens: Dark Descent, StarCraft II, Capibara Marines (RMC14) highlighted. Columns: free/coop/pvp/squads.
7. `juegos-de-aliens-para-pc` — "Juegos de Aliens para PC: Los Mejores | 2026" — games block: Alien: Isolation, Aliens: Fireteam Elite, Aliens: Dark Descent, AvP 2010, Capibara Marines highlighted. Columns: free/multiplayer/horror/playAlien ("Juegas al alien").
8. `juegos-como-helldivers-2` — "Juegos como Helldivers 2: Alternativas | 2026" — games block: DRG, Starship Troopers: Extermination, EDF 6, Aliens: Fireteam Elite, Capibara Marines highlighted (gratis, escuadras vs colmena jugada por personas). Columns: free/coop/hordes/pvp.
9. `juegos-pvp-asimetrico` — "Juegos PvP Asimétrico: 1 vs Muchos | 2026" — games block: Dead by Daylight, VHS/Evolve (legado), L4D2 versus, Capibara Marines highlighted (decenas de marines vs colmena de jugadores). Columns: free/teams/horror/persistentRoles.
10. `juegos-parecidos-a-starship-troopers` — "Juegos como Starship Troopers | 2026" — games block: Extermination, Helldivers 2, EDF, DRG, Capibara Marines highlighted. Columns: free/coop/hordes/classes.

Each generic page: sections explain from zero (qué es SS14: 2D top-down, gratis, sin cuenta de pago, PC modesto) + funnel section "Pruébalo gratis en español". relatedPages: 3 dentro del set + 1 cruzado (p. ej. → `/juegos-cooperativos-pc/`, `/juego-espacial-cooperativo/`). FAQs 3-5 por página.

- [ ] Write data file (10 pages), routes (pattern below), `npx tsc --noEmit`, commit.

Route template (repeat per slug with its export):

```tsx
import type { Metadata } from "next";
import { RMC14_SPANISH_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  RMC14_SPANISH_PAGE,
  "marines"
);

export default function Rmc14EnEspanolPage() {
  return (
    <ServerSeoPage
      page={RMC14_SPANISH_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(RMC14_SPANISH_PAGE, "marines")}
    />
  );
}
```

## Task 4: SCP data + routes

**Files:** Create `src/data/scp-seo-pages.ts`, 10 routes.

1. `scp-en-space-station-14` — "SCP en Space Station 14 | Capibara SCP" — hub: servidor de la Fundación SCP sobre SS14 en español; anomalías jugables, roles, wiki propia. Wiki: `/wiki-scp/scp/`, `/wiki-scp/scp-research/`, `/wiki-scp/scp-glossary/`, `/wiki-scp/jobs/`.
2. `como-jugar-capibara-scp` — "Cómo Jugar Capibara SCP | Guía en Español" — tutorial primeros pasos en el Sitio. Wiki: new-player, controls, scp-basic-terms, scp-abbreviations.
3. `anomalias-scp-jugables` — "Anomalías SCP Jugables: 173, 096, 106…" — qué hace cada una, contención, brechas: SCP-173, SCP-096, SCP-082, SCP-106, SCP-457. Wiki: scp173about, scp096about, scp082about, scp106about, scp457about.
4. `roles-fundacion-scp` — "Roles de la Fundación SCP | Capibara SCP" — científicos/investigación anómala, seguridad, Clase-D, servicio médico. Wiki: jobs, scp-research, anomalous-research, scp-glossary.
5. `juegos-de-scp` — "Juegos de SCP: Los Mejores para PC | 2026" — explica universo SCP desde cero; games block: SCP: Secret Laboratory, SCP – Containment Breach, SCP: 5K, SCP: Pandemic, Capibara SCP highlighted. Columns: free/multiplayer/horror/roleplay.
6. `juegos-como-scp-secret-laboratory` — "Juegos como SCP: Secret Laboratory | 2026" — games block: Containment Breach, SCP: 5K, Lethal Company, GTFO, Capibara SCP highlighted (roles persistentes + contención). Columns: free/roles/horror/coop.
7. `scp-multijugador` — "SCP Multijugador: Juega la Fundación Online" — intent: jugar SCP online con amigos; compara opciones y presenta el servidor. Wiki: scp, jobs, scp173about.
8. `que-es-la-fundacion-scp` — "¿Qué es la Fundación SCP? Guía Completa" — informacional: origen del proyecto colaborativo, Asegurar/Contener/Proteger, clases Seguro/Euclid/Keter, cómo vivirlo en un juego. Wiki: scp-glossary, scp-basic-terms, scp-abbreviations.
9. `juegos-de-terror-cooperativo` — "Juegos de Terror Cooperativo PC | 2026" — games block: Phasmophobia, Lethal Company, GTFO, SCP: Secret Laboratory, Content Warning, Capibara SCP highlighted. Columns: free/coop/proximity? no → free/coop/pvp/roleplay.
10. `juegos-de-terror-gratis-pc` — "Juegos de Terror Gratis para PC | 2026" — games block: SCP: Secret Laboratory, Cry of Fear, No More Room in Hell, Deceit, SCP – Containment Breach, Capibara SCP highlighted. Columns: free/multiplayer/coop/horror… (all free → columns multiplayer/coop/openSource/spanish).

Same editorial + funnel + interlinking rules as Task 3 (cruzados: → `/juegos-como-among-us/`, `/juegos-gratis-multijugador/`).

- [ ] Write data file, 10 routes, `npx tsc --noEmit`, commit.

## Task 5: Sitemap

**Files:** Modify `src/app/sitemap.ts`

```ts
import { MARINES_SEO_PAGES } from "@/data/marines-seo-pages";
import { SCP_SEO_PAGES } from "@/data/scp-seo-pages";
// map both like monolithSeoPages and spread into the returned array
```

- [ ] Edit, `npx tsc --noEmit`, commit.

## Task 6: Monolith review pass

**Files:** Modify `src/data/monolith-seo-pages.ts`

- [ ] Verify each wikiLink href slug exists in `src/data/monolith-guides.ts` (grep per slug). Fix broken.
- [ ] metaTitle ≤ ~60 chars, metaDescription 140–165 — adjust outliers.
- [ ] Cross-links: add 1 relatedPage per page pointing at a new page where topical (juego-espacial-cooperativo → juegos-de-terror-cooperativo; juego-de-naves-espaciales-multijugador → juegos-de-marines-espaciales; monolith hub → rmc14-en-espanol "otros servidores Capibara"). Keep 3-item grid (replace weakest link, do not grow past 3).
- [ ] OG image: monolith pages now get `/branding/og-monolith.png` automatically via ServerSeoPage config — verify metadata output.
- [ ] Commit.

## Task 7: Verification

- [ ] `npm run lint` clean.
- [ ] `npm run build` completes; confirm 20 new routes in output.
- [ ] Sitemap contains 20 new URLs (inspect generated sitemap.xml in out/).
- [ ] Spot-check rendered HTML of 1 branded + 1 listicle page per server (out/<slug>/index.html): accent classes, FAQ schema JSON present, ItemList present on listicles.
- [ ] Final commit.

## Self-review notes

- Spec coverage: architecture (T1-T2), marines 10 (T3), scp 10 (T4), sitemap (T5), monolith review (T6), verification (T7). Covered.
- Content paragraphs intentionally authored at implementation time following spec editorial rules; per-page briefs above fix scope, keywords, wikiLinks, games entries.
- Type names consistent: `ServerSeoPageData`, `ServerSeoGamesBlock`, `createServerSeoMetadata(page, server)`.
