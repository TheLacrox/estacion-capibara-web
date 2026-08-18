import type { Metadata } from "next";
import { MARINES_GETTING_STARTED_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  MARINES_GETTING_STARTED_PAGE,
  "marines"
);

export default function ComoJugarCapibaraMarinesPage() {
  return (
    <ServerSeoPage
      page={MARINES_GETTING_STARTED_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(MARINES_GETTING_STARTED_PAGE)}
    />
  );
}
