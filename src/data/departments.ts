export interface Job {
  id: string;
  name: string;
  startingBalance: number;
  salary: number;
}

export interface Department {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  jobs: Job[];
}

export const departments: Department[] = [
  {
    id: "command",
    name: "Comando",
    color: "#5b97f0",
    icon: "Crown",
    description:
      "Los lideres de la estacion. Coordinan todos los departamentos y toman decisiones criticas para la supervivencia de la tripulacion.",
    jobs: [
      { id: "captain", name: "Capitan", startingBalance: 500, salary: 200 },
      { id: "hop", name: "Jefe de Personal", startingBalance: 400, salary: 150 },
      { id: "ce", name: "Ingeniero Jefe", startingBalance: 400, salary: 150 },
      { id: "cmo", name: "Jefe Medico", startingBalance: 400, salary: 150 },
      { id: "rd", name: "Director de Investigacion", startingBalance: 400, salary: 150 },
      { id: "hos", name: "Jefe de Seguridad", startingBalance: 400, salary: 150 },
      { id: "qm", name: "Quartelmaestre", startingBalance: 350, salary: 130 },
    ],
  },
  {
    id: "security",
    name: "Seguridad",
    color: "#CB0000",
    icon: "Shield",
    description:
      "Mantienen el orden en la estacion. Investigan crimenes, detienen amenazas y protegen a la tripulacion.",
    jobs: [
      { id: "warden", name: "Custodio", startingBalance: 250, salary: 100 },
      { id: "detective", name: "Detective", startingBalance: 200, salary: 90 },
      { id: "secoff", name: "Oficial de Seguridad", startingBalance: 200, salary: 90 },
    ],
  },
  {
    id: "engineering",
    name: "Ingenieria",
    color: "#f39c12",
    icon: "Wrench",
    description:
      "Mantienen la estacion funcionando. Reparan danos, gestionan la energia y controlan la atmosfera.",
    jobs: [
      { id: "engineer", name: "Ingeniero de Estacion", startingBalance: 200, salary: 80 },
      { id: "atmos", name: "Tecnico Atmosferico", startingBalance: 200, salary: 80 },
    ],
  },
  {
    id: "medical",
    name: "Medico",
    color: "#52b4d9",
    icon: "Heart",
    description:
      "Cuidan la salud de la tripulacion. Tratan heridas, producen medicinas y reviven a los caidos.",
    jobs: [
      { id: "doctor", name: "Doctor", startingBalance: 200, salary: 80 },
      { id: "chemist", name: "Quimico", startingBalance: 200, salary: 80 },
      { id: "paramedic", name: "Paramedico", startingBalance: 200, salary: 80 },
    ],
  },
  {
    id: "science",
    name: "Ciencia",
    color: "#d381c9",
    icon: "FlaskConical",
    description:
      "Investigan nuevas tecnologias. Desbloquean equipamiento avanzado y experimentan con lo desconocido.",
    jobs: [
      { id: "scientist", name: "Cientifico", startingBalance: 200, salary: 80 },
    ],
  },
  {
    id: "cargo",
    name: "Carga",
    color: "#cb7a28",
    icon: "Package",
    description:
      "Gestionan los recursos de la estacion. Ordenan suministros, completan recompensas y rescatan tesoros del espacio.",
    jobs: [
      { id: "cargotech", name: "Tecnico de Carga", startingBalance: 150, salary: 70 },
      { id: "salvage", name: "Especialista de Salvamento", startingBalance: 150, salary: 70 },
    ],
  },
  {
    id: "service",
    name: "Servicio",
    color: "#9fed58",
    icon: "UtensilsCrossed",
    description:
      "Mantienen la moral de la tripulacion. Preparan comida, sirven bebidas y cuidan la estacion.",
    jobs: [
      { id: "bartender", name: "Barman", startingBalance: 200, salary: 60 },
      { id: "chef", name: "Chef", startingBalance: 200, salary: 60 },
      { id: "botanist", name: "Botanico", startingBalance: 150, salary: 60 },
      { id: "janitor", name: "Conserje", startingBalance: 150, salary: 50 },
      { id: "chaplain", name: "Capellan", startingBalance: 150, salary: 50 },
      { id: "lawyer", name: "Abogado", startingBalance: 200, salary: 70 },
      { id: "serviceworker", name: "Trabajador de Servicio", startingBalance: 150, salary: 50 },
      { id: "reporter", name: "Reportero", startingBalance: 150, salary: 50 },
      { id: "librarian", name: "Bibliotecario", startingBalance: 100, salary: 40 },
    ],
  },
  {
    id: "civilian",
    name: "Civil",
    color: "#888888",
    icon: "Users",
    description:
      "Ciudadanos de la estacion. Desde el entretenimiento del payaso hasta los pasajeros buscando aventura.",
    jobs: [
      { id: "clown", name: "Payaso", startingBalance: 50, salary: 30 },
      { id: "mime", name: "Mimo", startingBalance: 50, salary: 30 },
      { id: "musician", name: "Musico", startingBalance: 100, salary: 40 },
      { id: "boxer", name: "Boxeador", startingBalance: 100, salary: 40 },
      { id: "passenger", name: "Pasajero", startingBalance: 50, salary: 20 },
    ],
  },
];
