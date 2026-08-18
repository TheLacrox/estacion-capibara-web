import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ChevronRight } from "lucide-react";
import type {
  ServerSeoGamesBlock,
  ServerSeoPageData,
} from "@/data/server-seo-types";
import { DISCORD_URL, SITE_URL } from "@/lib/constants";
import {
  articleSchema,
  faqSchema,
  itemListSchema,
  seoBreadcrumbSchema,
} from "@/lib/schema";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { FaqSection } from "@/components/seo/FaqSection";

export type SeoServerKey = "monolith" | "marines" | "scp";

interface ServerSeoAccent {
  text: string;
  border: string;
  bg: string;
  hoverBorder: string;
}

interface ServerSeoConfig {
  accent: ServerSeoAccent;
  logo: string;
  logoAlt: string;
  brandLine: string;
  guidesHeading: string;
  wikiRoot: string;
  wikiCtaLabel: string;
  ctaHeading: string;
  ctaBody: string;
  ogImage: string;
}

const SERVER_SEO_CONFIGS: Record<SeoServerKey, ServerSeoConfig> = {
  monolith: {
    accent: {
      text: "text-neon-cyan",
      border: "border-neon-cyan/25",
      bg: "bg-neon-cyan/5",
      hoverBorder: "hover:border-neon-cyan/40",
    },
    logo: "/branding/monolith-logo.svg",
    logoAlt: "Logo de Capibara Monolith",
    brandLine:
      "Contenido basado en las guías y recursos del servidor comunitario Capibara Monolith.",
    guidesHeading: "Guías de Capibara Monolith",
    wikiRoot: "/wiki-monolith/",
    wikiCtaLabel: "Abrir Wiki Monolith",
    ctaHeading: "Explora el Sector Colossus",
    ctaBody:
      "Consulta trabajos, reglas y sistemas antes de embarcarte. No publicamos una dirección de conexión sin verificar: busca los anuncios actuales de la comunidad en Discord.",
    ogImage: "/branding/og-monolith.png",
  },
  marines: {
    accent: {
      text: "text-marine-green",
      border: "border-marine-green/25",
      bg: "bg-marine-green/5",
      hoverBorder: "hover:border-marine-green/40",
    },
    logo: "/branding/marines-logo.png",
    logoAlt: "Logo de Capibara Marines",
    brandLine:
      "Contenido basado en las guías y recursos del servidor comunitario Capibara Marines (RMC14 en español).",
    guidesHeading: "Guías de Capibara Marines",
    wikiRoot: "/wiki-marines/",
    wikiCtaLabel: "Abrir Wiki Marines",
    ctaHeading: "Alístate en Capibara Marines",
    ctaBody:
      "Repasa roles, escuadras y castas antes de tu primer despliegue. No publicamos una dirección de conexión sin verificar: busca los anuncios actuales de la comunidad en Discord.",
    ogImage: "/branding/og-marines.png",
  },
  scp: {
    accent: {
      text: "text-scp-purple",
      border: "border-scp-purple/25",
      bg: "bg-scp-purple/5",
      hoverBorder: "hover:border-scp-purple/40",
    },
    logo: "/branding/logo.svg",
    logoAlt: "Logo de Capibara SCP",
    brandLine:
      "Contenido basado en las guías y recursos del servidor comunitario Capibara SCP en español.",
    guidesHeading: "Guías de Capibara SCP",
    wikiRoot: "/wiki-scp/",
    wikiCtaLabel: "Abrir Wiki SCP",
    ctaHeading: "Accede al Sitio de la Fundación",
    ctaBody:
      "Estudia anomalías, roles y procedimientos antes de tu primer turno. No publicamos una dirección de conexión sin verificar: busca los anuncios actuales de la comunidad en Discord.",
    ogImage: "/branding/og-scp.png",
  },
};

interface ServerSeoPageProps {
  page: ServerSeoPageData;
  server: SeoServerKey;
  jsonLd: Record<string, unknown>[];
}

export function createServerSeoMetadata(
  page: ServerSeoPageData,
  server: SeoServerKey
): Metadata {
  const config = SERVER_SEO_CONFIGS[server];
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
      images: [{ url: config.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [config.ogImage],
    },
  };
}

export function createServerSeoSchemas(page: ServerSeoPageData) {
  const url = `${SITE_URL}/${page.slug}/`;
  const schemas: Record<string, unknown>[] = [
    articleSchema({
      title: page.title,
      slug: page.slug,
      description: page.metaDescription,
      basePath: "",
    }),
    seoBreadcrumbSchema([{ name: page.title, url }]),
    faqSchema(page.faqs),
  ];
  if (page.games) {
    schemas.push(
      itemListSchema(
        page.games.entries.map((g, i) => ({ name: g.name, position: i + 1 }))
      )
    );
  }
  return schemas;
}

