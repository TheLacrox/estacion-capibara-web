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

export function articleSchema(guide: {
  title: string;
  slug: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  basePath?: string;
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
    author: {
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

export function videoGameSchema(server: {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  lineage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: `${server.name} - Servidor Español de SS14`,
    alternateName: [server.name],
    description: `${server.description} ${server.lineage}. Servidor en español de Space Station 14.`,
    url: `${SITE_URL}/${server.slug}/`,
    genre: ["Roleplay", "Simulation", "Multiplayer"],
    gamePlatform: "PC",
    playMode: "MultiPlayer",
    applicationCategory: "Game",
    operatingSystem: "Windows, Linux, macOS",
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      name: "Estación Capibara",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function gameEventSchema() {
  const nextFriday = getNextFriday();
  const nextSunday = getNextSunday(nextFriday);
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Rondas de Space Station 14 en Español - Estación Capibara",
    description:
      "Partidas de SS14 en el servidor español Estación Capibara. Rondas normales con antagonistas y eventos especiales cada fin de semana.",
    startDate: `${nextFriday}T21:00:00-03:00`,
    endDate: `${nextSunday}T23:59:00-03:00`,
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

function getNextFriday(): string {
  const now = new Date();
  const day = now.getDay();
  const daysUntilFriday = (5 - day + 7) % 7 || 7;
  const nextFriday = new Date(now);
  nextFriday.setDate(now.getDate() + daysUntilFriday);
  return nextFriday.toISOString().split("T")[0];
}

function getNextSunday(fridayDate: string): string {
  const friday = new Date(fridayDate);
  const sunday = new Date(friday);
  sunday.setDate(friday.getDate() + 2);
  return sunday.toISOString().split("T")[0];
}
