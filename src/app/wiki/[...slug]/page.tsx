import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guidePages, allGuideSlugs } from "@/data/guides";
import { GuidePageClient } from "./GuidePageClient";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return allGuideSlugs.map((slug) => ({
    slug: [slug],
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guideSlug = slug.join("/");
  const guide = guidePages[guideSlug];

  if (!guide) {
    return { title: "Guia no encontrada - Wiki" };
  }

  return {
    title: `${guide.title} - Wiki Estacion Capibara`,
    description: `Guia de ${guide.title} para Space Station 14 en espanol.`,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guideSlug = slug.join("/");
  const guide = guidePages[guideSlug];

  if (!guide) {
    notFound();
  }

  return <GuidePageClient guide={guide} />;
}
