import type { Metadata } from "next";
import { SCP_HUB_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(SCP_HUB_PAGE, "scp");

export default function ScpEnSpaceStation14Page() {
  return (
    <ServerSeoPage
      page={SCP_HUB_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_HUB_PAGE)}
    />
  );
}
