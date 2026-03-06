import Link from "next/link";
import type { Metadata } from "next";
import { guideTree } from "@/data/guides";
import { WikiIndexClient } from "./WikiIndexClient";

export const metadata: Metadata = {
  title: "Wiki - Estacion Capibara | Guias de Space Station 14",
  description:
    "Guias completas para Space Station 14 en espanol. Departamentos, trabajos, antagonistas, supervivencia y mas.",
};

export default function WikiPage() {
  return <WikiIndexClient tree={guideTree} />;
}
