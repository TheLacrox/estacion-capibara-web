"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, Menu, Rocket, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, DISCORD_URL } from "@/lib/constants";
import { LIVE_SERVERS } from "@/data/servers";

interface DropdownItem {
  label: string;
  href: string;
  accentVar: string;
}

function NavDropdown({
  label,
  icon: Icon,
  items,
}: {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: DropdownItem[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const openNow = () => {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimeout.current = window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-sm font-mono transition-colors",
          open ? "text-text-primary" : "text-text-muted hover:text-text-primary"
        )}
      >
        <Icon size={14} className="opacity-70" />
        {label}
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            role="menu"
            className="absolute left-0 top-full mt-1 w-56 rounded-sm border border-grid-line bg-space-void/95 backdrop-blur-md p-1.5 shadow-lg"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-sm text-sm font-mono text-text-muted hover:text-text-primary hover:bg-hull-panel transition-colors"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.accentVar }}
                />
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const onLanding = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!onLanding) return;
      const sections = NAV_LINKS.map((l) => l.href.split("#")[1]).filter(
        Boolean
      );
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
  }, [onLanding]);

  const serverItems: DropdownItem[] = LIVE_SERVERS.map((server) => ({
    label: server.name,
    href: `/${server.slug}/`,
    accentVar: server.accentVar,
  }));
  const wikiItems: DropdownItem[] = LIVE_SERVERS.map((server) => ({
    label: server.wikiLabel,
    href: `${server.wikiBasePath}/`,
    accentVar: server.accentVar,
  }));

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
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/branding/logo.svg"
              alt="Logo de Estación Capibara, comunidad SS14 en español"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
              width={40}
              height={40}
            />
            <span className="font-heading font-bold text-text-primary text-sm tracking-wider hidden sm:block">
              ESTACIÓN <span className="text-hazard-yellow">CAPIBARA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavDropdown label="Servidores" icon={Rocket} items={serverItems} />
            <NavDropdown label="Wikis" icon={BookOpen} items={wikiItems} />
            {NAV_LINKS.slice(1).map((link) => {
              const sectionId = link.href.split("#")[1];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-mono text-text-muted hover:text-text-primary transition-colors"
                >
                  {link.label}
                  {onLanding && activeSection === sectionId && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-hazard-yellow"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
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
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <p className="px-4 pt-2 pb-1 font-mono text-xs uppercase tracking-widest text-text-muted">
                Servidores
              </p>
              {serverItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-mono text-text-muted hover:text-text-primary hover:bg-hull-panel/50 rounded-sm transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: item.accentVar }}
                  />
                  {item.label}
                </Link>
              ))}

              <p className="px-4 pt-3 pb-1 font-mono text-xs uppercase tracking-widest text-text-muted">
                Wikis
              </p>
              {wikiItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2.5 w-full px-4 py-3 text-sm font-mono text-text-muted hover:text-text-primary hover:bg-hull-panel/50 rounded-sm transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: item.accentVar }}
                  />
                  {item.label}
                </Link>
              ))}

              <p className="px-4 pt-3 pb-1 font-mono text-xs uppercase tracking-widest text-text-muted">
                Comunidad
              </p>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full px-4 py-3 text-sm font-mono text-text-muted hover:text-text-primary hover:bg-hull-panel/50 rounded-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
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
