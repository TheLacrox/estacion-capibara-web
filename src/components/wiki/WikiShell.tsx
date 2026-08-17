"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import type { GuideTreeNode } from "@/data/guide-types";
import { WikiSidebar } from "./WikiSidebar";

interface WikiShellProps {
  children: React.ReactNode;
  tree: GuideTreeNode;
  basePath: string;
  wikiLabel: string;
  hasRootPage?: boolean;
  switchers: {
    href: string;
    label: string;
  }[];
}

const floatingParticles = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  x: (index * 37 + 11) % 100,
  delay: (index * 7) % 20,
  duration: 15 + ((index * 13) % 25),
  size: 1 + ((index * 17) % 20) / 10,
}));

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            background:
              particle.id % 3 === 0
                ? "var(--color-neon-cyan)"
                : particle.id % 3 === 1
                  ? "var(--color-hazard-yellow)"
                  : "var(--color-nebula-purple)",
            animation: `data-stream ${particle.duration}s linear ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function WikiShell({
  children,
  tree,
  basePath,
  wikiLabel,
  hasRootPage = true,
  switchers,
}: WikiShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-space-void relative">
      <div className="fixed inset-0 bg-grid-animated opacity-30 pointer-events-none z-0" />
      <FloatingParticles />
      <div className="fixed inset-0 scanlines pointer-events-none z-0 opacity-50" />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <WikiSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        tree={tree}
        basePath={basePath}
        wikiLabel={wikiLabel}
        hasRootPage={hasRootPage}
        switchers={switchers}
      />

      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <AnimatePresence>
          <header className="lg:hidden sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-space-void/80 backdrop-blur-lg border-b border-grid-line">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 text-text-primary hover:text-hazard-yellow transition-colors"
              aria-label="Abrir menú"
            >
              <Menu size={20} />
            </motion.button>
            <span
              className="font-heading font-bold text-sm text-text-primary tracking-wider"
              style={{ animation: "flicker 4s ease-in-out infinite" }}
            >
              {wikiLabel}
            </span>
          </header>
        </AnimatePresence>

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
