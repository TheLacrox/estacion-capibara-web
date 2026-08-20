import type { MetadataRoute } from "next";
import { SITE_URL, LAST_CONTENT_UPDATE } from "@/lib/constants";
import { allGuideSlugs } from "@/data/guides";
import { allMonolithGuideSlugs } from "@/data/monolith-guides";
import { allMarinesGuideSlugs } from "@/data/marines-guides";
import { allScpGuideSlugs } from "@/data/scp-guides";
import { LIVE_SERVERS } from "@/data/servers";
import { SEO_PAGE_SLUGS } from "@/data/seo-pages";
import { MONOLITH_SEO_PAGES } from "@/data/monolith-seo-pages";
import { MARINES_SEO_PAGES } from "@/data/marines-seo-pages";
import { SCP_SEO_PAGES } from "@/data/scp-seo-pages";
import { BLOG_POSTS } from "@/data/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Wiki entries carry no lastmod: guide content has no real per-page date
  // yet, and Google only honors lastmod when it is verifiably accurate —
  // accurate-or-absent beats a sitewide constant.
  const wikiPages: MetadataRoute.Sitemap = allGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/wiki/${slug}/`,
  }));

  const monolithWikiPages: MetadataRoute.Sitemap = allMonolithGuideSlugs.map(
    (slug) => ({
      url: `${SITE_URL}/wiki-monolith/${slug}/`,
    })
  );

  const marinesWikiPages: MetadataRoute.Sitemap = allMarinesGuideSlugs.map(
    (slug) => ({
      url: `${SITE_URL}/wiki-marines/${slug}/`,
    })
  );

  const scpWikiPages: MetadataRoute.Sitemap = allScpGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/wiki-scp/${slug}/`,
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

  const marinesSeoPages: MetadataRoute.Sitemap = MARINES_SEO_PAGES.map(
    (page) => ({
      url: `${SITE_URL}/${page.slug}/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    })
  );

  const scpSeoPages: MetadataRoute.Sitemap = SCP_SEO_PAGES.map((page) => ({
    url: `${SITE_URL}/${page.slug}/`,
    lastModified: new Date(LAST_CONTENT_UPDATE),
  }));

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
    },
    {
      url: `${SITE_URL}/wiki-monolith/`,
    },
    {
      url: `${SITE_URL}/wiki-marines/`,
    },
    {
      url: `${SITE_URL}/wiki-scp/`,
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
    {
      url: `${SITE_URL}/sobre-nosotros/`,
      lastModified: new Date(LAST_CONTENT_UPDATE),
    },
    ...serverPages,
    ...seoPages,
    ...monolithSeoPages,
    ...marinesSeoPages,
    ...scpSeoPages,
    ...blogPages,
    ...wikiPages,
    ...monolithWikiPages,
    ...marinesWikiPages,
    ...scpWikiPages,
  ];
}
