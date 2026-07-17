---
name: code-review
description: Use when a branch is implementation-complete and needs a paranoid pre-merge review — a two-pass structural audit hunting the bugs that survive green CI, plus scope-drift detection — before it is allowed to ship.
---

# Code Review

A pre-merge structural audit run in paranoid mode. The operating assumption:
passing tests mean the tests pass, nothing more. The job is to find the bugs
that survive CI and detonate in production.

## Steps

1. **Diff against the mainline**, whole and cold. Read the full diff before
   judging any hunk — half the real bugs live in the interaction between two
   hunks that are each fine alone.
2. **Pass one — intent.** What does the branch claim to do? Check the diff
   against the plan or task it implements. Flag scope drift both ways:
   changes the plan never asked for, and promised behavior that is missing.
3. **Pass two — the adversarial checklist.** Hunt specifically for:
   - N+1 queries and missing indexes on new query paths
   - Race conditions, stale reads, and check-then-act windows
   - Broken invariants — state that two places update and one forgets
   - Trust-boundary violations: unvalidated external input, IDs accepted
     without ownership checks, model or user output executed as instructions
   - Injection and escaping bugs in queries, shells, templates, and paths
   - Retry logic that duplicates side effects, and conditional side effects
     hiding in helpers
   - Error paths that swallow, mislabel, or double-report failures
   - Tests that assert the happy path while the named failure mode goes
     untested
4. **Interrogate the tests.** For each behavior the plan promises, find the
   test that would fail if it broke. No such test is a finding even when the
   code is correct today.
5. **Write findings, not fixes.** Each finding: location, the failure
   scenario as a concrete "given X, then Y breaks", severity, and the
   required change. Style preferences are not findings; keep them out or
   mark them explicitly as optional.
6. **Verdict.** Approve, or return a numbered findings list. Approval with
   unresolved critical findings does not exist.

## Quality bar

- Every finding has a concrete failure scenario, not an aesthetic objection.
- The review says what was checked and found clean, so silence is
  information rather than ambiguity.
- Re-review after fixes covers the new diff, not just the patched lines.

## Output format

A review verdict: Scope Check, numbered Findings (location, scenario,
severity, required change), Checked-Clean list, and APPROVED or CHANGES
REQUIRED as the final line.
