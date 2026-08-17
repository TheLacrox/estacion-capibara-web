import {
  monolithGuideIdToSlug,
  monolithGuideSlugsToMeta,
} from "@/data/monolith-guide-lookup";
import {
  monolithEntitySpriteLabels,
  monolithEntitySprites,
} from "@/data/monolith-entity-sprites";
import type { WikiSourceConfig } from "../wiki-source-config";

export const monolithWikiSource: WikiSourceConfig = {
  source: "monolith",
  basePath: "/wiki-monolith",
  idToSlug: monolithGuideIdToSlug,
  slugsToMeta: monolithGuideSlugsToMeta,
  entityLabels: monolithEntitySpriteLabels,
  entitySprites: monolithEntitySprites,
};
