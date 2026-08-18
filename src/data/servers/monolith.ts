import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Coins,
  Crosshair,
  Crown,
  Flag,
  Heart,
  Orbit,
  Rocket,
  Shield,
  Skull,
  Users,
} from "lucide-react";
import { monolithGeneratedDepartments } from "@/data/monolith-departments";
import type {
  ServerPageFeature,
  ShowcaseDepartment,
} from "@/components/server/types";

export const monolithFeatures: ServerPageFeature[] = [
  {
    id: "economy",
    title: "Economía persistente",
    subtitle: "Tus Spessos te esperan",
    description:
      "Tu dinero persiste entre rondas. Completa recompensas, comercia entre estaciones y ahorra para tu propia nave.",
    icon: Coins,
    color: "var(--color-hazard-yellow)",
    wikiHref: "/wiki-monolith/economy/",
    wikiLabel: "Economía Monolith",
  },
  {
    id: "ships",
    title: "Naves y expediciones",
    subtitle: "Tu nave, tus reglas",
    description:
      "Compra naves, recluta tripulación y lánzate a expediciones por el Sector Colossus. Salvamento, exploración y comercio te esperan.",
    icon: Rocket,
    color: "var(--color-neon-cyan)",
    wikiHref: "/wiki-monolith/nf14/",
    wikiLabel: "Naves y frontera",
  },
  {
    id: "factions",
    title: "Facciones y artillería naval",
    subtitle: "Guerra en el sector",
    description:
      "TSF, Phaethon Dynasty, USSP y contratistas privados luchan por el control. Combate naval con artillería real entre naves.",
    icon: Crosshair,
    color: "#E74C3C",
    wikiHref: "/wiki-monolith/factions/",
    wikiLabel: "Facciones",
  },
  {
    id: "sector",
    title: "Sector Colossus",
    subtitle: "Un mundo abierto espacial",
    description:
      "Un sector completo con estaciones, puestos comerciales, ruinas y peligros. La historia del sector avanza con cada ronda.",
    icon: Orbit,
    color: "var(--color-nebula-purple)",
    wikiHref: "/wiki-monolith/basic-lore/",
    wikiLabel: "Historia del sector",
  },
];

export const monolithAmbientParagraphs = [
  "Colossus Central es el corazón del sector: un puerto donde los colonos reposan naves, cierran contratos y presumen de cargamento. Desde ahí, cada tripulación traza su propia ruta.",
  "Puedes pasar la tarde salvando chatarra, montar una farmacia orbital, escoltar convoyes de la TSF o unirte a la Phaethon Dynasty y quemar todo lo anterior. El dinero persiste entre rondas; tus enemigos también.",
  "Cuando dos naves se cruzan en el vacío con las bodegas llenas, la artillería decide quién llega a puerto.",
];

export const monolithGalleryImages = [
  {
    src: "/gallery/monolith-1.webp",
    alt: "Nave Reclaimer junto a una detonación nuclear en el espacio",
    caption: "Operación Reclaimer",
  },
  {
    src: "/gallery/monolith-2.webp",
    alt: "Terminal espacial del sector Colossus",
    caption: "Terminal Station",
  },
  {
    src: "/gallery/monolith-3.webp",
    alt: "Ilustración de un rescate médico entre asteroides",
    caption: "Rescate en el vacío",
  },
];

const DEPARTMENT_OVERLAY: Record<string, { icon: LucideIcon; order: number }> = {
  Frontier: { icon: Rocket, order: 0 },
  Command: { icon: Crown, order: 1 },
  Security: { icon: Shield, order: 2 },
  Medical: { icon: Heart, order: 3 },
  Civilian: { icon: Users, order: 4 },
  Antag: { icon: Skull, order: 5 },
  UnionOfSovietSocialistPlanets: { icon: Flag, order: 6 },
  ViperGroup: { icon: Crosshair, order: 7 },
  PMC: { icon: Briefcase, order: 8 },
};

export const monolithShowcaseDepartments: ShowcaseDepartment[] =
  monolithGeneratedDepartments
    .filter((department) => DEPARTMENT_OVERLAY[department.id])
    .sort(
      (left, right) =>
        DEPARTMENT_OVERLAY[left.id].order - DEPARTMENT_OVERLAY[right.id].order
    )
    .map((department) => ({
      id: department.id,
      name: department.name,
      color: department.color,
      description: department.description,
      icon: DEPARTMENT_OVERLAY[department.id].icon,
      jobs: department.jobs,
    }));