function GamesBlock({
  games,
  accent,
}: {
  games: ServerSeoGamesBlock;
  accent: ServerSeoAccent;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 font-heading text-2xl font-bold text-text-primary">
        {games.heading}
      </h2>
      <p className="mb-6 font-mono text-sm leading-relaxed text-text-muted">
        {games.intro}
      </p>
      <div className="space-y-6">
        {games.entries.map((game) => (
          <div
            key={game.name}
            className={`rounded-sm border p-5 ${
              game.highlighted
                ? `${accent.border} ${accent.bg}`
                : "border-grid-line bg-hull-panel"
            }`}
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3
                className={`font-heading text-sm font-bold ${
                  game.highlighted ? accent.text : "text-text-primary"
                }`}
              >
                {game.name}
              </h3>
              <span
                className={`shrink-0 rounded-sm border px-2 py-0.5 font-mono text-xs ${
                  game.free
                    ? "border-green-400/30 text-green-400"
                    : "border-text-muted/30 text-text-muted"
                }`}
              >
                {game.free ? "Gratis" : "De pago"}
              </span>
            </div>
            <p className="font-mono text-xs leading-relaxed text-text-muted">
              {game.description}
            </p>
          </div>
        ))}
      </div>
      <div className="-mx-4 mt-8 overflow-x-auto px-4">
        <table className="w-full border border-grid-line text-sm">
          <thead>
            <tr className="bg-hull-panel">
              <th className="border-b border-grid-line px-3 py-3 text-left font-heading text-text-primary">
                Juego
              </th>
              <th className="border-b border-grid-line px-3 py-3 text-center font-heading text-text-primary">
                Gratis
              </th>
              {games.columns.map((column) => (
                <th
                  key={column.key}
                  className="border-b border-grid-line px-3 py-3 text-center font-heading text-text-primary"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {games.entries.map((game) => (
              <tr
                key={game.name}
                className={
                  game.highlighted ? `${accent.bg} border-l-2 ${accent.border}` : ""
                }
              >
                <td
                  className={`border-b border-grid-line px-3 py-3 font-mono ${
                    game.highlighted
                      ? `${accent.text} font-bold`
                      : "text-text-primary"
                  }`}
                >
                  {game.name}
                </td>
                <td className="border-b border-grid-line px-3 py-3 text-center">
                  {game.free ? (
                    <span className="text-green-400" aria-label="Sí">
                      &#10003;
                    </span>
                  ) : (
                    <span className="text-red-400/60" aria-label="No">
                      &#10007;
                    </span>
                  )}
                </td>
                {games.columns.map((column) => (
                  <td
                    key={column.key}
                    className="border-b border-grid-line px-3 py-3 text-center"
                  >
                    {game.features[column.key] ? (
                      <span className="text-green-400" aria-label="Sí">
                        &#10003;
                      </span>
                    ) : (
                      <span className="text-red-400/60" aria-label="No">
                        &#10007;
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ServerSeoPage({ page, server, jsonLd }: ServerSeoPageProps) {
  const config = SERVER_SEO_CONFIGS[server];
  const { accent } = config;
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        title={page.title}
        subtitle={page.subtitle}
        breadcrumbs={[{ label: page.title, href: `/${page.slug}/` }]}
      />

      <div
        className={`mb-10 flex items-center gap-4 rounded-sm border p-4 ${accent.border} ${accent.bg}`}
      >
        <img
          src={config.logo}
          alt={config.logoAlt}
          className="h-14 w-14 shrink-0 object-contain"
          width={56}
          height={56}
        />
        <div>
          <p className={`font-mono text-xs tracking-[0.2em] ${accent.text}`}>
            {page.eyebrow}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">
            {config.brandLine}
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
                    className={`mt-0.5 shrink-0 ${accent.text}`}
                  />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {page.games && <GamesBlock games={page.games} accent={accent} />}

      <section className="my-12">
        <h2 className="mb-6 font-heading text-2xl font-bold text-text-primary">
          {config.guidesHeading}
        </h2>
        <div className="flex flex-wrap gap-3">
          {page.wikiLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2.5 font-mono text-xs transition-colors hover:border-hazard-yellow/50 hover:text-hazard-yellow ${accent.border} ${accent.bg} ${accent.text}`}
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
              className={`rounded-sm border border-grid-line bg-hull-panel p-5 transition-colors ${accent.hoverBorder}`}
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
          {config.ctaHeading}
        </h2>
        <p className="mx-auto mb-7 max-w-2xl font-mono text-sm leading-relaxed text-text-muted">
          {config.ctaBody}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={config.wikiRoot}
            className="rounded-sm bg-hazard-yellow px-5 py-3 font-heading text-sm font-bold text-space-void transition-colors hover:bg-hazard-orange"
          >
            {config.wikiCtaLabel}
          </Link>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-sm border px-5 py-3 font-heading text-sm font-bold transition-colors hover:border-hazard-yellow hover:text-hazard-yellow ${accent.border} ${accent.text}`}
          >
            Consultar Discord
          </a>
        </div>
      </section>
    </SeoPageLayout>
  );
}
