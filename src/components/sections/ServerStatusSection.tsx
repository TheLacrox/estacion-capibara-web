"use client";

import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/constants";
import { ServerStatusWidget } from "@/components/server/ServerStatusWidget";

export function ServerStatusSection() {
  return (
    <section
      id={SECTION_IDS.serverStatus}
      className="relative py-24 sm:py-32 bg-hull-panel overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInView className="text-center mb-12">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            {"// ESTADO DEL SERVIDOR"}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Servidor <GlowText color="cyan">En Vivo</GlowText>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Información en tiempo real de Estación Capibara.
          </p>
        </FadeInView>

        <FadeInView>
          <ServerStatusWidget endpoint="/api/status" />
        </FadeInView>
      </div>
    </section>
  );
}
