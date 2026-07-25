import type { Metadata } from "next";
import { SPACE_COOP_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(SPACE_COOP_PAGE);

export default function JuegoEspacialCooperativoPage() {
  return (
    <MonolithSeoPage
      page={SPACE_COOP_PAGE}
      jsonLd={createMonolithSeoSchemas(SPACE_COOP_PAGE)}
    />
  );
}
