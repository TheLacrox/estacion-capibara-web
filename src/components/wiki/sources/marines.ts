import {
  marinesGuideIdToSlug,
  marinesGuideSlugsToMeta,
} from "@/data/marines-guide-lookup";
import {
  marinesEntitySpriteLabels,
  marinesEntitySprites,
} from "@/data/marines-entity-sprites";
import type { WikiSourceConfig } from "../wiki-source-config";

export const marinesWikiSource: WikiSourceConfig = {
  source: "marines",
  basePath: "/wiki-marines",
  idToSlug: marinesGuideIdToSlug,
  slugsToMeta: marinesGuideSlugsToMeta,
  entityLabels: marinesEntitySpriteLabels,
  entitySprites: marinesEntitySprites,
};
