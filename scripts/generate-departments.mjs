/**
 * Build-time department/job extractor for the non-Estación servers.
 * Walks each repo's Prototypes tree for `type: department` and `type: job`
 * documents and localizes names via the repo's es-ES Fluent files.
 *
 * Usage: node scripts/generate-departments.mjs
 * Optional roots: MARINES_RESOURCES_ROOT, SCP_RESOURCES_ROOT, MONOLITH_RESOURCES_ROOT
 */

import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { parse as parseYaml } from "yaml";

import { loadFluentMessages } from "./lib/guide-data.mjs";

function findResourcesRoot(environmentVariable, candidates) {
  const explicit = process.env[environmentVariable];
  const paths = explicit ? [explicit] : candidates;
  const resolvedPaths = paths.map((path) => resolve(path));
  return (
    resolvedPaths.find((path) => existsSync(join(path, "Prototypes"))) ??
    resolvedPaths[0]
  );
}

const sources = [
  {
    id: "marines",
    label: "Capibara Marines",
    resourcesRoot: findResourcesRoot("MARINES_RESOURCES_ROOT", [
      "../ColonialMarinesUniverse-ESP-Capibara/Resources",
    ]),
    namespaceOrder: ["_SS14", "_AU14", "_RMC14", "_CMU14"],
    outputFile: resolve("src/data/marines-departments.ts"),
    exportName: "marinesGeneratedDepartments",
  },
  {
    id: "scp",
    label: "Capibara SCP",
    resourcesRoot: findResourcesRoot("SCP_RESOURCES_ROOT", [
      "../project-fire-capibara-fundation/Resources",
    ]),
    namespaceOrder: ["_Sunrise", "_Scp"],
    outputFile: resolve("src/data/scp-departments.ts"),
    exportName: "scpGeneratedDepartments",
  },
  {
    id: "monolith",
    label: "Monolith Capibara",
    resourcesRoot: findResourcesRoot("MONOLITH_RESOURCES_ROOT", [
      "../../forge-projects/Monolith-Capibara-ESP/Resources",
      "../Monolith-Capibara-ESP/Resources",
    ]),
    namespaceOrder: ["_CE", "_DV", "_FarHorizons", "_Goobstation", "_NF", "_Mono", "_Capibara"],
    outputFile: resolve("src/data/monolith-departments.ts"),
    exportName: "monolithGeneratedDepartments",
  },
];

function walk(directory) {
  if (!existsSync(directory)) return [];
  const files = [];
  for (const entry of readdirSync(directory).sort()) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else if (entry.endsWith(".yml") || entry.endsWith(".yaml")) files.push(path);
  }
  return files;
}

function looksLikeLocKey(value) {
  return /^[a-z0-9._-]+$/.test(value);
}

function humanize(id) {
  return id
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .trim();
}

function localizeName(rawName, fallbackId, messages) {
  if (rawName && messages[rawName]) return messages[rawName];
  if (rawName && !looksLikeLocKey(rawName)) return rawName;
  return humanize(fallbackId);
}

function generateSource(source) {
  const { resourcesRoot } = source;
  if (!existsSync(join(resourcesRoot, "Prototypes"))) {
    if (existsSync(source.outputFile)) {
      console.warn(
        `[departments] ${source.label} source not found at ${resourcesRoot}; keeping tracked generated file.`
      );
      return;
    }
    throw new Error(
      `${source.label} resources were not found at ${resourcesRoot}. Set the corresponding *_RESOURCES_ROOT variable.`
    );
  }

  const messages = loadFluentMessages(join(resourcesRoot, "Locale", "es-ES"));

  // Sort files so fork namespaces later in namespaceOrder override earlier
  // definitions of the same prototype id (base content has priority 0).
  const namespacePriority = (path) => {
    const normalized = path.replaceAll("\\", "/");
    const namespace = source.namespaceOrder.find((name) =>
      normalized.includes(`/Prototypes/${name}/`)
    );
    return namespace ? source.namespaceOrder.indexOf(namespace) + 1 : 0;
  };
  const files = walk(join(resourcesRoot, "Prototypes")).sort(
    (left, right) =>
      namespacePriority(left) - namespacePriority(right) ||
      left.localeCompare(right)
  );

  const departments = new Map();
  const jobs = new Map();
  let parseFailures = 0;

  for (const file of files) {
    let documents;
    try {
      documents = parseYaml(readFileSync(file, "utf8").replace(/^﻿/, ""), {
        logLevel: "silent",
      });
    } catch {
      parseFailures++;
      continue;
    }
    if (!Array.isArray(documents)) continue;

    for (const document of documents) {
      if (!document?.id) continue;
      if (document.type === "department") {
        departments.set(document.id, {
          id: document.id,
          name: document.name || "",
          description: document.description || "",
          color: document.color || "#888888",
          roles: Array.isArray(document.roles) ? document.roles : [],
        });
      } else if (document.type === "job") {
        jobs.set(document.id, { id: document.id, name: document.name || "" });
      }
    }
  }

  const output = [...departments.values()].map((department) => ({
    id: department.id,
    name: localizeName(department.name, department.id, messages),
    description: department.description
      ? (messages[department.description] ?? "")
      : "",
    color: department.color,
    jobs: department.roles
      .filter((roleId) => jobs.has(roleId))
      .map((roleId) => {
        const job = jobs.get(roleId);
        return { id: job.id, name: localizeName(job.name, job.id, messages) };
      }),
  }));

  const moduleSource = `// AUTO-GENERATED by scripts/generate-departments.mjs — DO NOT EDIT
// Run: npm run generate-departments

import type { GeneratedDepartment } from "./department-types";

export const ${source.exportName}: GeneratedDepartment[] = ${JSON.stringify(output, null, 2)};
`;

  writeFileSync(source.outputFile, moduleSource, "utf8");
  console.log(
    `[departments] ${source.label}: ${output.length} departments, ${jobs.size} jobs parsed${parseFailures ? `, ${parseFailures} YAML files skipped` : ""}.`
  );
}

for (const source of sources) generateSource(source);
