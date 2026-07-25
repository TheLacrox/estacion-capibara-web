import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const localizationModuleUrl = new URL("./guide-localization.mjs", import.meta.url);
const catalogModuleUrl = new URL("./guide-localization-catalog.mjs", import.meta.url);

function readGeneratedJson(relativePath, marker, terminator) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
  const start = source.indexOf(marker) + marker.length;
  const end = source.indexOf(terminator, start);
  assert.notEqual(start, marker.length - 1, `No se encontró ${marker}`);
  assert.notEqual(end, -1, `No se encontró el cierre de ${relativePath}`);
  return JSON.parse(source.slice(start, end + 2));
}

function guideAttributeValues(content, pattern) {
  return [...content.matchAll(pattern)].map((match) => match[1]);
}

function visibleGuideText(content) {
  return content
    .split(/(<[^>]+>|\[[^\]]+\])/g)
    .filter((segment) => !segment.startsWith("<") && !segment.startsWith("["))
    .join("");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsLiteral(text, literal) {
  if (!/^[\p{L}\p{N}_]+$/u.test(literal)) return text.includes(literal);
  return new RegExp(
    `(?<![\\p{L}\\p{N}_])${escapeRegExp(literal)}(?![\\p{L}\\p{N}_])`,
    "u"
  ).test(text);
}

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
  const groupNames = [
    "entity_caption_translations",
    "textlink_label_translations",
    "normal_ui_literal_translations",
  ];
  const ledger = GUIDE_LOCALIZATION_CATALOG.coverage_ledger;
  const ledgerIds = [];

  for (const row of ledger.urls) {
    assert.ok(groupNames.includes(row.group), `Grupo desconocido en ledger: ${row.group}`);
    const translations = GUIDE_LOCALIZATION_CATALOG[row.group][row.url];
    assert.ok(translations, `Falta ${row.group}[${row.url}]`);
    assert.equal(Object.keys(translations).length, row.pair_count, `pair_count incorrecto para ${row.url}`);

    const [first, last = first] = row.ids.match(/L\d{3}/g).map((id) => Number(id.slice(1)));
    const ids = Array.from({ length: last - first + 1 }, (_, index) => first + index);
    assert.equal(ids.length, row.pair_count, `Rango de IDs incorrecto para ${row.url}`);
    ledgerIds.push(...ids);
  }
  assert.deepEqual(ledgerIds, Array.from({ length: 202 }, (_, index) => index + 1));

  for (const groupName of groupNames) {
    const group = GUIDE_LOCALIZATION_CATALOG[groupName];
    const summary = ledger.summary[groupName];
    assert.equal(Object.keys(group).length, summary.urls, `urls incorrectas para ${groupName}`);
    assert.equal(
      Object.values(group).reduce((total, translations) => total + Object.keys(translations).length, 0),
      summary.pairs,
      `pairs incorrectos para ${groupName}`
    );
  }

  const catalogRoutes = groupNames.flatMap((groupName) =>
    Object.keys(GUIDE_LOCALIZATION_CATALOG[groupName])
  );
  assert.equal(new Set(catalogRoutes).size, ledger.summary.all_groups.unique_urls);
  assert.equal(ledgerIds.length, ledger.summary.all_groups.pairs);
  assert.equal(ledger.summary.all_groups.unmapped_pairs, 0);
  assert.equal(ledger.summary.all_groups.extra_pairs, 0);
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

test("localizes every visible residue found by the independent export review", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);
  const cases = [
    ["estacion", "xenomorph-play-guide", "Lo generates con el tiempo", "Lo generas con el tiempo"],
    ["estacion", "capibara-economy-objectives", "crates; bounty; Insertar mineral crudo en un procesador de mineral (ore processor / lathe con puntos de minería).; grid; Cosechar plantas de las bandejas de hidroponía (plant holders).; \"Medicine\"", "cajas; recompensa; Insertar mineral crudo en un procesador o torno que otorgue puntos de minería.; red; Cosechar plantas de las bandejas de hidroponía.; \"Medicina\""],
    ["monolith", "air-vent", "Both", "Ambos"],
    ["monolith", "air-alarms", "None; Fill; Panic; \"Auto\"", "Ninguno; Llenado; Pánico; \"Automático\""],
    ["monolith", "networking", "Multitool; el Multitool; Network Configurator; Set; Add; Copy; Show", "multiherramienta; la multiherramienta; configurador de red; Establecer; Añadir; Copiar; Mostrar"],
    ["monolith", "utility-surgeries", "Hemostat; Cautery", "pinza hemostática; cauterio"],
    ["monolith", "automation", "los canisteres de gas; un tile de entrada", "las bombonas de gas; una casilla de entrada"],
    ["monolith", "moth-recipes", "Moths", "polillas"],
  ];

  for (const [source, slug, input, expected] of cases) {
    assert.equal(localizeGuideContent(input, { source, slug }), expected);
  }

  assert.equal(
    localizeGuideContent('[textlink="Medical Doctor" link="DoctorInternSOP"]', {
      source: "estacion",
      slug: "medical-sop",
    }),
    '[textlink="Médico" link="DoctorInternSOP"]'
  );
  assert.equal(
    localizeGuideContent('[textlink="Roboticist" link="RoboticistSOP"]', {
      source: "estacion",
      slug: "science-sop",
    }),
    '[textlink="Roboticista" link="RoboticistSOP"]'
  );
  assert.equal(
    localizeGuideContent('<GuideEntityEmbed Entity="BinglePit" Caption="Bingle Pit"/>', {
      source: "estacion",
      slug: "bingle",
    }),
    '<GuideEntityEmbed Entity="BinglePit" Caption="hoyo bingle"/>'
  );
});

