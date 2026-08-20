import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
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
  // Only blog posts carry lastmod (they have real per-post dates). Everything
  // else omits it: Google only honors lastmod when it is verifiably accurate,
  // and a sitewide build-date constant reads as "date of last deploy" —
  // accurate-or-absent beats faking freshness.
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
  }));

  const seoPages: MetadataRoute.Sitemap = SEO_PAGE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}/`,
  }));

  const monolithSeoPages: MetadataRoute.Sitemap = MONOLITH_SEO_PAGES.map(
    (page) => ({
      url: `${SITE_URL}/${page.slug}/`,
    })
  );

  const marinesSeoPages: MetadataRoute.Sitemap = MARINES_SEO_PAGES.map(
    (page) => ({
      url: `${SITE_URL}/${page.slug}/`,
    })
  );

  const scpSeoPages: MetadataRoute.Sitemap = SCP_SEO_PAGES.map((page) => ({
    url: `${SITE_URL}/${page.slug}/`,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }));

  return [
    {
      url: `${SITE_URL}/`,
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
    },
    {
      url: `${SITE_URL}/quiz/`,
    },
    {
      url: `${SITE_URL}/privacidad/`,
    },
    {
      url: `${SITE_URL}/sobre-nosotros/`,
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
