export interface SeoPageData {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
  relatedWikiLinks: { label: string; href: string }[];
  relatedPages?: string[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    slug: "que-es-space-station-14",
    title: "¿Qué es Space Station 14?",
    subtitle:
      "La guía definitiva en español sobre el juego de simulación espacial más complejo y adictivo. Descubre cómo funciona, qué roles puedes jugar y por qué la comunidad hispana está creciendo.",
    metaTitle:
      "¿Qué es Space Station 14? Guía Completa en Español | Estación Capibara",
    metaDescription:
      "Descubre qué es Space Station 14: juego multijugador gratis de simulación espacial con roleplay, 30+ roles, economía y caos. Guía en español con todo lo que necesitas saber.",
    faqs: [
      {
        question: "¿Space Station 14 es gratis?",
        answer:
          "Sí, Space Station 14 es completamente gratis. No tiene microtransacciones ni pagos ocultos. Puedes descargarlo desde spacestation14.com o desde Steam.",
      },
      {
        question: "¿Se puede jugar Space Station 14 en español?",
        answer:
          "El juego base está en inglés, pero existen servidores en español como Estación Capibara que tienen la wiki, guías y comunidad completamente en español.",
      },
      {
        question: "¿Qué necesito para jugar Space Station 14?",
        answer:
          "Solo necesitas un PC con Windows, Linux o macOS. El juego es muy ligero y funciona en prácticamente cualquier computadora. Descarga el launcher, busca un servidor y empieza a jugar.",
      },
      {
        question: "¿Cuántos jugadores puede tener una partida de SS14?",
        answer:
          "Depende del servidor. Las partidas pueden tener desde 10 hasta más de 100 jugadores simultáneos en la misma estación espacial.",
      },
      {
        question: "¿Space Station 14 es como Among Us?",
        answer:
          "SS14 comparte el concepto de traidores en una tripulación espacial, pero es mucho más profundo. Tiene más de 30 roles, sistemas de química, ingeniería, medicina, economía y roleplay extenso.",
      },
    ],
    relatedWikiLinks: [
      { label: "Trabajos y Roles", href: "/wiki/jobs" },
      { label: "Antagonistas", href: "/wiki/antagonists" },
      { label: "Sistema de Economía", href: "/wiki/capibara-economy" },
      { label: "Guía de Supervivencia", href: "/wiki/survival" },
      { label: "Procedimiento Operativo Estándar", href: "/wiki/sop" },
    ],
    relatedPages: [
      "como-jugar-space-station-14",
      "juegos-como-among-us",
      "juegos-espaciales-pc",
      "juegos-de-simulacion-pc",
    ],
  },
  {
    slug: "juegos-como-among-us",
    title: "Juegos como Among Us",
    subtitle:
      "¿Te gustó Among Us y buscas algo más profundo? Descubre juegos con deducción social, traidores y trabajo en equipo que llevan la experiencia al siguiente nivel.",
    metaTitle:
      "Juegos como Among Us: 7 Alternativas con Más Profundidad | 2026",
    metaDescription:
      "Los mejores juegos parecidos a Among Us para PC: deducción social, traidores, trabajo en equipo y roleplay. Descubre Space Station 14 y otras alternativas gratis.",
    faqs: [
      {
        question: "¿Qué juegos son parecidos a Among Us?",
        answer:
          "Los mejores juegos similares a Among Us incluyen Space Station 14 (gratis, con roles profundos), Project Winter (supervivencia con traidores), Barotrauma (submarino espacial), Unfortunate Spacemen (FPS con impostores) y Town of Salem (deducción social clásica).",
      },
      {
        question: "¿Cuál es el mejor juego como Among Us pero gratis?",
        answer:
          "Space Station 14 es la mejor alternativa gratuita. Tiene deducción social como Among Us pero con más de 30 roles, sistemas complejos de química, ingeniería y medicina, y partidas que duran más de una hora con historias emergentes.",
      },
      {
        question:
          "¿Hay juegos como Among Us pero con más roles y profundidad?",
        answer:
          "Sí. Space Station 14 tiene más de 30 roles diferentes (capitán, ingeniero, médico, detective, científico, traidor, cambiaformas y más). Cada rol tiene mecánicas únicas y responsabilidades reales dentro de la estación.",
      },
    ],
    relatedWikiLinks: [
      { label: "Antagonistas y Traidores", href: "/wiki/antagonists" },
      { label: "Roles Disponibles", href: "/wiki/jobs" },
      { label: "Guía para Nuevos Jugadores", href: "/wiki/survival" },
    ],
    relatedPages: [
      "que-es-space-station-14",
      "juegos-cooperativos-pc",
      "juegos-de-supervivencia-multijugador",
      "juegos-parecidos-a-barotrauma",
    ],
  },
  {
    slug: "juegos-gratis-multijugador",
    title: "Juegos Gratis Multijugador para PC",
    subtitle:
      "Los mejores juegos multijugador gratuitos para PC en 2026. Sin pagar un centavo, sin pay-to-win. Juegos de verdad con comunidades activas.",
    metaTitle:
      "10 Juegos Gratis Multijugador PC 2026: Sin Pay-to-Win | Guía Completa",
    metaDescription:
      "Lista curada de los mejores juegos gratis multijugador para PC en 2026. Desde shooters hasta simulaciones espaciales. Sin microtransacciones abusivas.",
    faqs: [
      {
        question: "¿Cuáles son los mejores juegos gratis multijugador para PC?",
        answer:
          "Algunos de los mejores incluyen Space Station 14 (simulación espacial con roleplay), Dota 2 (MOBA), Path of Exile (ARPG), Warframe (shooter cooperativo), Team Fortress 2 (shooter de clases) y Counter-Strike 2 (shooter táctico). Todos son 100% gratis.",
      },
      {
        question: "¿Hay juegos gratis multijugador sin pay-to-win?",
        answer:
          "Sí. Space Station 14 es completamente gratis sin ninguna microtransacción. Dota 2, CS2 y Team Fortress 2 también son gratuitos con cosméticos opcionales que no afectan el juego.",
      },
      {
        question: "¿Cuál es el mejor juego gratis multijugador para jugar con amigos?",
        answer:
          "Depende del género que prefieras. Para cooperativo: Warframe o Space Station 14. Para competitivo: Dota 2 o CS2. Para sandbox creativo: Space Station 14 o Unturned.",
      },
    ],
    relatedWikiLinks: [
      { label: "Cómo Empezar en SS14", href: "/wiki/survival" },
      { label: "Departamentos del Juego", href: "/wiki/jobs" },
      { label: "Sistema de Economía", href: "/wiki/capibara-economy" },
    ],
    relatedPages: [
      "juegos-para-pc-de-bajos-recursos",
      "juegos-cooperativos-pc",
      "juegos-de-rol-online",
      "como-jugar-space-station-14",
    ],
  },
  {
    slug: "juegos-de-rol-online",
    title: "Juegos de Rol Online Gratis",
    subtitle:
      "Los mejores juegos de roleplay online para PC. Desde MMORPGs clásicos hasta simulaciones sandbox donde TÚ creas la historia.",
    metaTitle:
      "Juegos de Rol Online Gratis para PC: Los Mejores RPG y Roleplay 2026",
    metaDescription:
      "Descubre los mejores juegos de rol online gratis para PC. RPGs, roleplay sandbox y simulaciones donde creas tu personaje y vives tu propia historia.",
    faqs: [
      {
        question: "¿Cuáles son los mejores juegos de rol online gratis?",
        answer:
          "Para roleplay inmersivo: Space Station 14 (simulación espacial con 30+ roles), GTA V RP (con FiveM). Para RPGs clásicos: Path of Exile, Guild Wars 2 (base gratis), Star Wars: The Old Republic (F2P).",
      },
      {
        question: "¿Qué juego tiene el mejor roleplay online?",
        answer:
          "Space Station 14 ofrece uno de los roleplay más profundos disponibles. Cada jugador tiene un rol específico (médico, ingeniero, capitán, detective) con responsabilidades reales. Las historias emergen naturalmente de la interacción entre jugadores.",
      },
      {
        question: "¿Hay juegos de rol en español?",
        answer:
          "Sí. Space Station 14 tiene servidores en español como Estación Capibara, con wiki y comunidad completamente en español. GTA V RP también tiene muchos servidores hispanos.",
      },
    ],
    relatedWikiLinks: [
      { label: "Roles y Departamentos", href: "/wiki/jobs" },
      { label: "Guía de Roleplay", href: "/wiki/survival" },
      { label: "Antagonistas", href: "/wiki/antagonists" },
      { label: "Economía del Servidor", href: "/wiki/capibara-economy" },
    ],
    relatedPages: [
      "juegos-cooperativos-pc",
      "juegos-sandbox-multijugador",
      "juegos-de-simulacion-pc",
      "que-es-space-station-14",
    ],
  },
  {
    slug: "juegos-sandbox-multijugador",
    title: "Juegos Sandbox Multijugador",
    subtitle:
      "Juegos donde la creatividad y el caos de los jugadores crean la experiencia. Sin guiones, sin misiones lineales — solo posibilidades infinitas.",
    metaTitle:
      "Juegos Sandbox Multijugador PC: Los Mejores Juegos de Mundo Abierto 2026",
    metaDescription:
      "Los mejores juegos sandbox multijugador para PC. Mundos abiertos, creatividad ilimitada y jugabilidad emergente. Incluye opciones gratis como Space Station 14.",
    faqs: [
      {
        question: "¿Cuáles son los mejores juegos sandbox multijugador?",
        answer:
          "Minecraft (construcción infinita), Terraria (exploración 2D), Garry's Mod (sandbox de física), Barotrauma (submarino cooperativo), Space Station 14 (estación espacial con roles) y Factorio (automatización). SS14 es el único completamente gratis.",
      },
      {
        question: "¿Hay juegos sandbox gratis para PC?",
        answer:
          "Sí. Space Station 14 es un sandbox multijugador completamente gratis donde operas una estación espacial con otros jugadores. Unturned (survival sandbox) también es gratuito.",
      },
      {
        question: "¿Qué juego sandbox tiene más contenido emergente?",
        answer:
          "Space Station 14 destaca por sus historias emergentes. Cada ronda es diferente porque depende de las decisiones de todos los jugadores: traidores, accidentes de ingeniería, brotes químicos y más.",
      },
    ],
    relatedWikiLinks: [
      { label: "Ingeniería y Construcción", href: "/wiki/engineering" },
      { label: "Química y Ciencia", href: "/wiki/science" },
      { label: "Roles Disponibles", href: "/wiki/jobs" },
      { label: "Guía de Supervivencia", href: "/wiki/survival" },
    ],
    relatedPages: [
      "juegos-de-simulacion-pc",
      "juegos-de-supervivencia-multijugador",
      "juegos-cooperativos-pc",
      "juegos-parecidos-a-barotrauma",
    ],
  },
  // === WAVE 2 PAGES ===
  {
    slug: "como-jugar-space-station-14",
    title: "Cómo Jugar Space Station 14",
    subtitle:
      "Tutorial paso a paso para descargar, instalar y empezar a jugar SS14 en español. De cero a tu primera ronda en menos de 10 minutos.",
    metaTitle:
      "Cómo Jugar Space Station 14: Tutorial Completo en Español | 2026",
    metaDescription:
      "Aprende cómo descargar e instalar Space Station 14 gratis. Tutorial paso a paso para conectarte al servidor en español Estación Capibara y jugar tu primera ronda.",
    faqs: [
      {
        question: "¿Space Station 14 es gratis?",
        answer:
          "Sí, SS14 es 100% gratis. No tiene microtransacciones, pase de batalla ni pagos ocultos de ningún tipo. Puedes descargarlo desde spacestation14.com o Steam.",
      },
      {
        question: "¿SS14 funciona en mi PC?",
        answer:
          "Casi seguro que sí. SS14 funciona en Windows, Linux y macOS, y requiere menos de 2 GB de RAM y gráficos integrados. Si tu PC puede abrir un navegador, puede correr SS14.",
      },
      {
        question: "¿Puedo jugar Space Station 14 en español?",
        answer:
          "Sí. Estación Capibara es el servidor hispanohablante con wiki, guías y comunidad completamente en español. Busca 'Capibara' en la lista de servidores del launcher.",
      },
      {
        question: "¿Cuándo hay partidas en Estación Capibara?",
        answer:
          "Las rondas principales son viernes, sábados y domingos a partir de las 21:00 (hora Argentina). También hay partidas espontáneas entre semana cuando hay suficientes jugadores.",
      },
      {
        question: "¿Necesito micrófono para jugar SS14?",
        answer:
          "No. SS14 usa chat de texto integrado. No necesitas micrófono ni programa de voz externo, aunque la comunidad también usa Discord para coordinar.",
      },
    ],
    relatedWikiLinks: [
      { label: "Guía de Supervivencia", href: "/wiki/survival" },
      { label: "Trabajos y Roles", href: "/wiki/jobs" },
      { label: "Procedimiento Operativo Estándar", href: "/wiki/sop" },
      { label: "Sistema de Economía", href: "/wiki/capibara-economy" },
    ],
    relatedPages: [
      "que-es-space-station-14",
      "juegos-para-pc-de-bajos-recursos",
      "juegos-gratis-multijugador",
      "juegos-cooperativos-pc",
    ],
  },
  {
    slug: "juegos-cooperativos-pc",
    title: "Juegos Cooperativos para PC",
    subtitle:
      "Los mejores juegos cooperativos para PC en 2026. Juegos para jugar con amigos donde el trabajo en equipo es la clave del éxito.",
    metaTitle:
      "Juegos Cooperativos PC: Los Mejores para Jugar con Amigos | 2026",
    metaDescription:
      "Descubre los mejores juegos cooperativos para PC. Desde simulaciones espaciales hasta survival, juegos para jugar con amigos online gratis y de pago.",
    faqs: [
      {
        question: "¿Cuáles son los mejores juegos cooperativos para PC?",
        answer:
          "Space Station 14 (simulación espacial gratis), Deep Rock Galactic (shooter cooperativo), Valheim (survival nórdico), It Takes Two (aventura para dos), Lethal Company (terror cooperativo) y Phasmophobia (caza fantasmas). Todos ofrecen experiencias cooperativas únicas.",
      },
      {
        question: "¿Hay juegos cooperativos gratis para PC?",
        answer:
          "Sí. Space Station 14 es completamente gratis y uno de los mejores cooperativos disponibles. También están Warframe, Path of Exile y Destiny 2 (base gratis).",
      },
      {
        question: "¿Qué juego cooperativo tiene más rejugabilidad?",
        answer:
          "Space Station 14 tiene rejugabilidad infinita porque cada ronda es completamente diferente. Con 30+ roles, antagonistas aleatorios y sistemas emergentes, ninguna partida se repite.",
      },
      {
        question: "¿Se puede jugar cooperativo online en SS14?",
        answer:
          "Sí. SS14 es 100% online y cooperativo. Juegas con otros jugadores reales operando una estación espacial. Puedes coordinar con amigos eligiendo roles complementarios.",
      },
    ],
    relatedWikiLinks: [
      { label: "Departamentos", href: "/wiki/jobs" },
      { label: "Ingeniería", href: "/wiki/engineering" },
      { label: "Medicina", href: "/wiki/medical" },
      { label: "Guía de Supervivencia", href: "/wiki/survival" },
    ],
    relatedPages: [
      "juegos-de-supervivencia-multijugador",
      "juegos-gratis-multijugador",
      "juegos-como-among-us",
      "juegos-parecidos-a-barotrauma",
    ],
  },
  {
    slug: "juegos-espaciales-pc",
    title: "Juegos Espaciales para PC",
    subtitle:
      "Los mejores juegos del espacio para PC. Desde exploración galáctica hasta simulación de estaciones espaciales, los mejores títulos del género.",
    metaTitle:
      "Juegos Espaciales PC: Los Mejores Juegos del Espacio Gratis y de Pago | 2026",
    metaDescription:
      "Descubre los mejores juegos espaciales para PC en 2026. Exploración, simulación, estrategia y supervivencia en el espacio. Incluye opciones gratis como Space Station 14.",
    faqs: [
      {
        question: "¿Cuáles son los mejores juegos espaciales para PC?",
        answer:
          "Space Station 14 (simulación de estación espacial gratis), No Man's Sky (exploración), Stellaris (estrategia 4X), FTL (roguelike), Elite Dangerous (simulador de naves), Kerbal Space Program (física espacial) y Star Citizen (sandbox MMO).",
      },
      {
        question: "¿Hay juegos del espacio gratis para PC?",
        answer:
          "Sí. Space Station 14 es completamente gratis y de código abierto. Es una simulación espacial multijugador con más de 30 roles, traidores y sistemas complejos. No tiene microtransacciones.",
      },
      {
        question: "¿Qué tipo de juegos espaciales existen?",
        answer:
          "Hay varios subgéneros: exploración (No Man's Sky), estrategia (Stellaris), simulación (SS14, KSP), survival (Barotrauma), combate (Elite Dangerous) y sandbox (Star Citizen). SS14 combina simulación con roleplay y supervivencia.",
      },
      {
        question: "¿Qué juego espacial tiene el mejor multijugador?",
        answer:
          "Para cooperativo con roles profundos: Space Station 14. Para exploración: No Man's Sky. Para combate masivo: Eve Online. Para sandbox: Star Citizen. SS14 destaca por sus historias emergentes únicas.",
      },
    ],
    relatedWikiLinks: [
      { label: "Ingeniería Espacial", href: "/wiki/engineering" },
      { label: "Atmósfera y Gases", href: "/wiki/atmospherics" },
      { label: "Roles Disponibles", href: "/wiki/jobs" },
      { label: "Antagonistas", href: "/wiki/antagonists" },
    ],
    relatedPages: [
      "que-es-space-station-14",
      "juegos-parecidos-a-barotrauma",
      "juegos-de-simulacion-pc",
      "juegos-de-supervivencia-multijugador",
    ],
  },
  {
    slug: "juegos-para-pc-de-bajos-recursos",
    title: "Juegos para PC de Bajos Recursos",
    subtitle:
      "Los mejores juegos gratis y de pago que corren en cualquier PC. Sin necesidad de tarjeta gráfica dedicada ni 16 GB de RAM.",
    metaTitle:
      "Juegos para PC de Bajos Recursos Gratis: Los Mejores 2026 | Requisitos Mínimos",
    metaDescription:
      "Los mejores juegos para PC de bajos recursos gratis en 2026. Juegos que corren en gráficos integrados con menos de 4 GB RAM. Incluye requisitos mínimos de cada juego.",
    faqs: [
      {
        question: "¿Qué juegos puedo jugar en un PC de bajos recursos?",
        answer:
          "Space Station 14 (simulación espacial gratis, corre en integradas), Stardew Valley, Terraria, Among Us, Team Fortress 2, Hollow Knight, Celeste y Undertale. Todos funcionan con gráficos integrados y poca RAM.",
      },
      {
        question: "¿SS14 corre en gráficos integrados?",
        answer:
          "Sí. Space Station 14 funciona con Intel HD Graphics o AMD Vega integrados. Requiere menos de 2 GB de RAM y unos 500 MB de disco. Es uno de los juegos multijugador más ligeros disponibles.",
      },
      {
        question: "¿Hay juegos gratis para PC de bajos recursos?",
        answer:
          "Sí. Space Station 14, Team Fortress 2, Among Us (versión móvil gratis) y League of Legends corren en hardware antiguo y son completamente gratis o free-to-play.",
      },
      {
        question: "¿Qué requisitos mínimos necesito para jugar SS14?",
        answer:
          "CPU dual-core de 1.5 GHz, 2 GB de RAM, gráficos integrados (Intel HD 4000 o superior), 500 MB de disco y conexión a internet. Funciona en Windows, Linux y macOS.",
      },
    ],
    relatedWikiLinks: [
      { label: "Cómo Empezar", href: "/wiki/survival" },
      { label: "Trabajos y Roles", href: "/wiki/jobs" },
      { label: "La Estación y los Turnos", href: "/wiki/ss14" },
    ],
    relatedPages: [
      "como-jugar-space-station-14",
      "juegos-gratis-multijugador",
      "juegos-cooperativos-pc",
      "juegos-como-among-us",
    ],
  },
  {
    slug: "juegos-de-supervivencia-multijugador",
    title: "Juegos de Supervivencia Multijugador",
    subtitle:
      "Los mejores juegos survival multijugador para PC. Sobrevive, coopera y lucha por recursos en mundos hostiles con otros jugadores.",
    metaTitle:
      "Juegos de Supervivencia Multijugador PC: Los Mejores Survival Coop | 2026",
    metaDescription:
      "Descubre los mejores juegos de supervivencia multijugador para PC. Survival cooperativo, base building y exploración. Gratis y de pago, incluye Space Station 14.",
    faqs: [
      {
        question: "¿Cuáles son los mejores juegos survival multijugador?",
        answer:
          "Space Station 14 (supervivencia espacial gratis), Project Zomboid (zombies), Valheim (mitología nórdica), The Forest (horror), Raft (océano), Barotrauma (submarino) y Rust (PvP hardcore). Todos ofrecen supervivencia cooperativa online.",
      },
      {
        question: "¿Hay juegos de supervivencia gratis?",
        answer:
          "Sí. Space Station 14 es completamente gratis y combina supervivencia con roleplay y sistemas emergentes. Unturned (zombies) también es gratuito. La mayoría de los demás survival son de pago.",
      },
      {
        question: "¿Qué juego survival tiene el mejor cooperativo?",
        answer:
          "Depende del estilo. Para cooperativo con roles especializados: SS14. Para construcción y exploración: Valheim. Para horror: The Forest. Para simulación: Barotrauma. SS14 destaca por la profundidad de sus sistemas cooperativos.",
      },
      {
        question: "¿SS14 es un juego de supervivencia?",
        answer:
          "Sí, en parte. En SS14 debes sobrevivir amenazas como despresurización, incendios, envenenamientos, traidores y desastres. Pero a diferencia de otros survival, la supervivencia es social: necesitas a otros jugadores para mantenerte vivo.",
      },
    ],
    relatedWikiLinks: [
      { label: "Guía de Supervivencia", href: "/wiki/survival" },
      { label: "Atmósfera y Peligros", href: "/wiki/atmospherics" },
      { label: "Medicina de Emergencia", href: "/wiki/medical" },
      { label: "Antagonistas", href: "/wiki/antagonists" },
    ],
    relatedPages: [
      "juegos-cooperativos-pc",
      "juegos-parecidos-a-barotrauma",
      "juegos-sandbox-multijugador",
      "juegos-espaciales-pc",
    ],
  },
  {
    slug: "juegos-parecidos-a-barotrauma",
    title: "Juegos Parecidos a Barotrauma",
    subtitle:
      "¿Te encantó Barotrauma? Descubre juegos con la misma profundidad de sistemas, cooperación bajo presión y caos emergente.",
    metaTitle:
      "Juegos Parecidos a Barotrauma: Las Mejores Alternativas | 2026",
    metaDescription:
      "Los mejores juegos como Barotrauma: cooperación bajo presión, sistemas complejos y caos emergente. Space Station 14, FTL, Stormworks y más alternativas.",
    faqs: [
      {
        question: "¿Qué juegos son parecidos a Barotrauma?",
        answer:
          "Space Station 14 (estación espacial con roles, gratis), FTL: Faster Than Light (gestión de nave roguelike), Stormworks (rescate y construcción), Pulsar: Lost Colony (nave espacial coop) y We Need To Go Deeper (submarino roguelike).",
      },
      {
        question: "¿SS14 es como Barotrauma?",
        answer:
          "Sí, comparten mucho ADN: roles especializados, sistemas complejos que interactúan, traidores, reparaciones bajo presión y caos emergente. SS14 añade más roles (30+), economía, y es completamente gratis.",
      },
      {
        question: "¿Hay algún juego gratis como Barotrauma?",
        answer:
          "Space Station 14 es la alternativa gratuita más cercana. Tiene la misma profundidad de sistemas, roles especializados, traidores y cooperación bajo presión, pero en una estación espacial en lugar de un submarino.",
      },
      {
        question: "¿Qué tiene SS14 que no tenga Barotrauma?",
        answer:
          "SS14 tiene más de 30 roles (vs ~5 en Barotrauma), economía con moneda propia, más variedad de antagonistas, sistema legal/judicial, química avanzada y es 100% gratis y de código abierto.",
      },
    ],
    relatedWikiLinks: [
      { label: "Ingeniería", href: "/wiki/engineering" },
      { label: "Atmósfera", href: "/wiki/atmospherics" },
      { label: "Roles Disponibles", href: "/wiki/jobs" },
      { label: "Antagonistas", href: "/wiki/antagonists" },
    ],
    relatedPages: [
      "juegos-espaciales-pc",
      "juegos-de-supervivencia-multijugador",
      "juegos-de-simulacion-pc",
      "juegos-cooperativos-pc",
    ],
  },
  {
    slug: "juegos-de-simulacion-pc",
    title: "Juegos de Simulación para PC",
    subtitle:
      "Los mejores simuladores para PC. Juegos con sistemas profundos, historias emergentes y complejidad adictiva que recompensan la dedicación.",
    metaTitle:
      "Juegos de Simulación PC Gratis y de Pago: Los Mejores Simuladores | 2026",
    metaDescription:
      "Los mejores juegos de simulación para PC en 2026. Desde estaciones espaciales hasta fábricas, los simuladores más profundos y adictivos. Incluye opciones gratis.",
    faqs: [
      {
        question: "¿Cuáles son los mejores juegos de simulación para PC?",
        answer:
          "Space Station 14 (simulación espacial gratis), Factorio (automatización de fábricas), Rimworld (colonia narrativa), Dwarf Fortress (la simulación definitiva), Cities Skylines (ciudades), Oxygen Not Included (supervivencia en colonia) y Prison Architect (gestión de prisión).",
      },
      {
        question: "¿Hay simuladores gratis para PC?",
        answer:
          "Sí. Space Station 14 es una simulación espacial multijugador completamente gratis y de código abierto. Combina simulación de sistemas con roleplay y cooperación online.",
      },
      {
        question: "¿Qué hace bueno a un juego de simulación?",
        answer:
          "Los mejores simuladores tienen sistemas profundos que interactúan entre sí, creando historias emergentes. Factorio con su automatización, Rimworld con sus colonos, y SS14 con sus jugadores reales son ejemplos de simulación con narrativa emergente.",
      },
      {
        question: "¿SS14 es un juego de simulación?",
        answer:
          "Sí. SS14 simula una estación espacial completa: sistemas eléctricos, atmosféricos, químicos, médicos, económicos y sociales. La diferencia es que cada sistema es operado por un jugador real, no por IA.",
      },
    ],
    relatedWikiLinks: [
      { label: "Ingeniería", href: "/wiki/engineering" },
      { label: "Química", href: "/wiki/science" },
      { label: "Economía", href: "/wiki/capibara-economy" },
      { label: "Atmósfera", href: "/wiki/atmospherics" },
    ],
    relatedPages: [
      "juegos-sandbox-multijugador",
      "juegos-espaciales-pc",
      "juegos-parecidos-a-barotrauma",
      "que-es-space-station-14",
    ],
  },
];

