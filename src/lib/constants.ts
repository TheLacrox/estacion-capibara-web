export const DISCORD_URL = "https://discord.gg/xRsRcpmCVX";
export const SS14_DOWNLOAD_URL = "https://spacestation14.com";
export const SERVER_NAME = "Estacion Capibara";
export const SITE_URL = "https://estacioncapibara.com";

export const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Que es SS14?", href: "#que-es-ss14" },
  { label: "Caracteristicas", href: "#caracteristicas" },
  { label: "Departamentos", href: "#departamentos" },
  { label: "Como Jugar", href: "#como-jugar" },
  { label: "Comunidad", href: "#comunidad" },
] as const;

export const WIKI_NAV_LINK = { label: "Wiki", href: "/wiki" } as const;

export const SECTION_IDS = {
  hero: "hero",
  whatIsSS14: "que-es-ss14",
  features: "caracteristicas",
  departments: "departamentos",
  howToPlay: "como-jugar",
  community: "comunidad",
} as const;
