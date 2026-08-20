import { SERVER_BY_SLUG } from "@/data/servers";
import { serverPageMetadata } from "@/lib/metadata";
import { gameServerSchema, seoBreadcrumbSchema, videoGameSS14Schema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { MarinesPageClient } from "./MarinesPageClient";

const server = SERVER_BY_SLUG.marines;

export const metadata = serverPageMetadata(server);

export default function MarinesPage() {
  const schemas = [
    videoGameSS14Schema(),
    gameServerSchema(server),
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
      <MarinesPageClient />
    </>
  );
}
