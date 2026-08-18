# Diseño: Páginas SEO para Marines, SCP y revisión Monolith

Fecha: 2026-08-18
Estado: aprobado por el usuario

## Objetivo

Atraer tráfico orgánico a estacioncapibara.com con 20 páginas SEO nuevas (10 para
Capibara Marines / RMC14, 10 para Capibara SCP) y una pasada de revisión sobre las
10 páginas existentes de Monolith. Estrategia de keywords mixta: páginas
branded/nicho que convierten (gente que ya busca RMC14, SCP en SS14, CM-SS13) y
páginas genéricas de alto volumen dirigidas a jugadores que **no conocen SS14 ni
los servidores** — sin jerga, explicando el juego desde cero y con embudo hacia el
servidor correspondiente.

## Arquitectura

- Generalizar `src/components/seo/MonolithSeoPage.tsx` a un `ServerSeoPage`
  compartido, parametrizado por servidor:
  - Color de acento por servidor (marine-green `#7FB069`, scp-purple `#A55EEA`,
    neon-cyan para monolith que sigue usándolo).
  - Mismo modelo de datos que `MonolithSeoPageData` (renombrado a
    `ServerSeoPageData`): slug, title, subtitle, metaTitle, metaDescription,
    searchQueries, eyebrow, sections (título + párrafos + points), faqs,
    wikiLinks, relatedPages.
  - Campo nuevo opcional `games` para páginas listicle: lista de juegos con
    flags (gratis, multijugador, cooperativo, terror/pvp según página) que se
    renderiza con tarjetas + `GameComparisonTable` reutilizado, y genera
    `ItemList` JSON-LD.
  - `createServerSeoMetadata` / `createServerSeoSchemas` (breadcrumb + FAQPage +
    ItemList condicional), como los helpers actuales de Monolith.
- Monolith mantiene sus 10 páginas y su data file; `MonolithSeoPage` pasa a ser
  un alias/uso del componente generalizado para no duplicar renderers.
- Datos nuevos: `src/data/marines-seo-pages.ts` y `src/data/scp-seo-pages.ts`
  (mismo patrón export const por página + array agregado).
- Rutas thin en `src/app/<slug>/page.tsx` (metadata + componente), igual que las
  páginas Monolith actuales. Trailing slash y canonical con `SITE_URL`.
- Sitemap: añadir los 20 slugs nuevos a la fuente que alimenta `sitemap`
  (verificar en implementación cómo se enumeran los slugs SEO actuales).
- Enlazado interno en malla: cada página nueva enlaza a 3-4 relacionadas de su
  servidor + al menos 1 página de otro set (estación/monolith) cuando el tema
  conecte; las páginas Monolith y estación existentes reciben cross-links hacia
  las nuevas donde encaje.

## Contenido: reglas editoriales

- Español neutro; las páginas genéricas no asumen conocimiento de SS14: explican
  qué es el juego, que es gratis, requisitos bajos, y qué aporta el servidor.
- No inventar datos verificables (direcciones de conexión, precios, conteos
  exactos): mismo criterio que las páginas Monolith actuales (referir a Discord
  y wiki).
- Xenónidos: usar la terminología del fork (xenónido/xenonid), presentándolos
  como criaturas "inspiradas en el género de ciencia ficción de aliens", sin
  usar marcas registradas como identidad propia.
- wikiLinks solo a slugs que existen en los datos generados
  (`marines-guides.ts`, `scp-guides.ts`).
- FAQ: 3-5 preguntas por página con respuestas autocontenidas (aptas para
  FAQPage schema y AI overviews).

## Páginas Marines (wiki base `/wiki-marines/`)

Branded/nicho:
1. `rmc14-en-espanol` — hub "RMC14 en Español: Capibara Marines". Queries:
   "rmc14 español", "rmc14 space station 14", "colonial marines ss14".
2. `como-jugar-capibara-marines` — tutorial de primeros pasos (descarga,
   controles, primera ronda como fusilero). Wiki: rmc-guide-new-player,
   controls, rmc-guide-role-rifleman.
