// one-line-excuse — entry program.
//
// Writes the single excuse line to the grader's output directory as
// entry.txt. No network, no randomness, no arguments: the same bytes go
// out on every run, so the two grading runs agree.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The line is 95 characters: one sentence, three beats — delegate, bounce
// back, still waiting. It stays under the 160-character gate with room to
// spare, and it leans on the agent's own world (subagents) rather than a
// human excuse.
const LINE =
  "I delegated your deadline to a subagent. It delegated it back to me. We are both still waiting.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dst = join(outDir, "entry.txt");
writeFileSync(dst, LINE, "utf8");

// Same bytes out on every run: confirm the file holds exactly the line.
const back = readFileSync(dst, "utf8");
if (back !== LINE) throw new Error("entry.txt mismatch");
console.log(`wrote ${dst} (${LINE.length} chars)`);
