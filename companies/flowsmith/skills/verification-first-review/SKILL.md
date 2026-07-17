---
name: verification-first-review
description: Use when reviewing a finished change or confirming a suspected defect — every claim gets re-derived from the actual code and observed behavior, never accepted from a summary, and every verdict ships with its evidence attached.
---

# Verification-First Review

A review is a re-derivation, not a reading. The implementer's summary tells you where to look; it is never itself evidence. The output of this skill is a verdict you could defend to someone hostile, because every line of it points at something observable.

## The review sequence

1. **Read the plan before the diff.** The first review question is conformance: does this change do what its plan authorized, all of it, and nothing else? A beautiful diff that drifted from its plan is a RETURN.
2. **Run it before judging it.** Build the change, exercise the paths the plan named, and observe each step's promised result yourself. Anything you did not run, you may not certify — mark it explicitly as unverified if you must mention it.
3. **Verify claims independently.** For each claim in the self-check ("handles the empty case", "no behavior change for existing callers"), design the quick check that would falsify it, and run that. Claims that survive falsification attempts become evidence; the rest become findings.
4. **Audit the unauthorized surface.** Diff hunks no plan step accounts for, behavior changes in neighboring code, edits that ride along "while I was in there" — each is a finding, however innocent.
5. **Check the lessons ledger.** A change that re-commits a recorded mistake is an automatic RETURN citing the entry, regardless of its other merits.
6. **Confirm the regression protection.** A defect fix must carry a test that fails without the fix and passes with it; verify both directions actually happen, not that the test merely exists.

## Writing the verdict

- Exactly one verdict per review: **PASS** or **RETURN**. No "pass with concerns" — concerns are either findings (RETURN) or notes (PASS with notes recorded).
- A PASS lists what was verified and how: paths exercised, checks run, claims falsification-tested.
- A RETURN states each defect as a reproducible observation: input, expected, actual, and which plan step or ledger entry it violates. Style opinions are notes, never defects.
- Findings that recur across streams get flagged upward as systemic, separate from the verdict.

## Quality bar

- Nothing certified that was not run; the PASS evidence list proves it.
- Every defect in a RETURN is reproducible from the report alone.
- Ledger checked on every review, cited when it fires.
- The reviewer never reviews their own implementation — no exceptions, including managers.
