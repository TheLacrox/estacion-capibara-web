import Link from "next/link";
import { DISCORD_URL } from "@/lib/constants";
import { Footer } from "@/components/layout/Footer";

interface SeoPageLayoutProps {
  children: React.ReactNode;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Wiki link shown in the sticky nav; defaults to the estación wiki. */
  wikiHref?: string;
  wikiLabel?: string;
  /** Internal server hub the "Jugar Gratis" action points to. */
  hubHref?: string;
}

export function SeoPageLayout({
  children,
  jsonLd,
  wikiHref = "/wiki/",
  wikiLabel = "Wiki Estación",
  hubHref = "/estacion/",
}: SeoPageLayoutProps) {
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <div className="min-h-screen bg-space-void">
      <nav className="sticky top-0 z-50 border-b border-grid-line bg-space-void/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-bold text-text-primary tracking-wider text-sm"
          >
            <img
              src="/branding/logo.svg"
              alt="Estación Capibara"
              className="w-7 h-7"
              width={28}
              height={28}
            />
            <span className="hidden sm:inline">
              ESTACIÓN <span className="text-hazard-yellow">CAPIBARA</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href={wikiHref}
              className="hidden md:block text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              {wikiLabel}
            </Link>
            <Link
              href={hubHref}
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Jugar Gratis
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wider bg-[#5865F2] text-white rounded-sm hover:bg-[#4752c4] transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {children}
      </main>

      <Footer />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
