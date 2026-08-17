import {
  allMonolithGuideSlugs,
  monolithGuidePages,
} from "@/data/monolith-guides";
import { createWikiGuidePage } from "@/components/wiki/wiki-route-factory";
import { GuidePageClient } from "./GuidePageClient";

export const dynamicParams = false;

const route = createWikiGuidePage({
  guidePages: monolithGuidePages,
  allSlugs: allMonolithGuideSlugs,
  basePath: "/wiki-monolith",
  wikiName: "Wiki Monolith",
  siteName: "Estación Capibara",
  titleTemplate: (title) => `${title} | Wiki Capibara Monolith`,
  fallbackDescription: (title) =>
    `Guía en español sobre ${title} para Capibara Monolith, servidor comunitario derivado de Monolith Station.`,
  GuideClient: GuidePageClient,
});

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
