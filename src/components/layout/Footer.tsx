import { DISCORD_URL, SS14_DOWNLOAD_URL } from "@/lib/constants";
import { HazardDivider } from "@/components/ui/HazardDivider";

export function Footer() {
  return (
    <footer className="relative bg-space-void">
      <HazardDivider />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/branding/logo.svg"
                alt="Estación Capibara"
                className="w-10 h-10"
                width={40}
                height={40}
              />
              <span className="font-heading font-bold text-text-primary tracking-wider">
                ESTACIÓN <span className="text-hazard-yellow">CAPIBARA</span>
              </span>
            </div>
            <p className="text-text-muted text-sm font-mono">
              Servidor de Space Station 14 en español.
              <br />
              Fork de Goob Station.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-text-primary mb-4 uppercase tracking-wider text-sm">
              Enlaces
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href={SS14_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Descargar SS14
                </a>
              </li>
              <li>
                <a
                  href="/wiki"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Wiki
                </a>
              </li>
            </ul>
          </div>

          {/* Wiki */}
          <div>
            <h3 className="font-heading font-bold text-text-primary mb-4 uppercase tracking-wider text-sm">
              Wiki
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/wiki/jobs"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  href="/wiki/antagonists"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Antagonistas
                </a>
              </li>
              <li>
                <a
                  href="/wiki/capibara-economy"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Economía
                </a>
              </li>
              <li>
                <a
                  href="/wiki/survival"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Supervivencia
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-heading font-bold text-text-primary mb-4 uppercase tracking-wider text-sm">
              Cómo Conectarse
            </h3>
            <p className="text-text-muted text-sm font-mono">
              1. Descarga SS14 desde spacestation14.com
              <br />
              2. Abre el launcher
              <br />
              3. Busca &quot;Capibara&quot; en servidores
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-grid-line">
          <p className="text-center text-text-muted text-xs font-mono">
            Hecho con amor para la comunidad hispanohablante de SS14
          </p>
          <p className="text-center text-text-muted/50 text-xs font-mono mt-2">
            Space Station 14 es un proyecto de código abierto. Estación Capibara no está afiliada con Space Station 14 oficialmente.
          </p>
        </div>
      </div>
    </footer>
  );
}
