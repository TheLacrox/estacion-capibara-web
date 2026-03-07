import { SITE_URL, DISCORD_URL } from "./constants";

export function breadcrumbSchema(
  items: { slug: string; title: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Wiki",
        item: `${SITE_URL}/wiki`,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.title,
        item: `${SITE_URL}/wiki/${item.slug}`,
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: `${SITE_URL}/wiki/${guide.slug}`,
    inLanguage: "es",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/wiki/${guide.slug}`,
    },
    datePublished: guide.datePublished ?? "2025-01-01",
    dateModified: guide.dateModified ?? guide.datePublished ?? "2025-01-01",
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

export function gameEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Rondas de Space Station 14 en Español - Estación Capibara",
    description:
      "Partidas de SS14 en el servidor español Estación Capibara. Rondas normales con antagonistas y eventos especiales cada fin de semana.",
    startDate: getNextFriday(),
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: "P1W",
      byDay: ["Friday", "Saturday", "Sunday"],
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
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Estación Capibara",
    alternateName: "Servidor Español de SS14",
    url: SITE_URL,
    inLanguage: "es",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/wiki?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function collectionPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wiki - Estación Capibara",
    description:
      "Wiki completa en español para Space Station 14. Guías de departamentos, roles, química, ingeniería y más.",
    url: `${SITE_URL}/wiki`,
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      name: "Estación Capibara",
      url: SITE_URL,
    },
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
