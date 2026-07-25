import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allMonolithGuideSlugs,
  monolithGuidePages,
} from "@/data/monolith-guides";

import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { MonolithGuidePageClient } from "./GuidePageClient";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return allMonolithGuideSlugs.map((slug) => ({ slug: [slug] }));
}

function stripMarkup(content: string): string {
  return content
    .replace(/\[\/?(?:color(?:=[^\]]+)?|bold|italic|head(?:=\d+)?)\]/gi, "")
    .replace(/\[textlink="([^"]+)"\s+link="[^"]+"\]/gi, "$1")
    .replace(/\[keybind="([^"]+)"\]/gi, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^#+\s*/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function descriptionFor(title: string, content: string) {
  const text = stripMarkup(content);
  const excerpt = text.slice(0, 155).replace(/\s+\S*$/, "");
  return excerpt.length > 50
    ? `${excerpt}.`
    : `Guía en español sobre ${title} para Capibara Monolith, servidor comunitario derivado de Monolith Station.`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: segments } = await params;
  const slug = segments.join("/");
  const guide = monolithGuidePages[slug];
  if (!guide) return { title: "Guía no encontrada" };

  const description = descriptionFor(guide.title, guide.content);
  const canonical = `${SITE_URL}/wiki-monolith/${slug}/`;

  return {
    title: `${guide.title} | Wiki Capibara Monolith`,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${guide.title} | Wiki Capibara Monolith`,
      description,
      url: canonical,
      type: "article",
      locale: "es_ES",
      images: [{ url: `${SITE_URL}/branding/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function MonolithGuidePage({ params }: PageProps) {
  const { slug: segments } = await params;
  const slug = segments.join("/");
  const guide = monolithGuidePages[slug];
  if (!guide) notFound();

  const description = descriptionFor(guide.title, guide.content);
  const schemas = [
    articleSchema({
      title: guide.title,
      slug,
      description,
      basePath: "/wiki-monolith",
    }),
    breadcrumbSchema(guide.breadcrumb, {
      basePath: "/wiki-monolith",
      wikiName: "Wiki Monolith",
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <MonolithGuidePageClient guide={guide} />
    </>
  );
}
