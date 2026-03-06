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
          <h1>Estacion Capibara - Servidor de Space Station 14 en Español</h1>
          <p>
            El mejor servidor de Space Station 14 en espanol. Unete a nuestra comunidad hispanohablante
            con sistema economico de Spesos, 30+ roles, 8 departamentos, antagonistas y objetivos cooperativos.
          </p>
          <p>
            Descarga SS14 gratis desde spacestation14.com, abre el launcher y busca &quot;Capibara&quot;
            en el navegador de servidores.
          </p>
          <p>
            Visita nuestra <a href="/wiki" style={{ color: "#F1C40F" }}>Wiki</a> para guias completas
            sobre trabajos, departamentos, economia y supervivencia.
          </p>
        </div>
      </noscript>
    </SmoothScroll>
  );
}
