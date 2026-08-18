import type { MetadataRoute } from "next";
import { SITE_URL, LAST_CONTENT_UPDATE } from "@/lib/constants";
import { allGuideSlugs } from "@/data/guides";
import { allMonolithGuideSlugs } from "@/data/monolith-guides";
import { allMarinesGuideSlugs } from "@/data/marines-guides";
import { allScpGuideSlugs } from "@/data/scp-guides";
import { LIVE_SERVERS } from "@/data/servers";
import { SEO_PAGE_SLUGS } from "@/data/seo-pages";
import { MONOLITH_SEO_PAGES } from "@/data/monolith-seo-pages";
import { BLOG_POSTS } from "@/data/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiPages: MetadataRoute.Sitemap = allGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/wiki/${slug}/`,
    lastModified: new Date(LAST_CONTENT_UPDATE),
  }));

  const monolithWikiPages: MetadataRoute.Sitemap = allMonolithGuideSlugs.map(
    (slug) => ({
      url: `${SITE_URL}/wiki-monolith/${slug}/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    })
  );

  const marinesWikiPages: MetadataRoute.Sitemap = allMarinesGuideSlugs.map(
    (slug) => ({
      url: `${SITE_URL}/wiki-marines/${slug}/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    })
  );

  const scpWikiPages: MetadataRoute.Sitemap = allScpGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/wiki-scp/${slug}/`,
    lastModified: new Date(LAST_CONTENT_UPDATE),
  }));

  const serverPages: MetadataRoute.Sitemap = LIVE_SERVERS.map((server) => ({
    url: `${SITE_URL}/${server.slug}/`,
    lastModified: new Date(LAST_CONTENT_UPDATE),
  }));

  const seoPages: MetadataRoute.Sitemap = SEO_PAGE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}/`,
    lastModified: new Date(LAST_CONTENT_UPDATE),
  }));

  const monolithSeoPages: MetadataRoute.Sitemap = MONOLITH_SEO_PAGES.map(
    (page) => ({
      url: `${SITE_URL}/${page.slug}/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    })
  );

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/wiki/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/wiki-monolith/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/wiki-marines/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/wiki-scp/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/quiz/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    {
      url: `${SITE_URL}/privacidad/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    ...serverPages,
    ...seoPages,
    ...monolithSeoPages,
    ...blogPages,
    ...wikiPages,
    ...monolithWikiPages,
    ...marinesWikiPages,
    ...scpWikiPages,
  ];
}
