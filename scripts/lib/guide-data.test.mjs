import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  buildGuideCollection,
  createGuideContentReader,
  loadFluentMessages,
  loadGuideEntries,
} from "./guide-data.mjs";

test("builds an ordered synthetic wiki from multiple guide roots", () => {
  const entries = new Map([
    [
      "NF14",
      {
        id: "NF14",
        name: "guide-entry-nf14",
        text: "/ServerInfo/NF14.xml",
        children: ["Bank"],
      },
    ],
    [
      "Bank",
      {
        id: "Bank",
        name: "guide-entry-bank",
        text: "/ServerInfo/Bank.xml",
        children: [],
      },
    ],
    [
      "Factions",
      {
        id: "Factions",
        name: "Factions",
        text: "/ServerInfo/Factions.xml",
        children: [],
      },
    ],
  ]);

  const contentByPath = new Map([
    ["/ServerInfo/NF14.xml", "# El Monolith llama\nBienvenido al sector."],
    ["/ServerInfo/Bank.xml", "# Banco Galáctico\nTus créditos persisten."],
    ["/ServerInfo/Factions.xml", "# Facciones\nOrganizaciones del sector."],
  ]);

  const collection = buildGuideCollection({
    entries,
    rootIds: ["NF14", "Factions"],
    virtualRoot: {
      id: "MonolithWiki",
      slug: "monolith",
      title: "Wiki de Monolith Capibara",
    },
    readContent: (textPath) => contentByPath.get(textPath) ?? "",
  });

  assert.equal(collection.tree.id, "MonolithWiki");
  assert.deepEqual(
    collection.tree.children.map((child) => child.slug),
    ["nf14", "factions"]
  );
  assert.equal(collection.pages.length, 3);

  const bank = collection.pages.find((guide) => guide.id === "Bank");
  assert.deepEqual(bank?.breadcrumb, [
    { slug: "nf14", title: "El Monolith llama" },
    { slug: "bank", title: "Banco Galáctico" },
  ]);
  assert.equal(bank?.parentSlug, "nf14");
});

test("later guide directories override base guide entries", () => {
  const fixtureRoot = mkdtempSync(join(tmpdir(), "guide-data-"));
  const baseDir = join(fixtureRoot, "base");
  const translatedDir = join(fixtureRoot, "translated");
  mkdirSync(baseDir);
  mkdirSync(translatedDir);

  writeFileSync(
    join(baseDir, "guide.yml"),
    "- type: guideEntry\n  id: Root\n  name: Base title\n",
    "utf8"
  );
  writeFileSync(
    join(translatedDir, "guide.yml"),
    "- type: guideEntry\n  id: Root\n  name: Título traducido\n",
    "utf8"
  );

  try {
    const entries = loadGuideEntries([baseDir, translatedDir]);
    assert.equal(entries.get("Root")?.name, "Título traducido");
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("loads translated guide titles from nested Fluent files", () => {
  const fixtureRoot = mkdtempSync(join(tmpdir(), "guide-locale-"));
  const nestedDir = join(fixtureRoot, "_Capibara");
  mkdirSync(nestedDir);
  writeFileSync(
    join(nestedDir, "guide-entries.ftl"),
    "# translated titles\nguide-entry-nf14 = Frontera Monolith\nFactions = Facciones\n",
    "utf8"
  );

  try {
    assert.deepEqual(loadFluentMessages(fixtureRoot), {
      "guide-entry-nf14": "Frontera Monolith",
      Factions: "Facciones",
    });
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("reads guide XML without SPDX comments or the Document wrapper", () => {
  const fixtureRoot = mkdtempSync(join(tmpdir(), "guide-content-"));
  const serverInfoDir = join(fixtureRoot, "ServerInfo", "Guidebook");
  mkdirSync(serverInfoDir, { recursive: true });
  writeFileSync(
    join(serverInfoDir, "Intro.xml"),
    "<!-- SPDX-License-Identifier: MIT -->\n<Document Version=\"1\">\n# Introducción\n</Document>\n",
    "utf8"
  );

  try {
    const readContent = createGuideContentReader(fixtureRoot);
    assert.equal(
      readContent("/ServerInfo/Guidebook/Intro.xml"),
      "# Introducción"
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("skips a missing child entry while reporting the broken reference", () => {
  const missing = [];
  const collection = buildGuideCollection({
    entries: new Map([
      [
        "Root",
        {
          id: "Root",
          name: "Root",
          text: "",
          children: ["MissingChild"],
        },
      ],
    ]),
    rootIds: ["Root"],
    readContent: () => "# Root",
    onMissingEntry: (id) => missing.push(id),
  });

  assert.deepEqual(missing, ["MissingChild"]);
  assert.equal(collection.pages.length, 1);
});

test("loads guide YAML files that start with a UTF-8 BOM", () => {
  const fixtureRoot = mkdtempSync(join(tmpdir(), "guide-bom-"));
  writeFileSync(
    join(fixtureRoot, "guide.yml"),
    "\uFEFF- type: guideEntry\n  id: Root\n  name: Inicio\n",
    "utf8"
  );

  try {
    const entries = loadGuideEntries([fixtureRoot]);
    assert.equal(entries.get("Root")?.name, "Inicio");
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

test("supports explicit aliases for source guide paths with incorrect casing", () => {
  const fixtureRoot = mkdtempSync(join(tmpdir(), "guide-alias-"));
  const contentDirectory = join(fixtureRoot, "ServerInfo", "Guidebook");
  mkdirSync(contentDirectory, { recursive: true });
  writeFileSync(
    join(contentDirectory, "actual.xml"),
    "<Document># Contenido correcto</Document>",
    "utf8"
  );

  try {
    const readContent = createGuideContentReader(fixtureRoot, {
      pathAliases: {
        "ServerInfo/Guidebook/Wrong.xml":
          "ServerInfo/Guidebook/actual.xml",
      },
    });
    assert.equal(
      readContent("/ServerInfo/Guidebook/Wrong.xml"),
      "# Contenido correcto"
    );
  } finally {
    rmSync(fixtureRoot, { recursive: true, force: true });
  }
});
