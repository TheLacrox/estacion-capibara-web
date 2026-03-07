"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, X, Book, Swords, Wrench, Shield, FlaskConical, Stethoscope, ShoppingCart, UtensilsCrossed, Users, Skull, type LucideIcon, Radio } from "lucide-react";
import { cn } from "@/lib/cn";
import { type GuideTreeNode, guideTree } from "@/data/guides";

interface WikiSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  jobs: Users,
  command: Shield,
  engineering: Wrench,
  medical: Stethoscope,
  science: FlaskConical,
  security: Shield,
  cargo: ShoppingCart,
  service: UtensilsCrossed,
  antagonists: Skull,
  survival: Book,
  "capibara-economy": ShoppingCart,
};

const CATEGORY_COLORS: Record<string, string> = {
  command: "var(--color-dept-command)",
  engineering: "var(--color-dept-engineering)",
  medical: "var(--color-dept-medical)",
  science: "var(--color-dept-science)",
  security: "var(--color-dept-security)",
  cargo: "var(--color-dept-cargo)",
  service: "var(--color-dept-service)",
  antagonists: "var(--color-alert-red)",
  "capibara-economy": "var(--color-hazard-yellow)",
};

function flattenTree(node: GuideTreeNode): GuideTreeNode[] {
  return [node, ...node.children.flatMap(flattenTree)];
}

function TreeNode({ node, depth = 0 }: { node: GuideTreeNode; depth?: number }) {
  const pathname = usePathname();
  const currentSlug = pathname?.replace("/wiki/", "").replace(/\/$/, "") || "";
  const isActive = currentSlug === node.slug;
  const hasChildren = node.children.length > 0;

  const allDescendants = useMemo(() => flattenTree(node), [node]);
  const hasActiveDescendant = allDescendants.some((d) => d.slug === currentSlug);

  const [isOpen, setIsOpen] = useState(hasActiveDescendant || depth === 0);

  const Icon = CATEGORY_ICONS[node.slug];
  const color = CATEGORY_COLORS[node.slug];

  return (
    <div>
      <div className="flex items-center group/tree">
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-hull-panel rounded-sm transition-colors shrink-0"
            aria-label={isOpen ? "Colapsar" : "Expandir"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight size={14} className="text-text-muted" />
            </motion.div>
          </button>
        )}
        <Link
          href={`/wiki/${node.slug}`}
          className={cn(
            "sidebar-active flex-1 flex items-center gap-2 px-2 py-1.5 text-sm font-mono rounded-sm transition-all duration-200 truncate relative",
            !hasChildren && "ml-6",
            isActive
              ? "text-hazard-yellow bg-hull-panel"
              : "text-text-muted hover:text-text-primary hover:bg-hull-panel/50"
          )}
          style={{
            ...(isActive && color ? { color, "--glow-color": color } as React.CSSProperties : {}),
            ...(!isActive ? { "--glow-color": undefined } as React.CSSProperties : {}),
          }}
        >
          {isActive && (
            <motion.div
              layoutId="sidebar-active-indicator"
              className="absolute left-0 top-[15%] bottom-[15%] w-0.5 rounded-full"
              style={{
                backgroundColor: color || "var(--color-hazard-yellow)",
                boxShadow: `0 0 8px ${color || "var(--color-hazard-yellow)"}, 0 0 16px color-mix(in srgb, ${color || "var(--color-hazard-yellow)"} 50%, transparent)`,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          {Icon && (
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Icon size={14} className="shrink-0" style={isActive && color ? { color } : undefined} />
            </motion.div>
          )}
          <span className="truncate">{node.title}</span>
        </Link>
      </div>

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={cn("ml-2 border-l border-grid-line overflow-hidden", depth > 2 && "ml-3")}
          >
            {node.children.map((child) => (
              <TreeNode key={child.id} node={child} depth={depth + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function WikiSidebar({ isOpen, onClose }: WikiSidebarProps) {
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const allNodes = useMemo(() => flattenTree(guideTree), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return allNodes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.slug.includes(q) ||
        n.id.toLowerCase().includes(q)
    );
  }, [search, allNodes]);

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 lg:z-auto h-screen w-72 bg-space-void/95 backdrop-blur-md border-r border-grid-line flex flex-col transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b border-grid-line flex items-center justify-between shrink-0">
          <Link href="/wiki" className="flex items-center gap-2.5 group" onClick={onClose}>
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Book size={18} className="text-hazard-yellow" />
            </motion.div>
            <span className="font-heading font-bold text-text-primary text-sm tracking-wider group-hover:text-hazard-yellow transition-colors">
              WIKI
            </span>
            <Radio size={10} className="text-neon-cyan animate-pulse-glow" />
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Cerrar sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-grid-line shrink-0">
          <div className="relative">
            <Search
              size={14}
              className={cn(
                "absolute left-2.5 top-1/2 -translate-y-1/2 transition-colors duration-200",
                searchFocused ? "text-hazard-yellow" : "text-text-muted"
              )}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Buscar guia..."
              className="search-glow w-full pl-8 pr-3 py-2 bg-hull-panel border border-grid-line rounded-sm text-sm font-mono text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-hazard-yellow/50 transition-all duration-200"
            />
            <AnimatePresence>
              {search && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                >
                  <X size={14} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Tree / Search results */}
        <nav className="flex-1 overflow-y-auto p-3 scrollbar-thin">
          {filtered ? (
            filtered.length > 0 ? (
              <div className="space-y-1">
                {filtered.map((node, idx) => (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                  >
                    <Link
                      href={`/wiki/${node.slug}`}
                      onClick={onClose}
                      className="block px-3 py-2 text-sm font-mono text-text-muted hover:text-text-primary hover:bg-hull-panel rounded-sm transition-all duration-200 truncate hover:translate-x-1"
                    >
                      {node.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-text-muted text-sm font-mono text-center py-8"
              >
                No se encontraron guias
              </motion.p>
            )
          ) : (
            <div className="space-y-1">
              {guideTree.children.map((child) => (
                <TreeNode key={child.id} node={child} />
              ))}
            </div>
          )}
        </nav>

        {/* Footer link back to landing */}
        <div className="p-3 border-t border-grid-line shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-text-muted hover:text-hazard-yellow transition-colors group"
          >
            <motion.img
              src="/branding/logo.svg"
              alt="Logo de Estación Capibara"
              className="w-4 h-4"
              width={16}
              height={16}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <span className="group-hover:tracking-wider transition-all duration-300">
              Estación Capibara
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}
