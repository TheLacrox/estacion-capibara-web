import type { Metadata } from "next";
import { ASYMMETRIC_PVP_PAGE } from "@/data/marines-seo-pages";
import {
  createServerSeoMetadata,
  createServerSeoSchemas,
  ServerSeoPage,
} from "@/components/seo/ServerSeoPage";

export const metadata: Metadata = createServerSeoMetadata(
  ASYMMETRIC_PVP_PAGE,
  "marines"
);

export default function JuegosPvpAsimetricoPage() {
  return (
    <ServerSeoPage
      page={ASYMMETRIC_PVP_PAGE}
      server="marines"
      jsonLd={createServerSeoSchemas(ASYMMETRIC_PVP_PAGE)}
    />
  );
}
