import { guideTree } from "@/data/guides";
import { WikiShell } from "@/components/wiki/WikiShell";

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <WikiShell
      tree={guideTree}
      basePath="/wiki"
      wikiLabel="WIKI ESTACIÓN"
      switcher={{ href: "/wiki-monolith/", label: "Abrir Wiki Monolith" }}
    >
      {children}
    </WikiShell>
  );
}
