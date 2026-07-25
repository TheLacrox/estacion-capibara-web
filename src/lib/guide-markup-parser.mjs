/**
 * Tolerant parser for RobustToolbox guidebook inline markup.
 *
 * The source guides contain a mix of canonical tags, self-closing variants,
 * legacy aliases, crossed closing tags, and occasionally unclosed tags. This
 * parser intentionally recovers from those forms instead of exposing source
 * syntax to readers.
 */

// Labels mirror Resources/Locale/es-ES/escape-menu/ui/options-menu.ftl in the
// authoritative Capibara Monolith repository. UIRightClick maps to the same
// localized action as OpenContextMenu.
const GUIDE_KEYBIND_LABELS = Object.freeze({
  ActivateItemInHand: "Activar objeto en mano",
  ActivateItemInWorld: "Activar objeto en el mundo",
  AltActivateItemInHand: "Activar objeto en mano de forma alternativa",
  AltActivateItemInWorld: "Activar objeto en el mundo de forma alternativa",
  CameraReset: "Restablecer",
  CameraRotateLeft: "Rotar a la izquierda",
  CameraRotateRight: "Rotar a la derecha",
  CycleChatChannelForward: "Cambiar canal (Adelante)",
  Drop: "Soltar objeto",
  EditorFlipObject: "Voltear",
  EditorGridPlace: "Colocar en cuadrícula",
  EditorLinePlace: "Colocar línea",
  EditorRotateObject: "Rotar",
  ExamineEntity: "Examinar",
  FocusChatInputWindow: "Enfocar chat",
  FocusWhisperChatWindow: "Enfocar chat (Susurro)",
  MoveDown: "Mover abajo",
  MoveLeft: "Mover a la izquierda",
  MovePulledObject: "Mover objeto arrastrado",
  MoveRight: "Mover a la derecha",
  MoveStoredItem: "Mover objeto almacenado",
  MoveUp: "Mover arriba",
  OpenAHelp: "Abrir ayuda de administración",
  OpenCharacterMenu: "Abrir menú de personaje",
  OpenCraftingMenu: "Abrir menú de fabricación",
  OpenGuidebook: "Abrir guía",
  OpenInventoryMenu: "Abrir inventario",
  ReleasePulledObject: "Soltar objeto arrastrado",
  ResetZoom: "Restablecer zoom",
  RotateObjectClockwise: "Rotar en sentido horario",
  RotateObjectCounterclockwise: "Rotar en sentido antihorario",
  RotateStoredItem: "Rotar objeto almacenado",
  ShuttleBrake: "Frenar",
  ShuttleRotateLeft: "Rotar a la izquierda",
  ShuttleRotateRight: "Rotar a la derecha",
  ShuttleStrafeDown: "Desplazamiento lateral abajo",
  ShuttleStrafeLeft: "Desplazamiento lateral izquierda",
  ShuttleStrafeRight: "Desplazamiento lateral derecha",
  ShuttleStrafeUp: "Desplazamiento lateral arriba",
  SwapHands: "Intercambiar manos (siguiente)",
  ThrowItemInHand: "Lanzar objeto",
  TryPullObject: "Tirar de objeto",
  UIRightClick: "Abrir menú contextual",
  Use: "Usar",
  UseSecondary: "Uso secundario",
  Walk: "Caminar",
  ZoomIn: "Acercar",
  ZoomOut: "Alejar",
});

const GUIDE_REAGENT_LABELS = Object.freeze({
  UnstableMutagen: "Mutágeno inestable",
  Cryoxadone: "Cryoxadone",
  Dylovene: "Dylovene",
  Phalanximine: "Phalanximine",
  Bruizine: "Bruizine",
  Puncturase: "Puncturase",
  Lacerinol: "Lacerinol",
  Razorium: "Razorium",
  Oil: "Aceite",
  Ash: "Ceniza",
  SulfuricAcid: "Ácido sulfúrico",
  Aloxadone: "Aloxadone",
  Doxarubixadone: "Doxarubixadone",
  Dexalin: "Dexalin",
  Leporazine: "Leporazine",
  Necrosol: "Necrosol",
  Opporozidone: "Opporozidone",
  SpaceCleaner: "Limpiador espacial",
  Ammonia: "Amoníaco",
  Romerol: "Romerol",
  Ambuzol: "Ambuzol",
  AmbuzolPlus: "Ambuzol Plus",
  Phenoxzine: "Phenoxzine",
  Meroxzine: "Meroxzine",
  GastroToxin: "Toxina gástrica",
  Toxin: "Toxina",
  Impedrezene: "Impedrezene",
  ChloralHydrate: "Hidrato de cloral",
  Letoferol: "Letoferol",
  NaturalLetoferol: "Letoferol natural",
  Mesotaxinide: "Mesotaxinide",
  Mesophenerol: "Mesophenerol",
  ProtoLetoferol: "Protoletoferol",
  Stelloxadone: "Stelloxadone",
  Traumoxadone: "Traumoxadone",
  Bicaridine: "Bicaridine",
  Kelotane: "Kelotane",
  Dermaline: "Dermaline",
  Inaprovaline: "Inaprovaline",
  DexalinPlus: "Dexalin Plus",
  Iron: "Hierro",
  Epinephrine: "Epinefrina",
  Hyronalin: "Hyronalin",
  Arithrazine: "Arithrazine",
  Tricordrazine: "Tricordrazine",
  TranexamicAcid: "Ácido tranexámico",
  Oculine: "Oculine",
});

