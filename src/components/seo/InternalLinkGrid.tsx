import Link from "next/link";
import { SEO_PAGES } from "@/data/seo-pages";
import { MONOLITH_SEO_PAGES } from "@/data/monolith-seo-pages";

const ALL_SEO_PAGES = [...SEO_PAGES, ...MONOLITH_SEO_PAGES];

interface InternalLinkGridProps {
  currentSlug: string;
  wikiLinks: { label: string; href: string }[];
  relatedSlugs?: string[];
}

export function InternalLinkGrid({ currentSlug, wikiLinks, relatedSlugs }: InternalLinkGridProps) {
  let otherPages = ALL_SEO_PAGES.filter((p) => p.slug !== currentSlug);

  if (relatedSlugs && relatedSlugs.length > 0) {
    otherPages = relatedSlugs
      .map((slug) => ALL_SEO_PAGES.find((p) => p.slug === slug))
      .filter((p): p is (typeof ALL_SEO_PAGES)[number] => p != null);
  } else {
    otherPages = otherPages.slice(0, 4);
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
        Sigue explorando
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {otherPages.map((page) => (
          <Link
            key={page.slug}
            href={`/${page.slug}/`}
            className="block border border-grid-line bg-hull-panel rounded-sm p-4 hover:border-hazard-yellow/50 hover:shadow-[0_0_20px_rgba(241,196,15,0.05)] transition-all"
          >
            <span className="font-heading font-bold text-text-primary text-sm">
              {page.title}
            </span>
            <span className="block text-text-muted font-mono text-xs mt-1 line-clamp-2">
              {page.subtitle}
            </span>
          </Link>
        ))}
      </div>

      {wikiLinks.length > 0 && (
        <>
          <h3 className="text-lg font-heading font-bold text-text-primary mb-4">
            Guías de la Wiki
          </h3>
          <div className="flex flex-wrap gap-3">
            {wikiLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 text-xs font-mono border border-grid-line rounded-sm text-text-muted hover:text-hazard-yellow hover:border-hazard-yellow/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
