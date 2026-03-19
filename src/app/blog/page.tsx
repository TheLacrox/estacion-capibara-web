"use client";

import { useState } from "react";
import Link from "next/link";
import { DISCORD_URL, SS14_DOWNLOAD_URL } from "@/lib/constants";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS, BLOG_TAGS, TAG_LABELS, type BlogTag } from "@/data/blog-posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { HazardDivider } from "@/components/ui/HazardDivider";

function BlogIndex() {
  const [activeTag, setActiveTag] = useState<BlogTag | "all">("all");

  const filteredPosts =
    activeTag === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.tags.includes(activeTag));

  return (
    <>
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag("all")}
          className={`px-4 py-2 text-xs font-mono rounded-sm border transition-colors ${
            activeTag === "all"
              ? "border-hazard-yellow bg-hazard-yellow/10 text-hazard-yellow"
              : "border-grid-line text-text-muted hover:border-hazard-yellow/50"
          }`}
        >
          Todos
        </button>
        {BLOG_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 text-xs font-mono rounded-sm border transition-colors ${
              activeTag === tag
                ? "border-hazard-yellow bg-hazard-yellow/10 text-hazard-yellow"
                : "border-grid-line text-text-muted hover:border-hazard-yellow/50"
            }`}
          >
            {TAG_LABELS[tag]}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-text-muted font-mono text-sm text-center py-12">
          No hay posts con esta etiqueta todavía.
        </p>
      )}
    </>
  );
}

export default function BlogPage() {
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
              href="/wiki"
              className="text-sm font-mono text-text-muted hover:text-hazard-yellow transition-colors"
            >
              Wiki
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
        <header className="mb-12">
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
                <span className="text-text-primary">Blog</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
            Blog de Estación Capibara
          </h1>
          <p className="text-text-muted font-mono text-sm sm:text-base max-w-3xl leading-relaxed">
            Noticias, guías, patch notes y todo sobre el servidor SS14 en
            español.
          </p>

          <HazardDivider className="mt-8" />
        </header>

        <BlogIndex />
      </main>

      <Footer />
    </div>
  );
}