export const SEO_PAGE_SLUGS = SEO_PAGES.map((p) => p.slug);

export interface GameEntry {
  name: string;
  description: string;
  free: boolean;
  multiplayer: boolean;
  roleplay: boolean;
  sandbox: boolean;
  socialDeduction: boolean;
  highlighted?: boolean;
}

export interface LowSpecGame {
  name: string;
  description: string;
  free: boolean;
  minRam: string;
  minCpu: string;
  minGpu: string;
  storage: string;
  highlighted?: boolean;
}

export const AMONG_US_ALTERNATIVES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Simulación espacial multijugador con más de 30 roles, traidores, sistemas complejos y roleplay profundo. Cada ronda es una historia única. Completamente gratis y de código abierto.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "Project Winter",
    description:
      "Survival cooperativo con traidores en un entorno nevado. Debes recolectar recursos y escapar mientras descubres quién sabotea al grupo.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: true,
  },
  {
    name: "Barotrauma",
    description:
      "Submarino espacial cooperativo con traidores opcionales. Gestiona sistemas complejos mientras exploras un océano alienígena. Muy similar a SS14 en profundidad.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
  },
  {
    name: "Unfortunate Spacemen",
    description:
      "FPS espacial donde un monstruo se disfraza de compañero. Combina acción shooter con deducción social en primera persona.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: true,
  },
  {
    name: "Town of Salem",
    description:
      "Juego clásico de deducción social basado en Mafia/Hombre Lobo. Roles variados, votaciones y engaño en formato por turnos.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: true,
  },
  {
    name: "Deceit",
    description:
      "FPS de deducción social donde debes escapar de un asilo. Los infectados pueden transformarse en monstruos cuando se apagan las luces.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: true,
  },
  {
    name: "Goose Goose Duck",
    description:
      "Clon directo de Among Us con más roles y mecánicas. Gratis en Steam con actualizaciones frecuentes.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: true,
  },
];

