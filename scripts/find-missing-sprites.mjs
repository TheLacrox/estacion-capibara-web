/**
 * Diagnostic: find which entity sprites are missing and why.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";
import { parse as parseYaml } from "yaml";

const SERVER_ROOT = resolve("../Estacion-Capibara/Resources");
const TEXTURES_ROOT = join(SERVER_ROOT, "Textures");
const SPRITES_DIR = resolve("public/sprites");

// Get all entity IDs used in guides
const guidesData = readFileSync(resolve("src/data/guides.ts"), "utf-8");
const entityMatches = guidesData.matchAll(/Entity=\\"([^"\\]+)\\"/g);
const neededEntities = new Set();
for (const m of entityMatches) neededEntities.add(m[1]);

// Find which ones are missing
const missing = [];
for (const id of neededEntities) {
  const spritePath = join(SPRITES_DIR, `${id}.png`);
  if (!existsSync(spritePath)) {
    missing.push(id);
  }
}

console.log(`Total entities: ${neededEntities.size}, Missing sprites: ${missing.length}\n`);

// Parse entity prototypes to understand why
function walk(dir) {
  let files = [];
  if (!existsSync(dir)) return files;
  for (const e of readdirSync(dir)) {
    const fp = join(dir, e);
    if (statSync(fp).isDirectory()) files.push(...walk(fp));
    else if (e.endsWith(".yml") || e.endsWith(".yaml")) files.push(fp);
  }
  return files;
}

const entities = new Map();
const protoDirs = [
  join(SERVER_ROOT, "Prototypes/Entities"),
  join(SERVER_ROOT, "Prototypes/_Capibara"),
  join(SERVER_ROOT, "Prototypes/_Goobstation"),
  join(SERVER_ROOT, "Prototypes/_DV"),
  join(SERVER_ROOT, "Prototypes/_EinsteinEngines"),
  join(SERVER_ROOT, "Prototypes/_Shitmed"),
  join(SERVER_ROOT, "Prototypes/_Imp"),
  join(SERVER_ROOT, "Prototypes/_Impstation"),
  join(SERVER_ROOT, "Prototypes/_Harmony"),
  join(SERVER_ROOT, "Prototypes/_NF"),
  join(SERVER_ROOT, "Prototypes"),
];

for (const dir of protoDirs) {
  const yamlFiles = walk(dir);
  for (const file of yamlFiles) {
    let content;
    try { content = readFileSync(file, "utf-8"); } catch { continue; }
    let docs;
    try { docs = parseYaml(content); } catch { continue; }
    if (!Array.isArray(docs)) continue;
    for (const doc of docs) {
      if (doc?.type !== "entity" || !doc.id) continue;
      const entry = { parent: doc.parent || null, sprite: null, state: null, layers: null, file };
      if (Array.isArray(doc.components)) {
        for (const comp of doc.components) {
          if (comp?.type === "Sprite") {
            if (comp.sprite) entry.sprite = comp.sprite;
            if (comp.state) entry.state = comp.state;
            if (Array.isArray(comp.layers)) {
              entry.layers = comp.layers.map(l => ({ state: l.state || null, sprite: l.sprite || null })).filter(l => l.state);
            }
            break;
          }
        }
      }
      entities.set(doc.id, entry);
    }
  }
}

function resolveSprite(entityId, depth = 0, visited = new Set()) {
  if (visited.has(entityId) || depth > 10) return { found: false, reason: "circular/depth" };
  visited.add(entityId);
  const entry = entities.get(entityId);
  if (!entry) return { found: false, reason: `entity "${entityId}" not found in prototypes` };

  if (entry.sprite) {
    const rsiDir = join(TEXTURES_ROOT, entry.sprite);
    if (!existsSync(rsiDir)) return { found: false, reason: `RSI dir missing: ${entry.sprite}`, file: entry.file };
    return { found: true, sprite: entry.sprite };
  }
  if (entry.layers && entry.layers.length > 0) {
    // Need parent sprite path
    const parents = Array.isArray(entry.parent) ? entry.parent : entry.parent ? [entry.parent] : [];
    for (const p of parents) {
      const result = resolveSprite(p, depth + 1, new Set(visited));
      if (result.found) return result;
    }
    return { found: false, reason: `has layers but no sprite path resolved from parents: ${JSON.stringify(entry.parent)}`, file: entry.file };
  }

  const parents = Array.isArray(entry.parent) ? entry.parent : entry.parent ? [entry.parent] : [];
  if (parents.length === 0) return { found: false, reason: "no sprite, no layers, no parent", file: entry.file };

  for (const p of parents) {
    const result = resolveSprite(p, depth + 1, visited);
    if (result.found) return result;
  }
  return { found: false, reason: `parents exhausted: ${JSON.stringify(entry.parent)}`, file: entry.file };
}

// Report
for (const id of missing.sort()) {
  const result = resolveSprite(id);
  const inProto = entities.has(id);
  console.log(`  ${id}:`);
  if (!inProto) {
    console.log(`    NOT in prototypes at all`);
  } else {
    console.log(`    ${result.reason}`);
    if (result.file) console.log(`    Defined in: ${result.file}`);
  }
}
