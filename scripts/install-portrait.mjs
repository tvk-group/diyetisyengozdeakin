#!/usr/bin/env node
/**
 * Install Gözde Akın professional portrait across site image slots.
 *
 * Usage:
 *   npm run portrait:install
 *   npm run portrait:install -- path/to/your-photo.jpg
 *
 * Default source: public/images/gozde/gozde-portrait-source.jpg
 */
import { execSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "public/images/gozde");
const defaultSource = path.join(outDir, "gozde-portrait-source.jpg");
const source = path.resolve(process.argv[2] || defaultSource);

if (!existsSync(source)) {
  console.error(`\nPortrait source not found: ${source}`);
  console.error("\nSave your professional photo as:");
  console.error("  public/images/gozde/gozde-portrait-source.jpg");
  console.error("\nThen run: npm run portrait:install\n");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

const variants = [
  { name: "gozde-memorial-hero.jpg", width: 1200, height: 1500 },
  { name: "gozde-office-portrait.jpg", width: 1200, height: 1500 },
  { name: "profile.jpg", width: 1200, height: 630 },
];

for (const { name, width, height } of variants) {
  const output = path.join(outDir, name);
  const filter = `scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height}`;
  execSync(
    `ffmpeg -y -loglevel error -i "${source}" -vf "${filter}" -q:v 2 "${output}"`,
    { stdio: "inherit" }
  );
  console.log(`✓ ${name}`);
}

// Backup original upload
const backup = path.join(outDir, "gozde-portrait-source.jpg");
if (path.resolve(source) !== path.resolve(backup)) {
  copyFileSync(source, backup);
}

console.log("\nPortrait installed for hero, about, contact, and SEO images.");
