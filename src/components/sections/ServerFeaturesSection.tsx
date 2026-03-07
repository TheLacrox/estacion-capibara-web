"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Coins,
  Target,
  Skull,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GlowText } from "@/components/ui/GlowText";
import { HazardDivider } from "@/components/ui/HazardDivider";
import { FadeInView } from "@/components/animations/FadeInView";
import { CountUp } from "@/components/animations/CountUp";
import { SECTION_IDS } from "@/lib/constants";
import { objectives } from "@/data/objectives";
import { antagonists } from "@/data/antagonists";
import { cn } from "@/lib/cn";

export function ServerFeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id={SECTION_IDS.features}
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-hull-panel overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeInView className="text-center mb-20">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            // SISTEMAS DEL SERVIDOR
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Características <GlowText color="yellow">Únicas</GlowText>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Estación Capibara tiene sistemas exclusivos que hacen cada ronda más
            interesante y desafiante.
          </p>
        </FadeInView>

        {/* Vertical data pipeline */}
        <div className="absolute left-1/2 top-48 bottom-0 w-px hidden lg:block">
          <div className="w-full h-full bg-grid-line" />
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-hazard-yellow to-neon-cyan"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Economy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <FadeInView direction="left">
            <Badge color="#F1C40F" className="mb-4">
              <Coins className="w-3 h-3" /> Sistema Económico
            </Badge>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-4">
              Economía con <GlowText color="yellow">Spesos</GlowText>
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Cada tripulante recibe una cuenta bancaria con Spesos al unirse.
              Gana un salario cada 10 minutos según tu rol, retira efectivo de
              cajeros automáticos y compra en máquinas expendedoras.{" "}
              <a
                href="/wiki/capibara-economy"
                className="text-neon-cyan hover:underline"
              >
                Leer más en la wiki →
              </a>
            </p>
            <div className="flex gap-6">
              <div>
                <div className="font-heading font-bold text-2xl text-hazard-yellow">
                  <CountUp end={200} suffix=" Sp" />
                </div>
                <div className="text-text-muted text-xs font-mono">
                  Salario max/ciclo
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-hazard-yellow">
                  <CountUp end={500} suffix=" Sp" />
                </div>
                <div className="text-text-muted text-xs font-mono">
                  Balance inicial max
                </div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-hazard-yellow">
                  <CountUp end={10} suffix=" min" />
                </div>
                <div className="text-text-muted text-xs font-mono">
                  Ciclo de pago
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="right">
            <EconomyMockup />
          </FadeInView>
        </div>

        <HazardDivider className="mb-24" />

        {/* Station Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <FadeInView direction="right" className="lg:order-2">
            <Badge color="#E74C3C" className="mb-4">
              <Target className="w-3 h-3" /> Cooperación Requerida
            </Badge>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-4">
              Objetivos de <GlowText color="cyan">Estación</GlowText>
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Cada turno, la estación recibe 2-3 objetivos cooperativos. Si no se
              completan en 30 minutos, los salarios se congelan. Trabaja en
              equipo o sufre las consecuencias.
            </p>
            <div className="bg-space-void border border-alert-red/30 rounded-sm p-4 font-mono text-sm">
              <span className="text-alert-red font-bold animate-pulse">
                ALERTA:
              </span>{" "}
              <span className="text-text-muted">
                SALARIOS CONGELADOS // COMPLETAR OBJETIVOS PARA RESTAURAR
              </span>
            </div>
          </FadeInView>

          <FadeInView direction="left" className="lg:order-1">
            <ObjectivesGrid />
          </FadeInView>
        </div>

        <HazardDivider className="mb-24" />

        {/* Antagonists */}
        <FadeInView className="mb-8">
          <div className="text-center mb-12">
            <Badge color="#8E44AD" className="mb-4">
              <Skull className="w-3 h-3" /> Amenazas
            </Badge>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-4">
              <GlowText color="purple">Antagonistas</GlowText>
            </h3>
            <p className="text-text-muted max-w-xl mx-auto">
              El enemigo puede estar en cualquier parte. Cada ronda trae amenazas
              diferentes.{" "}
              <a
                href="/wiki/antagonists"
                className="text-neon-cyan hover:underline"
              >
                Ver todos en la wiki →
              </a>
            </p>
          </div>
        </FadeInView>
        <AntagonistCarousel />
      </div>
    </section>
  );
}

