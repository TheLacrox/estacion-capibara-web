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
    </SmoothScroll>
  );
}
