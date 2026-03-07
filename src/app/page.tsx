"use client";

import dynamic from "next/dynamic";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const HeroSection = dynamic(
  () =>
    import("@/components/sections/HeroSection").then((m) => ({
      default: m.HeroSection,
    })),
  { ssr: false }
);

const WhatIsSS14Section = dynamic(
  () =>
    import("@/components/sections/WhatIsSS14Section").then((m) => ({
      default: m.WhatIsSS14Section,
    })),
  { ssr: false }
);

const ServerFeaturesSection = dynamic(
  () =>
    import("@/components/sections/ServerFeaturesSection").then((m) => ({
      default: m.ServerFeaturesSection,
    })),
  { ssr: false }
);

const DepartmentsSection = dynamic(
  () =>
    import("@/components/sections/DepartmentsSection").then((m) => ({
      default: m.DepartmentsSection,
    })),
  { ssr: false }
);

const ScheduleSection = dynamic(
  () =>
    import("@/components/sections/ScheduleSection").then((m) => ({
      default: m.ScheduleSection,
    })),
  { ssr: false }
);

const HowToPlaySection = dynamic(
  () =>
    import("@/components/sections/HowToPlaySection").then((m) => ({
      default: m.HowToPlaySection,
    })),
  { ssr: false }
);

const ServerStatusSection = dynamic(
  () =>
    import("@/components/sections/ServerStatusSection").then((m) => ({
      default: m.ServerStatusSection,
    })),
  { ssr: false }
);

const CommunitySection = dynamic(
  () =>
    import("@/components/sections/CommunitySection").then((m) => ({
      default: m.CommunitySection,
    })),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* Static hero skeleton — renders in initial HTML for fast LCP while JS loads */}
        <div
          id="hero-skeleton"
          className="min-h-screen flex items-center justify-center bg-space-void text-center px-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div>
            <img
              src="/branding/logo.svg"
              alt="Logo de Estación Capibara, servidor de Space Station 14 en español"
              className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(241,196,15,0.3)]"
              width={160}
              height={160}
              fetchPriority="high"
            />
            <h1 className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.2em] text-text-primary mb-2">
              ESTACIÓN
            </h1>
            <p className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] text-hazard-yellow mb-6">
              CAPIBARA
            </p>
            <p className="text-neon-cyan text-xs sm:text-sm tracking-wider font-mono">
              {">> SERVIDOR EN LÍNEA // COMUNIDAD 100% EN ESPAÑOL <<"}
            </p>
          </div>
        </div>
        <HeroSection />
        <WhatIsSS14Section />
        <ServerFeaturesSection />
        <DepartmentsSection />
        <ScheduleSection />
        <HowToPlaySection />
        <ServerStatusSection />
        <CommunitySection />
      </main>
      <Footer />
      <noscript>
        <div style={{ padding: "2rem", color: "#fff", backgroundColor: "#0b0f19" }}>
          <h1>Estación Capibara - Servidor de Space Station 14 en Español</h1>
          <p>
            El mejor servidor de Space Station 14 en español. Únete a nuestra comunidad hispanohablante
            con sistema económico de Spesos, 30+ roles, 8 departamentos, antagonistas y objetivos cooperativos.
          </p>
          <p>
            Space Station 14 es un juego de roleplay multijugador gratuito donde cada jugador asume un rol
            en una estación espacial: ingeniero, médico, científico, oficial de seguridad y muchos más.
            Trabaja en equipo, enfrenta amenazas y vive historias únicas cada partida.
          </p>
          <p>
            ¿Por qué jugar en Estación Capibara? Somos la comunidad hispana más activa de SS14,
            con un sistema de economía propio basado en Spesos, eventos regulares, guías en español
            y bajo ping para Latinoamérica y España.
          </p>
          <p>
            Descarga SS14 gratis desde spacestation14.com, abre el launcher y busca &quot;Capibara&quot;
            en el navegador de servidores.
          </p>
          <p>
            Visita nuestra <a href="/wiki" style={{ color: "#F1C40F" }}>Wiki</a> para guías completas
            sobre trabajos, departamentos, economía y supervivencia.
          </p>
        </div>
      </noscript>
    </SmoothScroll>
  );
}
