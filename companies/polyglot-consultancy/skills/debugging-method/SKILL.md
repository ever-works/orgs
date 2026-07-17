---
name: debugging-method
description: Use when a defect's cause is not obvious — a systematic loop of reproduce, hypothesize, isolate, and prove, instead of speculative fixes.
---

# Debugging Method

Debugging is hypothesis testing under time pressure. The method keeps you
honest when intuition wants to ship a guess.

## Steps

1. **Reproduce before anything.** A defect you cannot trigger on demand is a
   rumor. Capture the exact conditions — input, state, environment, timing —
   and shrink them toward minimal: remove one factor at a time until removal
   breaks the reproduction. The minimal repro often names the culprit by
   itself.
2. **Read the error like evidence.** The full message, the deepest relevant
   stack frame, and the logs around the timestamp — correlated by request or
   trace ID. Note what the error does NOT say; a generic wrapper message means
   the real failure is upstream of the logging.
3. **Ask "what changed?"** Deploys, dependency bumps, config flips, data
   growth, and calendar effects (certificate expiry, month boundaries)
   between last-known-good and first-known-bad. Bisect the change history
   when the window is wide — it is faster than being clever.
4. **Form hypotheses that predict.** Each hypothesis states what else must be
   true if it is correct — a log line, a variable value, a reproduction
   variant that should pass or fail. Test the cheapest discriminating
   prediction first; a test that cannot rule anything out is theater.
5. **Isolate with the halving instinct.** Cut the system at a seam and check
   which side the defect lives on: mock the dependency, replay the request,
   run the layer alone. Repeat until the faulty unit is small enough to read.
6. **Prove the fix.** The minimal reproduction fails before the fix and
   passes after; the regression test encoding it enters the suite. State the
   causal story in one paragraph — if you cannot, you have a correlation, and
   the defect will be back.

## Quality bar

- The reproduction is minimal and scripted, not a manual ritual.
- Each hypothesis tested left a recorded verdict; no silent guessing.
- The fix's causal story survives a skeptical reading by the lead.
- The regression test fails on the pre-fix code, demonstrably.

## Output format

A defect record: minimal reproduction, evidence trail, ruled-out hypotheses,
causal story, the fix, and the regression test reference.
