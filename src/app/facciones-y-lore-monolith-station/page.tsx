import type { Metadata } from "next";
import { MONOLITH_FACTIONS_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  MONOLITH_FACTIONS_PAGE
);

export default function FaccionesYLoreMonolithStationPage() {
  return (
    <MonolithSeoPage
      page={MONOLITH_FACTIONS_PAGE}
      jsonLd={createMonolithSeoSchemas(MONOLITH_FACTIONS_PAGE)}
    />
  );
}
