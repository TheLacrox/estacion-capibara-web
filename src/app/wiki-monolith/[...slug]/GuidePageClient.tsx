"use client";

import type { GuidePage } from "@/data/guide-types";
import { WikiContent } from "@/components/wiki/WikiContent";

export function MonolithGuidePageClient({ guide }: { guide: GuidePage }) {
  return (
    <WikiContent
      guide={guide}
      source="monolith"
      basePath="/wiki-monolith"
    />
  );
}
