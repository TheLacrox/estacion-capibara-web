import type { Metadata } from "next";
import { SITE_URL, DISCORD_URL } from "./constants";
import type { ServerDescriptor } from "@/data/servers";

export function serverPageMetadata(server: ServerDescriptor): Metadata {
  const title = `${server.name} | Servidor Español de SS14`;
  const description = `${server.description} ${server.lineage}. Busca "${server.searchTerm}" en el launcher de Space Station 14.`;
  const canonical = `${SITE_URL}/${server.slug}/`;
  const ogImage = {
    url: `${SITE_URL}/branding/og-${server.slug}.png`,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: canonical,
      title,
      description,
      siteName: "Estación Capibara",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

export const siteMetadata: Metadata = {
  title: "Estación Capibara | Servidor Español de SS14 | Space Station 14 en Español",
  description:
    "Servidor español de SS14 con comunidad hispanohablante activa. Jugamos viernes, sábados y domingos con rondas normales y eventos especiales. 30+ roles, economía con Spesos, wiki en español. ¡Descarga gratis y busca Capibara!",
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
  name: "Estación Capibara - Servidores Españoles de SS14",
  alternateName: ["Estación Capibara", "Servidor Español de SS14", "SS14 en Español"],
  description:
    "Comunidad española de Space Station 14 con cuatro servidores: Estación Capibara (estación clásica), Capibara Marines (Colonial Marines), Capibara SCP (Fundación SCP) y Capibara Monolith (naves y frontera). Jugamos viernes, sábados y domingos, totalmente en español.",
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

