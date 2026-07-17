---
name: code-review
description: Use when reviewing any code change, in any language, so every diff across every practice meets the same bar for correctness, safety, and maintainability.
---

# Code Review

A review is a verdict on a claim: "this change does X safely." Work the passes
in order; stop and request changes the moment a pass fails hard.

## Pass 1 — Understand the claim

1. Read the slice's acceptance criteria and the author's handoff note before
   the diff. If you cannot state in one sentence what the change claims to do,
   ask — an unclear claim produces an unclear verdict.

## Pass 2 — Correctness

2. Trace the main path end to end; confirm the code does what the claim says.
3. Hunt the edges: empty inputs, nulls, zero and negative numbers, duplicates,
   concurrent calls, the largest realistic payload.
4. Check every error path: what does the caller see on failure? No swallowed
   exceptions, no bare 500s, no branch that "cannot happen".
5. Verify state changes are atomic or recoverable — no half-written records
   when the second step fails.

## Pass 3 — Safety

6. Every new input is validated at the boundary: type, length, format, range.
7. Every object ID in a request is checked for ownership or permission —
   authenticated is not authorized.
8. Queries and commands are parameterized; user input templated into either is
   a finding.
9. No secrets, tokens, or personal data in code, logs, or fixtures.

## Pass 4 — Maintainability

10. Tests exist for the claimed behavior and at least one failure path each.
11. Names say what things are; no dead code or commented-out alternatives.
12. Migrations, config, and env vars introduced by the change are documented in
    the change.
13. The change is idiomatic for its language — reviewers after you should not
    need to know it was written by a specialist in a different stack.

## Verdict

- Approve, approve-with-nits (author fixes, no re-review), or request-changes.
- Every request-changes item states the problem, why it matters, and an
  acceptable fix. "I would have done it differently" is not a finding.
- Bar: you are willing to be on call for this change after approving it.
