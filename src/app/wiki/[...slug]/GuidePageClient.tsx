"use client";

import type { GuidePage } from "@/data/guide-types";
import { WikiContent } from "@/components/wiki/WikiContent";
import { estacionWikiSource } from "@/components/wiki/sources/estacion";

export function GuidePageClient({ guide }: { guide: GuidePage }) {
  return <WikiContent guide={guide} sourceConfig={estacionWikiSource} />;
}
