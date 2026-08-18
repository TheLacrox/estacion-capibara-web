import type { Metadata } from "next";
import { SPACE_MARINE_GAMES_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SPACE_MARINE_GAMES_PAGE,
  "marines"
);

export default function JuegosDeMarinesEspacialesPage() {
  return (
    <ServerSeoPage
      page={SPACE_MARINE_GAMES_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(SPACE_MARINE_GAMES_PAGE)}
    />
  );
}
