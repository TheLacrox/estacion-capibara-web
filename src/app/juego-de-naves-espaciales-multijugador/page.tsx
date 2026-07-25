import type { Metadata } from "next";
import { MULTIPLAYER_SPACESHIPS_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  MULTIPLAYER_SPACESHIPS_PAGE
);

export default function JuegoDeNavesEspacialesMultijugadorPage() {
  return (
    <MonolithSeoPage
      page={MULTIPLAYER_SPACESHIPS_PAGE}
      jsonLd={createMonolithSeoSchemas(MULTIPLAYER_SPACESHIPS_PAGE)}
    />
  );
}
