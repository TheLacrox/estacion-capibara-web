"use client";

import type { GuidePage } from "@/data/guide-types";
import { WikiContent } from "@/components/wiki/WikiContent";
import { marinesWikiSource } from "@/components/wiki/sources/marines";

export function GuidePageClient({ guide }: { guide: GuidePage }) {
  return <WikiContent guide={guide} sourceConfig={marinesWikiSource} />;
}
