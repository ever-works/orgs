---
name: prioritization-framework
description: Use when ranking opportunities, features, or strategic bets into an ordered list — a weighted scoring method with explicit evidence discounts and a forced stack-rank.
---

# Prioritization Framework

A scoring method that produces an ordered list and a defensible reason for every position. The failure mode it prevents: prioritization theater, where scores are reverse-engineered from a favorite.

## Set up the scoring table

1. List every candidate as one row: a name plus one sentence on the user-visible outcome. If you cannot write the outcome sentence, the candidate is not ready to score — send it back for definition.
2. Score four factors, each 1-5, written down before looking at any other row's totals:
   - **Reach** — how many of the affected users/accounts hit this per quarter.
   - **Severity** — how much pain or upside per occurrence (5 = blocks the core job or unlocks new revenue; 1 = cosmetic).
   - **Strategic fit** — how directly it advances the engagement's stated decision or the client's declared direction (5 = the strategy depends on it; 1 = orthogonal).
   - **Effort** — relative delivery cost (5 = smallest). Use the client team's estimates when available; mark your own guesses with "~".
3. Apply the **evidence discount**: multiply Reach × Severity confidence by evidence grade — 1.0 for observed behavior or data, 0.7 for direct user statements, 0.4 for internal opinion only. This is the step that keeps loud stakeholders from outranking quiet data.
4. Compute: (Reach × Severity × evidence grade) + Strategic fit, then divide by (6 − Effort). Keep the arithmetic visible in the table.

## Force the rank

5. Sort by score, then override by hand where needed — but every manual move gets a written one-line justification in an "override" column. Unexplained overrides invalidate the exercise.
6. Check pairwise sanity on the top five: for each adjacent pair, ask "if we could only ship one, is the order still right?" Fix and document any flip.
7. Draw the cut line: what fits the stated capacity. Everything below the line is explicitly deferred, not deleted.

## Quality bar

- Every score traceable to a finding, a metric, or a named assumption — no bare numbers.
- At least one candidate scored low; a table where everything is a 4 measured nothing.
- Overrides ≤ 20% of rows, each justified.
- The final artifact is an ordered list; ties are broken, not tolerated.

## Output format

Scoring table (candidate, four factors, evidence grade, score, override note) → ranked list with cut line → three-bullet summary of what the ranking implies and the strongest objection to it.
