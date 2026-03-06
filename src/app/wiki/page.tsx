import type { Metadata } from "next";
import { guideTree } from "@/data/guides";
import { WikiIndexClient } from "./WikiIndexClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wiki - Estacion Capibara | Guias de Space Station 14",
  description:
    "Guias completas para Space Station 14 en espanol. Departamentos, trabajos, antagonistas, supervivencia y mas.",
  alternates: {
    canonical: `${SITE_URL}/wiki`,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/wiki`,
    title: "Wiki - Estacion Capibara | Guias de Space Station 14",
    description:
      "Guias completas para Space Station 14 en espanol. Departamentos, trabajos, antagonistas, supervivencia y mas.",
    siteName: "Estacion Capibara",
    images: [
      {
        url: "/branding/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wiki Estacion Capibara - Guias de Space Station 14",
      },
    ],
  },
};

export default function WikiPage() {
  return <WikiIndexClient tree={guideTree} />;
}
