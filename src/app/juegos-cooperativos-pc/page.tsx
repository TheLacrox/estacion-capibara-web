import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, COOPERATIVE_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-cooperativos-pc")!;

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
  seoBreadcrumbSchema([{ name: page.title, url: `${SITE_URL}/${page.slug}/` }]),
  itemListSchema(
    COOPERATIVE_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosCooperativosPcPage() {
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
          Los juegos cooperativos son la mejor forma de fortalecer amistades
          (o destruirlas). Hay algo especial en superar un desafío junto a
          otros jugadores que ningún juego competitivo puede replicar.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Pero no todos los cooperativos son iguales. Algunos te piden que
          dispares juntos, otros que construyan juntos, y los más
          interesantes te piden que <strong className="text-text-primary">confíen los unos en los otros</strong>{" "}
          mientras la situación se descontrola.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Hemos seleccionado los mejores juegos cooperativos para PC,
          priorizando aquellos donde la cooperación es mecánica central y no
          solo &quot;jugar al lado de alguien&quot;.
        </p>
      </section>

      {/* Game cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos cooperativos para PC
        </h2>
        <div className="space-y-6">
          {COOPERATIVE_GAMES.map((game) => (
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
        games={COOPERATIVE_GAMES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "roleplay", label: "Roleplay" },
          { key: "sandbox", label: "Sandbox" },
          { key: "socialDeduction", label: "Social" },
        ]}
      />

      <FeatureHighlight
        title="¿Por qué SS14 es el cooperativo más único?"
        features={[
          {
            icon: "roles",
            title: "Cooperación con Consecuencias",
            description:
              "En SS14 tu rol importa. Si el ingeniero no repara el motor, todos mueren. Si el médico no te atiende, no hay respawn. Cada jugador es esencial.",
          },
          {
            icon: "chaos",
            title: "Caos Emergente",
            description:
              "La cooperación se pone a prueba cuando un traidor sabotea la estación, un brote químico se expande o la gravedad deja de funcionar.",
          },
          {
            icon: "free",
            title: "Gratis para Todo el Grupo",
            description:
              "No necesitas convencer a tus amigos de comprar un juego. SS14 es gratis para todos, sin excepciones ni ediciones limitadas.",
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
