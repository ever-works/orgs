---
name: assumption-audit
description: Use when a plan, decision, or problem statement rests on unexamined beliefs — surfaces every assumption, tests which are load-bearing, and finds the simplest explanation the evidence actually supports.
---

# Assumption Audit

Name what is being taken for granted before acting on it. The failure mode this prevents: an elaborate plan collapsing because one silent premise — "users want this", "the data is accurate", "the deadline is real" — was never checked.

## Steps

1. Take the statement under audit (a plan, a diagnosis, a decision) and rewrite it as a chain of claims: "we believe A, therefore B, therefore we should C."
2. Extract every claim into an audit table. Include the embarrassingly obvious ones — those are where audits pay off.
3. For each claim, record three fields:
   - **Evidence status**: verified (we checked), reported (someone told us), assumed (nobody checked).
   - **Load**: what happens to the conclusion if this claim is false — collapses, weakens, or survives.
   - **Test cost**: the cheapest way to check it, in hours.
4. Compute the danger list: claims that are *assumed* and whose load is *collapses*. These are the audit's product.
5. For competing explanations of the same facts, apply simplicity discipline: count the unsupported assumptions each explanation requires and prefer the one needing fewest. An explanation that requires three unverified beliefs loses to one that requires one.
6. Recommend: which danger-list claims to test before proceeding (cheap test, high load), and which to accept explicitly with a named owner who is choosing to bet on them.
7. Timestamp the table. Assumptions decay; an audit older than the facts it rests on is itself an assumption.

## Quality bar

- Minimum eight claims extracted; a short table means the chain was not fully unrolled.
- Every danger-list item has a concrete test under its cost estimate — "do more research" is not a test.
- The simplicity comparison is shown as counts, not adjectives.

## Output format

The audit table (claim, evidence status, load, test cost), the danger list with recommended tests, and a one-paragraph verdict: proceed, test first, or reframe. The verdict names the single assumption most likely to sink the plan.
