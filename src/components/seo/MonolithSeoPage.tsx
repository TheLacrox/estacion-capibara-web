import type { Metadata } from "next";
import type { MonolithSeoPageData } from "@/data/monolith-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

interface MonolithSeoPageProps {
  page: MonolithSeoPageData;
  jsonLd: Record<string, unknown>[];
}

export function createMonolithSeoMetadata(
  page: MonolithSeoPageData
): Metadata {
  return createServerSeoMetadata(page, "monolith");
}

export function createMonolithSeoSchemas(page: MonolithSeoPageData) {
  return createServerSeoSchemas(page);
}

export function MonolithSeoPage({ page, jsonLd }: MonolithSeoPageProps) {
  return <ServerSeoPage page={page} server="monolith" jsonLd={jsonLd} />;
}
