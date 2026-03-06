"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import { guidePages } from "@/data/guides";
import { entitySprites } from "@/data/entity-sprites";

interface GuideMarkupProps {
  content: string;
}

// Humanize a PascalCase entity/reagent name: "Dylovene" → "Dylovene", "UnstableMutagen" → "Unstable Mutagen"
function humanize(name: string): string {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}

// Strip <Box ...> and </Box> wrappers, returning just inner text
function stripBoxTags(text: string): string {
  return text
    .replace(/<Box[^>]*>/g, "")
    .replace(/<\/Box>/g, "")
    .trim();
}

// ─── Block-level parser (shared between top-level and Table internals) ───

function parseBlocks(lines: string[], keyRef: { current: number }): ReactNode[] {
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
            {parseInline(text)}
          </h1>
        );
      } else if (level === 2) {
        elements.push(
          <h2 key={keyRef.current++} id={id} className="text-2xl font-heading font-bold text-text-primary mb-4 mt-8 border-b border-grid-line pb-2">
            {parseInline(text)}
          </h2>
        );
      } else if (level === 3) {
        elements.push(
          <h3 key={keyRef.current++} id={id} className="text-xl font-heading font-bold text-text-primary mb-3 mt-6">
            {parseInline(text)}
          </h3>
        );
      } else {
        elements.push(
          <h4 key={keyRef.current++} id={id} className="text-lg font-heading font-bold text-text-primary mb-2 mt-4">
            {parseInline(text)}
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
              <span>{parseInline(item)}</span>
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
      const innerElements = parseBlocks(tableContent, keyRef);

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

    // <ColorBox> blocks — collect until </ColorBox>
    if (trimmed === "<ColorBox>" || trimmed.startsWith("<ColorBox ")) {
      const colorMatch = trimmed.match(/Color="([^"]+)"/);
      const color = colorMatch?.[1] || undefined;
      const boxLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("</ColorBox>")) {
        boxLines.push(lines[i]);
        i++;
      }
      i++; // skip </ColorBox>

      // Strip inner <Box ...> wrappers and join text
      const text = stripBoxTags(boxLines.map((l) => l.trim()).filter(Boolean).join(" "));
      if (text) {
        elements.push(
          <div
            key={keyRef.current++}
            className="px-4 py-3 text-sm font-mono"
            style={color ? { backgroundColor: `${color}20`, borderLeft: `3px solid ${color}` } : { backgroundColor: "rgba(255,255,255,0.05)", borderLeft: "3px solid var(--color-grid-line)" }}
          >
            {parseInline(text)}
          </div>
        );
      }
      continue;
    }

    // <Box> containers — collect until </Box>
    if (trimmed === "<Box>" || trimmed.startsWith("<Box ")) {
      const boxContent: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("</Box>")) {
        boxContent.push(lines[i]);
        i++;
      }
      i++; // skip </Box>

      // Check if Box contains GuideEntityEmbeds
      const embeds = boxContent
        .map((l) => l.trim())
        .filter((l) => l.startsWith("<GuideEntityEmbed"));

      if (embeds.length > 0) {
        elements.push(
          <div key={keyRef.current++} className="flex flex-wrap gap-3 my-4 justify-center">
            {embeds.map((embed, idx) => {
              const entityMatch = embed.match(/Entity="([^"]+)"/);
              const captionMatch = embed.match(/Caption="([^"]*)"/);
              const entity = entityMatch?.[1] || "Unknown";
              const caption = captionMatch?.[1] || "";
              const spriteSrc = entitySprites[entity];
              return (
                <div key={idx} className="entity-embed group/entity flex flex-col items-center gap-2 px-4 py-3 rounded-sm border border-grid-line bg-space-void/50 min-w-[140px] hover:border-neon-cyan/30 hover:bg-hull-panel/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.06)]">
                  <div className="w-32 h-32 rounded-sm bg-hull-panel border border-grid-line flex items-center justify-center relative overflow-hidden">
                    {spriteSrc ? (
                      <img src={spriteSrc} alt={caption || entity} className="w-28 h-28 object-contain sprite-hover" style={{ imageRendering: "pixelated", animation: "sprite-float 4s ease-in-out infinite", animationDelay: `${idx * 0.3}s` }} />
                    ) : (
                      <span className="text-hazard-yellow text-base font-bold">
                        {entity.slice(0, 2).toUpperCase()}
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
        // Box with non-embed content (like quoted text)
        const text = boxContent.map((l) => l.trim()).filter(Boolean).join(" ");
        if (text) {
          elements.push(
            <div key={keyRef.current++} className="my-4 p-4 rounded-sm border border-grid-line bg-hull-panel/50 text-sm font-mono">
              {parseInline(text)}
            </div>
          );
        }
      }
      continue;
    }

    // Standalone self-closing XML tags (block-level)
    if (/^<[A-Z]/.test(trimmed) && /\/>$/.test(trimmed)) {
      elements.push(
        <div key={keyRef.current++} className="my-2">
          {parseInline(trimmed)}
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
      const caption = captionMatch?.[1] || entity;
      const spriteSrc = entitySprites[entity];
      elements.push(
        <div key={keyRef.current++} className="entity-embed inline-flex items-center gap-2 my-2 group/se relative">
          {spriteSrc && (
            <img src={spriteSrc} alt={caption || entity} className="w-16 h-16 object-contain sprite-hover" style={{ imageRendering: "pixelated" }} />
          )}
          <Badge color="var(--color-hazard-yellow)">{caption || entity}</Badge>
        </div>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={keyRef.current++} className="text-text-primary/90 font-mono text-sm leading-relaxed my-3">
        {parseInline(trimmed)}
      </p>
    );
    i++;
  }

  return elements;
}

export function GuideMarkup({ content }: GuideMarkupProps) {
  const lines = content.split("\n");
  const keyRef = { current: 0 };
  const elements = parseBlocks(lines, keyRef);
  return <div className="wiki-content">{elements}</div>;
}

// ─── Inline markup parser ───

function parseInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let remaining = text;
  let inlineKey = 0;

  while (remaining.length > 0) {
    // Find the earliest markup match
    let earliest: { index: number; type: string; match: RegExpMatchArray } | null = null;

    const patterns: [string, RegExp][] = [
      ["color", /\[color=([^\]]+)\]([\s\S]*?)\[\/color\]/],
      ["bold", /\[bold\]([\s\S]*?)\[\/bold\]/],
      ["italic", /\[italic\]([\s\S]*?)\[\/italic\]/],
      ["head", /\[head=\d+\]([\s\S]*?)\[\/head\]/],
      ["textlink", /\[textlink="([^"]+)"\s+link="([^"]+)"\]/],
      ["keybind", /\[keybind="([^"]+)"\]/],
      ["entityEmbed", /<GuideEntityEmbed\s+Entity="([^"]+)"(?:\s+Caption="([^"]*)")?(?:\s+State="([^"]*)")?\s*\/>/],
      ["reagentEmbed", /<GuideReagentEmbed\s+Reagent="([^"]+)"\s*\/>/],
      ["reagentGroupEmbed", /<GuideReagentGroupEmbed\s+Group="([^"]+)"\s*\/>/],
      ["techDisciplineEmbed", /<GuideTechDisciplineEmbed\s+Discipline="([^"]+)"\s*\/>/],
      ["automationSlots", /<GuideAutomationSlotsEmbed\s*\/>/],
      ["microwaveGroupEmbed", /<GuideMicrowaveGroupEmbed\s+Group="([^"]+)"\s*\/>/],
    ];

    for (const [type, pattern] of patterns) {
      const match = remaining.match(pattern);
      if (match && match.index !== undefined) {
        if (!earliest || match.index < earliest.index) {
          earliest = { index: match.index, type, match };
        }
      }
    }

    if (!earliest) {
      // No more markup, push remaining text
      parts.push(remaining);
      break;
    }

    // Push text before the match
    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    const { type, match } = earliest;

    switch (type) {
      case "color": {
        const color = match[1];
        const inner = match[2];
        parts.push(
          <span key={`i${inlineKey++}`} style={{ color }}>
            {parseInline(inner)}
          </span>
        );
        break;
      }
      case "bold": {
        const inner = match[1];
        parts.push(
          <strong key={`i${inlineKey++}`} className="font-bold text-text-primary">
            {parseInline(inner)}
          </strong>
        );
        break;
      }
      case "italic": {
        const inner = match[1];
        parts.push(
          <em key={`i${inlineKey++}`} className="italic">
            {parseInline(inner)}
          </em>
        );
        break;
      }
      case "head": {
        const inner = match[1];
        parts.push(
          <span key={`i${inlineKey++}`} className="text-lg font-heading font-bold">
            {parseInline(inner)}
          </span>
        );
        break;
      }
      case "textlink": {
        const label = match[1];
        const linkId = match[2];
        const targetPage = Object.values(guidePages).find((g) => g.id === linkId);
        if (targetPage) {
          parts.push(
            <Link
              key={`i${inlineKey++}`}
              href={`/wiki/${targetPage.slug}`}
              className="text-neon-cyan hover:text-hazard-yellow underline underline-offset-2 transition-colors"
            >
              {label}
            </Link>
          );
        } else {
          parts.push(
            <span key={`i${inlineKey++}`} className="text-neon-cyan" title={`Guide: ${linkId}`}>
              {label}
            </span>
          );
        }
        break;
      }
      case "keybind": {
        const keyName = match[1];
        parts.push(
          <kbd
            key={`i${inlineKey++}`}
            className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded-sm border border-grid-line bg-hull-panel text-xs font-mono text-hazard-yellow"
          >
            {keyName}
          </kbd>
        );
        break;
      }
      case "entityEmbed": {
        const entity = match[1];
        const caption = match[2] || entity;
        const spriteSrc = entitySprites[entity];
        parts.push(
          <span key={`i${inlineKey++}`} className="entity-embed inline-flex items-center gap-1.5 mx-0.5 align-middle group/ie">
            {spriteSrc && (
              <img src={spriteSrc} alt={caption || entity} className="w-12 h-12 object-contain inline-block sprite-hover" style={{ imageRendering: "pixelated" }} />
            )}
            <Badge color="var(--color-hazard-yellow)">
              {caption || entity}
            </Badge>
          </span>
        );
        break;
      }
      case "reagentEmbed": {
        const reagent = match[1];
        parts.push(
          <Badge key={`i${inlineKey++}`} color="var(--color-success-green)">
            {humanize(reagent)}
          </Badge>
        );
        break;
      }
      case "reagentGroupEmbed": {
        const group = match[1];
        parts.push(
          <span key={`i${inlineKey++}`} className="inline-flex items-center gap-1.5 my-1 px-3 py-1.5 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-success-green">
            Grupo de reactivos: {humanize(group)}
          </span>
        );
        break;
      }
      case "techDisciplineEmbed": {
        const discipline = match[1];
        parts.push(
          <Badge key={`i${inlineKey++}`} color="var(--color-nebula-purple)">
            {humanize(discipline)}
          </Badge>
        );
        break;
      }
      case "automationSlots": {
        parts.push(
          <span key={`i${inlineKey++}`} className="inline-flex items-center px-3 py-1.5 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-text-muted">
            [Tabla de Automatizacion]
          </span>
        );
        break;
      }
      case "microwaveGroupEmbed": {
        const group = match[1];
        parts.push(
          <span key={`i${inlineKey++}`} className="inline-flex items-center gap-1.5 my-1 px-3 py-1.5 rounded-sm border border-grid-line bg-hull-panel/50 text-xs font-mono text-hazard-orange">
            Recetas: {humanize(group)}
          </span>
        );
        break;
      }
    }

    remaining = remaining.slice(earliest.index + match[0].length);
  }

  return parts.length === 1 && typeof parts[0] === "string" ? parts[0] : <>{parts}</>;
}
