import { monolithGuideTree } from "@/data/monolith-guides";
import { WikiShell } from "@/components/wiki/WikiShell";

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
      switcher={{ href: "/wiki/", label: "Abrir Wiki Estación" }}
    >
      {children}
    </WikiShell>
  );
}