export const FREE_MULTIPLAYER_GAMES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Simulación espacial con 30+ roles donde operas una estación espacial con otros jugadores. Traidores, caos emergente y roleplay profundo. Sin microtransacciones de ningún tipo.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "Dota 2",
    description:
      "El MOBA más competitivo del mercado. Partidas 5v5 con más de 120 héroes. Completamente gratis — solo cosméticos de pago.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Counter-Strike 2",
    description:
      "El shooter táctico por excelencia. Equipos de 5 atacantes vs defensores en rondas cortas y competitivas.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Path of Exile",
    description:
      "ARPG con la mayor profundidad de builds del género. Considerado el verdadero sucesor de Diablo 2. Gratis con solo tabs de inventario de pago.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Warframe",
    description:
      "Shooter cooperativo en tercera persona con parkour espacial. Cientos de armas y warframes para personalizar. Gratis con grind justo.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Team Fortress 2",
    description:
      "Shooter de clases con estilo cartoon. Después de casi 20 años sigue teniendo una comunidad enorme y actualizaciones.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Apex Legends",
    description:
      "Battle royale con héroes y habilidades. Tríos intensos con movimiento fluido y tiroteos satisfactorios.",
    free: true,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Genshin Impact",
    description:
      "RPG de mundo abierto con exploración, combate elemental y una historia extensa. Multijugador cooperativo para dominios.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: false,
    socialDeduction: false,
  },
];

