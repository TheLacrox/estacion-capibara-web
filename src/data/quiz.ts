export type DepartmentId =
  | "command"
  | "security"
  | "engineering"
  | "medical"
  | "science"
  | "cargo"
  | "service"
  | "civilian";

export interface QuizOption {
  text: string;
  scores: Partial<Record<DepartmentId, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  department: DepartmentId;
  title: string;
  role: string;
  description: string;
  color: string;
  wikiLink: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "La estación está en llamas. ¿Qué haces?",
    options: [
      {
        text: "Tomo el mando y coordino la evacuación",
        scores: { command: 3, security: 1 },
      },
      {
        text: "Agarro un extintor y voy directo al fuego",
        scores: { engineering: 3, cargo: 1 },
      },
      {
        text: "Corro a buscar heridos para estabilizarlos",
        scores: { medical: 3 },
      },
      {
        text: "Investigo qué causó el incendio",
        scores: { science: 2, security: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "Es viernes por la noche en la estación. ¿Dónde estás?",
    options: [
      {
        text: "En el bar, sirviendo tragos y escuchando chismes",
        scores: { service: 3, civilian: 1 },
      },
      {
        text: "En el puente de mando, revisando reportes",
        scores: { command: 3 },
      },
      {
        text: "En el taller, arreglando algo que nadie pidió",
        scores: { engineering: 3 },
      },
      {
        text: "Explorando los restos de una nave abandonada",
        scores: { cargo: 3, science: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "Encuentras un paquete sospechoso en el pasillo. ¿Qué haces?",
    options: [
      {
        text: "Lo reporto a seguridad inmediatamente",
        scores: { security: 3, command: 1 },
      },
      {
        text: "Lo llevo al laboratorio para analizarlo",
        scores: { science: 3 },
      },
      {
        text: "Lo abro. La curiosidad puede más que yo",
        scores: { civilian: 3, cargo: 1 },
      },
      {
        text: "Lo escaneo con equipo médico por si es peligroso",
        scores: { medical: 2, science: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "¿Cómo describirían tus amigos tu rol en el grupo?",
    options: [
      {
        text: "El líder — siempre organizo todo",
        scores: { command: 3 },
      },
      {
        text: "El que arregla los problemas de todos",
        scores: { engineering: 2, medical: 1 },
      },
      {
        text: "El gracioso — sin mí no hay ambiente",
        scores: { civilian: 3, service: 1 },
      },
      {
        text: "El estratega — siempre tengo un plan",
        scores: { science: 2, security: 1 },
      },
    ],
  },
  {
    id: 5,
    question: "Un compañero cae herido frente a ti. Tu reacción:",
    options: [
      {
        text: "Le doy primeros auxilios de inmediato",
        scores: { medical: 3 },
      },
      {
        text: "Busco al culpable y lo persigo",
        scores: { security: 3 },
      },
      {
        text: "Pido ayuda por radio y aseguro la zona",
        scores: { command: 2, engineering: 1 },
      },
      {
        text: "Improviso algo con lo que tenga a mano",
        scores: { cargo: 2, service: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "Te dan acceso libre a un laboratorio vacío. ¿Qué haces?",
    options: [
      {
        text: "Experimento con químicos a ver qué pasa",
        scores: { science: 3, medical: 1 },
      },
      {
        text: "Construyo algo útil para la estación",
        scores: { engineering: 3 },
      },
      {
        text: "Lo convierto en un restaurante improvisado",
        scores: { service: 3, civilian: 1 },
      },
      {
        text: "Catalogo todo el inventario y lo organizo",
        scores: { cargo: 3, command: 1 },
      },
    ],
  },
  {
    id: 7,
    question: "¿Qué es lo que más valoras en un juego multijugador?",
    options: [
      {
        text: "Trabajar en equipo hacia un objetivo común",
        scores: { engineering: 2, medical: 1, cargo: 1 },
      },
      {
        text: "Tener poder de decisión sobre lo que pasa",
        scores: { command: 3, security: 1 },
      },
      {
        text: "Descubrir cosas nuevas y experimentar",
        scores: { science: 3 },
      },
      {
        text: "Crear momentos divertidos e impredecibles",
        scores: { civilian: 3, service: 1 },
      },
    ],
  },
];

export const QUIZ_RESULTS: QuizResult[] = [
  {
    department: "command",
    title: "Eres un Líder Nato",
    role: "Capitán",
    description:
      "Tienes madera de líder. Te gusta tomar decisiones, coordinar equipos y mantener el control cuando todo se desmorona. En la estación, serías la voz que guía a la tripulación hacia la supervivencia — o hacia una muerte gloriosa.",
    color: "#5b97f0",
    wikiLink: "/wiki/jobs",
  },
  {
    department: "security",
    title: "Eres el Brazo de la Ley",
    role: "Oficial de Seguridad",
    description:
      "Tienes un fuerte sentido de la justicia y no te quedas quieto cuando ves algo mal. En la estación, serías quien mantiene el orden, investiga crímenes y protege a los inocentes — aunque a veces la línea entre héroe y villano se difumina.",
    color: "#CB0000",
    wikiLink: "/wiki/jobs",
  },
  {
    department: "engineering",
    title: "Eres un Ingeniero de Corazón",
    role: "Ingeniero de Estación",
    description:
      "Eres práctico, resolutivo y te encanta arreglar cosas. En la estación, serías quien mantiene las luces encendidas, repara los daños y evita que la tripulación muera por despresurización. Sin ti, nada funciona.",
    color: "#f39c12",
    wikiLink: "/wiki/engineering",
  },
  {
    department: "medical",
    title: "Eres un Salvavidas",
    role: "Doctor",
    description:
      "Te preocupas por los demás y actúas rápido en emergencias. En la estación, serías quien cura heridas, produce medicinas y revive a los caídos. Cuando el caos explota, tú eres la diferencia entre la vida y la muerte.",
    color: "#52b4d9",
    wikiLink: "/wiki/medical",
  },
  {
    department: "science",
    title: "Eres un Científico Loco",
    role: "Científico",
    description:
      "La curiosidad te mueve. Siempre quieres saber cómo funcionan las cosas y no le tienes miedo a experimentar. En la estación, serías quien desbloquea tecnologías avanzadas — y ocasionalmente causa una explosión 'accidental'.",
    color: "#d381c9",
    wikiLink: "/wiki/science",
  },
  {
    department: "cargo",
    title: "Eres un Aventurero Logístico",
    role: "Especialista de Salvamento",
    description:
      "Te gusta explorar, recolectar y asegurarte de que nadie se quede sin recursos. En la estación, serías quien gestiona suministros, sale a misiones de salvamento y siempre tiene lo que se necesita en el momento justo.",
    color: "#cb7a28",
    wikiLink: "/wiki/cargo",
  },
  {
    department: "service",
    title: "Eres el Alma de la Fiesta",
    role: "Barman",
    description:
      "Sin ti, la estación sería un lugar gris y aburrido. Te encanta socializar, crear ambiente y asegurarte de que todos la pasen bien. En la estación, serías quien sirve tragos, prepara comida y mantiene la moral alta.",
    color: "#9fed58",
    wikiLink: "/wiki/jobs",
  },
  {
    department: "civilian",
    title: "Eres un Agente del Caos",
    role: "Payaso",
    description:
      "Impredecible, creativo y siempre buscando la siguiente aventura. No sigues las reglas convencionales y eso te hace peligrosamente divertido. En la estación, serías el payaso, el mimo o ese pasajero que termina en el centro de cada desastre.",
    color: "#888888",
    wikiLink: "/wiki/jobs",
  },
];

export function calculateResult(
  scores: Record<DepartmentId, number>
): QuizResult {
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const topDept = sorted[0][0] as DepartmentId;
  return (
    QUIZ_RESULTS.find((r) => r.department === topDept) ?? QUIZ_RESULTS[0]
  );
}
