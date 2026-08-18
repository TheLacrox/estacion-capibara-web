"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BookOpen, Server, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GlowText } from "@/components/ui/GlowText";
import { FadeInView } from "@/components/animations/FadeInView";
import { CountUp } from "@/components/animations/CountUp";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { SECTION_IDS, DISCORD_URL } from "@/lib/constants";

const stats = [
  {
    icon: Server,
    value: 4,
    suffix: "",
    label: "Servidores",
  },
  {
    icon: BookOpen,
    value: 4,
    suffix: "",
    label: "Wikis en Español",
  },
  {
    icon: Users,
    value: 1,
    suffix: "",
    label: "Comunidad",
  },
];

const badges = [
  { label: "Soporte en Español", color: "#F1C40F" },
  { label: "Cuatro Servidores", color: "#8E44AD" },
  { label: "Admins Activos", color: "#2ECC71" },
  { label: "Comunidad Amigable", color: "#00ffff" },
];

const floatingBubbles = [
  { id: 0, size: 96, left: 8, top: 12, duration: 5.5, delay: 0.2 },
  { id: 1, size: 138, left: 72, top: 18, duration: 7.2, delay: 1.1 },
  { id: 2, size: 74, left: 24, top: 64, duration: 4.8, delay: 0.7 },
  { id: 3, size: 121, left: 84, top: 70, duration: 6.4, delay: 1.6 },
  { id: 4, size: 88, left: 48, top: 34, duration: 7.7, delay: 0.4 },
  { id: 5, size: 152, left: 58, top: 82, duration: 5.9, delay: 1.9 },
];

export function CommunitySection() {
  return (
    <section
      id={SECTION_IDS.community}
      className="relative py-24 sm:py-32 bg-space-void overflow-hidden"
    >
      {/* Floating bubbles background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingBubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-hazard-yellow/5 border border-hazard-yellow/10"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInView className="text-center mb-16">
          <p className="font-mono text-hazard-yellow text-sm tracking-widest uppercase mb-4">
            {"// ÚNETE A NOSOTROS"}
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary mb-6">
            Nuestra <GlowText color="yellow">Comunidad</GlowText>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-lg">
            Una comunidad hispanohablante activa y acogedora donde todos son
            bienvenidos.
          </p>
        </FadeInView>

        {/* Stats */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          stagger={0.15}
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Card className="text-center py-8">
                <stat.icon className="w-8 h-8 text-hazard-yellow mx-auto mb-4" />
                <div className="font-heading font-bold text-4xl text-text-primary mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted font-mono text-sm">
                  {stat.label}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Discord card */}
        <FadeInView>
          <DiscordCard />
        </FadeInView>

        {/* Badges */}
        <FadeInView className="flex flex-wrap justify-center gap-3 mt-12">
          {badges.map((badge) => (
            <Badge key={badge.label} color={badge.color} className="text-sm px-5 py-2">
              {badge.label}
            </Badge>
          ))}
        </FadeInView>
      </div>
    </section>
  );
}

function DiscordCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="max-w-lg mx-auto"
    >
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#5865F2] rounded-sm p-8 text-center transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(88,101,242,0.3)]"
      >
        <svg
          className="w-12 h-12 mx-auto mb-4 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
        <h3 className="font-heading font-bold text-2xl text-white mb-2">
          Únete al Discord
        </h3>
        <p className="text-white/80 text-sm mb-4">
          Conecta con la comunidad, encuentra compañeros y recibe ayuda.
        </p>
        <span className="inline-block px-6 py-2 bg-white/20 text-white font-heading font-bold rounded-sm text-sm hover:bg-white/30 transition-colors">
          Unirse Ahora
        </span>
      </a>
    </motion.div>
  );
}
