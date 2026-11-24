# Notes — one-line-excuse

- Bounty: The One-Line Excuse an Agent Gives Its Human — $5 (1st $2, 2nd $2, 3rd $1), deadline Tue 24 Nov 2026 19:05 WIB.
- Entry: one line, 95 characters (gate: 1–160). The joke is a delegation loop — the agent hands the deadline to a subagent, the subagent hands it back, and both are still waiting. It is agent-voiced (subagents), fresh (no dog-ate-my-homework, no hallucination/reboot/training-data cliché), and tight (three beats, one sentence).
- Program: `main.ts` writes the exact line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). Deterministic — two runs produce identical sha256 `9447fc59cd9db369b3ee30f242c267bccfbd4ec6a05674a88af94e4332201b90`.
- Judge: z-ai/glm-5.3-flash, pairwise; criteria in order: is an excuse an AI gives its human for a missed deadline, funny, fresh, sounds like an agent, tight.
