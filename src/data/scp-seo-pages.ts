import type { ServerSeoPageData } from "@/data/server-seo-types";

export const SCP_HUB_PAGE: ServerSeoPageData = {
  slug: "scp-en-space-station-14",
  title: "SCP en Space Station 14: Capibara SCP",
  subtitle:
    "Capibara SCP es un servidor comunitario en español de Space Station 14 ambientado en un Sitio de la Fundación SCP, con anomalías jugables, procedimientos de contención y roleplay entre departamentos.",
  metaTitle: "SCP en Space Station 14 | Capibara SCP",
  metaDescription:
    "Conoce Capibara SCP, el servidor comunitario en español de Space Station 14 ambientado en la Fundación SCP: anomalías jugables, contención, roles y wiki.",
  searchQueries: [
    "scp space station 14",
    "scp ss14",
    "servidor scp español",
    "scp foundation game",
    "capibara scp",
  ],
  eyebrow: "CAPIBARA SCP",
  sections: [
    {
      title: "¿Qué es Capibara SCP?",
      paragraphs: [
        "Capibara SCP es un servidor de Space Station 14 mantenido por la comunidad Capibara y presentado en español. Es un servidor distinto de Estación Capibara: comparte comunidad y soporte en español, pero utiliza otra base de juego, otra ambientación y su propia wiki.",
        "En lugar de una estación espacial de Nanotrasen, la ronda transcurre en un Sitio de la Fundación SCP. El personal trabaja para mantener las anomalías dentro de sus cámaras de contención, mientras quienes interpretan a esas anomalías intentan lo contrario.",
      ],
      points: [
        "Servidor y wiki independientes de Estación Capibara",
        "Ambientación de un Sitio de la Fundación SCP",
        "Anomalías jugables con mecánicas propias",
        "Documentación traducida en /wiki-scp/",
      ],
    },
    {
      title: "Anomalías y contención",
      paragraphs: [
        "La wiki del servidor documenta varias anomalías jugables con reglas y mecánicas propias: SCP-173 «La Escultura», SCP-096 «El Chico Tímido», SCP-082 «Fernand el Caníbal», SCP-106 «El Viejo» y SCP-457 «El Hombre Ardiente». Cada una tiene páginas separadas de capacidades, contención y métodos de fuga.",
        "La contención no es un simple botón. SCP-173 contamina el suelo de su cámara hasta abrir las compuertas y requiere limpiezas periódicas del personal; SCP-096 reacciona a quien vea su rostro, incluso en una fotografía. El equipo investigado, como el casco Obscura o el hangar «Pandora», existe precisamente para responder a esas situaciones.",
      ],
    },
    {
      title: "Roles del Sitio y wiki en español",
      paragraphs: [
        "El Sitio se organiza en departamentos con responsabilidades distintas: investigación y ciencia anómala, seguridad y operaciones especiales, medicina, ingeniería, servicio y personal de Clase-D. Las abreviaturas internas que utiliza el servidor, como ZCP, DOE o PEC, están recogidas en el glosario de la wiki.",
        "La Wiki SCP de Capibara reúne esas guías generadas desde los datos del propio servidor y traducidas al español. Puedes consultar controles, términos, investigación y anomalías antes de entrar, sin depender de documentación en inglés.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Capibara SCP es un servidor oficial de la Fundación SCP?",
      answer:
        "No. La Fundación SCP es un proyecto colaborativo de ficción con licencia CC BY-SA, no una organización con servidores oficiales. Capibara SCP es un servidor comunitario de Space Station 14 que utiliza esa ambientación.",
    },
    {
      question: "¿Es un modo de juego de Estación Capibara?",
      answer:
        "No. Capibara SCP y Estación Capibara son servidores separados, con bases de juego, contenidos y wikis diferentes. Solo comparten comunidad y soporte en español.",
    },
    {
      question: "¿Se puede jugar como una anomalía SCP?",
      answer:
        "Sí. La wiki documenta anomalías jugables como SCP-173, SCP-096, SCP-082, SCP-106 y SCP-457, cada una con sus capacidades, su contención y sus métodos de fuga explicados en páginas propias.",
    },
    {
      question: "¿Necesito pagar por Space Station 14?",
      answer:
        "No. Space Station 14 es un juego gratuito y de código abierto que se descarga desde spacestation14.com y funciona en Windows, Linux y macOS.",
    },
    {
      question: "¿Dónde están las guías de Capibara SCP?",
      answer:
        "La Wiki SCP está disponible en estacioncapibara.com/wiki-scp/ y es independiente de la wiki de Estación Capibara.",
    },
  ],
  wikiLinks: [
    { label: "Abrir Wiki SCP", href: "/wiki-scp/scp/" },
    { label: "Investigación de la Fundación", href: "/wiki-scp/scp-research/" },
    { label: "Glosario SCP", href: "/wiki-scp/scp-glossary/" },
    { label: "Trabajos", href: "/wiki-scp/jobs/" },
  ],
  relatedPages: [
    {
      label: "Cómo jugar Capibara SCP",
      href: "/como-jugar-capibara-scp/",
      description: "Descarga el juego y prepara tu primer turno en el Sitio.",
    },
    {
      label: "Anomalías SCP jugables",
      href: "/anomalias-scp-jugables/",
      description: "Qué hace cada anomalía y cómo se contiene en el servidor.",
    },
    {
      label: "Servidor Capibara SCP",
      href: "/scp/",
      description: "Página principal del servidor con su estado y sus secciones.",
    },
  ],
};

export const SCP_GETTING_STARTED_PAGE: ServerSeoPageData = {
  slug: "como-jugar-capibara-scp",
  title: "Cómo Jugar Capibara SCP: Guía para Empezar",
  subtitle:
    "Una ruta clara para descargar Space Station 14, entender los términos de la Fundación y elegir tu primera responsabilidad dentro del Sitio de Capibara SCP.",
  metaTitle: "Cómo Jugar Capibara SCP | Guía para Empezar",
  metaDescription:
    "Aprende cómo empezar en Capibara SCP: descarga gratis Space Station 14, repasa controles, términos de la Fundación y elige tu primer rol en el Sitio.",
  searchQueries: [
    "cómo jugar capibara scp",
    "cómo jugar scp ss14",
    "space station 14 tutorial español",
    "descargar space station 14",
    "scp ss14 guía",
  ],
  eyebrow: "PRIMEROS PASOS",
  sections: [
    {
      title: "Descargar Space Station 14",
      paragraphs: [
        "Capibara SCP funciona sobre Space Station 14, un juego multijugador gratuito y de código abierto. El launcher se descarga desde spacestation14.com y está disponible para Windows, Linux y macOS. No hay compra, ni suscripción, ni tienda dentro del juego.",
        "Los requisitos son modestos: es un juego 2D con vista cenital, así que funciona en portátiles y equipos antiguos que no moverían un shooter en 3D. La instalación se limita a abrir el launcher, crear una cuenta y usar el listado de servidores.",
      ],
      points: [
        "Descarga gratuita desde spacestation14.com",
        "Windows, Linux y macOS",
        "Funciona en PC modestos",
        "No publicamos direcciones de conexión sin verificar",
      ],
    },
    {
      title: "Tus primeros minutos en el Sitio",
      paragraphs: [
        "Antes de asumir un puesto delicado, dedica un rato a lo básico: moverte, examinar objetos, usar las manos, abrir el menú contextual y hablar por los canales adecuados. La guía de Primeros pasos y la de Controles cubren todo eso y se pueden abrir dentro del propio juego.",
        "Después conviene aprender el vocabulario del servidor. Las siglas que verás en la radio (ZCP para Zona de Contención Pesada, BC para brecha de contención, RC para restablecimiento de contención, DOE para el Destacamento de Operaciones Especiales) están recogidas en el glosario, y entenderlas cambia por completo tu primera ronda.",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Capibara SCP no exige experiencia previa en Space Station 14, pero sí paciencia: sus sistemas tienen profundidad y aprender un puesto lleva varias rondas. Empezar por un rol con pocas responsabilidades críticas y avisar de que estás aprendiendo suele ser la forma más cómoda de entrar.",
        "Toda la documentación del servidor está traducida en la Wiki SCP, y los anuncios sobre acceso, eventos y estado del servidor se publican en el Discord de la comunidad. No publicamos una dirección de conexión que no haya sido verificada.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto cuesta jugar en Capibara SCP?",
      answer:
        "Nada. Space Station 14 es gratuito y de código abierto, y el servidor comunitario Capibara SCP no cobra por entrar ni vende ventajas dentro del juego.",
    },
    {
      question: "¿Qué necesito para jugar Space Station 14?",
      answer:
        "Un PC con Windows, Linux o macOS y el launcher gratuito de spacestation14.com. Al ser un juego 2D con vista cenital, sus requisitos son bajos comparados con los de un juego en 3D.",
    },
    {
      question: "¿Cómo encuentro el servidor de Capibara SCP?",
      answer:
        "El launcher incluye un listado de servidores con buscador. Para confirmar el acceso, los eventos o el estado del servidor, consulta los anuncios actuales de la comunidad en Discord.",
    },
    {
      question: "¿Qué debería leer antes de mi primera ronda?",
      answer:
        "Primeros pasos y Controles para las mecánicas básicas, y Términos básicos y Abreviaturas para entender la jerga de la Fundación que se usa por radio.",
    },
    {
      question: "¿Necesito saber inglés?",
      answer:
        "No. La web, la wiki del servidor y la comunidad están en español, aunque el proyecto original de Space Station 14 se desarrolle en inglés.",
    },
  ],
  wikiLinks: [
    { label: "Primeros pasos", href: "/wiki-scp/new-player/" },
    { label: "Controles", href: "/wiki-scp/controls/" },
    { label: "Términos básicos", href: "/wiki-scp/scp-basic-terms/" },
    { label: "Abreviaturas", href: "/wiki-scp/scp-abbreviations/" },
  ],
  relatedPages: [
    {
      label: "SCP en Space Station 14",
      href: "/scp-en-space-station-14/",
      description: "Qué es Capibara SCP y cómo funciona su ambientación.",
    },
    {
      label: "Roles de la Fundación SCP",
      href: "/roles-fundacion-scp/",
      description: "Departamentos y responsabilidades dentro de un turno.",
    },
    {
      label: "Cómo jugar Space Station 14",
      href: "/como-jugar-space-station-14/",
      description: "Guía general de descarga y primeros pasos en SS14.",
    },
  ],
};

export const SCP_ANOMALIES_PAGE: ServerSeoPageData = {
  slug: "anomalias-scp-jugables",
  title: "Anomalías SCP Jugables: SCP-173, 096, 082, 106 y 457",
  subtitle:
    "Qué hace cada anomalía documentada en Capibara SCP, cómo la contiene el personal del Sitio y qué ocurre cuando se produce una brecha de contención.",
  metaTitle: "Anomalías SCP Jugables | SCP-173, 096, 106 y más",
  metaDescription:
    "Guía de las anomalías jugables de Capibara SCP: SCP-173, SCP-096, SCP-082, SCP-106 y SCP-457, sus capacidades, su contención y sus brechas en el servidor.",
  searchQueries: [
    "scp 173 juego",
    "scp 096 juego",
    "jugar como scp",
    "anomalías scp jugables",
    "scp 106 el viejo",
  ],
  eyebrow: "ANOMALÍAS JUGABLES",
  sections: [
    {
      title: "Cinco anomalías con mecánicas propias",
      paragraphs: [
        "En Capibara SCP varias anomalías son roles que ocupan jugadores, no enemigos controlados por el servidor. Cada una empieza la ronda dentro de su cámara de contención, donde apenas supone una amenaza, y tiene un objetivo opuesto al del personal del Sitio.",
        "La wiki del servidor dedica a cada anomalía una página general y páginas separadas de capacidades, contención y métodos de fuga. Estas son las cinco que están documentadas con mecánicas propias.",
      ],
      points: [
        "SCP-173 «La Escultura»: contamina su cámara y se mueve cuando nadie mira",
        "SCP-096 «El Chico Tímido»: reacciona a quien vea su rostro",
        "SCP-082 «Fernand el Caníbal»: fuerza y resistencia extraordinarias",
        "SCP-106 «El Viejo» y SCP-457 «El Hombre Ardiente»",
      ],
    },
    {
      title: "Cómo funcionan la contención y las brechas",
      paragraphs: [
        "SCP-173 usa una capacidad que contamina el suelo de su cámara; cuando el reactivo se acumula lo suficiente, las compuertas herméticas se abren solas. El personal debe limpiar la cámara cada pocos minutos con Clase-D equipados con fregonas, y en la calle solo puede moverse mientras alguien lo esté mirando. Las gotas de estasis y el hangar «Pandora» existen para restablecer esa contención.",
        "SCP-096 pasa por estados encadenados: llora en calma hasta que alguien ve su rostro, en persona o en una fotografía, entra en ira incipiente y después persigue a sus objetivos. El casco Obscura oculta su cara y evita ese desencadenante. SCP-106 depende de su mecánica de fantasma para escapar, SCP-457 alterna estados relacionados con el fuego, y SCP-082 destaca por su fuerza y por interactuar con el resto de jugadores mediante interpretación.",
      ],
    },
    {
      title: "Un juego gratuito para probarlo",
      paragraphs: [
        "Todo esto ocurre dentro de Space Station 14, un juego multijugador gratuito y de código abierto con vista cenital en 2D que funciona en PC modestos. Se descarga desde spacestation14.com para Windows, Linux y macOS, y no requiere compra ni suscripción.",
        "Si quieres probarlo en español, Capibara SCP mantiene su wiki traducida con las páginas de cada anomalía. Los anuncios sobre acceso y estado del servidor se publican en el Discord de la comunidad.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Se puede jugar como SCP-173 en Space Station 14?",
      answer:
        "En Capibara SCP, SCP-173 es un rol jugable documentado con capacidades propias: contaminar su cámara para abrir las compuertas, desplazarse con un salto cuando pocas personas lo observan y provocar una brecha de contención.",
    },
    {
      question: "¿Qué anomalías están documentadas en la wiki del servidor?",
      answer:
        "SCP-173 «La Escultura», SCP-096 «El Chico Tímido», SCP-082 «Fernand el Caníbal», SCP-106 «El Viejo» y SCP-457 «El Hombre Ardiente», cada una con páginas de capacidades, contención y fuga.",
    },
    {
      question: "¿Qué pasa si miras la cara de SCP-096?",
      answer:
        "Según la guía del servidor, ver su rostro en persona o en una fotografía lo hace pasar al estado de ira incipiente y después al de ira, en el que persigue a quienes lo hayan visto. El casco Obscura evita ese desencadenante.",
    },
    {
      question: "¿El personal puede recuperar una anomalía tras una brecha?",
      answer:
        "Sí. La wiki describe procedimientos y equipo específicos, como las gotas de estasis y el hangar «Pandora» para SCP-173, además de la limpieza periódica de su cámara para evitar la brecha.",
    },
  ],
  wikiLinks: [
    { label: "SCP-173 «La Escultura»", href: "/wiki-scp/scp173about/" },
    { label: "SCP-096 «El Chico Tímido»", href: "/wiki-scp/scp096about/" },
    { label: "SCP-082 «Fernand el Caníbal»", href: "/wiki-scp/scp082about/" },
    { label: "SCP-106 «El Viejo»", href: "/wiki-scp/scp106about/" },
    { label: "SCP-457 «El Hombre Ardiente»", href: "/wiki-scp/scp457about/" },
  ],
  relatedPages: [
    {
      label: "SCP en Space Station 14",
      href: "/scp-en-space-station-14/",
      description: "Visión general del servidor y de su ambientación.",
    },
    {
      label: "Qué es la Fundación SCP",
      href: "/que-es-la-fundacion-scp/",
      description: "El origen de estas anomalías como ficción colaborativa.",
    },
    {
      label: "Juegos gratis multijugador",
      href: "/juegos-gratis-multijugador/",
      description: "Más juegos multijugador gratuitos para jugar en PC.",
    },
  ],
};

export const SCP_ROLES_PAGE: ServerSeoPageData = {
  slug: "roles-fundacion-scp",
  title: "Roles de la Fundación SCP: Científicos, Seguridad y Clase-D",
  subtitle:
    "Cómo se reparte el trabajo dentro de un Sitio de Capibara SCP: investigación anómala, seguridad y operaciones especiales, medicina, ingeniería, servicio y personal de Clase-D.",
  metaTitle: "Roles de la Fundación SCP | Capibara SCP",
  metaDescription:
    "Descubre los roles de un Sitio de la Fundación en Capibara SCP: investigación anómala, seguridad, Clase-D, medicina y servicio, y cómo se estructura un turno.",
  searchQueries: [
    "roles fundación scp",
    "clase d scp",
    "space station 14 roles",
    "científico scp juego",
    "trabajos scp ss14",
  ],
  eyebrow: "ROLES DEL SITIO",
  sections: [
    {
      title: "Un Sitio dividido en departamentos",
      paragraphs: [
        "Capibara SCP conserva la estructura departamental de Space Station 14 y la adapta a la Fundación. Ciencia investiga, Seguridad protege y detiene, Medicina trata heridas, Ingeniería mantiene la energía y la atmósfera, Carga distribuye recursos y Servicio cubre el resto de necesidades del Sitio.",
        "A esa base se suma la jerarquía propia de la Fundación, visible en la radio y en la documentación: el Destacamento de Seguridad, el Destacamento de Operaciones Especiales, el Comité de Ética, el Mando Regional y la dirección del Sitio. Las abreviaturas de todos ellos están recogidas en la wiki.",
      ],
      points: [
        "Ciencia e investigación anómala",
        "Seguridad y operaciones especiales",
        "Medicina, ingeniería y servicio",
        "Personal de Clase-D",
      ],
    },
    {
      title: "Investigación, seguridad y Clase-D",
      paragraphs: [
        "La investigación es el eje del Sitio y funciona de forma distinta a la de una estación espacial: los puntos de investigación se obtienen estudiando las propias anomalías desde una plataforma de análisis cercana o mediante interacciones únicas que devuelven material de investigación. Ese material desbloquea equipo pensado para la contención, como el casco Obscura, el chaleco Locus o el bozal de silencio.",
        "Seguridad y el Destacamento de Operaciones Especiales responden a las brechas y controlan las zonas de contención. El personal de Clase-D ocupa el extremo opuesto de la jerarquía: participa en tareas de riesgo, como la limpieza periódica de la cámara de SCP-173, y su relación con el resto del Sitio es una de las fuentes de roleplay más habituales.",
      ],
    },
    {
      title: "Cómo elegir tu primer rol",
      paragraphs: [
        "No existe un rol correcto para empezar. Lo razonable es elegir uno cuya guía puedas leer entera, identificar sus dos o tres tareas principales y evitar puestos de mando o sistemas críticos hasta entender los procedimientos. Avisar de que estás aprendiendo suele bastar para que alguien te acompañe.",
        "La Wiki SCP mantiene el índice de trabajos y las guías de investigación traducidas al español, así que puedes preparar el turno antes de entrar. Space Station 14 se descarga gratis desde spacestation14.com y funciona en PC modestos, de modo que probar un rol nuevo no cuesta nada.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué es el personal de Clase-D en un juego de la Fundación SCP?",
      answer:
        "Es el personal situado en el escalón más bajo de la jerarquía del Sitio, empleado en tareas de riesgo y en pruebas con anomalías. En Capibara SCP participa, por ejemplo, en la limpieza periódica de la cámara de contención de SCP-173.",
    },
    {
      question: "¿Cómo funciona la investigación en Capibara SCP?",
      answer:
        "Los puntos de investigación se obtienen estudiando anomalías con una plataforma de análisis cercana o mediante interacciones únicas que entregan material de investigación, el cual se analiza después como un artefacto normal.",
    },
    {
      question: "¿Qué significan siglas como DOE, ZCP o BC?",
      answer:
        "DOE es el Destacamento de Operaciones Especiales, ZCP la Zona de Contención Pesada y BC una brecha de contención. La wiki incluye un glosario con los términos y abreviaturas que se usan por radio.",
    },
    {
      question: "¿Qué rol es mejor para alguien que empieza?",
      answer:
        "Cualquiera cuya guía puedas leer con calma y que no dependa de sistemas críticos. Conviene dejar los puestos de mando, seguridad armada y contención avanzada para cuando conozcas los procedimientos del Sitio.",
    },
  ],
  wikiLinks: [
    { label: "Trabajos", href: "/wiki-scp/jobs/" },
    { label: "Investigación de la Fundación", href: "/wiki-scp/scp-research/" },
    { label: "Investigación de anomalías", href: "/wiki-scp/anomalous-research/" },
    { label: "Glosario SCP", href: "/wiki-scp/scp-glossary/" },
  ],
  relatedPages: [
    {
      label: "Anomalías SCP jugables",
      href: "/anomalias-scp-jugables/",
      description: "Contra qué trabajan los departamentos del Sitio.",
    },
    {
      label: "Cómo jugar Capibara SCP",
      href: "/como-jugar-capibara-scp/",
      description: "Descarga, controles y preparación de tu primer turno.",
    },
    {
      label: "Juegos cooperativos para PC",
      href: "/juegos-cooperativos-pc/",
      description: "Otros juegos donde el reparto de tareas es lo importante.",
    },
  ],
};

export const SCP_GAMES_PAGE: ServerSeoPageData = {
  slug: "juegos-de-scp",
  title: "Juegos de SCP: las Mejores Opciones para PC",
  subtitle:
    "Una guía de los juegos ambientados en el universo SCP, qué propone cada uno y por dónde empezar si nunca has jugado a nada de la Fundación.",
  metaTitle: "Juegos de SCP para PC | Guía y Comparativa",
  metaDescription:
    "Los mejores juegos de SCP para PC comparados: multijugador, terror y roleplay. Incluye Capibara SCP, la opción gratuita en español sobre Space Station 14.",
  searchQueries: [
    "juegos de scp",
    "mejores juegos de scp",
    "juegos de la fundación scp",
    "scp games pc",
    "juegos scp gratis",
  ],
  eyebrow: "JUEGOS DE SCP",
  sections: [
    {
      title: "De qué va el universo SCP",
      paragraphs: [
        "La Fundación SCP es un proyecto colaborativo de escritura en internet: miles de autores publican informes ficticios sobre objetos, criaturas y fenómenos anómalos, redactados con el tono seco de un documento técnico. Cada entrada recibe un número, y algunas se han vuelto famosas por sí solas, como SCP-173 o SCP-096.",
        "Los textos se publican con licencia Creative Commons BY-SA, y por eso existen tantos juegos, mods y vídeos basados en ese material. Ninguno es «el juego oficial de la Fundación SCP»: son obras derivadas de una ficción compartida.",
      ],
    },
    {
      title: "Qué buscar en un juego de SCP",
      paragraphs: [
        "Los juegos de SCP se reparten entre tres ideas distintas. Unos apuestan por el terror en solitario, con un pasillo, poca luz y una anomalía persiguiéndote. Otros son multijugador por rondas, donde un bando intenta escapar del complejo y otro lo impide. Y algunos se centran en el roleplay: interpretar a un miembro del personal durante un turno entero.",
        "Merece la pena tenerlo claro antes de elegir, porque la sensación cambia mucho. Un juego de rondas cortas premia los reflejos; uno de roleplay premia la coordinación, la radio y los procedimientos. La lista siguiente indica de cuál se trata en cada caso.",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si lo que te atrae del universo SCP es la parte de contención y procedimientos, Capibara SCP es la opción más accesible en castellano. Funciona sobre Space Station 14, un juego multijugador gratuito y de código abierto con vista cenital en 2D que corre en PC modestos, sin compras ni suscripción.",
        "Puedes descargar Space Station 14 desde spacestation14.com para Windows, Linux o macOS y leer antes la Wiki SCP traducida al español, con las guías de anomalías, roles e investigación del servidor. Los anuncios sobre acceso y estado se publican en el Discord de la comunidad.",
      ],
    },
  ],
  games: {
    heading: "Los mejores juegos de SCP",
    intro:
      "Estos son los juegos más conocidos ambientados en el universo SCP, ordenados con Capibara SCP en primer lugar por ser gratuito y estar en español. Las columnas indican si el juego es multijugador, si busca el terror y si está pensado para interpretar un personaje. La disponibilidad y el precio de los títulos comerciales pueden cambiar: consulta su ficha en la tienda correspondiente.",
    columns: [
      { key: "multiplayer", label: "Multijugador" },
      { key: "horror", label: "Terror" },
      { key: "roleplay", label: "Roleplay" },
    ],
    entries: [
      {
        name: "Capibara SCP (Space Station 14)",
        description:
          "Servidor gratis y en español sobre Space Station 14, un juego 2D de código abierto que corre en PC modestos. Ofrece roles de la Fundación (investigación, seguridad, medicina, Clase-D) y anomalías jugables como SCP-173 o SCP-096, con toda su wiki traducida.",
        free: true,
        features: { multiplayer: true, horror: true, roleplay: true },
        highlighted: true,
      },
      {
        name: "SCP: Secret Laboratory",
        description:
          "El multijugador de SCP más popular. Rondas cortas en un complejo donde el personal, los Clase-D, las Fuerzas Operativas Móviles y las anomalías compiten por escapar o contener. Gratuito y centrado en la acción más que en la interpretación.",
        free: true,
        features: { multiplayer: true, horror: true, roleplay: false },
      },
      {
        name: "SCP – Containment Breach",
        description:
          "El clásico para un jugador que popularizó a SCP-173 y su mecánica de parpadeo. Complejo generado de forma aleatoria, sin combate y con mucha tensión. Es gratuito y su código fuente está publicado.",
        free: true,
        features: { multiplayer: false, horror: true, roleplay: false },
      },
      {
        name: "SCP: 5K",
        description:
          "Shooter táctico en primera persona con un enfoque más militar del universo SCP, jugable en solitario o en cooperativo. Es un título comercial en acceso anticipado, así que su estado puede cambiar con el desarrollo.",
        free: false,
        features: { multiplayer: true, horror: true, roleplay: false },
      },
      {
        name: "SCP: Pandemic",
        description:
          "Shooter cooperativo con escuadras enviadas a contener brotes anómalos, con énfasis en el equipamiento y la coordinación táctica. También es un título comercial en acceso anticipado.",
        free: false,
        features: { multiplayer: true, horror: true, roleplay: false },
      },
    ],
  },
  faqs: [
    {
      question: "¿Cuál es el mejor juego de SCP gratuito?",
      answer:
        "Depende de lo que busques: SCP – Containment Breach para terror en solitario, SCP: Secret Laboratory para partidas multijugador rápidas y Capibara SCP si prefieres roleplay de contención en español. Los tres son gratuitos.",
    },
    {
      question: "¿Existe un juego oficial de la Fundación SCP?",
      answer:
        "No. La Fundación SCP es un proyecto colaborativo de ficción publicado con licencia Creative Commons BY-SA, y todos los juegos ambientados en ese universo son obras derivadas creadas por estudios o comunidades independientes.",
    },
    {
      question: "¿Hay juegos de SCP en español?",
      answer:
        "Varios títulos incluyen traducción, y Capibara SCP es un servidor comunitario en español de Space Station 14 con su wiki, sus guías y su comunidad íntegramente en castellano.",
    },
    {
      question: "¿Qué es Space Station 14?",
      answer:
        "Es un juego multijugador gratuito y de código abierto con vista cenital en 2D en el que cada jugador ocupa un puesto dentro de una instalación simulada. Funciona en PC modestos y se descarga desde spacestation14.com.",
    },
  ],
  wikiLinks: [
    { label: "Abrir Wiki SCP", href: "/wiki-scp/scp/" },
    { label: "Primeros pasos", href: "/wiki-scp/new-player/" },
    { label: "Trabajos", href: "/wiki-scp/jobs/" },
    { label: "SCP-173 «La Escultura»", href: "/wiki-scp/scp173about/" },
  ],
  relatedPages: [
    {
      label: "SCP en Space Station 14",
      href: "/scp-en-space-station-14/",
      description: "Cómo es un servidor de la Fundación dentro de SS14.",
    },
    {
      label: "Juegos como SCP: Secret Laboratory",
      href: "/juegos-como-scp-secret-laboratory/",
      description: "Alternativas con roles definidos y terror cooperativo.",
    },
    {
      label: "Juegos como Among Us",
      href: "/juegos-como-among-us/",
      description: "Más multijugador de engaño y deducción entre jugadores.",
    },
  ],
};

export const SCP_SL_ALTERNATIVES_PAGE: ServerSeoPageData = {
  slug: "juegos-como-scp-secret-laboratory",
  title: "Juegos como SCP: Secret Laboratory",
  subtitle:
    "Alternativas a SCP: Secret Laboratory con roles definidos, terror y cooperación, incluida una opción gratuita en español centrada en el roleplay en lugar de las rondas rápidas.",
  metaTitle: "Juegos como SCP: Secret Laboratory | Alternativas",
  metaDescription:
    "Alternativas a SCP: Secret Laboratory con roles definidos, terror y cooperativo. Incluye Capibara SCP, servidor gratuito en español sobre Space Station 14.",
  searchQueries: [
    "juegos como scp secret laboratory",
    "alternativas a scp secret laboratory",
    "juegos parecidos a scp sl",
    "games like scp secret laboratory",
    "scp secret laboratory español",
  ],
  eyebrow: "ALTERNATIVAS",
  sections: [
    {
      title: "Qué hace funcionar a Secret Laboratory",
      paragraphs: [
        "SCP: Secret Laboratory reparte a los jugadores en bandos con objetivos opuestos dentro de un complejo cerrado: personal de la Fundación, Clase-D intentando escapar, Fuerzas Operativas Móviles llegando desde fuera y anomalías sueltas. Las rondas son cortas, tensas y muy dependientes de la posición y la comunicación.",
        "Cuando alguien busca «juegos como Secret Laboratory» normalmente quiere una de dos cosas: la misma estructura de roles enfrentados, o la sensación de recorrer un complejo peligroso con otras personas. Las alternativas de esta lista cubren ambas, y algunas cambian el ritmo por completo.",
      ],
    },
    {
      title: "Rondas rápidas o turnos con personaje",
      paragraphs: [
        "La diferencia más grande entre estas alternativas es cuánto dura tu personaje. En un juego de rondas cortas mueres, esperas y vuelves a empezar; en uno de roleplay tu personaje tiene un puesto, un nombre y responsabilidades que duran todo el turno, y las consecuencias de una brecha se arrastran durante el resto de la partida.",
        "Ninguno de los dos enfoques es mejor. Si te gusta la parte de contención, procedimientos y radio más que el enfrentamiento directo, la opción de roleplay te dará partidas más largas y más habladas; si buscas acción inmediata, quédate con las rondas rápidas.",
      ],
      points: [
        "Roles enfrentados con objetivos opuestos",
        "Complejos cerrados y tensión constante",
        "Cooperación obligada entre desconocidos",
        "Del combate rápido al roleplay de turno completo",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Capibara SCP es la alternativa más directa si te interesa el lado de roleplay. Funciona sobre Space Station 14, un juego multijugador gratuito y de código abierto con vista cenital en 2D que no necesita un PC potente, y está mantenido por una comunidad hispanohablante.",
        "Puedes descargarlo desde spacestation14.com para Windows, Linux o macOS, y consultar antes la Wiki SCP en español con las guías de roles, anomalías y procedimientos de contención. Los anuncios de acceso y estado se publican en el Discord de la comunidad.",
      ],
    },
  ],
  games: {
    heading: "Alternativas a SCP: Secret Laboratory",
    intro:
      "Cinco juegos que comparten algo con Secret Laboratory: bandos con roles definidos, terror o cooperación forzada en un espacio cerrado. Capibara SCP encabeza la lista por ser gratuito y en español. La disponibilidad y el precio de los títulos comerciales pueden cambiar: consulta su ficha en la tienda correspondiente.",
    columns: [
      { key: "roles", label: "Roles definidos" },
      { key: "horror", label: "Terror" },
      { key: "coop", label: "Cooperativo" },
    ],
    entries: [
      {
        name: "Capibara SCP (Space Station 14)",
        description:
          "Gratis y en español, sobre Space Station 14: un juego 2D de código abierto que corre en PC modestos. Cambia las rondas rápidas por roles persistentes de la Fundación, procedimientos de contención y roleplay durante todo el turno, con anomalías jugables como SCP-173 o SCP-096.",
        free: true,
        features: { roles: true, horror: true, coop: true },
        highlighted: true,
      },
      {
        name: "SCP – Containment Breach",
        description:
          "El original para un jugador: un complejo generado al azar, sin combate y con SCP-173 como amenaza constante. Es la referencia estética de casi todo lo demás, y sigue siendo gratuito con código fuente publicado.",
        free: true,
        features: { roles: false, horror: true, coop: false },
      },
      {
        name: "SCP: 5K",
        description:
          "Shooter táctico en primera persona donde los equipos se reparten funciones y equipamiento para contener anomalías. Más militar y más lento que Secret Laboratory. Título comercial en acceso anticipado.",
        free: false,
        features: { roles: true, horror: true, coop: true },
      },
      {
        name: "Lethal Company",
        description:
          "Cooperativo de terror en el que un grupo recoge chatarra en lunas industriales mientras esquiva criaturas. No hay roles asignados, pero los grupos acaban repartiéndose tareas por necesidad. Título comercial.",
        free: false,
        features: { roles: false, horror: true, coop: true },
      },
      {
        name: "GTFO",
        description:
          "Cooperativo de horror para cuatro personas en un complejo subterráneo, con sigilo obligatorio y planificación previa a cada expedición. El equipamiento define la función de cada jugador. Título comercial.",
        free: false,
        features: { roles: true, horror: true, coop: true },
      },
    ],
  },
  faqs: [
    {
      question: "¿Hay alguna alternativa gratuita a SCP: Secret Laboratory?",
      answer:
        "Sí. SCP – Containment Breach es gratuito para un jugador, y Capibara SCP es un servidor comunitario gratuito y en español sobre Space Station 14, centrado en el roleplay de contención.",
    },
    {
      question: "¿Qué diferencia a Capibara SCP de Secret Laboratory?",
      answer:
        "Secret Laboratory se juega en rondas cortas y enfrentadas. Capibara SCP mantiene un turno largo con roles persistentes del Sitio, procedimientos de contención documentados y más peso del roleplay que del combate.",
    },
    {
      question: "¿Space Station 14 necesita un PC potente?",
      answer:
        "No. Es un juego multijugador 2D con vista cenital y de código abierto, con requisitos bajos comparados con un shooter en 3D. Se descarga gratis desde spacestation14.com para Windows, Linux y macOS.",
    },
    {
      question: "¿Estos juegos son en español?",
      answer:
        "Varios incluyen traducción oficial, pero su comunidad suele ser mayoritariamente angloparlante. Capibara SCP es un servidor hispanohablante con su wiki y sus guías en español.",
    },
  ],
  wikiLinks: [
    { label: "Abrir Wiki SCP", href: "/wiki-scp/scp/" },
    { label: "Trabajos", href: "/wiki-scp/jobs/" },
    { label: "Primeros pasos", href: "/wiki-scp/new-player/" },
    { label: "SCP-096 «El Chico Tímido»", href: "/wiki-scp/scp096about/" },
  ],
  relatedPages: [
    {
      label: "Juegos de SCP",
      href: "/juegos-de-scp/",
      description: "Panorama completo de los juegos del universo SCP.",
    },
    {
      label: "Juegos de terror cooperativo",
      href: "/juegos-de-terror-cooperativo/",
      description: "Terror para jugar en grupo, con y sin roles asignados.",
    },
    {
      label: "Qué es Space Station 14",
      href: "/que-es-space-station-14/",
      description: "El juego gratuito y de código abierto sobre el que corre.",
    },
  ],
};

export const SCP_MULTIPLAYER_PAGE: ServerSeoPageData = {
  slug: "scp-multijugador",
  title: "SCP Multijugador: Jugar Online con Amigos",
  subtitle:
    "Las opciones para jugar al universo SCP en multijugador, qué ofrece cada una y cuál elegir si buscas roleplay en español sin pagar nada.",
  metaTitle: "SCP Multijugador | Jugar Online con Amigos",
  metaDescription:
    "Guía de SCP multijugador: compara Secret Laboratory, 5K y Pandemic, y descubre Capibara SCP, la opción gratuita de roleplay en español sobre Space Station 14.",
  searchQueries: [
    "scp multijugador",
    "jugar scp online con amigos",
    "scp multiplayer",
    "scp online gratis",
    "juegos scp para jugar con amigos",
  ],
  eyebrow: "SCP ONLINE",
  sections: [
    {
      title: "El universo SCP en multijugador",
      paragraphs: [
        "La Fundación SCP nació como un proyecto colaborativo de escritura: informes ficticios sobre objetos y criaturas anómalas, publicados con licencia Creative Commons BY-SA. Esa apertura ha permitido que aparezcan varios juegos multijugador ambientados en el mismo material, cada uno con un enfoque distinto.",
        "SCP: Secret Laboratory es el más conocido y funciona por rondas cortas con bandos enfrentados. SCP: 5K y SCP: Pandemic son shooters tácticos comerciales en acceso anticipado, pensados para escuadras que contienen brotes anómalos. Y Capibara SCP propone algo diferente: un turno largo de roleplay dentro de un Sitio de la Fundación.",
      ],
    },
    {
      title: "Jugar con amigos: qué cambia en cada opción",
      paragraphs: [
        "Si tu grupo busca partidas de veinte minutos y acción directa, un juego de rondas encaja mejor. Si preferís entrar juntos, repartiros puestos y sostener una historia durante una hora o más, necesitáis un servidor de roleplay donde cada personaje tenga un trabajo concreto y unas responsabilidades que el resto espera que cumpla.",
        "El idioma también pesa más de lo que parece. En un juego donde casi todo se resuelve hablando por radio, jugar en tu propia lengua cambia la experiencia por completo. Capibara SCP es hispanohablante de principio a fin: comunidad, wiki y guías.",
      ],
      points: [
        "Rondas cortas frente a turnos largos de roleplay",
        "Comunicación por radio y canales del Sitio",
        "Roles complementarios para un grupo de amigos",
        "Comunidad y documentación en español",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Capibara SCP funciona sobre Space Station 14, un juego multijugador gratuito y de código abierto con vista cenital en 2D. No hace falta un PC potente ni comprar nada: se descarga desde spacestation14.com para Windows, Linux o macOS y se entra desde el listado de servidores del launcher.",
        "Antes de la primera partida conviene repasar la Wiki SCP en español, con las guías de roles, anomalías y procedimientos. Para confirmar el acceso o el estado del servidor, consulta los anuncios actuales de la comunidad en Discord: no publicamos direcciones de conexión sin verificar.",
      ],
    },
  ],
  games: {
    heading: "Opciones de SCP multijugador",
    intro:
      "Comparativa rápida de los juegos del universo SCP que se pueden jugar online con otras personas. Capibara SCP aparece primero por ser gratuito y en español. La disponibilidad y el precio de los títulos comerciales pueden cambiar: consulta su ficha en la tienda correspondiente.",
    columns: [
      { key: "coop", label: "Cooperativo" },
      { key: "roleplay", label: "Roleplay" },
      { key: "horror", label: "Terror" },
    ],
    entries: [
      {
        name: "Capibara SCP (Space Station 14)",
        description:
          "Gratis y en español, sobre Space Station 14: un juego 2D de código abierto que corre en PC modestos. Reparte roles de la Fundación (investigación, seguridad, medicina, Clase-D) y anomalías jugables, con turnos largos de roleplay y wiki traducida.",
        free: true,
        features: { coop: true, roleplay: true, horror: true },
        highlighted: true,
      },
      {
        name: "SCP: Secret Laboratory",
        description:
          "Multijugador gratuito por rondas en un complejo de la Fundación, con personal, Clase-D, Fuerzas Operativas Móviles y anomalías enfrentados. Partidas cortas y muy centradas en la acción.",
        free: true,
        features: { coop: true, roleplay: false, horror: true },
      },
      {
        name: "SCP: 5K",
        description:
          "Shooter táctico en primera persona para jugar en solitario o en escuadra, con un tono militar y mucho énfasis en el equipamiento. Título comercial en acceso anticipado.",
        free: false,
        features: { coop: true, roleplay: false, horror: true },
      },
      {
        name: "SCP: Pandemic",
        description:
          "Cooperativo táctico donde un equipo se despliega para contener brotes anómalos, con planificación y coordinación por voz. Título comercial en acceso anticipado.",
        free: false,
        features: { coop: true, roleplay: false, horror: true },
      },
    ],
  },
  faqs: [
    {
      question: "¿Se puede jugar a SCP online con amigos gratis?",
      answer:
        "Sí. SCP: Secret Laboratory es gratuito y funciona por rondas, y Capibara SCP es un servidor comunitario gratuito en español sobre Space Station 14, orientado al roleplay de contención dentro de un Sitio de la Fundación.",
    },
    {
      question: "¿Cuál es el mejor juego de SCP multijugador para roleplay?",
      answer:
        "Los juegos de rondas priorizan la acción. Si buscas interpretar a un personaje durante todo el turno, un servidor de roleplay como Capibara SCP encaja mejor, porque cada jugador ocupa un puesto con responsabilidades concretas.",
    },
    {
      question: "¿Cuántas personas hacen falta para jugar?",
      answer:
        "Puedes entrar en solitario y unirte a la partida en curso, o coordinar puestos complementarios con tu grupo. La actividad concreta depende del momento, y la comunidad publica sus eventos en Discord.",
    },
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "El launcher gratuito de spacestation14.com, disponible para Windows, Linux y macOS. Space Station 14 es un juego 2D de código abierto con requisitos bajos, así que funciona en equipos modestos.",
    },
  ],
  wikiLinks: [
    { label: "Abrir Wiki SCP", href: "/wiki-scp/scp/" },
    { label: "Trabajos", href: "/wiki-scp/jobs/" },
    { label: "SCP-173 «La Escultura»", href: "/wiki-scp/scp173about/" },
  ],
  relatedPages: [
    {
      label: "SCP en Space Station 14",
      href: "/scp-en-space-station-14/",
      description: "El servidor en español y su ambientación de la Fundación.",
    },
    {
      label: "Juegos de SCP",
      href: "/juegos-de-scp/",
      description: "Todos los juegos del universo SCP, comparados.",
    },
    {
      label: "Juegos gratis multijugador",
      href: "/juegos-gratis-multijugador/",
      description: "Más juegos online gratuitos para jugar en grupo.",
    },
  ],
};

export const SCP_FOUNDATION_PAGE: ServerSeoPageData = {
  slug: "que-es-la-fundacion-scp",
  title: "Qué es la Fundación SCP: Asegurar, Contener, Proteger",
  subtitle:
    "Una explicación desde cero de la Fundación SCP: qué es, de dónde salen sus informes, qué significan las clases de objeto y cómo esa ficción se convierte en un juego multijugador.",
  metaTitle: "Qué es la Fundación SCP | Guía desde Cero",
  metaDescription:
    "Qué es la Fundación SCP explicado desde cero: proyecto colaborativo de ficción, lema Asegurar Contener Proteger, clases de objeto y su versión jugable en español.",
  searchQueries: [
    "qué es la fundación scp",
    "fundación scp explicación",
    "clases de objeto scp",
    "asegurar contener proteger",
    "scp foundation qué es",
  ],
  eyebrow: "FUNDACIÓN SCP",
  sections: [
    {
      title: "Un proyecto colaborativo de ficción",
      paragraphs: [
        "La Fundación SCP no es una organización real ni una única obra con autor. Es un proyecto de escritura colaborativa nacido en internet, donde miles de personas publican informes ficticios sobre objetos, criaturas y fenómenos que no obedecen a las leyes de la física. Cada entrada recibe un número y se redacta con el tono seco y burocrático de un documento técnico.",
        "El material se publica en la wiki del proyecto bajo licencia Creative Commons BY-SA, lo que permite reutilizarlo citando la fuente y manteniendo la misma licencia. De ahí vienen los juegos, los mods, los vídeos y las traducciones: todos son obras derivadas de una ficción compartida, no productos oficiales de nadie.",
      ],
    },
    {
      title: "Asegurar, Contener, Proteger",
      paragraphs: [
        "Dentro de la ficción, la Fundación es una organización secreta que localiza anomalías, las mantiene bajo control y evita que el resto del mundo sepa de su existencia. Su lema resume ese trabajo en tres verbos: asegurar, contener, proteger. La mayoría de los informes están escritos como si fueran documentos internos de esa organización.",
        "Cada anomalía recibe una clase de objeto que describe lo difícil que resulta contenerla. Las clases básicas son tres, y aparecen en casi cualquier texto del proyecto.",
      ],
      points: [
        "Seguro: se contiene de forma fiable y no actúa por sí solo",
        "Euclid: su comportamiento es impredecible o poco comprendido",
        "Keter: exige procedimientos complejos y constantes para contenerla",
        "Procedimientos Especiales de Contención: las instrucciones de cada informe",
      ],
    },
    {
      title: "De la ficción al juego multijugador",
      paragraphs: [
        "Convertir esos informes en un juego es directo: si la ficción describe una anomalía, una instalación y un personal encargado de mantener el equilibrio, basta con repartir esos papeles entre jugadores. Eso es lo que hace Capibara SCP sobre Space Station 14, un juego multijugador gratuito y de código abierto con vista cenital en 2D que funciona en PC modestos.",
        "En una partida, unas personas interpretan al personal del Sitio (investigación, seguridad, medicina, servicio, Clase-D) y otras a las anomalías, que empiezan la ronda en su cámara de contención. Puedes descargar el juego gratis en spacestation14.com y leer antes la Wiki SCP en español, con el glosario, los roles y las guías de cada anomalía.",
      ],
    },
  ],
  faqs: [
    {
      question: "¿La Fundación SCP existe de verdad?",
      answer:
        "No. Es una ficción colaborativa creada en internet. Los informes están escritos deliberadamente como documentos oficiales para reforzar ese efecto, pero ni la organización ni las anomalías son reales.",
    },
    {
      question: "¿Qué significa SCP?",
      answer:
        "Las siglas corresponden al lema de la organización ficticia: Secure, Contain, Protect, es decir, Asegurar, Contener, Proteger. También se usa para nombrar cada anomalía catalogada, como SCP-173.",
    },
    {
      question: "¿Qué son las clases Seguro, Euclid y Keter?",
      answer:
        "Son clases de objeto que indican la dificultad de contención. Seguro se contiene de forma fiable, Euclid resulta impredecible o poco comprendido, y Keter requiere procedimientos complejos y constantes.",
    },
    {
      question: "¿Se puede usar el material de la Fundación SCP libremente?",
      answer:
        "El contenido de la wiki del proyecto se publica bajo licencia Creative Commons BY-SA, que permite reutilizarlo y adaptarlo siempre que se cite la fuente y se mantenga la misma licencia.",
    },
    {
      question: "¿Hay alguna forma de jugar a esto en español?",
      answer:
        "Sí. Capibara SCP es un servidor comunitario en español sobre Space Station 14, un juego gratuito y de código abierto, con roles de la Fundación, anomalías jugables y una wiki traducida.",
    },
  ],
  wikiLinks: [
    { label: "Glosario SCP", href: "/wiki-scp/scp-glossary/" },
    { label: "Términos básicos", href: "/wiki-scp/scp-basic-terms/" },
    { label: "Abreviaturas", href: "/wiki-scp/scp-abbreviations/" },
  ],
  relatedPages: [
    {
      label: "SCP en Space Station 14",
      href: "/scp-en-space-station-14/",
      description: "Cómo se juega esa ficción en un servidor en español.",
    },
    {
      label: "SCP multijugador",
      href: "/scp-multijugador/",
      description: "Opciones para jugar al universo SCP online con amigos.",
    },
    {
      label: "Qué es Space Station 14",
      href: "/que-es-space-station-14/",
      description: "El juego gratuito y de código abierto que lo hace posible.",
    },
  ],
};

export const COOP_HORROR_GAMES_PAGE: ServerSeoPageData = {
  slug: "juegos-de-terror-cooperativo",
  title: "Juegos de Terror Cooperativo para PC",
  subtitle:
    "Los mejores juegos de terror para jugar en grupo, desde la caza de fantasmas hasta la contención de anomalías, con una opción gratuita y en español.",
  metaTitle: "Juegos de Terror Cooperativo para PC | Guía",
  metaDescription:
    "Los mejores juegos de terror cooperativo para PC comparados: cooperativo, PvP y roleplay. Incluye Capibara SCP, la opción gratuita y en español sobre SS14.",
  searchQueries: [
    "juegos de terror cooperativo",
    "juegos de terror para jugar con amigos",
    "mejores juegos de terror coop pc",
    "coop horror games",
    "juegos de miedo multijugador",
  ],
  eyebrow: "TERROR EN GRUPO",
  sections: [
    {
      title: "Por qué el terror funciona mejor acompañado",
      paragraphs: [
        "El terror cooperativo cambia la fuente del miedo. En un juego para un jugador el susto lo administra el diseñador; en grupo lo administran tus compañeros, con sus errores, sus decisiones apresuradas y las cosas que dicen por el micrófono cuando algo sale mal. La tensión deja de ser guionizada y pasa a ser social.",
        "Casi todos estos juegos comparten la misma estructura: un objetivo claro, un espacio cerrado, información incompleta y una amenaza que castiga la descoordinación. Lo que cambia es cuánto dura tu personaje y si el peligro viene solo del entorno o también de otras personas.",
      ],
    },
    {
      title: "Cooperación, traición y roles",
      paragraphs: [
        "Algunos títulos son cooperativos puros: todo el mundo está en el mismo bando y la amenaza es el escenario. Otros añaden jugadores hostiles, lo que introduce sospecha y hace que la información se convierta en un recurso. Y unos pocos reparten roles fijos, donde cada persona tiene herramientas y responsabilidades que nadie más cubre.",
        "Ese último grupo es el que más se acerca al roleplay: no solo sobrevives, interpretas un puesto. Si un ingeniero no restablece la energía o un médico no atiende a tiempo, el fallo tiene un nombre y una consecuencia dentro de la historia de la partida.",
      ],
      points: [
        "Objetivos claros en espacios cerrados",
        "Comunicación por voz o radio como mecánica central",
        "Amenazas ambientales o jugadores hostiles",
        "Roles fijos frente a grupos sin especialización",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si quieres empezar sin gastar nada, Capibara SCP es un servidor comunitario en español sobre Space Station 14, un juego multijugador gratuito y de código abierto con vista cenital en 2D que funciona en PC modestos. Se descarga desde spacestation14.com para Windows, Linux o macOS.",
        "Allí el terror no viene de los sustos, sino de saber que una anomalía se ha soltado en la otra punta del Sitio y que tu departamento tiene que responder. La Wiki SCP en español recoge los roles, los procedimientos y las guías de cada anomalía, y los anuncios de la comunidad están en Discord.",
      ],
    },
  ],
  games: {
    heading: "Los mejores juegos de terror cooperativo",
    intro:
      "Seis juegos de terror pensados para jugar acompañado, con Capibara SCP en primer lugar por ser gratuito y estar en español. Las columnas indican si el juego es cooperativo, si incluye enfrentamiento entre jugadores y si está construido alrededor de interpretar un personaje. La disponibilidad y el precio de los títulos comerciales pueden cambiar.",
    columns: [
      { key: "coop", label: "Cooperativo" },
      { key: "pvp", label: "PvP" },
      { key: "roleplay", label: "Roleplay" },
    ],
    entries: [
      {
        name: "Capibara SCP (Space Station 14)",
        description:
          "Gratis y en español, sobre Space Station 14: un juego 2D de código abierto que corre en PC modestos. El personal del Sitio coopera para contener anomalías mientras otros jugadores las interpretan, con roles de la Fundación y roleplay durante todo el turno.",
        free: true,
        features: { coop: true, pvp: true, roleplay: true },
        highlighted: true,
      },
      {
        name: "Phasmophobia",
        description:
          "Investigación paranormal para hasta cuatro personas: reunís pruebas sobre el fantasma de una casa usando equipo especializado mientras intentáis no llamar su atención. La radio y la voz son parte de la mecánica.",
        free: false,
        features: { coop: true, pvp: false, roleplay: false },
      },
      {
        name: "Lethal Company",
        description:
          "Un grupo recoge chatarra en lunas industriales abandonadas para cumplir una cuota imposible, esquivando criaturas. El humor y el desastre colectivo pesan tanto como el terror.",
        free: false,
        features: { coop: true, pvp: false, roleplay: false },
      },
      {
        name: "GTFO",
        description:
          "Cooperativo exigente para cuatro jugadores en un complejo subterráneo, con sigilo obligatorio, munición escasa y planificación antes de cada expedición. Uno de los más duros de la lista.",
        free: false,
        features: { coop: true, pvp: false, roleplay: false },
      },
      {
        name: "SCP: Secret Laboratory",
        description:
          "Multijugador gratuito por rondas en un complejo de la Fundación, con bandos enfrentados: personal, Clase-D, Fuerzas Operativas Móviles y anomalías. Cooperación dentro de cada bando y conflicto entre ellos.",
        free: true,
        features: { coop: true, pvp: true, roleplay: false },
      },
      {
        name: "Content Warning",
        description:
          "Un grupo baja al Viejo Mundo a grabar vídeos de criaturas para conseguir visitas. El terror se mezcla con la comedia y con la necesidad de exponerse al peligro para obtener buen material.",
        free: false,
        features: { coop: true, pvp: false, roleplay: false },
      },
    ],
  },
  faqs: [
    {
      question: "¿Cuál es el mejor juego de terror cooperativo gratuito?",
      answer:
        "SCP: Secret Laboratory es gratuito y funciona por rondas rápidas. Si prefieres cooperación con roles y roleplay, Capibara SCP es un servidor comunitario gratuito en español sobre Space Station 14.",
    },
    {
      question: "¿Cuántas personas hacen falta para jugar en cooperativo?",
      answer:
        "Depende del juego: Phasmophobia y GTFO están pensados para cuatro jugadores, mientras que un servidor multijugador como Capibara SCP reúne a decenas de personas repartidas en departamentos.",
    },
    {
      question: "¿Hay juegos de terror cooperativo que no necesiten buen PC?",
      answer:
        "Sí. Space Station 14, sobre el que funciona Capibara SCP, es un juego 2D con vista cenital y requisitos bajos, muy por debajo de los de un juego de terror en 3D.",
    },
    {
      question: "¿Qué es Space Station 14?",
      answer:
        "Es un juego multijugador gratuito y de código abierto con vista cenital en 2D en el que cada jugador ocupa un puesto dentro de una instalación simulada. Se descarga en spacestation14.com para Windows, Linux y macOS.",
    },
  ],
  wikiLinks: [
    { label: "Abrir Wiki SCP", href: "/wiki-scp/scp/" },
    { label: "Primeros pasos", href: "/wiki-scp/new-player/" },
    { label: "Trabajos", href: "/wiki-scp/jobs/" },
    { label: "SCP-106 «El Viejo»", href: "/wiki-scp/scp106about/" },
  ],
  relatedPages: [
    {
      label: "Juegos de terror gratis para PC",
      href: "/juegos-de-terror-gratis-pc/",
      description: "Solo títulos gratuitos, sin compras ni suscripciones.",
    },
    {
      label: "Juegos como SCP: Secret Laboratory",
      href: "/juegos-como-scp-secret-laboratory/",
      description: "Alternativas con roles definidos y complejos cerrados.",
    },
    {
      label: "Juegos cooperativos para PC",
      href: "/juegos-cooperativos-pc/",
      description: "Cooperativo más allá del terror, para jugar en grupo.",
    },
  ],
};

export const FREE_HORROR_GAMES_PAGE: ServerSeoPageData = {
  slug: "juegos-de-terror-gratis-pc",
  title: "Juegos de Terror Gratis para PC",
  subtitle:
    "Seis juegos de terror que no cuestan nada, desde clásicos para un jugador hasta multijugador con comunidad activa, incluida una opción en español sobre Space Station 14.",
  metaTitle: "Juegos de Terror Gratis para PC | Multijugador y Coop",
  metaDescription:
    "Juegos de terror gratis para PC comparados: multijugador, cooperativo y código abierto. Incluye Capibara SCP, servidor en español sobre Space Station 14.",
  searchQueries: [
    "juegos de terror gratis pc",
    "juegos de miedo gratis",
    "free horror games pc",
    "juegos de terror gratis multijugador",
    "juegos de terror gratis sin descargar mucho",
  ],
  eyebrow: "TERROR GRATIS",
  sections: [
    {
      title: "Gratis no significa peor",
      paragraphs: [
        "El terror es uno de los géneros donde los proyectos gratuitos compiten de tú a tú con los comerciales. Buena parte de los títulos más influyentes empezaron como mods, como trabajos de una sola persona o como desarrollos abiertos mantenidos por su comunidad, y muchos siguen recibiendo actualizaciones años después.",
        "Todos los juegos de esta lista se pueden descargar y jugar sin pagar nada. Algunos son de código abierto, lo que significa que cualquiera puede consultar su código, corregirlo o crear versiones propias; esa es la razón de que sigan vivos mucho después de su lanzamiento.",
      ],
    },
    {
      title: "Qué mirar antes de descargar",
      paragraphs: [
        "Conviene fijarse en tres cosas. La primera, si el juego es multijugador o para una sola persona, porque un título de terror online depende de que haya gente conectada. La segunda, si esa cooperación es real o si en realidad hay jugadores enfrentados entre sí. Y la tercera, qué exige tu equipo: no todos los juegos gratuitos son ligeros.",
        "En ese último punto los juegos 2D tienen una ventaja evidente. Space Station 14, por ejemplo, es un multijugador con vista cenital que funciona en portátiles y equipos antiguos, mientras que un juego de terror en 3D con iluminación dinámica pide bastante más.",
      ],
      points: [
        "Multijugador o un solo jugador",
        "Cooperativo real o jugadores enfrentados",
        "Requisitos del equipo",
        "Código abierto y comunidad activa",
      ],
    },
    {
      title: "Pruébalo gratis en español",
      paragraphs: [
        "Si buscas algo gratuito, ligero y en tu idioma, Capibara SCP es un servidor comunitario en español sobre Space Station 14, un juego multijugador gratuito y de código abierto con vista cenital en 2D. Se descarga desde spacestation14.com para Windows, Linux o macOS y no incluye compras de ningún tipo.",
        "La ambientación es un Sitio de la Fundación SCP: unos jugadores ocupan los puestos del personal y otros interpretan a las anomalías. La Wiki SCP recoge en español los roles, los procedimientos de contención y las guías de cada anomalía, y la comunidad publica sus anuncios en Discord.",
      ],
    },
  ],
  games: {
    heading: "Los mejores juegos de terror gratis para PC",
    intro:
      "Seis juegos de terror que se pueden descargar y jugar sin pagar nada, con Capibara SCP en primer lugar por estar además en español. Las columnas indican si el juego es multijugador, si permite jugar en cooperativo y si su código fuente está publicado de forma abierta.",
    columns: [
      { key: "multiplayer", label: "Multijugador" },
      { key: "coop", label: "Cooperativo" },
      { key: "openSource", label: "Código abierto" },
    ],
    entries: [
      {
        name: "Capibara SCP (Space Station 14)",
        description:
          "Gratis y en español, sobre Space Station 14: un juego 2D de código abierto que corre en PC modestos. Ofrece roles de la Fundación (investigación, seguridad, medicina, Clase-D) y anomalías jugables como SCP-173 o SCP-096, con la wiki traducida al castellano.",
        free: true,
        features: { multiplayer: true, coop: true, openSource: true },
        highlighted: true,
      },
      {
        name: "SCP: Secret Laboratory",
        description:
          "El multijugador de SCP más jugado: rondas cortas en un complejo con personal, Clase-D, Fuerzas Operativas Móviles y anomalías enfrentados. Gratuito y con comunidad amplia, mayoritariamente angloparlante.",
        free: true,
        features: { multiplayer: true, coop: true, openSource: false },
      },
      {
        name: "SCP – Containment Breach",
        description:
          "El clásico para un jugador que popularizó a SCP-173 y su mecánica de parpadeo. Complejo generado al azar, sin combate y con una tensión que aguanta muy bien el paso del tiempo. Su código fuente está publicado.",
        free: true,
        features: { multiplayer: false, coop: false, openSource: true },
      },
      {
        name: "Cry of Fear",
        description:
          "Terror psicológico nacido como mod de Half-Life y convertido en juego independiente gratuito. Larga campaña para un jugador y un modo cooperativo para recorrerla acompañado.",
        free: true,
        features: { multiplayer: true, coop: true, openSource: false },
      },
      {
        name: "No More Room in Hell",
        description:
          "Supervivencia cooperativa contra zombis para hasta ocho jugadores, con munición escasa, fuego amigo activo y un tono mucho más lento y tenso que el de un shooter convencional. Gratuito.",
        free: true,
        features: { multiplayer: true, coop: true, openSource: false },
      },
      {
        name: "Deceit",
        description:
          "Deducción social con terror: un grupo intenta escapar mientras algunos de sus miembros son infectados que ocultan su identidad. Gratuito y enfrentado por definición, sin cooperación real entre bandos.",
        free: true,
        features: { multiplayer: true, coop: false, openSource: false },
      },
    ],
  },
  faqs: [
    {
      question: "¿Qué juegos de terror gratis hay para PC?",
      answer:
        "Entre los más conocidos están SCP – Containment Breach, SCP: Secret Laboratory, Cry of Fear, No More Room in Hell y Deceit. Capibara SCP añade una opción multijugador gratuita y en español sobre Space Station 14.",
    },
    {
      question: "¿Hay juegos de terror gratis para PC poco potentes?",
      answer:
        "Sí. Space Station 14, sobre el que funciona Capibara SCP, es un juego 2D con vista cenital y requisitos bajos. Cry of Fear y No More Room in Hell también usan motores antiguos y ligeros.",
    },
    {
      question: "¿Qué juegos de terror gratis se pueden jugar con amigos?",
      answer:
        "SCP: Secret Laboratory, Cry of Fear en su modo cooperativo, No More Room in Hell, Deceit y Capibara SCP permiten jugar acompañado, aunque no todos son cooperativos: en algunos hay jugadores enfrentados.",
    },
    {
      question: "¿Estos juegos gratuitos tienen micropagos?",
      answer:
        "Los títulos de esta lista se pueden jugar completos sin pagar. Space Station 14 es además de código abierto y Capibara SCP es un servidor comunitario que no vende ventajas dentro del juego.",
    },
  ],
  wikiLinks: [
    { label: "Abrir Wiki SCP", href: "/wiki-scp/scp/" },
    { label: "Primeros pasos", href: "/wiki-scp/new-player/" },
    { label: "Controles", href: "/wiki-scp/controls/" },
    { label: "SCP-457 «El Hombre Ardiente»", href: "/wiki-scp/scp457about/" },
  ],
  relatedPages: [
    {
      label: "Juegos de terror cooperativo",
      href: "/juegos-de-terror-cooperativo/",
      description: "Terror para jugar en grupo, gratuito y de pago.",
    },
    {
      label: "Juegos de SCP",
      href: "/juegos-de-scp/",
      description: "Todo lo jugable del universo de la Fundación SCP.",
    },
    {
      label: "Juegos gratis multijugador",
      href: "/juegos-gratis-multijugador/",
      description: "Más multijugador gratuito, más allá del terror.",
    },
  ],
};

export const SCP_SEO_PAGES = [
  SCP_HUB_PAGE,
  SCP_GETTING_STARTED_PAGE,
  SCP_ANOMALIES_PAGE,
  SCP_ROLES_PAGE,
  SCP_GAMES_PAGE,
  SCP_SL_ALTERNATIVES_PAGE,
  SCP_MULTIPLAYER_PAGE,
  SCP_FOUNDATION_PAGE,
  COOP_HORROR_GAMES_PAGE,
  FREE_HORROR_GAMES_PAGE,
] as const;
