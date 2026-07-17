---
name: plan-eng-review
description: Use when a product-approved plan needs an engineering-manager review — architecture, data flow, state machines, failure modes, edge cases, and a test matrix — before it is locked for implementation.
---

# Plan Engineering Review

The pass that turns a product plan into something an engineer can build
without inventing architecture mid-task. Assumptions that survive this review
in writing are the only assumptions allowed to exist.

## Steps

1. **Draw before judging.** Produce the diagrams the plan implies — a
   component diagram for boundaries, a sequence diagram for each main flow, a
   state diagram for anything with a lifecycle, a data-flow diagram for
   anything that transforms input. Plain-text diagrams are fine; the act of
   drawing is the audit. Anything that cannot be drawn is not yet understood.
2. **Walk the failure paths.** For each sequence diagram, ask at every arrow:
   what happens if this call fails, hangs, returns twice, or returns garbage?
   The plan must answer with retry, surface, or accept — silence is a finding.
3. **Name the edge cases.** Empty states, first-run, concurrent writers,
   pagination boundaries, timezone and encoding hazards, permission
   boundaries, quota exhaustion. List them explicitly; "handled generically"
   is not an answer.
4. **Check the trust boundaries.** Where does external input enter? Where do
   privileges change? Each crossing needs validation on the boundary, not
   somewhere after it.
5. **Build the test matrix.** Rows are behaviors from the plan, columns are
   the conditions that vary (auth state, data size, failure injection). Every
   cell is a test that exists, a test to write, or an explicit won't-test with
   a reason.
6. **Rule on build order.** Integration points land first; two slices that
   meet at an interface get that contract written before either side builds
   against imagination.
7. **Lock or bounce.** Lock the plan only when every finding above is either
   absorbed into the plan or explicitly accepted as a risk with an owner.

## Quality bar

- Every main flow has a sequence diagram with failure paths annotated.
- The edge-case list is enumerated, not gestured at.
- The test matrix has no blank cells — only tests or reasoned won't-tests.

## Output format

A locked plan appendix: Diagrams, Failure Paths, Edge Cases, Trust
Boundaries, Test Matrix, Build Order, and a LOCKED line naming accepted risks.
