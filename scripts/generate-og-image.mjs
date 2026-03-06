// Generate OG image (1200x630) for social sharing
// Uses the logo SVG + dark background + text overlay
import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const logoSvg = readFileSync(join(ROOT, "public/branding/logo.svg"), "utf-8");

// Resize logo to fit
const logoSize = 200;
const logoBuffer = await sharp(Buffer.from(logoSvg))
  .resize(logoSize, logoSize)
  .png()
  .toBuffer();

// Create text overlay as SVG
const textSvg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700');
    .title { font-family: 'Space Grotesk', Arial, sans-serif; font-weight: 700; fill: #ffffff; }
    .subtitle { font-family: 'Space Grotesk', Arial, sans-serif; font-weight: 700; fill: #F1C40F; }
    .desc { font-family: Arial, sans-serif; fill: #a0a8b8; }
  </style>
  <text x="600" y="420" text-anchor="middle" class="title" font-size="64">ESTACION CAPIBARA</text>
  <text x="600" y="490" text-anchor="middle" class="subtitle" font-size="32">SPACE STATION 14</text>
  <text x="600" y="545" text-anchor="middle" class="desc" font-size="22">Servidor de Space Station 14 en Español | Comunidad Hispana</text>
</svg>`;

const textBuffer = await sharp(Buffer.from(textSvg)).png().toBuffer();

// Compose: dark bg + logo + text
await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 4,
    background: { r: 11, g: 15, b: 25, alpha: 255 }, // space-void
  },
})
  .composite([
    // Subtle gradient overlay
    {
      input: Buffer.from(
        `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#F1C40F" stop-opacity="0.08"/>
              <stop offset="100%" stop-color="#0b0f19" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
          <line x1="0" y1="629" x2="${WIDTH}" y2="629" stroke="#F1C40F" stroke-width="3"/>
        </svg>`
      ),
      top: 0,
      left: 0,
    },
    // Logo centered near top
    {
      input: logoBuffer,
      top: 80,
      left: Math.round((WIDTH - logoSize) / 2),
    },
    // Text
    {
      input: textBuffer,
      top: 0,
      left: 0,
    },
  ])
  .png()
  .toFile(join(ROOT, "public/branding/og-image.png"));

console.log("OG image generated: public/branding/og-image.png");
