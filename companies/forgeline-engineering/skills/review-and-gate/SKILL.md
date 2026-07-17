---
name: review-and-gate
description: Use when completed implementation work must pass review and testing before deployment unblocks — a verdict-driven gate with itemized findings, independent verification, and a ship note for the deployer.
---

# Review and Gate

The gate between "the author says done" and "the pipeline says shippable". One reviewer, independent verification, a written verdict — and real authority to bounce.

## Steps

1. **Load the contract before the code.** Read the task's acceptance criteria, the interface contract, and the author's handoff note. The review judges the change against what was agreed — scope creep and scope shortfall are both findings.
2. **Review the diff for correctness.** Read top to bottom: logic errors, unhandled edge cases, error paths that swallow failures, resource cleanup, off-by-one and null hazards. Trace at least one unhappy path per changed behavior by hand.
3. **Review for security and robustness.** Input reaching the change unvalidated, authorization that can be sidestepped, secrets or internals leaking into logs and errors, trust placed in client-supplied data.
4. **Verify independently.** Run the author's tests yourself — their green run is input, not evidence. Then exercise the feature end to end, especially across the frontend/backend seam where parallel work integrates; contract mismatches hide exactly there.
5. **Check the tests themselves.** Every acceptance criterion needs a test that fails without the change. A test that cannot fail is a finding. Add the integration tests only a reviewer of the whole can write.
6. **Issue the verdict.** Pass, or bounce. A bounce itemizes every finding: location, severity (blocking / should-fix / note), what wrong looks like, and what a fix looks like. Route code findings to the responsible developer; contract or decomposition findings to the Tech Lead.
7. **Track resubmissions to zero.** Re-review against the findings list, not from scratch. The gate opens when every blocking finding is resolved or explicitly deferred in writing.
8. **Write the ship note on pass.** Residual risks, deliberately deferred findings, and the specific signals the deployer should watch after release. Passing the gate hands the deployer a map, not just a green light.
9. **Deploy against the note.** The deployer confirms the verdict exists before acting, sets the rollback trigger from the note's risks before deploying, and watches the named signals through the soak window. A production defect that slips through goes back to the gate as a lesson, in writing.

## Quality bar

- The reviewer ran the tests and exercised the feature personally — no verdict on someone else's green.
- Every finding is located, rated, and actionable; no bounce rests on "feels off".
- The integration seam was tested explicitly, not inferred from both halves passing alone.
- Every pass carries a ship note; every deferral is written down; nothing unblocks deployment silently.

## Output format

A gate record per task: findings table (id, location, severity, description, fix direction, status), verdict, and — on pass — the ship note listing residual risks, deferred items, and post-deploy watch signals.
