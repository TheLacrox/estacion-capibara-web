import { monolithGuideTree } from "@/data/monolith-guides";
import { WikiShell } from "@/components/wiki/WikiShell";
import { wikiSwitchersFor } from "@/components/wiki/wiki-switchers";

export default function MonolithWikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WikiShell
      tree={monolithGuideTree}
      basePath="/wiki-monolith"
      wikiLabel="WIKI MONOLITH"
      hasRootPage={false}
      switchers={wikiSwitchersFor("/wiki-monolith")}
    >
      {children}
    </WikiShell>
  );
}
