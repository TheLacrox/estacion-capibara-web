"use client";

import Link from "next/link";
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
  monolithFeatures,
  monolithShowcaseDepartments,
} from "@/data/servers/monolith";

const server = SERVER_BY_SLUG.monolith;

export function MonolithPageClient() {
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
              <span style={{ color: "var(--color-neon-cyan)" }}>Monolith</span>
            </>
          }
          description="Monolith convierte SS14 en un sandbox espacial de frontera: naves propias, comercio persistente y guerra de facciones."
          features={monolithFeatures}
          accentVar={server.accentVar}
        />
        <DepartmentsShowcase
          eyebrow="// EL SECTOR COLOSSUS"
          title={
            <>
              Facciones y{" "}
              <span style={{ color: "var(--color-neon-cyan)" }}>roles</span>
            </>
          }
          description="Colonos, militares de la TSF, soviéticos y contratistas: elige a quién sirves en el sector."
          accentVar={server.accentVar}
          departments={monolithShowcaseDepartments}
          wikiJobsHref="/wiki-monolith/jobs/"
        />
        <HowToConnect
          serverName={server.name}
          searchTerm={server.searchTerm}
          accentVar={server.accentVar}
          wikiBasePath={server.wikiBasePath}
        />
        <ServerLiveStatus server={server} />
        <WikiCtaSection server={server} />
        <section className="bg-space-void pb-16 text-center">
          <Link
            href="/monolith-station-en-espanol/"
            className="text-neon-cyan font-mono text-sm hover:underline"
          >
            Leer el artículo completo: Monolith Station en Español →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
