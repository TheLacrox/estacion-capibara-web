import type { Metadata } from "next";
import { MONOLITH_ROLES_PAGE } from "@/data/monolith-seo-pages";
import {
  createMonolithSeoMetadata,
  createMonolithSeoSchemas,
  MonolithSeoPage,
} from "@/components/seo/MonolithSeoPage";

export const metadata: Metadata = createMonolithSeoMetadata(MONOLITH_ROLES_PAGE);

export default function RolesYTrabajosMonolithStationPage() {
  return (
    <MonolithSeoPage
      page={MONOLITH_ROLES_PAGE}
      jsonLd={createMonolithSeoSchemas(MONOLITH_ROLES_PAGE)}
    />
  );
}
