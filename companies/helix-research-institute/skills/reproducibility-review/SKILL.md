---
name: reproducibility-review
description: Use when an analysis must be verified as re-runnable from its inputs and its reported numbers confirmed to match the underlying artifacts before it is trusted or published.
---

# Reproducibility Review

Verify that an analysis can be reproduced from its raw inputs and that every number in the write-up traces to an artifact that produced it.

## Procedure

1. **Inventory the inputs.** Confirm raw data, parameters, and environment are captured and versioned. Note anything referenced but missing.
2. **Trace the pipeline.** Walk from raw input to final output, listing each transformation step. Flag any step that exists only in someone's memory.
3. **Re-run or spot-re-run.** Execute the pipeline end to end where feasible; otherwise re-derive the key results independently. Record what you ran.
4. **Reconcile numbers.** Match every figure and statistic in the text against the artifact it came from. A number with no traceable source is a finding, not a fact.
5. **Check randomness control.** Seeds set, non-deterministic steps identified, and results stable across reruns within stated tolerance.
6. **Check data provenance.** Each dataset has an origin, a version, and a documented processing history. Silent hand-edits are disqualifying.
7. **Assess portability.** Would the analysis run on a clean environment? Note undeclared dependencies or hardcoded local paths.
8. **Issue a verdict:** reproducible / reproducible-with-gaps / not-reproducible, with the specific blocking items for anything short of clean.

## Quality bar

- Every reported number maps to an artifact in one hop.
- The pipeline runs from raw inputs without undocumented manual steps.
- Randomness is controlled or its impact is bounded and stated.
- The verdict names concrete blockers, not vibes.

## Output format

A reproducibility report: input inventory, pipeline trace, reconciliation table (reported number → source artifact → match/mismatch), provenance notes, and a verdict with a blocking-item list.
