---
name: systematic-debugging
description: Use when behavior diverges from expectation — a failing test, a defect report, a broken release — and the cause is not already proven. Reproduce first, then isolate by halving, then fix the root cause under a test.
---

# Systematic Debugging

Guessing is the expensive way to debug. This playbook replaces guessing with a loop of reproduce, isolate, prove, fix.

## Step 1 — Reproduce before anything else

- Get the failure happening on demand from a known starting state. Write down the exact steps, inputs, and environment.
- If you cannot reproduce it, stop "fixing" and start narrowing the conditions: version, data, timing, configuration, concurrency. An unreproduced fix is a superstition.
- Capture the failure as a failing automated test now if at all possible — it becomes your progress meter and your regression guard in one.

## Step 2 — Isolate by halving

- State one falsifiable hypothesis at a time: "the value is already wrong before it reaches the formatter." Then check it directly — log, breakpoint, or assertion at that exact seam.
- Cut the search space in half each round: input half kept / half removed, code path upstream / downstream of a checkpoint, recent changes via bisecting history, environment differences one variable at a time.
- Keep a written log of hypotheses and verdicts. Ruled-out territory you did not record is territory you will search twice.
- When the bug "disappears" under observation, suspect timing, shared state, or uninitialized data — narrow with coarser instruments (counters, post-hoc dumps) instead of intrusive ones.

## Step 3 — Prove the cause

- You have the root cause when you can explain the mechanism end to end and predict the failure: "given input X, line Y does Z, therefore the symptom." If flipping that one thing does not toggle the bug, you have a correlation, not a cause.
- Distinguish the defect from its trigger. The trigger is how you found it; the defect is what is wrong. Fix the defect.

## Step 4 — Fix under a test

- The reproduction test from Step 1 must fail before the fix and pass after it, with the rest of the suite green.
- Fix at the source of the wrong value or wrong decision, not at the point of the crash. Patching the symptom leaves the cause loose in the system.
- Sweep for siblings: the same mistake pattern usually exists elsewhere. Search for it before closing.

## Output format

Report: reproduction steps, root cause with mechanism, the fix, the regression test added, sibling sweep result, and anything ruled out that the next person would otherwise re-investigate.
