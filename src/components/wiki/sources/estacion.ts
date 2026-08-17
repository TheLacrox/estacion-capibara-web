import { guideIdToSlug, guideSlugsToMeta } from "@/data/guide-lookup";
import { entitySpriteLabels, entitySprites } from "@/data/entity-sprites";
import type { WikiSourceConfig } from "../wiki-source-config";

export const estacionWikiSource: WikiSourceConfig = {
  source: "estacion",
  basePath: "/wiki",
  idToSlug: guideIdToSlug,
  slugsToMeta: guideSlugsToMeta,
  entityLabels: entitySpriteLabels,
  entitySprites,
};
