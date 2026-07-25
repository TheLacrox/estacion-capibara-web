import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ChevronRight } from "lucide-react";
import type { MonolithSeoPageData } from "@/data/monolith-seo-pages";
import { DISCORD_URL, SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { FaqSection } from "@/components/seo/FaqSection";

interface MonolithSeoPageProps {
  page: MonolithSeoPageData;
  jsonLd: Record<string, unknown>[];
}

export function createMonolithSeoMetadata(
  page: MonolithSeoPageData
): Metadata {
  const url = `${SITE_URL}/${page.slug}/`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.searchQueries,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      siteName: "Estación Capibara",
      images: [{ url: "/branding/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/branding/og-image.png"],
    },
  };
}

export function createMonolithSeoSchemas(page: MonolithSeoPageData) {
  const url = `${SITE_URL}/${page.slug}/`;
  return [
    articleSchema({
      title: page.title,
      slug: page.slug,
      description: page.metaDescription,
      basePath: "",
    }),
    seoBreadcrumbSchema([{ name: page.title, url }]),
    faqSchema(page.faqs),
  ];
}

export function MonolithSeoPage({ page, jsonLd }: MonolithSeoPageProps) {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        title={page.title}
        subtitle={page.subtitle}
        breadcrumbs={[{ label: page.title, href: `/${page.slug}/` }]}
      />

      <div className="mb-10 flex items-center gap-4 rounded-sm border border-neon-cyan/20 bg-neon-cyan/5 p-4">
        <img
          src="/branding/monolith-logo.svg"
          alt="Logo de Capibara Monolith"
          className="h-14 w-14 shrink-0 object-contain"
          width={56}
          height={56}
        />
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-neon-cyan">
            {page.eyebrow}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">
            Contenido basado en las guías y recursos del servidor comunitario
            Capibara Monolith.
          </p>
        </div>
      </div>

      {page.sections.map((section) => (
        <section key={section.title} className="mb-12">
          <h2 className="mb-5 font-heading text-2xl font-bold text-text-primary">
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-mono text-sm leading-relaxed text-text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
          {section.points && (
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {section.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-sm border border-grid-line bg-hull-panel p-4 font-mono text-sm text-text-primary"
                >
                  <ChevronRight
                    size={16}
                    className="mt-0.5 shrink-0 text-neon-cyan"
                  />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="my-12">
        <h2 className="mb-6 font-heading text-2xl font-bold text-text-primary">
          Guías de Capibara Monolith
        </h2>
        <div className="flex flex-wrap gap-3">
          {page.wikiLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-sm border border-neon-cyan/25 bg-neon-cyan/5 px-4 py-2.5 font-mono text-xs text-neon-cyan transition-colors hover:border-hazard-yellow/50 hover:text-hazard-yellow"
            >
              <BookOpen size={14} />
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <FaqSection faqs={page.faqs} />

      <section className="my-12">
        <h2 className="mb-6 font-heading text-2xl font-bold text-text-primary">
          Sigue explorando
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {page.relatedPages.map((related) => (
            <Link
              key={related.href}
              href={related.href}
              className="rounded-sm border border-grid-line bg-hull-panel p-5 transition-colors hover:border-neon-cyan/40"
            >
              <span className="font-heading text-sm font-bold text-text-primary">
                {related.label}
              </span>
              <span className="mt-2 block font-mono text-xs leading-relaxed text-text-muted">
                {related.description}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="my-16 rounded-sm border border-grid-line bg-hull-panel p-8 text-center">
        <h2 className="mb-3 font-heading text-2xl font-bold text-text-primary">
          Explora el Sector Colossus
        </h2>
        <p className="mx-auto mb-7 max-w-2xl font-mono text-sm leading-relaxed text-text-muted">
          Consulta trabajos, reglas y sistemas antes de embarcarte. No publicamos
          una dirección de conexión sin verificar: busca los anuncios actuales de
          la comunidad en Discord.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/wiki-monolith/"
            className="rounded-sm bg-hazard-yellow px-5 py-3 font-heading text-sm font-bold text-space-void transition-colors hover:bg-hazard-orange"
          >
            Abrir Wiki Monolith
          </Link>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-neon-cyan/30 px-5 py-3 font-heading text-sm font-bold text-neon-cyan transition-colors hover:border-hazard-yellow hover:text-hazard-yellow"
          >
            Consultar Discord
          </a>
        </div>
      </section>
    </SeoPageLayout>
  );
}
