import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import {
  consumeBoxBlock,
  consumeColorBoxBlock,
  getGuideEntityLabel,
  getGuideEmbedLabel,
  getGuideMedicalGroupLabel,
  getGuideProtoDataLabel,
  getGuideKeybindLabel,
  hasGuideKeybindLabel,
  parseGuideInline,
  splitGuideBlockLines,
} from "../../src/lib/guide-markup-parser.mjs";

function walk(nodes) {
  return nodes.flatMap((node) => [node, ...(node.children ? walk(node.children) : [])]);
}

function visibleText(nodes) {
  return walk(nodes)
    .filter((node) => node.type === "text")
    .map((node) => node.value)
    .join("");
}

function loadGeneratedGuides(fileName) {
  const source = readFileSync(
    new URL(`../../src/data/${fileName}`, import.meta.url),
    "utf8"
  );
  const marker = "const guidePagesArray: GuidePage[] = ";
  const start = source.indexOf(marker) + marker.length;
  const end = source.indexOf("\n];", start) + 2;
  return JSON.parse(source.slice(start, end));
}

test("parses self-closing keybinds inside nested formatting", () => {
  const nodes = parseGuideInline(
    'Pulsa [color=yellow][bold][keybind="OpenAHelp"/][/bold][/color].'
  );
  const flat = walk(nodes);

  assert.equal(flat.find((node) => node.type === "keybind")?.value, "OpenAHelp");
  assert.equal(visibleText(nodes), "Pulsa .");
  assert.equal(visibleText(nodes).includes("[keybind"), false);
});

test("uses the authoritative Spanish labels for guide keybinds", () => {
  assert.equal(getGuideKeybindLabel("SwapHands"), "Intercambiar manos (siguiente)");
  assert.equal(getGuideKeybindLabel("OpenAHelp"), "Abrir ayuda de administración");
  assert.equal(getGuideKeybindLabel("Use"), "Usar");
  assert.equal(getGuideKeybindLabel("UIRightClick"), "Abrir menú contextual");
});

test("defines a Spanish label for every keybind used by either generated wiki", () => {
  const missing = new Set();
  for (const fileName of ["guides.ts", "monolith-guides.ts"]) {
    for (const guide of loadGeneratedGuides(fileName)) {
      for (const node of walk(parseGuideInline(guide.content))) {
        if (node.type === "keybind" && !hasGuideKeybindLabel(node.value)) {
          missing.add(node.value);
        }
      }
    }
  }

  assert.deepEqual([...missing].sort(), []);
});

test("parses self-closing text links", () => {
  const nodes = parseGuideInline('[textlink="aquí" link="SS14"/]');
  assert.deepEqual(nodes, [{ type: "textlink", label: "aquí", linkId: "SS14" }]);
});

test("repairs crossed and unclosed formatting without exposing markup", () => {
  const nodes = parseGuideInline(
    '[bold][color=#990000]Cañón[/bold][/color] y [italic]texto sin cierre'
  );
  const flat = walk(nodes);

  assert.equal(flat.some((node) => node.type === "strong"), true);
  assert.equal(flat.some((node) => node.type === "color"), true);
  assert.equal(flat.some((node) => node.type === "emphasis"), true);
  assert.equal(visibleText(nodes), "Cañón y texto sin cierre");
});

test("treats a bare color tag as the malformed closing form used by guides", () => {
  const nodes = parseGuideInline("[color=cyan]Lanzadera[color].");
  const flat = walk(nodes);

  assert.equal(flat.find((node) => node.type === "color")?.value, "cyan");
  assert.equal(visibleText(nodes), "Lanzadera.");
});

test("supports legacy italics, bolditalic, red, and click tags", () => {
  const nodes = parseGuideInline(
    '[italics]uno[/italics] [bolditalic]dos[/bolditalic] [red]tres[/red] [click=Use]cuatro[/click]'
  );
  const flat = walk(nodes);

  assert.equal(flat.filter((node) => node.type === "emphasis").length, 2);
  assert.equal(flat.some((node) => node.type === "strong"), true);
  assert.equal(flat.find((node) => node.type === "color")?.value, "red");
  assert.equal(flat.find((node) => node.type === "click")?.value, "Use");
  assert.equal(visibleText(nodes), "uno dos tres cuatro");
});

test("turns protodata into a structured fallback instead of raw markup", () => {
  const nodes = parseGuideInline(
    '[protodata="SolarPanel" comp="SolarPanel" member="MaxSupply" format="N0"/]'
  );

  assert.deepEqual(nodes, [
    {
      type: "protodata",
      prototype: "SolarPanel",
      component: "SolarPanel",
      member: "MaxSupply",
      format: "N0",
    },
  ]);
});

test("gives an attribute-less medical group embed a meaningful Spanish label", () => {
  const [embed] = parseGuideInline("<GuideMedicalGroupEmbed/>");

  assert.equal(embed.type, "embed");
  assert.equal(getGuideMedicalGroupLabel(embed.attributes), "Recetas médicas del juego");
  assert.equal(
    getGuideMedicalGroupLabel({ group: "UnknownInternalMedicalGroup" }),
    "Recetas médicas del juego"
  );
});

