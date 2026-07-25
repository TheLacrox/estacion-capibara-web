import type { Metadata } from "next";
import { MONOLITH_ECONOMY_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  MONOLITH_ECONOMY_PAGE
);

export default function EconomiaMonolithStationPage() {
  return (
    <MonolithSeoPage
      page={MONOLITH_ECONOMY_PAGE}
      jsonLd={createMonolithSeoSchemas(MONOLITH_ECONOMY_PAGE)}
    />
  );
}
