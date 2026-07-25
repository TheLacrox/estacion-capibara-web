import type { Metadata } from "next";
import { MONOLITH_SPANISH_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  MONOLITH_SPANISH_PAGE
);

export default function MonolithStationEnEspanolPage() {
  return (
    <MonolithSeoPage
      page={MONOLITH_SPANISH_PAGE}
      jsonLd={createMonolithSeoSchemas(MONOLITH_SPANISH_PAGE)}
    />
  );
}
