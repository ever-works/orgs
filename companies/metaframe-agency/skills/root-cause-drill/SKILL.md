---
name: root-cause-drill
description: Use when a problem keeps recurring or a symptom is being treated instead of a cause — drills through the causal chain with disciplined "why" iterations until an actionable root is reached.
---

# Root-Cause Drill

Follow the causal chain past the symptom. The failure mode this prevents: fixing the visible breakage repeatedly because the generating condition — a process gap, a missing owner, a bad default — was never touched.

## Steps

1. Write the problem as an observed event with time and impact ("the report shipped with stale numbers on the 12th, client caught it"), never as a judgment ("QA is sloppy").
2. Ask why it happened and write the answer as a fact you can verify, not a guess. Verify it before drilling further — a chain built on an unverified link is fiction.
3. Repeat the why on each answer. Five iterations is the folk rule; the real stop condition is reaching a cause that satisfies all three:
   - **Actionable**: someone could change it with a decision or a process edit.
   - **Generative**: fixing it prevents the class of problem, not just this instance.
   - **Within reach**: it belongs to the organization, not to human nature or the weather.
4. Branch when a why has two genuine parents (it usually does once): follow each branch separately rather than averaging them into mush. Most incidents have 2-3 roots.
5. Watch for the two classic derailments:
   - **Blame arrival**: the chain stops at a person. Push one more why — "why did the process let that mistake through?" People are how causes express themselves, not causes.
   - **Abstraction escape**: answers drift to "lack of communication" or "culture". Re-anchor to the specific event and its verifiable facts.
6. For each root, write the countermeasure at the root's level: a changed default, an added checkpoint, a reassigned ownership — with an owner and a date.
7. Record how this class of problem will be detected sooner if the countermeasure leaks.

## Quality bar

- Every link in the chain is a verified fact; mark any unverified link explicitly and treat conclusions past it as provisional.
- No chain ends at a person or at an abstraction.
- Each countermeasure maps to a specific root — a countermeasure with no root is a pet project smuggled in.

## Output format

The event statement → the why-chain (with branches) showing verification status per link → roots that pass the three-part stop test → countermeasures with owners and dates → early-detection note.
