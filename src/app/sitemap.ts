import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { allGuideSlugs } from "@/data/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiPages: MetadataRoute.Sitemap = allGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/wiki/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

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
