"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WikiSidebar } from "@/components/wiki/WikiSidebar";

function FloatingParticles() {
  const [particles, setParticles] = useState<
    { id: number; x: number; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 25,
        size: 1 + Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? "var(--color-neon-cyan)" : p.id % 3 === 1 ? "var(--color-hazard-yellow)" : "var(--color-nebula-purple)",
            animation: `data-stream ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-space-void relative">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid-animated opacity-30 pointer-events-none z-0" />

      {/* Floating ambient particles */}
      <FloatingParticles />

      {/* Subtle scanline overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-0 opacity-50" />

      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <WikiSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        {/* Mobile header */}
        <AnimatePresence>
          <header className="lg:hidden sticky top-0 z-30 flex items-center gap-3 px-4 py-3 bg-space-void/80 backdrop-blur-lg border-b border-grid-line">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(true)}
              className="p-1.5 text-text-primary hover:text-hazard-yellow transition-colors"
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </motion.button>
            <span className="font-heading font-bold text-sm text-text-primary tracking-wider" style={{ animation: "flicker 4s ease-in-out infinite" }}>
              WIKI
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
