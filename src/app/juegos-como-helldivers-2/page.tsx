import type { Metadata } from "next";
import { HELLDIVERS_LIKE_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  HELLDIVERS_LIKE_PAGE,
  "marines"
);

export default function JuegosComoHelldivers2Page() {
  return (
    <ServerSeoPage
      page={HELLDIVERS_LIKE_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(HELLDIVERS_LIKE_PAGE)}
    />
  );
}
