"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import type { ServerDescriptor } from "@/data/servers";

export function WikiCtaSection({ server }: { server: ServerDescriptor }) {
  return (
    <section className="relative py-20 bg-space-void overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${server.accentVar}, transparent)`,
        }}
      />
      <FadeInView className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <BookOpen
          size={36}
          className="mx-auto mb-5"
          style={{ color: server.accentVar }}
        />
        <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-4">
          Toda la información, en español
        </h2>
        <p className="text-text-muted text-lg mb-8">
          La {server.wikiLabel} recopila las guías del servidor traducidas y
          organizadas: roles, sistemas, reglas y consejos para empezar.
        </p>
        <Link
          href={`${server.wikiBasePath}/`}
          className="inline-flex items-center gap-2 rounded-sm px-6 py-3 font-heading font-bold text-sm text-space-void transition-transform hover:scale-105"
          style={{ backgroundColor: server.accentVar }}
        >
          Abrir {server.wikiLabel}
          <ArrowRight size={16} />
        </Link>
      </FadeInView>
    </section>
  );
}
