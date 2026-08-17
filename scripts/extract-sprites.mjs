/**
 * Extract entity icon sprites for wiki GuideEntityEmbeds.
 * Parses entity prototypes to find sprite paths, then copies icon.png files.
 *
 * Usage:
 *   node scripts/extract-sprites.mjs --source estacion
 *   node scripts/extract-sprites.mjs --source monolith
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync, copyFileSync, rmSync } from "fs";
import { join, resolve } from "path";
import { parse as parseYaml } from "yaml";
import sharp from "sharp";
import { loadFluentMessages } from "./lib/guide-data.mjs";
import { localizeEntityLabel } from "./lib/guide-localization.mjs";
import {
  getPrototypeSpriteDefinition,
  selectThumbnailLayers,
} from "./lib/sprite-prototype.mjs";

const sourceIndex = process.argv.indexOf("--source");
const sourceName = sourceIndex >= 0 ? process.argv[sourceIndex + 1] : "estacion";
const SOURCE_CONFIGS = {
  estacion: {
    resourcesRoot: process.env.ESTACION_RESOURCES_ROOT || "../Estacion-Capibara/Resources",
    guidesFile: "src/data/guides.ts",
    outputDir: "public/sprites",
    mappingFile: "src/data/entity-sprites.ts",
    publicPath: "/sprites",
    exportName: "entitySprites",
    labelsExportName: "entitySpriteLabels",
    namespaceOrder: ["_Goobstation", "_Capibara"],
  },
  monolith: {
    resourcesRoot: process.env.MONOLITH_RESOURCES_ROOT || "../../forge-projects/Monolith-Capibara-ESP/Resources",
    guidesFile: "src/data/monolith-guides.ts",
    outputDir: "public/sprites/monolith",
    mappingFile: "src/data/monolith-entity-sprites.ts",
    publicPath: "/sprites/monolith",
    exportName: "monolithEntitySprites",
    labelsExportName: "monolithEntitySpriteLabels",
    namespaceOrder: ["_CE", "_DV", "_FarHorizons", "_Goobstation", "_NF", "_Mono", "_Capibara"],
  },
  marines: {
    resourcesRoot: process.env.MARINES_RESOURCES_ROOT || "../ColonialMarinesUniverse-ESP-Capibara/Resources",
    guidesFile: "src/data/marines-guides.ts",
    outputDir: "public/sprites/marines",
    mappingFile: "src/data/marines-entity-sprites.ts",
    publicPath: "/sprites/marines",
    exportName: "marinesEntitySprites",
    labelsExportName: "marinesEntitySpriteLabels",
    namespaceOrder: ["_SS14", "_AU14", "_RMC14", "_CMU14"],
  },
  scp: {
    resourcesRoot: process.env.SCP_RESOURCES_ROOT || "../project-fire-capibara-fundation/Resources",
    guidesFile: "src/data/scp-guides.ts",
    outputDir: "public/sprites/scp",
    mappingFile: "src/data/scp-entity-sprites.ts",
    publicPath: "/sprites/scp",
    exportName: "scpEntitySprites",
    labelsExportName: "scpEntitySpriteLabels",
    namespaceOrder: ["_Starlight", "_RMC14", "_FarHorizons", "_Fish", "_Afterlight", "_Sunrise", "_Scp"],
  },
};
const source = SOURCE_CONFIGS[sourceName];
if (!source) {
  throw new Error(
    `Unknown sprite source '${sourceName}'. Use one of: ${Object.keys(SOURCE_CONFIGS).join(", ")}.`
  );
}

const SERVER_ROOT = resolve(source.resourcesRoot);
const TEXTURES_ROOT = join(SERVER_ROOT, "Textures");
const OUTPUT_DIR = resolve(source.outputDir);
const MAPPING_FILE = resolve(source.mappingFile);
const localizedNames = loadFluentMessages(join(SERVER_ROOT, "Locale", "es-ES"));

// Step 1: Find all entity IDs used in guides
const guidesData = readFileSync(resolve(source.guidesFile), "utf-8");
const entityMatches = guidesData.matchAll(/Entity=\\"([^"\\]+)\\"/g);
const neededEntities = new Set();
for (const m of entityMatches) {
  neededEntities.add(m[1]);
}
console.log(`Need sprites for ${neededEntities.size} unique entities`);

// Step 2: Parse ALL entity prototype YAML files to build entity map
function walk(dir) {
  let files = [];
  if (!existsSync(dir)) return files;
  for (const e of readdirSync(dir).sort()) {
    const fp = join(dir, e);
    if (statSync(fp).isDirectory()) files.push(...walk(fp));
    else if (e.endsWith(".yml") || e.endsWith(".yaml")) files.push(fp);
  }
  return files;
}

// Map: entityId -> { parent, sprite, state }
const entities = new Map();

// Scan ALL prototype directories to find entity definitions
const protoDirs = [join(SERVER_ROOT, "Prototypes")];

for (const dir of protoDirs) {
  const yamlFiles = walk(dir).sort((left, right) => {
    const namespacePriority = (path) => {
      const normalized = path.replaceAll("\\", "/");
      const namespace = source.namespaceOrder.find((name) =>
        normalized.includes(`/Prototypes/${name}/`)
      );
      return namespace ? source.namespaceOrder.indexOf(namespace) + 1 : 0;
    };
    return namespacePriority(left) - namespacePriority(right) || left.localeCompare(right);
  });
  let parseFailures = 0;
  for (const file of yamlFiles) {
    let content;
    try {
      content = readFileSync(file, "utf-8");
    } catch {
      continue;
    }

    let docs;
    try {
      docs = parseYaml(content.replace(/^\uFEFF/, ""), { logLevel: "silent" });
    } catch {
      parseFailures++;
      continue;
    }

    if (!Array.isArray(docs)) continue;

    for (const doc of docs) {
      if (doc?.type !== "entity" || !doc.id) continue;

      entities.set(doc.id, getPrototypeSpriteDefinition(doc));
    }
  }
  if (parseFailures > 0) {
    console.warn(`Skipped ${parseFailures} prototype YAML files that could not be parsed`);
  }
}

console.log(`Parsed ${entities.size} entity prototypes`);

// Hardcoded fallback for entities whose sprite can't be resolved through parent chain
const FALLBACK_SPRITES = {
  MobMonkey: { sprite: "Mobs/Animals/monkey.rsi", state: "full", layers: null },
};

// Step 3: Resolve sprite path by following parent chain
function resolveSprite(entityId, visited = new Set()) {
  if (visited.has(entityId)) return null;
  visited.add(entityId);

  const entry = entities.get(entityId);
  if (!entry) return null;

  // If this entity has layers, collect them + resolve parent sprite path
  if (entry.layers && entry.layers.length > 0) {
    // Need the base sprite RSI path - either from this entry or parent
    let spritePath = entry.sprite;
    if (!spritePath) {
      const parents = Array.isArray(entry.parent) ? entry.parent : entry.parent ? [entry.parent] : [];
      for (const parent of parents) {
        const result = resolveSprite(parent, new Set(visited));
        if (result) { spritePath = result.sprite; break; }
      }
    }
    if (spritePath) {
      return { sprite: spritePath, state: entry.state, layers: entry.layers };
    }
    // If layers have their own sprite: fields, use the first one as base path
    const layerWithSprite = entry.layers.find(l => l.sprite);
    if (layerWithSprite) {
      return { sprite: layerWithSprite.sprite, state: entry.state, layers: entry.layers };
    }
  }

  if (entry.sprite) {
    return { sprite: entry.sprite, state: entry.state, layers: entry.layers };
  }

  // Try parent (can be a single string or array)
  const parents = Array.isArray(entry.parent) ? entry.parent : entry.parent ? [entry.parent] : [];
  for (const parent of parents) {
    const result = resolveSprite(parent, visited);
    if (result) {
      // Preserve child's state override (child always takes priority)
      if (entry.state) {
        result.state = entry.state;
      }
      return result;
    }
  }

  return null;
}

// Step 4: Find and copy/composite icon files
// estacion writes into public/sprites root (shared with the per-source
// subdirectories), so it must never be wiped wholesale.
if (sourceName !== "estacion") {
  rmSync(OUTPUT_DIR, { recursive: true, force: true });
}
mkdirSync(OUTPUT_DIR, { recursive: true });

const spriteMap = {};
const entityLabelMap = {};
let found = 0;
let notFound = 0;
let composited = 0;

// Resolve a sprite RSI path to an absolute directory
function resolveRsiDir(spritePath) {
  // Strip leading /Textures/ if present (some prototypes use absolute-style paths)
  const cleaned = spritePath.replace(/^\/Textures\//, "").replace(/^\//, "");
  return join(TEXTURES_ROOT, cleaned);
}

// Read meta.json to get sprite sheet size
function getMetaSize(rsiDir) {
  const metaPath = join(rsiDir, "meta.json");
  if (!existsSync(metaPath)) return { x: 32, y: 32 };
  try {
    const meta = JSON.parse(readFileSync(metaPath, "utf-8"));
    return meta.size || { x: 32, y: 32 };
  } catch {
    return { x: 32, y: 32 };
  }
}

// Get state info from meta.json (directions count)
function getStateDirections(rsiDir, stateName) {
  const metaPath = join(rsiDir, "meta.json");
  if (!existsSync(metaPath)) return 1;
  try {
    const meta = JSON.parse(readFileSync(metaPath, "utf-8"));
    const state = meta.states?.find(s => s.name === stateName);
    return state?.directions || 1;
  } catch {
    return 1;
  }
}

// Extract first frame from a potentially multi-direction sprite sheet
async function extractFirstFrame(pngPath, rsiDir, stateName) {
  const size = getMetaSize(rsiDir);
  const dirs = getStateDirections(rsiDir, stateName);
  if (dirs <= 1) {
    // Single direction - might still be larger than size (animations)
    const img = sharp(pngPath);
    const metadata = await img.metadata();
    if (metadata.width > size.x || metadata.height > size.y) {
      return img.extract({ left: 0, top: 0, width: size.x, height: size.y }).toBuffer();
    }
    return readFileSync(pngPath);
  }
  // Multi-direction: first frame is top-left corner (south-facing)
  return sharp(pngPath)
    .extract({ left: 0, top: 0, width: size.x, height: size.y })
    .toBuffer();
}

// Composite multiple layer PNGs into one
async function compositeLayers(rsiDir, layers) {
  const size = getMetaSize(rsiDir);
  const validLayers = [];

  for (const layer of selectThumbnailLayers(layers)) {
    const layerRsiDir = layer.sprite ? resolveRsiDir(layer.sprite) : rsiDir;
    const pngPath = join(layerRsiDir, `${layer.state}.png`);
    if (!existsSync(pngPath)) continue;
    try {
      const buf = await extractFirstFrame(pngPath, layerRsiDir, layer.state);
      // Resize to match base size if needed
      const resized = await sharp(buf).resize(size.x, size.y, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
      validLayers.push(resized);
    } catch {
      continue;
    }
  }

  if (validLayers.length === 0) return null;
  if (validLayers.length === 1) return validLayers[0];

  // Start with first layer as base, composite rest on top
  let result = sharp(validLayers[0]).ensureAlpha();
  const overlays = validLayers.slice(1).map(buf => ({ input: buf }));
  return result.composite(overlays).png().toBuffer();
}

for (const entityId of neededEntities) {
  const localizedLabel = localizeEntityLabel(
    localizedNames[`ent-${entityId}`] || "",
    entityId
  );
  if (localizedLabel && !/[{}]/.test(localizedLabel)) {
    entityLabelMap[entityId] = localizedLabel;
  }
  const resolved = resolveSprite(entityId) || FALLBACK_SPRITES[entityId] || null;
  if (!resolved) {
    notFound++;
    continue;
  }

  const rsiDir = resolveRsiDir(resolved.sprite);
  if (!existsSync(rsiDir)) {
    notFound++;
    continue;
  }

  const outName = `${entityId}.png`;
  const outPath = join(OUTPUT_DIR, outName);
  const hasLayers = resolved.layers && resolved.layers.length > 0;
  const iconPath = join(rsiDir, "icon.png");

  // Strategy:
  // 1. If icon.png exists, always use it (pre-composed thumbnail)
  // 2. If layers exist and no icon.png, composite them
  // 3. If specific state, use that state's png (extract first frame)
  // 4. Fallback to first available png

  if (existsSync(iconPath) && (!hasLayers || !resolved.layers.some(l => l.sprite))) {
    // icon.png is the pre-composed thumbnail - prefer it, but extract first frame if animated
    try {
      const buf = await extractFirstFrame(iconPath, rsiDir, "icon");
      writeFileSync(outPath, buf);
    } catch {
      copyFileSync(iconPath, outPath);
    }
  } else if (hasLayers) {
    // Composite layers
    try {
      const buf = await compositeLayers(rsiDir, resolved.layers);
      if (buf) {
        writeFileSync(outPath, buf);
        composited++;
      } else {
        // Fallback to icon.png or first png
        if (existsSync(iconPath)) {
          try {
            const buf2 = await extractFirstFrame(iconPath, rsiDir, "icon");
            writeFileSync(outPath, buf2);
          } catch { copyFileSync(iconPath, outPath); }
        } else {
          notFound++;
          continue;
        }
      }
    } catch {
      // Fallback
      if (existsSync(iconPath)) {
        try {
          const buf2 = await extractFirstFrame(iconPath, rsiDir, "icon");
          writeFileSync(outPath, buf2);
        } catch { copyFileSync(iconPath, outPath); }
      } else {
        notFound++;
        continue;
      }
    }
  } else {
    // No layers - use specific state or icon
    const state = resolved.state || "icon";
    let srcFile = join(rsiDir, `${state}.png`);
    if (!existsSync(srcFile)) srcFile = iconPath;
    if (!existsSync(srcFile)) {
      const pngs = readdirSync(rsiDir).filter(f => f.endsWith(".png"));
      if (pngs.length > 0) {
        srcFile = join(rsiDir, pngs[0]);
      } else {
        notFound++;
        continue;
      }
    }
    // Extract first frame if multi-direction
    try {
      const buf = await extractFirstFrame(srcFile, rsiDir, state);
      writeFileSync(outPath, buf);
    } catch {
      copyFileSync(srcFile, outPath);
    }
  }

  spriteMap[entityId] = `${source.publicPath}/${outName}`;
  found++;
}

console.log(`Found sprites: ${found} (${composited} composited), Missing: ${notFound}`);

// Step 5: Write TypeScript mapping file
const tsContent = `// AUTO-GENERATED by scripts/extract-sprites.mjs — DO NOT EDIT
// Maps entity IDs to their sprite image paths

export const ${source.exportName}: Record<string, string> = ${JSON.stringify(spriteMap, null, 2)};

export const ${source.labelsExportName}: Record<string, string> = ${JSON.stringify(entityLabelMap, null, 2)};
`;

writeFileSync(MAPPING_FILE, tsContent, "utf-8");
console.log(`Written mapping to ${MAPPING_FILE}`);
console.log(`Sprite images in ${OUTPUT_DIR}`);
