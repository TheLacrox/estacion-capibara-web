import type { Metadata } from "next";
import { SITE_URL, DISCORD_URL } from "./constants";

export const siteMetadata: Metadata = {
  title: "Estación Capibara | Servidor Español de SS14 | Space Station 14 en Español",
  description:
    "Servidor español de SS14 con comunidad hispanohablante activa. Jugamos viernes, sábados y domingos con rondas normales y eventos especiales. 30+ roles, economía con Spesos, wiki en español. ¡Descarga gratis y busca Capibara!",
  keywords: [
    "servidor español de ss14",
    "servidor español ss14",
    "ss14 servidor español",
    "space station 14 servidor español",
    "space station 14",
    "ss14",
    "ss14 español",
    "space station 14 español",
    "ss14 en español",
    "servidor hispano ss14",
    "servidor ss14 español",
    "ss14 server español",
    "comunidad española ss14",
    "ss14 comunidad hispana",
    "ss14 latino",
    "ss14 latinoamérica",
    "estación capibara",
    "cómo jugar space station 14",
    "cómo jugar ss14",
    "ss14 cómo empezar",
    "guía space station 14 español",
    "ss14 guía para principiantes",
    "space station 14 tutorial español",
    "descargar ss14",
    "ss14 descargar gratis",
    "space station 14 servidor",
    "roleplay espacial",
    "juegos de roleplay",
    "ss14 spesos",
    "ss14 economía",
    "ss14 antagonistas",
    "ss14 departamentos",
    "ss14 wiki español",
    "ss14 roles y trabajos",
    "ss14 eventos",
    "ss14 horario",
    "jugar ss14 fines de semana",
  ],
  authors: [{ name: "Estación Capibara" }],
  creator: "Estación Capibara",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    title: "Estación Capibara | Servidor Español de SS14 | Space Station 14 en Español",
    description:
      "Servidor español de SS14. Jugamos viernes a domingo con economía de Spesos, eventos especiales, 30+ roles y comunidad hispanohablante activa.",
    siteName: "Estación Capibara",
    images: [
      {
        url: "/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "Estación Capibara - Servidor de Space Station 14 en Español",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estación Capibara | Servidor Español de SS14",
    description:
      "Servidor español de SS14. Rondas normales y eventos especiales de viernes a domingo. Roleplay, economía con Spesos, 30+ roles.",
    images: ["/branding/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "discord:server": DISCORD_URL,
  },
};

export const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "Estación Capibara - Servidor Español de SS14",
  alternateName: ["Estación Capibara", "Servidor Español de SS14", "SS14 en Español"],
  description:
    "Servidor español de Space Station 14. Jugamos viernes, sábados y domingos con rondas normales y eventos especiales. Sistema de economía con Spesos, 30+ roles, 8 departamentos y objetivos cooperativos totalmente en español.",
  url: SITE_URL,
  genre: ["Roleplay", "Simulation", "Multiplayer"],
  gamePlatform: "PC",
  playMode: "MultiPlayer",
  numberOfPlayers: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 30,
  },
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
      name: "¿Cómo jugar Space Station 14 en español?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Descarga SS14 desde spacestation14.com, crea una cuenta, abre el launcher y busca 'Capibara' en el navegador de servidores. Estación Capibara es un servidor 100% en español.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es Space Station 14?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Space Station 14 es un juego de roleplay multijugador donde los jugadores son tripulantes de una estación espacial. Cada jugador tiene un rol (ingeniero, médico, científico, etc.) y debe trabajar en equipo mientras enfrenta amenazas como traidores y desastres.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué son los Spesos en Estación Capibara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los Spesos son la moneda oficial de Estación Capibara. Cada tripulante recibe un salario en Spesos cada 10 minutos según su rol. Puedes usar Spesos en máquinas expendedoras y cajeros automáticos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo se juega en el servidor español de SS14 Estación Capibara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estación Capibara abre sus puertas los viernes, sábados y domingos. Hay dos tipos de rondas: rondas normales con antagonistas aleatorios y sistema económico, y rondas de evento con escenarios personalizados organizados por los admins. Los horarios se anuncian en Discord cada semana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay un servidor de SS14 en español?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, Estación Capibara es un servidor de Space Station 14 100% en español. Todo el contenido, la wiki, las guías y la comunidad son hispanohablantes. Para conectarte, descarga SS14 gratis y busca 'Capibara' en el navegador de servidores.",
      },
    },
  ],
};