export const ROLEPLAY_GAMES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "El roleplay más profundo en un juego gratis. Cada jugador tiene un rol real con responsabilidades (médico, ingeniero, capitán, detective). Las historias emergen de la interacción entre todos los jugadores. Servidores en español disponibles.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "GTA V RP (FiveM)",
    description:
      "Roleplay en la ciudad de Los Santos con servidores modificados. Necesitas GTA V (de pago) pero los servidores RP son gratuitos. Gran comunidad hispana.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "VRChat",
    description:
      "Plataforma social en VR (también funciona sin VR) con mundos creados por usuarios. Roleplay, socialización y creatividad sin límites.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Guild Wars 2",
    description:
      "MMORPG con historia épica y sistema de eventos dinámicos. La versión base es gratuita con contenido abundante.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Star Wars: The Old Republic",
    description:
      "MMORPG de BioWare en el universo Star Wars. Historia completamente narrada con decisiones morales. F2P con restricciones.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Path of Exile",
    description:
      "ARPG con narrativa oscura y sistema de builds infinito. Ideal para quienes disfrutan crear personajes únicos y poderosos.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: false,
    socialDeduction: false,
  },
];

export const SANDBOX_GAMES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Sandbox multijugador donde cada ronda es diferente. Construye, repara, experimenta y sobrevive en una estación espacial con otros jugadores. El caos emergente crea historias que ningún guionista podría escribir.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "Minecraft",
    description:
      "El sandbox definitivo. Construcción infinita, exploración y supervivencia en un mundo de bloques. Servidores multijugador masivos.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Terraria",
    description:
      "Aventura sandbox 2D con exploración, construcción, combate contra jefes y un loop de progresión adictivo. Excelente en cooperativo.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Garry's Mod",
    description:
      "El sandbox de física por excelencia. Crea lo que imagines con el motor Source. Miles de modos de juego creados por la comunidad.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Barotrauma",
    description:
      "Gestiona un submarino en un océano alienígena. Sistemas complejos, roleplay y caos emergente similar a SS14 pero bajo el agua.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
  },
  {
    name: "Factorio",
    description:
      "Construye y automatiza fábricas masivas en un planeta alienígena. Multijugador cooperativo para diseñar la fábrica perfecta.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
];

