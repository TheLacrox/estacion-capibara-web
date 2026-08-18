"use client";

import { useState, useCallback } from "react";
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
  type LucideIcon,
} from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { SS14_DOWNLOAD_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface HowToConnectProps {
  serverName: string;
  searchTerm: string;
  accentVar: string;
  wikiBasePath: string;
}

interface ConnectStep {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  highlight?: boolean;
  final?: boolean;
}

export function HowToConnect({
  serverName,
  searchTerm,
  accentVar,
  wikiBasePath,
}: HowToConnectProps) {
  const [copied, setCopied] = useState(false);
  const reduced = useReducedMotion();

  const copySearchTerm = useCallback(() => {
    navigator.clipboard.writeText(searchTerm);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [searchTerm]);

  const steps: ConnectStep[] = [
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
      title: `Busca "${searchTerm}"`,
      description: `En el navegador de servidores, busca '${searchTerm}' para encontrar ${serverName}.`,
      highlight: true,
    },
    {
      icon: Palette,
      title: "Elige tu personaje",
      description: "Personaliza tu personaje y elige un rol para empezar.",
    },
    {
      icon: BookOpen,
      title: "Lee las reglas",
      description: "Revisa las reglas y las guías de la wiki antes de jugar.",
      link: `${wikiBasePath}/`,
      linkText: "Abrir la wiki",
    },
    {
      icon: Gamepad2,
      title: "¡A jugar!",
      description: "Conéctate y disfruta. La comunidad te ayudará si tienes preguntas.",
      final: true,
    },
  ];

  return (
    <section
      id="como-conectar"
      className="relative py-20 sm:py-28 bg-hull-panel overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-14">
          <p
            className="font-mono text-sm tracking-widest uppercase mb-4"
            style={{ color: accentVar }}
          >
            {"// GUÍA DE INICIO"}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text-primary mb-5">
            Cómo conectarte
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Empieza a jugar en {serverName} en minutos.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduced ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={cn(
                "relative rounded-sm border p-5 bg-space-void/60",
                step.final
                  ? "border-success-green/40"
                  : step.highlight
                    ? ""
                    : "border-grid-line"
              )}
              style={
                step.highlight
                  ? { borderColor: `color-mix(in srgb, ${accentVar} 50%, transparent)` }
                  : undefined
              }
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0",
                    step.final ? "border-success-green" : "border-grid-line"
                  )}
                  style={
                    step.highlight ? { borderColor: accentVar } : undefined
                  }
                >
                  <step.icon
                    className={cn(
                      "w-5 h-5",
                      step.final ? "text-success-green" : "text-text-muted"
                    )}
                    style={step.highlight ? { color: accentVar } : undefined}
                  />
                </div>
                <div>
                  <span className="font-mono text-xs text-text-muted block">
                    PASO {i + 1}
                  </span>
                  <h3
                    className={cn(
                      "font-heading font-bold text-base",
                      step.final ? "text-success-green" : "text-text-primary"
                    )}
                    style={step.highlight ? { color: accentVar } : undefined}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.description}
              </p>

              {step.link && (
                <a
                  href={step.link}
                  target={step.link.startsWith("http") ? "_blank" : undefined}
                  rel={step.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-block mt-2 text-neon-cyan text-sm font-mono hover:underline"
                >
                  {step.linkText} →
                </a>
              )}

              {step.highlight && (
                <button
                  onClick={copySearchTerm}
                  className="mt-3 flex items-center gap-2 px-4 py-2 bg-space-void border rounded-sm text-sm font-mono transition-colors"
                  style={{
                    borderColor: `color-mix(in srgb, ${accentVar} 30%, transparent)`,
                    color: accentVar,
                  }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-success-green" />
                      <span className="text-success-green">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar &quot;{searchTerm}&quot;</span>
                    </>
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
