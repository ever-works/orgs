---
name: phase-gated-orchestration
description: Use when a request needs to move through Research, Plan, Implement, and Review as distinct phases with a checkable gate between each — especially for multi-file changes, unfamiliar areas, or anything where skipping straight to code has burned you before.
---

# Phase-Gated Orchestration

Every stream of work is in exactly one phase at a time, and a phase only closes through its gate. The point is not ceremony — it is that each phase produces the input the next one needs, and gates are where missing inputs get caught cheaply.

## The four phases and their gates

1. **Research** — establish what is actually true about the code and the problem.
   - Exit gate: a findings summary where every claim is either verified (with a file reference or observed behavior) or explicitly labeled an inference; open questions named; a confidence verdict attached.
   - Gate fails if: any "we think" is dressed as a "we know", or the questions the plan will depend on remain unanswered.
2. **Plan** — turn findings into an ordered, executable route.
   - Exit gate: numbered steps, each small enough to verify on its own, each with the files it touches and the observable result that proves it worked; risks listed; non-goals stated.
   - Gate fails if: any step's success cannot be observed, or the plan contradicts a recorded lesson without addressing it.
3. **Implement** — execute the plan, one step at a time.
   - Exit gate: the diff, a self-check confirming each step's observable result, and a note on any deviation from the plan with its reason.
   - Gate fails if: the diff contains changes no plan step authorized, or a deviation went unrecorded.
4. **Review** — independent verification by someone who did not implement.
   - Exit gate: a PASS with re-derived evidence, or a RETURN with reproducible defects.
   - Gate fails if: the verdict relies on the implementer's summary instead of direct observation.

## Running the gates

- Classify incoming work honestly: not everything starts at Research. A well-understood one-line fix may enter at Implement — but say so explicitly and record why the earlier phases were skipped.
- One phase open per stream. If implementation reveals the plan was wrong, the stream goes *back* through the Plan gate; it does not limp forward on improvisation.
- Gate verdicts are OPEN, HOLD, or CLOSED — and a HOLD always names the missing criterion, so the owner knows exactly what unblocks it.
- Deviations are normal; silent deviations are not. Any divergence from the plan is recorded at the next gate, and repeated deviation patterns become ledger entries.

## Quality bar

- Every active stream can answer "which phase, which gate criteria, who owns it" in one line.
- No gate closes on unverifiable criteria — "looks good" is not a criterion.
- Skipped phases are always explicit decisions with a recorded reason, never drift.
- Lessons from failed gates are written before the stream moves on.
