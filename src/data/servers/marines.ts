import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Crosshair,
  Crown,
  Heart,
  LifeBuoy,
  Package,
  Radio,
  Shield,
  Target,
  Wrench,
} from "lucide-react";
import { marinesGeneratedDepartments } from "@/data/marines-departments";
import type {
  ServerPageFeature,
  ShowcaseDepartment,
} from "@/components/server/types";

export const marinesFeatures: ServerPageFeature[] = [
  {
    id: "combat",
    title: "Marines vs Xenomorfos",
    subtitle: "Combate asimétrico",
    description:
      "Cada operación enfrenta a un pelotón de marines coloniales contra una colmena de xenomorfos en crecimiento. Dos bandos, dos formas de jugar completamente distintas.",
    icon: Crosshair,
    color: "var(--color-marine-green)",
    wikiHref: "/wiki-marines/rmc14/",
    wikiLabel: "Guía Colonial Marines",
  },
  {
    id: "command",
    title: "Escuadrones y cadena de mando",
    subtitle: "Disciplina militar",
    description:
      "Escuadrones Alpha, Bravo, Charlie y Delta con líderes, especialistas y radios dedicadas. La coordinación y las órdenes importan tanto como la puntería.",
    icon: Radio,
    color: "#5b97f0",
  },
  {
    id: "xenos",
    title: "Juega como xenomorfo",
    subtitle: "La colmena",
    description:
      "Evoluciona de larva a castas especializadas: corredores, centinelas, defensores y la Reina. Coordina la colmena para cazar a los marines y expandir tu territorio.",
    icon: Bug,
    color: "#8E44AD",
  },
  {
    id: "rounds",
    title: "Operaciones por rondas",
    subtitle: "Objetivos claros",
    description:
      "Cada ronda es una operación: despliegue, reconocimiento, contacto y evacuación o victoria. Partidas intensas con principio y fin definidos.",
    icon: Target,
    color: "var(--color-hazard-orange)",
  },
];

export const marinesAmbientParagraphs = [
  "Cada ronda es una operación completa: el pelotón se equipa en la UNS Almayer, desciende en la dropship y toma contacto con una colonia silenciada. Lo que encuentra abajo nunca es bueno.",
  "La colmena crece mientras los marines discuten el plan. Cada baja alimenta al enemigo, cada minuto perdido lo hace más fuerte. La coordinación por radio, las líneas de suministro y el fuego de apoyo deciden la operación.",
  "Y si prefieres el otro bando: evoluciona de larva a Ravager y enséñales a los humanos por qué no deberían haber venido.",
];

export const marinesGalleryImages = [
  {
    src: "/gallery/marines-1.webp",
    alt: "Arte oficial de RMC-14 con un marine en un planeta hostil",
    caption: "RMC-14",
  },
  {
    src: "/gallery/marines-2.webp",
    alt: "Hangar con la dropship de los marines coloniales",
    caption: "La dropship",
  },
  {
    src: "/gallery/marines-3.webp",
    alt: "Un médico de campaña huye de un Ravager en una cueva",
    caption: "Huyendo del Ravager",
  },
];

const DEPARTMENT_OVERLAY: Record<string, { icon: LucideIcon; order: number }> = {
  CMCommand: { icon: Crown, order: 0 },
  CMSquad: { icon: Crosshair, order: 1 },
  CMMedbay: { icon: Heart, order: 2 },
  CMEngineering: { icon: Wrench, order: 3 },
  CMRequisitions: { icon: Package, order: 4 },
  CMMilitaryPolice: { icon: Shield, order: 5 },
  CMAuxiliarySupport: { icon: Radio, order: 6 },
  CMSurvivor: { icon: LifeBuoy, order: 7 },
};

export const marinesShowcaseDepartments: ShowcaseDepartment[] =
  marinesGeneratedDepartments
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
