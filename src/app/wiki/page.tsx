import type { Metadata } from "next";
import { guideTree } from "@/data/guides";
import { WikiIndexClient } from "./WikiIndexClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wiki - Estación Capibara | Guías de Space Station 14 en Español",
  description:
    "Guías completas para Space Station 14 en español. Departamentos, trabajos, antagonistas, supervivencia y más. Aprende a jugar SS14 con tutoriales paso a paso.",
  alternates: {
    canonical: `${SITE_URL}/wiki`,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/wiki`,
    title: "Wiki - Estación Capibara | Guías de Space Station 14 en Español",
    description:
      "Guías completas para Space Station 14 en español. Departamentos, trabajos, antagonistas, supervivencia y más.",
    siteName: "Estación Capibara",
    images: [
      {
        url: "/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wiki Estación Capibara - Guías de Space Station 14",
      },
    ],
  },
};

export default function WikiPage() {
  return <WikiIndexClient tree={guideTree} />;
}
