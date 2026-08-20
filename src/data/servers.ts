import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Coins,
  Crosshair,
  Eye,
  Lock,
  Orbit,
  Radiation,
  Radio,
  Rocket,
  ShieldHalf,
  UsersRound,
} from "lucide-react";

export type ServerId = "estacion" | "marines" | "scp" | "monolith";

export interface ServerDescriptor {
  id: ServerId;
  /** Top-level route segment: /estacion, /marines, /scp, /monolith */
  slug: string;
  name: string;
  /** Short label for hero panels and compact UI */
  shortName: string;
  tagline: string;
  descriptor: string;
  description: string;
  lineage: string;
  /** CSS var reference, e.g. "var(--color-hazard-yellow)" */
  accentVar: string;
  logo: string;
  /** Natural dimensions of the logo asset — width/height attrs reserve the
      aspect ratio before load so the hero doesn't shift (CLS). */
  logoWidth: number;
  logoHeight: number;
  /** Gameplay/lobby art used as the landing hero panel background (portrait) */
  heroImage: string;
  /** Wide variant of the same art, used behind each server page's hero */
  heroWide: string;
  wikiBasePath: string;
  wikiLabel: string;
  statusEndpoint: string;
  /** Whether the status proxy upstream is wired to a real endpoint yet;
      widgets skip fetching (and the 502 console noise) when false. */
  statusLive: boolean;
  /** Search term inside the SS14 launcher */
  searchTerm: string;
  features: readonly string[];
  featureIcons: readonly LucideIcon[];
  /** Env var the guide generator reads for this server's Resources root */
  repoEnvVar: string;
  /** Whether the server is shown across the site yet */
  live: boolean;
}

export const SERVERS: readonly ServerDescriptor[] = [
  {
    id: "estacion",
    slug: "estacion",
    name: "Estación Capibara",
    shortName: "Estación",
    tagline: "Roles, caos y cooperación en una estación espacial",
    descriptor: "La experiencia de estación",
    description:
      "El servidor principal de la comunidad: roles por departamentos, cooperación, antagonistas y eventos dentro de una estación espacial.",
    lineage: "Basado en Goob Station",
    accentVar: "var(--color-hazard-yellow)",
    logo: "/branding/logo.svg",
    logoWidth: 800,
    logoHeight: 800,
    heroImage: "/heroes/panel-estacion.webp",
    heroWide: "/heroes/bg-estacion.webp",
    wikiBasePath: "/wiki",
    wikiLabel: "Wiki Estación",
    statusEndpoint: "/api/status/estacion",
    statusLive: false,
    searchTerm: "Capibara",
    features: ["30+ trabajos", "8 departamentos", "Eventos comunitarios"],
    featureIcons: [Building2, UsersRound, Orbit],
    repoEnvVar: "ESTACION_RESOURCES_ROOT",
    live: true,
  },
  {
    id: "marines",
    slug: "marines",
    name: "Capibara Marines",
    shortName: "Marines",
    tagline: "Combate táctico contra xenomorfos al estilo Colonial Marines",
    descriptor: "Operaciones militares",
    description:
      "La edición en español de Colonial Marines Universe: escuadrones de marines, cadena de mando, xenomorfos y operaciones tácticas por rondas.",
    lineage: "Derivado de RMC-14 y CM-SS14",
    accentVar: "var(--color-marine-green)",
    logo: "/branding/marines-logo.webp",
    logoWidth: 539,
    logoHeight: 160,
    heroImage: "/heroes/panel-marines.webp",
    heroWide: "/heroes/bg-marines.webp",
    wikiBasePath: "/wiki-marines",
    wikiLabel: "Wiki Marines",
    statusEndpoint: "/api/status/marines",
    statusLive: true,
    searchTerm: "Capibara Marines",
    features: ["Combate táctico", "Marines vs xenomorfos", "Cadena de mando"],
    featureIcons: [Crosshair, ShieldHalf, Radio],
    repoEnvVar: "MARINES_RESOURCES_ROOT",
    live: true,
  },
  {
    id: "scp",
    slug: "scp",
    name: "Capibara SCP",
    shortName: "SCP",
    tagline: "Contención de anomalías en una instalación de la Fundación",
    descriptor: "Contención y anomalías",
    description:
      "La Fundación en español: contén anomalías SCP, investiga lo desconocido y sobrevive a las brechas de contención dentro de la instalación.",
    lineage: "Derivado de SCP: Project Fire (Fire Station)",
    accentVar: "var(--color-scp-purple)",
    logo: "/branding/logo.svg",
    logoWidth: 800,
    logoHeight: 800,
    heroImage: "/heroes/panel-scp.webp",
    heroWide: "/heroes/bg-scp.webp",
    wikiBasePath: "/wiki-scp",
    wikiLabel: "Wiki SCP",
    statusEndpoint: "/api/status/scp",
    statusLive: false,
    searchTerm: "Capibara SCP",
    features: ["Anomalías SCP", "Brechas de contención", "Roleplay de terror"],
    featureIcons: [Radiation, Lock, Eye],
    repoEnvVar: "SCP_RESOURCES_ROOT",
    live: true,
  },
  {
    id: "monolith",
    slug: "monolith",
    name: "Capibara Monolith",
    shortName: "Monolith",
    tagline: "Naves, comercio y facciones en el Sector Colossus",
    descriptor: "Frontera, naves y facciones",
    description:
      "La edición comunitaria en español de Monolith Station. Recorre el Sector Colossus con naves propias, comercio persistente, expediciones, facciones y artillería naval.",
    lineage: "Derivado de Monolith Station y Frontier Station 14",
    accentVar: "var(--color-neon-cyan)",
    logo: "/branding/monolith-logo.svg",
    logoWidth: 114,
    logoHeight: 57,
    heroImage: "/heroes/panel-monolith.webp",
    heroWide: "/heroes/bg-monolith.webp",
    wikiBasePath: "/wiki-monolith",
    wikiLabel: "Wiki Monolith",
    statusEndpoint: "/api/status/monolith",
    statusLive: true,
    searchTerm: "Capibara Monolith",
    features: ["Economía persistente", "Naves y expediciones", "Facciones y artillería"],
    featureIcons: [Coins, Rocket, Crosshair],
    repoEnvVar: "MONOLITH_RESOURCES_ROOT",
    live: true,
  },
] as const;

export const SERVER_BY_SLUG: Record<string, ServerDescriptor> =
  Object.fromEntries(SERVERS.map((server) => [server.slug, server]));

export const LIVE_SERVERS = SERVERS.filter((server) => server.live);
