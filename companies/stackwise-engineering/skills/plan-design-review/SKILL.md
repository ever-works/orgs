---
name: plan-design-review
description: Use when a plan's user-facing surfaces need a design critique before implementation — rated passes over hierarchy, states, flows, and originality, catching generic-template blandness while changes are still cheap.
---

# Plan Design Review

A design critique run on the plan, not the pixels — because the cheapest
moment to fix a design flaw is before anyone builds it. The review makes
rated passes over the planned surfaces and returns required changes.

## Steps

1. **Inventory the surfaces.** List every screen, panel, and state the plan
   creates or modifies. A surface the plan implies but does not name (error
   view, empty state, loading state) is the first finding.
2. **Make the rated passes**, scoring each 1–5 with a sentence of evidence:
   - *Hierarchy* — is the most important thing on each surface visually
     first? Could a stranger say what each screen is for in five seconds?
   - *Flow* — count the steps for the core journey; every step must earn its
     existence. Flag any decision the user is forced to make that the product
     could make for them.
   - *States* — empty, loading, error, partial, and success are designed, not
     defaulted. Empty states teach; errors say what to do next.
   - *Consistency* — new surfaces reuse the product's existing patterns,
     spacing, and vocabulary rather than inventing local dialects.
   - *Accessibility* — contrast, focus order, target sizes, and text
     alternatives are stated in the plan, not deferred to implementation.
   - *Originality* — the generic-slop check: would this design be
     indistinguishable from any template? Name one element that makes the
     surface belong to this product specifically.
   - *Copy* — labels and messages are written in the plan, in the product's
     voice; "TBD" copy is a finding.
3. **Convert low scores to required changes.** Any pass scoring 1–2 produces
   a numbered, specific change request. Threes produce recommendations.
4. **Issue the verdict**: pass, pass-with-changes (numbered), or redesign.

## Quality bar

- Every score carries evidence — a rating without a sentence is discarded.
- Required changes name the surface and the exact revision, not a mood.
- The originality pass names something concrete or fails the plan; "looks
  fine" is the blandness it exists to catch.

## Output format

A critique note: Surface Inventory, seven rated passes with evidence,
numbered Required Changes, Recommendations, and a Verdict line.
