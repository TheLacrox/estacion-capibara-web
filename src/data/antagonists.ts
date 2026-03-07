export interface Antagonist {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export const antagonists: Antagonist[] = [
  {
    id: "traitor",
    name: "Traidor",
    description:
      "Un tripulante con objetivos secretos del Sindicato. Usa equipamiento oculto para completar misiones sin ser descubierto.",
    color: "#E74C3C",
    icon: "Eye",
  },
  {
    id: "nukeops",
    name: "Operativos Nucleares",
    description:
      "Un equipo del Sindicato que asalta la estación con armamento pesado. Su objetivo: detonar la ojiva nuclear.",
    color: "#FF6B35",
    icon: "Bomb",
  },
  {
    id: "changeling",
    name: "Cambiaformas",
    description:
      "Una criatura alienígena que puede absorber y copiar la apariencia de sus víctimas. Puede ser cualquiera.",
    color: "#27AE60",
    icon: "Dna",
  },
  {
    id: "heretic",
    name: "Hereje",
    description:
      "Un seguidor de fuerzas oscuras que realiza rituales prohibidos para obtener poderes sobrenaturales.",
    color: "#8E44AD",
    icon: "Pentagram",
  },
  {
    id: "shadowling",
    name: "Sombra",
    description:
      "Una entidad de la oscuridad que convierte tripulantes en sus sirvientes. La luz es su debilidad.",
    color: "#2C3E50",
    icon: "Eclipse",
  },
  {
    id: "zombie",
    name: "Zombie",
    description:
      "Un brote zombi amenaza la estación. Los infectados se convierten y atacan a los vivos. Sobrevive o únete a la horda.",
    color: "#1ABC9C",
    icon: "Skull",
  },
  {
    id: "revolutionary",
    name: "Revolucionario",
    description:
      "Líderes revolucionarios buscan derrocar al comando. Convencen tripulantes de unirse a su causa violenta.",
    color: "#E67E22",
    icon: "Flag",
  },
];
