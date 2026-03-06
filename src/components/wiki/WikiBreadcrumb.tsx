"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

interface WikiBreadcrumbProps {
  breadcrumb: { slug: string; title: string }[];
}

export function WikiBreadcrumb({ breadcrumb }: WikiBreadcrumbProps) {
  return (
    <motion.nav
      className="flex items-center gap-1 text-sm font-mono text-text-muted flex-wrap mb-6"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href="/wiki"
        className="hover:text-hazard-yellow transition-colors shrink-0 hover:drop-shadow-[0_0_4px_rgba(241,196,15,0.4)]"
      >
        <Home size={14} />
      </Link>
      {breadcrumb.map((item, idx) => {
        const isLast = idx === breadcrumb.length - 1;
        return (
          <motion.span
            key={item.slug}
            className="flex items-center gap-1"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + idx * 0.05, duration: 0.25 }}
          >
            <ChevronRight size={12} className="text-neon-cyan/30 shrink-0 breadcrumb-sep" />
            {isLast ? (
              <span className="text-text-primary truncate max-w-[200px]">{item.title}</span>
            ) : (
              <Link
                href={`/wiki/${item.slug}`}
                className="hover:text-hazard-yellow transition-colors truncate max-w-[200px] hover:drop-shadow-[0_0_4px_rgba(241,196,15,0.3)]"
              >
                {item.title}
              </Link>
            )}
          </motion.span>
        );
      })}
    </motion.nav>
  );
}
