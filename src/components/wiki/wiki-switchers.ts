import { SERVERS } from "@/data/servers";

/** Cross-links to the other wikis, shown in the sidebar footer. */
export function wikiSwitchersFor(basePath: string) {
  return SERVERS.filter((server) => server.wikiBasePath !== basePath).map(
    (server) => ({
      href: `${server.wikiBasePath}/`,
      label: `Abrir ${server.wikiLabel}`,
    })
  );
}
