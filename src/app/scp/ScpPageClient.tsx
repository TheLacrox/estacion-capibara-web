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
import { scpFeatures, scpShowcaseDepartments } from "@/data/servers/scp";

const server = SERVER_BY_SLUG.scp;

export function ScpPageClient() {
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
              <span style={{ color: "var(--color-scp-purple)" }}>SCP</span>
            </>
          }
          description="La Fundación llega a SS14: contención de anomalías, investigación y terror dentro de una instalación secreta."
          features={scpFeatures}
          accentVar={server.accentVar}
        />
        <DepartmentsShowcase
          eyebrow="// LA INSTALACIÓN"
          title={
            <>
              Servicios y{" "}
              <span style={{ color: "var(--color-scp-purple)" }}>roles</span>
            </>
          }
          description="De la clase D al Comité de Ética: elige tu lugar dentro de la Fundación… o fuera de ella."
          accentVar={server.accentVar}
          departments={scpShowcaseDepartments}
          wikiJobsHref="/wiki-scp/jobs/"
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
