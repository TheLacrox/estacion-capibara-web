"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  UserPlus,
  MonitorPlay,
  Search,
  Palette,
  BookOpen,
  Gamepad2,
  Check,
  Copy,
} from "lucide-react";
import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { SECTION_IDS, SS14_DOWNLOAD_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    icon: Download,
    title: "Descarga SS14",
    description: "Descarga Space Station 14 gratis desde la página oficial.",
    link: SS14_DOWNLOAD_URL,
    linkText: "spacestation14.com",
  },
  {
    icon: UserPlus,
    title: "Crea una cuenta",
    description: "Regístrate con tu email para poder jugar en servidores.",
  },
  {
    icon: MonitorPlay,
    title: "Abre el launcher",
    description: "Ejecuta el launcher de SS14 después de instalarlo.",
  },
  {
    icon: Search,
    title: 'Busca "Capibara"',
    description:
      "En el navegador de servidores, busca 'Capibara' para encontrar nuestro servidor.",
    highlight: true,
  },
  {
    icon: Palette,
    title: "Elige tu personaje",
    description:
      "Personaliza tu personaje y elige un rol. Recomendamos empezar como Pasajero.",
  },
  {
    icon: BookOpen,
    title: "Lee las reglas",
    description:
      "Revisa las reglas del servidor antes de jugar. Respeta a los demás jugadores.",
  },
  {
    icon: Gamepad2,
    title: "¡A jugar!",
    description:
      "Conéctate y disfruta. La comunidad te ayudará si tienes preguntas.",
    final: true,
  },
];

export function HowToPlaySection() {
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const firstCircleRef = useRef<HTMLDivElement>(null);
  const lastCircleRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<{ top: number; height: number }>({ top: 0, height: 0 });

  useEffect(() => {
    const updateLine = () => {
      if (!timelineRef.current || !firstCircleRef.current || !lastCircleRef.current) return;
      const parentRect = timelineRef.current.getBoundingClientRect();
      const firstRect = firstCircleRef.current.getBoundingClientRect();
      const lastRect = lastCircleRef.current.getBoundingClientRect();
      const top = firstRect.top + firstRect.height / 2 - parentRect.top;
      const bottom = lastRect.top + lastRect.height / 2 - parentRect.top;
      setLineStyle({ top, height: bottom - top });
    };
    updateLine();
    window.addEventListener("resize", updateLine);
    return () => window.removeEventListener("resize", updateLine);
  }, []);

  const copyServerName = useCallback(() => {
    navigator.clipboard.writeText("Capibara");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section
      id={SECTION_IDS.howToPlay}
      className="relative py-24 sm:py-32 bg-hull-panel overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInView className="text-center mb-16">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            // GUÍA DE INICIO
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Cómo <GlowText color="yellow">Jugar</GlowText>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Empieza a jugar en minutos. Solo necesitas seguir estos pasos.
          </p>
        </FadeInView>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Vertical line — from first circle center to last circle center */}
          <div
            className="absolute left-6 sm:left-8 w-px bg-grid-line"
            style={{ top: lineStyle.top, height: lineStyle.height }}
          />
          <motion.div
            className="absolute left-6 sm:left-8 w-px bg-gradient-to-b from-hazard-yellow to-success-green origin-top"
            style={{ top: lineStyle.top, height: lineStyle.height }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduced ? 0 : 2, ease: "easeInOut" }}
          />

          {/* Steps */}
          <div className="relative z-10 space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Step circle */}
                <div
                  ref={i === 0 ? firstCircleRef : i === steps.length - 1 ? lastCircleRef : undefined}
                  className={cn(
                    "relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    step.final
                      ? "border-success-green"
                      : step.highlight
                        ? "border-hazard-yellow"
                        : "border-grid-line bg-hull-panel"
                  )}
                  style={
                    step.final
                      ? { backgroundColor: "color-mix(in srgb, var(--color-success-green) 10%, var(--color-hull-panel))" }
                      : step.highlight
                        ? { backgroundColor: "color-mix(in srgb, var(--color-hazard-yellow) 10%, var(--color-hull-panel))" }
                        : undefined
                  }
                >
                  <step.icon
                    className={cn(
                      "w-5 h-5 sm:w-6 sm:h-6",
                      step.final
                        ? "text-success-green"
                        : step.highlight
                          ? "text-hazard-yellow"
                          : "text-text-muted"
                    )}
                  />
                </div>

                {/* Step content */}
                <div className="pt-2 sm:pt-3 pb-4 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-text-muted">
                      PASO {i + 1}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "font-heading font-bold text-lg sm:text-xl mb-2",
                      step.final
                        ? "text-success-green"
                        : step.highlight
                          ? "text-hazard-yellow"
                          : "text-text-primary"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-neon-cyan text-sm font-mono hover:underline"
                    >
                      {step.linkText} →
                    </a>
                  )}

                  {step.highlight && (
                    <button
                      onClick={copyServerName}
                      className="mt-3 flex items-center gap-2 px-4 py-2 bg-space-void border border-hazard-yellow/30 rounded-sm text-sm font-mono text-hazard-yellow hover:bg-hazard-yellow/10 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-success-green" />
                          <span className="text-success-green">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copiar &quot;Capibara&quot;</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
