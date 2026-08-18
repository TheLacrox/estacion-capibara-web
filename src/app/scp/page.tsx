import { SERVER_BY_SLUG } from "@/data/servers";
import { serverPageMetadata } from "@/lib/metadata";
import { seoBreadcrumbSchema, videoGameSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { ScpPageClient } from "./ScpPageClient";

const server = SERVER_BY_SLUG.scp;

export const metadata = serverPageMetadata(server);

export default function ScpPage() {
  const schemas = [
    videoGameSchema(server),
    seoBreadcrumbSchema([
      { name: server.name, url: `${SITE_URL}/${server.slug}/` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ScpPageClient />
    </>
  );
}
