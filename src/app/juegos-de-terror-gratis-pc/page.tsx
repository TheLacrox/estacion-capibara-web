import type { Metadata } from "next";
import { FREE_HORROR_GAMES_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  FREE_HORROR_GAMES_PAGE,
  "scp"
);

export default function JuegosDeTerrorGratisPcPage() {
  return (
    <ServerSeoPage
      page={FREE_HORROR_GAMES_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(FREE_HORROR_GAMES_PAGE)}
    />
  );
}
