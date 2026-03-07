"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { TerminalText } from "@/components/ui/TerminalText";
import { DISCORD_URL, SECTION_IDS } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => ({ default: m.HeroScene })),
  { ssr: false, loading: () => null }
);

export function HeroSection() {
  const reduced = useReducedMotion();
  const [showStatus, setShowStatus] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);
  const [showScene, setShowScene] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Hide the static hero skeleton now that the real hero has mounted
    const skeleton = document.getElementById("hero-skeleton");
    if (skeleton) skeleton.style.display = "none";

    // Defer Three.js scene to after main thread is idle
    const scheduleScene = () => setShowScene(true);
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(scheduleScene, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(scheduleScene, 1000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (reduced) {
      setShowStatus(true);
      setShowCTAs(true);
      return;
    }
    const t1 = setTimeout(() => setShowStatus(true), 1800);
    const t2 = setTimeout(() => setShowCTAs(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduced]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduced ? 0 : 0.5 + i * 0.05,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      id={SECTION_IDS.hero}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-void"
    >
      {showScene && <HeroScene />}

      {/* Hazard stripes top/bottom */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="hazard-stripe h-1.5" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="hazard-stripe h-1.5" />
      </div>

      {/* Content overlay */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={reduced ? {} : { scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/branding/logo.svg"
            alt="Logo de Estación Capibara, servidor de Space Station 14 en español"
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto animate-float drop-shadow-[0_0_30px_rgba(241,196,15,0.3)]"
            width={160}
            height={160}
            fetchPriority="high"
          />
        </motion.div>

        {/* Title: ESTACION */}
        <div className="overflow-hidden mb-2" aria-hidden="true">
          <div className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.2em] text-text-primary">
            {"ESTACIÓN".split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Title: CAPIBARA */}
        <motion.div
          initial={reduced ? {} : { x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: reduced ? 0 : 1.0, duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] text-hazard-yellow text-glow-yellow">
            CAPIBARA
          </span>
        </motion.div>

        {/* Status line */}
        <div className="h-8 mb-8">
          {showStatus && (
            <TerminalText
              text=">> SERVIDOR EN LÍNEA // COMUNIDAD 100% EN ESPAÑOL <<"
              speed={30}
              className="text-neon-cyan text-xs sm:text-sm tracking-wider"
              onComplete={() => {}}
            />
          )}
        </div>

        {/* CTAs */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          animate={showCTAs ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            glow
            href={`#${SECTION_IDS.howToPlay}`}
          >
            Cómo Jugar
          </Button>
          <Button variant="outline" size="lg" href={DISCORD_URL}>
            Unirse al Discord
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-hazard-yellow rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
