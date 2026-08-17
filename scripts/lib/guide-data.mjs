import { existsSync, readFileSync, readdirSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";

/**
 * Resolves a path under `root` tolerating case mismatches in any segment
 * (e.g. `_Scp/GuideBook` vs `_Scp/Guidebook`). Case-insensitive filesystems
 * hit the existsSync fast path; on Linux the segment walk kicks in.
 * Returns the resolved absolute path or null.
 */
export function resolvePathCaseInsensitive(root, relativePath) {
  const direct = join(root, relativePath);
  if (existsSync(direct)) return direct;

  let current = root;
  for (const segment of relativePath.split(/[/\\]/).filter(Boolean)) {
    const next = join(current, segment);
    if (existsSync(next)) {
      current = next;
      continue;
    }
    if (!existsSync(current)) return null;
    const match = readdirSync(current).find(
      (name) => name.toLowerCase() === segment.toLowerCase()
    );
    if (!match) return null;
    current = join(current, match);
  }
  return current;
}

export function loadGuideEntries(yamlDirectories, options = {}) {
  const { onWarning = console.warn } = options;
  const entries = new Map();
  const seenDirectories = new Set();

  for (const directory of yamlDirectories) {
    if (!existsSync(directory)) continue;

    // Candidate lists may contain casing variants of the same directory;
    // canonicalize so case-insensitive filesystems don't parse files twice.
    let canonical;
    try {
      canonical = realpathSync.native(directory);
    } catch {
      canonical = directory;
    }
    if (seenDirectories.has(canonical)) continue;
    seenDirectories.add(canonical);

    const files = readdirSync(directory)
      .filter((name) => name.endsWith(".yml") || name.endsWith(".yaml"))
      .sort();

    for (const file of files) {
      let documents;
      try {
        const yaml = readFileSync(join(directory, file), "utf8").replace(
          /^\uFEFF/,
          ""
        );
        documents = parseYaml(yaml);
      } catch (error) {
        onWarning(
          `Failed to parse guide YAML ${join(directory, file)}: ${error.message}`
        );
        continue;
      }
      if (!Array.isArray(documents)) continue;

      for (const document of documents) {
        if (document?.type !== "guideEntry" || !document.id) continue;
        if (document.abstract === true) continue;
        entries.set(document.id, {
          id: document.id,
          name: document.name || document.id,
          text: document.text || "",
          children: document.children || [],
        });
      }
    }
  }

  return entries;
}

export function loadFluentMessages(localeRoot) {
  const messages = {};

  function collect(directory) {
    if (!existsSync(directory)) return [];

    return readdirSync(directory, { withFileTypes: true })
      .sort((left, right) => left.name.localeCompare(right.name))
      .flatMap((entry) => {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) return collect(path);
        return entry.name.endsWith(".ftl") ? [path] : [];
      });
  }

  const files = collect(localeRoot).sort((left, right) => {
    const leftCustom = left.includes("_Capibara") ? 1 : 0;
    const rightCustom = right.includes("_Capibara") ? 1 : 0;
    return leftCustom - rightCustom || left.localeCompare(right);
  });

  for (const file of files) {
    const lines = readFileSync(file, "utf8").replace(/\r/g, "").split("\n");
    for (const line of lines) {
      const match = line.match(/^([A-Za-z0-9_-]+)\s*=\s*(.+?)\s*$/);
      if (match) messages[match[1]] = match[2];
    }
  }

  return messages;
}

