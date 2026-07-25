import Link from "next/link";
import { DISCORD_URL, SS14_DOWNLOAD_URL } from "@/lib/constants";
import { Footer } from "@/components/layout/Footer";

interface SeoPageLayoutProps {
  children: React.ReactNode;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function SeoPageLayout({ children, jsonLd }: SeoPageLayoutProps) {
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
              href="/wiki/"
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Wiki Estación
            </Link>
            <Link
              href="/wiki-monolith/"
              className="hidden md:block text-sm font-mono text-neon-cyan hover:text-hazard-yellow transition-colors"
            >
              Wiki Monolith
            </Link>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Discord
            </a>
            <a
              href={SS14_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wider bg-hazard-yellow text-[#0b0f19] rounded-sm hover:bg-hazard-orange transition-colors"
            >
              Jugar Gratis
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
