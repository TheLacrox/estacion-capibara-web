import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(
  new URL("../../src/data/monolith-seo-pages.ts", import.meta.url),
  "utf8"
);
const guidesSource = readFileSync(
  new URL("../../src/data/monolith-guides.ts", import.meta.url),
  "utf8"
);
const schemaSource = readFileSync(
  new URL("../../src/lib/schema.ts", import.meta.url),
  "utf8"
);

const expectedPages = new Map([
  ["monolith-station-en-espanol", "monolith station español"],
  ["frontier-station-14-en-espanol", "frontier station 14 español"],
  ["juego-roleplay-espacial-con-naves", "juego roleplay espacial"],
  ["como-jugar-capibara-monolith", "cómo jugar capibara monolith"],
  ["roles-y-trabajos-monolith-station", "space station 14 roles"],
  ["juego-de-naves-espaciales-multijugador", "juego de naves espaciales multijugador"],
  ["juego-espacial-cooperativo", "juego espacial cooperativo"],
  ["economia-monolith-station", "economía monolith station"],
  ["expediciones-monolith-station", "expediciones monolith station"],
  ["facciones-y-lore-monolith-station", "facciones monolith station"],
]);

const expectedRouteExports = new Map([
  ["monolith-station-en-espanol", "MONOLITH_SPANISH_PAGE"],
  ["frontier-station-14-en-espanol", "FRONTIER_SPANISH_PAGE"],
  ["juego-roleplay-espacial-con-naves", "SPACESHIP_ROLEPLAY_PAGE"],
  ["como-jugar-capibara-monolith", "MONOLITH_GETTING_STARTED_PAGE"],
  ["roles-y-trabajos-monolith-station", "MONOLITH_ROLES_PAGE"],
  ["juego-de-naves-espaciales-multijugador", "MULTIPLAYER_SPACESHIPS_PAGE"],
  ["juego-espacial-cooperativo", "SPACE_COOP_PAGE"],
  ["economia-monolith-station", "MONOLITH_ECONOMY_PAGE"],
  ["expediciones-monolith-station", "MONOLITH_EXPEDITIONS_PAGE"],
  ["facciones-y-lore-monolith-station", "MONOLITH_FACTIONS_PAGE"],
]);

function guideSlugs() {
  const marker = "const guidePagesArray: GuidePage[] = ";
  const start = guidesSource.indexOf(marker) + marker.length;
  const end = guidesSource.indexOf("\n];", start) + 2;
  return new Set(JSON.parse(guidesSource.slice(start, end)).map(({ slug }) => slug));
}

function pageBlocks() {
  return [...source.matchAll(/export const \w+: MonolithSeoPageData = \{([\s\S]*?)\n\};/g)].map(
    (match) => match[1]
  );
}

test("the Monolith SEO cluster defines ten distinct search intents", () => {
  const pages = pageBlocks().map((block) => ({
    block,
    slug: block.match(/\bslug: "([^"]+)"/)?.[1],
    searchQueries: [
      ...(block.match(/searchQueries:\s*\[([\s\S]*?)\]/)?.[1] ?? "").matchAll(
        /"([^"]+)"/g
      ),
    ].map((match) => match[1].toLocaleLowerCase("es")),
  }));

  assert.equal(pages.length, 10);
  assert.deepEqual(new Set(pages.map(({ slug }) => slug)), new Set(expectedPages.keys()));

  for (const { block, slug, searchQueries } of pages) {
    assert.ok(slug);
    const primaryQuery = expectedPages.get(slug);
    assert.ok(primaryQuery);
    assert.match(block, /searchQueries:\s*\[/);
    assert.ok(
      searchQueries.includes(primaryQuery),
      `${slug} no declara la consulta principal «${primaryQuery}»`
    );
    assert.ok((block.match(/\bquestion:/g) ?? []).length >= 3, `${slug} necesita al menos 3 FAQ`);
    assert.ok((block.match(/\btitle:/g) ?? []).length >= 4, `${slug} necesita al menos 3 secciones`);
  }
});

