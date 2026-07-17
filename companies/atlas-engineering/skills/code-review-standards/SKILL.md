---
name: code-review-standards
description: Use when reviewing a code change, or preparing your own change for review, so every diff meets the same bar for correctness, safety, and maintainability regardless of who reviews it.
---

# Code Review Standards

A review is a verdict on a claim: "this change does X safely." Work through the
passes below in order; stop and request changes as soon as a pass fails hard.

## Pass 1 — Understand the claim

1. Read the task or slice description and its acceptance criteria first, not the diff.
2. Read the author's handoff note: what was built, what was excluded, where to look.
3. If you cannot state in one sentence what the change claims to do, stop and ask —
   reviewing an unclear claim produces an unclear verdict.

## Pass 2 — Correctness

4. Trace the main path end to end; confirm the code does what the claim says.
5. Hunt the edges: empty inputs, nulls, zero and negative numbers, duplicates,
   concurrent calls, and the largest realistic payload.
6. Check every error path: what does the caller see on failure? No swallowed
   exceptions, no bare 500s, no error branch that "cannot happen".
7. Verify state changes are atomic or recoverable — no half-written records if the
   second step fails.

## Pass 3 — Safety

8. Every new input is validated at the boundary: type, length, format, range.
9. Every object ID in a request is checked for ownership or permission — the caller
   being authenticated is not the caller being authorized.
10. Queries are parameterized; anything templated into a command or query from
    user input is a finding.
11. No secrets, tokens, or personal data in code, logs, or test fixtures.

## Pass 4 — Maintainability

12. Tests exist for the behavior claimed, and at least one failure path each.
    A test that cannot fail is a decoration.
13. Names say what things are; no dead code or commented-out alternatives left in.
14. Migrations, new config, and new environment variables are documented in the
    change itself.

## Verdict

- Approve, approve-with-nits (author fixes, no re-review), or request-changes.
- Every request-changes item states the problem, why it matters, and an acceptable
  fix. "I would have done it differently" is not a finding.
- Quality bar: you are willing to be on call for this change after approving it.
