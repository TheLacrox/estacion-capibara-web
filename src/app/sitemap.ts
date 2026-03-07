import type { MetadataRoute } from "next";
import { SITE_URL, LAST_CONTENT_UPDATE } from "@/lib/constants";
import { allGuideSlugs } from "@/data/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiPages: MetadataRoute.Sitemap = allGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/wiki/${slug}`,
    lastModified: new Date(LAST_CONTENT_UPDATE),
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/wiki`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    ...wikiPages,
  ];
}
