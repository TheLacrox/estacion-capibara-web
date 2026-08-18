import type { LucideIcon } from "lucide-react";
import {
  Crosshair,
  Crown,
  Eye,
  FlaskConical,
  Heart,
  Lock,
  Radiation,
  Shield,
  ShieldAlert,
  Users,
  Wrench,
} from "lucide-react";
import { scpGeneratedDepartments } from "@/data/scp-departments";
import type {
  ServerPageFeature,
  ShowcaseDepartment,
} from "@/components/server/types";

export const scpFeatures: ServerPageFeature[] = [
  {
    id: "anomalies",
    title: "Anomalías SCP jugables",
    subtitle: "Sé la pesadilla",
    description:
      "SCP-173, SCP-096, SCP-106 y más. Juega como el personal que los contiene… o como la anomalía que intenta escapar de la instalación.",
    icon: Radiation,
    color: "var(--color-scp-purple)",
    wikiHref: "/wiki-scp/scp-glossary/",
    wikiLabel: "Glosario SCP",
  },
  {
    id: "containment",
    title: "Protocolos de contención",
    subtitle: "Asegurar. Contener. Proteger.",
    description:
      "Brechas de contención, clases de objetos y procedimientos especiales. Cuando algo sale mal, toda la instalación entra en alerta.",
    icon: Lock,
    color: "#E74C3C",
  },
  {
    id: "fear",
    title: "Sistema de miedo",
    subtitle: "El terror es mecánica",
    description:
      "Tu personaje siente miedo: presenciar anomalías y muertes afecta a su estado y a lo que puede hacer. Mantén la calma o pierde el control.",
    icon: Eye,
    color: "#5D7B9A",
    wikiHref: "/wiki-scp/scp-fear/",
    wikiLabel: "Sistema de miedo",
  },
  {
    id: "research",
    title: "Investigación de la Fundación",
    subtitle: "Ciencia prohibida",
    description:
      "Experimenta con anomalías, documenta sus efectos y desbloquea tecnología. La clase D pone los cuerpos; tú pones las hipótesis.",
    icon: FlaskConical,
    color: "#52b4d9",
    wikiHref: "/wiki-scp/scp-research/",
    wikiLabel: "Guía de investigación",
  },
];

export const scpAmbientParagraphs = [
  "La instalación se hunde varios niveles bajo tierra: laboratorios, celdas de contención y pasillos que nadie quiere patrullar de noche. Arriba, el mundo no sabe que existes; abajo, las anomalías esperan un descuido.",
  "Cuando suena la alarma de brecha todo cambia: la clase D corre, el personal científico sella las puertas y las unidades de contención avanzan hacia el problema mientras todos los demás se alejan de él.",
  "El sistema de miedo hace el resto: presenciar lo imposible afecta a tu personaje, y mantener la cordura es parte del trabajo.",
];

export const scpGalleryImages = [
  {
    src: "/gallery/scp-1.webp",
    alt: "Figura anómala entre árboles iluminada en rojo",
    caption: "Avistamiento anómalo",
  },
  {
    src: "/gallery/scp-2.webp",
    alt: "Metraje de una cámara de contención con manchas de sangre",
    caption: "Metraje de contención",
  },
  {
    src: "/gallery/scp-3.webp",
    alt: "Logo de la Fundación SCP en una cinta VHS",
    caption: "La Fundación",
  },
];

const DEPARTMENT_OVERLAY: Record<string, { icon: LucideIcon; order: number }> = {
  Administration: { icon: Crown, order: 0 },
  ScientificService: { icon: FlaskConical, order: 1 },
  MedicalService: { icon: Heart, order: 2 },
  EngineeringTechnicalService: { icon: Wrench, order: 3 },
  InternalSecurity: { icon: Shield, order: 4 },
  HeavyContainmentSecurityService: { icon: ShieldAlert, order: 5 },
  MobileTaskForce: { icon: Crosshair, order: 6 },
  LowAccessPersonnel: { icon: Users, order: 7 },
  SCP: { icon: Radiation, order: 8 },
};

export const scpShowcaseDepartments: ShowcaseDepartment[] =
  scpGeneratedDepartments
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
