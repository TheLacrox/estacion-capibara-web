import type { Metadata } from "next";
import { SITE_URL, DISCORD_URL } from "./constants";

export const siteMetadata: Metadata = {
  title: "Estacion Capibara | Servidor de Space Station 14 en Espanol",
  description:
    "Unete al mejor servidor de Space Station 14 en espanol. Roleplay, economia con Spesos, 30+ roles, 8 departamentos y una comunidad 100% hispanohablante. Descarga SS14 y busca 'Capibara' en el navegador de servidores.",
  keywords: [
    "space station 14",
    "ss14",
    "ss14 espanol",
    "space station 14 espanol",
    "como jugar ss14",
    "servidor ss14 espanol",
    "ss14 en espanol",
    "roleplay espacial",
    "estacion capibara",
    "ss14 latino",
    "space station 14 servidor",
    "juegos de roleplay",
    "ss14 server español",
  ],
  authors: [{ name: "Estacion Capibara" }],
  creator: "Estacion Capibara",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    title: "Estacion Capibara | Servidor de Space Station 14 en Espanol",
    description:
      "El mejor servidor de SS14 en espanol. Economia con Spesos, objetivos de estacion, 30+ roles y comunidad hispanohablante activa.",
    siteName: "Estacion Capibara",
    images: [
      {
        url: "/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "Estacion Capibara - Servidor de Space Station 14 en Espanol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estacion Capibara | SS14 en Espanol",
    description:
      "Unete al mejor servidor de Space Station 14 en espanol. Roleplay, economia, 30+ roles.",
    images: ["/branding/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "discord:server": DISCORD_URL,
  },
};

export const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Estacion Capibara - Space Station 14",
  description:
    "Servidor de Space Station 14 en espanol con sistema economico, objetivos de estacion y comunidad hispanohablante.",
  genre: ["Roleplay", "Simulation", "Multiplayer"],
  gamePlatform: "PC",
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

export const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como jugar Space Station 14 en espanol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Descarga SS14 desde spacestation14.com, crea una cuenta, abre el launcher y busca 'Capibara' en el navegador de servidores. Estacion Capibara es un servidor 100% en espanol.",
      },
    },
    {
      "@type": "Question",
      name: "Que es Space Station 14?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Space Station 14 es un juego de roleplay multijugador donde los jugadores son tripulantes de una estacion espacial. Cada jugador tiene un rol (ingeniero, medico, cientifico, etc.) y debe trabajar en equipo mientras enfrenta amenazas como traidores y desastres.",
      },
    },
    {
      "@type": "Question",
      name: "Que son los Spesos en Estacion Capibara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los Spesos son la moneda oficial de Estacion Capibara. Cada tripulante recibe un salario en Spesos cada 10 minutos segun su rol. Puedes usar Spesos en maquinas expendedoras y cajeros automaticos.",
      },
    },
  ],
};
