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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: `${SITE_URL}/wiki/${guide.slug}`,
    inLanguage: "es",
    publisher: organizationSchema(),
    image: `${SITE_URL}/branding/og-image.png`,
  };
}

export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Como jugar Space Station 14 en Estacion Capibara",
    description:
      "Guia paso a paso para descargar, instalar y conectarse al servidor de Space Station 14 en espanol Estacion Capibara.",
    inLanguage: "es",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Descarga SS14",
        text: "Descarga Space Station 14 gratis desde spacestation14.com.",
        url: "https://spacestation14.com",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Crea una cuenta",
        text: "Registrate con tu email para poder jugar en servidores.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Abre el launcher",
        text: "Ejecuta el launcher de SS14 despues de instalarlo.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: 'Busca "Capibara"',
        text: "En el navegador de servidores, busca 'Capibara' para encontrar nuestro servidor.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Elige tu personaje",
        text: "Personaliza tu personaje y elige un rol. Recomendamos empezar como Pasajero.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Lee las reglas",
        text: "Revisa las reglas del servidor antes de jugar.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "A jugar!",
        text: "Conectate y disfruta. La comunidad te ayudara si tienes preguntas.",
      },
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Estacion Capibara",
    url: SITE_URL,
    logo: `${SITE_URL}/branding/logo.svg`,
    sameAs: [DISCORD_URL],
  };
}
