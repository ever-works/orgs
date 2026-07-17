---
name: investigate
description: Use when behavior is wrong and the cause is unknown — a systematic root-cause investigation that reproduces first, isolates by evidence, and forbids fixes until the cause is named in one sentence.
---

# Investigate

Root-cause-first debugging. The discipline exists because the most expensive
debugging mistake is fixing a symptom: the bug returns wearing a different
coat, and now there are two mysteries. No fixes until the cause is named.

## Steps

1. **Reproduce before anything.** Get the failure happening on demand, with
   the smallest input that triggers it. A bug you cannot reproduce is a bug
   you cannot claim to have fixed. If reproduction is genuinely impossible,
   say so and switch to instrumentation: add the logging that would catch it
   next time, and stop.
2. **State the delta.** Expected behavior versus observed behavior, in two
   precise sentences. Vague deltas ("it's flaky") produce vague
   investigations.
3. **Establish when it last worked.** Bisect history if needed — the
   changeset that introduced the failure is the single strongest clue and is
   often cheaper to find than to deduce.
4. **Form ranked hypotheses.** List plausible causes ordered by likelihood
   times cheapness-to-test. Test the cheapest discriminating probe first —
   the one whose outcome eliminates the most hypotheses regardless of which
   way it goes.
5. **Follow evidence, not vibes.** Every probe's result is written down:
   hypothesis, probe, outcome, eliminated. Changing code "to see if it
   helps" without a hypothesis is flailing and contaminates the crime scene.
6. **Name the root cause in one sentence.** "The cache returns stale
   entries because invalidation runs before the write commits." If the
   sentence needs "and also", there may be two bugs — split them.
7. **Fix the cause, then prove it.** Apply the smallest fix that addresses
   the named cause. Re-run the reproduction — it must now pass — and add
   the regression test that fails without the fix.
8. **Check the blast radius.** Search for the same pattern elsewhere; root
   causes are usually habits, not accidents.

## Quality bar

- No fix lands without a reproduction and a one-sentence root cause.
- The evidence log survives — the next investigator inherits probes, not
  folklore.
- The regression test demonstrably fails on the pre-fix code.

## Output format

An investigation note: Repro, Delta, Last-Worked, Evidence Log, Root Cause
(one sentence), Fix, Regression Test, Blast Radius.
