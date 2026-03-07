"use client";

import { Rocket, Theater, Flame } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { SECTION_IDS } from "@/lib/constants";
import { whatIsSS14Features } from "@/data/features";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-8 h-8" />,
  Theater: <Theater className="w-8 h-8" />,
  Flame: <Flame className="w-8 h-8" />,
};

export function WhatIsSS14Section() {
  return (
    <section
      id={SECTION_IDS.whatIsSS14}
      className="relative py-24 sm:py-32 bg-space-void overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 scanlines" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInView className="text-center mb-16">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            // INTRODUCCIÓN
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            ¿Qué es <GlowText color="cyan">Space Station 14</GlowText>?
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg mb-4">
            Space Station 14 (SS14) es un juego de roleplay multijugador gratuito
            y de código abierto ambientado en una estación espacial. Cada partida
            reúne hasta 30 jugadores que asumen roles específicos — desde ingeniero
            y médico hasta científico, oficial de seguridad o capitán.
          </p>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Lo que distingue a SS14 es su naturaleza emergente: cada ronda genera
            historias únicas porque los jugadores tienen libertad total para actuar
            dentro de su rol, mientras antagonistas secretos como traidores,
            revolucionarios o cambiaformas trabajan en las sombras para sabotear
            la estación. Estación Capibara es el único servidor en español de SS14,
            con una comunidad hispanohablante activa que juega cada fin de semana,
            un sistema económico propio basado en Spesos y una wiki con más de 200
            guías traducidas al español.
          </p>
        </FadeInView>

        {/* Feature cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {whatIsSS14Features.map((feature) => (
            <StaggerItem key={feature.id}>
              <Card className="h-full group" hover>
                <div className="text-hazard-yellow mb-4 transition-transform duration-300 group-hover:scale-110">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
