import { allGuideSlugs, guidePages } from "@/data/guides";
import { createWikiGuidePage } from "@/components/wiki/wiki-route-factory";
import { GuidePageClient } from "./GuidePageClient";

export const dynamicParams = false;

const route = createWikiGuidePage({
  guidePages,
  allSlugs: allGuideSlugs,
  basePath: "/wiki",
  wikiName: "Wiki",
  siteName: "Estación Capibara",
  titleTemplate: (title) => `${title} - Wiki Estación Capibara`,
  fallbackDescription: (title) =>
    `Guía en español sobre ${title} para Estación Capibara, servidor comunitario de Space Station 14.`,
  GuideClient: GuidePageClient,
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
