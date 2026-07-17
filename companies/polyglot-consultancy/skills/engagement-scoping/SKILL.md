---
name: engagement-scoping
description: Use when a new client request arrives and must be turned into an accept-or-decline decision with a scoped engagement definition before any technical work begins.
---

# Engagement Scoping

An engagement accepted on vague terms fails on precise ones later. Scope before
anyone commits.

## Steps

1. **Name the problem, not the request.** Clients ask for solutions ("rebuild it
   in X"); write down the underlying problem ("release takes three weeks and
   breaks"). If the stated solution and the problem disagree, surface that now.
2. **Establish stack facts.** Which languages, frameworks, databases, and
   platforms are actually in play? Confirm from evidence (repo access, dependency
   lists), not from what the client remembers. Wrong stack facts poison every
   downstream assignment.
3. **Define success criteria that can fail.** Each criterion is observable and
   decidable: "p95 checkout latency under 800ms", "team can deploy unassisted".
   Strike anything that cannot be checked.
4. **Bound the engagement.** Explicit in-scope / out-of-scope lists; the
   out-of-scope list is the more valuable one. Note constraints: deadline,
   effort budget, compliance requirements, freeze windows.
5. **Identify the practices needed.** Map the work to backend, frontend/mobile,
   platform, data, and quality involvement — a rough shape, not an assignment.
6. **Decide.** Accept, decline, or return for clarification. Declines state the
   missing precondition so the client can fix it.

## Quality bar

- Every success criterion has a measurement method named next to it.
- Stack facts are verified from artifacts, not conversation.
- The out-of-scope list would survive being read aloud to the client.
- A stranger could estimate the engagement from the brief alone.

## Output format

An engagement brief: problem statement, verified stack facts, success criteria
with measurement methods, in/out of scope, constraints, practices needed, and
the accept/decline decision with reasoning.
