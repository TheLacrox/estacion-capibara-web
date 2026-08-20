import type { Metadata } from "next";
import { LAST_CONTENT_UPDATE, SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, SPACE_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-espaciales-pc")!;

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
    SPACE_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosEspacialesPcPage() {
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
          El espacio siempre ha sido uno de los escenarios más fascinantes
          para los videojuegos. Desde explorar galaxias procedurales hasta
          gestionar estaciones espaciales, el género ofrece experiencias que
          ningún otro setting puede replicar.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Lo interesante es la variedad dentro del género. No es lo mismo
          pilotar una nave en Elite Dangerous que gestionar un imperio en
          Stellaris o sobrevivir en una estación en Space Station 14. Cada
          subgénero ofrece una fantasía espacial diferente.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Hemos reunido los mejores juegos espaciales para PC, desde opciones
          gratuitas hasta los títulos más ambiciosos del género.
        </p>
      </section>

      {/* Types of space games */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Tipos de juegos espaciales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              title: "Exploración",
              description:
                "Descubre planetas, sistemas y galaxias. No Man's Sky y Elite Dangerous dominan este subgénero.",
              examples: "No Man's Sky, Elite Dangerous, Starfield",
            },
            {
              title: "Estrategia",
              description:
                "Construye imperios galácticos, gestiona diplomacia y conquista sistemas. Stellaris es el rey.",
              examples: "Stellaris, Endless Space 2, Sins of a Solar Empire",
            },
            {
              title: "Simulación",
              description:
                "Opera sistemas complejos en naves o estaciones. SS14 y KSP ofrecen la mayor profundidad.",
              examples: "Space Station 14, Kerbal Space Program, Stormworks",
            },
            {
              title: "Supervivencia",
              description:
                "Sobrevive en entornos hostiles del espacio. Gestión de recursos y peligros constantes.",
              examples: "Barotrauma, Space Station 14, Oxygen Not Included",
            },
          ].map((type) => (
            <div
              key={type.title}
              className="border border-grid-line bg-hull-panel rounded-sm p-5"
            >
              <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
                {type.title}
              </h3>
              <p className="text-text-muted font-mono text-xs leading-relaxed mb-2">
                {type.description}
              </p>
              <p className="text-text-muted/60 font-mono text-xs">
                Ej: {type.examples}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Game cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos espaciales para PC
        </h2>
        <div className="space-y-6">
          {SPACE_GAMES.map((game) => (
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
        games={SPACE_GAMES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "multiplayer", label: "Multijugador" },
          { key: "sandbox", label: "Sandbox" },
          { key: "roleplay", label: "Simulación" },
        ]}
      />

      <FeatureHighlight
        title="¿Por qué SS14 destaca entre los juegos espaciales?"
        features={[
          {
            icon: "roles",
            title: "Estación Viva",
            description:
              "No controlas una nave — vives en una estación operada por decenas de jugadores reales. Cada departamento funciona porque alguien lo está operando.",
          },
          {
            icon: "chaos",
            title: "Historias Emergentes",
            description:
              "Las mejores historias espaciales no están escritas. Emergen cuando un ingeniero comete un error, un traidor ejecuta su plan o un químico experimenta demasiado.",
          },
          {
            icon: "free",
            title: "El Único Gratis",
            description:
              "De todos los juegos espaciales de esta lista, SS14 es el único completamente gratis y de código abierto. Sin cosméticos, sin DLCs, sin pases.",
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
