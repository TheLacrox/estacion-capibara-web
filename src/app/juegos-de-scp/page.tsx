import type { Metadata } from "next";
import { SCP_GAMES_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SCP_GAMES_PAGE,
  "scp"
);

export default function JuegosDeScpPage() {
  return (
    <ServerSeoPage
      page={SCP_GAMES_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_GAMES_PAGE)}
    />
  );
}
