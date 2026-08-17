"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import type { WikiSourceConfig } from "./wiki-source-config";
import {
  consumeBoxBlock,
  consumeColorBoxBlock,
  getGuideEmbedLabel,
  getGuideEntityLabel,
  getGuideMedicalGroupLabel,
  getGuideKeybindLabel,
  getGuideProtoDataLabel,
  parseGuideInline,
  splitGuideBlockLines,
  type GuideInlineNode,
} from "@/lib/guide-markup-parser.mjs";

interface GuideMarkupProps {
  content: string;
  sourceConfig: WikiSourceConfig;
}

interface GuideMarkupContext {
  basePath: string;
  guideIdToSlug: Record<string, string>;
  guideSlugsToMeta: Record<string, { title: string }>;
  entityLabels: Record<string, string>;
  entitySprites: Record<string, string>;
}

// ─── Block-level parser (shared between top-level and Table internals) ───

function parseBlocks(
  lines: string[],
  keyRef: { current: number },
  context: GuideMarkupContext
): ReactNode[] {
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // Horizontal rule
    if (/^-{3,}$/.test(trimmed)) {
      elements.push(
        <div key={keyRef.current++} className="my-6 h-0.5 bg-gradient-to-r from-transparent via-grid-line to-transparent" />
      );
      i++;
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");

      if (level === 1) {
        elements.push(
          <h1 key={keyRef.current++} id={id} className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-6 mt-2 first:mt-0">
            {parseInline(text, context)}
          </h1>
        );
      } else if (level === 2) {
        elements.push(
          <h2 key={keyRef.current++} id={id} className="text-2xl font-heading font-bold text-text-primary mb-4 mt-8 border-b border-grid-line pb-2">
            {parseInline(text, context)}
          </h2>
        );
      } else if (level === 3) {
        elements.push(
          <h3 key={keyRef.current++} id={id} className="text-xl font-heading font-bold text-text-primary mb-3 mt-6">
            {parseInline(text, context)}
          </h3>
        );
      } else {
        elements.push(
          <h4 key={keyRef.current++} id={id} className="text-lg font-heading font-bold text-text-primary mb-2 mt-4">
            {parseInline(text, context)}
          </h4>
        );
      }
      i++;
      continue;
    }

    // List items — collect consecutive list items
    if (trimmed.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={keyRef.current++} className="list-none space-y-2 my-4 ml-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex gap-2 text-text-primary/90 font-mono text-sm leading-relaxed">
              <span className="text-hazard-yellow mt-0.5 shrink-0">{">"}</span>
              <span>{parseInline(item, context)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // <Table> blocks — collect until </Table>, then recursively parse inner content
    if (trimmed.startsWith("<Table")) {
      const colMatch = trimmed.match(/Columns="(\d+)"/);
      const cols = colMatch ? parseInt(colMatch[1]) : 3;
      const tableContent: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("</Table>")) {
        tableContent.push(lines[i]);
        i++;
      }
      i++; // skip </Table>

      // Recursively parse inner content as blocks
      const innerElements = parseBlocks(tableContent, keyRef, context);

      if (innerElements.length > 0) {
        elements.push(
          <div
            key={keyRef.current++}
            className="grid gap-0 my-4"
            style={{ gridTemplateColumns: `repeat(${Math.min(cols, 6)}, minmax(0, 1fr))` }}
          >
            {innerElements}
          </div>
        );
      }
      continue;
    }

    // <ColorBox> blocks — consume single-line and multiline forms.
    if (trimmed.startsWith("<ColorBox>") || trimmed.startsWith("<ColorBox ")) {
      const colorMatch = trimmed.match(/Color="([^"]+)"/);
      const color = colorMatch?.[1] || undefined;
      const consumed = consumeColorBoxBlock(lines, i);
      const innerElements = parseBlocks(consumed?.innerLines ?? [], keyRef, context);
      i = consumed?.nextIndex ?? i + 1;

      if (innerElements.length > 0) {
        elements.push(
          <div
            key={keyRef.current++}
            className="px-4 py-3 text-sm font-mono space-y-2"
            style={color ? { backgroundColor: `${color}20`, borderLeft: `3px solid ${color}` } : { backgroundColor: "rgba(255,255,255,0.05)", borderLeft: "3px solid var(--color-grid-line)" }}
          >
            {innerElements}
          </div>
        );
      }
      if (consumed?.trailingText.trim()) {
        elements.push(...parseBlocks([consumed.trailingText], keyRef, context));
      }
      continue;
    }

    // <Box> containers — consume balanced, nested, and single-line forms.
    if (trimmed.startsWith("<Box>") || trimmed.startsWith("<Box ")) {
      const consumed = consumeBoxBlock(lines, i);
      const boxContent = consumed?.innerLines ?? [];
      i = consumed?.nextIndex ?? i + 1;

      // Check if Box contains GuideEntityEmbeds
      const embeds = boxContent
        .map((l) => l.trim())
        .filter((l) => l.startsWith("<GuideEntityEmbed"));
      const otherContent = boxContent
        .map((l) => l.trim())
        .filter(Boolean)
        .filter((l) => !l.startsWith("<GuideEntityEmbed"));

      if (embeds.length > 0 && otherContent.length === 0) {
        elements.push(
          <div key={keyRef.current++} className="flex flex-wrap gap-3 my-4 justify-center">
            {embeds.map((embed, idx) => {
              const entityMatch = embed.match(/Entity="([^"]+)"/);
              const captionMatch = embed.match(/Caption="([^"]*)"/);
              const entity = entityMatch?.[1] || "Unknown";
              const caption = captionMatch?.[1] || "";
              const accessibleLabel = getGuideEntityLabel(caption, entity, context.entityLabels);
              const spriteSrc = context.entitySprites[entity];
              return (
                <div key={idx} className="entity-embed group/entity flex flex-col items-center gap-2 px-4 py-3 rounded-sm border border-grid-line bg-space-void/50 min-w-[140px] hover:border-neon-cyan/30 hover:bg-hull-panel/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.06)]">
                  <div className="w-32 h-32 rounded-sm bg-hull-panel border border-grid-line flex items-center justify-center relative overflow-hidden">
                    {spriteSrc ? (
                      <img src={spriteSrc} alt={`Sprite de ${accessibleLabel} - Space Station 14`} className="w-28 h-28 object-contain sprite-hover" style={{ imageRendering: "pixelated", animation: "sprite-float 4s ease-in-out infinite", animationDelay: `${idx * 0.3}s` }} />
                    ) : (
                      <span className="text-hazard-yellow text-base font-bold">
                        OBJ
                      </span>
                    )}
                  </div>
                  {caption && (
                    <span className="text-xs text-text-muted font-mono text-center leading-tight group-hover/entity:text-neon-cyan/80 transition-colors duration-300">
                      {caption}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        );
      } else {
        const innerElements = parseBlocks(boxContent, keyRef, context);
        if (innerElements.length > 0) {
          elements.push(
            <div key={keyRef.current++} className="my-4 p-4 rounded-sm border border-grid-line bg-hull-panel/50 text-sm font-mono space-y-2">
              {innerElements}
            </div>
          );
        }
      }
      if (consumed?.trailingText.trim()) {
        elements.push(...parseBlocks([consumed.trailingText], keyRef, context));
      }
      continue;
    }

    // Standalone self-closing XML tags (block-level)
    if (/^<[A-Z]/.test(trimmed) && /\/>$/.test(trimmed)) {
      elements.push(
        <div key={keyRef.current++} className="my-2">
          {parseInline(trimmed, context)}
        </div>
      );
      i++;
      continue;
    }

    // Standalone <GuideEntityEmbed> outside of Box
    if (trimmed.startsWith("<GuideEntityEmbed")) {
      const entityMatch = trimmed.match(/Entity="([^"]+)"/);
      const captionMatch = trimmed.match(/Caption="([^"]*)"/);
      const entity = entityMatch?.[1] || "Unknown";
      const caption = getGuideEntityLabel(captionMatch?.[1] || "", entity, context.entityLabels);
      const spriteSrc = context.entitySprites[entity];
      elements.push(
        <div key={keyRef.current++} className="entity-embed inline-flex items-center gap-2 my-2 group/se relative">
          {spriteSrc && (
            <img src={spriteSrc} alt={`Sprite de ${caption} - Space Station 14`} className="w-16 h-16 object-contain sprite-hover" style={{ imageRendering: "pixelated" }} />
          )}
          <Badge color="var(--color-hazard-yellow)">{caption}</Badge>
        </div>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={keyRef.current++} className="text-text-primary/90 font-mono text-sm leading-relaxed my-3">
        {parseInline(trimmed, context)}
      </p>
    );
    i++;
  }

  return elements;
}

export function GuideMarkup({ content, sourceConfig }: GuideMarkupProps) {
  const lines = splitGuideBlockLines(content);
  const keyRef = { current: 0 };
  const context: GuideMarkupContext = {
    basePath: sourceConfig.basePath,
    guideIdToSlug: sourceConfig.idToSlug,
    guideSlugsToMeta: sourceConfig.slugsToMeta,
    entityLabels: sourceConfig.entityLabels,
    entitySprites: sourceConfig.entitySprites,
  };
  const elements = parseBlocks(lines, keyRef, context);
  return <div className="wiki-content">{elements}</div>;
}

// ─── Inline markup parser ───

function renderInlineNodes(
  nodes: GuideInlineNode[],
  context: GuideMarkupContext,
  keyPrefix = "i"
): ReactNode {
  return nodes.map((node, index) => {
    const key = `${keyPrefix}${index}`;
    const children = "children" in node
      ? renderInlineNodes(node.children, context, `${key}-`)
      : null;

    switch (node.type) {
      case "text":
        return node.value;
      case "strong":
        return <strong key={key} className="font-bold text-text-primary">{children}</strong>;
      case "emphasis":
        return <em key={key} className="italic">{children}</em>;
      case "color":
        return <span key={key} style={{ color: node.value }}>{children}</span>;
      case "heading":
        return <span key={key} className="text-lg font-heading font-bold">{children}</span>;
      case "click":
        return <kbd key={key} title="Acción indicada en la guía" className="inline-flex items-center px-2 py-0.5 rounded-sm border border-grid-line bg-hull-panel text-xs font-mono text-neon-cyan">{children}</kbd>;
      case "textlink": {
        const targetSlug = context.guideIdToSlug[node.linkId];
        return targetSlug ? (
          <Link key={key} href={`${context.basePath}/${targetSlug}`} className="text-neon-cyan hover:text-hazard-yellow underline underline-offset-2 transition-colors">
            {node.label}
          </Link>
        ) : (
          <span key={key} className="text-neon-cyan" title="Referencia de guía no disponible">{node.label}</span>
        );
      }
      case "keybind": {
        const label = getGuideKeybindLabel(node.value);
        return <kbd key={key} title={`Control configurado: ${label}`} className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-sm border border-grid-line bg-hull-panel text-xs font-mono text-hazard-yellow">{label}</kbd>;
      }
      case "protodata":
        return <span key={key} title="Referencia técnica del juego" className="inline-flex items-center px-2 py-1 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-text-muted">{getGuideProtoDataLabel(node)}</span>;
      case "bullet":
        return <span key={key} className="text-hazard-yellow" aria-hidden="true">•</span>;
      case "guide": {
        const targetSlug = context.guideIdToSlug[node.guideId];
        const label = targetSlug
          ? context.guideSlugsToMeta[targetSlug]?.title ?? "Guía relacionada"
          : "Guía relacionada";
        return targetSlug ? <Link key={key} href={`${context.basePath}/${targetSlug}`} className="text-neon-cyan underline underline-offset-2">{label}</Link> : <span key={key}>{label}</span>;
      }
      case "embed":
        return renderEmbed(node.name, node.attributes, context, key);
    }
  });
}

function renderEmbed(
  name: string,
  attributes: Record<string, string>,
  context: GuideMarkupContext,
  key: string
): ReactNode {
  if (name === "GuideEntityEmbed") {
    const entity = attributes.entity || "Unknown";
    const caption = getGuideEntityLabel(attributes.caption || "", entity, context.entityLabels);
    const spriteSrc = context.entitySprites[entity];
    return (
      <span key={key} className="entity-embed inline-flex items-center gap-1.5 mx-0.5 align-middle group/ie">
        {spriteSrc && <img src={spriteSrc} alt={`Sprite de ${caption} - Space Station 14`} className="w-12 h-12 object-contain inline-block sprite-hover" style={{ imageRendering: "pixelated" }} />}
        <Badge color="var(--color-hazard-yellow)">{caption}</Badge>
      </span>
    );
  }

  if (name === "GuideReagentEmbed") return <Badge key={key} color="var(--color-success-green)">{getGuideEmbedLabel(name, attributes)}</Badge>;
  if (name === "GuideReagentGroupEmbed") return <span key={key} className="inline-flex items-center px-3 py-1.5 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-success-green">{getGuideEmbedLabel(name, attributes)}</span>;
  if (name === "GuideMedicalGroupEmbed") return <span key={key} className="inline-flex items-center px-3 py-1.5 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-success-green">{getGuideMedicalGroupLabel(attributes)}</span>;
  if (name === "GuideTechDisciplineEmbed") return <Badge key={key} color="var(--color-nebula-purple)">{getGuideEmbedLabel(name, attributes)}</Badge>;
  if (name === "GuideMicrowaveGroupEmbed") return <span key={key} className="inline-flex items-center px-3 py-1.5 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-hazard-orange">{getGuideEmbedLabel(name, attributes)}</span>;
  if (name === "GuideAutomationSlotsEmbed") return <span key={key} className="inline-flex items-center px-3 py-1.5 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-text-muted">{getGuideEmbedLabel(name, attributes)}</span>;
  if (name === "CommandButton") {
    const label = attributes.text?.includes("controls") ? "Abrir controles" : "Ejecutar comando";
    return <kbd key={key} title="Comando del juego" className="inline-flex items-center px-3 py-1.5 rounded-sm border border-neon-cyan/30 bg-neon-cyan/5 text-xs font-mono text-neon-cyan">{label}</kbd>;
  }

  return <span key={key} className="inline-flex items-center px-2 py-1 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-text-muted">{getGuideEmbedLabel(name, attributes)}</span>;
}

function parseInline(text: string, context: GuideMarkupContext): ReactNode {
  return renderInlineNodes(parseGuideInline(text), context);
}
