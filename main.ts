import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The agent's one-word confession (5 characters): the blunt blurt of a
// machine caught mid-task with no idea what to do next.
const WORD = "panic";

// The gate accepts 1-99 characters of non-whitespace text; fail loudly
// instead of writing an entry the scorer would refuse. The entry must be
// exactly one word, so any whitespace inside it is a bug, not an entry.
if (WORD.length < 1 || WORD.length > 99 || WORD.trim().length === 0) {
  throw new Error(`entry word must be 1-99 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, no spaces allowed");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
