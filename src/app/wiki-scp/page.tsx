import type { Metadata } from "next";
import { WikiIndexClient } from "../wiki/WikiIndexClient";
import { allScpGuideSlugs, scpGuideTree } from "@/data/scp-guides";
import { scpGuideSlugsToMeta } from "@/data/scp-guide-lookup";
import { collectionPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wiki de Capibara SCP | Guías de la Fundación SCP en español",
  description:
    "Wiki en español de Capibara SCP: anomalías, protocolos de contención, investigación, expediciones, sistema de miedo y reglas del servidor.",
  keywords: [
    "SCP Space Station 14",
    "SCP servidor español",
    "wiki Capibara SCP",
    "Fundación SCP juego",
    "SCP Project Fire español",
    "contención de anomalías",
  ],
  alternates: { canonical: `${SITE_URL}/wiki-scp/` },
  openGraph: {
    title: "Wiki de Capibara SCP",
    description:
      "Guías en español para sobrevivir en la instalación de Capibara SCP: anomalías, contención, investigación y protocolos de la Fundación.",
    url: `${SITE_URL}/wiki-scp/`,
    type: "website",
    locale: "es_ES",
    images: [{ url: `${SITE_URL}/branding/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function ScpWikiPage() {
  const schema = collectionPageSchema({
    name: "Wiki de Capibara SCP",
    description:
      "Guías en español de Capibara SCP, edición comunitaria de SCP: Project Fire para Space Station 14.",
    url: "/wiki-scp/",
    numberOfItems: allScpGuideSlugs.length,
    items: allScpGuideSlugs.slice(0, 50).map((slug) => ({
      name: scpGuideSlugsToMeta[slug]?.title ?? slug,
      url: `/wiki-scp/${slug}/`,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WikiIndexClient
        tree={scpGuideTree}
        basePath="/wiki-scp"
        title="Wiki de"
        highlightedTitle="Capibara SCP"
        description="Guías extraídas del servidor y presentadas en español. Descubre las anomalías, los protocolos de contención, la investigación y el sistema de miedo."
        hasRootPage={false}
      />
    </>
  );
}
