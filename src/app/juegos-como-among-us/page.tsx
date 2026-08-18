import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, AMONG_US_ALTERNATIVES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-como-among-us")!;

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
    AMONG_US_ALTERNATIVES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosComoAmongUsPage() {
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
          <strong className="text-text-primary">Among Us</strong> demostró que los juegos de
          deducción social pueden ser increíblemente divertidos. La idea de trabajar en equipo
          mientras intentas descubrir quién es el impostor enganchó a millones de jugadores
          en todo el mundo, especialmente en Latinoamérica.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Pero si ya dominaste Among Us y buscas algo con más profundidad — más roles, más
          mecánicas, más historias emergentes — hay varios juegos que llevan el concepto de
          &quot;tripulación con traidores&quot; a otro nivel.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Hemos recopilado las mejores alternativas, desde juegos 100% gratis hasta títulos
          de pago que valen cada centavo. Todos comparten el ADN de Among Us pero añaden
          capas de complejidad que mantienen las partidas frescas durante cientos de horas.
        </p>
      </section>

      {/* Game list */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos como Among Us
        </h2>
        <div className="space-y-6">
          {AMONG_US_ALTERNATIVES.map((game) => (
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
        games={AMONG_US_ALTERNATIVES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "socialDeduction", label: "Deducción Social" },
          { key: "roleplay", label: "Roleplay" },
          { key: "sandbox", label: "Sandbox" },
        ]}
      />

      <FeatureHighlight
        title="¿Por qué SS14 es la mejor alternativa a Among Us?"
        features={[
          {
            icon: "roles",
            title: "30+ Roles vs 2",
            description:
              "Among Us tiene tripulante e impostor. SS14 tiene capitán, ingeniero, médico, científico, detective, traidor, cambiaformas y 25+ más.",
          },
          {
            icon: "depth",
            title: "Sistemas Reales",
            description:
              "En SS14 la ingeniería, química y medicina funcionan de verdad. No son minijuegos — son sistemas completos que interactúan entre sí.",
          },
          {
            icon: "free",
            title: "Gratis de Verdad",
            description:
              "Sin cosméticos de pago, sin pase de batalla, sin anuncios. SS14 es código abierto y mantenido por la comunidad.",
          },
          {
            icon: "chaos",
            title: "Partidas de 1+ Hora",
            description:
              "Las rondas de Among Us duran 10 minutos. En SS14, una ronda puede durar más de una hora con arcos narrativos completos.",
          },
          {
            icon: "community",
            title: "Comunidad Hispana",
            description:
              "Estación Capibara ofrece la experiencia completa en español: wiki, Discord, eventos y una comunidad acogedora.",
          },
          {
            icon: "sandbox",
            title: "Libertad Total",
            description:
              "No estás limitado a tareas predefinidas. Puedes hacer casi cualquier cosa: construir, investigar, comerciar, conspirar.",
          },
        ]}
      />

      <FaqSection faqs={page.faqs} />
      <InternalLinkGrid currentSlug={page.slug} wikiLinks={page.relatedWikiLinks} relatedSlugs={page.relatedPages} />
      <CtaBlock />
    </SeoPageLayout>
  );
}
