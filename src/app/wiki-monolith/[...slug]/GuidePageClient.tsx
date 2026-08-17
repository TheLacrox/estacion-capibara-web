"use client";

import type { GuidePage } from "@/data/guide-types";
import { WikiContent } from "@/components/wiki/WikiContent";
import { monolithWikiSource } from "@/components/wiki/sources/monolith";

export function GuidePageClient({ guide }: { guide: GuidePage }) {
  return <WikiContent guide={guide} sourceConfig={monolithWikiSource} />;
}
