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

const HowToPlaySection = dynamic(
  () =>
    import("@/components/sections/HowToPlaySection").then((m) => ({
      default: m.HowToPlaySection,
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
        <HeroSection />
        <WhatIsSS14Section />
        <ServerFeaturesSection />
        <DepartmentsSection />
        <HowToPlaySection />
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
