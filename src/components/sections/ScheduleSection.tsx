"use client";

import { motion } from "framer-motion";
import { Calendar, Swords, Sparkles, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const gameTypes = [
  {
    id: "normal",
    icon: Swords,
    title: "Rondas Normales",
    color: "#F1C40F",
    description:
      "Partidas estándar con traidor, revolucionarios y otros antagonistas. Cada ronda es diferente: sobrevive, cumple objetivos y desconfía de todos.",
    features: [
      "Antagonistas aleatorios",
      "Objetivos de estación",
      "Sistema económico activo",
      "Duración: ~45-90 min",
    ],
  },
  {
    id: "events",
    icon: Sparkles,
    title: "Rondas de Evento",
    color: "#00ffff",
    description:
      "Eventos especiales con escenarios personalizados por los admins. Misiones únicas, modos de juego alternativos y situaciones que no verás en ningún otro servidor.",
    features: [
      "Escenarios personalizados",
      "Modos de juego únicos",
      "Organizados por admins",
      "Sorpresas cada semana",
    ],
  },
];

export function ScheduleSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.schedule}
      className="relative py-24 sm:py-32 bg-space-void overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInView className="text-center mb-16">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            // HORARIO DE JUEGO
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Cuándo <GlowText color="yellow">Jugamos</GlowText>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Nos reunimos de viernes a domingo para jugar juntos. Dos tipos de
            rondas, diversión asegurada.
          </p>
        </FadeInView>

        {/* Schedule indicator */}
        <FadeInView className="mb-16">
          <div className="max-w-md mx-auto">
            <div className="relative bg-hull-panel border border-grid-line rounded-sm p-6 text-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge color="#F1C40F">
                  <Calendar className="w-3 h-3" /> Viernes a Domingo
                </Badge>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-text-muted" />
                <span className="font-heading font-bold text-2xl text-text-primary">
                  Viernes, Sábados & Domingos
                </span>
              </div>
              <p className="text-text-muted text-sm font-mono mt-2">
                Horarios anunciados en Discord cada semana
              </p>
            </div>
          </div>
        </FadeInView>

        {/* Game types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {gameTypes.map((type, i) => (
            <FadeInView key={type.id} direction={i === 0 ? "left" : "right"}>
              <Card hover={false} className="h-full p-0 overflow-hidden">
                {/* Card header with gradient */}
                <div
                  className="p-6 pb-4 border-b border-grid-line"
                  style={{
                    background: `linear-gradient(135deg, color-mix(in srgb, ${type.color} 8%, transparent), transparent)`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-sm mb-4 flex items-center justify-center"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${type.color} 15%, var(--color-hull-panel))`,
                      border: `1px solid color-mix(in srgb, ${type.color} 30%, transparent)`,
                    }}
                  >
                    <type.icon
                      className="w-7 h-7"
                      style={{ color: type.color }}
                    />
                  </div>
                  <h3
                    className="font-heading font-bold text-2xl mb-2"
                    style={{ color: type.color }}
                  >
                    {type.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="p-6 pt-4">
                  <ul className="space-y-3">
                    {type.features.map((feature, j) => (
                      <motion.li
                        key={j}
                        initial={reduced ? {} : { opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span
                          className={cn(
                            "flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          )}
                          style={{ backgroundColor: type.color }}
                        />
                        <span className="text-text-muted">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
