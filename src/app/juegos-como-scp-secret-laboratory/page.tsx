import type { Metadata } from "next";
import { SCP_SL_ALTERNATIVES_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SCP_SL_ALTERNATIVES_PAGE,
  "scp"
);

export default function JuegosComoScpSecretLaboratoryPage() {
  return (
    <ServerSeoPage
      page={SCP_SL_ALTERNATIVES_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_SL_ALTERNATIVES_PAGE)}
    />
  );
}
