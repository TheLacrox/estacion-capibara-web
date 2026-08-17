import type { Metadata } from "next";
import { WikiIndexClient } from "../wiki/WikiIndexClient";
import { allMarinesGuideSlugs, marinesGuideTree } from "@/data/marines-guides";
import { marinesGuideSlugsToMeta } from "@/data/marines-guide-lookup";
import { collectionPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wiki de Capibara Marines | Guías de Colonial Marines en español",
  description:
    "Wiki en español de Capibara Marines: primeros pasos, escuadrones, cadena de mando, xenomorfos, armamento, procedimientos y reglas del servidor.",
  keywords: [
    "Colonial Marines español",
    "CM-SS14 español",
    "RMC14 wiki",
    "wiki Capibara Marines",
    "Space Station 14 español",
    "marines vs xenomorfos",
  ],
  alternates: { canonical: `${SITE_URL}/wiki-marines/` },
  openGraph: {
    title: "Wiki de Capibara Marines",
    description:
      "Guías en español para sobrevivir a las operaciones tácticas de Capibara Marines: escuadrones, armamento, xenomorfos y procedimientos.",
    url: `${SITE_URL}/wiki-marines/`,
    type: "website",
    locale: "es_ES",
    images: [{ url: `${SITE_URL}/branding/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function MarinesWikiPage() {
  const schema = collectionPageSchema({
    name: "Wiki de Capibara Marines",
    description:
      "Guías en español de Capibara Marines, edición comunitaria de Colonial Marines para Space Station 14.",
    url: "/wiki-marines/",
    numberOfItems: allMarinesGuideSlugs.length,
    items: allMarinesGuideSlugs.slice(0, 50).map((slug) => ({
      name: marinesGuideSlugsToMeta[slug]?.title ?? slug,
      url: `/wiki-marines/${slug}/`,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WikiIndexClient
        tree={marinesGuideTree}
        basePath="/wiki-marines"
        title="Wiki de"
        highlightedTitle="Capibara Marines"
        description="Guías extraídas del servidor y presentadas en español. Aprende los escuadrones, la cadena de mando, el armamento y cómo enfrentarte a los xenomorfos."
        hasRootPage={false}
      />
    </>
  );
}
