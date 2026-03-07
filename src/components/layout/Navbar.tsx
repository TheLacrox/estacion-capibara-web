"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, DISCORD_URL, WIKI_NAV_LINK } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-space-void/90 backdrop-blur-md border-b border-grid-line"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/branding/logo.svg"
              alt="Logo de Estación Capibara, servidor SS14 en español"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              width={40}
              height={40}
            />
            <span className="font-heading font-bold text-text-primary text-sm tracking-wider hidden sm:block">
              ESTACIÓN <span className="text-hazard-yellow">CAPIBARA</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.slice(1).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-3 py-2 text-sm font-mono text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-hazard-yellow"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <a
              href={WIKI_NAV_LINK.href}
              className="px-3 py-2 text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              {WIKI_NAV_LINK.label}
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-sm font-heading font-bold text-white bg-[#5865F2] rounded-sm hover:bg-[#4752C4] transition-colors"
            >
              Discord
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-primary"
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-space-void/95 backdrop-blur-md border-b border-grid-line overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "block w-full text-left px-4 py-3 text-sm font-mono rounded-sm transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-hazard-yellow bg-hull-panel"
                      : "text-text-muted hover:text-text-primary hover:bg-hull-panel/50"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WIKI_NAV_LINK.href}
                className="block w-full text-left px-4 py-3 text-sm font-mono text-text-muted hover:text-hazard-yellow hover:bg-hull-panel/50 rounded-sm transition-colors"
              >
                {WIKI_NAV_LINK.label}
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 mt-2 text-sm font-heading font-bold text-white bg-[#5865F2] rounded-sm"
              >
                Unirse al Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
