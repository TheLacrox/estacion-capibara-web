import type {
  ServerSeoPageData,
  ServerSeoSection,
} from "@/data/server-seo-types";

export type MonolithSeoSection = ServerSeoSection;
export type MonolithSeoPageData = ServerSeoPageData;

export const MONOLITH_SPANISH_PAGE: MonolithSeoPageData = {
  slug: "monolith-station-en-espanol",
  title: "Monolith Station en Español: Capibara Monolith",
  subtitle:
    "Conoce la edición comunitaria en español de Monolith Station: un servidor separado de Estación Capibara, ambientado en el Sector Colossus y centrado en naves, economía persistente, expediciones y facciones.",
  metaTitle: "Monolith Station en Español | Capibara Monolith SS14",
  metaDescription:
    "Descubre Capibara Monolith, la edición comunitaria en español de Monolith Station para SS14: naves, economía persistente, expediciones, facciones y wiki en español.",
  searchQueries: [
    "monolith station español",
    "monolith station ss14",
    "space station 14 monolith",
    "capibara monolith",
    "monolith station server",
  ],
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
        "Wiki Monolith localizada y presentada íntegramente en español",
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
        "La web y la Wiki Monolith se presentan en español, incluidas sus guías, acciones y fallbacks visibles. La traducción del servidor es un trabajo comunitario que puede evolucionar con el proyecto.",
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
      label: "RMC14 en Español: Capibara Marines",
      href: "/rmc14-en-espanol/",
      description: "Conoce otro servidor Capibara: marines contra xenónidos en RMC14.",
    },
    {
      label: "Facciones y lore de Monolith",
      href: "/facciones-y-lore-monolith-station/",
      description: "Sector Colossus, TSF, PDV y organizaciones menores.",
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
  searchQueries: [
    "frontier station 14 español",
    "frontier station 14 wiki",
    "frontier station 14 ships",
    "frontier space station 14",
  ],
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
        "La wiki en español permite consultar de antemano trabajos, reglas, economía, medicina, química, naves y facciones con términos y fallbacks localizados.",
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
  searchQueries: [
    "juego roleplay espacial",
    "roleplay espacial multijugador",
    "juego de tripulación espacial",
    "sandbox espacial multijugador",
  ],
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
        "Capibara Monolith es una traducción comunitaria y su wiki presenta en español el contenido público de las guías, incluidas acciones, entidades y fallbacks técnicos.",
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

export const MONOLITH_GETTING_STARTED_PAGE: MonolithSeoPageData = {
  slug: "como-jugar-capibara-monolith",
  title: "Cómo Jugar Capibara Monolith: Guía para Empezar",
  subtitle:
    "Una ruta clara para conocer Monolith Station en español, preparar tu personaje, dominar los controles básicos y elegir una primera responsabilidad en el Sector Colossus.",
  metaTitle: "Cómo Jugar Capibara Monolith | Guía para Empezar",
  metaDescription:
    "Aprende cómo empezar en Capibara Monolith: controles, comunicaciones, trabajos, naves y guías en español para tu primera experiencia en Monolith Station.",
  searchQueries: [
    "cómo jugar capibara monolith",
    "cómo jugar monolith station",
    "space station 14 tutorial",
    "monolith station beginner guide",
  ],
  eyebrow: "PRIMEROS PASOS",
  sections: [
    {
      title: "Antes de entrar al Sector Colossus",
      paragraphs: [
        "Capibara Monolith es un servidor comunitario de Space Station 14 separado de Estación Capibara. Utiliza el escenario y los sistemas de Monolith Station, con una wiki propia presentada en español.",
        "No publicamos una dirección de conexión sin verificar. Consulta los anuncios actuales de la comunidad en Discord y utiliza la Wiki Monolith para preparar los controles, el personaje y el trabajo que quieras aprender.",
      ],
      points: [
        "Lee la introducción para nuevos jugadores",
        "Repasa controles y comunicaciones",
        "Elige una responsabilidad que puedas estudiar con antelación",
      ],
    },
    {
      title: "Tus primeros minutos",
      paragraphs: [
        "Empieza por reconocer el inventario, las manos, las interacciones y los canales de comunicación. En un entorno de frontera, coordinarse es tan importante como conocer las herramientas de cada oficio.",
        "Antes de operar maquinaria, pilotar o participar en combate, abre la guía correspondiente. Las funciones especializadas conectan sistemas de energía, atmósfera, medicina, carga y navegación que afectan a toda la tripulación.",
      ],
    },
    {
      title: "Una wiki organizada por responsabilidades",
      paragraphs: [
        "La Wiki Monolith reúne guías de trabajos, naves, economía, expediciones, facciones, medicina, química y reglas. Puedes pasar de una introducción general a documentación específica sin mezclarla con la wiki de Estación Capibara.",
        "Si una función te resulta nueva, consulta primero su guía y pregunta a la comunidad. Aprender de forma gradual ayuda a que la experiencia sea comprensible para ti y para quienes comparten la nave o el puesto.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Necesito experiencia previa en Space Station 14?",
      answer:
        "No, pero SS14 tiene sistemas profundos. Empieza por controles, comunicaciones y una guía introductoria antes de asumir pilotaje, mando, medicina o ingeniería.",
    },
    {
      question: "¿Dónde encuentro el servidor de Capibara Monolith?",
      answer:
        "Consulta los anuncios actuales de la comunidad en Discord. La web no publica una dirección de conexión que no haya sido verificada.",
    },
    {
      question: "¿Qué debería leer primero?",
      answer:
        "Primeros pasos, Controles, Canales de Habla y Texto, y Trabajos y roles forman una ruta inicial útil antes de consultar sistemas más especializados.",
    },
    {
      question: "¿Capibara Monolith usa la misma wiki que Estación Capibara?",
      answer:
        "No. Los servidores están separados y Capibara Monolith tiene su propio espacio de guías bajo /wiki-monolith/.",
    },
  ],
  wikiLinks: [
    { label: "Primeros pasos", href: "/wiki-monolith/new-player/" },
    { label: "Controles", href: "/wiki-monolith/controls/" },
    { label: "Comunicaciones", href: "/wiki-monolith/radio/" },
    { label: "Trabajos y roles", href: "/wiki-monolith/jobs/" },
  ],
  relatedPages: [
    {
      label: "Roles y trabajos de Monolith",
      href: "/roles-y-trabajos-monolith-station/",
      description: "Compara responsabilidades y encuentra las guías de cada área.",
    },
    {
      label: "Monolith Station en español",
      href: "/monolith-station-en-espanol/",
      description: "Conoce la identidad, los sistemas y el escenario del servidor.",
    },
    {
      label: "Frontier Station 14 en español",
      href: "/frontier-station-14-en-espanol/",
      description: "Entiende el origen del estilo de frontera y sus naves.",
    },
  ],
};

export const MONOLITH_ROLES_PAGE: MonolithSeoPageData = {
  slug: "roles-y-trabajos-monolith-station",
  title: "Roles y Trabajos de Monolith Station en Space Station 14",
  subtitle:
    "Descubre cómo se organizan los trabajos de Capibara Monolith y qué responsabilidades conectan naves, puestos, expediciones, comercio, medicina y facciones.",
  metaTitle: "Roles de Space Station 14 | Trabajos en Monolith",
  metaDescription:
    "Guía de roles y trabajos de Monolith Station: tripulaciones, pilotaje, ingeniería, medicina, comercio y expediciones en Capibara Monolith.",
  searchQueries: [
    "space station 14 roles",
    "space station 14 jobs",
    "space station 14 beginner roles",
    "monolith station jobs",
  ],
  eyebrow: "TRABAJOS Y RESPONSABILIDADES",
  sections: [
    {
      title: "Trabajos conectados por un sector",
      paragraphs: [
        "En Capibara Monolith los trabajos no se limitan al funcionamiento de una sola estación. Las tripulaciones operan naves y puestos, transportan carga, atienden emergencias, exploran y participan en la economía del Sector Colossus.",
        "Cada responsabilidad se relaciona con otras. Pilotaje necesita mantenimiento; expediciones necesitan preparación médica y logística; comercio necesita transporte; y las facciones dependen de coordinación y reglas compartidas.",
      ],
      points: [
        "Pilotaje, navegación e ingeniería de naves",
        "Medicina, química y soporte de campo",
        "Carga, comercio, minería y expediciones",
        "Seguridad, mando y funciones de facción",
      ],
    },
    {
      title: "Cómo elegir un trabajo para empezar",
      paragraphs: [
        "No existe un único trabajo correcto para principiantes. Elige una función cuya guía puedas leer, identifica sus tareas principales y evita asumir sistemas críticos sin conocer sus controles o procedimientos.",
        "La página de Trabajos y roles sirve como índice. Desde allí puedes explorar departamentos y regresar a Primeros pasos cuando necesites repasar conceptos comunes.",
      ],
    },
    {
      title: "Especializarse sin perder el contexto",
      paragraphs: [
        "Aprender un oficio especializado es más sencillo cuando entiendes qué recibe y qué entrega. Un tripulante de carga mueve bienes; un equipo de expedición recupera recursos; y una nave convierte esa actividad en rutas, mantenimiento y decisiones compartidas.",
        "Consulta las guías antes de cambiar de responsabilidad. La documentación de Monolith permite estudiar sistemas concretos sin exponer identificadores internos ni mezclar rutas de Estación Capibara.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuántos roles tiene Capibara Monolith?",
      answer:
        "La disponibilidad puede depender de la configuración y del contexto de juego. La Wiki Monolith mantiene un índice de trabajos y roles generado desde los datos del servidor.",
    },
    {
      question: "¿Qué rol debería elegir un principiante?",
      answer:
        "Elige una responsabilidad con una guía clara, repasa los controles y comunica que estás aprendiendo. Evita funciones críticas hasta comprender sus sistemas principales.",
    },
    {
      question: "¿Hay roles para operar naves?",
      answer:
        "Sí. Las guías cubren pilotaje, vuelo, mantenimiento, artillería y otras responsabilidades relacionadas con las naves del sector.",
    },
    {
      question: "¿Los trabajos son iguales a los de una estación convencional?",
      answer:
        "Comparten sistemas de SS14, pero el entorno de frontera conecta los trabajos con naves, puestos, expediciones, comercio y facciones.",
    },
  ],
  wikiLinks: [
    { label: "Trabajos y roles", href: "/wiki-monolith/jobs/" },
    { label: "Primeros pasos", href: "/wiki-monolith/new-player/" },
    { label: "Economía", href: "/wiki-monolith/economy/" },
    { label: "Expediciones", href: "/wiki-monolith/expeditions/" },
  ],
  relatedPages: [
    {
      label: "Cómo jugar Capibara Monolith",
      href: "/como-jugar-capibara-monolith/",
      description: "Prepara controles, comunicaciones y tu primera experiencia.",
    },
    {
      label: "Juego espacial cooperativo",
      href: "/juego-espacial-cooperativo/",
      description: "Descubre cómo colaboran los oficios dentro de una tripulación.",
    },
    {
      label: "Economía de Monolith Station",
      href: "/economia-monolith-station/",
      description: "Comercio, carga y circulación de recursos en el sector.",
    },
  ],
};

export const MULTIPLAYER_SPACESHIPS_PAGE: MonolithSeoPageData = {
  slug: "juego-de-naves-espaciales-multijugador",
  title: "Juego de Naves Espaciales Multijugador con Tripulación",
  subtitle:
    "Capibara Monolith propone una experiencia de Space Station 14 donde las naves son espacios de trabajo compartidos: se pilotan, mantienen, abastecen y defienden entre varios jugadores.",
  metaTitle: "Juego de Naves Espaciales Multijugador | Monolith",
  metaDescription:
    "Descubre un juego de naves espaciales multijugador con pilotaje, tripulación, ingeniería, artillería, comercio y expediciones en Capibara Monolith.",
  searchQueries: [
    "juego de naves espaciales multijugador",
    "juego de naves multijugador",
    "juegos de naves espaciales online",
    "juego de naves espaciales pc",
  ],
  eyebrow: "NAVES MULTIJUGADOR",
  sections: [
    {
      title: "Una nave es más que un vehículo",
      paragraphs: [
        "En Capibara Monolith una nave reúne sistemas y responsabilidades. Pilotaje y navegación determinan el movimiento, mientras energía, atmósfera, mantenimiento y logística sostienen la operación de la tripulación.",
        "El resultado no es una cabina aislada, sino un espacio compartido donde las decisiones de cada integrante pueden afectar el viaje, la carga y la capacidad de responder a una emergencia.",
      ],
      points: [
        "Pilotaje y vuelo con guías propias",
        "Ingeniería y mantenimiento de sistemas",
        "Carga, suministros y economía",
        "Artillería y combate entre naves",
      ],
    },
    {
      title: "Astilleros y clases de nave",
      paragraphs: [
        "La Wiki Monolith incluye un índice de astilleros y documentación sobre distintas naves. Cada diseño puede priorizar transporte, servicio, salvamento, exploración o combate.",
        "Antes de elegir u operar una nave, revisa su documentación y los sistemas que requiere. Una función especializada necesita coordinación con el resto de la tripulación.",
      ],
    },
    {
      title: "Pilotaje, artillería y preparación",
      paragraphs: [
        "Pilotar cubre movimiento y navegación; el combate naval añade sistemas de armas y munición; y una expedición exige considerar recursos, daños y regreso. Son capas relacionadas, pero no intercambiables.",
        "Las guías en español permiten estudiar cada capa por separado y enlazan directamente con pilotaje, construcción de transbordadores, astilleros y combate naval.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Se pueden pilotar naves en Capibara Monolith?",
      answer:
        "Sí. La Wiki Monolith incluye guías de pilotaje y vuelo, además de documentación de astilleros y sistemas de armas.",
    },
    {
      question: "¿Las naves necesitan varios jugadores?",
      answer:
        "Las tareas pueden repartirse entre pilotaje, ingeniería, logística, medicina y armamento. La organización concreta depende de la nave y de la situación.",
    },
    {
      question: "¿Dónde puedo ver las clases de nave?",
      answer:
        "La guía Astilleros Colossus reúne el acceso a documentación de naves disponibles en los datos publicados de Monolith.",
    },
    {
      question: "¿Hay combate entre naves?",
      answer:
        "La documentación incluye combate naval, sistemas de armas y funcionamiento de municiones. Conviene leer esas guías antes de operar artillería.",
    },
  ],
  wikiLinks: [
    { label: "Pilotaje", href: "/wiki-monolith/piloting/" },
    {
      label: "Construcción de transbordadores",
      href: "/wiki-monolith/shuttle-craft/",
    },
    { label: "Astilleros Colossus", href: "/wiki-monolith/shipyard/" },
    { label: "Combate naval", href: "/wiki-monolith/weapons-systems/" },
  ],
  relatedPages: [
    {
      label: "Roleplay espacial con naves",
      href: "/juego-roleplay-espacial-con-naves/",
      description: "Historias y responsabilidades dentro de una tripulación.",
    },
    {
      label: "Frontier Station 14 en español",
      href: "/frontier-station-14-en-espanol/",
      description: "El origen del estilo de frontera, naves y expediciones.",
    },
    {
      label: "Juegos de marines espaciales",
      href: "/juegos-de-marines-espaciales/",
      description: "Acción y escuadras: más juegos de combate en el espacio.",
    },
  ],
};

export const SPACE_COOP_PAGE: MonolithSeoPageData = {
  slug: "juego-espacial-cooperativo",
  title: "Juego Espacial Cooperativo con Roles y Tripulaciones",
  subtitle:
    "Una experiencia multijugador donde pilotaje, ingeniería, medicina, carga y expediciones dependen de la comunicación entre personas, no de una tripulación automática.",
  metaTitle: "Juego Espacial Cooperativo para PC | Capibara Monolith",
  metaDescription:
    "Conoce un juego espacial cooperativo con roles, naves, ingeniería, medicina, comercio y expediciones: Capibara Monolith sobre Space Station 14.",
  searchQueries: [
    "juego espacial cooperativo",
    "juego nave espacial cooperativo",
    "juego cooperativo de tripulación",
    "space station 14 cooperative",
  ],
  eyebrow: "COOPERACIÓN EN EL ESPACIO",
  sections: [
    {
      title: "Cooperar mediante trabajos reales",
      paragraphs: [
        "La cooperación en Capibara Monolith nace de sistemas conectados. Quien pilota necesita una nave funcional; ingeniería necesita recursos y avisos claros; medicina necesita información sobre riesgos; y expediciones necesitan preparación y transporte.",
        "Cada trabajo aporta una parte distinta. La tripulación progresa cuando comparte información, distribuye tareas y entiende qué sistemas no debe operar sin preparación.",
      ],
      points: [
        "Roles especializados con objetivos compartidos",
        "Comunicación por canales y coordinación directa",
        "Emergencias que exigen respuestas de varios oficios",
        "Naves y puestos operados por jugadores",
      ],
    },
    {
      title: "Historias emergentes, no misiones lineales",
      paragraphs: [
        "No hay una única secuencia que toda tripulación deba seguir. Comercio, exploración, facciones, daños y encuentros pueden cambiar las prioridades y producir historias distintas.",
        "La cooperación tiene consecuencias porque los sistemas interactúan. Una avería puede requerir ingeniería, logística y atención médica; una expedición puede aportar recursos o crear una nueva emergencia.",
      ],
    },
    {
      title: "Cómo prepararse con amigos o nuevos compañeros",
      paragraphs: [
        "Puedes coordinar responsabilidades complementarias, pero cada persona debería revisar la guía de su trabajo. Compartir una nave no sustituye conocer controles, comunicaciones y procedimientos básicos.",
        "Empieza por Primeros pasos y Trabajos y roles. Después consulta pilotaje, expediciones, economía o el sistema que corresponda a la actividad elegida.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Capibara Monolith es cooperativo?",
      answer:
        "Sí. Sus sistemas distribuyen tareas entre tripulantes, trabajos y facciones que necesitan comunicarse para operar naves, puestos y expediciones.",
    },
    {
      question: "¿Puedo jugar con amigos?",
      answer:
        "Podéis coordinar responsabilidades y aprender sistemas complementarios. Consultad los anuncios actuales de la comunidad para conocer cómo acceder al servidor.",
    },
    {
      question: "¿Qué roles cooperan dentro de una nave?",
      answer:
        "Pilotaje, ingeniería, medicina, carga, expediciones y armamento pueden participar según el diseño de la nave y el objetivo de la tripulación.",
    },
    {
      question: "¿Es un juego de campaña lineal?",
      answer:
        "No. Es un sandbox de roleplay basado en sistemas, donde las historias emergen de las decisiones y encuentros entre jugadores.",
    },
  ],
  wikiLinks: [
    { label: "Primeros pasos", href: "/wiki-monolith/new-player/" },
    { label: "Trabajos y roles", href: "/wiki-monolith/jobs/" },
    { label: "Pilotaje", href: "/wiki-monolith/piloting/" },
    { label: "Expediciones", href: "/wiki-monolith/expeditions/" },
  ],
  relatedPages: [
    {
      label: "Naves espaciales multijugador",
      href: "/juego-de-naves-espaciales-multijugador/",
      description: "Pilotaje, mantenimiento, astilleros y combate naval.",
    },
    {
      label: "Roles y trabajos de Monolith",
      href: "/roles-y-trabajos-monolith-station/",
      description: "Responsabilidades que mantienen unida a la tripulación.",
    },
    {
      label: "Juegos de terror cooperativo",
      href: "/juegos-de-terror-cooperativo/",
      description: "Más juegos cooperativos para PC: terror, presión y equipo.",
    },
  ],
};

export const MONOLITH_ECONOMY_PAGE: MonolithSeoPageData = {
  slug: "economia-monolith-station",
  title: "Economía de Monolith Station: Comercio, Carga y Recursos",
  subtitle:
    "Entiende cómo la economía persistente de Capibara Monolith conecta bancos, transporte de carga, expediciones, minería y decisiones de las tripulaciones.",
  metaTitle: "Economía de Monolith Station | Comercio y Carga",
  metaDescription:
    "Guía de la economía de Monolith Station: banco, comercio, transporte de carga, recursos y expediciones en Capibara Monolith y su wiki en español.",
  searchQueries: [
    "economía monolith station",
    "monolith station economy",
    "economía persistente space station 14",
    "comercio space station 14",
  ],
  eyebrow: "ECONOMÍA DEL SECTOR",
  sections: [
    {
      title: "Una economía conectada con el juego",
      paragraphs: [
        "En Capibara Monolith la economía persistente relaciona actividades que ocurren en distintos puntos del Sector Colossus. Carga, expediciones, minería y comercio aportan bienes y recursos que después circulan entre jugadores y organizaciones.",
        "La economía no sustituye los trabajos: les da contexto. Transportar, recuperar, almacenar o intercambiar recursos requiere naves, coordinación y conocimiento de los sistemas correspondientes.",
      ],
      points: [
        "Central Galactic Bank y cuentas",
        "Transporte de carga entre localizaciones",
        "Recursos obtenidos en expediciones y minería",
        "Recetas y sistemas económicos documentados",
      ],
    },
    {
      title: "Del recurso a la ruta comercial",
      paragraphs: [
        "Una expedición puede recuperar materiales; una tripulación de carga puede transportarlos; y otros trabajos pueden utilizarlos o intercambiarlos. Cada paso depende de sistemas y responsabilidades diferentes.",
        "No publicamos valores, precios o condiciones que puedan cambiar fuera de los datos disponibles. La Wiki Monolith conserva las guías de Economía, Banco y Transporte de Carga como referencia del sistema.",
      ],
    },
    {
      title: "Cómo aprender la economía sin adivinar",
      paragraphs: [
        "Empieza por la guía general de Economía y continúa con Banco o Transporte de Carga según la tarea que quieras realizar. Las Recetas de Economía reúnen información adicional del sistema.",
        "Si una condición depende del estado actual del servidor, consulta los anuncios de la comunidad. La página explica el modelo y dirige a documentación verificable, sin inventar cifras ni endpoints.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Capibara Monolith tiene economía persistente?",
      answer:
        "Sí. Las guías publicadas describen una economía persistente conectada con banco, carga, comercio, expediciones y recursos del sector.",
    },
    {
      question: "¿Qué trabajos participan en la economía?",
      answer:
        "Carga, transporte, minería, expediciones, comercio y otras tripulaciones pueden intervenir en distintas etapas de obtención y circulación de recursos.",
    },
    {
      question: "¿Dónde se explica el banco?",
      answer:
        "La Wiki Monolith incluye una guía de Central Galactic Bank, además de la introducción general a la economía.",
    },
    {
      question: "¿La web publica precios actuales?",
      answer:
        "No se presentan precios como datos actuales si no pueden verificarse. Las guías explican los sistemas publicados por el servidor.",
    },
  ],
  wikiLinks: [
    { label: "Economía", href: "/wiki-monolith/economy/" },
    { label: "Central Galactic Bank", href: "/wiki-monolith/bank/" },
    { label: "Transporte de carga", href: "/wiki-monolith/cargo-hauling/" },
    { label: "Recetas de economía", href: "/wiki-monolith/economy-recipes/" },
  ],
  relatedPages: [
    {
      label: "Expediciones de Monolith Station",
      href: "/expediciones-monolith-station/",
      description: "Recuperación de recursos, preparación y riesgos del sector.",
    },
    {
      label: "Roles y trabajos de Monolith",
      href: "/roles-y-trabajos-monolith-station/",
      description: "Quién participa en carga, minería, transporte y soporte.",
    },
    {
      label: "Monolith Station en español",
      href: "/monolith-station-en-espanol/",
      description: "Visión general del servidor y sus sistemas principales.",
    },
  ],
};

export const MONOLITH_EXPEDITIONS_PAGE: MonolithSeoPageData = {
  slug: "expediciones-monolith-station",
  title: "Expediciones de Monolith Station: Salvamento y Exploración",
  subtitle:
    "Conoce cómo las expediciones de Capibara Monolith combinan preparación, transporte, recuperación de recursos, amenazas y cooperación entre trabajos.",
  metaTitle: "Expediciones de Monolith Station | Guía en Español",
  metaDescription:
    "Guía de expediciones en Monolith Station: salvamento, exploración, minería, amenazas, preparación y recursos en Capibara Monolith.",
  searchQueries: [
    "expediciones monolith station",
    "monolith station expeditions",
    "salvamento space station 14",
    "exploración space station 14",
  ],
  eyebrow: "EXPEDICIONES Y SALVAMENTO",
  sections: [
    {
      title: "Salir al sector exige preparación",
      paragraphs: [
        "Las expediciones de salvamento llevan a las tripulaciones fuera de sus espacios habituales para recuperar recursos y afrontar amenazas. Preparar transporte, equipo, comunicaciones y soporte puede ser tan importante como el objetivo de la salida.",
        "Las guías de Monolith documentan expediciones y distintos tipos de encuentros. Leerlas permite reconocer riesgos sin convertir la página SEO en una lista de resultados garantizados.",
      ],
      points: [
        "Planificación y reparto de responsabilidades",
        "Equipo, transporte y capacidad de regreso",
        "Recuperación de materiales y bienes",
        "Amenazas documentadas por tipo de expedición",
      ],
    },
    {
      title: "Salvamento, minería y economía",
      paragraphs: [
        "Los recursos recuperados pueden conectarse con carga, comercio y economía. La minería de gas añade otra actividad especializada con almacenamiento y herramientas propias.",
        "No todas las expediciones cumplen la misma función. Consulta la documentación correspondiente y prepara la nave y los trabajos necesarios para la actividad elegida.",
      ],
    },
    {
      title: "Una actividad cooperativa",
      paragraphs: [
        "Pilotaje facilita el desplazamiento; ingeniería mantiene sistemas; medicina responde a lesiones; y carga organiza lo recuperado. La composición concreta depende de la misión y de las decisiones de la tripulación.",
        "La Wiki Monolith enlaza desde la introducción de Expediciones hacia amenazas y sistemas relacionados. Esta landing sirve como punto de entrada en español para esa documentación.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué son las expediciones en Monolith Station?",
      answer:
        "Son actividades de exploración y salvamento donde las tripulaciones pueden afrontar amenazas y recuperar recursos fuera de sus espacios habituales.",
    },
    {
      question: "¿Qué trabajos participan en una expedición?",
      answer:
        "Según el objetivo, pueden intervenir pilotaje, ingeniería, medicina, carga, seguridad y otras responsabilidades de soporte.",
    },
    {
      question: "¿Las expediciones están relacionadas con la economía?",
      answer:
        "Pueden aportar materiales y bienes que después se transportan, almacenan o integran en la actividad económica del sector.",
    },
    {
      question: "¿Dónde se explican las amenazas?",
      answer:
        "La Wiki Monolith incluye la guía general de Expediciones y páginas específicas para encuentros y criaturas documentadas.",
    },
  ],
  wikiLinks: [
    { label: "Expediciones de salvamento", href: "/wiki-monolith/expeditions/" },
    { label: "Minería de gas", href: "/wiki-monolith/gas-mining/" },
    {
      label: "Minería y almacenamiento de gas",
      href: "/wiki-monolith/gas-mining-and-storage/",
    },
    { label: "Pilotaje", href: "/wiki-monolith/piloting/" },
  ],
  relatedPages: [
    {
      label: "Economía de Monolith Station",
      href: "/economia-monolith-station/",
      description: "Cómo circulan los recursos recuperados en el sector.",
    },
    {
      label: "Juego espacial cooperativo",
      href: "/juego-espacial-cooperativo/",
      description: "Responsabilidades compartidas dentro y fuera de la nave.",
    },
    {
      label: "Naves espaciales multijugador",
      href: "/juego-de-naves-espaciales-multijugador/",
      description: "Pilotaje, mantenimiento y transporte para explorar.",
    },
  ],
};

export const MONOLITH_FACTIONS_PAGE: MonolithSeoPageData = {
  slug: "facciones-y-lore-monolith-station",
  title: "Facciones y Lore de Monolith Station en el Sector Colossus",
  subtitle:
    "Explora el contexto de Capibara Monolith: El Monolith, el Sector Colossus, el conflicto entre TSF y PDV, y las organizaciones que dan forma al roleplay.",
  metaTitle: "Facciones de Monolith Station | Lore del Sector Colossus",
  metaDescription:
    "Conoce las facciones y el lore de Monolith Station: Sector Colossus, TSF, PDV, organizaciones menores y reglas de roleplay en Capibara Monolith.",
  searchQueries: [
    "facciones monolith station",
    "monolith station lore",
    "sector colossus",
    "tsf pdv monolith",
  ],
  eyebrow: "FACCIONES Y LORE",
  sections: [
    {
      title: "El Sector Colossus",
      paragraphs: [
        "Capibara Monolith sitúa su experiencia en el Sector Colossus, marcado por la región anómala conocida como El Monolith. Ese escenario conecta localizaciones, recursos, naves y organizaciones con intereses diferentes.",
        "El lore proporciona contexto para el roleplay, pero no sustituye las reglas. Antes de representar una facción, consulta tanto su documentación como el reglamento publicado.",
      ],
      points: [
        "El Monolith como elemento central del escenario",
        "TSF y PDV en conflicto abierto",
        "Facciones menores y tripulaciones independientes",
        "Comercio, diplomacia y disputas por recursos",
      ],
    },
    {
      title: "Facciones mayores y organizaciones menores",
      paragraphs: [
        "La TSF y el PDV ocupan un lugar importante en el conflicto del sector. Junto a ellas aparecen organizaciones menores, mercenarios, comerciantes y otras tripulaciones con objetivos propios.",
        "La guía de Facciones presenta el marco general y Facciones Menores amplía otras organizaciones. Utiliza esas fuentes para evitar asumir relaciones o jerarquías que no estén documentadas.",
      ],
    },
    {
      title: "Lore al servicio del roleplay",
      paragraphs: [
        "Conocer el escenario ayuda a construir decisiones coherentes: alianzas, rutas, comercio y conflictos pueden interpretarse dentro del contexto del Sector Colossus.",
        "Capibara Monolith es un servidor comunitario y no representa al servidor oficial del proyecto original. Su wiki en español organiza el lore y las reglas desde los datos publicados del servidor.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Dónde ocurre Capibara Monolith?",
      answer:
        "La ambientación publicada se desarrolla en el Sector Colossus, afectado por la región anómala conocida como El Monolith.",
    },
    {
      question: "¿Qué son TSF y PDV?",
      answer:
        "Son facciones presentes en el conflicto del Sector Colossus. La Wiki Monolith contiene el contexto publicado para comprenderlas dentro del roleplay.",
    },
    {
      question: "¿Hay facciones menores?",
      answer:
        "Sí. Existe una guía específica de Facciones Menores, además del índice general de facciones.",
    },
    {
      question: "¿El lore reemplaza las reglas del servidor?",
      answer:
        "No. El lore ofrece contexto narrativo; el reglamento establece las normas. Conviene consultar ambos antes de representar una organización.",
    },
  ],
  wikiLinks: [
    { label: "Facciones", href: "/wiki-monolith/factions/" },
    { label: "Facciones menores", href: "/wiki-monolith/minor-factions/" },
    { label: "El Monolith llama", href: "/wiki-monolith/nf14/" },
    { label: "Reglas de Monolith", href: "/wiki-monolith/monolith-ruleset/" },
  ],
  relatedPages: [
    {
      label: "Monolith Station en español",
      href: "/monolith-station-en-espanol/",
      description: "Identidad, sistemas y visión general del servidor.",
    },
    {
      label: "Roleplay espacial con naves",
      href: "/juego-roleplay-espacial-con-naves/",
      description: "Cómo el escenario se convierte en historias de tripulación.",
    },
    {
      label: "Economía de Monolith Station",
      href: "/economia-monolith-station/",
      description: "Comercio y recursos dentro del Sector Colossus.",
    },
  ],
};

export const MONOLITH_SEO_PAGES = [
  MONOLITH_SPANISH_PAGE,
  FRONTIER_SPANISH_PAGE,
  SPACESHIP_ROLEPLAY_PAGE,
  MONOLITH_GETTING_STARTED_PAGE,
  MONOLITH_ROLES_PAGE,
  MULTIPLAYER_SPACESHIPS_PAGE,
  SPACE_COOP_PAGE,
  MONOLITH_ECONOMY_PAGE,
  MONOLITH_EXPEDITIONS_PAGE,
  MONOLITH_FACTIONS_PAGE,
] as const;
