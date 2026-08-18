import type { Metadata } from "next";
import { MARINE_ROLES_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  MARINE_ROLES_PAGE,
  "marines"
);

export default function RolesYEscuadrasMarinesRmc14Page() {
  return (
    <ServerSeoPage
      page={MARINE_ROLES_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(MARINE_ROLES_PAGE)}
    />
  );
}
