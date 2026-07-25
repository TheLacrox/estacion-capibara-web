import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

function readGeneratedGuideSlugs() {
  const source = readFileSync(new URL("../../src/data/guides.ts", import.meta.url), "utf8");
  const marker = "const guidePagesArray: GuidePage[] = ";
  const pages = JSON.parse(source.slice(source.indexOf(marker) + marker.length, source.indexOf("\n];", source.indexOf(marker)) + 2));
  return new Set(pages.map(({ slug }) => slug));
}

test("every Estación wiki link in SEO pages targets a generated guide", () => {
  const source = readFileSync(new URL("../../src/data/seo-pages.ts", import.meta.url), "utf8");
  const guideSlugs = readGeneratedGuideSlugs();
  const hrefs = [...source.matchAll(/href:\s*"\/wiki\/([^"/]+)\/?"/g)].map((match) => match[1]);

  assert.ok(hrefs.length > 0, "No se encontraron enlaces a la wiki en las páginas SEO");
  for (const slug of hrefs) {
    assert.ok(guideSlugs.has(slug), `El enlace /wiki/${slug}/ no tiene una guía generada`);
  }
});
