import type { Metadata } from "next";
import { MONOLITH_GETTING_STARTED_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  MONOLITH_GETTING_STARTED_PAGE
);

export default function ComoJugarCapibaraMonolithPage() {
  return (
    <MonolithSeoPage
      page={MONOLITH_GETTING_STARTED_PAGE}
      jsonLd={createMonolithSeoSchemas(MONOLITH_GETTING_STARTED_PAGE)}
    />
  );
}
