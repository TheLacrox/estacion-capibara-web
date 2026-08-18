import type { Metadata } from "next";
import { CM_SS13_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  CM_SS13_PAGE,
  "marines"
);

export default function CmSs13EnEspanolPage() {
  return (
    <ServerSeoPage
      page={CM_SS13_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(CM_SS13_PAGE)}
    />
  );
}
