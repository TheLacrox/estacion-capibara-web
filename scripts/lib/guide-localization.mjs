import { GUIDE_LOCALIZATION_CATALOG } from "./guide-localization-catalog.mjs";

function mergeRouteGroups(...groups) {
  const merged = {};
  for (const group of groups) {
    for (const [route, translations] of Object.entries(group)) {
      merged[route] = { ...merged[route], ...translations };
    }
  }
  return merged;
}

const CATALOG_GROUPS = Object.freeze({
  captions: mergeRouteGroups(
    GUIDE_LOCALIZATION_CATALOG.entity_caption_translations,
    GUIDE_LOCALIZATION_CATALOG.supplemental_entity_caption_translations
  ),
  links: mergeRouteGroups(
    GUIDE_LOCALIZATION_CATALOG.textlink_label_translations,
    GUIDE_LOCALIZATION_CATALOG.supplemental_textlink_label_translations
  ),
  text: mergeRouteGroups(
    GUIDE_LOCALIZATION_CATALOG.normal_ui_literal_translations,
    GUIDE_LOCALIZATION_CATALOG.supplemental_ui_literal_translations
  ),
});

function buildUnambiguousFallbacks(group) {
  const candidates = new Map();
  for (const translations of Object.values(group)) {
    for (const [english, spanish] of Object.entries(translations)) {
      const values = candidates.get(english) ?? new Set();
      values.add(spanish);
      candidates.set(english, values);
    }
  }
  return new Map(
    [...candidates]
      .filter(([, values]) => values.size === 1)
      .map(([english, values]) => [english, [...values][0]])
  );
}

const UNAMBIGUOUS_FALLBACKS = Object.freeze({
  captions: buildUnambiguousFallbacks(CATALOG_GROUPS.captions),
  links: buildUnambiguousFallbacks(CATALOG_GROUPS.links),
  text: buildUnambiguousFallbacks(CATALOG_GROUPS.text),
});

function guideRoute({ source = "estacion", slug = "" } = {}) {
  if (!slug) return "";
  const namespace = source === "monolith" ? "/wiki-monolith" : "/wiki";
  return `${namespace}/${slug}/`;
}

function translationFor(groupName, route, english) {
  return (
    CATALOG_GROUPS[groupName][route]?.[english] ??
    (!route ? UNAMBIGUOUS_FALLBACKS[groupName].get(english) : undefined) ??
    english
  );
}

function replaceAttribute(tag, attributeName, translate) {
  const pattern = new RegExp(`(${attributeName}\\s*=\\s*["'])([^"']*)(["'])`, "i");
  return tag.replace(pattern, (match, prefix, value, suffix) => {
    const translated = translate(value);
    return `${prefix}${translated}${suffix}`;
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceVisibleLiteral(text, english, spanish) {
  if (!/^[\p{L}\p{N}_]+$/u.test(english)) return text.replaceAll(english, spanish);
  const pattern = new RegExp(
    `(?<![\\p{L}\\p{N}_])${escapeRegExp(english)}(?![\\p{L}\\p{N}_])`,
    "gu"
  );
  return text.replace(pattern, spanish);
}

function localizeVisibleText(content, route) {
  const translations = CATALOG_GROUPS.text[route] ?? {};
  const fallbackTranslations = route ? new Map() : UNAMBIGUOUS_FALLBACKS.text;
  return content
    .split(/(<[^>]+>|\[[^\]]+\])/g)
    .map((segment) => {
      if (segment.startsWith("<") || segment.startsWith("[")) return segment;
      let localized = segment;
      const entries = new Map([...fallbackTranslations, ...Object.entries(translations)]);
      for (const [english, spanish] of [...entries].sort(
        ([left], [right]) => right.length - left.length
      )) {
        localized = replaceVisibleLiteral(localized, english, spanish);
      }
      return localized;
    })
    .join("");
}

export function localizeEntityLabel(label, entityId = "") {
  return (
    GUIDE_LOCALIZATION_CATALOG.entity_id_label_translations[entityId] ??
    GUIDE_LOCALIZATION_CATALOG.entity_label_translations[label] ??
    label
  );
}

export function localizeGuideContent(content, context = {}) {
  const route = guideRoute(context);
  const localizedCaptions = content.replace(/<GuideEntityEmbed\b[^>]*\/?>/gi, (tag) =>
    replaceAttribute(tag, "Caption", (caption) =>
      translationFor("captions", route, caption)
    )
  );

  const localizedLinks = localizedCaptions.replace(/\[textlink\s*=\s*["'][^\]]+\]/gi, (tag) =>
    replaceAttribute(tag, "textlink", (label) =>
      translationFor("links", route, label)
    )
  );

  return localizeVisibleText(localizedLinks, route);
}
