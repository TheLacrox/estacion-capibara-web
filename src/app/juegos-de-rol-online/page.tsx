import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, faqSchema, itemListSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES, ROLEPLAY_GAMES } from "@/data/seo-pages";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { QuickAnswer } from "@/components/seo/QuickAnswer";
import { GameComparisonTable } from "@/components/seo/GameComparisonTable";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "juegos-de-rol-online")!;

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
    ROLEPLAY_GAMES.map((g, i) => ({ name: g.name, position: i + 1 }))
  ),
];

export default function JuegosDeRolOnlinePage() {
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
          Los juegos de rol online abarcan un espectro enorme: desde MMORPGs clásicos con
          misiones épicas hasta sandbox donde los jugadores crean sus propias historias.
          Lo que todos comparten es la posibilidad de <strong className="text-text-primary">ser otra persona</strong> en
          un mundo virtual.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          Pero hay una diferencia fundamental entre &quot;jugar un rol&quot; siguiendo un guión
          predefinido y el verdadero <strong className="text-text-primary">roleplay emergente</strong>,
          donde la historia la escriben los jugadores en tiempo real. Los juegos que ofrecen
          esta segunda experiencia son mucho más raros — y mucho más adictivos.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Aquí presentamos los mejores juegos de rol online gratis para PC, desde los RPGs
          más tradicionales hasta las experiencias de roleplay más inmersivas que existen.
        </p>
      </section>

      {/* Game list */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Los mejores juegos de rol online gratis
        </h2>
        <div className="space-y-6">
          {ROLEPLAY_GAMES.map((game) => (
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
        games={ROLEPLAY_GAMES}
        features={[
          { key: "free", label: "Gratis" },
          { key: "roleplay", label: "Roleplay" },
          { key: "sandbox", label: "Sandbox" },
          { key: "socialDeduction", label: "Social" },
        ]}
      />

      {/* Types of RP */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Tipos de roleplay en juegos online
        </h2>
        <div className="space-y-4 text-text-muted font-mono text-sm leading-relaxed">
          <div className="border border-grid-line rounded-sm p-4 bg-hull-panel">
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              Roleplay de guión (MMORPGs)
            </h3>
            <p className="text-xs">
              Juegas un personaje dentro de una historia escrita por los desarrolladores.
              Misiones, diálogos y decisiones morales predefinidas. Ejemplos: SWTOR, Guild Wars 2.
            </p>
          </div>
          <div className="border border-grid-line rounded-sm p-4 bg-hull-panel">
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              Roleplay sandbox (emergente)
            </h3>
            <p className="text-xs">
              No hay guión. Tu rol tiene responsabilidades reales y la historia emerge de las
              interacciones con otros jugadores. Ejemplos: Space Station 14, GTA RP.
            </p>
          </div>
          <div className="border border-grid-line rounded-sm p-4 bg-hull-panel">
            <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
              Roleplay social
            </h3>
            <p className="text-xs">
              Enfocado en la interacción social y la construcción de personajes. Menos
              mecánicas de juego, más improvisación. Ejemplos: VRChat, SecondLife.
            </p>
          </div>
        </div>
      </section>

      <FeatureHighlight
        title="¿Por qué SS14 destaca en roleplay?"
        features={[
          {
            icon: "roleplay",
            title: "Roles con Responsabilidad Real",
            description:
              "No eres un 'médico' de nombre. Tienes que diagnosticar, operar y salvar vidas con sistemas de medicina reales.",
          },
          {
            icon: "chaos",
            title: "Historias Emergentes",
            description:
              "Cada ronda genera historias que ningún guionista podría escribir. Un traidor torpe puede causar más caos que uno competente.",
          },
          {
            icon: "depth",
            title: "Profundidad Mecánica",
            description:
              "Química, ingeniería, medicina, leyes, economía — cada sistema es profundo y conectado con los demás.",
          },
          {
            icon: "community",
            title: "Comunidad RP en Español",
            description:
              "Estación Capibara tiene normas de roleplay y una comunidad que valora las buenas historias por encima de 'ganar'.",
          },
        ]}
      />

      <FaqSection faqs={page.faqs} />
      <InternalLinkGrid currentSlug={page.slug} wikiLinks={page.relatedWikiLinks} relatedSlugs={page.relatedPages} />
      <CtaBlock />
    </SeoPageLayout>
  );
}
