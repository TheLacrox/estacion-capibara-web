import type { Metadata } from "next";
import { XENONIDS_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  XENONIDS_PAGE,
  "marines"
);

export default function XenonidosRmc14Page() {
  return (
    <ServerSeoPage
      page={XENONIDS_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(XENONIDS_PAGE)}
    />
  );
}
