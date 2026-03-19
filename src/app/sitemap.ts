import type { MetadataRoute } from "next";
import { SITE_URL, LAST_CONTENT_UPDATE } from "@/lib/constants";
import { allGuideSlugs } from "@/data/guides";
import { SEO_PAGE_SLUGS } from "@/data/seo-pages";
import { BLOG_POSTS } from "@/data/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const wikiPages: MetadataRoute.Sitemap = allGuideSlugs.map((slug) => ({
    url: `${SITE_URL}/wiki/${slug}/`,
    lastModified: new Date(LAST_CONTENT_UPDATE),
  }));

  const seoPages: MetadataRoute.Sitemap = SEO_PAGE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}/`,
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
    ...seoPages,
    ...blogPages,
    ...wikiPages,
  ];
}
