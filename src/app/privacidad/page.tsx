import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, DISCORD_URL } from "@/lib/constants";
import { CookieResetButton } from "./CookieResetButton";

export const metadata: Metadata = {
  title: "Politica de Privacidad - Estacion Capibara",
  description:
    "Politica de privacidad y uso de cookies de Estacion Capibara, servidor espanol de Space Station 14.",
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
          Politica de Privacidad
        </h1>
        <p className="text-text-muted text-sm font-mono mb-10">
          Ultima actualizacion: 7 de marzo de 2026
        </p>

        <div className="space-y-8 text-text-primary/90 font-mono text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              Estacion Capibara es un proyecto comunitario sin animo de lucro que opera un servidor
              de Space Station 14 en espanol. Este sitio web es mantenido por el equipo de
              administracion de Estacion Capibara.
            </p>
            <p className="mt-2">
              Contacto:{" "}
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-hazard-yellow transition-colors underline underline-offset-2"
              >
                Discord de Estacion Capibara
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              2. Datos que recopilamos
            </h2>
            <p className="mb-3">
              Este sitio web recopila datos de forma limitada y anonima a traves de:
            </p>
            <h3 className="text-lg font-heading font-bold text-text-primary mb-2">
              Google Analytics
            </h3>
            <p>
              Utilizamos Google Analytics (ID: G-VZH5Y2ESMQ) para comprender como los visitantes
              interactuan con nuestro sitio. Google Analytics recopila:
            </p>
            <ul className="list-none space-y-2 my-3 ml-1">
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Paginas visitadas y tiempo de permanencia</span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Informacion general del dispositivo y navegador</span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Ubicacion geografica aproximada (a nivel de pais/region)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>Fuente de trafico (como llegaste al sitio)</span>
              </li>
            </ul>
            <p>
              Google Analytics utiliza cookies para distinguir entre usuarios. Estos datos son
              anonimos y no permiten identificar a personas individuales. Para mas informacion,
              consulta la{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-hazard-yellow transition-colors underline underline-offset-2"
              >
                politica de privacidad de Google
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
                      Proposito
                    </th>
                    <th className="text-left px-3 py-2 border-b border-grid-line font-heading">
                      Duracion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-grid-line text-neon-cyan">_ga</td>
                    <td className="px-3 py-2 border-b border-grid-line">
                      Distinguir usuarios (Google Analytics)
                    </td>
                    <td className="px-3 py-2 border-b border-grid-line">2 anos</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-grid-line text-neon-cyan">
                      _ga_*
                    </td>
                    <td className="px-3 py-2 border-b border-grid-line">
                      Mantener estado de sesion (Google Analytics)
                    </td>
                    <td className="px-3 py-2 border-b border-grid-line">2 anos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              No utilizamos cookies publicitarias ni de seguimiento de terceros mas alla de Google
              Analytics. Puedes cambiar tu preferencia de cookies en cualquier momento:
            </p>
            <CookieResetButton />
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              4. Tus derechos
            </h2>
            <p className="mb-3">
              De acuerdo con el Reglamento General de Proteccion de Datos (RGPD) y legislaciones
              similares, tienes derecho a:
            </p>
            <ul className="list-none space-y-2 ml-1">
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>
                  <strong className="text-text-primary">Acceso:</strong> Solicitar informacion
                  sobre los datos que tenemos sobre ti.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>
                  <strong className="text-text-primary">Eliminacion:</strong> Solicitar la
                  eliminacion de tus datos.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-hazard-yellow shrink-0">{">"}</span>
                <span>
                  <strong className="text-text-primary">Oposicion:</strong> Puedes desactivar
                  Google Analytics usando la{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-cyan hover:text-hazard-yellow transition-colors underline underline-offset-2"
                  >
                    extension de exclusion de Google Analytics
                  </a>{" "}
                  o configurando tu navegador para bloquear cookies.
                </span>
              </li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, contactanos a traves de nuestro{" "}
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
              Este sitio web es independiente del servidor de juego de Space Station 14. Los datos
              generados durante el juego (nombre de personaje, acciones en partida, registros de
              chat) son gestionados por el servidor de juego y no por este sitio web. Para
              consultas sobre datos del servidor de juego, contacta a los administradores a traves
              de Discord.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
              6. Cambios a esta politica
            </h2>
            <p>
              Podemos actualizar esta politica de privacidad ocasionalmente. Cualquier cambio sera
              publicado en esta pagina con una nueva fecha de actualizacion.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
