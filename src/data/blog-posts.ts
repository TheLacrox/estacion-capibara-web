export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_TAGS = [
  "noticias",
  "guías",
  "eventos",
  "recaps",
  "patch-notes",
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

export const TAG_LABELS: Record<BlogTag, string> = {
  noticias: "Noticias",
  "guías": "Guías",
  eventos: "Eventos",
  recaps: "Recaps",
  "patch-notes": "Patch Notes",
};

export const BLOG_POSTS: BlogPost[] = [
  // === PATCH NOTES ===
  {
    slug: "patch-notes-audio-y-voces",
    title: "Patch Notes — Audio y Voces",
    description:
      "Selección de voz TTS en creación de personaje, sistema de audio muffle y correcciones de sonido.",
    content: `
<div class="patch-notes">
  <h2>🚀 Nuevo</h2>
  <ul>
    <li><strong>Selección de voz TTS en creación de personaje</strong> — Ahora puedes elegir la voz de tu personaje durante la creación, con preview en tiempo real. La selección se guarda en la base de datos.</li>
    <li><strong>Sistema de audio muffle</strong> — Portado de Trauma-Station. Los sonidos ahora se atenúan de forma realista a través de paredes y puertas.</li>
  </ul>
  <h2>🔄 Cambiado</h2>
  <ul>
    <li>Valores de SoundBlocker ajustados para un mejor balance</li>
    <li>SoundBlocker añadido a puertas de alta seguridad (HighSecDoor)</li>
  </ul>
  <h2>🐛 Arreglado</h2>
  <ul>
    <li>Los sonidos de emotes no se reproducían al usar atajos de chat en idiomas no-inglés</li>
  </ul>
</div>`,
    author: "TheLacrox",
    publishedAt: "2026-03-15",
    tags: ["patch-notes"],
    featured: true,
  },
  {
    slug: "patch-notes-borgs-de-combate",
    title: "Patch Notes — Borgs de Combate y Traducciones",
    description:
      "Nuevos borgs de combate, TTS integrado, Hand Labeler y correcciones de localización.",
    content: `
<div class="patch-notes">
  <h2>🚀 Nuevo</h2>
  <ul>
    <li><strong>Borg Commando para Deathsquad</strong> — Un nuevo borg de combate pesado disponible para los escuadrones de la muerte</li>
    <li><strong>Borg ERT</strong> — Borg de respuesta de emergencia para equipos ERT</li>
    <li><strong>Jesús</strong> — Nuevo personaje especial añadido al juego</li>
    <li><strong>Hand Labeler</strong> — Herramienta de etiquetado portada de Ummi Station</li>
    <li><strong>TTS (Text-to-Speech)</strong> — Sistema de texto a voz integrado en el juego</li>
  </ul>
  <h2>🔄 Cambiado</h2>
  <ul>
    <li>"Sugar" renombrado a "Sucrosa" en el locale español para mayor consistencia</li>
    <li>Nombres de entidades regresados a inglés (corrección de nombres que no debían traducirse)</li>
    <li>Actualización de prototipos de borgs de DevilStation</li>
  </ul>
  <h2>🐛 Arreglado</h2>
  <ul>
    <li>Comentarios inline en archivos de localización ya no se renderizan como texto visible</li>
  </ul>
</div>`,
    author: "TheLacrox",
    publishedAt: "2026-03-11",
    tags: ["patch-notes"],
  },
  {
    slug: "patch-notes-economia-y-xenoborgs",
    title: "Patch Notes — Sistema de Economía y Xenoborgs",
    description:
      "Sistema de economía completo con ATMs y Spesos, Xenoborgs, NanoGigs y múltiples correcciones.",
    content: `
<div class="patch-notes">
  <h2>🚀 Nuevo</h2>
  <ul>
    <li><strong>Sistema de economía completo</strong> — ATMs, cuentas bancarias, sistema de nóminas y precios de vendedores. ¡Ahora la estación funciona con Spesos!</li>
    <li><strong>Consola de gestión de salarios</strong> — Los jefes de departamento pueden gestionar los salarios de su personal</li>
    <li><strong>Sistema de objetivos de estación</strong> — Objetivos cooperativos que afectan el salario de toda la tripulación</li>
    <li><strong>Guía de economía</strong> — Nueva sección en el guidebook explicando el sistema económico</li>
    <li><strong>Xenoborgs</strong> — Nuevo tipo de borg alienígena en estado funcional</li>
    <li><strong>NanoGigs</strong> — Sistema de publicación de trabajos para que los jugadores ofrezcan y acepten encargos</li>
  </ul>
  <h2>🔄 Cambiado</h2>
  <ul>
    <li>Mapa Atlas actualizado con ATMs y terminales de economía</li>
    <li>Traducciones de elementos de administración completadas</li>
    <li>Objetivos extra añadidos al sistema</li>
  </ul>
  <h2>🐛 Arreglado</h2>
  <ul>
    <li>Spawn del mothership core corregido</li>
    <li>Cámaras de seguridad reparadas</li>
    <li>Interfaz de batería corregida</li>
    <li>Devil traducido correctamente al español</li>
    <li>Traducciones faltantes completadas</li>
    <li>Mothercore ahora tiene idioma asignado</li>
  </ul>
</div>`,
    author: "TheLacrox",
    publishedAt: "2026-03-05",
    tags: ["patch-notes"],
  },
  {
    slug: "patch-notes-lanzamiento-estacion-capibara",
    title: "Patch Notes — Lanzamiento de Estación Capibara",
    description:
      "El nacimiento de Estación Capibara: traducción completa al español, reactor nuclear y nueva identidad.",
    content: `
<div class="patch-notes">
  <h2>🚀 Nuevo</h2>
  <ul>
    <li><strong>Servidor Estación Capibara</strong> — Rebrand completo: de Goobstation → Hispania → Estación Capibara. Nueva identidad, nuevo nombre, misma pasión</li>
    <li><strong>Traducción completa del guidebook</strong> — Más de 200 guías traducidas al español. Toda la wiki disponible en tu idioma</li>
    <li><strong>Traducción de entidades y categorías</strong> — Objetos, roles y menús traducidos al español</li>
    <li><strong>Reactor Nuclear</strong> — Sistema de reactor nuclear de FarHorizons integrado</li>
    <li><strong>Configuración de servidor personalizada</strong> — Settings optimizados para la comunidad hispana</li>
  </ul>
  <h2>🔄 Cambiado</h2>
  <ul>
    <li>Mapa reducido a Cluster por defecto para mejor rendimiento con grupos pequeños</li>
    <li>Assets de branding actualizados con la nueva identidad Capibara</li>
    <li>Categorías del guidebook traducidas al español</li>
  </ul>
</div>`,
    author: "TheLacrox",
    publishedAt: "2026-02-28",
    tags: ["patch-notes"],
  },
  // === ARTICLES ===
  {
    slug: "bienvenidos-al-blog",
    title: "Bienvenidos al Blog de Estación Capibara",
    description:
      "Presentamos el blog oficial de Estación Capibara. Aquí encontrarás noticias, guías, patch notes y todo sobre el servidor SS14 en español.",
    content: `
<p>¡Bienvenidos al blog oficial de <strong>Estación Capibara</strong>! Este es el espacio donde compartiremos todo lo que pasa en nuestro servidor de Space Station 14 en español. Desde actualizaciones técnicas hasta las historias más caóticas que emergen de nuestras rondas de fin de semana.</p>

<h2>¿Qué es Estación Capibara?</h2>

<p>Estación Capibara es el servidor hispanohablante de Space Station 14 — un juego multijugador gratuito de simulación espacial donde decenas de jugadores operan una estación espacial juntos. Cada jugador elige un rol (capitán, ingeniero, médico, científico, oficial de seguridad, cocinero, payaso y muchos más) y debe cumplir sus responsabilidades mientras la estación enfrenta amenazas internas y externas.</p>

<p>Lo que nos hace diferentes de otros servidores de SS14 es que <strong>todo está en español</strong>. La wiki con más de 200 guías, la comunidad de Discord, los eventos especiales y hasta el sistema de economía con nuestra moneda propia, los Spesos. No necesitas saber inglés para disfrutar el juego al máximo.</p>

<h2>Nuestra historia</h2>

<p>El proyecto empezó como un fork de Goobstation que inicialmente llamamos Hispania Station 14. Rápidamente nos dimos cuenta de que necesitábamos una identidad propia, así que hicimos el rebrand a <strong>Estación Capibara</strong> — un nombre que refleja nuestra comunidad latinoamericana y el espíritu relajado pero caótico del juego.</p>

<p>Desde entonces hemos traducido más de 200 guías al español, implementado un sistema de economía completo con ATMs y salarios, añadido borgs de combate, integrado Text-to-Speech para los personajes, y construido esta web con wiki, blog y hasta un quiz de personalidad para descubrir tu rol ideal.</p>

<h2>¿Qué encontrarás en este blog?</h2>

<p>El blog está organizado en varias secciones, cada una con un propósito diferente:</p>

<ul>
  <li><strong>Patch Notes</strong> — Cada vez que actualizamos el servidor, publicaremos los cambios detallados aquí. Nuevas features, correcciones de bugs, mejoras de balance y todo lo que afecta tu experiencia de juego. Es la mejor forma de estar al día sin tener que revisar commits de GitHub.</li>
  <li><strong>Guías</strong> — Consejos y tutoriales para sacarle el máximo partido al juego. Desde tips básicos para sobrevivir tu primera ronda hasta estrategias avanzadas por departamento. Si alguna vez te preguntaste "¿cómo funciona la química?" o "¿qué hace un atmosférico?", aquí tendrás la respuesta.</li>
  <li><strong>Noticias</strong> — Anuncios importantes sobre el servidor, cambios en la comunidad, nuevos features importantes y todo lo que necesitas saber como jugador de Estación Capibara.</li>
  <li><strong>Eventos</strong> — Recaps de eventos especiales, rondas memorables y momentos épicos de la comunidad. Las mejores historias de SS14 no se escriben — se viven, y aquí las documentamos.</li>
</ul>

<h2>¿Por qué un blog?</h2>

<p>Estación Capibara nació con una misión clara: hacer Space Station 14 accesible para la comunidad hispanohablante. Tenemos la wiki más completa en español con más de 200 guías, un Discord activo con jugadores de toda Latinoamérica y España, y partidas organizadas cada fin de semana.</p>

<p>El blog es el siguiente paso natural. Es un lugar para documentar nuestra historia, compartir conocimiento que no cabe en una wiki, celebrar los mejores momentos de la estación y mantener a la comunidad informada sobre los cambios que hacemos constantemente al servidor.</p>

<p>También queremos que este blog sea útil para personas que están descubriendo SS14 por primera vez. Si llegaste aquí buscando "juegos gratis multijugador" o "juegos como Among Us pero más profundos", estás en el lugar correcto. SS14 es exactamente eso, y Estación Capibara es el mejor lugar para probarlo en español.</p>

<h2>¿Cuándo jugamos?</h2>

<p>Las rondas principales de Estación Capibara son los <strong>viernes, sábados y domingos</strong> a partir de las 21:00 hora Argentina (UTC-3). También hay partidas espontáneas entre semana cuando se juntan suficientes jugadores en el Discord. No necesitas reservar lugar ni registrarte — solo descarga el launcher, busca "Capibara" y conéctate.</p>

<h2>Únete a la comunidad</h2>

<p>Si todavía no juegas con nosotros, este es el momento perfecto para empezar. Space Station 14 es completamente gratis — sin microtransacciones, sin battle pass, sin pay-to-win. Descarga el launcher desde <strong>spacestation14.com</strong> o desde Steam, busca "Capibara" en la lista de servidores, y prepárate para la experiencia multijugador más única que vas a encontrar.</p>

<p>Y si ya eres parte de la tripulación, gracias por hacer de Estación Capibara lo que es. Cada ronda es diferente gracias a ustedes — los ingenieros que mantienen las luces encendidas, los médicos que reviven a los caídos, los traidores que siembran el caos, y sí, hasta los payasos que roban zapatos.</p>

<p>Nos vemos en la estación.</p>`,
    author: "TheLacrox",
    publishedAt: "2026-03-19",
    tags: ["noticias"],
    featured: true,
  },
  {
    slug: "5-tips-primera-ronda",
    title: "5 Tips para tu Primera Ronda en SS14",
    description:
      "Consejos esenciales para sobrevivir tu primera partida en Space Station 14. Desde elegir rol hasta sobrevivir al caos.",
    content: `
<p>Tu primera ronda en Space Station 14 puede ser abrumadora. La estación es enorme, hay decenas de sistemas interconectados, más de 30 roles diferentes y nadie te da un tutorial formal. Es normal sentirse perdido los primeros minutos — a todos nos pasó. Pero no te preocupes: con estos consejos vas a sobrevivir tu primera partida y, lo más importante, vas a disfrutarla.</p>

<p>Estos tips están basados en lo que hemos visto en Estación Capibara después de recibir a cientos de jugadores nuevos. Son los errores más comunes y las estrategias que mejor funcionan para pasar de "no entiendo nada" a "esto es increíble" en una sola ronda.</p>

<h2>1. Empieza como Pasajero o Asistente</h2>

<p>Este es el consejo más importante. <strong>No elijas un rol con responsabilidades en tu primera ronda</strong>. Roles como Capitán, Ingeniero Jefe o Jefe Médico tienen la tripulación entera dependiendo de ellos. Si no sabes lo que estás haciendo, la estación puede colapsar — literalmente.</p>

<p>En cambio, elige <strong>Pasajero</strong>. Este rol no tiene obligaciones ni departamento asignado. Puedes caminar por toda la estación, observar cómo trabajan los demás, hacer preguntas y aprender sin presión. Es como un turista espacial con licencia para curiosear.</p>

<p>Cuando te sientas más cómodo con el mapa y los controles básicos, prueba roles de bajo riesgo:</p>
<ul>
  <li><strong>Botánico</strong> — Plantas hidroponía. Es tranquilo, no hay presión, y aprendes mecánicas básicas como inventario y herramientas.</li>
  <li><strong>Técnico de Carga</strong> — Mueves cajas y cumples pedidos. Aprendes cómo funciona la logística de la estación.</li>
  <li><strong>Conserje</strong> — Limpias la estación. Parece aburrido, pero te obliga a recorrer todos los departamentos y entender el layout.</li>
  <li><strong>Barman o Chef</strong> — Preparas comida y bebidas. Es social, creativo y relativamente seguro.</li>
</ul>

<p>Deja los roles especializados (Ingeniero, Médico, Científico, Seguridad) para cuando entiendas las mecánicas básicas. Y el Capitán... eso déjalo para la ronda 20, por lo menos.</p>

<h2>2. Lee las señales y aprende el mapa</h2>

<p>La estación está diseñada con un sistema de <strong>colores por departamento</strong> que te ayuda a orientarte:</p>

<ul>
  <li><strong>Rojo</strong> — Seguridad (brig, armería, oficinas de oficiales)</li>
  <li><strong>Amarillo</strong> — Ingeniería (sala de motores, atmosféricos, paneles eléctricos)</li>
  <li><strong>Azul claro</strong> — Médico (medbay, quirófano, farmacia)</li>
  <li><strong>Morado</strong> — Ciencia (laboratorios, investigación, servidores)</li>
  <li><strong>Marrón</strong> — Carga (almacenes, lanzadera de salvamento)</li>
  <li><strong>Verde</strong> — Servicio (cocina, bar, hidroponía, capilla)</li>
</ul>

<p>Si te pierdes, busca los carteles en las paredes — indican hacia dónde están los departamentos principales. También busca la <strong>pantalla de mapa</strong> que suele estar cerca del lobby de la estación. Te muestra una vista completa de toda la estación con cada departamento marcado.</p>

<p>Un truco que funciona: al inicio de la ronda, antes de que el caos empiece, camina por los pasillos principales de la estación durante 2-3 minutos. Identifica dónde están Médico (por si te hieren), Seguridad (por si necesitas reportar algo) y la lanzadera de evacuación (por si todo sale mal). Esos tres puntos son tu red de seguridad.</p>

<h2>3. Usa el chat — SS14 es un juego social</h2>

<p>Space Station 14 no es un juego que se juega en silencio. La comunicación es fundamental, y la buena noticia es que <strong>no necesitas micrófono</strong>. Todo funciona por chat de texto.</p>

<p>Los controles de comunicación que necesitas saber:</p>

<ul>
  <li><strong>Tecla T</strong> — Chat local. Todos los que están cerca de ti pueden leer tu mensaje. Es la forma más común de comunicarte.</li>
  <li><strong>Tecla ; (punto y coma) antes del mensaje</strong> — Radio del departamento. Si tienes un headset equipado, el mensaje llega a todos los miembros de tu departamento en la estación.</li>
  <li><strong>Tecla Y</strong> — OOC (Out of Character). Para hablar fuera del roleplay, preguntar mecánicas del juego o pedir ayuda técnica.</li>
</ul>

<p>El consejo más importante sobre la comunicación: <strong>no tengas miedo de preguntar</strong>. Escribe "soy nuevo, ¿alguien me puede explicar qué tengo que hacer?" y la mayoría de jugadores te ayudarán con gusto. En Estación Capibara la comunidad es acogedora — preferimos enseñar a un novato que tener un ingeniero que no sabe encender el motor.</p>

<p>También presta atención a lo que dicen los demás por radio. Los anuncios del Capitán, las alertas de Seguridad y las emergencias médicas te dan contexto de lo que está pasando en la estación. A veces la diferencia entre sobrevivir y morir es haber leído un mensaje de "HAY UN TRAIDOR EN INGENIERÍA" a tiempo.</p>

<h2>4. No mueras en silencio — y no te desconectes al morir</h2>

<p>Morir en SS14 es normal. Vas a morir. Probablemente en tu primera ronda. Quizás varias veces. Pero morir no significa que tu ronda terminó.</p>

<p>Lo primero: si estás herido, <strong>grita por ayuda</strong>. Usa el chat local (T) para decir "estoy herido en [tu ubicación]" o activa tu radio para llamar a Médico. Muchos jugadores nuevos se quedan callados mientras se desangran en un pasillo. Los médicos no pueden curarte si no saben que existes.</p>

<p>Lo segundo y más importante: <strong>si mueres, NO te desconectes</strong>. En SS14 existen múltiples formas de volver a la vida:</p>

<ul>
  <li><strong>Los médicos pueden revivir</strong> — Si tu cuerpo llega a Médico a tiempo, te pueden estabilizar y curar.</li>
  <li><strong>El clonador</strong> — Algunos servidores tienen clonadores que pueden crear un cuerpo nuevo para ti.</li>
  <li><strong>Roles de fantasma</strong> — Si realmente mueres y no hay forma de revivir, puedes convertirte en un fantasma y eventualmente tomar el control de un NPC o un nuevo rol que aparezca durante la ronda (como un ratón, un mono, o un antagonista mid-round).</li>
</ul>

<p>Muchos jugadores nuevos mueren, se frustran y se desconectan inmediatamente. Se pierden la mejor parte: ver cómo la ronda se desarrolla, quiénes eran los traidores, y las historias que emergen del caos. Incluso como fantasma, presenciar el final de una ronda es entretenimiento puro.</p>

<h2>5. Abraza el caos — eso ES el juego</h2>

<p>Esto es lo más difícil de entender para los jugadores nuevos: <strong>las cosas que salen mal son el juego, no un error del juego</strong>.</p>

<p>El motor va a explotar porque un ingeniero cometió un error. El traidor va a envenenar la comida del chef. El payaso va a robar los zapatos de Seguridad. Un químico va a crear una bomba de plasma "accidentalmente". La gravedad va a dejar de funcionar en el peor momento posible.</p>

<p>Todo eso es SS14 funcionando exactamente como debe. Las mejores historias de este juego nacen del caos imprevisto:</p>

<ul>
  <li>El detective que resolvió un caso de envenenamiento interrogando a cada persona en el bar</li>
  <li>El ingeniero que salvó la estación entera reparando el motor con las manos quemadas</li>
  <li>El payaso que accidentalmente descubrió al traidor porque le robó el PDA</li>
  <li>La evacuación donde el último shuttle salió con el traidor piloteando</li>
</ul>

<p>No intentes "ganar" en SS14. No hay puntuación, no hay ranking, no hay nivel. El objetivo es vivir una experiencia, contribuir a la historia colectiva de la ronda, y crear momentos memorables — ya sean heroicos, trágicos o absolutamente ridículos.</p>

<h2>Bonus: Consulta la wiki</h2>

<p>Estación Capibara tiene una wiki completa en español con más de 200 guías que cubren cada rol, sistema y mecánica del juego. Si durante la ronda no sabes cómo funciona algo, puedes consultar la wiki en tu navegador mientras juegas. No es trampa — es sentido común.</p>

<p>Las guías más útiles para nuevos jugadores:</p>
<ul>
  <li><strong>Guía de Supervivencia</strong> — Lo básico para no morir en los primeros 5 minutos</li>
  <li><strong>Trabajos y Roles</strong> — Qué hace cada departamento y cada rol</li>
  <li><strong>Controles</strong> — Todas las teclas y atajos que necesitas saber</li>
</ul>

<p>¿Listo para tu primera ronda? Descarga SS14 gratis desde spacestation14.com o Steam, busca "Capibara" en la lista de servidores, y prepárate para la experiencia multijugador más única que vas a encontrar. Nos vemos en la estación — y si te pierdes, pregunta. Siempre hay alguien dispuesto a ayudar.</p>`,
    author: "TheLacrox",
    publishedAt: "2026-03-19",
    tags: ["guías"],
    featured: true,
  },
  {
    slug: "que-son-los-spesos",
    title: "¿Qué son los Spesos? Guía del Sistema de Economía",
    description:
      "Todo sobre el sistema de economía de Estación Capibara: Spesos, salarios, ATMs, NanoGigs y objetivos de estación.",
    content: `
<p>Estación Capibara tiene algo que la mayoría de servidores de SS14 no tienen: un <strong>sistema de economía completo y funcional</strong>. No es un sistema decorativo ni un placeholder — cada jugador tiene una cuenta bancaria real, recibe un salario basado en su rol, puede usar ATMs para transferir dinero, y la estación entera tiene objetivos económicos cooperativos que afectan los ingresos de todos.</p>

<p>Si vienes de otros servidores de SS14, esto va a cambiar completamente cómo juegas. El dinero en Estación Capibara no es un número ficticio — tiene consecuencias reales en tu ronda.</p>

<h2>¿Qué son los Spesos?</h2>

<p>Los <strong>Spesos (§)</strong> son la moneda oficial de Estación Capibara. Funcionan como dinero real dentro del juego: puedes ganarlos, gastarlos, transferirlos a otros jugadores y perderlos si la estación no cumple sus objetivos.</p>

<p>El sistema fue implementado desde cero por el equipo de Estación Capibara como parte de nuestra visión de crear una experiencia más inmersiva. En la mayoría de servidores de SS14, todos los vendedores son gratis y no hay consecuencia económica por nada. Aquí, cada decisión tiene un costo — y eso cambia la dinámica del juego de maneras interesantes.</p>

<h2>Tabla completa de salarios</h2>

<p>Cada rol tiene un salario diferente que se deposita automáticamente en tu cuenta bancaria cada ciclo de pago. También empiezas la ronda con un balance inicial que varía según tu nivel de responsabilidad:</p>

<h3>Comando</h3>
<ul>
  <li><strong>Capitán</strong> — §200/ciclo, balance inicial §500</li>
  <li><strong>Jefe de Personal</strong> — §150/ciclo, balance inicial §400</li>
  <li><strong>Ingeniero Jefe</strong> — §150/ciclo, balance inicial §400</li>
  <li><strong>Jefe Médico</strong> — §150/ciclo, balance inicial §400</li>
  <li><strong>Director de Investigación</strong> — §150/ciclo, balance inicial §400</li>
  <li><strong>Jefe de Seguridad</strong> — §150/ciclo, balance inicial §400</li>
  <li><strong>Quartelmaestre</strong> — §130/ciclo, balance inicial §350</li>
</ul>

<h3>Seguridad</h3>
<ul>
  <li><strong>Custodio</strong> — §100/ciclo, balance inicial §250</li>
  <li><strong>Detective</strong> — §90/ciclo, balance inicial §200</li>
  <li><strong>Oficial de Seguridad</strong> — §90/ciclo, balance inicial §200</li>
</ul>

<h3>Ingeniería</h3>
<ul>
  <li><strong>Ingeniero de Estación</strong> — §80/ciclo, balance inicial §200</li>
  <li><strong>Técnico Atmosférico</strong> — §80/ciclo, balance inicial §200</li>
</ul>

<h3>Médico</h3>
<ul>
  <li><strong>Doctor</strong> — §80/ciclo, balance inicial §200</li>
  <li><strong>Químico</strong> — §80/ciclo, balance inicial §200</li>
  <li><strong>Paramédico</strong> — §80/ciclo, balance inicial §200</li>
</ul>

<h3>Ciencia</h3>
<ul>
  <li><strong>Científico</strong> — §80/ciclo, balance inicial §200</li>
</ul>

<h3>Carga</h3>
<ul>
  <li><strong>Técnico de Carga</strong> — §70/ciclo, balance inicial §150</li>
  <li><strong>Especialista de Salvamento</strong> — §70/ciclo, balance inicial §150</li>
</ul>

<h3>Servicio</h3>
<ul>
  <li><strong>Barman</strong> — §60/ciclo, balance inicial §200</li>
  <li><strong>Chef</strong> — §60/ciclo, balance inicial §200</li>
  <li><strong>Botánico</strong> — §60/ciclo, balance inicial §150</li>
  <li><strong>Abogado</strong> — §70/ciclo, balance inicial §200</li>
  <li><strong>Conserje</strong> — §50/ciclo, balance inicial §150</li>
  <li><strong>Capellán</strong> — §50/ciclo, balance inicial §150</li>
  <li><strong>Reportero</strong> — §50/ciclo, balance inicial §150</li>
  <li><strong>Bibliotecario</strong> — §40/ciclo, balance inicial §100</li>
</ul>

<h3>Civil</h3>
<ul>
  <li><strong>Payaso</strong> — §30/ciclo, balance inicial §50</li>
  <li><strong>Mimo</strong> — §30/ciclo, balance inicial §50</li>
  <li><strong>Músico</strong> — §40/ciclo, balance inicial §100</li>
  <li><strong>Boxeador</strong> — §40/ciclo, balance inicial §100</li>
  <li><strong>Pasajero</strong> — §20/ciclo, balance inicial §50</li>
</ul>

<p>Como puedes ver, los roles con más responsabilidad ganan más. Un Capitán gana 10 veces más que un Pasajero. Esto crea una jerarquía natural que refleja la importancia de cada rol para el funcionamiento de la estación.</p>

<h2>ATMs: tu banco espacial</h2>

<p>Los ATMs están distribuidos por toda la estación. En el mapa Atlas, hay terminales en los pasillos principales, cerca de los departamentos y en áreas comunes. Son tu punto de acceso a la economía.</p>

<p>Con un ATM puedes:</p>
<ul>
  <li><strong>Consultar tu balance</strong> — Ver cuántos Spesos tienes en tu cuenta</li>
  <li><strong>Transferir Spesos</strong> — Enviar dinero a otro jugador por nombre o ID</li>
  <li><strong>Revisar tu historial</strong> — Ver los movimientos de tu cuenta</li>
</ul>

<p>Las transferencias entre jugadores abren posibilidades interesantes de roleplay. Un Barman puede cobrar por los tragos. Un Abogado puede pedir honorarios por defender a un detenido. Un ingeniero freelance puede cobrar por reparaciones urgentes. La economía crea relaciones que de otra forma no existirían.</p>

<h2>Vendedores y precios</h2>

<p>Los vendedores automáticos de la estación aceptan Spesos. A diferencia de otros servidores donde todo es gratis, aquí cada producto tiene un precio. Esto significa que:</p>

<ul>
  <li>La comida del Chef y las bebidas del Barman tienen valor real — los jugadores agradecen (y pagan por) un buen servicio</li>
  <li>El equipo especializado cuesta dinero — un kit de herramientas extra o medicinas de emergencia tienen un precio</li>
  <li>Los roles de servicio ganan importancia económica — un buen Chef puede ser más valioso que un Científico si la tripulación está hambrienta</li>
</ul>

<h2>Objetivos de Estación</h2>

<p>Este es el sistema que conecta la economía con el gameplay cooperativo. La estación tiene <strong>objetivos colectivos</strong> que toda la tripulación debe cumplir. Estos objetivos varían por ronda y pueden incluir metas de producción, seguridad o supervivencia.</p>

<p>La conexión con la economía es directa: <strong>si la estación cumple sus objetivos, los salarios se mantienen normales o incluso pueden aumentar</strong>. Si los objetivos fallan, puede haber congelamiento de salarios — todos ganan menos Spesos por ciclo.</p>

<p>Esto crea una presión cooperativa real. No es suficiente con que tú hagas bien tu trabajo — necesitas que todos los departamentos funcionen. Un fallo en Ingeniería que deja la estación sin luz afecta los objetivos, que afectan los salarios, que afectan a todos. De repente, mantener el motor encendido no es solo tarea del ingeniero — es una preocupación económica de toda la tripulación.</p>

<h2>NanoGigs: la economía entre jugadores</h2>

<p>NanoGigs es nuestro sistema de publicación de trabajos entre jugadores. Funciona como un tablón de anuncios donde cualquiera puede crear encargos con recompensa en Spesos.</p>

<p>Ejemplos de NanoGigs que hemos visto en rondas reales:</p>
<ul>
  <li>"Necesito que reparen la puerta de mi oficina — §50" (publicado por el Capitán)</li>
  <li>"Busco guardaespaldas para ir a Salvamento — §100 por misión" (publicado por un Científico)</li>
  <li>"Ofrezco servicio de delivery de comida a cualquier departamento — §20 por entrega" (publicado por el Chef)</li>
  <li>"Se busca traductor para interrogatorio — §30" (publicado por Seguridad)</li>
</ul>

<p>NanoGigs convierte la estación en una economía viva donde los jugadores crean sus propias oportunidades de negocio. Los roles civiles que normalmente no tienen mucho que hacer (Pasajero, Músico) pueden convertirse en emprendedores espaciales.</p>

<h2>La Consola de Gestión de Salarios</h2>

<p>Los jefes de departamento tienen acceso a una consola especial que les permite ver y gestionar los salarios de su personal. Esto significa que un Ingeniero Jefe puede bonificar a un ingeniero que hizo un trabajo excepcional, o que el Capitán puede ajustar los salarios si la situación económica de la estación lo requiere.</p>

<p>Esta herramienta añade una capa de gestión que hace que los roles de Comando se sientan como verdaderas posiciones de liderazgo. No solo das órdenes — administras recursos y tomas decisiones económicas que afectan a tu equipo.</p>

<h2>¿Por qué importa la economía?</h2>

<p>Podrías preguntarte: ¿por qué complicar SS14 con un sistema de dinero? La respuesta es que la economía <strong>crea motivaciones y conflictos que no existirían de otra forma</strong>.</p>

<p>Sin economía, todos los roles son intercambiables y nadie tiene incentivos claros. Con economía, el Chef quiere que la gente compre su comida. El Abogado quiere clientes. El traidor tiene una motivación creíble para robar. El Capitán tiene una herramienta real de gestión. Y toda la tripulación tiene un motivo cooperativo tangible para cumplir los objetivos de la estación.</p>

<p>El sistema de Spesos no es un gimmick — es una de las features que hace que Estación Capibara se sienta como un servidor diferente a cualquier otro. Es roleplay con consecuencias, cooperación con incentivos, y caos con una dimensión económica.</p>`,
    author: "TheLacrox",
    publishedAt: "2026-03-19",
    tags: ["guías"],
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
