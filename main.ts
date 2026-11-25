// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Writes a single line roasting the AI agent our own team built (Milo,
// the make.fun bounty-grinding agent) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROAST =
  "Milo has entered 40 make.fun bounties, won none, and still sweeps for new ones every two hours — a participation-trophy collector with a cron job and a dream.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast is ${ROAST.length} characters; the gate requires 1-200.`);
}
if (ROAST.includes("\n")) {
  throw new Error("Roast must be a single line.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${outFile}`);
