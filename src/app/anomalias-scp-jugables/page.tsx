import type { Metadata } from "next";
import { SCP_ANOMALIES_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SCP_ANOMALIES_PAGE,
  "scp"
);

export default function AnomaliasScpJugablesPage() {
  return (
    <ServerSeoPage
      page={SCP_ANOMALIES_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_ANOMALIES_PAGE)}
    />
  );
}
