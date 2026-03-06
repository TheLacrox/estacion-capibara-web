export interface Objective {
  id: string;
  name: string;
  department: string;
  departmentColor: string;
  target: string;
  description: string;
  icon: string;
}

export const objectives: Objective[] = [
  {
    id: "cargo-exports",
    name: "Exportaciones de Carga",
    department: "Carga",
    departmentColor: "#cb7a28",
    target: "50,000 creditos",
    description: "Ganar al menos 50,000 creditos en exportaciones netas de carga.",
    icon: "TrendingUp",
  },
  {
    id: "cargo-bounties",
    name: "Recompensas de Carga",
    department: "Carga",
    departmentColor: "#cb7a28",
    target: "20 recompensas",
    description: "Completar al menos 20 recompensas (bounties) de carga.",
    icon: "Award",
  },
  {
    id: "ore-processing",
    name: "Procesamiento de Mineral",
    department: "Carga",
    departmentColor: "#cb7a28",
    target: "30,000 unidades",
    description: "Procesar al menos 30,000 unidades de mineral en materiales.",
    icon: "Gem",
  },
  {
    id: "research-points",
    name: "Puntos de Investigacion",
    department: "Ciencia",
    departmentColor: "#d381c9",
    target: "200,000 puntos",
    description: "Acumular al menos 200,000 puntos de investigacion.",
    icon: "Microscope",
  },
  {
    id: "botany-harvest",
    name: "Cosecha de Botanica",
    department: "Civil",
    departmentColor: "#9fed58",
    target: "200 plantas",
    description: "Cosechar al menos 200 plantas de las bandejas de hidroponia.",
    icon: "Sprout",
  },
  {
    id: "medicine-production",
    name: "Produccion de Medicina",
    department: "Medico",
    departmentColor: "#52b4d9",
    target: "500 unidades",
    description: "Producir al menos 500 unidades de medicina en el ChemMaster.",
    icon: "Pill",
  },
  {
    id: "patient-recovery",
    name: "Recuperacion de Pacientes",
    department: "Medico",
    departmentColor: "#52b4d9",
    target: "30 pacientes",
    description: "Curar al menos 30 pacientes del estado critico.",
    icon: "HeartPulse",
  },
];
