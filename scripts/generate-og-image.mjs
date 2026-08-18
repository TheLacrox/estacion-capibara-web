// Generate OG images (1200x630) for social sharing:
// the community-wide og-image.png plus one og-<slug>.png per server.
import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

// Mirrors src/data/servers.ts (that module is TS and imports React icons,
// so the few fields needed here are duplicated instead of imported).
const VARIANTS = [
  {
    file: "og-image.png",
    title: "ESTACION CAPIBARA",
    subtitle: "SPACE STATION 14",
    description: "Cuatro servidores de Space Station 14 en Español | Comunidad Hispana",
    accent: "#F1C40F",
    logo: "public/branding/logo.svg",
  },
  {
    file: "og-estacion.png",
    title: "ESTACION CAPIBARA",
    subtitle: "LA EXPERIENCIA DE ESTACION",
    description: "Departamentos, economía con Spesos y antagonistas | SS14 en Español",
    accent: "#F1C40F",
    logo: "public/branding/logo.svg",
  },
  {
    file: "og-marines.png",
    title: "CAPIBARA MARINES",
    subtitle: "OPERACIONES MILITARES",
    description: "Marines coloniales contra xenomorfos | SS14 en Español",
    accent: "#7FB069",
    logo: "public/branding/logo.svg",
  },
  {
    file: "og-scp.png",
    title: "CAPIBARA SCP",
    subtitle: "CONTENCION Y ANOMALIAS",
    description: "La Fundación SCP en Space Station 14 | SS14 en Español",
    accent: "#A55EEA",
    logo: "public/branding/logo.svg",
  },
  {
    file: "og-monolith.png",
    title: "CAPIBARA MONOLITH",
    subtitle: "FRONTERA, NAVES Y FACCIONES",
    description: "Economía persistente y expediciones en el Sector Colossus | SS14 en Español",
    accent: "#00ffff",
    logo: "public/branding/monolith-logo.svg",
  },
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function generateVariant(variant) {
  const logoSvg = readFileSync(join(ROOT, variant.logo), "utf-8");
  const logoSize = 200;
  const logoBuffer = await sharp(Buffer.from(logoSvg))
    .resize(logoSize, logoSize)
    .png()
    .toBuffer();

  const textSvg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font-family: 'Space Grotesk', Arial, sans-serif; font-weight: 700; fill: #ffffff; }
    .subtitle { font-family: 'Space Grotesk', Arial, sans-serif; font-weight: 700; fill: ${variant.accent}; }
    .desc { font-family: Arial, sans-serif; fill: #a0a8b8; }
  </style>
  <text x="600" y="420" text-anchor="middle" class="title" font-size="64">${escapeXml(variant.title)}</text>
  <text x="600" y="490" text-anchor="middle" class="subtitle" font-size="32">${escapeXml(variant.subtitle)}</text>
  <text x="600" y="545" text-anchor="middle" class="desc" font-size="22">${escapeXml(variant.description)}</text>
</svg>`;

  const textBuffer = await sharp(Buffer.from(textSvg)).png().toBuffer();

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: 11, g: 15, b: 25, alpha: 255 }, // space-void
    },
  })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stop-color="${variant.accent}" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="#0b0f19" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
            <line x1="0" y1="629" x2="${WIDTH}" y2="629" stroke="${variant.accent}" stroke-width="3"/>
          </svg>`
        ),
        top: 0,
        left: 0,
      },
      {
        input: logoBuffer,
        top: 80,
        left: Math.round((WIDTH - logoSize) / 2),
      },
      {
        input: textBuffer,
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toFile(join(ROOT, "public/branding", variant.file));
}

for (const variant of VARIANTS) {
  await generateVariant(variant);
  console.log(`OG image generated: public/branding/${variant.file}`);
}
