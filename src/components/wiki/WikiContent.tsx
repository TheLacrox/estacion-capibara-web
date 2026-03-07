"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, FileText, Clock } from "lucide-react";
import { type GuidePage, guidePages } from "@/data/guides";
import { GuideMarkup } from "./GuideMarkup";
import { WikiBreadcrumb } from "./WikiBreadcrumb";
import { LAST_CONTENT_UPDATE } from "@/lib/constants";

interface WikiContentProps {
  guide: GuidePage;
}

const childCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const },
  }),
};

export function WikiContent({ guide }: WikiContentProps) {
  const headings = Array.from(
    guide.content.matchAll(/^(#{2,3})\s+(.+)$/gm)
  ).map((m) => ({
    level: m[1].length,
    text: m[2].replace(/\[.*?\]/g, "").replace(/<[^>]+>/g, "").trim(),
    id: m[2]
      .replace(/\[.*?\]/g, "")
      .replace(/<[^>]+>/g, "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-"),
  }));

  const childGuides = guide.childSlugs
    .map((slug) => guidePages[slug])
    .filter(Boolean);

  return (
    <div className="flex gap-8 w-full max-w-full">
      {/* Main content */}
      <article className="flex-1 min-w-0">
        <WikiBreadcrumb breadcrumb={guide.breadcrumb} />

        <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted/60 mb-4">
          <Clock size={12} />
          <time dateTime={LAST_CONTENT_UPDATE}>
            Actualizado: {new Date(LAST_CONTENT_UPDATE).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <GuideMarkup content={guide.content} />
        </motion.div>

        {/* Child guide cards */}
        {childGuides.length > 0 && (
          <motion.div
            className="mt-10 pt-6 border-t border-grid-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
              <FileText size={18} className="text-neon-cyan" />
              Subguias
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {childGuides.map((child, idx) => (
                <motion.div
                  key={child.slug}
                  custom={idx}
                  variants={childCardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={`/wiki/${child.slug}`}
                    className="wiki-card holo-shimmer group relative block p-4 rounded-sm border border-grid-line bg-hull-panel/80 overflow-hidden"
                  >
                    {/* Hover glow line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hazard-yellow to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                    <span className="text-sm font-heading font-bold text-text-primary group-hover:text-hazard-yellow transition-colors duration-200 block">
                      {child.title}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-text-muted mt-1.5 group-hover:text-neon-cyan/70 transition-colors duration-200">
                      Ver guia
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        <ArrowRight size={12} />
                      </motion.span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Previous / Next navigation */}
        {guide.parentSlug && (
          <motion.div
            className="mt-8 pt-6 border-t border-grid-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={`/wiki/${guide.parentSlug}`}
              className="group inline-flex items-center gap-2 text-sm font-mono text-text-muted hover:text-hazard-yellow transition-all duration-200"
            >
              <motion.span
                className="inline-block"
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <ArrowLeft size={14} />
              </motion.span>
              <span className="group-hover:tracking-wide transition-all duration-200">
                Volver
              </span>
            </Link>
          </motion.div>
        )}
      </article>

      {/* Table of contents — desktop only */}
      {headings.length > 2 && (
        <motion.aside
          className="hidden lg:block w-56 shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="sticky top-20">
            <h4 className="text-xs font-heading font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-neon-cyan animate-pulse-glow" />
              En esta pagina
            </h4>
            <nav className="space-y-1 border-l border-grid-line">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className="toc-link block text-xs font-mono text-text-muted hover:text-hazard-yellow transition-all duration-200 truncate"
                  style={{ paddingLeft: h.level === 2 ? "12px" : "24px", "--toc-pad": h.level === 2 ? "12px" : "24px" } as React.CSSProperties}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </div>
        </motion.aside>
      )}
    </div>
  );
}
