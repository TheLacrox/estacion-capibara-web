"use client";

import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/constants";
import { LIVE_SERVERS } from "@/data/servers";
import { ServerStatusWidget } from "@/components/server/ServerStatusWidget";

export function MultiServerStatus() {
  return (
    <section
      id={SECTION_IDS.serverStatus}
      className="relative py-24 sm:py-32 bg-hull-panel overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-12">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            {"// ESTADO DE LOS SERVIDORES"}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Servidores <GlowText color="cyan">En Vivo</GlowText>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Información en tiempo real de los cuatro servidores.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {LIVE_SERVERS.map((server, index) => (
            <FadeInView key={server.id}>
              <ServerStatusWidget
                endpoint={server.statusEndpoint}
                label={server.shortName}
                initialDelay={index * 250}
                enabled={server.statusLive}
              />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