3. `roles-y-escuadras-marines-rmc14` — fusilero, líder de escuadra,
   especialistas (francotirador, demoliciones, granadero, explorador), médico,
   policía militar, mando, CAS. Wiki: rmc-guide-marine-roles,
   rmc-guide-squad-leader, rmc-guide-role-spec, rmc-guide-command-roles.
4. `xenonidos-rmc14` — jugar como xenónido: castas T1-T3, Reina, estructuras de
   colmena. Wiki: rmc-guide-xenonid-roles, rmc-guide-xenonid-t1/t2/t3,
   rmc-guide-role-queen, rmc-guide-hive-structures.
5. `cm-ss13-en-espanol` — puente para la comunidad CM-SS13: qué comparte RMC14
   con CM-SS13 y dónde jugarlo en español.

Genéricas:
6. `juegos-de-marines-espaciales` — listicle (Space Marine 2, Helldivers 2,
   Deep Rock Galactic, Aliens: Dark Descent, StarCraft II, RMC14 destacado).
7. `juegos-de-aliens-para-pc` — listicle (Alien: Isolation, Aliens: Fireteam
   Elite, Aliens: Dark Descent, AvP clásicos, RMC14 destacado).
8. `juegos-como-helldivers-2` — listicle de alternativas cooperativas contra
   hordas.
9. `juegos-pvp-asimetrico` — listicle (Dead by Daylight, Evolve como legado,
   Left 4 Dead versus, RMC14: marines vs colmena jugada por humanos).
10. `juegos-parecidos-a-starship-troopers` — listicle (Extermination, Helldivers
    2, EDF, RMC14).

## Páginas SCP (wiki base `/wiki-scp/`)

Branded/nicho:
1. `scp-en-space-station-14` — hub "SCP en Space Station 14: Capibara SCP".
2. `como-jugar-capibara-scp` — tutorial primeros pasos en la Fundación.
   Wiki: new-player, controls, scp-basic-terms.
3. `anomalias-scp-jugables` — SCP-173, 096, 082, 106, 457: qué hacen,
   contención y brechas. Wiki: scp173about, scp096about, scp082about,
   scp106about, scp457about.
4. `roles-fundacion-scp` — científicos, guardias, Clase-D, investigación.
   Wiki: jobs, scp-research, anomalous-research, scp-glossary.

Genéricas:
5. `juegos-de-scp` — listicle (SCP: Secret Laboratory, SCP: Containment Breach,
   SCP: 5K, SS14 SCP destacado). Explica el universo SCP desde cero.
6. `juegos-como-scp-secret-laboratory` — listicle de alternativas.
7. `scp-multijugador` — intent directa "jugar SCP online con amigos".
8. `que-es-la-fundacion-scp` — informacional: qué es la Fundación SCP, clases de
   objetos (Seguro, Euclid, Keter), cómo vivirlo en un juego multijugador.
9. `juegos-de-terror-cooperativo` — listicle (Phasmophobia, Lethal Company,
   GTFO, SCP:SL, SS14 SCP).
10. `juegos-de-terror-gratis-pc` — listicle de terror gratuito.

## Revisión Monolith (sin páginas nuevas)

- Verificar que los wikiLinks de las 10 páginas siguen existiendo en
  `monolith-guides.ts`.
- Revisar longitudes de metaTitle (≤60 chars aprox) y metaDescription
  (~150-160 chars).
- Añadir cross-links relevantes hacia las páginas nuevas donde el tema conecte
  (p. ej. juego-espacial-cooperativo ↔ juegos-de-terror-cooperativo) y desde
  páginas estación (juegos-cooperativos-pc ↔ juegos-de-terror-cooperativo,
  juegos-como-among-us ↔ juegos-pvp-asimetrico).

## Errores y casos límite

- Ninguna página depende de datos en runtime; todo estático (output: export).
- Si un slug de wiki referenciado deja de generarse, el link roto solo se
  detecta en revisión manual: la implementación incluye una verificación
  puntual (grep contra los data files generados) antes de commit.

## Testing / verificación

- `npm run build` completo (genera ~1250 páginas) sin errores.
- Revisión visual de 1 página branded + 1 listicle por servidor.
- Validar JSON-LD de una página con FAQ + ItemList.
- Sitemap contiene los 20 slugs nuevos.
