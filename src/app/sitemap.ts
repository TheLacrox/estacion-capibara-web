import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { allGuideSlugs, guidePages } from "@/data/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiPages: MetadataRoute.Sitemap = allGuideSlugs.map((slug) => {
    const guide = guidePages[slug];
    const hasChildren = guide && guide.childSlugs.length > 0;
    return {
      url: `${SITE_URL}/wiki/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: hasChildren ? 0.7 : 0.5,
    };
  });

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/wiki`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...wikiPages,
  ];
}