test("uses a Spanish fallback instead of exposing an entity prototype ID", () => {
  assert.equal(getGuideEntityLabel("", "GasVentPump"), "Objeto del juego");
  assert.equal(getGuideEntityLabel("bomba de ventilación", "GasVentPump"), "bomba de ventilación");
  assert.equal(
    getGuideEntityLabel("", "GasVentPump", { GasVentPump: "bomba de ventilación" }),
    "bomba de ventilación"
  );
});

test("describes known protodata in Spanish without exposing internal IDs", () => {
  assert.equal(
    getGuideProtoDataLabel({ prototype: "GasVentPump", member: "MaxPressure" }),
    "Dato del juego: presión máxima de la bomba de ventilación"
  );
  assert.equal(
    getGuideProtoDataLabel({ prototype: "UnknownPrototype", member: "UnknownMember" }),
    "Dato técnico del juego no disponible"
  );
});

test("localizes known embed values and uses Spanish fallbacks for unknown IDs", () => {
  assert.equal(
    getGuideEmbedLabel("GuideReagentGroupEmbed", { group: "Botanical" }),
    "Grupo de reactivos: Botánica"
  );
  assert.equal(
    getGuideEmbedLabel("GuideTechDisciplineEmbed", { discipline: "CivilianServices" }),
    "Servicios civiles"
  );
  assert.equal(
    getGuideEmbedLabel("GuideReagentEmbed", { reagent: "UnknownInternalReagent" }),
    "Reactivo del juego"
  );
});

test("keeps escaped markup examples as literal text", () => {
  const nodes = parseGuideInline('Usa \\[bold\\]texto\\[\\/bold\\]');
  assert.deepEqual(nodes, [{ type: "text", value: "Usa [bold]texto[/bold]" }]);
});

test("consumes single-line Box blocks", () => {
  const result = consumeBoxBlock(
    ['<Box>Puedes cambiar los controles aquí:</Box>', "Siguiente"],
    0
  );

  assert.deepEqual(result, {
    innerLines: ["Puedes cambiar los controles aquí:"],
    nextIndex: 1,
    trailingText: "",
  });
});

test("keeps text after a closing Box outside the box", () => {
  const result = consumeBoxBlock(
    ["<Box>fórmula</Box> explicación posterior", "Siguiente"],
    0
  );

  assert.deepEqual(result, {
    innerLines: ["fórmula"],
    nextIndex: 1,
    trailingText: " explicación posterior",
  });
});

test("consumes nested Box blocks without leaking closing tags", () => {
  const result = consumeBoxBlock(
    [
      '<Box HorizontalAlignment="Stretch">',
      "  <Box>",
      '    <GuideEntityEmbed Entity="APCBasic"/>',
      "  </Box>",
      "  <Box>texto</Box>",
      "</Box>",
      "Siguiente",
    ],
    0
  );

  assert.deepEqual(result, {
    innerLines: ['', '  ', '    <GuideEntityEmbed Entity="APCBasic"/>', '  ', '  texto'],
    nextIndex: 6,
    trailingText: "",
  });
});

test("consumes a single-line ColorBox while preserving its inner Box", () => {
  const result = consumeColorBoxBlock(
    ['<ColorBox><Box Margin="10">Aviso</Box></ColorBox>', "Siguiente"],
    0
  );

  assert.deepEqual(result, {
    innerLines: ['<Box Margin="10">Aviso</Box>'],
    nextIndex: 1,
    trailingText: "",
  });
});

test("splits adjacent block boundaries into independently consumable lines", () => {
  assert.deepEqual(
    splitGuideBlockLines("</ColorBox><ColorBox>\n<Box>uno</Box><Box>dos</Box>"),
    ["</ColorBox>", "<ColorBox>", "<Box>uno</Box>", "<Box>dos</Box>"]
  );
});

test("consumes every non-literal inline tag in both generated wiki corpora", () => {
  const failures = [];
  const rawMarkup = /\[(?:\/?[A-Za-z][^\]]*)\]|<[A-Z][A-Za-z0-9]+\b[^>]*\/>/;

  for (const fileName of ["guides.ts", "monolith-guides.ts"]) {
    for (const guide of loadGeneratedGuides(fileName)) {
      if (guide.slug === "writing") continue;
      for (const [lineIndex, sourceLine] of guide.content.split("\n").entries()) {
        const line = sourceLine.replace(/<\/?(?:Box|ColorBox|Table)\b[^>]*>/g, "");
        const rawText = walk(parseGuideInline(line))
          .filter((node) => node.type === "text")
          .map((node) => node.value)
          .join("");
        if (rawMarkup.test(rawText)) {
          failures.push(`${fileName}:${guide.slug}:${lineIndex + 1}: ${rawText}`);
        }
      }
    }
  }

  assert.deepEqual(failures, []);
});
