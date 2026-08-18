import type { Metadata } from "next";
import { SCP_GETTING_STARTED_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SCP_GETTING_STARTED_PAGE,
  "scp"
);

export default function ComoJugarCapibaraScpPage() {
  return (
    <ServerSeoPage
      page={SCP_GETTING_STARTED_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_GETTING_STARTED_PAGE)}
    />
  );
}
