"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServerHero } from "@/components/server/ServerHero";
import { ServerFeaturesSection } from "@/components/sections/ServerFeaturesSection";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { HowToPlaySection } from "@/components/sections/HowToPlaySection";
import { ServerLiveStatus } from "@/components/server/ServerLiveStatus";
import { WikiCtaSection } from "@/components/server/WikiCtaSection";
import { SERVER_BY_SLUG } from "@/data/servers";

const server = SERVER_BY_SLUG.estacion;

export function EstacionPageClient() {
  return (
    <>
      <Navbar />
      <main>
        <ServerHero server={server} />
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
