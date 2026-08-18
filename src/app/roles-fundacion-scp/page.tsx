import type { Metadata } from "next";
import { SCP_ROLES_PAGE } from "@/data/scp-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  SCP_ROLES_PAGE,
  "scp"
);

export default function RolesFundacionScpPage() {
  return (
    <ServerSeoPage
      page={SCP_ROLES_PAGE}
      server="scp"
      jsonLd={createServerSeoSchemas(SCP_ROLES_PAGE)}
    />
  );
}
