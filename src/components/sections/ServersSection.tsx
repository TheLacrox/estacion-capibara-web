"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Coins,
  Crosshair,
  Orbit,
  Rocket,
  UsersRound,
} from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const servers = [
  {
    name: "Estación Capibara",
    descriptor: "La experiencia de estación",
    logo: "/branding/logo.svg",
    accent: "var(--color-hazard-yellow)",
    description:
      "El servidor principal de la comunidad: roles por departamentos, cooperación, antagonistas y eventos dentro de una estación espacial.",
    lineage: "Basado en Goob Station",
    features: ["30+ trabajos", "8 departamentos", "Eventos comunitarios"],
    wikiHref: "/wiki/",
    wikiLabel: "Wiki Estación",
  },
  {
    name: "Capibara Monolith",
    descriptor: "Frontera, naves y facciones",
    logo: "/branding/monolith-logo.svg",
    accent: "var(--color-neon-cyan)",
    description:
      "La edición comunitaria en español de Monolith Station. Recorre el Sector Colossus con naves propias, comercio persistente, expediciones, facciones y artillería naval.",
    lineage: "Derivado de Monolith Station y Frontier Station 14",
    features: ["Economía persistente", "Naves y expediciones", "Facciones y artillería"],
    wikiHref: "/wiki-monolith/",
    wikiLabel: "Wiki Monolith",
  },
] as const;

export function ServersSection() {
  return (
    <section
      id="servidores"
      className="relative overflow-hidden bg-space-void py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-14">
          <p className="font-mono text-neon-cyan text-sm tracking-widest uppercase mb-4">
            {"// UNA COMUNIDAD · DOS EXPERIENCIAS"}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-5">
            Elige tu <span className="text-hazard-yellow text-glow-yellow">servidor</span>
          </h2>
          <p className="text-text-muted max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Estación Capibara reúne dos servidores separados de Space Station 14.
            Ambos comparten comunidad y soporte en español, pero ofrecen estilos de
            juego distintos.
          </p>
        </FadeInView>

        <StaggerChildren
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          stagger={0.15}
        >
          {servers.map((server) => (
            <StaggerItem key={server.name}>
              <article
                className="wiki-card holo-shimmer relative h-full overflow-hidden rounded-sm border border-grid-line bg-hull-panel/80 p-6 sm:p-8"
                style={{
                  boxShadow: `inset 0 1px 0 color-mix(in srgb, ${server.accent} 20%, transparent)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${server.accent}, transparent)`,
                  }}
                />

                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-sm border border-grid-line bg-space-void/70 p-2 flex items-center justify-center shrink-0"
                    style={{ borderColor: `color-mix(in srgb, ${server.accent} 35%, transparent)` }}
                  >
                    <img
                      src={server.logo}
                      alt={`Logo de ${server.name}`}
                      className="w-full h-full object-contain"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <p
                      className="font-mono text-xs uppercase tracking-widest mb-1"
                      style={{ color: server.accent }}
                    >
                      {server.descriptor}
                    </p>
                    <h3 className="font-heading font-bold text-2xl text-text-primary">
                      {server.name}
                    </h3>
                    <p className="font-mono text-xs text-text-muted mt-1">
                      {server.lineage}
                    </p>
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed mb-6">
                  {server.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-7">
                  {server.features.map((feature, index) => {
                    const icons = [Coins, Rocket, Crosshair];
                    const FeatureIcon =
                      server.name === "Estación Capibara"
                        ? [Building2, UsersRound, Orbit][index]
                        : icons[index];
                    return (
                      <li
                        key={feature}
                        className="flex items-center gap-2 rounded-sm border border-grid-line bg-space-void/50 px-3 py-2 text-xs font-mono text-text-muted"
                      >
                        <FeatureIcon size={13} style={{ color: server.accent }} />
                        {feature}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={server.wikiHref}
                    className="inline-flex items-center gap-2 rounded-sm px-4 py-2.5 font-heading font-bold text-sm bg-hazard-yellow text-space-void hover:bg-yellow-300 transition-colors"
                  >
                    <BookOpen size={16} />
                    {server.wikiLabel}
                    <ArrowRight size={15} />
                  </Link>
                  {server.name === "Capibara Monolith" && (
                    <Link
                      href="/monolith-station-en-espanol/"
                      className="inline-flex items-center gap-2 rounded-sm border border-neon-cyan/30 px-4 py-2.5 font-mono text-sm text-neon-cyan hover:border-hazard-yellow/50 hover:text-hazard-yellow transition-colors"
                    >
                      Conocer el servidor
                    </Link>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
