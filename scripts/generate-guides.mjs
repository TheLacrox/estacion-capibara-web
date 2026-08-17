/**
 * Build-time guidebook generator for the four Capibara servers. Each source
 * keeps its own generated tree, content, and lookup maps.
 *
 * Usage: node scripts/generate-guides.mjs
 * Optional roots:
 *   ESTACION_RESOURCES_ROOT=/path/to/Resources
 *   MONOLITH_RESOURCES_ROOT=/path/to/Resources
 *   MARINES_RESOURCES_ROOT=/path/to/Resources
 *   SCP_RESOURCES_ROOT=/path/to/Resources
 */

import { existsSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

import {
  buildGuideCollection,
  createGuideContentReader,
  loadFluentMessages,
  loadGuideEntries,
} from "./lib/guide-data.mjs";
import { localizeGuideContent } from "./lib/guide-localization.mjs";

const TITLE_OVERRIDES = {
  Admins: "Admins",
  ScannersAndVessels: "Escáneres y Recipientes",
  DevilClauses: "Cláusulas del Diablo",
  Supermatter: "Supermateria",
  Automation: "Automatización",
  Plumbing: "Plomería",
  Xenobiology: "Xenobiología",
  XenomorphClasses: "Clases de Xenomorfo",
  XenomorphPlayGuide: "Guía de Juego Xenomorfo",
};

function findResourcesRoot(environmentVariable, candidates) {
  const explicit = process.env[environmentVariable];
  const paths = explicit ? [explicit] : candidates;
  const resolvedPaths = paths.map((path) => resolve(path));
  return (
    resolvedPaths.find(
      (path) =>
        existsSync(join(path, "Prototypes")) &&
        existsSync(join(path, "ServerInfo"))
    ) ?? resolvedPaths[0]
  );
}

const estacionResourcesRoot = findResourcesRoot("ESTACION_RESOURCES_ROOT", [
  "../Estacion-Capibara/Resources",
]);
const monolithResourcesRoot = findResourcesRoot("MONOLITH_RESOURCES_ROOT", [
  "../../forge-projects/Monolith-Capibara-ESP/Resources",
  "../Monolith-Capibara-ESP/Resources",
]);
const marinesResourcesRoot = findResourcesRoot("MARINES_RESOURCES_ROOT", [
  "../ColonialMarinesUniverse-ESP-Capibara/Resources",
]);
const scpResourcesRoot = findResourcesRoot("SCP_RESOURCES_ROOT", [
  "../project-fire-capibara-fundation/Resources",
]);

const sources = [
  {
    id: "estacion",
    label: "Estación Capibara",
    resourcesRoot: estacionResourcesRoot,
    yamlNamespaces: ["", "_Capibara", "_Goobstation"],
    rootIds: ["SS14"],
    virtualRoot: null,
    titleOverrides: TITLE_OVERRIDES,
    fallbackToRawName: false,
    outputFile: resolve("src/data/guides.ts"),
    lookupFile: resolve("src/data/guide-lookup.ts"),
    exports: {
      tree: "guideTree",
      pages: "guidePages",
      slugs: "allGuideSlugs",
      idToSlug: "guideIdToSlug",
      slugsToMeta: "guideSlugsToMeta",
    },
  },
  {
    id: "monolith",
    label: "Monolith Capibara",
    resourcesRoot: monolithResourcesRoot,
    yamlNamespaces: [
      "",
      "_CE",
      "_DV",
      "_FarHorizons",
      "_Goobstation",
      "_NF",
      "_Mono",
      "_Capibara",
    ],
    rootIds: [
      "NewPlayer",
      "NF14",
      "Jobs",
      "Economy",
      "Factions",
      "BasicLore",
      "References",
      "MonolithRuleset",
    ],
    virtualRoot: {
      id: "MonolithWiki",
      slug: "monolith",
      title: "Wiki de Monolith Capibara",
    },
    titleOverrides: {
      NF14: "El Monolith llama",
      NewPlayer: "Primeros pasos",
      Jobs: "Trabajos y roles",
      BasicLore: "Historia del sector",
      MonolithRuleset: "Reglas de Monolith",
      References: "Referencias",
    },
    pathAliases: {
      "ServerInfo/_Mono/Guidebook/Factions/Minor_Factions.xml":
        "ServerInfo/_Mono/Guidebook/Factions/minor_factions.xml",
    },
    fallbackToRawName: true,
    outputFile: resolve("src/data/monolith-guides.ts"),
    lookupFile: resolve("src/data/monolith-guide-lookup.ts"),
    exports: {
      tree: "monolithGuideTree",
      pages: "monolithGuidePages",
      slugs: "allMonolithGuideSlugs",
      idToSlug: "monolithGuideIdToSlug",
      slugsToMeta: "monolithGuideSlugsToMeta",
    },
  },
  {
    id: "marines",
    label: "Capibara Marines",
    resourcesRoot: marinesResourcesRoot,
    yamlNamespaces: ["", "_CMU14/Entities/Objects", "_RMC14"],
    localeMirror: "es-ES",
    rootIds: [
      "NewPlayer",
      "SS14",
      "RMC14",
      "RMCOverview",
      "AU14SOP",
      "AU14UCMJ",
      "AU14CCLaw",
      "AU14Comms",
      "References",
    ],
    virtualRoot: {
      id: "MarinesWiki",
      slug: "marines",
      title: "Wiki de Capibara Marines",
    },
    titleOverrides: {
      NewPlayer: "Primeros pasos",
      SS14: "Space Station 14",
      RMC14: "Guía Colonial Marines",
      RMCOverview: "Resumen de reglas",
      AU14SOP: "Procedimiento operativo estándar",
      AU14UCMJ: "Código Uniforme de Justicia Militar",
      AU14CCLaw: "Código Civil Colonial",
      AU14Comms: "Referencia de comunicaciones",
      References: "Referencias",
    },
    fallbackToRawName: true,
    outputFile: resolve("src/data/marines-guides.ts"),
    lookupFile: resolve("src/data/marines-guide-lookup.ts"),
    exports: {
      tree: "marinesGuideTree",
      pages: "marinesGuidePages",
      slugs: "allMarinesGuideSlugs",
      idToSlug: "marinesGuideIdToSlug",
      slugsToMeta: "marinesGuideSlugsToMeta",
    },
  },
  {
    id: "scp",
    label: "Capibara SCP",
    resourcesRoot: scpResourcesRoot,
    // _Scp ships its guidebook dir as "GuideBook" (capital B); both spellings
    // are listed and deduped by realpath so either casing works everywhere.
    yamlDirectories: [
      "Guidebook",
      "_Sunrise/Guidebook",
      "_Scp/Guidebook",
      "_Scp/GuideBook",
    ],
    localeMirror: "es-ES",
    rootIds: [
      "NewPlayer",
      "SS14",
      "ScpResearch",
      "ScpGlossary",
      "ScpFear",
      "Scp173About",
      "Scp096About",
      "Scp082About",
      "Scp106About",
      "Scp457About",
      "Expeditions",
      "FireStationRuleset",
      "References",
    ],
    virtualRoot: {
      id: "ScpWiki",
      slug: "scp",
      title: "Wiki de Capibara SCP",
    },
    titleOverrides: {
      NewPlayer: "Primeros pasos",
      SS14: "Space Station 14",
      ScpResearch: "Investigación de la Fundación",
      ScpGlossary: "Glosario SCP",
      ScpFear: "Sistema de miedo",
      Expeditions: "Expediciones",
      FireStationRuleset: "Reglas del servidor",
      References: "Referencias",
    },
    fallbackToRawName: false,
    outputFile: resolve("src/data/scp-guides.ts"),
    lookupFile: resolve("src/data/scp-guide-lookup.ts"),
    exports: {
      tree: "scpGuideTree",
      pages: "scpGuidePages",
      slugs: "allScpGuideSlugs",
      idToSlug: "scpGuideIdToSlug",
      slugsToMeta: "scpGuideSlugsToMeta",
    },
  },
];

function renderGuideModule(source, collection) {
  const { exports } = source;
  return `// AUTO-GENERATED by scripts/generate-guides.mjs — DO NOT EDIT
// Run: npm run generate-guides

import type { GuidePage, GuideTreeNode } from "./guide-types";
export type { GuidePage, GuideTreeNode } from "./guide-types";

export const ${exports.tree}: GuideTreeNode = ${JSON.stringify(collection.tree, null, 2)};

const guidePagesArray: GuidePage[] = ${JSON.stringify(collection.pages, null, 2)};

export const ${exports.pages}: Record<string, GuidePage> = Object.fromEntries(
  guidePagesArray.map((guide) => [guide.slug, guide])
);

export const ${exports.slugs}: string[] = guidePagesArray.map((guide) => guide.slug);
`;
}

function renderLookupModule(source, pages) {
  const { exports } = source;
  const idToSlug = {};
  const slugsToMeta = {};

  for (const page of pages) {
    idToSlug[page.id] = page.slug;
    slugsToMeta[page.slug] = { title: page.title, slug: page.slug };
  }

  return `// AUTO-GENERATED by scripts/generate-guides.mjs — DO NOT EDIT
// Lightweight lookup maps for client components (no guide content)
// Run: npm run generate-guides

import type { GuideMeta } from "./guide-types";

export const ${exports.idToSlug}: Record<string, string> = ${JSON.stringify(idToSlug, null, 2)};

export const ${exports.slugsToMeta}: Record<string, GuideMeta> = ${JSON.stringify(slugsToMeta, null, 2)};
`;
}

function assertUniqueSlugs(label, pages) {
  const seen = new Map();
  for (const page of pages) {
    const previousId = seen.get(page.slug);
    if (previousId) {
      throw new Error(
        `${label} has duplicate slug '${page.slug}' for '${previousId}' and '${page.id}'`
      );
    }
    seen.set(page.slug, page.id);
  }
}

function generateSource(source) {
  const { resourcesRoot } = source;
  if (
    !existsSync(join(resourcesRoot, "Prototypes")) ||
    !existsSync(join(resourcesRoot, "ServerInfo"))
  ) {
    if (existsSync(source.outputFile) && existsSync(source.lookupFile)) {
      console.warn(
        `[guides] ${source.label} source not found at ${resourcesRoot}; keeping tracked generated files.`
      );
      return;
    }
    throw new Error(
      `${source.label} resources were not found at ${resourcesRoot}. Set the corresponding *_RESOURCES_ROOT variable.`
    );
  }

  const yamlDirectories = source.yamlDirectories
    ? source.yamlDirectories.map((directory) =>
        join(resourcesRoot, "Prototypes", directory)
      )
    : source.yamlNamespaces.map((namespace) =>
        namespace
          ? join(resourcesRoot, "Prototypes", namespace, "Guidebook")
          : join(resourcesRoot, "Prototypes", "Guidebook")
      );
  const entries = loadGuideEntries(yamlDirectories, {
    onWarning: (message) => console.warn(`[guides] ${source.label}: ${message}`),
  });
  const localizedNames = loadFluentMessages(
    join(resourcesRoot, "Locale", "es-ES")
  );
  const missingEntries = new Set();
  const localeFallbacks = new Set();
  const collection = buildGuideCollection({
    entries,
    rootIds: source.rootIds,
    virtualRoot: source.virtualRoot,
    readContent: createGuideContentReader(resourcesRoot, {
      pathAliases: source.pathAliases,
      localeMirror: source.localeMirror ?? null,
      onLocaleFallback: (path) => localeFallbacks.add(path),
    }),
    transformContent: (content, context) =>
      localizeGuideContent(content, {
        source: source.id,
        slug: context.slug,
      }),
    titleOverrides: source.titleOverrides,
    localizedNames,
    fallbackToRawName: source.fallbackToRawName,
    onMissingEntry: (id) => missingEntries.add(id),
  });

  assertUniqueSlugs(source.label, collection.pages);
  writeFileSync(source.outputFile, renderGuideModule(source, collection), "utf8");
  writeFileSync(
    source.lookupFile,
    renderLookupModule(source, collection.pages),
    "utf8"
  );

  console.log(
    `[guides] ${source.label}: ${entries.size} entries parsed, ${collection.pages.length} pages written.`
  );
  if (localeFallbacks.size > 0) {
    console.warn(
      `[guides] ${source.label}: ${localeFallbacks.size} pages fell back to untranslated content (no ${source.localeMirror} mirror).`
    );
  }
  if (missingEntries.size > 0) {
    console.warn(
      `[guides] ${source.label}: skipped missing child entries: ${[...missingEntries].sort().join(", ")}`
    );
  }
}

for (const source of sources) generateSource(source);
