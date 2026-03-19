import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES } from "@/data/seo-pages";
import { departments } from "@/data/departments";
import { antagonists } from "@/data/antagonists";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { FeatureHighlight } from "@/components/seo/FeatureHighlight";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "que-es-space-station-14")!;

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
  {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Space Station 14",
    alternateName: ["SS14", "Space Station 14 en Español"],
    description:
      "Juego multijugador gratis de simulación espacial con roleplay, más de 30 roles, sistemas complejos y código abierto.",
    url: "https://spacestation14.com",
    genre: ["Simulation", "Roleplay", "Multiplayer", "Sandbox"],
    gamePlatform: ["PC", "Windows", "Linux", "macOS"],
    playMode: "MultiPlayer",
    applicationCategory: "Game",
    operatingSystem: "Windows, Linux, macOS",
    inLanguage: "es",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  },
];

export default function QueEsSpaceStation14Page() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        title={page.title}
        subtitle={page.subtitle}
        breadcrumbs={[{ label: page.title, href: `/${page.slug}/` }]}
      />

      {/* Intro */}
      <section className="prose-sm mb-12">
        <p className="text-text-primary/90 font-mono text-sm leading-relaxed mb-4">
          <strong className="text-text-primary">Space Station 14</strong> (SS14) es un juego
          multijugador gratuito de simulación espacial donde los jugadores operan una estación
          espacial cooperativamente. Cada jugador elige un rol — capitán, ingeniero, médico,
          científico, oficial de seguridad o incluso traidor — y debe cumplir sus
          responsabilidades mientras la estación enfrenta amenazas internas y externas.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-4">
          El juego nació como el sucesor espiritual de Space Station 13, reimaginado con un
          motor moderno y de código abierto. A diferencia de su predecesor, SS14 es accesible,
          tiene una interfaz moderna y funciona en Windows, Linux y macOS sin necesidad de
          BYOND.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Lo que hace único a SS14 es que <strong className="text-text-primary">cada ronda es completamente diferente</strong>.
          No hay guión — las historias emergen de las decisiones de los jugadores. Un turno
          tranquilo puede convertirse en caos total por un brote químico, una fuga de plasma o
          un traidor bien posicionado.
        </p>
      </section>

      {/* How a round works */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          ¿Cómo funciona una ronda?
        </h2>
        <div className="space-y-4 text-text-muted font-mono text-sm leading-relaxed">
          <p>
            Al inicio de cada ronda, el servidor asigna roles a los jugadores. La mayoría
            serán tripulantes normales con trabajos específicos, pero algunos serán designados
            como <strong className="text-text-primary">antagonistas</strong> — jugadores con objetivos
            secretos que van desde el sabotaje sutil hasta la destrucción total de la estación.
          </p>
          <p>
            La ronda continúa hasta que se cumplen ciertos objetivos, se evacúa la estación
            o la situación se vuelve insostenible. Al final, el juego revela quiénes eran los
            antagonistas y si completaron sus misiones.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Departamentos y roles
        </h2>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-6">
          La estación está organizada en departamentos, cada uno con roles especializados y
          responsabilidades únicas. Hay más de 30 roles disponibles:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="border border-grid-line rounded-sm p-4 bg-hull-panel"
              style={{ borderLeftColor: dept.color, borderLeftWidth: 3 }}
            >
              <h3 className="font-heading font-bold text-text-primary text-sm mb-1">
                {dept.name}
              </h3>
              <p className="text-text-muted font-mono text-xs leading-relaxed mb-2">
                {dept.description}
              </p>
              <p className="text-text-muted/60 font-mono text-xs">
                {dept.jobs.map((j) => j.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Antagonists */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Antagonistas
        </h2>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-6">
          Los antagonistas son la fuente de tensión y caos. Cada tipo tiene mecánicas únicas:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {antagonists.slice(0, 6).map((ant) => (
            <div
              key={ant.id}
              className="border border-grid-line rounded-sm p-4 bg-hull-panel"
              style={{ borderLeftColor: ant.color, borderLeftWidth: 3 }}
            >
              <h3 className="font-heading font-bold text-text-primary text-sm mb-1">
                {ant.name}
              </h3>
              <p className="text-text-muted font-mono text-xs leading-relaxed">
                {ant.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why SS14 */}
      <FeatureHighlight
        features={[
          {
            icon: "free",
            title: "100% Gratis, Sin Trampa",
            description:
              "Sin microtransacciones, sin pay-to-win, sin battle pass. Todo el contenido es accesible desde el primer momento.",
          },
          {
            icon: "roles",
            title: "30+ Roles Únicos",
            description:
              "Desde capitán hasta payaso, cada rol tiene mecánicas y responsabilidades reales que afectan a toda la estación.",
          },
          {
            icon: "chaos",
            title: "Caos Emergente",
            description:
              "Cada ronda es única. Las historias no están escritas — emergen de las decisiones de todos los jugadores.",
          },
          {
            icon: "community",
            title: "Comunidad en Español",
            description:
              "Estación Capibara es el servidor hispanohablante con wiki, guías y eventos completamente en español.",
          },
          {
            icon: "opensource",
            title: "Código Abierto",
            description:
              "SS14 es open source. Cualquiera puede contribuir, crear servidores personalizados o modificar el juego.",
          },
          {
            icon: "depth",
            title: "Profundidad Real",
            description:
              "Sistemas de química, medicina, ingeniería eléctrica, economía, atmospherics y más. Siempre hay algo nuevo que aprender.",
          },
        ]}
      />

      {/* Estación Capibara section */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Estación Capibara: SS14 en español
        </h2>
        <div className="text-text-muted font-mono text-sm leading-relaxed space-y-4">
          <p>
            <strong className="text-text-primary">Estación Capibara</strong> es el servidor
            hispanohablante de Space Station 14. Todo está en español: la wiki con más de 200
            guías, la comunidad de Discord, los eventos de fin de semana y el sistema de economía
            con Spesos.
          </p>
          <p>
            Jugamos viernes, sábados y domingos con rondas normales y eventos especiales. No
            importa si eres nuevo — la comunidad es acogedora y siempre hay alguien dispuesto
            a enseñarte los sistemas del juego.
          </p>
        </div>
      </section>

      <FaqSection faqs={page.faqs} />
      <InternalLinkGrid currentSlug={page.slug} wikiLinks={page.relatedWikiLinks} relatedSlugs={page.relatedPages} />
      <CtaBlock />
    </SeoPageLayout>
  );
}
