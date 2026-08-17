import { allScpGuideSlugs, scpGuidePages } from "@/data/scp-guides";
import { createWikiGuidePage } from "@/components/wiki/wiki-route-factory";
import { GuidePageClient } from "./GuidePageClient";

export const dynamicParams = false;

const route = createWikiGuidePage({
  guidePages: scpGuidePages,
  allSlugs: allScpGuideSlugs,
  basePath: "/wiki-scp",
  wikiName: "Wiki SCP",
  siteName: "Estación Capibara",
  titleTemplate: (title) => `${title} | Wiki Capibara SCP`,
  fallbackDescription: (title) =>
    `Guía en español sobre ${title} para Capibara SCP, servidor comunitario ambientado en la Fundación SCP dentro de Space Station 14.`,
  GuideClient: GuidePageClient,
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
