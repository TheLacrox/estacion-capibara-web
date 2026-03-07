export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const whatIsSS14Features: Feature[] = [
  {
    id: "station",
    title: "Estación Espacial",
    description:
      "Una estación orbital completa con sistemas de energía, atmósfera, gravedad y más. Cada área tiene un propósito y cada sistema puede fallar de formas catastróficas.",
    icon: "Rocket",
  },
  {
    id: "roleplay",
    title: "Roleplay Inmersivo",
    description:
      "Elige entre 30+ roles únicos. Sé capitán, médico, ingeniero, científico o incluso payaso. Cada rol tiene responsabilidades y herramientas únicas.",
    icon: "Theater",
  },
  {
    id: "chaos",
    title: "Caos Emergente",
    description:
      "Traidores, operativos nucleares, cambiaformas y más amenazan la estación. Nunca sabes quién es el enemigo ni qué desastre viene. Cada ronda es única.",
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
    title: "Economía con Spesos",
    subtitle: "Sistema Económico Completo",
    description:
      "Cada tripulante recibe una cuenta bancaria con Spesos. Gana salario cada 10 minutos, usa cajeros automáticos, compra en máquinas expendedoras y comercia con otros jugadores.",
    icon: "Coins",
    color: "#F1C40F",
  },
  {
    id: "objectives",
    title: "Objetivos de Estación",
    subtitle: "Cooperación o Consecuencias",
    description:
      "Cada turno, la estación recibe 2-3 objetivos cooperativos. Si no se completan en 30 minutos, los salarios se congelan. Trabaja en equipo o sufre las consecuencias.",
    icon: "Target",
    color: "#E74C3C",
  },
  {
    id: "antagonists",
    title: "Antagonistas",
    subtitle: "El Enemigo Entre Nosotros",
    description:
      "Traidores infiltrados, operativos nucleares, cambiaformas, herejes y más. Cada ronda puede tener amenazas diferentes que desafían a toda la tripulación.",
    icon: "Skull",
    color: "#8E44AD",
  },
];
