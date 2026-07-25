import type { Metadata } from "next";
import { MONOLITH_EXPEDITIONS_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  MONOLITH_EXPEDITIONS_PAGE
);

export default function ExpedicionesMonolithStationPage() {
  return (
    <MonolithSeoPage
      page={MONOLITH_EXPEDITIONS_PAGE}
      jsonLd={createMonolithSeoSchemas(MONOLITH_EXPEDITIONS_PAGE)}
    />
  );
}
