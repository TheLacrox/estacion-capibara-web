"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServerHero } from "@/components/server/ServerHero";
import { ServerFeaturesSection } from "@/components/sections/ServerFeaturesSection";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { HowToPlaySection } from "@/components/sections/HowToPlaySection";
import { ServerLiveStatus } from "@/components/server/ServerLiveStatus";
import { WikiCtaSection } from "@/components/server/WikiCtaSection";
import { MediaShowcase } from "@/components/server/MediaShowcase";
import { SERVER_BY_SLUG } from "@/data/servers";
import {
  estacionAmbientParagraphs,
  estacionGalleryImages,
} from "@/data/servers/estacion";

const server = SERVER_BY_SLUG.estacion;

export function EstacionPageClient() {
  return (
    <>
      <Navbar />
      <main>
        <ServerHero server={server} />
        <MediaShowcase
          eyebrow="// VIDA EN LA ESTACIÓN"
          title={
            <>
              Así se vive una{" "}
              <span style={{ color: "var(--color-hazard-yellow)" }}>ronda</span>
            </>
          }
          paragraphs={estacionAmbientParagraphs}
          images={estacionGalleryImages}
          accentVar={server.accentVar}
        />
        <ServerFeaturesSection />
        <DepartmentsSection />
        <HowToPlaySection />
        <ServerLiveStatus server={server} />
        <WikiCtaSection server={server} />
      </main>
      <Footer />
    </>
  );
}
