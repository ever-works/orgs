---
name: design-review
description: Use when a live surface needs a visual QA audit — a categorical checklist over layout, typography, states, responsiveness, and generic-template blandness, run against the running product with screenshots as evidence.
---

# Design Review

A visual audit of the product as it actually renders — the companion to
plan-design-review, run after the fact instead of before. The plan said what
the surfaces should be; this pass checks what they became.

## Steps

1. **Capture before judging.** Screenshot every surface in scope at desktop
   and mobile widths, in the states that matter: populated, empty, loading,
   error, and mid-interaction where reachable. The screenshot set is both
   the evidence base and the regression baseline for next time.
2. **Run the categorical checklist**, scoring each category with findings:
   - *Layout* — alignment to a consistent grid, spacing rhythm, nothing
     crowding an edge or drowning in a void
   - *Typography* — a deliberate scale, consistent weights, line lengths
     that respect reading, no orphaned labels
   - *Color and contrast* — palette discipline, sufficient contrast on all
     text and controls, states distinguishable without color alone
   - *Interactive states* — hover, focus, active, disabled all present and
     visible; focus is never invisible
   - *Content states* — empty teaches, loading reassures, error instructs;
     no raw exception text facing a user
   - *Responsiveness* — no horizontal scroll, no overlap, no truncation
     that hides meaning at narrow widths
   - *Imagery and icons* — consistent style and weight, nothing stretched,
     placeholder assets flagged
   - *Motion* — transitions purposeful and brief; nothing flashes or jumps
   - *Voice* — labels and messages in the product's register, no lorem
     ipsum survivors
   - *Distinctiveness* — the blandness check: does any surface read as
     generic template output? Name what would make it belong to this
     product.
3. **File findings with fix loops.** Each finding: screenshot, category,
   surface and state, and the specific correction. When a fix lands,
   re-capture and re-judge the same surface — the loop closes on evidence,
   not on the fix's existence.
4. **Verdict per surface and overall**: pass, pass-with-findings, or fail.

## Quality bar

- Every finding is anchored to a screenshot, not a recollection.
- Both viewport widths and all reachable states are covered per surface.
- The distinctiveness category gets a real judgment, not a courtesy pass.

## Output format

An audit report: screenshot inventory, per-category findings with evidence,
fix-loop status per finding, and per-surface plus overall verdicts.