function EconomyMockup() {
  return (
    <div className="bg-space-void border border-grid-line rounded-sm p-6 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-grid-line">
        <div className="w-3 h-3 rounded-full bg-alert-red" />
        <div className="w-3 h-3 rounded-full bg-hazard-yellow" />
        <div className="w-3 h-3 rounded-full bg-success-green" />
        <span className="text-text-muted ml-2">cajero_automatico.exe</span>
      </div>

      <div className="space-y-3">
        <div className="text-text-muted">
          {">"} Cuenta:{" "}
          <span className="text-neon-cyan">Cap. Rodriguez</span>
        </div>
        <div className="text-text-muted">
          {">"} Cargo:{" "}
          <span className="text-hazard-yellow">Capitan</span>
        </div>
        <div className="text-text-muted">
          {">"} Saldo:{" "}
          <span className="text-success-green font-bold text-lg">
            <CountUp end={1247} prefix="$" suffix=" Sp" />
          </span>
        </div>
        <div className="text-text-muted">
          {">"} Salario:{" "}
          <span className="text-hazard-yellow">200 Sp/ciclo</span>
        </div>
        <div className="mt-4 pt-3 border-t border-grid-line text-success-green text-xs">
          [OK] Proximo pago en 07:32
        </div>
      </div>
    </div>
  );
}

function ObjectivesGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {objectives.slice(0, 6).map((obj, i) => (
        <motion.div
          key={obj.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="bg-space-void border border-grid-line rounded-sm p-3 text-center"
        >
          <div
            className="w-12 h-12 mx-auto mb-2 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: obj.departmentColor }}
          >
            <motion.svg
              className="w-full h-full"
              viewBox="0 0 48 48"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke={obj.departmentColor}
                strokeWidth="2"
                opacity="0.2"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke={obj.departmentColor}
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  pathLength: 0.7 + Math.random() * 0.3,
                  rotate: -90,
                  transformOrigin: "center",
                }}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 0.7 + Math.random() * 0.3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 1.5 }}
              />
            </motion.svg>
          </div>
          <div className="text-text-primary text-xs font-bold leading-tight">
            {obj.name}
          </div>
          <div
            className="text-xs font-mono mt-1"
            style={{ color: obj.departmentColor }}
          >
            {obj.target}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function AntagonistCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-hull-panel/80 border border-grid-line rounded-full flex items-center justify-center text-text-primary hover:text-hazard-yellow transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-hull-panel/80 border border-grid-line rounded-full flex items-center justify-center text-text-primary hover:text-hazard-yellow transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-4"
        style={{ scrollbarWidth: "none" }}
      >
        {antagonists.map((antag) => (
          <Card
            key={antag.id}
            className={cn(
              "flex-shrink-0 w-64 snap-start group cursor-default",
              "hover:border-opacity-50"
            )}
            style={
              { "--hover-border": antag.color } as React.CSSProperties
            }
          >
            <div
              className="w-12 h-12 rounded-sm mb-4 flex items-center justify-center text-lg font-bold transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `color-mix(in srgb, ${antag.color} 20%, transparent)`,
                color: antag.color,
                border: `1px solid color-mix(in srgb, ${antag.color} 30%, transparent)`,
              }}
            >
              <Skull className="w-6 h-6" />
            </div>
            <h4
              className="font-heading font-bold text-lg mb-2"
              style={{ color: antag.color }}
            >
              {antag.name}
            </h4>
            <p className="text-text-muted text-sm leading-relaxed">
              {antag.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
