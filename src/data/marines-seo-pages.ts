import type { ServerSeoPageData } from "@/data/server-seo-types";

export const RMC14_SPANISH_PAGE: ServerSeoPageData = {
  slug: "rmc14-en-espanol",
  datePublished: "2026-08-18",
  quickAnswer:
    "Sí, hay RMC14 en español: Capibara Marines es un servidor comunitario hispanohablante que ejecuta ese contenido sobre Space Station 14, con la wiki traducida y rondas asimétricas entre una fuerza de marines y una colmena de xenónidos controlada por jugadores. No es el servidor oficial del proyecto, sino una comunidad aparte que se organiza en Discord.",
  title: "RMC14 en Español: Colonial Marines contra Xenónidos en SS14",
  subtitle:
    "Conoce el servidor comunitario en español que ejecuta contenido de RMC14 (el juego de marines coloniales sobre Space Station 14): rondas asimétricas donde una fuerza de marines desembarca y una colmena de xenónidos controlada por jugadores intenta detenerla.",
  metaTitle: "RMC14 en Español: Colonial Marines Gratis | Capibara Marines",
  metaDescription:
    "¿Un juego de marines contra alienígenas en español? Capibara Marines es el servidor comunitario de RMC14 (Colonial Marines sobre SS14): gratis y con wiki traducida.",
  searchQueries: [
    "rmc14 español",
    "colonial marines en español",
    "juego de marines contra alienígenas",
    "colonial marines ss14",
    "capibara marines",
  ],
  eyebrow: "CAPIBARA MARINES",
  sections: [
    {
      title: "¿Qué es RMC14?",
      paragraphs: [
        "RMC14 es un proyecto de código abierto que recrea la experiencia de Colonial Marines sobre el motor de Space Station 14. En lugar de una estación con departamentos, cada ronda plantea un despliegue militar: una nave, un destino hostil y dos bandos con objetivos incompatibles.",
        "El resultado es una partida asimétrica. Decenas de jugadores forman escuadras de marines con roles definidos, mientras otro grupo encarna a los xenónidos, una colmena que crece, evoluciona y construye su propio territorio. Ninguno de los dos lados sigue un guion: la ronda se decide por coordinación, información y errores.",
      ],
      points: [
        "Rondas asimétricas de marines contra xenónidos",
        "Roles militares con equipo y cadena de mando",
        "Colmena que evoluciona por castas y tiers",
        "Proyecto de código abierto sobre el motor de SS14",
      ],
    },
    {
      title: "Qué ofrece Capibara Marines",
      paragraphs: [
        "Capibara Marines es un servidor de la comunidad Capibara que ejecuta contenido de RMC14 para jugadores hispanohablantes. No es el servidor oficial del proyecto RMC14 ni forma parte de su equipo de desarrollo: es una comunidad separada que traduce y presenta esa experiencia en español.",
        "La wiki del servidor recoge las guías de RMC14 traducidas: roles de marine, castas de xenónido, comunicaciones, requisiciones y estructuras de la colmena. Poder leer los procedimientos en tu idioma antes de entrar reduce mucho la curva de aprendizaje de una ronda que depende tanto de la coordinación.",
      ],
    },
    {
      title: "Cómo empezar",
      paragraphs: [
        "Space Station 14 es gratuito y de código abierto, y se descarga desde spacestation14.com para Windows, Linux y macOS. Al ser un juego en dos dimensiones con vista cenital, funciona en equipos modestos y no exige una tarjeta gráfica dedicada.",
        "Antes de tu primer despliegue conviene leer la guía para nuevos jugadores y el manual del fusilero, que explican el equipo básico, la munición y la disciplina de fuego. Por política, esta web no publica direcciones de conexión sin verificar: el acceso se anuncia en el Discord de la comunidad.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué es RMC14?",
      answer:
        "RMC14 es un proyecto de código abierto que recrea la jugabilidad de Colonial Marines sobre el motor de Space Station 14. Cada ronda enfrenta a una fuerza de marines con roles militares contra una colmena de xenónidos controlada por jugadores.",
    },
    {
      question: "¿Capibara Marines es el servidor oficial de RMC14?",
      answer:
        "No. Capibara Marines es un servidor comunitario en español mantenido por la comunidad Capibara. Ejecuta contenido de RMC14, pero no representa al proyecto original ni a su equipo de desarrollo.",
    },
    {
      question: "¿Hace falta pagar algo para jugar?",
      answer:
        "No. Space Station 14 es gratuito y de código abierto: se descarga desde spacestation14.com y no requiere comprar el juego ni contenido adicional.",
    },
    {
      question: "¿Está todo en español?",
      answer:
        "La web y la wiki de Capibara Marines se presentan en español. La traducción es un trabajo comunitario en curso, por lo que algunas páginas concretas pueden mostrar todavía texto original en inglés.",
    },
    {
      question: "¿Dónde encuentro el servidor?",
      answer:
        "En el Discord de la comunidad, que es donde se publican los avisos de acceso. Aquí no aparece ninguna dirección de conexión, porque no difundimos las que no están verificadas.",
    },
  ],
  wikiLinks: [
    { label: "Guía Colonial Marines", href: "/wiki-marines/rmc14/" },
    {
      label: "Guías para nuevos jugadores",
      href: "/wiki-marines/rmc-guide-new-player/",
    },
    { label: "Roles de marine", href: "/wiki-marines/rmc-guide-marine-roles/" },
    {
      label: "Castas de xenónido",
      href: "/wiki-marines/rmc-guide-xenonid-roles/",
    },
  ],
  relatedPages: [
    {
      label: "Cómo jugar Capibara Marines",
      href: "/como-jugar-capibara-marines/",
      description:
        "Descarga el juego, prepara tu personaje y sobrevive a tu primera ronda.",
    },
    {
      label: "Roles y escuadras de marines",
      href: "/roles-y-escuadras-marines-rmc14/",
      description:
        "Fusileros, líderes, especialistas, mando y logística de la UNMC.",
    },
    {
      label: "Servidor Capibara Marines",
      href: "/marines/",
      description:
        "Ficha del servidor con su estado, sus secciones y sus recursos.",
    },
  ],
};

export const MARINES_GETTING_STARTED_PAGE: ServerSeoPageData = {
  slug: "como-jugar-capibara-marines",
  datePublished: "2026-08-18",
  quickAnswer:
    "Para jugar hacen falta tres pasos: descargar gratis Space Station 14 desde spacestation14.com, crear tu personaje en el editor y entrar como fusilero, el rol de escuadra pensado para la primera ronda. El juego se mueve en portátiles sin tarjeta gráfica dedicada y la comunidad anuncia horarios y despliegues en su Discord.",
  title: "Cómo Jugar Capibara Marines: Guía para Empezar",
  subtitle:
    "Desde la descarga de Space Station 14 hasta tu primera ronda como fusilero: los pasos básicos para entrar en Capibara Marines sin perderte.",
  metaTitle: "Cómo Jugar Capibara Marines | Guía RMC14",
  metaDescription:
    "Aprende a jugar Capibara Marines paso a paso: descarga Space Station 14 gratis, crea tu personaje y sobrevive a tu primera ronda como fusilero de la UNMC.",
  searchQueries: [
    "cómo jugar capibara marines",
    "cómo jugar rmc14",
    "rmc14 tutorial español",
    "colonial marines ss14 guía",
  ],
  eyebrow: "PRIMEROS PASOS",
  sections: [
    {
      title: "Descarga Space Station 14",
      paragraphs: [
        "Capibara Marines funciona sobre Space Station 14, un juego multijugador gratuito y de código abierto. El lanzador se descarga desde spacestation14.com y existe para Windows, Linux y macOS; desde él se accede a la lista de servidores públicos.",
        "Al tratarse de un simulador en dos dimensiones con vista cenital, los requisitos son bajos: un portátil sin gráfica dedicada suele moverlo sin problemas. Tampoco hay compras dentro del juego ni contenido de pago que desbloquear.",
      ],
      points: [
        "Descarga gratuita desde spacestation14.com",
        "Disponible para Windows, Linux y macOS",
        "Funciona en equipos modestos",
        "Sin compras ni suscripciones",
      ],
    },
    {
      title: "Prepara tu personaje y tu primera ronda",
      paragraphs: [
        "Antes de entrar, dedica unos minutos al editor de personaje y a los controles: inventario, manos, interacción con objetos y canales de comunicación. En una ronda militar, saber hablar por radio importa tanto como saber disparar.",
        "El fusilero es el punto de entrada natural. Recibe un equipo estándar, forma parte de una escuadra y recibe órdenes de su líder, así que puedes aprender el ritmo de la partida sin cargar con decisiones que afectan a decenas de personas. El manual básico del fusilero explica munición, curación de campo y disciplina de fuego.",
      ],
    },
    {
      title: "Coordinación y comunidad",
      paragraphs: [
        "Las escuadras se organizan por radio: el líder marca objetivos, los especialistas anuncian su equipo y los médicos piden posiciones. Escuchar antes de hablar y usar el canal correcto evita el ruido que suele hundir a los grupos improvisados.",
        "El Discord de la comunidad es donde se avisan despliegues, cambios y horarios, y también el único sitio donde se comparte la forma de entrar: aquí no difundimos direcciones de conexión sin verificar. Mientras tanto, aprovecha la wiki en español para preparar el rol que quieras aprender.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto cuesta jugar a Capibara Marines?",
      answer:
        "Nada. Space Station 14 es gratuito y de código abierto, y el servidor es comunitario. Solo necesitas descargar el lanzador desde spacestation14.com.",
    },
    {
      question: "¿Qué necesito para que funcione en mi PC?",
      answer:
        "Space Station 14 es un juego en dos dimensiones con vista cenital y requisitos bajos. Funciona en ordenadores modestos, incluidos portátiles sin tarjeta gráfica dedicada, y hay versiones para Windows, Linux y macOS.",
    },
    {
      question: "¿Qué rol conviene elegir la primera vez?",
      answer:
        "El fusilero de la UNMC. Recibe equipo estándar, actúa dentro de una escuadra y sigue las órdenes de su líder, lo que permite aprender la estructura de la ronda sin asumir responsabilidades de mando.",
    },
    {
      question: "¿Necesito micrófono para jugar?",
      answer:
        "No. La comunicación dentro del juego se realiza por texto, a través de los canales de radio y del habla local. La comunidad utiliza Discord para anuncios, pero la ronda se juega escribiendo.",
    },
  ],
  wikiLinks: [
    {
      label: "Guías para nuevos jugadores",
      href: "/wiki-marines/rmc-guide-new-player/",
    },
    { label: "Controles", href: "/wiki-marines/controls/" },
    {
      label: "Manual básico del fusilero",
      href: "/wiki-marines/rmc-guide-role-rifleman/",
    },
    {
      label: "Comunicaciones de los marines",
      href: "/wiki-marines/rmc-guide-marine-communications/",
    },
  ],
  relatedPages: [
    {
      label: "RMC14 en español",
      href: "/rmc14-en-espanol/",
      description:
        "Qué es RMC14 y qué aporta la versión comunitaria de Capibara.",
    },
    {
      label: "Xenónidos en RMC14",
      href: "/xenonidos-rmc14/",
      description: "El otro bando: castas, tiers, la Reina y las estructuras.",
    },
    {
      label: "Cómo jugar Space Station 14",
      href: "/como-jugar-space-station-14/",
      description: "Los fundamentos del juego sobre el que corre el servidor.",
    },
  ],
};

export const MARINE_ROLES_PAGE: ServerSeoPageData = {
  slug: "roles-y-escuadras-marines-rmc14",
  datePublished: "2026-08-18",
  quickAnswer:
    "Una escuadra de la UNMC combina un líder, fusileros y funciones de apoyo, y sobre ellas se añaden cuatro especialistas —francotirador, demoliciones, granadero y explorador—, médico de combate, técnico de combate, policía militar, roles de mando, apoyo aéreo cercano y requisiciones. Para la primera ronda conviene el fusilero, que recibe equipo estándar y órdenes claras de su líder.",
  title: "Roles y Escuadras de Marines en RMC14",
  subtitle:
    "Cómo se reparte el trabajo dentro de una escuadra de la UNMC: fusileros, líderes, especialistas, médicos, técnicos, mando, apoyo aéreo y requisiciones.",
  metaTitle: "Roles y Escuadras de Marines en RMC14",
  metaDescription:
    "Guía en español de los roles marine de RMC14: fusilero, líder de escuadra, especialistas, médico, técnico de combate, mando, CAS y requisiciones.",
  searchQueries: [
    "roles rmc14",
    "rmc14 marine roles",
    "escuadras colonial marines ss14",
    "especialista rmc14",
  ],
  eyebrow: "ROLES DE MARINE",
  sections: [
    {
      title: "La escuadra como unidad básica",
      paragraphs: [
        "Los marines no despliegan como un grupo indistinto: se organizan en escuadras con un líder, fusileros y funciones de apoyo. Esa estructura reparte información y responsabilidad, y es lo que permite que decenas de jugadores actúen de forma coherente sobre un mismo mapa.",
        "El fusilero forma el grueso de la fuerza y sostiene la línea; el líder de escuadra asigna posiciones, marca objetivos y mantiene el contacto con el mando. Sin ese enlace, cada escuadra acaba luchando su propia ronda por separado.",
      ],
      points: [
        "Fusilero: núcleo de la escuadra y de la línea de fuego",
        "Líder de escuadra: órdenes, marcado y enlace con el mando",
        "Especialistas: francotirador, demoliciones, granadero y explorador",
        "Apoyo: médico de combate, técnico de combate y policía militar",
      ],
    },
    {
      title: "Especialistas y apoyo",
      paragraphs: [
        "Los recursos de élite de la UNMC cubren necesidades concretas: el francotirador aporta alcance y observación, demoliciones abre o cierra rutas, el granadero castiga concentraciones enemigas y el explorador trabaja adelantado para dar información temprana. Cada uno recibe un equipo distinto y rinde mal si actúa aislado.",
        "El apoyo decide cuánto dura la fuerza. El médico de combate estabiliza y evacúa heridos, el técnico de combate levanta defensas y mantiene el equipo, y la policía militar gestiona el orden a bordo. Son funciones con procedimientos propios que conviene leer antes de asumirlas.",
      ],
    },
    {
      title: "Mando, apoyo aéreo y logística",
      paragraphs: [
        "Por encima de las escuadras hay una cadena de mando que fija la estrategia general, y un apoyo aéreo cercano (CAS) capaz de intervenir sobre coordenadas concretas. Un ataque mal comunicado puede caer sobre los propios marines, así que estas funciones dependen por completo de la disciplina en radio.",
        "Requisiciones sostiene todo lo demás: munición, equipo especializado y suministros que llegan al frente cuando alguien los pide y los organiza. La wiki en español recoge las guías traducidas de cada una de estas responsabilidades.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué roles hay para los marines en RMC14?",
      answer:
        "La fuerza incluye fusileros, líderes de escuadra y especialistas como francotirador, demoliciones, granadero y explorador, además de médicos de combate, técnicos de combate, policía militar, roles de mando, apoyo aéreo cercano y requisiciones.",
    },
    {
      question: "¿Cuál es el mejor rol para empezar?",
      answer:
        "El fusilero. Lleva equipo estándar, opera dentro de una escuadra y sigue las órdenes de su líder, lo que permite aprender el desarrollo de la ronda sin tomar decisiones que afecten a toda la fuerza.",
    },
    {
      question: "¿Qué hace un líder de escuadra?",
      answer:
        "Asigna posiciones, marca objetivos, mantiene informada a su escuadra y sirve de enlace con el mando. Es un rol de coordinación más que de combate individual.",
    },
    {
      question: "¿Qué es el apoyo aéreo cercano (CAS)?",
      answer:
        "Es la capacidad de atacar desde el aire posiciones señaladas por las tropas de tierra. Requiere coordenadas correctas y comunicación clara, porque un error puede afectar a los propios marines.",
    },
    {
      question: "¿Los roles de apoyo son importantes?",
      answer:
        "Sí. Médicos, técnicos y requisiciones determinan cuánto aguanta la fuerza: sin evacuación de heridos, sin defensas y sin reabastecimiento, una escuadra pierde capacidad muy rápido.",
    },
  ],
  wikiLinks: [
    { label: "Roles de marine", href: "/wiki-marines/rmc-guide-marine-roles/" },
    {
      label: "Liderazgo de escuadrón",
      href: "/wiki-marines/rmc-guide-squad-leader/",
    },
    {
      label: "Recursos de élite de la UNMC",
      href: "/wiki-marines/rmc-guide-role-spec/",
    },
    {
      label: "Roles de mando",
      href: "/wiki-marines/rmc-guide-command-roles/",
    },
    { label: "Requisiciones", href: "/wiki-marines/rmc-requisitions/" },
  ],
  relatedPages: [
    {
      label: "Xenónidos en RMC14",
      href: "/xenonidos-rmc14/",
      description: "Cómo funciona el bando al que se enfrentan las escuadras.",
    },
    {
      label: "RMC14 en español",
      href: "/rmc14-en-espanol/",
      description: "Punto de partida sobre el servidor y su contenido.",
    },
    {
      label: "Juegos cooperativos para PC",
      href: "/juegos-cooperativos-pc/",
      description: "Otras experiencias donde el equipo pesa más que el reflejo.",
    },
  ],
};

export const XENONIDS_PAGE: ServerSeoPageData = {
  slug: "xenonidos-rmc14",
  datePublished: "2026-08-18",
  quickAnswer:
    "La colmena de xenónidos la juegan personas, no la máquina, y progresa por tres tiers de castas: del corredor, el defensor, el centinela y el dron en tier 1 hasta el triturador, el pretoriano, el devastador y el boiler en tier 3. Por encima de todas está la Reina, que dirige la evolución y cuya pérdida desarma al bando entero.",
  title: "Xenónidos en RMC14: Castas, Tiers y Colmena",
  subtitle:
    "Guía en español del bando alienígena: cómo funcionan las castas por tiers, qué papel tiene la Reina y por qué las estructuras de resina deciden buena parte de la ronda.",
  metaTitle: "Xenónidos en RMC14 | Castas y Colmena",
  metaDescription:
    "Aprende a jugar la colmena de xenónidos en RMC14: castas de tier 1, 2 y 3, la Reina, estructuras de resina y estrategia contra los marines de la UNMC.",
  searchQueries: [
    "xenónidos rmc14",
    "rmc14 xeno castes",
    "castas xenónidos ss14",
    "reina rmc14",
    "cómo jugar xeno rmc14",
  ],
  eyebrow: "LA COLMENA",
  sections: [
    {
      title: "Jugar la colmena",
      paragraphs: [
        "El bando xenónido no es un enemigo automático: lo controlan jugadores. Se empieza en una casta pequeña, se acumulan recursos y se evoluciona hacia formas más capaces, de modo que la fuerza de la colmena depende de cómo haya jugado el grupo durante los minutos anteriores.",
        "El estilo de juego es opuesto al de los marines. No hay armas de fuego ni cadenas de suministro: hay emboscadas, control del terreno y coordinación silenciosa. Una colmena que ataca en desorden se desgasta; una que aísla objetivos y elige el momento puede detener a una fuerza mucho mayor.",
      ],
      points: [
        "Tier 1: corredor, defensor, centinela y dron",
        "Tier 2: guerrero, acechador y escupidor, entre otros",
        "Tier 3: triturador, pretoriano, devastador y boiler",
        "La Reina dirige la colmena y su evolución",
      ],
    },
    {
      title: "Castas por tiers",
      paragraphs: [
        "Las castas de tier 1 son el punto de partida y cada una empuja hacia un estilo distinto: el corredor busca velocidad y flanqueo, el defensor absorbe daño, el centinela hostiga a distancia y el dron construye. En tier 2 aparecen castas más especializadas, como el guerrero, el acechador o el escupidor.",
        "El tier 3 concentra el poder de la colmena. Triturador, pretoriano, devastador y boiler cumplen funciones muy diferentes —romper líneas, proteger, presionar o negar terreno— y llegar hasta ellas exige que la colmena haya progresado. Perder una casta avanzada es un golpe difícil de recuperar.",
      ],
    },
    {
      title: "La Reina y las estructuras de resina",
      paragraphs: [
        "La Reina es el centro de la colmena: dirige, marca prioridades y sostiene la evolución del resto. Su pérdida desorganiza al bando entero, así que su posición y su protección son decisiones estratégicas y no un detalle secundario.",
        "Las estructuras de resina convierten el mapa en territorio propio. Nidos, muros, agujeros de resina y demás construcciones dan movilidad, cobertura y control a la colmena, y obligan a los marines a avanzar despacio. La wiki en español recoge las guías de castas y de estructuras.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Se puede jugar como xenónido en RMC14?",
      answer:
        "Sí. El bando alienígena está controlado por jugadores. Se empieza en una casta básica y se evoluciona hacia castas superiores a medida que la colmena progresa durante la ronda.",
    },
    {
      question: "¿Qué son los tiers de castas?",
      answer:
        "Son niveles de evolución. El tier 1 reúne las castas iniciales, como corredor, defensor, centinela y dron; el tier 2 añade castas especializadas; y el tier 3 incluye las más poderosas, como triturador, pretoriano, devastador y boiler.",
    },
    {
      question: "¿Qué hace la Reina?",
      answer:
        "La Reina dirige la colmena, marca prioridades y sostiene la evolución del resto de castas. Es el rol más influyente del bando y también el más expuesto si queda aislado.",
    },
    {
      question: "¿Para qué sirven las estructuras de resina?",
      answer:
        "Dan a la colmena control del terreno: aportan movilidad, cobertura y puntos de apoyo, y ralentizan el avance de los marines. Construirlas es una tarea propia dentro del bando.",
    },
    {
      question: "¿Es un buen bando para empezar?",
      answer:
        "Puede serlo si prefieres un juego de posicionamiento y emboscada antes que de gestión de equipo y logística. Conviene leer la guía de castas de tier 1 antes de la primera ronda.",
    },
  ],
  wikiLinks: [
    {
      label: "Castas de xenónido",
      href: "/wiki-marines/rmc-guide-xenonid-roles/",
    },
    {
      label: "Xenónidos de tier 1",
      href: "/wiki-marines/rmc-guide-xenonid-t1/",
    },
    {
      label: "Xenónidos de tier 3",
      href: "/wiki-marines/rmc-guide-xenonid-t3/",
    },
    { label: "La Reina de la Colmena", href: "/wiki-marines/rmc-guide-role-queen/" },
    {
      label: "Estructuras de la Colmena",
      href: "/wiki-marines/rmc-guide-hive-structures/",
    },
  ],
  relatedPages: [
    {
      label: "Roles y escuadras de marines",
      href: "/roles-y-escuadras-marines-rmc14/",
      description: "El bando contrario, con sus funciones y su cadena de mando.",
    },
    {
      label: "Juegos de PvP asimétrico",
      href: "/juegos-pvp-asimetrico/",
      description: "Otros títulos donde los dos bandos juegan con reglas distintas.",
    },
    {
      label: "Qué es Space Station 14",
      href: "/que-es-space-station-14/",
      description: "El juego gratuito y de código abierto sobre el que corre RMC14.",
    },
  ],
};

export const CM_SS13_PAGE: ServerSeoPageData = {
  slug: "cm-ss13-en-espanol",
  datePublished: "2026-08-18",
  quickAnswer:
    "No existe una versión en español de CM-SS13; lo más parecido es RMC14, un proyecto independiente que recrea ese tipo de ronda sobre el motor moderno de Space Station 14 en lugar del veterano BYOND. Capibara Marines lo ejecuta para jugadores hispanohablantes, con la wiki traducida y una comunidad que se coordina en Discord.",
  title: "CM-SS13 en Español: La Alternativa Moderna",
  subtitle:
    "Si llegas desde Colonial Marines de Space Station 13 y buscas la misma clase de partida en un motor actual y con comunidad hispanohablante, esta página explica cómo encajan RMC14 y Capibara Marines.",
  metaTitle: "CM-SS13 en Español | Alternativa Moderna",
  metaDescription:
    "¿Buscas CM-SS13 en español? Conoce RMC14, el proyecto que recrea la experiencia Colonial Marines sobre el motor moderno de Space Station 14, y Capibara Marines.",
  searchQueries: [
    "cm ss13",
    "colonial marines ss13",
    "cm ss13 español",
    "cm13 servidor español",
  ],
  eyebrow: "DESDE CM-SS13",
  sections: [
    {
      title: "Qué es CM-SS13",
      paragraphs: [
        "Colonial Marines es el servidor veterano de Space Station 13 dedicado al enfrentamiento entre una fuerza de marines y una colmena alienígena. Lleva años funcionando y ha definido buena parte de las convenciones de este tipo de partida: escuadras, cadena de mando, especialistas y evolución de castas.",
        "Space Station 13 corre sobre BYOND, un motor antiguo con una interfaz y unos controles que muchos jugadores nuevos encuentran ásperos. Esa barrera técnica es la razón habitual por la que se busca una alternativa más accesible.",
      ],
      points: [
        "CM-SS13: servidor veterano de Space Station 13",
        "RMC14: proyecto independiente sobre el motor de SS14",
        "Capibara Marines: servidor comunitario en español",
      ],
    },
    {
      title: "Qué es RMC14 y en qué se diferencia",
      paragraphs: [
        "RMC14 es un proyecto de código abierto e independiente que recrea esa clase de experiencia sobre Space Station 14, el sucesor moderno de SS13. No es una versión oficial de CM-SS13 ni está afiliado a su equipo: es un desarrollo separado, con su propio contenido y sus propias decisiones de diseño.",
        "Lo que cambia es sobre todo el soporte técnico: cliente actual, controles más cómodos, mejor rendimiento y un juego gratuito y de código abierto que se descarga desde spacestation14.com. Lo que se mantiene es la estructura de rondas asimétricas entre marines y xenónidos.",
      ],
    },
    {
      title: "Dónde entra Capibara Marines",
      paragraphs: [
        "Capibara Marines es un servidor de la comunidad Capibara que ejecuta contenido de RMC14 para jugadores hispanohablantes. No representa a CM-SS13 ni al equipo de RMC14: es una comunidad separada, con sus propias reglas y una wiki traducida al español.",
        "Para alguien que viene de CM-SS13, esa wiki es el atajo. Roles de marine, castas de xenónido y comunicaciones explicados en tu idioma evitan tener que reconstruir los procedimientos partida a partida. Sobre cómo entrar, la referencia es el Discord de la comunidad: en esta web no figura ninguna dirección de conexión que no se haya verificado antes.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué es CM-SS13?",
      answer:
        "Es el servidor veterano de Space Station 13 dedicado a las rondas de marines contra una colmena alienígena. Funciona sobre BYOND, el motor de SS13, y ha definido gran parte de las convenciones de este tipo de partida.",
    },
    {
      question: "¿RMC14 es lo mismo que CM-SS13?",
      answer:
        "No. RMC14 es un proyecto de código abierto e independiente que recrea esa clase de experiencia sobre el motor de Space Station 14. No es una versión oficial de CM-SS13 ni está afiliado a su equipo de desarrollo.",
    },
    {
      question: "¿Existe un CM-SS13 en español?",
      answer:
        "Capibara Marines es un servidor comunitario en español que ejecuta contenido de RMC14, con wiki traducida y comunidad hispanohablante. No es CM-SS13 ni una traducción de ese servidor.",
    },
    {
      question: "¿Necesito conocer SS13 para jugar?",
      answer:
        "No. Space Station 14 tiene una interfaz más moderna y la wiki en español explica roles, equipo y comunicaciones desde cero. La experiencia previa ayuda, pero no es un requisito.",
    },
  ],
  wikiLinks: [
    { label: "Guía Colonial Marines", href: "/wiki-marines/rmc14/" },
    {
      label: "Guías para nuevos jugadores",
      href: "/wiki-marines/rmc-guide-new-player/",
    },
    { label: "Roles de marine", href: "/wiki-marines/rmc-guide-marine-roles/" },
  ],
  relatedPages: [
    {
      label: "RMC14 en español",
      href: "/rmc14-en-espanol/",
      description: "Qué es RMC14 y qué ofrece la versión comunitaria en español.",
    },
    {
      label: "Roles y escuadras de marines",
      href: "/roles-y-escuadras-marines-rmc14/",
      description: "Equivalencias de roles para quien viene de otro servidor.",
    },
    {
      label: "Qué es Space Station 14",
      href: "/que-es-space-station-14/",
      description: "El sucesor moderno de SS13 y sus diferencias con BYOND.",
    },
  ],
};

export const SPACE_MARINE_GAMES_PAGE: ServerSeoPageData = {
  slug: "juegos-de-marines-espaciales",
  datePublished: "2026-08-18",
  quickAnswer:
    "Si buscas un juego de marines espaciales gratis y en español, la opción comunitaria es Capibara Marines: rondas de escuadras contra una colmena de xenónidos sobre Space Station 14, sin pagar nada y con wiki traducida. Entre los títulos comerciales destacan Warhammer 40,000: Space Marine 2, Helldivers 2 y Aliens: Dark Descent; la tabla de esta página compara seis según su cooperativo, su PvP y su uso de escuadras.",
  title: "Juegos de Marines Espaciales para PC: Gratis y en Español",
  subtitle:
    "Una selección de juegos donde encarnas a un soldado de infantería espacial, con opciones cooperativas, competitivas y de escuadra — empezando por la alternativa gratuita y en español.",
  metaTitle: "Juegos de Marines Espaciales Gratis y en Español para PC",
  metaDescription:
    "¿Juegos de marines espaciales gratis y en español? Compara la opción comunitaria gratuita con Space Marine 2, Helldivers 2 y más: cooperativo, PvP y escuadras.",
  searchQueries: [
    "juegos de marines espaciales gratis",
    "juegos de marines espaciales en español",
    "juegos de marines espaciales",
    "juegos de soldados espaciales",
    "juegos de infantería espacial",
  ],
  eyebrow: "MARINES ESPACIALES",
  sections: [
    {
      title: "Qué buscamos en un juego de marines espaciales",
      paragraphs: [
        "El género comparte unos cuantos elementos: un pelotón, un enemigo numeroso, equipo que hay que administrar y una misión que rara vez sale según lo previsto. Lo que cambia de un título a otro es dónde ponen el acento, si en el disparo, en la táctica, en la coordinación o en la historia.",
        "Esta lista mezcla producciones comerciales conocidas con una opción comunitaria y gratuita. La tabla resume si cada juego es cooperativo, si tiene enfrentamiento entre jugadores y si organiza a los soldados en escuadras con funciones diferenciadas.",
      ],
      points: [
        "Cooperativo: jugar del mismo lado contra la máquina o contra otro bando",
        "PvP: parte del desafío la ponen otros jugadores",
        "Escuadras: roles diferenciados y una cadena de mando",
      ],
    },
    {
      title: "Qué es Space Station 14 y por qué aparece aquí",
      paragraphs: [
        "Space Station 14 es un juego multijugador gratuito y de código abierto. Se ve desde arriba, en dos dimensiones, y simula con mucho detalle lo que ocurre en el escenario: atmósfera, heridas, electricidad, objetos y comunicaciones. Al ser 2D funciona en ordenadores modestos y no pide una tarjeta gráfica dedicada.",
        "Sobre ese motor, el proyecto de código abierto RMC14 recrea el género de marines espaciales: rondas donde una fuerza de infantería con escuadras y especialistas se enfrenta a una colmena de xenónidos controlada por otros jugadores. Capibara Marines es el servidor comunitario que ejecuta ese contenido en español.",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si te interesa la parte táctica del género (escuadras reales, órdenes por radio, especialistas y un enemigo que piensa) puedes probarlo sin gastar nada. Space Station 14 se descarga desde spacestation14.com para Windows, Linux y macOS, y Capibara Marines es uno de los servidores en español dentro de esa lista de comunidades.",
        "La wiki en español explica los roles de marine, las castas de xenónido y las comunicaciones antes de tu primera partida. Ten en cuenta que no difundimos direcciones de conexión sin verificar: los avisos de acceso salen en el Discord de la comunidad.",
      ],
    },
  ],
  games: {
    heading: "Los mejores juegos de marines espaciales",
    intro:
      "La tabla compara opciones populares del género junto a una alternativa comunitaria gratuita. La columna «Gratis» indica si el juego se puede jugar sin comprarlo; no incluimos precios porque cambian con frecuencia y varían según la tienda y la región.",
    columns: [
      { key: "coop", label: "Cooperativo" },
      { key: "pvp", label: "PvP" },
      { key: "squads", label: "Escuadras" },
    ],
    entries: [
      {
        name: "Capibara Marines (RMC14)",
        url: "/marines/",
        description:
          "Servidor comunitario gratis y en español sobre Space Station 14. Rondas asimétricas de marines con escuadras y especialistas contra una colmena de xenónidos controlada por jugadores. Corre en PC modestos y cuenta con comunidad hispana y wiki traducida.",
        free: true,
        features: { coop: true, pvp: true, squads: true },
        highlighted: true,
      },
      {
        name: "Warhammer 40,000: Space Marine 2",
        description:
          "Acción en tercera persona con combate cuerpo a cuerpo y a distancia contra enemigos en masa. Incluye campaña jugable en cooperativo y modos competitivos aparte.",
        free: false,
        features: { coop: true, pvp: true, squads: false },
      },
      {
        name: "Helldivers 2",
        description:
          "Disparos cooperativos en equipos reducidos, con fuego amigo activo y misiones que exigen coordinar bombardeos, objetivos y extracción.",
        free: false,
        features: { coop: true, pvp: false, squads: false },
      },
      {
        name: "Deep Rock Galactic",
        description:
          "Cuatro clases que se necesitan entre sí: una perfora la roca, otra tiende tirolinas, otra ilumina la cueva y otra despliega plataformas y torretas. No hay uniforme ni cadena de mando, pero sí la misma dependencia del compañero que define al género.",
        free: false,
        features: { coop: true, pvp: false, squads: true },
      },
      {
        name: "Aliens: Dark Descent",
        description:
          "Táctico en tiempo real con pausa en el que no manejas a un soldado sino a un pelotón entero, y esos marines arrastran heridas y desgaste de una misión a la siguiente. Experiencia para un solo jugador.",
        free: false,
        features: { coop: false, pvp: false, squads: true },
      },
      {
        name: "StarCraft II",
        description:
          "Estrategia en tiempo real donde el marine es una unidad más dentro de un ejército. Su modelo incluye contenido jugable sin coste y un componente competitivo muy asentado.",
        free: true,
        features: { coop: true, pvp: true, squads: false },
      },
    ],
  },
  faqs: [
    {
      question: "¿Cuál es el mejor juego de marines espaciales para PC?",
      answer:
        "Depende de lo que busques: acción directa, táctica pausada o coordinación entre muchos jugadores. Si te interesa la parte de escuadras y comunicación, Capibara Marines es una opción gratuita en español sobre Space Station 14.",
    },
    {
      question: "¿Hay juegos de marines espaciales gratis?",
      answer:
        "Sí. Space Station 14 es gratuito y de código abierto, y el contenido de RMC14 recrea el género de marines contra alienígenas. StarCraft II también ofrece contenido jugable sin coste.",
    },
    {
      question: "¿Qué es Space Station 14?",
      answer:
        "Es un juego multijugador gratuito y de código abierto, con vista cenital en dos dimensiones, que simula en detalle atmósfera, heridas, energía, objetos y comunicaciones entre jugadores.",
    },
    {
      question: "¿Necesito un PC potente?",
      answer:
        "Para Space Station 14 no: al ser un juego en dos dimensiones funciona en equipos modestos, incluidos portátiles sin tarjeta gráfica dedicada. Los títulos comerciales en 3D de esta lista sí tienen requisitos más altos.",
    },
    {
      question: "¿Se puede jugar en español?",
      answer:
        "Capibara Marines es un servidor comunitario en español con wiki traducida. La disponibilidad de idioma en los juegos comerciales depende de cada título y de su editor.",
    },
  ],
  wikiLinks: [
    { label: "Guía Colonial Marines", href: "/wiki-marines/rmc14/" },
    {
      label: "Guías para nuevos jugadores",
      href: "/wiki-marines/rmc-guide-new-player/",
    },
    { label: "Roles de marine", href: "/wiki-marines/rmc-guide-marine-roles/" },
    { label: "Controles", href: "/wiki-marines/controls/" },
  ],
  relatedPages: [
    {
      label: "RMC14 en español",
      href: "/rmc14-en-espanol/",
      description: "El servidor gratuito de marines contra xenónidos en español.",
    },
    {
      label: "Juegos parecidos a Starship Troopers",
      href: "/juegos-parecidos-a-starship-troopers/",
      description: "Más infantería, hordas de enemigos y pelotones coordinados.",
    },
    {
      label: "Juegos cooperativos para PC",
      href: "/juegos-cooperativos-pc/",
      description: "Selección más amplia de títulos para jugar en equipo.",
    },
  ],
};

export const ALIEN_GAMES_PAGE: ServerSeoPageData = {
  slug: "juegos-de-aliens-para-pc",
  datePublished: "2026-08-18",
  quickAnswer:
    "Alien: Isolation encabeza la vertiente de terror, Aliens: Fireteam Elite la de acción cooperativa y Aliens vs. Predator (2010) fue el clásico que dejaba jugar con la criatura, aunque hoy apenas conserva actividad en línea. La alternativa gratuita y con comunidad activa es Capibara Marines, donde el bando alienígena lo controlan íntegramente jugadores.",
  title: "Juegos de Aliens para PC: Terror, Acción y Multijugador",
  subtitle:
    "Del terror en solitario al multijugador donde tú eres la criatura: una comparación de juegos de alienígenas para PC, con una alternativa gratuita en español.",
  metaTitle: "Juegos de Aliens para PC | Terror y Acción",
  metaDescription:
    "Juegos de aliens para PC con terror, acción y multijugador. Comparamos títulos conocidos e incluimos una alternativa gratuita en español donde juegas al alien.",
  searchQueries: [
    "juegos de aliens para pc",
    "mejores juegos de aliens",
    "juegos de alienígenas pc",
    "juegos donde juegas como alien",
    "alien games pc",
  ],
  eyebrow: "JUEGOS DE ALIENS",
  sections: [
    {
      title: "Tres formas de jugar con alienígenas",
      paragraphs: [
        "Los juegos de este género se reparten en tres tipos. Están los de terror, donde te escondes de algo que no puedes matar; los de acción, donde disparas a criaturas que llegan en oleadas; y los multijugador, donde son otros jugadores quienes encarnan al bando alienígena.",
        "La tabla distingue esos ejes: si el juego tiene multijugador, si apuesta por el terror y si permite jugar del lado de la criatura. Son experiencias muy distintas aunque compartan estética e inspiración en el cine clásico de terror y acción de ciencia ficción.",
      ],
      points: [
        "Terror: tensión, escondite y recursos escasos",
        "Acción: oleadas de enemigos y armamento pesado",
        "Juegas al alien: el bando alienígena lo controlan jugadores",
      ],
    },
    {
      title: "Space Station 14, la opción menos conocida",
      paragraphs: [
        "Space Station 14 se juega gratis y su código está abierto a cualquiera. Lo que parece un mapa plano visto desde arriba esconde en realidad una simulación densa: el aire que respira tu personaje, las heridas que va acumulando, la corriente que alimenta cada puerta y la radio por la que se pide ayuda. Esa apuesta por el detalle en lugar de por la potencia gráfica es la que permite jugarlo en ordenadores modestos.",
        "El proyecto de código abierto RMC14 usa ese motor para recrear el enfrentamiento entre una fuerza de marines y una colmena de xenónidos, inspirado en el cine clásico de terror y acción de ciencia ficción. La diferencia con casi todo lo demás de la lista es que la colmena no la controla la máquina: la controlan otros jugadores, que evolucionan de castas básicas a criaturas mucho más peligrosas.",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si lo que te atrae es estar al otro lado (construir la colmena, tender emboscadas y coordinar un ataque contra un grupo mucho mejor armado) puedes probarlo sin coste. Space Station 14 se descarga gratis desde spacestation14.com para Windows, Linux y macOS.",
        "Capibara Marines es el servidor comunitario en español que ejecuta ese contenido, con una wiki traducida donde se explican las castas, la Reina y las estructuras de resina. Quien quiera entrar tendrá que pasar por el Discord de la comunidad, donde se publican los avisos, ya que ninguna dirección de conexión llega a esta web sin verificarse antes.",
      ],
    },
  ],
  games: {
    heading: "Los mejores juegos de aliens para PC",
    intro:
      "Comparamos títulos conocidos del género con una alternativa comunitaria gratuita. La columna «Juegas al alien» indica si puedes controlar tú a la criatura, y «Gratis» señala si el juego se puede jugar sin comprarlo. No incluimos precios porque varían según la tienda y la región.",
    columns: [
      { key: "multiplayer", label: "Multijugador" },
      { key: "horror", label: "Terror" },
      { key: "playAlien", label: "Juegas al alien" },
    ],
    entries: [
      {
        name: "Capibara Marines (RMC14)",
        url: "/marines/",
        description:
          "Servidor comunitario gratis y en español sobre Space Station 14. Puedes jugar como marine o como xenónido dentro de una colmena controlada íntegramente por jugadores. Se juega en español, funciona en equipos modestos y su wiki traduce las guías de castas y estructuras.",
        free: true,
        features: { multiplayer: true, horror: true, playAlien: true },
        highlighted: true,
      },
      {
        name: "Alien: Isolation",
        description:
          "Terror en primera persona centrado en esconderse de una única criatura impredecible. Experiencia para un solo jugador y una de las referencias del género.",
        free: false,
        features: { multiplayer: false, horror: true, playAlien: false },
      },
      {
        name: "Aliens: Fireteam Elite",
        description:
          "Disparos cooperativos en tercera persona para tres jugadores contra oleadas de enemigos, con clases y mejoras de equipo entre misiones.",
        free: false,
        features: { multiplayer: true, horror: false, playAlien: false },
      },
      {
        name: "Aliens: Dark Descent",
        description:
          "El enemigo acecha fuera del plano y el estrés acumulado por el pelotón pesa tanto como la munición que le queda. Solo para un jugador, con un tono más cercano al terror que a la acción.",
        free: false,
        features: { multiplayer: false, horror: true, playAlien: false },
      },
      {
        name: "Aliens vs. Predator (2010)",
        description:
          "Campañas y multijugador con tres bandos jugables, incluido el alienígena. Es un título antiguo y su actividad en línea es limitada.",
        free: false,
        features: { multiplayer: true, horror: false, playAlien: true },
      },
    ],
  },
  faqs: [
    {
      question: "¿Qué juegos de aliens permiten jugar como la criatura?",
      answer:
        "Aliens vs. Predator (2010) incluye campaña y multijugador con el alienígena jugable. En Capibara Marines, servidor gratuito sobre Space Station 14, el bando de xenónidos está controlado íntegramente por jugadores.",
    },
    {
      question: "¿Hay juegos de aliens gratis para PC?",
      answer:
        "Los grandes nombres del género son de pago, pero Space Station 14 no cuesta nada y su código es abierto. Sobre él, el contenido de RMC14 recrea el choque entre una fuerza de marines y una colmena alienígena; el lanzador está en spacestation14.com.",
    },
    {
      question: "¿Cuál es el juego de aliens más terrorífico?",
      answer:
        "Alien: Isolation es la referencia habitual del terror en este género, porque el enemigo no se puede eliminar y obliga a esconderse. Es una experiencia para un solo jugador.",
    },
    {
      question: "¿Necesito un PC potente para estos juegos?",
      answer:
        "Depende del juego. Alien: Isolation y el resto de títulos en tres dimensiones de esta lista piden un equipo relativamente reciente; Space Station 14, en cambio, se dibuja en dos dimensiones y arranca en portátiles sin gráfica dedicada.",
    },
  ],
  wikiLinks: [
    {
      label: "Castas de xenónido",
      href: "/wiki-marines/rmc-guide-xenonid-roles/",
    },
    {
      label: "Xenónidos de tier 1",
      href: "/wiki-marines/rmc-guide-xenonid-t1/",
    },
    {
      label: "Estructuras de la Colmena",
      href: "/wiki-marines/rmc-guide-hive-structures/",
    },
    {
      label: "Guías para nuevos jugadores",
      href: "/wiki-marines/rmc-guide-new-player/",
    },
  ],
  relatedPages: [
    {
      label: "Xenónidos en RMC14",
      href: "/xenonidos-rmc14/",
      description: "Castas, tiers y estructuras del bando alienígena jugable.",
    },
    {
      label: "Juegos de PvP asimétrico",
      href: "/juegos-pvp-asimetrico/",
      description: "Partidas donde cada bando juega con reglas diferentes.",
    },
    {
      label: "Juegos como Among Us",
      href: "/juegos-como-among-us/",
      description: "Multijugador social con roles ocultos y desconfianza.",
    },
  ],
};

export const HELLDIVERS_LIKE_PAGE: ServerSeoPageData = {
  slug: "juegos-como-helldivers-2",
  datePublished: "2026-08-18",
  quickAnswer:
    "Ningún juego reproduce exactamente la mezcla de Helldivers 2, pero Deep Rock Galactic, Starship Troopers: Extermination, Earth Defense Force 6 y Aliens: Fireteam Elite se le acercan con su cooperativo por clases contra oleadas de enemigos. La alternativa gratuita es Capibara Marines, que sube la escala a decenas de jugadores por ronda y pone al enemigo en manos de otras personas.",
  title: "Juegos como Helldivers 2 para PC",
  subtitle:
    "Cooperativo contra hordas, misiones que se tuercen y equipos que dependen de la comunicación: alternativas a Helldivers 2, incluida una gratuita en español.",
  metaTitle: "Juegos como Helldivers 2 para PC",
  metaDescription:
    "Juegos parecidos a Helldivers 2: cooperativo contra hordas, escuadras y misiones caóticas. Incluye una alternativa gratuita en español para PC modestos.",
  searchQueries: [
    "juegos como helldivers 2",
    "juegos parecidos a helldivers",
    "alternativas a helldivers 2",
    "juegos cooperativos de hordas pc",
    "games like helldivers 2",
  ],
  eyebrow: "ALTERNATIVAS COOP",
  sections: [
    {
      title: "Qué hace especial a Helldivers 2",
      paragraphs: [
        "Helldivers 2 funciona por una combinación concreta: equipos pequeños, enemigos muy numerosos, fuego amigo activo y una presión constante que convierte cualquier descoordinación en un desastre. La tensión no viene de la dificultad del disparo, sino de la de organizarse.",
        "Buscar algo parecido significa buscar esos ingredientes por separado: cooperación obligatoria, oleadas de enemigos y, en algunos casos, la posibilidad de que el bando contrario también sean personas. La tabla compara esos tres ejes.",
      ],
      points: [
        "Cooperativo: el equipo pierde o gana junto",
        "Hordas: enemigos numerosos y presión sostenida",
        "PvP: el rival también son jugadores",
      ],
    },
    {
      title: "Qué es Space Station 14",
      paragraphs: [
        "Space Station 14 no cuesta nada y su código está abierto a quien quiera revisarlo. La cámara mira desde arriba y el escenario es plano, pero por debajo corre un modelo que sigue la presión del aire, el estado de cada herida, el reparto de energía y el tráfico de radio. Como no hay que dibujar un mundo en tres dimensiones, lo mueve un portátil sin tarjeta gráfica dedicada.",
        "Sobre ese motor, el proyecto de código abierto RMC14 recrea rondas de infantería espacial: escuadras de marines con especialistas, médicos y cadena de mando frente a una colmena de xenónidos. Las diferencias principales con Helldivers 2 son la escala, con decenas de jugadores en la misma ronda, y que el enemigo también son personas.",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si buscas la parte de coordinación bajo presión sin pagar por otro juego, Space Station 14 se descarga gratis desde spacestation14.com para Windows, Linux y macOS. No incluye compras dentro del juego ni contenido de pago.",
        "Capibara Marines es el servidor comunitario en español, con una wiki traducida donde se explican los roles, las comunicaciones y el equipo antes de tu primer despliegue. Una advertencia sobre el acceso: aquí no verás una dirección de conexión, porque solo se difunden las verificadas y siempre a través del Discord de la comunidad.",
      ],
    },
  ],
  games: {
    heading: "Juegos parecidos a Helldivers 2",
    intro:
      "Estas alternativas comparten con Helldivers 2 el cooperativo contra enemigos numerosos, aunque cada una lo enfoca de forma distinta. La columna «Gratis» indica si se puede jugar sin comprar el juego; no incluimos precios porque cambian según la tienda y la región.",
    columns: [
      { key: "coop", label: "Cooperativo" },
      { key: "hordes", label: "Hordas" },
      { key: "pvp", label: "PvP" },
    ],
    entries: [
      {
        name: "Capibara Marines (RMC14)",
        url: "/marines/",
        description:
          "Servidor comunitario gratis y en español sobre Space Station 14. Escuadras de marines con roles y radio contra una colmena de xenónidos jugada por personas. No pide un PC potente y su comunidad hispanohablante mantiene al día la wiki y los horarios.",
        free: true,
        features: { coop: true, hordes: true, pvp: true },
        highlighted: true,
      },
      {
        name: "Deep Rock Galactic",
        description:
          "Cada cueva se genera por procedimientos, así que la ruta de vuelta hay que improvisarla mientras las criaturas llegan en oleadas. La carrera final hacia la cápsula de extracción es lo más parecido a la tensión de Helldivers 2.",
        free: false,
        features: { coop: true, hordes: true, pvp: false },
      },
      {
        name: "Starship Troopers: Extermination",
        description:
          "Es la adaptación licenciada de esa ficción, y su diferencia con Helldivers 2 está en la escala: pelotones mucho más numerosos y una fase de fortificación antes de que llegue la oleada que decide la misión.",
        free: false,
        features: { coop: true, hordes: true, pvp: false },
      },
      {
        name: "Earth Defense Force 6",
        description:
          "Serie japonesa de larga trayectoria en la que la cantidad de enemigos en pantalla es el argumento. Sus clases se juegan de forma radicalmente distinta —infantería a pie, vuelo, artillería a distancia— y el cooperativo asume su tono de serie B sin ningún complejo.",
        free: false,
        features: { coop: true, hordes: true, pvp: false },
      },
      {
        name: "Aliens: Fireteam Elite",
        description:
          "Campañas de pasillo para tres jugadores donde los enemigos brotan de conductos y rejillas en lugar de llegar de frente. Las clases se van especializando con puntos de mejora entre despliegues.",
        free: false,
        features: { coop: true, hordes: true, pvp: false },
      },
    ],
  },
  faqs: [
    {
      question: "¿Hay algún juego como Helldivers 2 que sea gratis?",
      answer:
        "Space Station 14 es gratuito y de código abierto, y el contenido de RMC14 recrea el combate de infantería espacial en equipo. No comparte el estilo de disparo en tercera persona, pero sí la dependencia total de la coordinación.",
    },
    {
      question: "¿Qué juego se parece más a Helldivers 2?",
      answer:
        "Deep Rock Galactic y Starship Troopers: Extermination son las comparaciones más frecuentes, por su cooperativo con clases diferenciadas y oleadas de enemigos numerosos.",
    },
    {
      question: "¿Estos juegos tienen PvP?",
      answer:
        "La mayoría son puramente cooperativos contra enemigos controlados por la máquina. Capibara Marines es la excepción de esta lista: allí el bando enemigo lo juegan otras personas.",
    },
    {
      question: "¿Funcionan en un PC modesto?",
      answer:
        "Para las alternativas comerciales, sí: todas son juegos en tres dimensiones con requisitos de gama media. La excepción es Space Station 14, cuyo motor bidimensional apenas exige hardware y se mueve sin tarjeta gráfica dedicada.",
    },
  ],
  wikiLinks: [
    {
      label: "Guías para nuevos jugadores",
      href: "/wiki-marines/rmc-guide-new-player/",
    },
    { label: "Roles de marine", href: "/wiki-marines/rmc-guide-marine-roles/" },
    {
      label: "Comunicaciones de los marines",
      href: "/wiki-marines/rmc-guide-marine-communications/",
    },
    { label: "Controles", href: "/wiki-marines/controls/" },
  ],
  relatedPages: [
    {
      label: "Juegos de marines espaciales",
      href: "/juegos-de-marines-espaciales/",
      description: "Comparativa más amplia del género de infantería espacial.",
    },
    {
      label: "Cómo jugar Capibara Marines",
      href: "/como-jugar-capibara-marines/",
      description: "Pasos concretos para entrar en la alternativa gratuita.",
    },
    {
      label: "Juego espacial cooperativo",
      href: "/juego-espacial-cooperativo/",
      description: "Otra cara del cooperativo en el espacio, con naves y oficios.",
    },
  ],
};

export const ASYMMETRIC_PVP_PAGE: ServerSeoPageData = {
  slug: "juegos-pvp-asimetrico",
  datePublished: "2026-08-18",
  quickAnswer:
    "El PvP asimétrico enfrenta a dos bandos con reglas distintas, y el género casi siempre se queda en partidas pequeñas: cuatro supervivientes contra un asesino en Dead by Daylight, cuatro cazadores contra un monstruo en Evolve. Capibara Marines rompe esa proporción con decenas de jugadores por ronda repartidos entre marines y colmena, y es además la única opción gratuita de la comparativa.",
  title: "Juegos de PvP Asimétrico para PC",
  subtitle:
    "Partidas donde los dos bandos no juegan al mismo juego: un grupo numeroso frente a criaturas controladas por jugadores. Comparativa y una opción gratuita en español.",
  metaTitle: "Juegos de PvP Asimétrico para PC",
  metaDescription:
    "Los mejores juegos de PvP asimétrico para PC: un bando numeroso contra criaturas controladas por jugadores. Incluye una alternativa gratuita en español.",
  searchQueries: [
    "juegos pvp asimétrico",
    "juegos asimétricos multijugador pc",
    "juegos como dead by daylight",
    "juegos 1 contra muchos pc",
    "asymmetric pvp games",
  ],
  eyebrow: "PVP ASIMÉTRICO",
  sections: [
    {
      title: "Qué es el PvP asimétrico",
      paragraphs: [
        "En un juego asimétrico los bandos no comparten reglas: uno suele ser numeroso, frágil y dependiente de la cooperación, y el otro más poderoso pero solo o en minoría. El equilibrio no está en dar lo mismo a cada lado, sino en que ambos tengan formas distintas de ganar.",
        "La variedad dentro del género es amplia. Algunos títulos son de terror puro y duran unos minutos; otros montan enfrentamientos de decenas de jugadores con roles, logística y cadena de mando. La tabla distingue el tamaño de los equipos, el peso del terror y la profundidad de los roles.",
      ],
      points: [
        "Equipos grandes: más de unos pocos jugadores por bando",
        "Terror: la tensión y la persecución son parte del diseño",
        "Roles profundos: funciones especializadas con equipo propio",
      ],
    },
    {
      title: "Space Station 14 y la asimetría a gran escala",
      paragraphs: [
        "Space Station 14 es un título multijugador de código abierto que puede descargarse sin pagar nada. Su vista cenital disimula una simulación exigente —atmósfera, traumatismos, red eléctrica, objetos y canales de comunicación— que se ejecuta sin pedir una tarjeta gráfica dedicada, algo poco habitual en una partida que reúne a decenas de personas a la vez.",
        "El proyecto de código abierto RMC14 lleva ese motor al PvP asimétrico a gran escala: decenas de marines organizados en escuadras, con especialistas, médicos y mando, frente a una colmena de xenónidos que también controlan jugadores y que evoluciona durante la ronda desde castas básicas hasta criaturas mucho más capaces.",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si te interesa la asimetría con muchos jugadores por bando y roles que pesan de verdad, puedes probarlo sin gastar nada. Space Station 14 se descarga desde spacestation14.com para Windows, Linux y macOS, y no tiene compras dentro del juego.",
        "Capibara Marines es el servidor comunitario en español, con wiki traducida donde se explican tanto los roles de marine como las castas de la colmena. El paso final lo da la propia comunidad en Discord, que es donde se anuncia la forma de conectarse; esta web no lista direcciones sin verificar.",
      ],
    },
  ],
  games: {
    heading: "Los mejores juegos de PvP asimétrico",
    intro:
      "Estos juegos enfrentan a bandos con reglas distintas. Comparamos el tamaño de los equipos, el peso del terror y la profundidad de los roles, además de indicar cuáles se pueden jugar sin comprarlos. No incluimos precios porque cambian según la tienda y la región.",
    columns: [
      { key: "teams", label: "Equipos grandes" },
      { key: "horror", label: "Terror" },
      { key: "persistentRoles", label: "Roles profundos" },
    ],
    entries: [
      {
        name: "Capibara Marines (RMC14)",
        url: "/marines/",
        description:
          "Servidor comunitario gratis y en español sobre Space Station 14. Decenas de marines con escuadras y especialistas contra una colmena de xenónidos controlada por jugadores. Basta un equipo modesto para moverlo, y la documentación en español cubre los dos bandos.",
        free: true,
        features: { teams: true, horror: true, persistentRoles: true },
        highlighted: true,
      },
      {
        name: "Dead by Daylight",
        description:
          "Cuatro supervivientes frente a un asesino controlado por otro jugador. Partidas cortas, tensión constante y un catálogo amplio de personajes con habilidades propias.",
        free: false,
        features: { teams: false, horror: true, persistentRoles: false },
      },
      {
        name: "Left 4 Dead 2 (modo Versus)",
        description:
          "Cuatro supervivientes avanzan por un nivel mientras otros cuatro jugadores encarnan infectados especiales, cada uno con una forma distinta de romper al equipo.",
        free: false,
        features: { teams: false, horror: true, persistentRoles: true },
      },
      {
        name: "Evolve",
        description:
          "Cuatro cazadores con clases definidas persiguen a un monstruo que crece durante la partida. Es un título de legado: fue retirado de las tiendas y su actividad depende de servidores comunitarios.",
        free: false,
        features: { teams: false, horror: false, persistentRoles: true },
      },
      {
        name: "The Texas Chain Saw Massacre",
        description:
          "Tres atacantes controlados por jugadores contra cuatro víctimas que intentan escapar de un mapa cerrado. Enfoque de sigilo, rutas y terror.",
        free: false,
        features: { teams: false, horror: true, persistentRoles: true },
      },
    ],
  },
  faqs: [
    {
      question: "¿Qué es el PvP asimétrico?",
      answer:
        "Es un formato multijugador donde los dos bandos juegan con reglas distintas: normalmente un grupo numeroso y vulnerable frente a uno o pocos jugadores más poderosos. Cada lado tiene sus propios objetivos y su propia forma de ganar.",
    },
    {
      question: "¿Hay juegos de PvP asimétrico gratuitos?",
      answer:
        "Sí, aunque son pocos. Space Station 14 se descarga sin coste desde spacestation14.com y el contenido de RMC14 enfrenta a una fuerza de marines con una colmena alienígena jugada por personas; el resto de títulos de la tabla hay que comprarlos.",
    },
    {
      question: "¿Cuál tiene los equipos más grandes?",
      answer:
        "La mayoría de títulos del género usan partidas de cuatro contra uno o proporciones similares. Capibara Marines es distinto en ese aspecto: reúne decenas de jugadores por ronda repartidos entre los dos bandos.",
    },
    {
      question: "¿Se puede jugar del lado del monstruo?",
      answer:
        "En casi todos estos juegos, sí. Es la característica que define el género: el bando amenazante lo controla una persona y no la máquina, así que su comportamiento es imprevisible.",
    },
  ],
  wikiLinks: [
    {
      label: "Castas de xenónido",
      href: "/wiki-marines/rmc-guide-xenonid-roles/",
    },
    { label: "Roles de marine", href: "/wiki-marines/rmc-guide-marine-roles/" },
    { label: "La Reina de la Colmena", href: "/wiki-marines/rmc-guide-role-queen/" },
    {
      label: "Guías para nuevos jugadores",
      href: "/wiki-marines/rmc-guide-new-player/",
    },
  ],
  relatedPages: [
    {
      label: "Xenónidos en RMC14",
      href: "/xenonidos-rmc14/",
      description: "El bando alienígena jugable, casta por casta.",
    },
    {
      label: "Roles y escuadras de marines",
      href: "/roles-y-escuadras-marines-rmc14/",
      description: "El lado humano de la asimetría, con sus funciones y su mando.",
    },
    {
      label: "Juegos como Among Us",
      href: "/juegos-como-among-us/",
      description: "Otro tipo de asimetría: roles ocultos y engaño social.",
    },
  ],
};

export const STARSHIP_TROOPERS_LIKE_PAGE: ServerSeoPageData = {
  slug: "juegos-parecidos-a-starship-troopers",
  datePublished: "2026-08-18",
  quickAnswer:
    "Starship Troopers: Extermination es la adaptación más directa de esa ficción; Helldivers 2, Earth Defense Force 6 y Deep Rock Galactic repiten la fórmula del pelotón contra oleadas sin estar ambientados en ella. Si prefieres no pagar, Capibara Marines añade munición que se agota, heridos que evacuar y órdenes por radio, y su comunidad hispana se coordina en Discord.",
  title: "Juegos Parecidos a Starship Troopers",
  subtitle:
    "Infantería, oleadas de bichos y pelotones que solo funcionan si se coordinan: alternativas para PC en esa línea, con una opción gratuita en español.",
  metaTitle: "Juegos Parecidos a Starship Troopers",
  metaDescription:
    "Juegos parecidos a Starship Troopers para PC: infantería, hordas de bichos y clases de escuadra. Incluye una alternativa gratuita en español y multijugador.",
  searchQueries: [
    "juegos parecidos a starship troopers",
    "juegos como starship troopers",
    "juegos de insectos alienígenas pc",
    "juegos de infantería espacial cooperativo",
    "games like starship troopers",
  ],
  eyebrow: "INFANTERÍA CONTRA BICHOS",
  sections: [
    {
      title: "El patrón Starship Troopers",
      paragraphs: [
        "La fórmula es reconocible: soldados de infantería sin superpoderes, enemigos que llegan en cantidades absurdas y un pelotón que aguanta solo mientras mantenga la formación y el reabastecimiento. El interés está en resistir, no en ser invencible.",
        "Los juegos que recogen ese patrón varían en escala y en tono. Algunos apuestan por la comedia y el exceso; otros por la construcción de defensas y la logística. La tabla compara si son cooperativos, si el enemigo llega en hordas y si existen clases o roles diferenciados.",
      ],
      points: [
        "Cooperativo: el pelotón cae o resiste junto",
        "Hordas: enemigos numerosos y presión continua",
        "Clases y roles: funciones especializadas dentro del grupo",
      ],
    },
    {
      title: "Qué es Space Station 14",
      paragraphs: [
        "Space Station 14 es gratuito, de código abierto y se contempla desde arriba en dos dimensiones. Lo interesante no es su aspecto, sino lo que ocurre por debajo: aire, heridas, energía, objetos y comunicaciones se simulan pieza a pieza. Ese enfoque también explica que arranque en equipos que jamás moverían un juego de disparos en tres dimensiones.",
        "El proyecto de código abierto RMC14 recrea sobre ese motor el combate de infantería espacial: escuadras de marines con fusileros, especialistas, médicos, técnicos y cadena de mando frente a una colmena de xenónidos. A diferencia del resto de títulos de la lista, esa colmena está controlada por jugadores y evoluciona a lo largo de la ronda.",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si lo que buscas es la sensación de pelotón, con órdenes por radio, munición que se acaba y heridos que hay que evacuar, puedes probarlo sin coste. Space Station 14 se descarga desde spacestation14.com para Windows, Linux y macOS, y no incluye compras dentro del juego.",
        "Capibara Marines es el servidor comunitario en español, con una wiki traducida donde se explican los roles, las comunicaciones y las requisiciones. Falta un detalle: la forma de entrar se comparte en el Discord de la comunidad y no en esta página, donde no se publican direcciones de conexión sin verificar.",
      ],
    },
  ],
  games: {
    heading: "Los mejores juegos parecidos a Starship Troopers",
    intro:
      "Todos estos juegos comparten la idea de un pelotón de infantería contra enemigos numerosos, aunque cambian la escala y el tono. La columna «Gratis» indica si se pueden jugar sin comprarlos; no incluimos precios porque varían según la tienda y la región.",
    columns: [
      { key: "coop", label: "Cooperativo" },
      { key: "hordes", label: "Hordas de enemigos" },
      { key: "classes", label: "Clases/roles" },
    ],
    entries: [
      {
        name: "Capibara Marines (RMC14)",
        url: "/marines/",
        description:
          "Servidor comunitario gratis y en español sobre Space Station 14. Escuadras de marines con roles, radio y logística contra una colmena de xenónidos jugada por personas. Requisitos bajos, comunidad en español y guías traducidas de cada puesto del pelotón.",
        free: true,
        features: { coop: true, hordes: true, classes: true },
        highlighted: true,
      },
      {
        name: "Starship Troopers: Extermination",
        description:
          "Disparos cooperativos a gran escala donde los pelotones levantan defensas y resisten oleadas de insectos hasta la extracción.",
        free: false,
        features: { coop: true, hordes: true, classes: true },
      },
      {
        name: "Helldivers 2",
        description:
          "El parentesco con Starship Troopers es evidente: propaganda satírica, infantería sacrificable y un frente de insectos que avanza o retrocede sobre el mapa galáctico según lo que consiga el conjunto de jugadores.",
        free: false,
        features: { coop: true, hordes: true, classes: false },
      },
      {
        name: "Earth Defense Force 6",
        description:
          "Acción contra cantidades enormes de enemigos, con clases muy diferenciadas y modo cooperativo. Tono deliberadamente exagerado.",
        free: false,
        features: { coop: true, hordes: true, classes: true },
      },
      {
        name: "Deep Rock Galactic",
        description:
          "Aquí los bichos también llegan por decenas y hay contratos que consisten en aguantar una posición mientras el resto del equipo termina el trabajo. Cambia el uniforme militar por una compañía minera de enanos espaciales.",
        free: false,
        features: { coop: true, hordes: true, classes: true },
      },
    ],
  },
  faqs: [
    {
      question: "¿Qué juego se parece más a Starship Troopers?",
      answer:
        "Starship Troopers: Extermination es la adaptación directa del concepto, con pelotones cooperativos, defensas y oleadas de insectos. Helldivers 2 y Earth Defense Force 6 comparten el tono y la estructura sin estar ambientados en esa ficción.",
    },
    {
      question: "¿Hay alguno gratis?",
      answer:
        "Uno: Space Station 14, de código abierto y sin coste, donde el contenido de RMC14 recrea el combate de infantería contra una colmena alienígena. Los otros cuatro títulos de la tabla son de pago.",
    },
    {
      question: "¿Se pueden jugar en cooperativo?",
      answer:
        "Todos los títulos de esta lista tienen componente cooperativo. Capibara Marines añade además un bando enemigo controlado por jugadores en lugar de por la máquina.",
    },
    {
      question: "¿Necesito un PC potente?",
      answer:
        "Los cuatro títulos comerciales de la tabla necesitan un ordenador actualizado. Space Station 14 no: su vista cenital en dos dimensiones se mueve con soltura en máquinas antiguas y en portátiles de oficina.",
    },
  ],
  wikiLinks: [
    {
      label: "Manual básico del fusilero",
      href: "/wiki-marines/rmc-guide-role-rifleman/",
    },
    { label: "Roles de marine", href: "/wiki-marines/rmc-guide-marine-roles/" },
    {
      label: "Liderazgo de escuadrón",
      href: "/wiki-marines/rmc-guide-squad-leader/",
    },
    { label: "Requisiciones", href: "/wiki-marines/rmc-requisitions/" },
  ],
  relatedPages: [
    {
      label: "Juegos como Helldivers 2",
      href: "/juegos-como-helldivers-2/",
      description: "Más cooperativo contra hordas, con y sin bando jugable.",
    },
    {
      label: "RMC14 en español",
      href: "/rmc14-en-espanol/",
      description: "El servidor gratuito de marines contra xenónidos en español.",
    },
    {
      label: "Juego espacial cooperativo",
      href: "/juego-espacial-cooperativo/",
      description: "Cooperación espacial desde otro ángulo: naves y oficios.",
    },
  ],
};

export const MARINES_SEO_PAGES = [
  RMC14_SPANISH_PAGE,
  MARINES_GETTING_STARTED_PAGE,
  MARINE_ROLES_PAGE,
  XENONIDS_PAGE,
  CM_SS13_PAGE,
  SPACE_MARINE_GAMES_PAGE,
  ALIEN_GAMES_PAGE,
  HELLDIVERS_LIKE_PAGE,
  ASYMMETRIC_PVP_PAGE,
  STARSHIP_TROOPERS_LIKE_PAGE,
] as const;
