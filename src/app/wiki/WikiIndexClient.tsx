"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users, Skull, Book, ShoppingCart, Wrench, Stethoscope, FlaskConical, Shield, UtensilsCrossed, Swords,
  type LucideIcon, Zap,
} from "lucide-react";
import { type GuideTreeNode } from "@/data/guides";

const CATEGORY_META: Record<string, { icon: LucideIcon; color: string; description: string }> = {
  jobs: {
    icon: Users,
    color: "var(--color-hazard-yellow)",
    description: "Guías de cada departamento y rol de la estación",
  },
  survival: {
    icon: Book,
    color: "var(--color-success-green)",
    description: "Lo básico para sobrevivir tu primer turno",
  },
  "capibara-economy": {
    icon: ShoppingCart,
    color: "var(--color-hazard-yellow)",
    description: "Sistema económico exclusivo de Capibara Station",
  },
  antagonists: {
    icon: Skull,
    color: "var(--color-alert-red)",
    description: "Todos los antagonistas y sus mecánicas",
  },
  glossary: {
    icon: Book,
    color: "var(--color-neon-cyan)",
    description: "Terminología y conceptos del juego",
  },
  "martial-arts": {
    icon: Swords,
    color: "var(--color-nebula-purple)",
    description: "Estilos de combate cuerpo a cuerpo",
  },
  sop: {
    icon: Shield,
    color: "var(--color-dept-command)",
    description: "Procedimientos Operativos Estándar",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const },
  }),
};

interface WikiIndexClientProps {
  tree: GuideTreeNode;
}

export function WikiIndexClient({ tree }: WikiIndexClientProps) {
  return (
    <div>
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-3">
          Wiki de Estación{" "}
          <span className="text-hazard-yellow text-glow-yellow">Capibara</span>
        </h1>
        <p className="text-text-muted font-mono text-sm max-w-xl">
          Guías completas del servidor en español. Selecciona una categoría
          para comenzar o usa el buscador en la barra lateral.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-neon-cyan/60">
          <Zap size={12} className="animate-pulse-glow" />
          <span>{countNodes(tree)} guías en la base de datos</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tree.children.map((child, idx) => {
          const meta = CATEGORY_META[child.slug];
          const Icon: LucideIcon = meta?.icon || Book;
          const color = meta?.color || "var(--color-text-muted)";
          const description = meta?.description || `Guía de ${child.title}`;

          return (
            <motion.div
              key={child.slug}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={`/wiki/${child.slug}`}
                className="wiki-card holo-shimmer group relative block p-5 rounded-sm border border-grid-line bg-hull-panel/80 backdrop-blur-sm overflow-hidden"
                style={{
                  borderColor: `color-mix(in srgb, ${color} 30%, var(--color-grid-line))`,
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, color-mix(in srgb, ${color} 15%, transparent), transparent 70%)`,
                  }}
                />

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                  }}
                />

                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
                    }}
                  >
                    <Icon size={20} style={{ color }} />
                  </motion.div>
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-text-primary group-hover:text-hazard-yellow transition-colors duration-200">
                      {child.title}
                    </h2>
                    <p className="text-xs font-mono text-text-muted mt-1 leading-relaxed">
                      {description}
                    </p>
                    {child.children.length > 0 && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="w-1 h-1 rounded-full animate-pulse-glow" style={{ backgroundColor: color }} />
                        <p className="text-xs font-mono text-text-muted/60">
                          {child.children.length} subguías
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function countNodes(node: GuideTreeNode): number {
  return 1 + node.children.reduce((sum, c) => sum + countNodes(c), 0);
}
