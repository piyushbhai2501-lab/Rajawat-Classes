import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, ".output", "public");
const distDir = path.join(rootDir, "dist");
const buildDir = path.join(rootDir, "build");

if (fs.existsSync(sourceDir)) {
  console.log("[Hostinger Deploy Prep] Copying .output/public into dist and build directories...");
  
  // Ensure dist exists and copy all pre-rendered files into dist
  fs.mkdirSync(distDir, { recursive: true });
  fs.cpSync(sourceDir, distDir, { recursive: true });

  // Ensure build exists and copy all pre-rendered files into build (for React framework preset)
  fs.mkdirSync(buildDir, { recursive: true });
  fs.cpSync(sourceDir, buildDir, { recursive: true });

  console.log("[Hostinger Deploy Prep] Successfully populated dist/ and build/ with index.html and assets!");
} else {
  console.warn("[Hostinger Deploy Prep] Warning: .output/public directory not found.");
}
