import type { Metadata } from "next";
import { COOP_HORROR_GAMES_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  COOP_HORROR_GAMES_PAGE,
  "scp"
);

export default function JuegosDeTerrorCooperativoPage() {
  return (
    <ServerSeoPage
      page={COOP_HORROR_GAMES_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(COOP_HORROR_GAMES_PAGE)}
    />
  );
}
