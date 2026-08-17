import { marinesGuideTree } from "@/data/marines-guides";
import { WikiShell } from "@/components/wiki/WikiShell";
import { wikiSwitchersFor } from "@/components/wiki/wiki-switchers";

export default function MarinesWikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WikiShell
      tree={marinesGuideTree}
      basePath="/wiki-marines"
      wikiLabel="WIKI MARINES"
      hasRootPage={false}
      switchers={wikiSwitchersFor("/wiki-marines")}
    >
      {children}
    </WikiShell>
  );
}
