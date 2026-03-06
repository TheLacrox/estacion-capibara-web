"use client";

import { type GuidePage } from "@/data/guides";
import { WikiContent } from "@/components/wiki/WikiContent";

interface GuidePageClientProps {
  guide: GuidePage;
}

export function GuidePageClient({ guide }: GuidePageClientProps) {
  return <WikiContent guide={guide} />;
}
