import Link from "next/link";
import { HazardDivider } from "@/components/ui/HazardDivider";

interface Breadcrumb {
  label: string;
  href: string;
}

interface SeoHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
}

export function SeoHero({ title, subtitle, breadcrumbs }: SeoHeroProps) {
  return (
    <header className="mb-12">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-xs font-mono text-text-muted">
          <li>
            <Link href="/" className="hover:text-hazard-yellow transition-colors">
              Inicio
            </Link>
          </li>
          {breadcrumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-grid-line">/</span>
              {i === breadcrumbs.length - 1 ? (
                <span className="text-text-primary">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-hazard-yellow transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
        {title}
      </h1>
      <p className="text-text-muted font-mono text-sm sm:text-base max-w-3xl leading-relaxed">
        {subtitle}
      </p>

      <HazardDivider className="mt-8" />
    </header>
  );
}
