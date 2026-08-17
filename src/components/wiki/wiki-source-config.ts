import type { GuideMeta } from "@/data/guide-types";

/**
 * Per-wiki data bundle threaded through the client components. Each wiki's
 * config module imports only its own lookup and sprite maps so Next can
 * code-split the maps per wiki instead of bundling all four everywhere.
 */
export interface WikiSourceConfig {
  source: "estacion" | "monolith" | "marines" | "scp";
  basePath: string;
  idToSlug: Record<string, string>;
  slugsToMeta: Record<string, GuideMeta>;
  entityLabels: Record<string, string>;
  entitySprites: Record<string, string>;
}
