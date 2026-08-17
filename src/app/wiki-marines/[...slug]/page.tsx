import { allMarinesGuideSlugs, marinesGuidePages } from "@/data/marines-guides";
import { createWikiGuidePage } from "@/components/wiki/wiki-route-factory";
import { GuidePageClient } from "./GuidePageClient";

export const dynamicParams = false;

const route = createWikiGuidePage({
  guidePages: marinesGuidePages,
  allSlugs: allMarinesGuideSlugs,
  basePath: "/wiki-marines",
  wikiName: "Wiki Marines",
  siteName: "Estación Capibara",
  titleTemplate: (title) => `${title} | Wiki Capibara Marines`,
  fallbackDescription: (title) =>
    `Guía en español sobre ${title} para Capibara Marines, servidor comunitario de Colonial Marines en Space Station 14.`,
  GuideClient: GuidePageClient,
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
