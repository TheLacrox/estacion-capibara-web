"use client";

import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import type { ServerPageFeature } from "./types";

interface FeatureGridProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  features: ServerPageFeature[];
  accentVar: string;
}

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
  accentVar,
}: FeatureGridProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-hull-panel overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-14">
          <p
            className="font-mono text-sm tracking-widest uppercase mb-4"
            style={{ color: accentVar }}
          >
            {eyebrow}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-5">
            {title}
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">{description}</p>
        </FadeInView>

        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          stagger={0.1}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.id}>
                <article className="wiki-card relative h-full rounded-sm border border-grid-line bg-space-void/60 p-6 overflow-hidden">
                  <div
                    className="w-12 h-12 rounded-sm mb-4 flex items-center justify-center"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${feature.color} 15%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${feature.color} 30%, transparent)`,
                      color: feature.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <p
                    className="font-mono text-xs uppercase tracking-widest mb-1"
                    style={{ color: feature.color }}
                  >
                    {feature.subtitle}
                  </p>
                  <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.wikiHref && (
                    <Link
                      href={feature.wikiHref}
                      className="inline-block mt-3 text-neon-cyan text-sm font-mono hover:underline"
                    >
                      {feature.wikiLabel ?? "Leer más en la wiki"} →
                    </Link>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