export const COOPERATIVE_GAMES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Simulación espacial cooperativa donde cada jugador tiene un rol vital. Médicos curan, ingenieros reparan, científicos investigan — todos dependen de todos. Gratis y con servidor en español.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "Deep Rock Galactic",
    description:
      "Shooter cooperativo donde enanos mineros exploran cuevas alienígenas. Cuatro clases complementarias, generación procedural y extracciones tensas.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Valheim",
    description:
      "Survival cooperativo en un mundo de mitología nórdica. Exploración, construcción de bases y combate contra jefes épicos con hasta 10 jugadores.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "It Takes Two",
    description:
      "Aventura cooperativa para exactamente dos jugadores. Mecánicas que cambian constantemente y requieren coordinación perfecta. Ganador del GOTY 2021.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Lethal Company",
    description:
      "Terror cooperativo donde recoges chatarra en lunas peligrosas para cumplir cuotas corporativas. Tensión constante y momentos hilarantes.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Phasmophobia",
    description:
      "Caza fantasmas cooperativa con detección de voz real. Usa equipamiento para identificar el tipo de fantasma antes de que te atrape.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Stardew Valley",
    description:
      "Farming sim con cooperativo para hasta 4 jugadores. Cultiva, pesca, explora minas y construye tu granja ideal juntos.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Don't Starve Together",
    description:
      "Survival cooperativo con estilo Tim Burton. Recolecta recursos, investiga ciencia y sobrevive en un mundo hostil y surrealista.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
];

