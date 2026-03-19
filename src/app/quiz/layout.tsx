import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "¿Qué Rol de SS14 Eres? | Quiz de Space Station 14 en Español",
  description:
    "Responde 7 preguntas y descubre qué departamento y rol de Space Station 14 se adapta mejor a tu personalidad. Quiz interactivo en español.",
  alternates: { canonical: `${SITE_URL}/quiz/` },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${SITE_URL}/quiz/`,
    title: "¿Qué Rol de SS14 Eres? | Quiz Interactivo",
    description:
      "Descubre tu rol ideal en Space Station 14. Quiz de personalidad con 7 preguntas y 8 resultados posibles.",
    siteName: "Estación Capibara",
    images: [{ url: "/branding/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué Rol de SS14 Eres?",
    description:
      "Descubre tu rol ideal en Space Station 14. Quiz interactivo en español.",
    images: ["/branding/og-image.png"],
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Quiz",
        item: `${SITE_URL}/quiz/`,
      },
    ],
  };

  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
