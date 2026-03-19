import { DISCORD_URL, SS14_DOWNLOAD_URL, SS14_STEAM_URL } from "@/lib/constants";
import { HazardDivider } from "@/components/ui/HazardDivider";

export function CtaBlock() {
  return (
    <section className="my-16">
      <HazardDivider className="mb-8" />
      <div className="bg-hull-panel border border-grid-line rounded-sm p-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-3">
          ¿Listo para probar Space Station 14?
        </h2>
        <p className="text-text-muted font-mono text-sm mb-8 max-w-xl mx-auto">
          Descarga gratis, busca &quot;Capibara&quot; en la lista de servidores y únete
          a la comunidad hispanohablante más activa de SS14.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={SS14_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider bg-hazard-yellow text-[#0b0f19] rounded-sm border-2 border-hazard-yellow hover:bg-hazard-orange hover:border-hazard-orange transition-all"
          >
            Descargar SS14 Gratis
          </a>
          <a
            href={SS14_STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider bg-transparent text-text-primary border-2 border-text-muted rounded-sm hover:border-hazard-yellow hover:text-hazard-yellow transition-all"
          >
            Ver en Steam
          </a>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider bg-transparent text-text-primary border-2 border-text-muted rounded-sm hover:border-neon-cyan hover:text-neon-cyan transition-all"
          >
            Unirse al Discord
          </a>
          <a
            href="/wiki"
            className="inline-flex items-center px-6 py-3 text-sm font-heading font-bold uppercase tracking-wider bg-transparent text-text-muted border-2 border-transparent rounded-sm hover:text-text-primary hover:bg-hull-panel transition-all"
          >
            Explorar la Wiki
          </a>
        </div>
      </div>
    </section>
  );
}