export const SPACE_GAMES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Simulación de estación espacial multijugador con 30+ roles. Opera sistemas, enfrenta amenazas y vive historias emergentes. Gratis y de código abierto.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "No Man's Sky",
    description:
      "Exploración espacial en un universo procedural con billones de planetas. Tras su redemption arc, ahora es un excelente cooperativo con base building.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Stellaris",
    description:
      "Gran estrategia 4X en el espacio de Paradox. Construye tu imperio galáctico, gestiona diplomacia y conquista la galaxia.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "FTL: Faster Than Light",
    description:
      "Roguelike de gestión de nave espacial. Cada run es diferente con eventos aleatorios, combate táctico y decisiones difíciles.",
    free: false,
    multiplayer: false,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Elite Dangerous",
    description:
      "Simulador de naves espaciales con una galaxia a escala 1:1 de la Vía Láctea. Combate, comercio, exploración y minería.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Kerbal Space Program",
    description:
      "Simulador de física espacial donde diseñas cohetes y misiones. Aprende orbital mechanics mientras tus Kerbals exploran el sistema solar.",
    free: false,
    multiplayer: false,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Starfield",
    description:
      "RPG espacial de Bethesda con exploración de planetas, combate y nave personalizable. Un Skyrim en el espacio.",
    free: false,
    multiplayer: false,
    roleplay: true,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Star Citizen",
    description:
      "Sandbox MMO espacial en desarrollo con fidelidad gráfica extrema. Combate, comercio, exploración y roles especializados en naves multitripulación.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: false,
  },
];

