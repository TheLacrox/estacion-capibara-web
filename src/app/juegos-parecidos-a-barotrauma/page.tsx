import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, BAROTRAUMA_ALTERNATIVES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-parecidos-a-barotrauma")!;

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
    basePath: "",
  }),
  faqSchema(page.faqs),
  seoBreadcrumbSchema([{ name: page.title, url: `${SITE_URL}/${page.slug}/` }]),
  itemListSchema(
    BAROTRAUMA_ALTERNATIVES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosParecidosABarotraumaPage() {
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
          <strong className="text-text-primary">Barotrauma</strong> es un
          juego único: cooperación bajo presión extrema, roles
          especializados, sistemas complejos que interactúan y momentos de
          caos puro que crean historias inolvidables. Encontrar algo similar
          no es fácil.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Lo que hace especial a Barotrauma no es solo el submarino — es la
          sensación de que cada jugador es una pieza vital y que un error de
          cualquiera puede destruir a todos. Esa tensión cooperativa es
          difícil de replicar.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Hemos buscado los juegos que mejor capturan esa esencia:
          cooperación con consecuencias, sistemas profundos y caos emergente.
        </p>
      </section>

      {/* SS14 vs Barotrauma comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Barotrauma vs Space Station 14
        </h2>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-6">
          Si te gusta Barotrauma, SS14 es probablemente el juego más cercano
          en espíritu. Ambos comparten el mismo ADN de diseño:
        </p>
        <div className="overflow-x-auto -mx-4 px-4 mb-6">
          <table className="w-full text-sm border border-grid-line">
            <thead>
              <tr className="bg-hull-panel">
                <th className="text-left px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                  Característica
                </th>
                <th className="text-center px-3 py-3 border-b border-grid-line font-heading text-text-primary">
                  Barotrauma
                </th>
                <th className="text-center px-3 py-3 border-b border-grid-line font-heading text-hazard-yellow">
                  Space Station 14
                </th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs">
              {[
                ["Precio", "De pago", "Gratis"],
                ["Roles", "~5 roles", "30+ roles"],
                ["Escenario", "Submarino", "Estación espacial"],
                ["Traidores", "Opcional", "Integrado"],
                ["Sistemas", "Cableado, médico, armas", "Electricidad, atmos, química, medicina, economía"],
                ["Jugadores", "2-16", "10-100+"],
                ["Código", "Cerrado", "Abierto"],
                ["Servidores en español", "Limitado", "Estación Capibara"],
              ].map(([feature, baro, ss14]) => (
                <tr key={feature}>
                  <td className="px-3 py-2 border-b border-grid-line text-text-primary">
                    {feature}
                  </td>
                  <td className="text-center px-3 py-2 border-b border-grid-line text-text-muted">
                    {baro}
                  </td>
                  <td className="text-center px-3 py-2 border-b border-grid-line text-hazard-yellow">
                    {ss14}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Game cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Todas las alternativas a Barotrauma
        </h2>
        <div className="space-y-6">
          {BAROTRAUMA_ALTERNATIVES.map((game) => (
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
        games={BAROTRAUMA_ALTERNATIVES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "multiplayer", label: "Multijugador" },
          { key: "roleplay", label: "Roles" },
          { key: "sandbox", label: "Sandbox" },
        ]}
      />

      <FeatureHighlight
        title="Si te gusta el caos de Barotrauma..."
        features={[
          {
            icon: "chaos",
            title: "Caos a Mayor Escala",
            description:
              "Barotrauma tiene 16 jugadores max. SS14 puede tener 100+. Imagina el caos de Barotrauma pero con 10 veces más jugadores y variables.",
          },
          {
            icon: "roles",
            title: "Más Roles, Más Drama",
            description:
              "Donde Barotrauma tiene capitán, mecánico, médico, ingeniero y seguridad, SS14 tiene 30+ roles con mecánicas únicas cada uno.",
          },
          {
            icon: "free",
            title: "Sin Barrera de Entrada",
            description:
              "Convencer a tus amigos de comprar Barotrauma es difícil. SS14 es gratis — solo necesitan descargarlo y buscar Capibara.",
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
