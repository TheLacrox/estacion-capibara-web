// Generates smaller variants of the landing hero art for srcset use.
// - panel-<server>-720.webp: narrower desktop panels (originals are 1100px)
// - bg-<server>-768.webp: mobile hero banners (originals are 1920px; phones
//   render the banner at ~390x150 css px, so 768w covers 2x DPR)
// Phones were downloading the full desktop art, which was most of the
// homepage LCP weight.
//
// Run after replacing any hero art: node scripts/generate-hero-variants.mjs
import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const HEROES_DIR = path.resolve(import.meta.dirname, "../public/heroes");
const VARIANTS = [
  { prefix: "panel-", width: 720 },
  { prefix: "bg-", width: 768 },
];

const files = await readdir(HEROES_DIR);
for (const { prefix, width: targetWidth } of VARIANTS) {
  const suffix = `-${targetWidth}.webp`;
  const sources = files.filter(
    (f) => f.startsWith(prefix) && f.endsWith(".webp") && !/-\d+\.webp$/.test(f)
  );
  for (const file of sources) {
    const src = path.join(HEROES_DIR, file);
    const out = path.join(HEROES_DIR, file.replace(".webp", suffix));
    const { width } = await sharp(src).metadata();
    if (width <= targetWidth) {
      console.log(`skip ${file} (already ${width}px)`);
      continue;
    }
    const info = await sharp(src)
      .resize({ width: targetWidth })
      .webp({ quality: 80 })
      .toFile(out);
    console.log(`${file} -> ${path.basename(out)} (${Math.round(info.size / 1024)}KB)`);
  }
}
