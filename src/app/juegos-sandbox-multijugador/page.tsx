import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, SANDBOX_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-sandbox-multijugador")!;

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
    SANDBOX_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosSandboxMultijugadorPage() {
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
          Los juegos sandbox son aquellos donde el jugador tiene libertad total para crear,
          destruir y experimentar. No hay un camino correcto — solo herramientas, un mundo y
          tu creatividad. Cuando añades el componente multijugador, las posibilidades se
          multiplican exponencialmente.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Lo mejor del género sandbox multijugador es el <strong className="text-text-primary">contenido emergente</strong>:
          historias, situaciones y momentos que ningún desarrollador diseñó, sino que surgen
          naturalmente de la interacción entre jugadores y sistemas del juego.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Desde los clásicos como Minecraft hasta joyas ocultas como Space Station 14, estos
          son los mejores juegos sandbox multijugador para PC.
        </p>
      </section>

      {/* Game list */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos sandbox multijugador
        </h2>
        <div className="space-y-6">
          {SANDBOX_GAMES.map((game) => (
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
        games={SANDBOX_GAMES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "sandbox", label: "Sandbox" },
          { key: "roleplay", label: "Roleplay" },
          { key: "socialDeduction", label: "Social" },
        ]}
      />

      {/* What makes a good sandbox */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          ¿Qué hace grande a un sandbox multijugador?
        </h2>
        <div className="space-y-4 text-text-muted font-mono text-sm leading-relaxed">
          <div className="border border-grid-line rounded-sm p-4 bg-hull-panel">
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              Sistemas interconectados
            </h3>
            <p className="text-xs">
              Los mejores sandbox tienen sistemas que interactúan entre sí de formas
              inesperadas. En SS14, una fuga en ingeniería afecta a la atmósfera, que afecta
              a la salud, que requiere médicos, que necesitan químicos.
            </p>
          </div>
          <div className="border border-grid-line rounded-sm p-4 bg-hull-panel">
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              Impacto del jugador
            </h3>
            <p className="text-xs">
              Tus acciones deben tener consecuencias reales. Construir algo útil, sabotear un
              sistema o tomar una mala decisión debe afectar a todos los demás jugadores.
            </p>
          </div>
          <div className="border border-grid-line rounded-sm p-4 bg-hull-panel">
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              Rejugabilidad infinita
            </h3>
            <p className="text-xs">
              Si cada sesión se siente diferente, el juego tiene buen diseño sandbox. SS14 lo
              logra con roles aleatorios, antagonistas secretos y eventos dinámicos.
            </p>
          </div>
        </div>
      </section>

      <FeatureHighlight
        title="¿Por qué SS14 es un sandbox único?"
        features={[
          {
            icon: "sandbox",
            title: "Estación como Sandbox",
            description:
              "La estación espacial es tu sandbox: construye, modifica, experimenta. Cada sistema es manipulable por los jugadores.",
          },
          {
            icon: "chaos",
            title: "Caos Controlado",
            description:
              "Los roles y reglas crean estructura, pero dentro de ella todo puede pasar. Es sandbox con propósito, no caos sin sentido.",
          },
          {
            icon: "free",
            title: "El Único Gratis",
            description:
              "De todos los sandbox de esta lista, SS14 es el único completamente gratis y sin microtransacciones.",
          },
          {
            icon: "depth",
            title: "Profundidad Técnica",
            description:
              "Atmospherics, electricidad, química, genética — los sistemas tienen profundidad real para quienes quieran dominarlos.",
          },
        ]}
      />

      <FaqSection faqs={page.faqs} />
      <InternalLinkGrid currentSlug={page.slug} wikiLinks={page.relatedWikiLinks} relatedSlugs={page.relatedPages} />
      <CtaBlock />
    </SeoPageLayout>
  );
}