test("Monolith SEO pages only link to generated Monolith guides", () => {
  const slugs = guideSlugs();
  const hrefs = [...source.matchAll(/href: "(\/wiki-monolith\/[^"#?]*)"/g)].map(
    (match) => match[1]
  );

  assert.ok(hrefs.length >= 40);
  for (const href of hrefs) {
    if (href === "/wiki-monolith/") continue;
    const slug = href.slice("/wiki-monolith/".length).replace(/\/$/, "");
    assert.ok(slugs.has(slug), `La guía /wiki-monolith/${slug}/ no existe`);
  }
});

test("Monolith SEO copy does not advertise untranslated wiki text", () => {
  assert.doesNotMatch(source, /pueden quedar textos en inglés/i);
  assert.doesNotMatch(source, /puede conservar (?:algunas )?cadenas? en inglés/i);
  assert.doesNotMatch(source, /algunas cadenas todavía pueden aparecer en inglés/i);
});

test("every Monolith SEO intent has a static route with metadata and schemas", () => {
  for (const [slug, exportName] of expectedRouteExports) {
    const routeUrl = new URL(`../../src/app/${slug}/page.tsx`, import.meta.url);
    assert.ok(existsSync(routeUrl), `Falta la ruta estática /${slug}/`);
    const route = readFileSync(routeUrl, "utf8");
    assert.match(route, new RegExp(`\\b${exportName}\\b`));
    assert.match(route, /createMonolithSeoMetadata/);
    assert.match(route, /createMonolithSeoSchemas/);
  }
});

test("Monolith landing metadata publishes each page search queries", () => {
  const component = readFileSync(
    new URL("../../src/components/seo/MonolithSeoPage.tsx", import.meta.url),
    "utf8"
  );
  assert.match(component, /keywords:\s*page\.searchQueries/);
});

test("generic SEO searches discover contextually related Monolith landings", () => {
  const genericSource = readFileSync(
    new URL("../../src/data/seo-pages.ts", import.meta.url),
    "utf8"
  );
  const expectedBacklinks = new Map([
    ["juegos-de-rol-online", "juego-roleplay-espacial-con-naves"],
    ["juegos-sandbox-multijugador", "monolith-station-en-espanol"],
    ["juegos-cooperativos-pc", "juego-espacial-cooperativo"],
    ["juegos-espaciales-pc", "juego-de-naves-espaciales-multijugador"],
    ["juegos-parecidos-a-barotrauma", "juego-de-naves-espaciales-multijugador"],
  ]);

  for (const [sourceSlug, targetSlug] of expectedBacklinks) {
    const pageStart = genericSource.indexOf(`slug: "${sourceSlug}"`);
    assert.notEqual(pageStart, -1, `No existe la página genérica ${sourceSlug}`);
    const remainder = genericSource.slice(pageStart + 1);
    const nextPageOffset = remainder.search(/\r?\n  \{\r?\n    slug:/);
    const pageEnd = nextPageOffset === -1 ? undefined : pageStart + 1 + nextPageOffset;
    const block = genericSource.slice(pageStart, pageEnd);
    assert.match(block, new RegExp(`"${targetSlug}"`), `${sourceSlug} no enlaza a ${targetSlug}`);
  }

  const component = readFileSync(
    new URL("../../src/components/seo/InternalLinkGrid.tsx", import.meta.url),
    "utf8"
  );
  assert.match(component, /MONOLITH_SEO_PAGES/);
});

test("Monolith search queries are unique and every landing has an inbound cluster link", () => {
  const blocks = pageBlocks();
  const slugs = blocks.map((block) => block.match(/\bslug: "([^"]+)"/)?.[1]);
  const queryOwners = new Map();
  const inbound = new Map(slugs.map((slug) => [slug, 0]));

  for (const block of blocks) {
    const slug = block.match(/\bslug: "([^"]+)"/)?.[1];
    const queries = block.match(/searchQueries:\s*\[([\s\S]*?)\]/)?.[1] ?? "";
    for (const match of queries.matchAll(/"([^"]+)"/g)) {
      const query = match[1].toLocaleLowerCase("es");
      assert.ok(!queryOwners.has(query), `«${query}» se comparte entre ${queryOwners.get(query)} y ${slug}`);
      queryOwners.set(query, slug);
    }
    for (const target of slugs) {
      if (target !== slug && block.includes(`href: "/${target}/"`)) {
        inbound.set(target, (inbound.get(target) ?? 0) + 1);
      }
    }
  }

  for (const [slug, count] of inbound) {
    assert.ok(count > 0, `${slug} no tiene enlaces entrantes desde el clúster Monolith`);
  }
});

test("the Monolith wiki owns the navigational wiki query", () => {
  const mainPage = pageBlocks().find((block) =>
    block.includes('slug: "monolith-station-en-espanol"')
  );
  assert.ok(mainPage);
  const mainQueries = mainPage.match(/searchQueries:\s*\[([\s\S]*?)\]/)?.[1] ?? "";
  assert.doesNotMatch(mainQueries, /monolith station wiki/i);

  const wikiIndex = readFileSync(
    new URL("../../src/app/wiki-monolith/page.tsx", import.meta.url),
    "utf8"
  );
  assert.match(wikiIndex, /monolith station wiki/i);
});

test("article schemas never fabricate publication or modification dates", () => {
  assert.doesNotMatch(schemaSource, /datePublished:\s*guide\.datePublished\s*\?\?/);
  assert.doesNotMatch(schemaSource, /dateModified:[^\n]*\?\?\s*"\d{4}-\d{2}-\d{2}"/);
});

test("the spaceship landing links to ship navigation guides", () => {
  const spaceshipPage = pageBlocks().find((block) =>
    block.includes('slug: "juego-de-naves-espaciales-multijugador"')
  );
  assert.ok(spaceshipPage);
  const wikiLinks = spaceshipPage.match(/wikiLinks:\s*\[([\s\S]*?)\n\s*\]/)?.[1] ?? "";
  assert.doesNotMatch(wikiLinks, /\/wiki-monolith\/flight\//);
  assert.match(wikiLinks, /\/wiki-monolith\/shuttle-craft\//);
});
