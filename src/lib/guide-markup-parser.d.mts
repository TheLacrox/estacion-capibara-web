export type GuideInlineNode =
  | { type: "text"; value: string }
  | { type: "strong" | "emphasis"; children: GuideInlineNode[] }
  | { type: "color" | "heading" | "click"; value: string; children: GuideInlineNode[] }
  | { type: "keybind"; value: string }
  | { type: "textlink"; label: string; linkId: string }
  | {
      type: "protodata";
      prototype: string;
      component: string;
      member: string;
      format: string;
    }
  | { type: "bullet" }
  | { type: "guide"; guideId: string }
  | { type: "embed"; name: string; attributes: Record<string, string> };

export function parseGuideInline(text: string): GuideInlineNode[];

export function hasGuideKeybindLabel(action: string): boolean;

export function getGuideKeybindLabel(action: string): string;

export function getGuideMedicalGroupLabel(attributes: Record<string, string>): string;

export function getGuideEntityLabel(
  caption: string,
  entity?: string,
  localizedLabels?: Record<string, string>
): string;

export function getGuideProtoDataLabel(data?: {
  prototype?: string;
  component?: string;
  member?: string;
}): string;

export function getGuideEmbedLabel(
  name: string,
  attributes?: Record<string, string>
): string;

export function consumeBoxBlock(
  lines: string[],
  startIndex: number
): { innerLines: string[]; nextIndex: number; trailingText: string } | null;

export function consumeColorBoxBlock(
  lines: string[],
  startIndex: number
): { innerLines: string[]; nextIndex: number; trailingText: string } | null;

export function splitGuideBlockLines(content: string): string[];