const GUIDE_REAGENT_GROUP_LABELS = Object.freeze({
  Botanical: "Botánica",
  Elements: "Elementos",
  Medicine: "Medicina",
  Narcotics: "Narcóticos",
  Pyrotechnic: "Pirotecnia",
  Toxins: "Toxinas",
  Foods: "Alimentos",
  Biological: "Biológicos",
  Special: "Especiales",
  Unknown: "Desconocidos",
  Drinks: "Bebidas",
});

const GUIDE_TECH_DISCIPLINE_LABELS = Object.freeze({
  Industrial: "Industrial",
  Arsenal: "Arsenal",
  Experimental: "Experimental",
  CivilianServices: "Servicios civiles",
});

const GUIDE_RECIPE_GROUP_LABELS = Object.freeze({
  ArcFurnace: "Horno de arco",
  Pizza: "Pizzas",
  Savory: "Platos salados",
  Breads: "Panes",
  Breakfast: "Desayunos",
  Moth: "Cocina de polillas",
  Pasta: "Pasta",
  Dessert: "Postres",
  Soup: "Sopas",
  Pie: "Tartas",
  BarsAndCookies: "Barritas y galletas",
  Cake: "Pasteles",
  Salad: "Ensaladas",
  Medicinal: "Medicinales",
  Other: "Otras",
  Secret: "Secretas",
});

const GUIDE_PROTODATA_PROTOTYPE_LABELS = Object.freeze({
  Firelock: "de la compuerta cortafuegos",
  GasOutletInjector: "del inyector de salida de gas",
  GasPressurePump: "de la bomba de presión",
  GasPressureRegulator: "del regulador de presión",
  GasThermoMachineFreezer: "de la máquina térmica refrigeradora",
  GasThermoMachineHellfireFreezer: "de la máquina térmica de alta temperatura",
  GasVentPump: "de la bomba de ventilación",
  GasVolumePump: "de la bomba volumétrica",
  GeneratorRTG: "del generador RTG",
  PortableGeneratorJrPacman: "del generador portátil J.R.P.A.C.M.A.N.",
  PortableGeneratorSuperPacman: "del generador portátil S.U.P.E.R.P.A.C.M.A.N.",
  PortableScrubber: "del depurador portátil",
  PressureControlledValve: "de la válvula controlada por presión",
  SMESAdvanced: "del SMES avanzado",
  SMESBasic: "del SMES básico",
  SolarPanel: "del panel solar",
  SolarPanelPlasma: "del panel solar de plasma",
  SolarPanelUranium: "del panel solar de uranio",
  SpaceHeater: "del calentador espacial",
  StorageCanister: "de la bombona de almacenamiento",
  SyndicateBomb: "de la bomba del Sindicato",
});

const GUIDE_PROTODATA_MEMBER_LABELS = Object.freeze({
  DefaultExternalBound: "límite externo predeterminado",
  EnergyLeakPercentage: "porcentaje de fuga de energía",
  HeatCapacity: "capacidad térmica",
  HigherThreshold: "umbral superior",
  LongestDelayOption: "retardo máximo",
  MaxCharge: "carga máxima",
  MaxPressure: "presión máxima",
  MaxSupply: "suministro máximo",
  MaxTargetPower: "potencia objetivo máxima",
  MaxTargetPressure: "presión objetivo máxima",
  MaxTemperature: "temperatura máxima",
  MaxTransferRate: "tasa de transferencia máxima",
  MinTemperature: "temperatura mínima",
  PressureThreshold: "umbral de presión",
  ShortestDelayOption: "retardo mínimo",
  TemperatureThreshold: "umbral de temperatura",
  TemperatureTolerance: "tolerancia de temperatura",
  Threshold: "umbral de activación",
  UnderPressureLockoutThreshold: "umbral de bloqueo por baja presión",
  Volume: "volumen",
});

export function hasGuideKeybindLabel(action) {
  return Object.hasOwn(GUIDE_KEYBIND_LABELS, action);
}

