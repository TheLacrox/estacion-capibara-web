import type { Metadata } from "next";
import { SITE_URL, SS14_DOWNLOAD_URL, SS14_STEAM_URL, DISCORD_URL } from "@/lib/constants";
import { faqSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SEO_PAGES } from "@/data/seo-pages";
import { departments } from "@/data/departments";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { FaqSection } from "@/components/seo/FaqSection";
import { InternalLinkGrid } from "@/components/seo/InternalLinkGrid";
import { CtaBlock } from "@/components/seo/CtaBlock";

const page = SEO_PAGES.find((p) => p.slug === "como-jugar-space-station-14")!;

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

const TUTORIAL_STEPS = [
  {
    name: "Descarga el launcher de SS14",
    text: "Ve a spacestation14.com o busca 'Space Station 14' en Steam. Descarga e instala el launcher oficial. Es gratis y pesa menos de 100 MB.",
  },
  {
    name: "Instala el juego",
    text: "Abre el launcher. El juego se descargará automáticamente la primera vez (~500 MB). En Steam se instala directamente.",
  },
  {
    name: "Busca el servidor Estación Capibara",
    text: "En la pantalla de servidores, escribe 'Capibara' en el buscador. Haz clic en 'Estación Capibara' para conectarte. Es el servidor en español.",
  },
  {
    name: "Elige tu rol",
    text: "En el lobby, ve a 'Preferencias de Personaje' para personalizar tu apariencia y prioridades de rol. Para tu primera vez, recomendamos Asistente o Pasante — roles sin responsabilidades fijas que te dejan explorar.",
  },
  {
    name: "Juega tu primera ronda",
    text: "Cuando la ronda empiece, explora la estación, habla con otros jugadores (tecla T para chat) y observa cómo funcionan los departamentos. No tengas miedo de preguntar — la comunidad es amigable.",
  },
];

const jsonLd = [
  faqSchema(page.faqs),
  seoBreadcrumbSchema([{ name: page.title, url: `${SITE_URL}/${page.slug}/` }]),
];

export default function ComoJugarSpaceStation14Page() {
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
          <strong className="text-text-primary">Space Station 14</strong> es
          completamente gratis, funciona en cualquier PC y no necesitas ninguna
          cuenta especial para empezar. En menos de 10 minutos puedes estar
          jugando tu primera ronda en español.
        </p>
        <p className="text-text-muted font-mono text-sm leading-relaxed">
          Este tutorial te guía paso a paso desde la descarga hasta tu primer
          turno en la estación. Si ya tienes el juego instalado, salta
          directamente al paso 3.
        </p>
      </section>

      {/* Tutorial steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Tutorial paso a paso
        </h2>
        <div className="space-y-6">
          {TUTORIAL_STEPS.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 border border-grid-line bg-hull-panel rounded-sm p-5"
            >
              <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-hazard-yellow/10 border border-hazard-yellow/30">
                <span className="font-heading font-bold text-hazard-yellow text-lg">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
                  {step.name}
                </h3>
                <p className="text-text-muted font-mono text-xs leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download links */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Enlaces de descarga
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href={SS14_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-hazard-yellow/50 bg-hazard-yellow/5 rounded-sm p-4 text-center hover:bg-hazard-yellow/10 transition-colors"
          >
            <span className="block font-heading font-bold text-hazard-yellow text-sm mb-1">
              Sitio Oficial
            </span>
            <span className="block text-text-muted font-mono text-xs">
              spacestation14.com
            </span>
          </a>
          <a
            href={SS14_STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-grid-line bg-hull-panel rounded-sm p-4 text-center hover:border-hazard-yellow/50 transition-colors"
          >
            <span className="block font-heading font-bold text-text-primary text-sm mb-1">
              Steam
            </span>
            <span className="block text-text-muted font-mono text-xs">
              Gratis en Steam
            </span>
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-grid-line bg-hull-panel rounded-sm p-4 text-center hover:border-neon-cyan/50 transition-colors"
          >
            <span className="block font-heading font-bold text-text-primary text-sm mb-1">
              Discord
            </span>
            <span className="block text-text-muted font-mono text-xs">
              Comunidad en español
            </span>
          </a>
        </div>
      </section>

      {/* Roles overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          ¿Qué rol elegir en tu primera partida?
        </h2>
        <p className="text-text-muted font-mono text-sm leading-relaxed mb-6">
          SS14 tiene más de 30 roles organizados en departamentos. Para tu
          primera ronda, te recomendamos <strong className="text-text-primary">Asistente</strong> o{" "}
          <strong className="text-text-primary">Pasante</strong> de cualquier departamento. Así puedes
          explorar sin presión. Estos son los departamentos principales:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {departments.slice(0, 6).map((dept) => (
            <div
              key={dept.id}
              className="border border-grid-line rounded-sm p-4 bg-hull-panel"
              style={{ borderLeftColor: dept.color, borderLeftWidth: 3 }}
            >
              <h3 className="font-heading font-bold text-text-primary text-sm mb-1">
                {dept.name}
              </h3>
              <p className="text-text-muted font-mono text-xs leading-relaxed">
                {dept.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Consejos para tu primera ronda
        </h2>
        <div className="space-y-3">
          {[
            "No tengas miedo de preguntar. Escribe en chat (T) y la mayoría de jugadores te ayudarán.",
            "Lee las señales de la estación. Los colores de las puertas y pasillos te indican en qué departamento estás.",
            "Si mueres, no te desconectes. Los médicos pueden revivir y los clones son posibles.",
            "Explora la wiki antes o durante tu primera partida. Hay guías para cada rol.",
            "Busca la pantalla de mapa (usualmente en el lobby) para orientarte.",
          ].map((tip, i) => (
            <div
              key={i}
              className="flex gap-3 items-start text-text-muted font-mono text-sm"
            >
              <span className="shrink-0 text-hazard-yellow font-bold">→</span>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </section>

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
