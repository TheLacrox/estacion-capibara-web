import { SITE_URL, DISCORD_URL } from "./constants";

export function breadcrumbSchema(
  items: { slug: string; title: string }[],
  options: { basePath?: string; wikiName?: string } = {}
) {
  const basePath = options.basePath ?? "/wiki";
  const wikiName = options.wikiName ?? "Wiki";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: wikiName,
        item: `${SITE_URL}${basePath}/`,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 3,
        name: item.title,
        item: `${SITE_URL}${basePath}/${item.slug}/`,
      })),
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#thelacrox`,
    name: "TheLacrox",
    url: `${SITE_URL}/sobre-nosotros/`,
    description:
      "Fundador y administrador de Estación Capibara, la comunidad hispanohablante de Space Station 14 con cuatro servidores propios.",
    sameAs: ["https://github.com/TheLacrox"],
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function articleSchema(guide: {
  title: string;
  slug: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  basePath?: string;
  /** Overrides the default Organization author (e.g. personSchema() for blog posts). */
  author?: Record<string, unknown>;
}) {
  const basePath = guide.basePath ?? "/wiki";
  const url = `${SITE_URL}${basePath}/${guide.slug}/`;
  const dateModified = guide.dateModified ?? guide.datePublished;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url,
    inLanguage: "es",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(guide.datePublished ? { datePublished: guide.datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: guide.author ?? {
      "@type": "Organization",
      name: "Estación Capibara",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Estación Capibara",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/branding/og-image.png`,
        width: 1200,
        height: 630,
      },
    },
    image: `${SITE_URL}/branding/og-image.png`,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Estación Capibara",
    alternateName: "Servidor Español de SS14",
    description:
      "Comunidad hispanohablante de Space Station 14 con servidor propio, wiki en español y eventos cada fin de semana.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/branding/og-image.png`,
      width: 1200,
      height: 630,
    },
    sameAs: [
      DISCORD_URL,
      "https://github.com/TheLacrox/Estacion-Capibara",
      "https://ss14.io/about/hub",
    ],
  };
}

// Canonical node for the actual game. The servers are NOT the game: putting
// VideoGame (with offers/operatingSystem) on server pages marks a community
// server up as an installable software product — wrong entity. Server pages
// emit this node once and point at it from a GameServer via `game`.
export function videoGameSS14Schema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "@id": `${SITE_URL}/#videogame-ss14`,
    name: "Space Station 14",
    description:
      "Juego multijugador gratuito y de código abierto de simulación y roleplay en una estación espacial, sucesor espiritual de Space Station 13.",
    url: "https://spacestation14.com",
    sameAs: [
      "https://store.steampowered.com/app/1255460/Space_Station_14/",
      "https://github.com/space-wizards/space-station-14",
    ],
    genre: ["Roleplay", "Simulation", "Multiplayer"],
    gamePlatform: "PC",
    playMode: "MultiPlayer",
    applicationCategory: "Game",
    operatingSystem: "Windows, Linux, macOS",
    inLanguage: "es",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function gameServerSchema(server: {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  lineage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "GameServer",
    "@id": `${SITE_URL}/${server.slug}/#gameserver`,
    name: `${server.name} - Servidor Español de SS14`,
    alternateName: [server.name],
    description: `${server.description} ${server.lineage}. Servidor en español de Space Station 14.`,
    url: `${SITE_URL}/${server.slug}/`,
    game: { "@id": `${SITE_URL}/#videogame-ss14` },
  };
}

export function gameEventSchema() {
  // EventSeries + eventSchedule instead of Event with concrete start/end
  // dates: this is a static export, so any date computed at build time goes
  // stale between deploys and reads as a past event.
  return {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "Rondas de Space Station 14 en Español - Estación Capibara",
    description:
      "Partidas de SS14 en los servidores españoles de Estación Capibara. Rondas normales con antagonistas y eventos especiales cada fin de semana.",
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: "P1W",
      byDay: ["Friday", "Saturday", "Sunday"],
      startTime: "21:00:00",
      endTime: "23:59:00",
    },
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      name: "Estación Capibara - SS14",
      url: SITE_URL,
    },
    organizer: {
      "@type": "Organization",
      name: "Estación Capibara",
      url: SITE_URL,
    },
    inLanguage: "es",
    image: `${SITE_URL}/branding/og-image.png`,
    eventStatus: "https://schema.org/EventScheduled",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Estación Capibara",
    alternateName: "Servidor Español de SS14",
    url: SITE_URL,
    inLanguage: "es",
  };
}

interface CollectionPageSchemaOptions {
  name?: string;
  description?: string;
  url?: string;
  numberOfItems?: number;
  items?: { name: string; url: string }[];
}

export function collectionPageSchema(
  options: CollectionPageSchemaOptions = {}
) {
  const pagePath = options.url ?? "/wiki/";
  const pageUrl = pagePath.startsWith("http")
    ? pagePath
    : `${SITE_URL}${pagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.name ?? "Wiki - Estación Capibara",
    description:
      options.description ??
      "Wiki completa en español para Space Station 14. Guías de departamentos, roles, química, ingeniería y más.",
    url: pageUrl,
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      name: "Estación Capibara",
      url: SITE_URL,
    },
    ...(options.numberOfItems !== undefined
      ? { numberOfItems: options.numberOfItems }
      : {}),
    ...(options.items
      ? {
          mainEntity: {
            "@type": "ItemList",
            itemListElement: options.items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              url: item.url.startsWith("http")
                ? item.url
                : `${SITE_URL}${item.url}`,
            })),
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function itemListSchema(items: { name: string; url?: string; position: number }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      ...(item.url ? { url: item.url } : {}),
    })),
  };
}

export function seoBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}

