import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, SURVIVAL_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-de-supervivencia-multijugador")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${SITE_URL}/${page.slug}/` },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `${SITE_URL}/${page.slug}/`,
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

const jsonLd = [
  faqSchema(page.faqs),
  seoBreadcrumbSchema([{ name: page.title, url: `${SITE_URL}/${page.slug}/` }]),
  itemListSchema(
    SURVIVAL_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosDeSupervivenciaMultijugadorPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        title={page.title}
        subtitle={page.subtitle}
        breadcrumbs={[{ label: page.title, href: `/${page.slug}/` }]}
      />

      {/* Intro */}
      <section className="mb-12">
        <p className="text-text-primary/90 font-mono text-sm leading-relaxed mb-4">
          Los juegos de supervivencia multijugador combinan la tensión de
          sobrevivir con la impredecibilidad de otros jugadores. Ya sea
          cooperando contra amenazas o compitiendo por recursos, el
          multijugador transforma la experiencia survival.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          El género ha evolucionado mucho: desde el PvP puro de Rust hasta
          la cooperación profunda de Barotrauma, pasando por la supervivencia
          social de Space Station 14 donde{" "}
          <strong className="text-text-primary">el mayor peligro son los otros jugadores</strong>.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Hemos seleccionado los mejores juegos survival multijugador,
          cubriendo desde opciones gratuitas hasta los títulos más completos
          del género.
        </p>
      </section>

      {/* Game cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos de supervivencia multijugador
        </h2>
        <div className="space-y-6">
          {SURVIVAL_GAMES.map((game) => (
            <div
              key={game.name}
              className={`border rounded-sm p-5 ${
                game.highlighted
                  ? "border-hazard-yellow/50 bg-hazard-yellow/5"
                  : "border-grid-line bg-hull-panel"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3
                  className={`font-heading font-bold text-sm ${
                    game.highlighted ? "text-hazard-yellow" : "text-text-primary"
                  }`}
                >
                  {game.name}
                </h3>
                <span
                  className={`shrink-0 text-xs font-mono px-2 py-0.5 rounded-sm border ${
                    game.free
                      ? "border-green-400/30 text-green-400"
                      : "border-text-muted/30 text-text-muted"
                  }`}
                >
                  {game.free ? "Gratis" : "De pago"}
                </span>
              </div>
              <p className="text-text-muted font-mono text-xs leading-relaxed">
                {game.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GameComparisonTable
        games={SURVIVAL_GAMES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "roleplay", label: "Roleplay" },
          { key: "sandbox", label: "Base Building" },
          { key: "socialDeduction", label: "Traidores" },
        ]}
      />

      <FeatureHighlight
        title="¿Por qué SS14 es un survival diferente?"
        features={[
          {
            icon: "roles",
            title: "Supervivencia Social",
            description:
              "En SS14 no sobrevives recolectando piedras — sobrevives necesitando a otros. El médico te cura, el ingeniero mantiene el aire, el cocinero te alimenta.",
          },
          {
            icon: "chaos",
            title: "Amenazas Impredecibles",
            description:
              "No son solo zombies o monstruos. Los traidores, desastres de ingeniería, brotes químicos y despresurización crean supervivencia caótica y única.",
          },
          {
            icon: "free",
            title: "El Único Survival Gratis de la Lista",
            description:
              "La mayoría de survival cuestan dinero. SS14 es completamente gratis, sin microtransacciones, sin early access eterno.",
          },
        ]}
      />

      <FaqSection faqs={page.faqs} />
      <InternalLinkGrid
        currentSlug={page.slug}
        wikiLinks={page.relatedWikiLinks}
        relatedSlugs={page.relatedPages}
      />
      <CtaBlock />
    </SeoPageLayout>
  );
}
