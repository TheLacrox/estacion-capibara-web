import type { Metadata } from "next";
import { SITE_URL, DISCORD_URL } from "./constants";

export const siteMetadata: Metadata = {
  title: "Estación Capibara | Servidor de Space Station 14 en Español",
  description:
    "Únete a Estación Capibara, el mejor servidor de Space Station 14 en español. Disfruta de una comunidad hispanohablante activa, 30+ roles, sistema de economía con Spesos y guías paso a paso. ¡Juega gratis!",
  keywords: [
    "space station 14",
    "ss14",
    "ss14 español",
    "space station 14 español",
    "cómo jugar space station 14",
    "guía space station 14 español",
    "servidor hispano ss14",
    "comunidad española ss14",
    "descargar ss14",
    "cómo jugar ss14",
    "servidor ss14 español",
    "ss14 en español",
    "roleplay espacial",
    "estación capibara",
    "ss14 latino",
    "ss14 latinoamérica",
    "space station 14 servidor",
    "juegos de roleplay",
    "ss14 server español",
    "ss14 spesos",
    "ss14 economía",
    "ss14 antagonistas",
    "ss14 departamentos",
    "ss14 wiki español",
    "space station 14 guía español",
    "ss14 cómo empezar",
    "ss14 roles y trabajos",
    "ss14 descargar gratis",
    "ss14 comunidad hispana",
    "ss14 guía para principiantes",
    "space station 14 tutorial español",
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
    title: "Estación Capibara | Servidor de Space Station 14 en Español",
    description:
      "El mejor servidor de SS14 en español. Economía con Spesos, objetivos de estación, 30+ roles y comunidad hispanohablante activa.",
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
    title: "Estación Capibara | SS14 en Español",
    description:
      "Únete al mejor servidor de Space Station 14 en español. Roleplay, economía, 30+ roles.",
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
  name: "Estación Capibara - Space Station 14",
  description:
    "Servidor de Space Station 14 en español con sistema económico, objetivos de estación y comunidad hispanohablante.",
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
  ],
};
