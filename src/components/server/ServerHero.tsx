"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, MessageCircle } from "lucide-react";
import { DISCORD_URL } from "@/lib/constants";
import type { ServerDescriptor } from "@/data/servers";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ServerHero({ server }: { server: ServerDescriptor }) {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-space-void pt-28 pb-20 sm:pt-36 sm:pb-24">
      {/* Server art backdrop */}
      <img
        src={server.heroWide}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,15,25,0.62) 0%, rgba(11,15,25,0.42) 50%, rgba(11,15,25,0.9) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, color-mix(in srgb, ${server.accentVar} 12%, transparent) 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-0.5"
        style={{
          background: `linear-gradient(90deg, transparent, ${server.accentVar}, transparent)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={server.logo}
            alt={`Logo de ${server.name}`}
            className="h-20 w-auto max-w-[320px] mx-auto mb-6 object-contain"
            height={80}
          />
          <p
            className="font-mono text-sm tracking-widest uppercase mb-4"
            style={{ color: server.accentVar }}
          >
            {`// ${server.descriptor}`}
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-text-primary mb-5">
            {server.name}
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed mb-3">
            {server.tagline}
          </p>
          <p className="font-mono text-xs text-text-muted mb-8">{server.lineage}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Link
              href={`${server.wikiBasePath}/`}
              className="inline-flex items-center gap-2 rounded-sm px-5 py-3 font-heading font-bold text-sm text-space-void transition-transform hover:scale-105"
              style={{ backgroundColor: server.accentVar }}
            >
              <BookOpen size={16} />
              {server.wikiLabel}
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm px-5 py-3 font-heading font-bold text-sm text-white bg-[#5865F2] hover:bg-[#4752C4] transition-colors"
            >
              <MessageCircle size={16} />
              Discord
            </a>
            <a
              href="#como-conectar"
              className="inline-flex items-center gap-2 rounded-sm border border-grid-line px-5 py-3 font-mono text-sm text-text-muted hover:text-text-primary hover:border-text-muted transition-colors"
            >
              <ArrowDown size={16} />
              Cómo conectarte
            </a>
          </div>

          <ul className="flex flex-wrap justify-center gap-2">
            {server.features.map((feature, index) => {
              const FeatureIcon = server.featureIcons[index];
              return (
                <li
                  key={feature}
                  className="flex items-center gap-2 rounded-sm border border-grid-line bg-hull-panel/60 px-3 py-2 text-xs font-mono text-text-muted"
                >
                  {FeatureIcon && (
                    <FeatureIcon size={13} style={{ color: server.accentVar }} />
                  )}
                  {feature}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
