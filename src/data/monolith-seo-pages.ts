export interface MonolithSeoSection {
  title: string;
  paragraphs: string[];
  points?: string[];
}

export interface MonolithSeoPageData {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  sections: MonolithSeoSection[];
  faqs: { question: string; answer: string }[];
  wikiLinks: { label: string; href: string }[];
  relatedPages: { label: string; href: string; description: string }[];
}

export const MONOLITH_SPANISH_PAGE: MonolithSeoPageData = {
  slug: "monolith-station-en-espanol",
  title: "Monolith Station en Español: Capibara Monolith",
  subtitle:
    "Conoce la edición comunitaria en español de Monolith Station: un servidor separado de Estación Capibara, ambientado en el Sector Colossus y centrado en naves, economía persistente, expediciones y facciones.",
  metaTitle: "Monolith Station en Español | Capibara Monolith SS14",
  metaDescription:
    "Descubre Capibara Monolith, la edición comunitaria en español de Monolith Station para SS14: naves, economía persistente, expediciones, facciones y wiki en español.",
  eyebrow: "CAPIBARA MONOLITH",
  sections: [
    {
      title: "¿Qué es Capibara Monolith?",
      paragraphs: [
        "Capibara Monolith es un servidor de Space Station 14 de la comunidad Capibara y una traducción comunitaria al español de Monolith Station. Es un servidor distinto de Estación Capibara: comparte comunidad, pero utiliza otra base de juego, otro escenario y su propia wiki.",
        "Monolith Station deriva de Frontier Station 14 y traslada el foco desde una única estación hacia un sector con naves, puestos, expediciones y organizaciones que compiten por recursos e influencia.",
      ],
      points: [
        "Servidor y wiki independientes de Estación Capibara",
        "Contenido y soporte comunitario en español",
        "Puede conservar cadenas en inglés cuando la traducción aún no existe",
      ],
    },
    {
      title: "Sector Colossus y El Monolith",
      paragraphs: [
        "La historia transcurre en el Sector Colossus, afectado por una región anómala conocida como El Monolith. La caída de Nanotrasen y la fragmentación del Syndicate dejaron un territorio disputado por nuevas potencias.",
        "La TSF y el PDV mantienen un conflicto abierto, mientras facciones menores, mercenarios, comerciantes y tripulaciones independientes intentan sobrevivir y prosperar. Este contexto sostiene el roleplay de facciones y la exploración del sector.",
      ],
    },
    {
      title: "Una experiencia distinta de SS14",
      paragraphs: [
        "En lugar de limitar toda la ronda a un solo complejo, las tripulaciones pueden operar naves, viajar entre localizaciones y participar en una economía persistente. Las expediciones, el comercio, la minería y la artillería naval conectan los trabajos de cada jugador con el estado del sector.",
        "La wiki de Capibara Monolith reúne las guías traducidas del servidor sobre empleos, naves, medicina, química, economía, expediciones, facciones, reglas y sistemas de combate.",
      ],
      points: [
        "Naves pilotables y sistemas de artillería",
        "Economía y comercio persistentes",
        "Expediciones, minería y recuperación de recursos",
        "Facciones, diplomacia y lore del Sector Colossus",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Capibara Monolith es el servidor oficial de Monolith Station?",
      answer:
        "No. Es una edición comunitaria en español mantenida por la comunidad Capibara. Se basa en Monolith Station, pero no representa al servidor oficial del proyecto original.",
    },
    {
      question: "¿Es un modo de juego de Estación Capibara?",
      answer:
        "No. Capibara Monolith y Estación Capibara son servidores separados. Comparten comunidad y soporte en español, pero tienen bases de juego, contenidos y wikis diferentes.",
    },
    {
      question: "¿Todo el contenido está traducido al español?",
      answer:
        "El servidor incluye traducciones y guías en español, pero pueden quedar textos en inglés cuando una cadena todavía no se ha traducido. La traducción es un trabajo comunitario continuo.",
    },
    {
      question: "¿Dónde están las guías de Capibara Monolith?",
      answer:
        "La Wiki Monolith está disponible en estacioncapibara.com/wiki-monolith/ y contiene guías independientes de la wiki de Estación Capibara.",
    },
  ],
  wikiLinks: [
    { label: "Abrir Wiki Monolith", href: "/wiki-monolith/" },
    { label: "Introducción a New Frontier", href: "/wiki-monolith/nf14/" },
    { label: "Economía", href: "/wiki-monolith/economy/" },
    { label: "Facciones", href: "/wiki-monolith/factions/" },
    { label: "Sistemas de armas", href: "/wiki-monolith/weapons-systems/" },
  ],
  relatedPages: [
    {
      label: "Frontier Station 14 en español",
      href: "/frontier-station-14-en-espanol/",
      description: "Cómo se relacionan Frontier, Monolith y la edición de Capibara.",
    },
    {
      label: "Roleplay espacial con naves",
      href: "/juego-roleplay-espacial-con-naves/",
      description: "Naves, oficios, economía y exploración en un sandbox multijugador.",
    },
    {
      label: "¿Qué es Space Station 14?",
      href: "/que-es-space-station-14/",
      description: "Introducción general a SS14, sus roles y sus sistemas.",
    },
  ],
};

export const FRONTIER_SPANISH_PAGE: MonolithSeoPageData = {
  slug: "frontier-station-14-en-espanol",
  title: "Frontier Station 14 en Español y Capibara Monolith",
  subtitle:
    "Descubre el estilo Frontier de Space Station 14: tripulaciones con naves propias, expediciones y una economía que conecta todo un sector.",
  metaTitle: "Frontier Station 14 en Español | Guía Capibara Monolith",
  metaDescription:
    "Guía en español del estilo Frontier Station 14 y su relación con Capibara Monolith: naves propias, expediciones, economía persistente y facciones en SS14.",
  eyebrow: "FRONTERA EN SS14",
  sections: [
    {
      title: "¿Qué cambia en una experiencia Frontier?",
      paragraphs: [
        "Frontier Station 14 adapta los sistemas de Space Station 14 a una frontera abierta. Las tripulaciones no dependen únicamente de una gran estación: pueden adquirir y operar naves, aceptar trabajos, explorar localizaciones y transportar recursos.",
        "Monolith Station se construye sobre esa base y añade su propio escenario, facciones, lore y sistemas. Capibara Monolith traduce esa experiencia para la comunidad hispanohablante.",
      ],
      points: [
        "Tripulaciones y naves con objetivos propios",
        "Exploración de un sector en lugar de una sola estación",
        "Trabajos conectados por comercio y logística",
      ],
    },
    {
      title: "Naves, expediciones y economía",
      paragraphs: [
        "Una nave necesita pilotos, técnicos y especialistas capaces de mantener energía, atmósfera, navegación y armamento. Las expediciones permiten recuperar materiales y bienes que después circulan por el mercado del sector.",
        "La economía persistente da continuidad a esos esfuerzos: el comercio, la minería y los contratos tienen un peso mayor que en una ronda convencional centrada exclusivamente en sobrevivir dentro de una estación.",
      ],
    },
    {
      title: "La versión de Capibara",
      paragraphs: [
        "Capibara Monolith no es un servidor oficial de Frontier Station ni de Monolith Station. Es un servidor comunitario separado, con identidad Capibara, recursos traducidos al español y una wiki generada a partir de sus propios datos de juego.",
        "Algunas cadenas todavía pueden aparecer en inglés. La wiki permite consultar de antemano trabajos, reglas, economía, medicina, química, naves y facciones.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Frontier Station 14 es un juego separado?",
      answer:
        "Es una variante y proyecto derivado de Space Station 14 que reorganiza la experiencia alrededor de una frontera con naves, expediciones y economía. Monolith Station se basa a su vez en esa línea de desarrollo.",
    },
    {
      question: "¿Capibara Monolith usa contenido de Frontier Station 14?",
      answer:
        "Sí. El repositorio incluye sistemas y guías derivados de New Frontier junto con contenido propio de Monolith, como facciones, economía, artillería y lore del Sector Colossus.",
    },
    {
      question: "¿Hay guías en español para empezar?",
      answer:
        "Sí. La Wiki Monolith contiene una introducción a New Frontier, guías de trabajos, naves, expediciones, economía, combate, medicina y reglas.",
    },
  ],
  wikiLinks: [
    { label: "Guía de New Frontier", href: "/wiki-monolith/nf14/" },
    { label: "Cómo pilotar", href: "/wiki-monolith/piloting/" },
    { label: "Expediciones", href: "/wiki-monolith/expeditions/" },
    { label: "Economía", href: "/wiki-monolith/economy/" },
  ],
  relatedPages: [
    {
      label: "Monolith Station en español",
      href: "/monolith-station-en-espanol/",
      description: "Identidad, sistemas y lore de Capibara Monolith.",
    },
    {
      label: "Roleplay espacial con naves",
      href: "/juego-roleplay-espacial-con-naves/",
      description: "Una introducción al sandbox de tripulaciones y exploración.",
    },
    {
      label: "Cómo jugar Space Station 14",
      href: "/como-jugar-space-station-14/",
      description: "Descarga el juego y aprende los primeros pasos.",
    },
  ],
};

export const SPACESHIP_ROLEPLAY_PAGE: MonolithSeoPageData = {
  slug: "juego-roleplay-espacial-con-naves",
  title: "Juego de Roleplay Espacial con Naves y Tripulaciones",
  subtitle:
    "Capibara Monolith combina el sandbox de Space Station 14 con naves pilotables, trabajos especializados, expediciones, economía y facciones en un sector persistente.",
  metaTitle: "Juego de Roleplay Espacial con Naves | Capibara Monolith",
  metaDescription:
    "Juega roleplay espacial multijugador con naves, tripulaciones, ingeniería, medicina, comercio y expediciones. Conoce Capibara Monolith y su wiki en español.",
  eyebrow: "ROLEPLAY DE FRONTERA",
  sections: [
    {
      title: "Una nave funciona gracias a su tripulación",
      paragraphs: [
        "En Capibara Monolith, pilotar es solo una parte del viaje. La tripulación mantiene los sistemas eléctricos y atmosféricos, trata heridas, administra recursos, opera armamento y toma decisiones sobre contratos, rutas y alianzas.",
        "Cada oficio conserva la profundidad sistémica de Space Station 14. Un fallo técnico, una mala preparación médica o una decisión diplomática pueden cambiar la historia de toda la tripulación.",
      ],
      points: [
        "Pilotaje y navegación",
        "Ingeniería y mantenimiento de naves",
        "Medicina, química y soporte de campo",
        "Artillería y combate entre naves",
      ],
    },
    {
      title: "Historias creadas por jugadores",
      paragraphs: [
        "No existe un guion único. Las historias nacen de los encuentros entre comerciantes, expedicionarios, facciones, mercenarios y tripulaciones independientes dentro del Sector Colossus.",
        "La economía y los recursos dan consecuencias a esas decisiones. Explorar puede aportar materiales y oportunidades, pero también daños, pérdidas y conflictos que requieren cooperación real.",
      ],
    },
    {
      title: "Aprender con una wiki en español",
      paragraphs: [
        "La Wiki Monolith reúne cientos de guías generadas desde los datos del servidor. Allí puedes estudiar empleos, controles, naves, expediciones, sistemas de armas, economía, medicina y lore antes de asumir una responsabilidad nueva.",
        "Capibara Monolith es una traducción comunitaria y puede conservar algunos textos en inglés. Las guías en español ayudan a reducir esa barrera mientras el trabajo de localización continúa.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Capibara Monolith permite pilotar naves?",
      answer:
        "Sí. La experiencia incluye pilotaje, navegación, mantenimiento y sistemas de armas para naves, además de guías específicas en la Wiki Monolith.",
    },
    {
      question: "¿Es un MMORPG?",
      answer:
        "No en el sentido tradicional. Es un sandbox multijugador de roleplay basado en Space Station 14, con simulación detallada, trabajos y una economía persistente dentro del servidor.",
    },
    {
      question: "¿Necesito conocer Space Station 14?",
      answer:
        "No, pero sus sistemas tienen profundidad. Conviene leer la introducción y las guías del trabajo elegido, empezar con responsabilidades sencillas y pedir ayuda a la comunidad.",
    },
    {
      question: "¿Dónde puedo aprender pilotaje y artillería?",
      answer:
        "La Wiki Monolith incluye guías de pilotaje, construcción y mantenimiento de naves, especificaciones de armas y funcionamiento de municiones.",
    },
  ],
  wikiLinks: [
    { label: "Wiki Monolith", href: "/wiki-monolith/" },
    { label: "Pilotaje", href: "/wiki-monolith/piloting/" },
    { label: "Expediciones", href: "/wiki-monolith/expeditions/" },
    { label: "Sistemas de armas", href: "/wiki-monolith/weapons-systems/" },
  ],
  relatedPages: [
    {
      label: "Monolith Station en español",
      href: "/monolith-station-en-espanol/",
      description: "Conoce el servidor, su identidad y el Sector Colossus.",
    },
    {
      label: "Frontier Station 14 en español",
      href: "/frontier-station-14-en-espanol/",
      description: "Origen del estilo de frontera, naves y expediciones.",
    },
    {
      label: "Juegos parecidos a Barotrauma",
      href: "/juegos-parecidos-a-barotrauma/",
      description: "Más juegos cooperativos con sistemas y tripulaciones.",
    },
  ],
};

export const MONOLITH_SEO_PAGES = [
  MONOLITH_SPANISH_PAGE,
  FRONTIER_SPANISH_PAGE,
  SPACESHIP_ROLEPLAY_PAGE,
] as const;
