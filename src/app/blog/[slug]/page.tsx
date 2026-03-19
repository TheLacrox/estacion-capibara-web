import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, DISCORD_URL, SS14_DOWNLOAD_URL } from "@/lib/constants";
import { articleSchema, seoBreadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS, BLOG_SLUGS, TAG_LABELS, type BlogTag } from "@/data/blog-posts";
import { Footer } from "@/components/layout/Footer";
import { CtaBlock } from "@/components/seo/CtaBlock";
import { HazardDivider } from "@/components/ui/HazardDivider";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post no encontrado" };

  return {
    title: `${post.title} | Blog Estación Capibara`,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url: `${SITE_URL}/blog/${post.slug}/`,
      title: post.title,
      description: post.description,
      siteName: "Estación Capibara",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [{ url: "/branding/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/branding/og-image.png"],
    },
  };
}

const TAG_COLORS: Record<string, string> = {
  noticias: "border-neon-cyan/30 text-neon-cyan",
  "guías": "border-hazard-yellow/30 text-hazard-yellow",
  eventos: "border-nebula-purple/30 text-nebula-purple",
  recaps: "border-green-400/30 text-green-400",
  "patch-notes": "border-alert-red/30 text-alert-red",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-space-void flex items-center justify-center">
        <p className="text-text-muted font-mono">Post no encontrado</p>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      p.tags.some((t) => post.tags.includes(t))
  ).slice(0, 3);

  const jsonLd = [
    seoBreadcrumbSchema([
      { name: "Blog", url: `${SITE_URL}/blog/` },
      { name: post.title, url: `${SITE_URL}/blog/${post.slug}/` },
    ]),
    articleSchema({
      title: post.title,
      slug: post.slug,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      basePath: "/blog",
    }),
  ];

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
              href="/blog"
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/wiki"
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Wiki
            </Link>
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <li>
              <Link
                href="/"
                className="hover:text-hazard-yellow transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-grid-line">/</span>
              <Link
                href="/blog"
                className="hover:text-hazard-yellow transition-colors"
              >
                Blog
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-grid-line">/</span>
              <span className="text-text-primary truncate max-w-[200px]">
                {post.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-mono px-2 py-0.5 rounded-sm border ${TAG_COLORS[tag] ?? "border-text-muted/30 text-text-muted"}`}
              >
                {TAG_LABELS[tag as BlogTag] ?? tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-text-muted font-mono text-xs">
            <span>Por {post.author}</span>
            <span className="text-grid-line">|</span>
            <time>
              {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <HazardDivider className="mt-6" />
        </header>

        {/* Content */}
        <article
          className="blog-content text-text-muted font-mono text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-grid-line">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
              Posts relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}/`}
                  className="block border border-grid-line bg-hull-panel rounded-sm p-4 hover:border-hazard-yellow/50 transition-all"
                >
                  <span className="font-heading font-bold text-text-primary text-sm">
                    {rp.title}
                  </span>
                  <span className="block text-text-muted font-mono text-xs mt-1 line-clamp-2">
                    {rp.description}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <CtaBlock />
      </main>

      <Footer />

      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
