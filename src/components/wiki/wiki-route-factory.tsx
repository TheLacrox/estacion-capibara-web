import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import type { GuidePage } from "@/data/guide-types";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export interface WikiRouteConfig {
  guidePages: Record<string, GuidePage>;
  allSlugs: string[];
  basePath: string;
  /** Name used in the breadcrumb JSON-LD root item */
  wikiName: string;
  siteName: string;
  titleTemplate: (guideTitle: string) => string;
  /** Used when a page's own content is too short for a meta description */
  fallbackDescription: (guideTitle: string) => string;
  GuideClient: ComponentType<{ guide: GuidePage }>;
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function stripGuideMarkup(content: string): string {
  return content
    .replace(/\[\/?(?:color(?:=[^\]]+)?|bold|italic|head(?:=\d+)?)\]/gi, "")
    .replace(/\[textlink="([^"]+)"\s+link="[^"]+"\]/gi, "$1")
    .replace(/\[keybind="([^"]+)"\]/gi, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^#+\s*/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractGuideDescription(
  title: string,
  content: string,
  fallbackDescription: (guideTitle: string) => string
): string {
  const stripped = stripGuideMarkup(content);
  if (stripped.length < 50) return fallbackDescription(title);
  if (stripped.length <= 155) return stripped;
  return `${stripped.slice(0, 152).replace(/\s+\S*$/, "")}...`;
}

export function createWikiGuidePage(config: WikiRouteConfig) {
  const { guidePages, allSlugs, basePath, wikiName, siteName, GuideClient } =
    config;

  function generateStaticParams() {
    return allSlugs.map((slug) => ({ slug: [slug] }));
  }

  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug: segments } = await params;
    const slug = segments.join("/");
    const guide = guidePages[slug];
    if (!guide) return { title: "Guía no encontrada" };

    const title = config.titleTemplate(guide.title);
    const description = extractGuideDescription(
      guide.title,
      guide.content,
      config.fallbackDescription
    );
    const canonical = `${SITE_URL}${basePath}/${guide.slug}/`;
    const ogImage = {
      url: `${SITE_URL}/branding/og-image.png`,
      width: 1200,
      height: 630,
      alt: title,
    };

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "article",
        locale: "es_ES",
        url: canonical,
        title,
        description,
        siteName,
        images: [ogImage],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage.url],
      },
    };
  }

  async function Page({ params }: PageProps) {
    const { slug: segments } = await params;
    const slug = segments.join("/");
    const guide = guidePages[slug];
    if (!guide) notFound();

    const description = extractGuideDescription(
      guide.title,
      guide.content,
      config.fallbackDescription
    );
    const schemas = [
      articleSchema({ title: guide.title, slug: guide.slug, description, basePath }),
      breadcrumbSchema(guide.breadcrumb, { basePath, wikiName }),
    ];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        <GuideClient guide={guide} />
      </>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}