test("localizes internal mode and component names without mechanical grammar errors", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);
  const cases = [
    [
      "estacion",
      "capibara-economy-objectives",
      "Solo se cuentan máquinas que tengan el componente de puntos de minería (MiningPointsLathe) — lathes normales no cuentan.",
      "Solo se cuentan máquinas que tengan el componente de puntos de minería; los tornos normales no cuentan.",
    ],
    [
      "monolith",
      "air-vent",
      "PressureBound; ExternalBound; InternalBound; NoBound; PressureBounds",
      "Límite de presión; Límite externo; Límite interno; Sin límites; límites de presión",
    ],
    ["monolith", "air-scrubber", "WideNet", "alcance ampliado"],
    ["monolith", "air-alarms", "WideNet", "alcance ampliado"],
    [
      "monolith",
      "automation",
      "Colector de Radiación y puertos de canisteres de gas; un tile de entrada; un tile de salida; un tile al otro; RadEmpty; RadLow; RadHigh",
      "Colector de radiación y puertos de bombonas de gas; una casilla de entrada; una casilla de salida; una casilla a la otra; Depósito vacío; Presión baja; Presión alta",
    ],
  ];

  for (const [source, slug, input, expected] of cases) {
    assert.equal(localizeGuideContent(input, { source, slug }), expected);
  }

  assert.equal(
    localizeGuideContent("un multitool", { source: "estacion", slug: "defusal" }),
    "una multiherramienta"
  );
});

test("localizes supplemental item, signal, trait, species, and location terms", async () => {
  const { localizeGuideContent } = await import(localizationModuleUrl);
  const cases = [
    [
      "estacion",
      "automation",
      "Moved; Start; Auto Start; Started; Completed; Failed",
      "Movido; Iniciar; Inicio automático; Iniciado; Completado; Fallido",
    ],
    ["estacion", "chaplain", "Plasteel", "plastiacero"],
    ["monolith", "vox", "canister de nitrógeno; un canister de nitrógeno", "bombona de nitrógeno; una bombona de nitrógeno"],
    ["monolith", "mobs-expedition-guide-carps", "Small, Poison", "Pequeña, Veneno"],
    ["monolith", "airlock-security", "plasteel", "plastiacero"],
    ["monolith", "nuclear-materials", "Plasteel", "Plastiacero"],
    ["monolith", "gas-mining", "canisters; Los canisters; plasteel", "bombonas; Las bombonas; plastiacero"],
    ["monolith", "food-recipes", "Alimentos para Moth", "Alimentos para polillas"],
    ["monolith", "moth-recipes", "Alimentos para Moth", "Alimentos para polillas"],
    [
      "monolith",
      "monolith-rule-roleplay-seven-safe-zones",
      "Medical Dispatch",
      "Centro de Despacho Médico",
    ],
    [
      "monolith",
      "monolith-rule-roleplay-nine-commanding-roles",
      "Medical Dispatch",
      "Centro de Despacho Médico",
    ],
  ];

  for (const [source, slug, input, expected] of cases) {
    assert.equal(localizeGuideContent(input, { source, slug }), expected);
  }
});

