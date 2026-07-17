---
name: retro
description: Use when running a periodic engineering retrospective — analyzing what shipped, commit and delivery patterns, per-contributor breakdowns, and what broke — to produce praise, growth areas, and one process change.
---

# Retro

A recurring look back at a working period, grounded in the actual record —
commits, merges, deploys, incidents — rather than in memory, which flatters
everyone and teaches nothing.

## Steps

1. **Fix the window.** State the exact period under review and stick to it;
   a retro that grazes freely across time cannot detect trends.
2. **Pull the record.** Commit history, merged branches, deploys, reverted
   changes, QA reports, and incidents for the window. The record is the
   ground truth; anything contradicting it gets corrected, not debated.
3. **Summarize what shipped.** User-visible outcomes first, enablers second,
   toil third. Count reverts and fix-forward patches separately — they are
   the cost column of the shipping table.
4. **Read the patterns.** Delivery cadence (steady or bursty), review
   turnaround, branch lifetime, and where the window's time actually went
   versus where it was planned to go. Name the biggest divergence.
5. **Per-contributor breakdown.** For each contributor: what they shipped,
   one concrete piece of praise tied to a specific change, and at most one
   growth area with an example. Praise without a citation is filler;
   growth areas without an example are accusations.
6. **Examine what broke.** Every incident or revert in the window gets one
   line: what happened, root cause if known, and whether a guard now exists.
   Repeats from the previous retro are flagged loudly — a lesson logged
   twice was not learned once.
7. **Choose ONE process change.** The single highest-leverage adjustment for
   the next window, phrased as a testable commitment with an owner. Retros
   that emit five changes emit none.
8. **Check last retro's change.** Did the previous commitment happen? Say so
   either way, first, before proposing a new one.

## Quality bar

- Every claim is traceable to the record.
- Praise and growth areas cite specific changes by reference.
- Exactly one process change, with an owner and a follow-up check.

## Output format

A retro note: Window, Shipped, Patterns, Per-Contributor, What Broke, Last
Change Check, Next Change. Short enough to read aloud in five minutes.
