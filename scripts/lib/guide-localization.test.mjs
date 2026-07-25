import assert from "node:assert/strict";
import test from "node:test";

const localizationModuleUrl = new URL("./guide-localization.mjs", import.meta.url);
const catalogModuleUrl = new URL("./guide-localization-catalog.mjs", import.meta.url);

test("localizes an English entity caption without changing its entity ID", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);
  const input = '<GuideEntityEmbed Entity="MedkitBruteFilled" Caption="brute kit"/>';

  assert.equal(
    localizeGuideContent(input, { source: "monolith" }),
    '<GuideEntityEmbed Entity="MedkitBruteFilled" Caption="kit de contusiones"/>'
  );
});

test("localizes a text-link label without changing its guide target", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);
  const input = '[textlink="Cargo Department" link="CargoSOP"]';

  assert.equal(
    localizeGuideContent(input, { source: "estacion" }),
    '[textlink="Departamento de Carga" link="CargoSOP"]'
  );
});

test("localizes visible UI text without rewriting markup attributes", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);
  const input = '[color=cyan]"Post Job"[/color] [textlink="Ir" link="Post Job"]';

  assert.equal(
    localizeGuideContent(input, { source: "estacion" }),
    '[color=cyan]"Publicar trabajo"[/color] [textlink="Ir" link="Post Job"]'
  );
});

test("the localization catalog covers all 202 audited URL-string defects", async () => {
  const { GUIDE_LOCALIZATION_CATALOG } = await import(catalogModuleUrl);
  const groups = [
    GUIDE_LOCALIZATION_CATALOG.entity_caption_translations,
    GUIDE_LOCALIZATION_CATALOG.textlink_label_translations,
    GUIDE_LOCALIZATION_CATALOG.normal_ui_literal_translations,
  ];
  const pairs = groups.reduce(
    (total, group) =>
      total + Object.values(group).reduce((subtotal, translations) => subtotal + Object.keys(translations).length, 0),
    0
  );

  assert.equal(pairs, 202);
});

test("uses the page route to select audited caption and UI translations", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);
  const content = '<GuideEntityEmbed Entity="MobHuman" Caption="Human"/> "Dock"';

  assert.equal(
    localizeGuideContent(content, { source: "monolith", slug: "species" }),
    '<GuideEntityEmbed Entity="MobHuman" Caption="Humano"/> "Dock"'
  );
  assert.equal(
    localizeGuideContent('"Dock"', { source: "monolith", slug: "piloting" }),
    '"Acoplar"'
  );
});

test("localizes supplemental English found by the exported-page audit", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);

  assert.equal(
    localizeGuideContent("Filtering (Wide): Filtering", {
      source: "monolith",
      slug: "air-alarms",
    }),
    "Filtrado (amplio): Filtrado"
  );
  assert.equal(
    localizeGuideContent(
      '<GuideEntityEmbed Entity="GuidebookMemeNpcThatGuy" Caption="and that guy"/>',
      { source: "monolith", slug: "expeditions" }
    ),
    '<GuideEntityEmbed Entity="GuidebookMemeNpcThatGuy" Caption="y ese tipo"/>'
  );
  assert.equal(
    localizeGuideContent('[textlink="Close Quarters Cooking (CQC)" link="CQC"]', {
      source: "estacion",
      slug: "chef-sop",
    }),
    '[textlink="Cocina cuerpo a cuerpo (CQC)" link="CQC"]'
  );
  assert.equal(
    localizeGuideContent("Tier 1: Hidroponía; Tier 2; Tier 3", {
      source: "estacion",
      slug: "capibara-botany-machines",
    }),
    "Nivel 1: Hidroponía; Nivel 2; Nivel 3"
  );
});

test("localizes known English labels inherited from Spanish Fluent files", async () => {
  const { localizeEntityLabel } = await import(localizationModuleUrl);

  assert.equal(localizeEntityLabel("Salvage Vendor"), "dispensador de salvamento");
  assert.equal(
    localizeEntityLabel("Plasteel Chef's Dinnerware Vendor"),
    "dispensador de vajilla de plastiacero del chef"
  );
  assert.equal(localizeEntityLabel("L6 SAW"), "L6 SAW");
});

test("supplies Spanish labels for known entity IDs missing from Fluent", async () => {
  const { localizeEntityLabel } = await import(localizationModuleUrl);

  assert.equal(
    localizeEntityLabel("", "ComplexXenoArtifact"),
    "artefacto xenoarqueológico complejo"
  );
  assert.equal(localizeEntityLabel("", "GuidebookDisarm"), "desarmar");
  assert.equal(localizeEntityLabel("", "Constructor"), "constructor");
  assert.equal(localizeEntityLabel("", "UnknownEntity"), "");
});
