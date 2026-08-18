import type { Metadata } from "next";
import { ALIEN_GAMES_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  ALIEN_GAMES_PAGE,
  "marines"
);

export default function JuegosDeAliensParaPcPage() {
  return (
    <ServerSeoPage
      page={ALIEN_GAMES_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(ALIEN_GAMES_PAGE)}
    />
  );
}
