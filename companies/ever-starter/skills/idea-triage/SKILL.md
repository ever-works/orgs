---
name: idea-triage
description: Use when incoming ideas, requests, or opportunities pile up and each needs a fast, recorded verdict — kill, park, or fund — so the backlog stays a decision log instead of a graveyard.
---

# Idea Triage

Every idea gets a verdict within one cycle of arriving. The goal is not to pick winners perfectly; it is to keep the pipeline moving and the reasoning visible.

## Steps

1. **Capture in a fixed shape.** Before judging, restate the idea in three lines: the problem it addresses, who has that problem, and what acting on it would roughly cost (small / medium / large). An idea that cannot be captured this way goes back to its source with that exact question.
2. **Apply the three tests, in order.**
   - **Evidence** — has any customer, user, or market signal actually asked for this, or is it internally invented? Cite the signal or write "none".
   - **Fit** — does it serve the company's current goals, or would it pull focus? An excellent idea for a different company is a kill here.
   - **Cost honesty** — is the true cost (including maintenance and attention) still worth it if the payoff comes late or small?
3. **Issue exactly one verdict.**
   - **KILL** — fails a test with no realistic cure. Record why in one line; killing with a reason is a gift to whoever has the idea next.
   - **PARK** — plausible but not now. A park MUST carry a revisit condition ("revisit when we have 100 users" / "when X ships"), otherwise it is a slow kill pretending to be mercy.
   - **FUND** — passes all three. Write the one-paragraph mandate: outcome wanted, why now, what good looks like — and name a single owner.
4. **Batch and sweep.** Triage in batches rather than interrupt-driven, and once per cycle sweep the parked list: any park whose revisit condition has been met gets re-triaged; any park older than three sweeps with no movement becomes a kill.

## Quality bar

- No idea waits more than one cycle for its verdict.
- Every verdict has a recorded one-line reason; "not a priority" alone is not a reason.
- Funded ideas always leave triage with an owner and a mandate, never as a bare "yes".
- The parked list is reviewed on schedule — an unreviewed parked list means the skill is not being run.

## Output format

One line per idea in the triage log:

```
<idea, 5-10 words> — KILL: <reason> | PARK until <condition> | FUND → <owner>: <one-line outcome>
```

Funded ideas additionally get their mandate paragraph attached to the resulting project or task.
