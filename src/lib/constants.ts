export const DISCORD_URL = "https://discord.gg/xRsRcpmCVX";
export const SS14_DOWNLOAD_URL = "https://spacestation14.com";
export const SERVER_NAME = "Estación Capibara";
export const SITE_URL = "https://estacioncapibara.com";

export const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "¿Qué es SS14?", href: "#que-es-ss14" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Departamentos", href: "#departamentos" },
  { label: "Horario", href: "#horario" },
  { label: "Cómo Jugar", href: "#como-jugar" },
  { label: "Servidor", href: "#servidor" },
  { label: "Comunidad", href: "#comunidad" },
] as const;

export const WIKI_NAV_LINK = { label: "Wiki", href: "/wiki" } as const;

export const SECTION_IDS = {
  hero: "hero",
  whatIsSS14: "que-es-ss14",
  features: "caracteristicas",
  departments: "departamentos",
  schedule: "horario",
  howToPlay: "como-jugar",
  serverStatus: "servidor",
  community: "comunidad",
} as const;
