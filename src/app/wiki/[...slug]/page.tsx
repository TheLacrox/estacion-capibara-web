import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guidePages, allGuideSlugs } from "@/data/guides";
import { GuidePageClient } from "./GuidePageClient";
import { SITE_URL } from "@/lib/constants";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return allGuideSlugs.map((slug) => ({
    slug: [slug],
  }));
}

function stripMarkup(content: string): string {
  return content
    .replace(/^#+\s+/gm, "")
    .replace(/<[^>]+\/?\s*>/g, " ")
    .replace(/\[color=[^\]]*\]|\[\/color\]/g, "")
    .replace(/\[bold\]|\[\/bold\]/g, "")
    .replace(/\[italic\]|\[\/italic\]/g, "")
    .replace(/\[head=[^\]]*\]|\[\/head\]/g, "")
    .replace(/\[textlink="([^"]*)"[^\]]*\]/g, "$1")
    .replace(/\[keybind="[^"]*"\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractDescription(content: string): string {
  const stripped = stripMarkup(content);
  if (stripped.length <= 155) return stripped;
  return stripped.slice(0, 152) + "...";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guideSlug = slug.join("/");
  const guide = guidePages[guideSlug];

  if (!guide) {
    return { title: "Guía no encontrada - Wiki" };
  }

  const description = extractDescription(guide.content);
  const url = `${SITE_URL}/wiki/${guide.slug}`;

  return {
    title: `${guide.title} - Wiki Estación Capibara`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url,
      title: `${guide.title} - Wiki Estación Capibara`,
      description,
      siteName: "Estación Capibara",
      images: [
        {
          url: "/branding/og-image.png",
          width: 1200,
          height: 630,
          alt: `${guide.title} - Wiki Estación Capibara`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} - Wiki Estación Capibara`,
      description,
      images: ["/branding/og-image.png"],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guideSlug = slug.join("/");
  const guide = guidePages[guideSlug];

  if (!guide) {
    notFound();
  }

  const description = extractDescription(guide.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(guide.breadcrumb)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: guide.title,
              slug: guide.slug,
              description,
            })
          ),
        }}
      />
      <GuidePageClient guide={guide} />
    </>
  );
}
