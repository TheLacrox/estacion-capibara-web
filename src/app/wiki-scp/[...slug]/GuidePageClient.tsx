"use client";

import type { GuidePage } from "@/data/guide-types";
import { WikiContent } from "@/components/wiki/WikiContent";
import { scpWikiSource } from "@/components/wiki/sources/scp";

export function GuidePageClient({ guide }: { guide: GuidePage }) {
  return <WikiContent guide={guide} sourceConfig={scpWikiSource} />;
}
