export const DISCORD_URL = "https://discord.gg/xRsRcpmCVX";
export const LAST_CONTENT_UPDATE = "2026-07-25";
export const SS14_DOWNLOAD_URL = "https://spacestation14.com";
export const SS14_STEAM_URL = "https://store.steampowered.com/app/1255460/Space_Station_14/";
export const SERVER_NAME = "Estación Capibara";
export const SITE_URL = "https://estacioncapibara.com";

export const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Servidores", href: "#servidores" },
  { label: "¿Qué es SS14?", href: "#que-es-ss14" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Horario", href: "#horario" },
  { label: "Cómo Jugar", href: "#como-jugar" },
  { label: "Comunidad", href: "#comunidad" },
] as const;

export const WIKI_NAV_LINK = { label: "Wiki Estación", href: "/wiki/" } as const;
export const MONOLITH_WIKI_NAV_LINK = {
  label: "Wiki Monolith",
  href: "/wiki-monolith/",
} as const;

export const SECTION_IDS = {
  hero: "hero",
  servers: "servidores",
  whatIsSS14: "que-es-ss14",
  features: "caracteristicas",
  departments: "departamentos",
  schedule: "horario",
  howToPlay: "como-jugar",
  serverStatus: "servidor",
  community: "comunidad",
} as const;
