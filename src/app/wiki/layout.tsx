import { guideTree } from "@/data/guides";
import { WikiShell } from "@/components/wiki/WikiShell";
import { wikiSwitchersFor } from "@/components/wiki/wiki-switchers";

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <WikiShell
      tree={guideTree}
      basePath="/wiki"
      wikiLabel="WIKI ESTACIÓN"
      switchers={wikiSwitchersFor("/wiki")}
    >
      {children}
    </WikiShell>
  );
}
