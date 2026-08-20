import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, DISCORD_URL } from "@/lib/constants";
import { CookieResetButton } from "./CookieResetButton";

export const metadata: Metadata = {
  title: "Política de Privacidad - Estación Capibara",
  description:
    "Política de privacidad y uso de cookies de Estación Capibara, comunidad española de Space Station 14.",
  alternates: {
    canonical: `${SITE_URL}/privacidad/`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-space-void">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors mb-8"
        >
          <span>&larr;</span>
          <span>Volver al inicio</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-2">
          Política de Privacidad
        </h1>
        <p className="text-text-muted text-sm font-mono mb-10">
          Última actualización: 7 de marzo de 2026
        </p>

        <div className="space-y-8 text-text-primary/90 font-mono text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              Estación Capibara es un proyecto comunitario sin ánimo de lucro que opera servidores
              de Space Station 14 en español. Este sitio web es mantenido por el equipo de
              administración de Estación Capibara.
            </p>
            <p className="mt-2">
              Contacto:{" "}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-hazard-yellow transition-colors underline underline-offset-2"
              >
                Discord de Estación Capibara
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              2. Datos que recopilamos
            </h2>
            <p className="mb-3">
              Este sitio web recopila datos de forma limitada y anónima a través de:
            </p>
            <h3 className="text-lg font-heading font-bold text-text-primary mb-2">
              Google Analytics
            </h3>
            <p>
              Utilizamos Google Analytics (ID: G-VZH5Y2ESMQ) para comprender cómo los visitantes
              interactúan con nuestro sitio. Google Analytics recopila:
            </p>
            <ul className="list-none space-y-2 my-3 ml-1">
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Páginas visitadas y tiempo de permanencia</span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Información general del dispositivo y navegador</span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Ubicación geográfica aproximada (a nivel de país/región)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Fuente de tráfico (cómo llegaste al sitio)</span>
              </li>
            </ul>
            <p>
              Google Analytics utiliza cookies para distinguir entre usuarios. Estos datos son
              anónimos y no permiten identificar a personas individuales. Para más información,
              consulta la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-hazard-yellow transition-colors underline underline-offset-2"
              >
                política de privacidad de Google
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              3. Cookies
            </h2>
            <p className="mb-3">Este sitio utiliza las siguientes cookies:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-grid-line">
                <thead>
                  <tr className="bg-hull-panel">
                    <th className="text-left px-3 py-2 border-b border-grid-line font-heading">
                      Cookie
                    </th>
                    <th className="text-left px-3 py-2 border-b border-grid-line font-heading">
                      Propósito
                    </th>
                    <th className="text-left px-3 py-2 border-b border-grid-line font-heading">
                      Duración
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-grid-line text-neon-cyan">_ga</td>
                    <td className="px-3 py-2 border-b border-grid-line">
                      Distinguir usuarios (Google Analytics)
                    </td>
                    <td className="px-3 py-2 border-b border-grid-line">2 años</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-grid-line text-neon-cyan">
                      _ga_*
                    </td>
                    <td className="px-3 py-2 border-b border-grid-line">
                      Mantener estado de sesión (Google Analytics)
                    </td>
                    <td className="px-3 py-2 border-b border-grid-line">2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              No utilizamos cookies publicitarias ni de seguimiento de terceros más allá de Google
              Analytics. Puedes cambiar tu preferencia de cookies en cualquier momento:
            </p>
            <CookieResetButton />
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              4. Tus derechos
            </h2>
            <p className="mb-3">
              De acuerdo con el Reglamento General de Protección de Datos (RGPD) y legislaciones
              similares, tienes derecho a:
            </p>
            <ul className="list-none space-y-2 ml-1">
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>
                  <strong className="text-text-primary">Acceso:</strong> Solicitar información
                  sobre los datos que tenemos sobre ti.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>
                  <strong className="text-text-primary">Eliminación:</strong> Solicitar la
                  eliminación de tus datos.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>
                  <strong className="text-text-primary">Oposición:</strong> Puedes desactivar
                  Google Analytics usando la{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-cyan hover:text-hazard-yellow transition-colors underline underline-offset-2"
                  >
                    extensión de exclusión de Google Analytics
                  </a>{" "}
                  o configurando tu navegador para bloquear cookies.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, contáctanos a través de nuestro{" "}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-hazard-yellow transition-colors underline underline-offset-2"
              >
                servidor de Discord
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              5. Datos del juego
            </h2>
            <p>
              Este sitio web es independiente de los servidores de juego de Space Station 14. Los
              datos generados durante el juego (nombre de personaje, acciones en partida, registros
              de chat) son gestionados por cada servidor de juego y no por este sitio web. Para
              consultas sobre datos de los servidores de juego, contacta a los administradores a
              través de Discord.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              6. Cambios a esta política
            </h2>
            <p>
              Podemos actualizar esta política de privacidad ocasionalmente. Cualquier cambio será
              publicado en esta página con una nueva fecha de actualización.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
