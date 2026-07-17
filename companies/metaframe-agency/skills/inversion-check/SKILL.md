---
name: inversion-check
description: Use when optimistic planning needs a stress test, or a group is stuck on "how do we succeed" — works the problem backwards from guaranteed failure and converts the failure map into concrete safeguards.
---

# Inversion Check

Ask what would guarantee failure, then defend against it. The failure mode this prevents: plans built entirely from the success path, blind to the three ordinary mistakes that kill most projects of their kind.

## Steps

1. State the goal being protected, in one sentence, with its deadline or success measure.
2. Invert it: write the anti-goal explicitly — "how would we make sure this fails, embarrasses us, or quietly dies?"
3. Brainstorm failure routes against the anti-goal. Target 10-15. Pull from four sources:
   - Ways similar efforts have actually failed (name real patterns, not hypotheticals).
   - Ways the current plan's own steps could misfire.
   - Ways the environment could shift underneath (dependency, sponsor, market).
   - Ways success itself could curdle (delivered but unused, won but unprofitable).
4. Score each route: likelihood (low/med/high) and damage (recoverable/serious/fatal).
5. For every high-likelihood or fatal route, write the safeguard as an action with an owner — a change to the plan, a tripwire metric with a threshold, or an explicit accepted risk signed by the decision-maker.
6. Look for the routes the group flinched from writing down (usually about people, incentives, or their own discipline). Add at least one; its absence is the most common audit finding.
7. Fold the safeguards back into the plan and mark which original plan steps changed. An inversion check that changes nothing was a séance.

## Quality bar

- At least ten routes, at least one self-inflicted, at least one about incentives or ownership.
- Every fatal route resolved: safeguard, tripwire, or signed acceptance — no orphans.
- Safeguards are actions with owners, not virtues ("communicate better" is banned).

## Output format

Anti-goal statement → scored failure-route table → safeguard list with owners → plan-change summary. In a group session, collect routes in writing before discussion to avoid anchoring.