export const LOW_SPEC_GAMES: LowSpecGame[] = [
  {
    name: "Space Station 14",
    description:
      "Simulación espacial multijugador con 30+ roles. Completamente gratis, sin microtransacciones. Corre en prácticamente cualquier PC con gráficos integrados.",
    free: true,
    minRam: "2 GB",
    minCpu: "Dual-core 1.5 GHz",
    minGpu: "Intel HD 4000",
    storage: "500 MB",
    highlighted: true,
  },
  {
    name: "Stardew Valley",
    description:
      "Farming sim con cooperativo. Cultiva, pesca, explora minas y vive una vida tranquila en el campo. Adorable y adictivo.",
    free: false,
    minRam: "2 GB",
    minCpu: "Dual-core 2.0 GHz",
    minGpu: "Intel HD 3000",
    storage: "500 MB",
  },
  {
    name: "Terraria",
    description:
      "Aventura sandbox 2D con exploración, construcción y combate contra jefes. Cientos de horas de contenido y excelente cooperativo.",
    free: false,
    minRam: "2.5 GB",
    minCpu: "Dual-core 2.0 GHz",
    minGpu: "Intel HD 3000",
    storage: "200 MB",
  },
  {
    name: "Among Us",
    description:
      "Deducción social en el espacio. Encuentra al impostor entre la tripulación. Simple, adictivo y perfecto para jugar con amigos.",
    free: true,
    minRam: "1 GB",
    minCpu: "SSE2",
    minGpu: "Integrada",
    storage: "250 MB",
  },
  {
    name: "Team Fortress 2",
    description:
      "Shooter de clases con estilo cartoon que sigue siendo divertido después de casi 20 años. Nueve clases únicas y modos variados.",
    free: true,
    minRam: "512 MB",
    minCpu: "Pentium 4 1.7 GHz",
    minGpu: "DirectX 8.1",
    storage: "15 GB",
  },
  {
    name: "Hollow Knight",
    description:
      "Metroidvania aclamado por la crítica con combate preciso, exploración profunda y arte hermoso dibujado a mano.",
    free: false,
    minRam: "1 GB",
    minCpu: "Intel Core 2 Duo",
    minGpu: "Intel HD 4000",
    storage: "9 GB",
  },
  {
    name: "Celeste",
    description:
      "Plataformas de precisión con una historia emotiva sobre ansiedad y superación personal. Controles perfectos y dificultad justa.",
    free: false,
    minRam: "512 MB",
    minCpu: "Intel Core i3",
    minGpu: "Integrada",
    storage: "1.2 GB",
  },
  {
    name: "Undertale",
    description:
      "RPG donde puedes completar el juego sin matar a nadie. Historia memorable, personajes carismáticos y una de las mejores bandas sonoras de los videojuegos.",
    free: false,
    minRam: "512 MB",
    minCpu: "Dual-core 2.0 GHz",
    minGpu: "Integrada",
    storage: "200 MB",
  },
];

