"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServerHero } from "@/components/server/ServerHero";
import { FeatureGrid } from "@/components/server/FeatureGrid";
import { DepartmentsShowcase } from "@/components/server/DepartmentsShowcase";
import { HowToConnect } from "@/components/server/HowToConnect";
import { ServerLiveStatus } from "@/components/server/ServerLiveStatus";
import { WikiCtaSection } from "@/components/server/WikiCtaSection";
import { SERVER_BY_SLUG } from "@/data/servers";
import {
  marinesFeatures,
  marinesShowcaseDepartments,
} from "@/data/servers/marines";

const server = SERVER_BY_SLUG.marines;

export function MarinesPageClient() {
  return (
    <>
      <Navbar />
      <main>
        <ServerHero server={server} />
        <FeatureGrid
          eyebrow="// SISTEMAS DEL SERVIDOR"
          title={
            <>
              Qué hace único a{" "}
              <span style={{ color: "var(--color-marine-green)" }}>Marines</span>
            </>
          }
          description="Colonial Marines convierte SS14 en un juego de combate táctico asimétrico inspirado en Aliens."
          features={marinesFeatures}
          accentVar={server.accentVar}
        />
        <DepartmentsShowcase
          eyebrow="// LA UNS ALMAYER"
          title={
            <>
              Departamentos y{" "}
              <span style={{ color: "var(--color-marine-green)" }}>roles</span>
            </>
          }
          description="Del puente de mando a los escuadrones de asalto: cada rol tiene su lugar en la operación."
          accentVar={server.accentVar}
          departments={marinesShowcaseDepartments}
          wikiJobsHref="/wiki-marines/jobs/"
        />
        <HowToConnect
          serverName={server.name}
          searchTerm={server.searchTerm}
          accentVar={server.accentVar}
          wikiBasePath={server.wikiBasePath}
        />
        <ServerLiveStatus server={server} />
        <WikiCtaSection server={server} />
      </main>
      <Footer />
    </>
  );
}
