import {
  scpGuideIdToSlug,
  scpGuideSlugsToMeta,
} from "@/data/scp-guide-lookup";
import {
  scpEntitySpriteLabels,
  scpEntitySprites,
} from "@/data/scp-entity-sprites";
import type { WikiSourceConfig } from "../wiki-source-config";

export const scpWikiSource: WikiSourceConfig = {
  source: "scp",
  basePath: "/wiki-scp",
  idToSlug: scpGuideIdToSlug,
  slugsToMeta: scpGuideSlugsToMeta,
  entityLabels: scpEntitySpriteLabels,
  entitySprites: scpEntitySprites,
};