export const SURVIVAL_GAMES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Supervivencia social en una estación espacial. Enfrenta despresurización, incendios, envenenamientos y traidores. La diferencia: necesitas a otros jugadores para sobrevivir. Gratis.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "Project Zomboid",
    description:
      "El simulador de apocalipsis zombie más realista. Construcción, agricultura, cocina, mecánica y supervivencia hardcore con multijugador masivo.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Valheim",
    description:
      "Survival cooperativo en un mundo de mitología nórdica. Exploración, construcción épica y combate contra jefes con hasta 10 jugadores.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "The Forest / Sons of the Forest",
    description:
      "Survival horror en una isla habitada por mutantes. Construye refugios, crea armas y explora un sistema de cuevas aterrador.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Raft",
    description:
      "Survival cooperativo en el océano. Expande tu balsa, pesca, investiga y explora islas mientras sobrevives en mar abierto.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Barotrauma",
    description:
      "Supervivencia cooperativa en un submarino bajo un océano alienígena. Sistemas complejos, roles y traidores opcionales. Muy similar a SS14.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
  },
  {
    name: "Don't Starve Together",
    description:
      "Supervivencia cooperativa con estética Tim Burton. Recolecta, investiga, construye y sobrevive en un mundo surrealista y hostil.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Rust",
    description:
      "Survival PvP hardcore. Recolecta, construye y defiende tu base contra otros jugadores. Brutal, intenso y con una comunidad enorme.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
];

export const BAROTRAUMA_ALTERNATIVES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Si Barotrauma es un submarino con roles y caos, SS14 es una estación espacial con el mismo ADN pero a mayor escala. 30+ roles, economía, traidores, sistemas interconectados y es completamente gratis.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "FTL: Faster Than Light",
    description:
      "Roguelike de gestión de nave donde asignas tripulantes a sistemas, tomas decisiones en eventos y combates naves enemigas. La versión singleplayer de la gestión de Barotrauma.",
    free: false,
    multiplayer: false,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Stormworks",
    description:
      "Construye y pilota vehículos de rescate (barcos, helicópteros, submarinos) con ingeniería detallada. Cooperativo con misiones de rescate.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Pulsar: Lost Colony",
    description:
      "Tripula una nave espacial con hasta 5 jugadores. Cada rol (capitán, piloto, científico, ingeniero, guerrero) tiene mecánicas únicas. Exploración procedural.",
    free: false,
    multiplayer: true,
    roleplay: true,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "We Need To Go Deeper",
    description:
      "Roguelike cooperativo en submarino. Tripula un submarino con amigos, combate monstruos marinos y explora las profundidades del océano.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
  {
    name: "Nebulous: Fleet Command",
    description:
      "Táctica naval en el espacio. Diseña y comanda flotas de naves con sistemas detallados de radar, armas y contramedidas electrónicas.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: false,
    socialDeduction: false,
  },
];

export const SIMULATION_GAMES: GameEntry[] = [
  {
    name: "Space Station 14",
    description:
      "Simulación de estación espacial donde cada sistema es operado por un jugador real. Electricidad, atmosféricos, química, medicina, economía — todo interactúa. Gratis y con servidor en español.",
    free: true,
    multiplayer: true,
    roleplay: true,
    sandbox: true,
    socialDeduction: true,
    highlighted: true,
  },
  {
    name: "Factorio",
    description:
      "Automatización de fábricas llevada al extremo. Diseña cadenas de producción, optimiza logística y defiende tu fábrica de alienígenas. Adictivo al nivel de 'una partida más'.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Rimworld",
    description:
      "Simulador de colonia con narrativa emergente. Cada colono tiene personalidad, relaciones y traumas. Las historias que genera son legendarias.",
    free: false,
    multiplayer: false,
    roleplay: true,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Dwarf Fortress",
    description:
      "La simulación más profunda jamás creada. Simula geología, historia, culturas y hasta las emociones individuales de cada enano. Ahora con gráficos en Steam.",
    free: false,
    multiplayer: false,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Cities: Skylines",
    description:
      "Simulador de ciudades con gestión de tráfico, zonas, servicios y economía. El sucesor espiritual de SimCity con moddeo masivo.",
    free: false,
    multiplayer: false,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Oxygen Not Included",
    description:
      "Supervivencia en colonia de Klei. Gestiona recursos, temperatura, gases y electricidad para mantener vivos a tus duplicantes en un asteroide.",
    free: false,
    multiplayer: false,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Prison Architect",
    description:
      "Diseña y gestiona una prisión. Sistemas de seguridad, logística, programas de rehabilitación y motines. Gestión con consecuencias reales.",
    free: false,
    multiplayer: false,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
  {
    name: "Stardew Valley",
    description:
      "Simulador de granja con pesca, minería, relaciones y comunidad. Sencillo por fuera, profundo por dentro. Cooperativo para hasta 4 jugadores.",
    free: false,
    multiplayer: true,
    roleplay: false,
    sandbox: true,
    socialDeduction: false,
  },
];
