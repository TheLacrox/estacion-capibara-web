import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, SIMULATION_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-de-simulacion-pc")!;

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
    SIMULATION_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosDeSimulacionPcPage() {
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
          Los juegos de simulación son para quienes disfrutan entender cómo
          funcionan las cosas. Sistemas que interactúan, problemas que
          requieren pensamiento y la satisfacción de dominar algo complejo.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Los mejores simuladores comparten algo: crean{" "}
          <strong className="text-text-primary">historias emergentes</strong>.
          No son historias escritas por guionistas — surgen de la interacción
          entre sistemas. Un colono en Rimworld que desarrolla un romance
          durante un asedio, una fábrica en Factorio que se descontrola, o
          una estación en SS14 donde el ingeniero causa un apagón masivo.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Hemos seleccionado los simuladores más profundos y adictivos para
          PC, desde opciones gratuitas hasta los clásicos del género.
        </p>
      </section>

      {/* What makes a good sim */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          ¿Qué hace bueno a un simulador?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Sistemas Profundos",
              description:
                "Mecánicas que recompensan la comprensión. No basta con hacer clic — necesitas entender cómo funcionan e interactúan los sistemas.",
            },
            {
              title: "Narrativa Emergente",
              description:
                "Las mejores historias no están escritas. Surgen de la interacción entre sistemas, reglas y (en juegos multijugador) otros jugadores.",
            },
            {
              title: "Curva de Aprendizaje",
              description:
                "Un buen simulador es fácil de empezar pero imposible de dominar. Siempre hay algo nuevo que aprender, incluso después de cientos de horas.",
            },
            {
              title: "Rejugabilidad Infinita",
              description:
                "La combinación de sistemas complejos y variables crea situaciones únicas en cada partida. Ninguna sesión es igual a otra.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-grid-line bg-hull-panel rounded-sm p-5"
            >
              <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-text-muted font-mono text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Game cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos de simulación para PC
        </h2>
        <div className="space-y-6">
          {SIMULATION_GAMES.map((game) => (
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
                  {game.free && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-sm border border-green-400/30 text-green-400">
                      Gratis
                    </span>
                  )}
                  {game.multiplayer && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded-sm border border-neon-cyan/30 text-neon-cyan">
                      Multi
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
        games={SIMULATION_GAMES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "multiplayer", label: "Multijugador" },
          { key: "sandbox", label: "Sandbox" },
          { key: "roleplay", label: "Narrativa" },
        ]}
      />

      <FeatureHighlight
        title="¿Por qué SS14 es el simulador más único?"
        features={[
          {
            icon: "roles",
            title: "Simulación con Jugadores Reales",
            description:
              "En Factorio y Rimworld, la IA opera los sistemas. En SS14, cada sistema es operado por un jugador real. Eso hace que todo sea impredecible y fascinante.",
          },
          {
            icon: "depth",
            title: "Sistemas Interconectados",
            description:
              "Electricidad alimenta los sistemas atmosféricos, que mantienen el aire respirable, que permite que los químicos trabajen, que producen medicinas. Todo conecta.",
          },
          {
            icon: "free",
            title: "Gratis y Open Source",
            description:
              "Mientras Factorio cuesta 35€ y Rimworld 30€, SS14 es completamente gratis. Y al ser de código abierto, la comunidad constantemente añade nuevos sistemas.",
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
