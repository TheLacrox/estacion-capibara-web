import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Estación Capibara — Noticias, Guías y Patch Notes de SS14",
  description:
    "Blog oficial de Estación Capibara. Noticias, guías, patch notes y todo sobre el servidor de Space Station 14 en español.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/blog/`,
    title: "Blog de Estación Capibara",
    description:
      "Noticias, guías, patch notes y todo sobre el servidor SS14 en español.",
    siteName: "Estación Capibara",
    images: [{ url: "/branding/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog de Estación Capibara",
    description:
      "Noticias, guías, patch notes y todo sobre SS14 en español.",
    images: ["/branding/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Section-level JSON-LD lives in the blog index page, not here: this layout
  // also wraps /blog/[slug]/, and injecting a second BreadcrumbList there
  // conflicts with the post's own 3-level trail.
  return <>{children}</>;
}
