import type { Metadata } from "next";
import { SPACESHIP_ROLEPLAY_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(
  SPACESHIP_ROLEPLAY_PAGE
);

export default function JuegoRoleplayEspacialConNavesPage() {
  return (
    <MonolithSeoPage
      page={SPACESHIP_ROLEPLAY_PAGE}
      jsonLd={createMonolithSeoSchemas(SPACESHIP_ROLEPLAY_PAGE)}
    />
  );
}
