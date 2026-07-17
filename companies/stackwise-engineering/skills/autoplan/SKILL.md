---
name: autoplan
description: Use when a plan should move through the full review pipeline — product, design, and engineering reviews — in one automated pass with recorded decisions, instead of scheduling each review separately.
---

# Autoplan

Runs the three plan reviews as a single chained pipeline with auto-decisions,
for work that is routine enough not to need a human pause between stages. The
value is speed without skipping stages — every review still happens, every
decision still gets written down.

## Steps

1. **Confirm eligibility.** Autoplan is for routine, reversible work. If the
   plan touches auth, billing, data deletion, public API contracts, or
   anything expensive to reverse, stop and run the reviews individually with
   explicit sign-offs instead.
2. **Product pass.** Run the plan-ceo-review sections with the *hold* posture
   by default. Record the verdict. If the verdict is revise, apply the
   objections that are unambiguous, and note the ones that required judgment.
3. **Design pass.** Run the plan-design-review checklist against the planned
   surfaces. Record ratings and required changes; fold unambiguous changes
   into the plan.
4. **Engineering pass.** Run the plan-eng-review: architecture, data flow,
   edge cases, test matrix. Fold in the required changes the same way.
5. **Reconcile.** Where two passes conflict (design wants richer states,
   engineering wants fewer), state the conflict and pick the resolution that
   protects the user-visible success test. Record why.
6. **Emit the decision log.** Every auto-decision gets one line: what was
   decided, which pass forced it, and what was traded away. An empty decision
   log means the pipeline was run too gently — routine plans still generate
   decisions.
7. **Final gate.** If any pass produced a *kill* signal or an unresolvable
   conflict, downgrade from auto to manual: stop and escalate with the log so
   a human-paced review picks up exactly where the pipeline halted.

## Quality bar

- All three passes run — none skipped because the plan "looks fine".
- Every folded-in change is traceable to the pass that demanded it.
- Escalations arrive with the full decision log, not a summary of vibes.

## Output format

The revised plan plus a Decision Log section: pipeline verdicts (one line per
pass), numbered auto-decisions, conflicts and their resolutions, and either
LOCKED or ESCALATED as the final line.
