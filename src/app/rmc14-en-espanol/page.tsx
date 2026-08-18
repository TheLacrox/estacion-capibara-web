import type { Metadata } from "next";
import { RMC14_SPANISH_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  RMC14_SPANISH_PAGE,
  "marines"
);

export default function Rmc14EnEspanolPage() {
  return (
    <ServerSeoPage
      page={RMC14_SPANISH_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(RMC14_SPANISH_PAGE)}
    />
  );
}
