---
name: variant-sweep
description: Use immediately after confirming any bug — to search the whole codebase for other instances of the same class, so the engagement fixes the pattern rather than the single occurrence.
---

# Variant Sweep

One instance of a bug class is almost never alone. A variant sweep turns a
single finding into class-level assurance and is mandatory after every
confirmed bug.

## Method

1. **Characterize the root cause, not the symptom.** Write the pattern in
   general terms: "an object access that omits the tenant check", "arithmetic on
   external input without a bound", "an external call before a state update".
   The generalization is what you search for.
2. **Search structurally, not just textually.** Grep the offending token, but
   also look for the same shape expressed differently: the same missing check
   at other call sites, the same unsafe helper used elsewhere, the same trust
   assumption on a different input. Static-analysis queries and semantic
   patterns catch what text search misses.
3. **Check sibling code paths.** The same developer, the same module, the same
   copy-pasted block, and the same interface implemented by other components are
   the highest-yield places to look.
4. **Triage each hit.** Confirm or dismiss it against the code with the same
   evidence standard as the original — a hit is a lead until reproduced. Record
   dismissals with the reason, so the sweep is auditable.
5. **Consider the anti-pattern's absence.** If one place gets the check right
   and another does not, the inconsistency itself is worth reporting.

## Quality bar

- The pattern is described generally enough to catch differently-spelled
  variants and specifically enough to avoid drowning in noise.
- Every candidate hit is triaged, not just listed.
- The sweep's scope (what was searched, how) is recorded so the negative result
  means something.

## Output

A sweep note attached to the original finding: the generalized pattern, where
it was searched, the confirmed variants (each its own finding), and the
dismissed candidates with reasons.
