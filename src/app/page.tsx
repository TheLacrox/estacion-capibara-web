"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DiagonalHero } from "@/components/sections/DiagonalHero";
import { jsonLdWebsite } from "@/lib/metadata";
import { gameEventSchema, websiteSchema } from "@/lib/schema";

const WhatIsSS14Section = dynamic(
  () =>
    import("@/components/sections/WhatIsSS14Section").then((m) => ({
      default: m.WhatIsSS14Section,
    }))
);

const ServersSection = dynamic(
  () =>
    import("@/components/sections/ServersSection").then((m) => ({
      default: m.ServersSection,
    }))
);

const ScheduleSection = dynamic(
  () =>
    import("@/components/sections/ScheduleSection").then((m) => ({
      default: m.ScheduleSection,
    }))
);

const MultiServerStatus = dynamic(
  () =>
    import("@/components/sections/MultiServerStatus").then((m) => ({
      default: m.MultiServerStatus,
    }))
);

const CommunitySection = dynamic(
  () =>
    import("@/components/sections/CommunitySection").then((m) => ({
      default: m.CommunitySection,
    }))
);

export default function Home() {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebsite),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gameEventSchema()),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <DiagonalHero />
        <WhatIsSS14Section />
        <ServersSection />
        <ScheduleSection />
        <MultiServerStatus />
        <CommunitySection />
      </main>
      <Footer />
      <noscript>
        <div style={{ padding: "2rem", color: "#fff", backgroundColor: "#0b0f19" }}>
          <h2>Estación Capibara - Comunidad Española de SS14 | Space Station 14 en Español</h2>
          <p>
            Estación Capibara es la comunidad hispanohablante de SS14 (Space Station 14) con
            cuatro servidores en español, cada uno con su propia wiki y estilo de juego.
          </p>
          <h2>Cuatro servidores en español</h2>
          <ul>
            <li>
              <Link href="/estacion/" style={{ color: "#F1C40F" }}>Estación Capibara</Link>: la
              experiencia clásica de estación con departamentos, economía de Spesos, antagonistas
              y objetivos cooperativos. <Link href="/wiki/" style={{ color: "#F1C40F" }}>Wiki Estación</Link>.
            </li>
            <li>
              <Link href="/marines/" style={{ color: "#7FB069" }}>Capibara Marines</Link>: combate
              táctico asimétrico de marines coloniales contra xenomorfos, derivado de RMC-14.{" "}
              <Link href="/wiki-marines/" style={{ color: "#7FB069" }}>Wiki Marines</Link>.
            </li>
            <li>
              <Link href="/scp/" style={{ color: "#A55EEA" }}>Capibara SCP</Link>: contención de
              anomalías y roleplay de terror en una instalación de la Fundación SCP.{" "}
              <Link href="/wiki-scp/" style={{ color: "#A55EEA" }}>Wiki SCP</Link>.
            </li>
            <li>
              <Link href="/monolith/" style={{ color: "#00ffff" }}>Capibara Monolith</Link>: naves
              propias, expediciones, economía persistente y facciones en el Sector Colossus.{" "}
              <Link href="/wiki-monolith/" style={{ color: "#00ffff" }}>Wiki Monolith</Link>.
            </li>
          </ul>
          <h2>¿Qué es Space Station 14?</h2>
          <p>
            Space Station 14 es un juego de roleplay multijugador gratuito donde cada jugador asume un rol
            en una estación espacial: ingeniero, médico, científico, oficial de seguridad y muchos más.
            Trabaja en equipo, enfrenta amenazas y vive historias únicas cada partida.
          </p>
          <h2>Horario de Juego</h2>
          <p>
            Jugamos los viernes, sábados y domingos. Rondas normales con antagonistas aleatorios y
            rondas de evento con escenarios personalizados organizados por los admins. Los horarios
            se anuncian en Discord cada semana.
          </p>
          <h2>Cómo Jugar</h2>
          <p>
            Descarga SS14 gratis desde spacestation14.com, abre el launcher y busca &quot;Capibara&quot;
            en el navegador de servidores para encontrar los cuatro servidores de la comunidad.
          </p>
        </div>
      </noscript>
    </SmoothScroll>
  );
}
