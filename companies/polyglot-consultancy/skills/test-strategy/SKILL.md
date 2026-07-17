---
name: test-strategy
description: Use when deciding what to test at which layer for an engagement, and what bar blocks a release, before individual tests get written.
---

# Test Strategy

Coverage without strategy is expensive comfort. Decide where each behavior is
cheapest to verify, then enforce the bar you chose.

## Steps

1. **Rank what breaks worst.** From the engagement brief, list the flows whose
   failure costs most — money paths, data-destroying operations, permission
   boundaries — and the ones merely embarrassing. Effort follows this ranking,
   not file-by-file coverage vanity.
2. **Assign behaviors to the cheapest sufficient layer.** Logic and edge cases
   at unit level; contracts and integration seams at service level; only the
   ranked critical flows at end-to-end level. A behavior tested end-to-end
   that a unit test could pin is waste; a contract only tested through the UI
   is a gap.
3. **State what is deliberately untested.** Third-party internals, exploratory
   surfaces, cosmetics — written down so the absence is a decision, not an
   oversight, and the client sees the trade.
4. **Define the release-blocking bar.** Which suites must pass, on which
   environments, with what flake tolerance (ideally zero — quarantine is the
   pressure valve). Anything not in the bar is advisory; say so.
5. **Design the test data story.** How tests get realistic data: factories and
   fixtures per layer, anonymized-or-synthetic rule stated, and every test
   owning its data lifecycle — shared mutable fixtures are how suites start
   lying.
6. **Wire the strategy into the pipeline.** Layers map to pipeline stages with
   budgets; the blocking bar is enforced by machinery, not by memory. Review
   the strategy when the architecture shifts — a strategy older than the
   system's shape is fiction.

## Quality bar

- Every ranked-critical flow has a named test at a named layer.
- The blocking bar is machine-enforced; the advisory set is labeled.
- The deliberately-untested list exists and was reviewed by the lead.
- No behavior is tested at two layers without a stated reason.

## Output format

A test strategy per engagement: ranked flows, layer assignments, the
deliberately-untested list, the release-blocking bar, and the data story —
short enough to be read, kept beside the code.
