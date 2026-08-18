"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LIVE_SERVERS } from "@/data/servers";
import { SECTION_IDS } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroScene = dynamic(
  () =>
    import("@/components/three/HeroScene").then((m) => ({
      default: m.HeroScene,
    })),
  { ssr: false, loading: () => null }
);

/** Horizontal offset of the diagonal edge, in px */
const SLANT = 56;
/** Negative margin between panels; SLANT minus this = visible seam width */
const OVERLAP = 44;

function panelClipPath(index: number, count: number): string {
  const first = index === 0;
  const last = index === count - 1;
  return `polygon(${first ? "0" : `${SLANT}px`} 0, 100% 0, ${
    last ? "100%" : `calc(100% - ${SLANT}px)`
  } 100%, 0 100%)`;
}

export function DiagonalHero() {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const scheduleScene = () => setShowScene(true);
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(scheduleScene, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(scheduleScene, 1000);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex flex-col overflow-hidden bg-space-void"
    >
      {showScene && <HeroScene />}

      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="hazard-stripe h-1.5" />
      </div>

      {/* Brand header */}
      <header className="relative z-20 text-center pt-24 pb-6 px-4">
        <p className="font-mono text-neon-cyan text-xs sm:text-sm tracking-widest uppercase mb-3">
          {"// UNA COMUNIDAD · CUATRO SERVIDORES"}
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] text-text-primary">
          ESTACIÓN <span className="text-hazard-yellow text-glow-yellow">CAPIBARA</span>
        </h1>
        <p className="mt-3 text-text-muted font-mono text-xs sm:text-sm">
          Space Station 14 en español · Elige tu servidor
        </p>
      </header>

      {/* Desktop: 4 panels with diagonal separators */}
      <div
        className="relative z-20 hidden md:flex flex-1 min-h-0"
        onMouseLeave={() => setExpanded(null)}
      >
        {LIVE_SERVERS.map((server, index) => {
          const isExpanded = expanded === index;
          return (
            <Link
              key={server.id}
              href={`/${server.slug}/`}
              onMouseEnter={() => setExpanded(index)}
              onFocus={() => setExpanded(index)}
              onBlur={() => setExpanded((current) => (current === index ? null : current))}
              aria-label={`${server.name} — ${server.tagline}`}
              className="group relative block self-stretch outline-none"
              style={{
                flexGrow: isExpanded ? 2.2 : 1,
                flexBasis: 0,
                flexShrink: 1,
                marginLeft: index === 0 ? 0 : -OVERLAP,
                clipPath: panelClipPath(index, LIVE_SERVERS.length),
                transition: reduced
                  ? undefined
                  : "flex-grow 450ms cubic-bezier(0.25, 1, 0.35, 1)",
                zIndex: isExpanded ? 2 : 1,
              }}
            >
              {/* Gameplay background */}
              <img
                src={server.heroImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority={index < 2 ? "high" : "auto"}
              />
              {/* Legibility dim (lighter when expanded) */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,15,25,0.62) 0%, rgba(11,15,25,0.45) 45%, rgba(11,15,25,0.92) 100%)",
                  opacity: isExpanded ? 0.82 : 1,
                }}
              />
              {/* Accent tint on expand */}
              <div
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(180deg, color-mix(in srgb, ${server.accentVar} 24%, transparent) 0%, transparent 65%)`,
                  opacity: isExpanded ? 1 : 0,
                }}
              />
              {/* Accent edge */}
              <div
                className="absolute inset-x-0 top-0 h-1 transition-opacity duration-300"
                style={{
                  backgroundColor: server.accentVar,
                  opacity: isExpanded ? 1 : 0.45,
                }}
              />
              {/* Focus ring substitute (clip-path hides outlines) */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-focus-visible:opacity-100 transition-opacity"
                style={{ boxShadow: `inset 0 0 0 2px ${server.accentVar}` }}
              />

              <div
                className="relative h-full flex flex-col items-center justify-center text-center gap-3"
                style={{ padding: `1.5rem ${SLANT + 20}px` }}
              >
                <img
                  src={server.logo}
                  alt=""
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                  width={80}
                  height={80}
                />
                <span
                  className="font-heading font-bold text-xl lg:text-2xl tracking-wider text-text-primary"
                  style={isExpanded ? { color: server.accentVar } : undefined}
                >
                  {server.shortName.toUpperCase()}
                </span>
                <span
                  className="block h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: server.accentVar }}
                />
                <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
                  {server.descriptor}
                </span>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, delay: reduced ? 0 : 0.15 }}
                      className="flex flex-col items-center gap-4 max-w-sm"
                    >
                      <p className="text-text-muted text-sm leading-relaxed">
                        {server.tagline}
                      </p>
                      <ul className="flex flex-wrap justify-center gap-1.5">
                        {server.features.map((feature) => (
                          <li
                            key={feature}
                            className="rounded-sm border border-grid-line bg-space-void/60 px-2.5 py-1 text-[11px] font-mono text-text-muted"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span
                        className="inline-flex items-center gap-2 font-heading font-bold text-sm"
                        style={{ color: server.accentVar }}
                      >
                        Entrar
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile: stacked banners, tap navigates */}
      <div className="relative z-20 flex md:hidden flex-col flex-1 gap-1.5">
        {LIVE_SERVERS.map((server) => (
          <Link
            key={server.id}
            href={`/${server.slug}/`}
            aria-label={`${server.name} — ${server.tagline}`}
            className="relative flex flex-1 min-h-24 overflow-hidden border-y border-grid-line bg-hull-panel/70"
          >
            <img
              src={server.heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-space-void/60" />
            <div
              className="absolute inset-y-0 left-0 w-1 z-10"
              style={{ backgroundColor: server.accentVar }}
            />
            <div className="relative w-full flex items-center gap-4 pl-5 pr-4">
              <img
                src={server.logo}
                alt=""
                className="w-12 h-12 object-contain shrink-0"
                width={48}
                height={48}
              />
              <div className="min-w-0 flex-1">
                <span
                  className="font-heading font-bold text-lg tracking-wider block"
                  style={{ color: server.accentVar }}
                >
                  {server.shortName.toUpperCase()}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted block truncate">
                  {server.descriptor}
                </span>
              </div>
              <ArrowRight size={18} className="text-text-muted shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="hazard-stripe h-1.5" />
      </div>
    </section>
  );
}