export function getGuideKeybindLabel(action) {
  return GUIDE_KEYBIND_LABELS[action] ?? "Control del juego";
}

export function getGuideMedicalGroupLabel() {
  return "Recetas médicas del juego";
}

export function getGuideEntityLabel(caption, entity, localizedLabels = {}) {
  return caption?.trim() || localizedLabels[entity] || "Objeto del juego";
}

export function getGuideProtoDataLabel(data = {}) {
  const prototype = GUIDE_PROTODATA_PROTOTYPE_LABELS[data.prototype];
  const member = GUIDE_PROTODATA_MEMBER_LABELS[data.member];
  if (!prototype || !member) return "Dato técnico del juego no disponible";
  return `Dato del juego: ${member} ${prototype}`;
}

export function getGuideEmbedLabel(name, attributes = {}) {
  const value =
    attributes.reagent ??
    attributes.group ??
    attributes.discipline ??
    "";

  if (name === "GuideReagentEmbed") {
    return GUIDE_REAGENT_LABELS[value] ?? "Reactivo del juego";
  }
  if (name === "GuideReagentGroupEmbed") {
    const label = GUIDE_REAGENT_GROUP_LABELS[value] ?? "grupo del juego";
    return `Grupo de reactivos: ${label}`;
  }
  if (name === "GuideMedicalGroupEmbed") {
    return getGuideMedicalGroupLabel(attributes);
  }
  if (name === "GuideTechDisciplineEmbed") {
    return GUIDE_TECH_DISCIPLINE_LABELS[value] ?? "Disciplina tecnológica";
  }
  if (name === "GuideMicrowaveGroupEmbed") {
    const label = GUIDE_RECIPE_GROUP_LABELS[value] ?? "grupo del juego";
    return `Recetas: ${label}`;
  }
  if (name === "GuideAutomationSlotsEmbed") {
    return "Tabla de automatización";
  }
  return "Contenido complementario del juego";
}

function appendNode(container, node) {
  if (node.type === "text" && !node.value) return;
  const previous = container.children.at(-1);
  if (node.type === "text" && previous?.type === "text") {
    previous.value += node.value;
    return;
  }
  container.children.push(node);
}

function parseAttributes(source) {
  const attributes = {};
  const pattern = /([A-Za-z][A-Za-z0-9_-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s/]+))/g;
  for (const match of source.matchAll(pattern)) {
    attributes[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? "";
  }
  return attributes;
}

function formattingTag(body) {
  const trimmed = body.trim();
  const closing = trimmed.startsWith("/");
  const value = closing ? trimmed.slice(1).trim() : trimmed;
  const name = value.split(/[=\s]/, 1)[0].toLowerCase();
  const argument = value.includes("=") ? value.slice(value.indexOf("=") + 1).trim() : "";

  if (name === "bold") return { closing, tag: "bold", type: "strong" };
  if (name === "italic" || name === "italics") {
    return { closing, tag: "italic", type: "emphasis" };
  }
  if (name === "bolditalic") {
    return { closing, tag: "bolditalic", type: "bolditalic" };
  }
  if (name === "color" && (closing || argument)) {
    return { closing, tag: "color", type: "color", value: argument };
  }
  if (name === "color") {
    return { closing: true, tag: "color", type: "color", value: "" };
  }
  if (name === "red") {
    return { closing, tag: "red", type: "color", value: "red" };
  }
  if (name === "head" && (closing || argument)) {
    return { closing, tag: "head", type: "heading", value: argument };
  }
  if (name === "click" && (closing || argument)) {
    return { closing, tag: "click", type: "click", value: argument };
  }
  return null;
}

function atomicBracketNode(body) {
  const normalized = body.trim().replace(/\s*\/$/, "").trim();
  const lower = normalized.toLowerCase();

  if (lower.startsWith("keybind=")) {
    const attributes = parseAttributes(normalized);
    const value = attributes.keybind;
    return value ? { type: "keybind", value } : null;
  }

  if (lower.startsWith("textlink=")) {
    const attributes = parseAttributes(normalized);
    return attributes.textlink && attributes.link
      ? { type: "textlink", label: attributes.textlink, linkId: attributes.link }
      : null;
  }

  if (lower.startsWith("protodata=")) {
    const attributes = parseAttributes(normalized);
    return {
      type: "protodata",
      prototype: attributes.protodata || "",
      component: attributes.comp || "",
      member: attributes.member || "",
      format: attributes.format || "",
    };
  }

  if (lower === "bullet") return { type: "bullet" };

  if (lower.startsWith("guide=")) {
    const attributes = parseAttributes(normalized);
    return attributes.guide
      ? { type: "guide", guideId: attributes.guide }
      : null;
  }

  return null;
}

