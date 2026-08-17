import { scpGuideTree } from "@/data/scp-guides";
import { WikiShell } from "@/components/wiki/WikiShell";
import { wikiSwitchersFor } from "@/components/wiki/wiki-switchers";

export default function ScpWikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WikiShell
      tree={scpGuideTree}
      basePath="/wiki-scp"
      wikiLabel="WIKI SCP"
      hasRootPage={false}
      switchers={wikiSwitchersFor("/wiki-scp")}
    >
      {children}
    </WikiShell>
  );
}
