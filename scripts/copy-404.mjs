import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
console.log("Copied index.html -> dist/404.html for GitHub Pages SPA");
