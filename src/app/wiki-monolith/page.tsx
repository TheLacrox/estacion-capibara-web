import type { Metadata } from "next";
import { WikiIndexClient } from "../wiki/WikiIndexClient";
import {
  allMonolithGuideSlugs,
  monolithGuideTree,
} from "@/data/monolith-guides";
import { monolithGuideSlugsToMeta } from "@/data/monolith-guide-lookup";
import { collectionPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wiki de Capibara Monolith | Guías de Monolith Station en español",
  description:
    "Wiki en español de Capibara Monolith: primeros pasos, naves, expediciones, economía persistente, facciones, artillería, trabajos y reglas.",
  keywords: [
    "Monolith Station español",
    "wiki Monolith Station",
    "Capibara Monolith",
    "Space Station 14 español",
    "guía Frontier Station 14",
  ],
  alternates: { canonical: `${SITE_URL}/wiki-monolith/` },
  openGraph: {
    title: "Wiki de Capibara Monolith",
    description:
      "Guías en español para navegar el Sector Colossus, pilotar naves, comerciar, elegir facción y sobrevivir en Capibara Monolith.",
    url: `${SITE_URL}/wiki-monolith/`,
    type: "website",
    locale: "es_ES",
    images: [{ url: `${SITE_URL}/branding/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function MonolithWikiPage() {
  const schema = collectionPageSchema({
    name: "Wiki de Capibara Monolith",
    description:
      "Guías en español de Capibara Monolith, edición comunitaria de Monolith Station.",
    url: "/wiki-monolith/",
    numberOfItems: allMonolithGuideSlugs.length,
    items: allMonolithGuideSlugs.slice(0, 50).map((slug) => ({
      name: monolithGuideSlugsToMeta[slug]?.title ?? slug,
      url: `/wiki-monolith/${slug}/`,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WikiIndexClient
        tree={monolithGuideTree}
        basePath="/wiki-monolith"
        title="Wiki de"
        highlightedTitle="Capibara Monolith"
        description="Guías extraídas del servidor y presentadas en español. Explora los sistemas de frontera, la economía persistente, las facciones y el combate entre naves."
        hasRootPage={false}
      />
    </>
  );
}
