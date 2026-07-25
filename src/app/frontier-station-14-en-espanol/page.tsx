import type { Metadata } from "next";
import { FRONTIER_SPANISH_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  FRONTIER_SPANISH_PAGE
);

export default function FrontierStationEnEspanolPage() {
  return (
    <MonolithSeoPage
      page={FRONTIER_SPANISH_PAGE}
      jsonLd={createMonolithSeoSchemas(FRONTIER_SPANISH_PAGE)}
    />
  );
}
