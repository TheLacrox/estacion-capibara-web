export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const whatIsSS14Features: Feature[] = [
  {
    id: "station",
    title: "Estacion Espacial",
    description:
      "Una estacion orbital completa con sistemas de energia, atmosfera, gravedad y mas. Cada area tiene un proposito y cada sistema puede fallar de formas catastroficas.",
    icon: "Rocket",
  },
  {
    id: "roleplay",
    title: "Roleplay Inmersivo",
    description:
      "Elige entre 30+ roles unicos. Se capitan, medico, ingeniero, cientifico o incluso payaso. Cada rol tiene responsabilidades y herramientas unicas.",
    icon: "Theater",
  },
  {
    id: "chaos",
    title: "Caos Emergente",
    description:
      "Traidores, operativos nucleares, cambiaformas y mas amenazan la estacion. Nunca sabes quien es el enemigo ni que desastre viene. Cada ronda es unica.",
    icon: "Flame",
  },
];

export interface ServerFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export const serverFeatures: ServerFeature[] = [
  {
    id: "economy",
    title: "Economia con Spesos",
    subtitle: "Sistema Economico Completo",
    description:
      "Cada tripulante recibe una cuenta bancaria con Spesos. Gana salario cada 10 minutos, usa cajeros automaticos, compra en maquinas expendedoras y comercia con otros jugadores.",
    icon: "Coins",
    color: "#F1C40F",
  },
  {
    id: "objectives",
    title: "Objetivos de Estacion",
    subtitle: "Cooperacion o Consecuencias",
    description:
      "Cada turno, la estacion recibe 2-3 objetivos cooperativos. Si no se completan en 30 minutos, los salarios se congelan. Trabaja en equipo o sufre las consecuencias.",
    icon: "Target",
    color: "#E74C3C",
  },
  {
    id: "antagonists",
    title: "Antagonistas",
    subtitle: "El Enemigo Entre Nosotros",
    description:
      "Traidores infiltrados, operativos nucleares, cambiaformas, herejes y mas. Cada ronda puede tener amenazas diferentes que desafian a toda la tripulacion.",
    icon: "Skull",
    color: "#8E44AD",
  },
];
