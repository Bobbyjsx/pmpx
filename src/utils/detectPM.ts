import * as fs from "node:fs";
import * as path from "node:path";
import { getConfig } from "./config";

function detectPM(cwd: string = process.cwd()): string {
   const configPM = getConfig("pm");

   if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
   if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
   if (fs.existsSync(path.join(cwd, "package-lock.json"))) return "npm";

   return configPM || "yarn"; // fallback
}

export { detectPM };