export function createGuideContentReader(resourcesRoot, options = {}) {
  const normalizedOptions =
    typeof options === "function" ? { onMissing: options } : options;
  const {
    onMissing = console.warn,
    pathAliases = {},
    localeMirror = null,
    onLocaleFallback = () => {},
  } = normalizedOptions;
  const serverInfoRoot = join(resourcesRoot, "ServerInfo");

  return function readGuideContent(textPath) {
    if (!textPath) return "";

    const requestedPath = textPath.replace(/^\/+/, "");
    const aliasedPath = pathAliases[requestedPath] ?? requestedPath;
    const relativePath = aliasedPath.replace(
      /^[/\\]?ServerInfo[/\\]/,
      ""
    );

    // Forks like RMC14/Fire Station keep translations in a parallel
    // ServerInfo/<locale>/ tree instead of translating XML in place.
    let fullPath = null;
    if (localeMirror) {
      fullPath = resolvePathCaseInsensitive(
        serverInfoRoot,
        join(localeMirror, relativePath)
      );
      if (!fullPath) {
        fullPath = resolvePathCaseInsensitive(serverInfoRoot, relativePath);
        if (fullPath) onLocaleFallback(relativePath);
      }
    } else {
      fullPath = resolvePathCaseInsensitive(serverInfoRoot, relativePath);
    }

    if (!fullPath) {
      onMissing(`Guide XML not found: ${join(serverInfoRoot, relativePath)}`);
      return "";
    }

    return readFileSync(fullPath, "utf8")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<\/?Document\b[^>]*>/g, "")
      .trim();
  };
}

export function slugify(id) {
  return id
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function extractTitle(content) {
  const clean = content.replace(/\r/g, "");
  const h1 = clean.match(/^#{1}\s*([^#\n].+)$/m);
  if (h1) return h1[1].trim();

  const h2 = clean.match(/^#{2}\s+(.+)$/m);
  return h2?.[1].trim() ?? null;
}

function deriveDisplayName(id) {
  return id
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/^Capibara\s?/, "")
    .trim();
}

function resolveTitle(
  entry,
  content,
  titleOverrides,
  localizedNames,
  fallbackToRawName
) {
  if (titleOverrides[entry.id]) return titleOverrides[entry.id];

  const contentTitle = extractTitle(content);
  if (contentTitle) return contentTitle;

  const localizedName = localizedNames[entry.name];
  if (localizedName) return localizedName;

  if (
    fallbackToRawName &&
    entry.name &&
    !/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(entry.name)
  ) {
    return entry.name;
  }

  return deriveDisplayName(entry.id);
}

export function buildGuideCollection({
  entries,
  rootIds,
  virtualRoot = null,
  readContent,
  transformContent = (content) => content,
  titleOverrides = {},
  localizedNames = {},
  fallbackToRawName = true,
  onMissingEntry = () => {},
}) {
  const visited = new Set();

  function buildNode(id) {
    if (visited.has(id)) return null;

    const entry = entries.get(id);
    if (!entry) {
      onMissingEntry(id);
      return null;
    }

    visited.add(id);
    const slug = slugify(id);
    const content = transformContent(readContent(entry.text || ""), {
      id: entry.id,
      slug,
      textPath: entry.text || "",
    });
    const children = (entry.children || [])
      .map(buildNode)
      .filter(Boolean);

    return {
      id,
      slug,
      title: resolveTitle(
        entry,
        content,
        titleOverrides,
        localizedNames,
        fallbackToRawName
      ),
      content,
      children,
    };
  }

  for (const rootId of rootIds) {
    if (!entries.has(rootId)) {
      throw new Error(`Guide root '${rootId}' was not found`);
    }
  }

  const roots = rootIds.map((id) => buildNode(id)).filter(Boolean);
  const tree = virtualRoot
    ? {
        id: virtualRoot.id,
        slug: virtualRoot.slug,
        title: virtualRoot.title,
        children: roots,
      }
    : roots[0];

  if (!tree) {
    throw new Error("At least one guide root is required");
  }

  const pages = [];

  function collect(node, parent = null, path = []) {
    const breadcrumb = [...path, { slug: node.slug, title: node.title }];
    pages.push({
      id: node.id,
      slug: node.slug,
      title: node.title,
      content: node.content,
      parentSlug: parent?.slug || null,
      breadcrumb,
      childSlugs: node.children.map((child) => child.slug),
    });

    for (const child of node.children) {
      collect(child, node, breadcrumb);
    }
  }

  if (virtualRoot) {
    for (const root of roots) collect(root);
  } else {
    collect(tree);
  }

  return {
    tree: toTreeData(tree),
    pages,
  };
}

function toTreeData(node) {
  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    children: node.children.map(toTreeData),
  };
}
