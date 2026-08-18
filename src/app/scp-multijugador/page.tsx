import type { Metadata } from "next";
import { SCP_MULTIPLAYER_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SCP_MULTIPLAYER_PAGE,
  "scp"
);

export default function ScpMultijugadorPage() {
  return (
    <ServerSeoPage
      page={SCP_MULTIPLAYER_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_MULTIPLAYER_PAGE)}
    />
  );
}
