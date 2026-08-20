import type { Metadata } from "next";
import { LAST_CONTENT_UPDATE, SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, LOW_SPEC_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { SystemRequirementsTable } from "@/components/seo/SystemRequirementsTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-para-pc-de-bajos-recursos")!;

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
    LOW_SPEC_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosParaPcDeBajosRecursosPage() {
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
          No necesitas una PC gamer de última generación para disfrutar
          juegos increíbles. Muchos de los mejores títulos de la historia
          corren perfectamente en hardware modesto — incluso en laptops con
          gráficos integrados.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          En Latinoamérica, donde no todos pueden invertir en hardware
          nuevo, es fundamental conocer qué juegos funcionan bien en PCs de
          bajos recursos. Esta lista incluye los requisitos mínimos reales
          de cada juego para que puedas decidir antes de descargar.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Todos estos juegos han sido probados y funcionan con procesadores
          de gama baja, menos de 4 GB de RAM y sin tarjeta gráfica dedicada.
        </p>
      </section>

      {/* Game cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos para PC de bajos recursos
        </h2>
        <div className="space-y-6">
          {LOW_SPEC_GAMES.map((game) => (
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
                  <span className="text-xs font-mono px-2 py-0.5 rounded-sm border border-neon-cyan/30 text-neon-cyan">
                    {game.minRam} RAM
                  </span>
                </div>
              </div>
              <p className="text-text-muted font-mono text-xs leading-relaxed">
                {game.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SystemRequirementsTable games={LOW_SPEC_GAMES} />

      <FeatureHighlight
        title="¿Por qué SS14 es perfecto para PCs de bajos recursos?"
        features={[
          {
            icon: "free",
            title: "Corre en Cualquier Cosa",
            description:
              "2 GB de RAM, gráficos integrados Intel HD 4000, 500 MB de disco. Si tu PC puede abrir Chrome, puede correr SS14.",
          },
          {
            icon: "depth",
            title: "Profundidad sin Gráficos Pesados",
            description:
              "La complejidad de SS14 está en sus sistemas, no en sus gráficos. 30+ roles, química, ingeniería y economía sin necesitar una RTX.",
          },
          {
            icon: "community",
            title: "Multijugador Ligero",
            description:
              "A diferencia de juegos como Rust o ARK que devoran recursos, SS14 mantiene buen rendimiento incluso con decenas de jugadores.",
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
