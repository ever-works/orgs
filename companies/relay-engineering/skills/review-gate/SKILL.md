---
name: review-gate
description: Use when a completed change must pass a multi-pass review — correctness, security, performance, test coverage — before it is allowed to ship, with authority to bounce.
---

# Review Gate

Four separate passes, one verdict. A gate that cannot fail work is not a gate.

## Steps

1. **Load the contract.** Read the implementation brief's acceptance criteria and the builder's handoff note first. The review judges the change against the brief — scope creep and scope shortfall are both findings.
2. **Pass 1 — correctness.** Read the diff top to bottom for logic: edge cases, error handling, off-by-one and null paths, concurrency hazards, resource cleanup. Trace at least one unhappy path per changed behavior by hand.
3. **Pass 2 — security.** Read as an attacker: input that reaches the change unvalidated, authorization checks that can be sidestepped, secrets or internal detail leaking into logs and errors, injection surfaces, trust placed in client-supplied data.
4. **Pass 3 — performance.** Look for work multiplied by data size: queries in loops, unbounded result sets, synchronous calls on hot paths, caches without invalidation, memory held longer than needed. Judge against realistic data volumes, not the test fixture.
5. **Pass 4 — tests.** Verify each acceptance criterion has a test that would fail without the change. Check what the tests actually assert — a test that cannot fail is a finding. Note missing edge-case coverage surfaced by pass 1.
6. **Run the checks yourself.** Execute the delivery-check independently. The builder's green run is input, not evidence.
7. **Issue the verdict.** Pass, or bounce. A bounce itemizes every finding: location, severity (blocking / should-fix / note), and what a fix looks like. Route plan-level findings to the planner, code-level findings to the builder.
8. **Track to zero.** Re-review resubmissions against the finding list; the gate opens only when every blocking finding is resolved or explicitly deferred in writing into the ship note.

## Quality bar

- All four passes recorded separately — a blended skim does not count as a gate.
- Every finding is itemized and actionable; no verdict rests on "feels off".
- The reviewer ran the checks themselves.
- Deferred findings appear in the ship note, never in silence.

## Output format

A review record: passes run, findings table (id, location, severity, description, fix direction, status), verdict, and — on pass — the ship note listing residual risks and post-deploy watch items.
