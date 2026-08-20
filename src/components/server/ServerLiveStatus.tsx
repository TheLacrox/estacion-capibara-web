"use client";

import { FadeInView } from "@/components/animations/FadeInView";
import { ServerStatusWidget } from "./ServerStatusWidget";
import type { ServerDescriptor } from "@/data/servers";

export function ServerLiveStatus({ server }: { server: ServerDescriptor }) {
  return (
    <section className="relative py-20 sm:py-28 bg-hull-panel overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-12">
          <p
            className="font-mono text-sm tracking-widest uppercase mb-4"
            style={{ color: server.accentVar }}
          >
            {"// ESTADO DEL SERVIDOR"}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-5">
            Servidor en vivo
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Información en tiempo real de {server.name}.
          </p>
        </FadeInView>

        <FadeInView>
          <ServerStatusWidget
            endpoint={server.statusEndpoint}
            enabled={server.statusLive}
          />
        </FadeInView>
      </div>
    </section>
  );
}