test("localizes English entity labels found by the independent export review", async () => {
  const { localizeEntityLabel } = await import(localizationModuleUrl);
  const labels = {
    "Canister de nitrógeno": "bombona de nitrógeno",
    "canister de plasma": "bombona de plasma",
    "canister de pluoxium": "bombona de pluoxium",
    "Canister de óxido nitroso": "bombona de óxido nitroso",
    "Syndicate Recruitment": "Reclutamiento del Sindicato",
    Enlist: "Alístate",
    Revolt: "Revuelta",
    multitool: "multiherramienta",
    plasteel: "plastiacero",
  };

  for (const [english, spanish] of Object.entries(labels)) {
    assert.equal(localizeEntityLabel(english), spanish);
  }
});

test("every catalog entry is applied to its generated guide surface", async () => {
  const { GUIDE_LOCALIZATION_CATALOG } = await import(catalogModuleUrl);
  const stationPages = readGeneratedJson(
    "../../src/data/guides.ts",
    "const guidePagesArray: GuidePage[] = ",
    "\n];"
  );
  const monolithPages = readGeneratedJson(
    "../../src/data/monolith-guides.ts",
    "const guidePagesArray: GuidePage[] = ",
    "\n];"
  );
  const pagesByRoute = new Map([
    ...stationPages.map((page) => [`/wiki/${page.slug}/`, page]),
    ...monolithPages.map((page) => [`/wiki-monolith/${page.slug}/`, page]),
  ]);
  const groups = [
    ["caption", GUIDE_LOCALIZATION_CATALOG.entity_caption_translations],
    ["caption", GUIDE_LOCALIZATION_CATALOG.supplemental_entity_caption_translations],
    ["textlink", GUIDE_LOCALIZATION_CATALOG.textlink_label_translations],
    ["textlink", GUIDE_LOCALIZATION_CATALOG.supplemental_textlink_label_translations],
    ["text", GUIDE_LOCALIZATION_CATALOG.normal_ui_literal_translations],
    ["text", GUIDE_LOCALIZATION_CATALOG.supplemental_ui_literal_translations],
  ];

  for (const [surface, routes] of groups) {
    for (const [route, translations] of Object.entries(routes)) {
      const page = pagesByRoute.get(route);
      assert.ok(page, `Falta la página generada ${route}`);
      const actual =
        surface === "caption"
          ? guideAttributeValues(page.content, /<GuideEntityEmbed\b[^>]*\bCaption=["']([^"']*)["'][^>]*>/gi)
          : surface === "textlink"
            ? guideAttributeValues(page.content, /\[textlink\s*=\s*["']([^"']*)["'][^\]]*\]/gi)
            : visibleGuideText(page.content);

      for (const [english, spanish] of Object.entries(translations)) {
        if (Array.isArray(actual)) {
          assert.ok(!actual.includes(english), `${route} todavía contiene ${surface} «${english}»`);
          assert.ok(actual.includes(spanish), `${route} no contiene ${surface} «${spanish}»`);
        } else {
          assert.ok(!containsLiteral(actual, english), `${route} todavía contiene texto «${english}»`);
          assert.ok(containsLiteral(actual, spanish), `${route} no contiene texto «${spanish}»`);
        }
      }
    }
  }

  const stationLabels = readGeneratedJson(
    "../../src/data/entity-sprites.ts",
    "export const entitySpriteLabels: Record<string, string> = ",
    "\n};"
  );
  const monolithLabels = readGeneratedJson(
    "../../src/data/monolith-entity-sprites.ts",
    "export const monolithEntitySpriteLabels: Record<string, string> = ",
    "\n};"
  );
  const generatedLabels = [...Object.values(stationLabels), ...Object.values(monolithLabels)];
  for (const [english, spanish] of Object.entries(
    GUIDE_LOCALIZATION_CATALOG.entity_label_translations
  )) {
    assert.ok(!generatedLabels.includes(english), `Todavía existe el label «${english}»`);
    assert.ok(generatedLabels.includes(spanish), `No se generó el label «${spanish}»`);
  }

  for (const [entityId, spanish] of Object.entries(
    GUIDE_LOCALIZATION_CATALOG.entity_id_label_translations
  )) {
    assert.ok(
      stationLabels[entityId] === spanish || monolithLabels[entityId] === spanish,
      `No se generó el label por ID ${entityId} → «${spanish}»`
    );
  }

  for (const [pages, relativePath, marker] of [
    [stationPages, "../../src/data/guide-lookup.ts", "export const guideSlugsToMeta: Record<string, GuideMeta> = "],
    [monolithPages, "../../src/data/monolith-guide-lookup.ts", "export const monolithGuideSlugsToMeta: Record<string, GuideMeta> = "],
  ]) {
    const lookup = readGeneratedJson(relativePath, marker, "\n};");
    for (const page of pages) {
      assert.deepEqual(lookup[page.slug], { title: page.title, slug: page.slug });
    }
  }
});