function xmlEmbedNode(raw) {
  const match = raw.match(/^<([A-Z][A-Za-z0-9]+)\b([^>]*)\/>$/);
  if (!match) return null;
  return {
    type: "embed",
    name: match[1],
    attributes: parseAttributes(match[2]),
  };
}

function closeFrame(stack, tag) {
  let target = -1;
  for (let index = stack.length - 1; index > 0; index--) {
    if (stack[index].tag === tag) {
      target = index;
      break;
    }
  }
  if (target === -1) return;

  while (stack.length - 1 >= target) {
    const frame = stack.pop();
    appendNode(stack.at(-1), materializeFrame(frame));
  }
}

function materializeFrame(frame) {
  if (frame.tag === "bolditalic") {
    return {
      type: "strong",
      children: [{ type: "emphasis", children: frame.children }],
    };
  }
  const node = { ...frame };
  delete node.tag;
  return node;
}

function appendLiteralEscapedBracket(text, index, container) {
  const end = text.indexOf("\\]", index + 2);
  if (end === -1) return null;
  const inside = text.slice(index + 2, end).replace(/\\\//g, "/");
  appendNode(container, { type: "text", value: `[${inside}]` });
  return end + 2;
}

export function parseGuideInline(text) {
  const root = { children: [] };
  const stack = [root];
  let index = 0;

  while (index < text.length) {
    const container = stack.at(-1);

    if (text.startsWith("\\[", index)) {
      const nextIndex = appendLiteralEscapedBracket(text, index, container);
      if (nextIndex !== null) {
        index = nextIndex;
        continue;
      }
    }

    if (text[index] === "[") {
      const end = text.indexOf("]", index + 1);
      if (end !== -1) {
        const body = text.slice(index + 1, end);
        const atomic = atomicBracketNode(body);
        if (atomic) {
          appendNode(container, atomic);
          index = end + 1;
          continue;
        }

        const formatting = formattingTag(body);
        if (formatting) {
          if (formatting.closing) {
            closeFrame(stack, formatting.tag);
          } else {
            stack.push({
              tag: formatting.tag,
              type: formatting.type,
              ...(formatting.value ? { value: formatting.value } : {}),
              children: [],
            });
          }
          index = end + 1;
          continue;
        }
      }
    }

    if (text[index] === "<") {
      const end = text.indexOf(">", index + 1);
      if (end !== -1) {
        const raw = text.slice(index, end + 1);
        const embed = xmlEmbedNode(raw);
        if (embed) {
          appendNode(container, embed);
          index = end + 1;
          continue;
        }
      }
    }

    let next = index + 1;
    while (next < text.length && text[next] !== "[" && text[next] !== "<" && !text.startsWith("\\[", next)) {
      next++;
    }
    appendNode(container, { type: "text", value: text.slice(index, next) });
    index = next;
  }

  while (stack.length > 1) {
    const frame = stack.pop();
    appendNode(stack.at(-1), materializeFrame(frame));
  }

  return root.children;
}

function consumeNamedBlock(lines, startIndex, tagName) {
  const innerLines = [];
  let depth = 0;
  const tagPattern = new RegExp(`<\\/?${tagName}(?:\\s[^>]*)?>`, "g");

  for (let index = startIndex; index < lines.length; index++) {
    const line = lines[index];
    const tokens = [...line.matchAll(tagPattern)];
    if (tokens.length === 0 && index === startIndex) return null;

    let cursor = 0;
    let innerLine = "";
    for (const token of tokens) {
      if (depth > 0) innerLine += line.slice(cursor, token.index);

      if (token[0].startsWith("</")) {
        if (depth > 0) depth--;
        if (depth === 0) {
          if (innerLine) innerLines.push(innerLine);
          return {
            innerLines,
            nextIndex: index + 1,
            trailingText: line.slice(token.index + token[0].length),
          };
        }
      } else {
        depth++;
      }

      cursor = token.index + token[0].length;
    }

    if (depth > 0) {
      innerLine += line.slice(cursor);
      innerLines.push(innerLine);
    }
  }

  return { innerLines, nextIndex: lines.length, trailingText: "" };
}

export function consumeBoxBlock(lines, startIndex) {
  return consumeNamedBlock(lines, startIndex, "Box");
}

export function consumeColorBoxBlock(lines, startIndex) {
  return consumeNamedBlock(lines, startIndex, "ColorBox");
}

export function splitGuideBlockLines(content) {
  return content
    .replace(
      /(<\/(?:Box|ColorBox|Table)>)\s*(?=<(?:Box|ColorBox|Table)\b)/g,
      "$1\n"
    )
    .split("\n");
}
