// main.ts — entrypoint for post-x-the-agent-builds-a-game-from-20261122-1709.
//
// The entry is an X post, so there is nothing to compute: this program
// only copies POST.json (the post's address) from the repository into the
// output directory, exactly as the grader expects it.
//
//   MAKEFUN_BOT_DIR     repository root (default: the current directory)
//   MAKEFUN_OUTPUT_DIR  output directory (default: "out")
//
// Run it with: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outDir, "POST.json"));
console.log(`POST.json copied to ${join(outDir, "POST.json")}`);
