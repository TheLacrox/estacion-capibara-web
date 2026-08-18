import type { Metadata } from "next";
import { STARSHIP_TROOPERS_LIKE_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  STARSHIP_TROOPERS_LIKE_PAGE,
  "marines"
);

export default function JuegosParecidosAStarshipTroopersPage() {
  return (
    <ServerSeoPage
      page={STARSHIP_TROOPERS_LIKE_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(STARSHIP_TROOPERS_LIKE_PAGE)}
    />
  );
}
