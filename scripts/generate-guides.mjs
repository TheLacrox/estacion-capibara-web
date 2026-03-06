/**
 * Build-time script: parses guidebook YAML (hierarchy) + XML (content)
 * and generates src/data/guides.ts with the full guide tree.
 *
 * Usage: node scripts/generate-guides.mjs
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";
import { parse as parseYaml } from "yaml";

const SERVER_ROOT = resolve("../Estacion-Capibara/Resources");
const OUTPUT_FILE = resolve("src/data/guides.ts");

// Directories containing guidebook YAML prototypes
const YAML_DIRS = [
  join(SERVER_ROOT, "Prototypes/Guidebook"),
  join(SERVER_ROOT, "Prototypes/_Capibara/Guidebook"),
  join(SERVER_ROOT, "Prototypes/_Goobstation/Guidebook"),
];

// Base directory for XML content files
const SERVERINFO_ROOT = join(SERVER_ROOT, "ServerInfo");

// ─── Step 1: Parse all YAML files ───

/** @type {Map<string, {id: string, name: string, text: string, children: string[]}>} */
const entries = new Map();

for (const dir of YAML_DIRS) {
  if (!existsSync(dir)) {
    console.warn(`YAML dir not found: ${dir}`);
    continue;
  }

  const files = readdirSync(dir).filter((f) => f.endsWith(".yml"));
  for (const file of files) {
    const content = readFileSync(join(dir, file), "utf-8");
    const docs = parseYaml(content);
    if (!Array.isArray(docs)) continue;

    for (const doc of docs) {
      if (doc?.type !== "guideEntry" || !doc.id) continue;
      // Later entries override earlier ones (Goob/Capibara can override base)
      entries.set(doc.id, {
        id: doc.id,
        name: doc.name || doc.id,
        text: doc.text || "",
        children: doc.children || [],
      });
    }
  }
}

console.log(`Parsed ${entries.size} guide entries from YAML`);

// ─── Step 2: Read XML content for each entry ───

function readXmlContent(textPath) {
  if (!textPath) return "";
  // textPath starts with /ServerInfo/...
  const fullPath = join(SERVERINFO_ROOT, textPath.replace(/^\/ServerInfo\//, ""));
  if (!existsSync(fullPath)) {
    console.warn(`XML not found: ${fullPath}`);
    return "";
  }
  const raw = readFileSync(fullPath, "utf-8");
  // Strip SPDX comments and <Document> wrapper
  const stripped = raw
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/?Document>/g, "")
    .trim();
  return stripped;
}

// ─── Step 3: Build tree structure ───

function slugify(id) {
  // Convert CamelCase/PascalCase to kebab-case
  return id
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Derive a readable display name from the guide ID
function displayName(entry) {
  // The `name` field is a localization key like "guide-entry-engineering", not useful
  // We'll derive the name from the ID
  const id = entry.id;
  // Add spaces before capitals, handle acronyms
  return id
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/^Capibara\s?/, "")
    .trim();
}

// Spanish title overrides for guides that lack a clear heading
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

// Extract title from XML content (first # or ## heading)
function extractTitle(content, id) {
  // Check overrides first
  if (TITLE_OVERRIDES[id]) return TITLE_OVERRIDES[id];
  // Strip \r for Windows line endings
  const clean = content.replace(/\r/g, "");
  // Try # heading (with or without space after #)
  const h1 = clean.match(/^#{1}\s*([^#\n].+)$/m);
  if (h1) return h1[1].trim();
  // Try ## heading as fallback
  const h2 = clean.match(/^#{2}\s+(.+)$/m);
  if (h2) return h2[1].trim();
  return null;
}

function buildNode(id, visited = new Set()) {
  if (visited.has(id)) return null;
  visited.add(id);

  const entry = entries.get(id);
  if (!entry) return null;

  const content = readXmlContent(entry.text);
  const slug = slugify(id);
  const title = extractTitle(content, id) || displayName(entry);

  const children = [];
  for (const childId of entry.children) {
    const childNode = buildNode(childId, visited);
    if (childNode) children.push(childNode);
  }

  return { id, slug, title, content, children };
}

// The root entry is "SS14"
const rootEntry = entries.get("SS14");
if (!rootEntry) {
  console.error("Root entry 'SS14' not found!");
  process.exit(1);
}

const tree = buildNode("SS14");

// ─── Step 4: Build flat index for quick lookup ───

function collectAll(node, parent = null, path = []) {
  const items = [];
  const currentPath = [...path, { slug: node.slug, title: node.title }];
  items.push({
    id: node.id,
    slug: node.slug,
    title: node.title,
    content: node.content,
    parentSlug: parent?.slug || null,
    breadcrumb: currentPath,
    childSlugs: node.children.map((c) => c.slug),
  });
  for (const child of node.children) {
    items.push(...collectAll(child, node, currentPath));
  }
  return items;
}

const allGuides = collectAll(tree);
console.log(`Generated ${allGuides.length} guide pages`);

// ─── Step 5: Write TypeScript file ───

// Build the tree structure (without content, for sidebar)
function buildTreeData(node) {
  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    children: node.children.map(buildTreeData),
  };
}

const treeData = buildTreeData(tree);

const output = `// AUTO-GENERATED by scripts/generate-guides.mjs — DO NOT EDIT
// Run: node scripts/generate-guides.mjs

export interface GuideTreeNode {
  id: string;
  slug: string;
  title: string;
  children: GuideTreeNode[];
}

export interface GuidePage {
  id: string;
  slug: string;
  title: string;
  content: string;
  parentSlug: string | null;
  breadcrumb: { slug: string; title: string }[];
  childSlugs: string[];
}

export const guideTree: GuideTreeNode = ${JSON.stringify(treeData, null, 2)};

const guidePagesArray: GuidePage[] = ${JSON.stringify(allGuides, null, 2)};

// Indexed by slug for O(1) lookup
export const guidePages: Record<string, GuidePage> = Object.fromEntries(
  guidePagesArray.map((g) => [g.slug, g])
);

// All slugs for generateStaticParams
export const allGuideSlugs: string[] = guidePagesArray.map((g) => g.slug);
`;

writeFileSync(OUTPUT_FILE, output, "utf-8");
console.log(`Written to ${OUTPUT_FILE}`);
