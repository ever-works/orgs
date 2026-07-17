---
name: first-principles-pass
description: Use when a problem is tangled in inherited constraints, "best practices", or analogies to how others do it — strips the problem to verifiable fundamentals and rebuilds the solution from only what must be true.
---

# First-Principles Pass

Rebuild understanding from base truths instead of reasoning by analogy. The failure mode this prevents: solving a distorted copy of the problem because the framing arrived pre-loaded with someone else's constraints.

## Steps

1. Write the problem as currently framed, verbatim, at the top. You will compare against it at the end.
2. List every constraint, requirement, and "obviously" embedded in that framing. Aim for 8-15; fewer usually means hidden ones remain.
3. Sort each item into one of three bins:
   - **Physics** — provably true or externally imposed (a law, a contract, an actual limit). Cite the proof.
   - **Choice** — a decision someone made that could be remade. Name who and when if known.
   - **Habit** — present only because it is how this is usually done. No citation exists.
4. Keep only the Physics bin. State the goal using nothing but those fundamentals — one sentence, no jargon from the original framing.
5. Rebuild: generate 2-4 candidate approaches that satisfy the fundamentals, deliberately including at least one that violates a discarded Habit.
6. Reintroduce Choice items one at a time, only where a candidate genuinely needs them, recording the cost of each reintroduction.
7. Compare the surviving approach to the original framing and write the delta: what the pass changed, and which discarded constraint was doing the most damage.

## Quality bar

- Every Physics item has a citation or proof sketch; "everyone knows" is a Habit, not Physics.
- At least one rebuilt candidate would have been unthinkable under the original framing — if all candidates resemble the status quo, the sort was too generous.
- The delta section names the single most load-bearing discarded assumption.

## Output format

A pass document: original framing → binned constraint table → fundamentals-only goal statement → rebuilt candidates with reintroduction costs → delta and recommendation. Keep it to two pages; the constraint table is the heart.
