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
  // "space station 14" is the account's biggest impression pool (GSC: pos ~9,
  // 671 impr/28d, 0 clicks) — the game name leads the title and the
  // description answers that query directly to earn the click.
  title: "Space Station 14 en Español: 4 Servidores | Estación Capibara",
  description:
    "Juega Space Station 14 en español: comunidad hispana con 4 servidores propios (estación clásica, Colonial Marines, SCP y naves), wiki completa y rondas cada fin de semana. Gratis, sin registro: busca 'Capibara' en el launcher.",
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
    title: "Space Station 14 en Español: 4 Servidores | Estación Capibara",
    description:
      "Comunidad hispana de Space Station 14 con 4 servidores propios, wiki en español y rondas de viernes a domingo. Gratis: busca 'Capibara' en el launcher.",
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

