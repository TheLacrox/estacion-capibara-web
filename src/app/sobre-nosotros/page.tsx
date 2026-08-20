import type { Metadata } from "next";
import Link from "next/link";
import { DISCORD_URL, SITE_URL } from "@/lib/constants";
import { personSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { SeoPageLayout } from "@/components/seo/SeoPageLayout";
import { SeoHero } from "@/components/seo/SeoHero";
import { CtaBlock } from "@/components/seo/CtaBlock";

const PAGE_URL = `${SITE_URL}/sobre-nosotros/`;

export const metadata: Metadata = {
  title: "Sobre Nosotros | Estación Capibara",
  description:
    "Quiénes somos: la comunidad hispana detrás de Estación Capibara y sus servidores de Space Station 14, con wikis en español y soporte por Discord.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: PAGE_URL,
    title: "Sobre Nosotros | Estación Capibara",
    description:
      "La comunidad hispana detrás de los servidores Capibara de Space Station 14.",
    siteName: "Estación Capibara",
    images: [{ url: "/branding/og-image.png", width: 1200, height: 630 }],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Sobre Nosotros - Estación Capibara",
    url: PAGE_URL,
    inLanguage: "es",
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  },
  seoBreadcrumbSchema([{ name: "Sobre Nosotros", url: PAGE_URL }]),
  personSchema(),
];

const SERVER_LINKS = [
  {
    name: "Estación Capibara",
    href: "/estacion/",
    detail: "El servidor original de la comunidad, con su wiki en /wiki/.",
  },
  {
    name: "Capibara Marines",
    href: "/marines/",
    detail: "Rondas de marines contra xenónidos (RMC14), wiki en /wiki-marines/.",
  },
  {
    name: "Capibara SCP",
    href: "/scp/",
    detail: "Un Sitio de la Fundación SCP con anomalías jugables, wiki en /wiki-scp/.",
  },
  {
    name: "Capibara Monolith",
    href: "/monolith/",
    detail: "Naves, economía persistente y el Sector Colossus, wiki en /wiki-monolith/.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <SeoPageLayout jsonLd={jsonLd}>
      <SeoHero
        title="Sobre Nosotros"
        subtitle="Estación Capibara es una comunidad hispanohablante de Space Station 14 que opera sus propios servidores, traduce y publica sus wikis, y organiza partidas cada fin de semana."
        breadcrumbs={[{ label: "Sobre Nosotros", href: "/sobre-nosotros/" }]}
      />

      <section className="mb-12">
        <h2 className="mb-5 font-heading text-2xl font-bold text-text-primary">
          Qué hacemos
        </h2>
        <div className="space-y-4">
          <p className="font-mono text-sm leading-relaxed text-text-muted">
            Administramos cuatro servidores comunitarios de Space Station 14,
            cada uno con una ambientación distinta y su propia wiki en español.
            Las wikis no son traducciones copiadas de otros sitios: se generan
            directamente desde los datos de juego de cada servidor, así que
            reflejan lo que de verdad encontrarás al conectarte.
          </p>
          <p className="font-mono text-sm leading-relaxed text-text-muted">
            Space Station 14 es un juego gratuito y de código abierto. Nuestro
            trabajo como comunidad es mantener los servidores, localizar el
            contenido al español y ayudar a que jugadores nuevos aprendan sin
            barrera de idioma. No cobramos nada: no hay tienda, ni ventajas de
            pago, ni publicidad.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 font-heading text-2xl font-bold text-text-primary">
          Nuestros servidores
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SERVER_LINKS.map((server) => (
            <Link
              key={server.href}
              href={server.href}
              className="rounded-sm border border-grid-line bg-hull-panel p-5 transition-colors hover:border-hazard-yellow/50"
            >
              <span className="font-heading text-sm font-bold text-text-primary">
                {server.name}
              </span>
              <span className="mt-2 block font-mono text-xs leading-relaxed text-text-muted">
                {server.detail}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 font-heading text-2xl font-bold text-text-primary">
          Quién está detrás
        </h2>
        <div className="space-y-4">
          <p className="font-mono text-sm leading-relaxed text-text-muted">
            El proyecto lo fundó y administra{" "}
            <strong className="text-text-primary">TheLacrox</strong>, que
            mantiene los cuatro servidores, escribe los artículos del blog y
            coordina las traducciones junto a los colaboradores de la
            comunidad. El desarrollo del servidor de Estación Capibara es
            público en su{" "}
            <a
              href="https://github.com/TheLacrox/Estacion-Capibara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hazard-yellow hover:text-hazard-orange transition-colors"
            >
              GitHub
            </a>
            , donde puede verse quién contribuye y qué cambia en cada versión.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-5 font-heading text-2xl font-bold text-text-primary">
          Contacto
        </h2>
        <div className="space-y-4">
          <p className="font-mono text-sm leading-relaxed text-text-muted">
            La comunidad vive en Discord: allí se publican los anuncios de los
            servidores, los horarios de las rondas y los avisos de eventos, y es
            el canal directo para hablar con el equipo de administración,
            resolver dudas o reportar problemas.
          </p>
          <p className="font-mono text-sm leading-relaxed text-text-muted">
            Parte de nuestro trabajo es público: el código del servidor de
            Estación Capibara puede consultarse en{" "}
            <a
              href="https://github.com/TheLacrox/Estacion-Capibara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hazard-yellow hover:text-hazard-orange transition-colors"
            >
              GitHub
            </a>
            . Si quieres colaborar con traducciones, guías o desarrollo,
            preséntate en Discord.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-hazard-yellow px-5 py-3 font-heading text-sm font-bold text-space-void transition-colors hover:bg-hazard-orange"
          >
            Únete al Discord
          </a>
        </div>
      </section>

      <CtaBlock />
    </SeoPageLayout>
  );
}
