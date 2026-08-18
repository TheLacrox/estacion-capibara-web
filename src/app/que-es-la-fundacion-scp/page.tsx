import type { Metadata } from "next";
import { SCP_FOUNDATION_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SCP_FOUNDATION_PAGE,
  "scp"
);

export default function QueEsLaFundacionScpPage() {
  return (
    <ServerSeoPage
      page={SCP_FOUNDATION_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_FOUNDATION_PAGE)}
    />
  );
}
