import { DISCORD_URL, SS14_DOWNLOAD_URL } from "@/lib/constants";
import { HazardDivider } from "@/components/ui/HazardDivider";
import Link from "next/link";

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
                alt="Logo de Estación Capibara, servidor de Space Station 14 en español"
                className="w-10 h-10"
                width={40}
                height={40}
              />
              <span className="font-heading font-bold text-text-primary tracking-wider">
                ESTACIÓN <span className="text-hazard-yellow">CAPIBARA</span>
              </span>
            </div>
            <p className="text-text-muted text-sm font-mono">
              Comunidad de Space Station 14 en español.
              <br />
              Dos servidores, dos wikis, una comunidad.
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
                <Link
                  href="/wiki/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Wiki
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="/quiz/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Quiz: ¿Qué Rol Eres?
                </a>
              </li>
            </ul>
          </div>

          {/* Wikis */}
          <div>
            <h3 className="font-heading font-bold text-text-primary mb-4 uppercase tracking-wider text-sm">
              Wikis
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/wiki/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Wiki Estación
                </Link>
              </li>
              <li>
                <Link
                  href="/wiki-monolith/"
                  className="text-neon-cyan text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Wiki Monolith
                </Link>
              </li>
              <li>
                <Link
                  href="/wiki-monolith/nf14/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Naves y Frontera
                </Link>
              </li>
              <li>
                <Link
                  href="/wiki-monolith/economy/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Economía Monolith
                </Link>
              </li>
              <li>
                <Link
                  href="/wiki-monolith/factions/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Facciones
                </Link>
              </li>
              <li>
                <Link
                  href="/wiki-monolith/weapons-systems/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Artillería Naval
                </Link>
              </li>
            </ul>
          </div>

          {/* Articles */}
          <div>
            <h3 className="font-heading font-bold text-text-primary mb-4 uppercase tracking-wider text-sm">
              Artículos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/monolith-station-en-espanol/"
                  className="text-neon-cyan text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Monolith Station en Español
                </Link>
              </li>
              <li>
                <a
                  href="/que-es-space-station-14/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  ¿Qué es SS14?
                </a>
              </li>
              <li>
                <a
                  href="/como-jugar-space-station-14/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Cómo Jugar SS14
                </a>
              </li>
              <li>
                <a
                  href="/juegos-como-among-us/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos como Among Us
                </a>
              </li>
              <li>
                <a
                  href="/juegos-gratis-multijugador/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos Gratis
                </a>
              </li>
              <li>
                <a
                  href="/juegos-de-rol-online/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos de Rol
                </a>
              </li>
              <li>
                <a
                  href="/juegos-sandbox-multijugador/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos Sandbox
                </a>
              </li>
              <li>
                <a
                  href="/juegos-cooperativos-pc/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos Cooperativos
                </a>
              </li>
              <li>
                <a
                  href="/juegos-espaciales-pc/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos Espaciales
                </a>
              </li>
              <li>
                <a
                  href="/juegos-para-pc-de-bajos-recursos/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos Bajos Recursos
                </a>
              </li>
              <li>
                <a
                  href="/juegos-de-supervivencia-multijugador/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos Supervivencia
                </a>
              </li>
              <li>
                <a
                  href="/juegos-parecidos-a-barotrauma/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos como Barotrauma
                </a>
              </li>
              <li>
                <a
                  href="/juegos-de-simulacion-pc/"
                  className="text-text-muted text-sm font-mono hover:text-hazard-yellow transition-colors"
                >
                  Juegos de Simulación
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-grid-line">
          <p className="text-center text-text-muted text-xs font-mono">
            Hecho con amor para la comunidad hispanohablante de SS14
          </p>
          <p className="text-center text-text-muted text-xs font-mono mt-2">
            Space Station 14 es un proyecto de código abierto. Estación Capibara no está afiliada con Space Station 14 oficialmente.
          </p>
          <p className="text-center mt-3">
            <a
              href="/privacidad/"
              className="text-text-muted text-xs font-mono hover:text-hazard-yellow transition-colors"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
