// news-image-20261119-entry-a: the entry is the image beside this file.
// This program copies entry.png into the output directory make.fun grades.
// Node 22, standard library only. No network, no randomness: run it twice
// and both runs write the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = readFileSync(join(here, "entry.png"));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
