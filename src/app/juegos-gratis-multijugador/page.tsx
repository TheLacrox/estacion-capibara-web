import type { Metadata } from "next";
import { LAST_CONTENT_UPDATE, SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, FREE_MULTIPLAYER_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-gratis-multijugador")!;

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
  articleSchema({
    title: page.title,
    slug: page.slug,
    description: page.metaDescription,
    datePublished: page.datePublished,
    dateModified: LAST_CONTENT_UPDATE,
    basePath: "",
  }),
  faqSchema(page.faqs),
  seoBreadcrumbSchema([{ name: page.title, url: `${SITE_URL}/${page.slug}/` }]),
  itemListSchema(
    FREE_MULTIPLAYER_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosGratisMultijugadorPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        title={page.title}
        subtitle={page.subtitle}
        breadcrumbs={[{ label: page.title, href: `/${page.slug}/` }]}
      />

      {page.quickAnswer && <QuickAnswer>{page.quickAnswer}</QuickAnswer>}

      {/* Intro */}
      <section className="mb-12">
        <p className="text-text-primary/90 font-mono text-sm leading-relaxed mb-4">
          No necesitas gastar dinero para disfrutar juegos multijugador de calidad en PC.
          La era del free-to-play ha producido títulos que compiten — y a menudo superan — a
          juegos de precio completo. Desde MOBAs competitivos hasta simulaciones cooperativas,
          hay opciones para todos los gustos.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Lo importante es distinguir entre &quot;gratis&quot; y &quot;gratis de verdad&quot;. Algunos juegos
          F2P esconden mecánicas pay-to-win detrás de la descarga gratuita. En esta lista,
          priorizamos juegos donde el dinero real no te da ventaja competitiva.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Hemos seleccionado los mejores juegos gratis multijugador para PC en 2026, con
          mini-reseñas honestas de cada uno.
        </p>
      </section>

      {/* Game cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos gratis multijugador para PC
        </h2>
        <div className="space-y-6">
          {FREE_MULTIPLAYER_GAMES.map((game) => (
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
                <div className="flex gap-2 shrink-0">
                  {game.roleplay && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-sm border border-neon-cyan/30 text-neon-cyan">
                      RPG
                    </span>
                  )}
                  {game.sandbox && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-sm border border-nebula-purple/30 text-nebula-purple">
                      Sandbox
                    </span>
                  )}
                </div>
              </div>
              <p className="text-text-muted font-mono text-xs leading-relaxed">
                {game.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <GameComparisonTable
        games={FREE_MULTIPLAYER_GAMES}
        features={[
          { key: "roleplay", label: "RPG/Roleplay" },
          { key: "sandbox", label: "Sandbox" },
          { key: "socialDeduction", label: "Social" },
        ]}
      />

      <FeatureHighlight
        title="¿Por qué destacamos Space Station 14?"
        features={[
          {
            icon: "free",
            title: "Cero Microtransacciones",
            description:
              "Ni cosméticos, ni battle pass, ni boosters. SS14 es el juego gratis más honesto de esta lista: código abierto y sin monetización.",
          },
          {
            icon: "roles",
            title: "Experiencia Única",
            description:
              "Ningún otro juego gratis ofrece la combinación de roleplay, sandbox, deducción social y simulación que tiene SS14.",
          },
          {
            icon: "community",
            title: "Servidor en Español",
            description:
              "Estación Capibara: wiki completa, comunidad activa en Discord y eventos cada fin de semana. Todo en español.",
          },
        ]}
      />

      <FaqSection faqs={page.faqs} />
      <InternalLinkGrid currentSlug={page.slug} wikiLinks={page.relatedWikiLinks} relatedSlugs={page.relatedPages} />
      <CtaBlock />
    </SeoPageLayout>
  );
}
