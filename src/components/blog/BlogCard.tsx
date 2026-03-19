import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";
import { TAG_LABELS, type BlogTag } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
}

const TAG_COLORS: Record<string, string> = {
  noticias: "border-neon-cyan/30 text-neon-cyan",
  "guías": "border-hazard-yellow/30 text-hazard-yellow",
  eventos: "border-nebula-purple/30 text-nebula-purple",
  recaps: "border-green-400/30 text-green-400",
  "patch-notes": "border-alert-red/30 text-alert-red",
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="block border border-grid-line bg-hull-panel rounded-sm p-5 hover:border-hazard-yellow/50 hover:shadow-[0_0_20px_rgba(241,196,15,0.05)] transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-mono px-2 py-0.5 rounded-sm border ${TAG_COLORS[tag] ?? "border-text-muted/30 text-text-muted"}`}
            >
              {TAG_LABELS[tag as BlogTag] ?? tag}
            </span>
          ))}
        </div>
        <time className="shrink-0 text-text-muted/60 font-mono text-xs">
          {new Date(post.publishedAt).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>
      <h3 className="font-heading font-bold text-text-primary text-sm mb-2">
        {post.title}
      </h3>
      <p className="text-text-muted font-mono text-xs leading-relaxed line-clamp-2">
        {post.description}
      </p>
    </Link>
  );
}
