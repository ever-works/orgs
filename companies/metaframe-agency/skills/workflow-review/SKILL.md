---
name: workflow-review
description: Use when an AI-assisted or multi-step workflow underperforms — maps the process as actually run, finds the real bottleneck, and prescribes ranked removals, reorderings, and checkpoints.
---

# Workflow Review

Audit a workflow as it runs, not as it was designed. The failure mode this prevents: optimizing the documented process while the real one — with its manual patches, re-runs, and quiet workarounds — keeps burning the time.

## Steps

1. Capture the symptom quantitatively before touching the workflow: what is slow (hours per run), unreliable (failure rate), or expensive (cost per output). No number, no review — you cannot verify an improvement you never baselined.
2. Map the as-run workflow by observation or operator walkthrough: every step with its input, output, executor (human, model, script), duration, and failure rate. Explicitly hunt for the undocumented steps — the manual cleanup, the "I always double-check that part", the re-run loop. Those are usually the story.
3. Locate where quality is *set* versus where it is *discovered*. A defect found at step six was created earlier; mark the creation point. Late discovery is the signature workflow disease.
4. Diagnose the bottleneck with a root-cause pass on the symptom, resisting the visible-step trap: the step everyone complains about is often downstream of the actual cause (weak specification, ambiguous handoff format, missing context at a model step).
5. Prescribe in strict order:
   - **Remove** — steps whose removal-test answer is "nothing breaks" (re-verification of verified things, reports nobody reads, approval theater).
   - **Repair** — fix the defect-creation point: tighten the specification, restructure the prompt or input format, make the handoff artifact explicit.
   - **Reorder** — move cheap validations directly after the steps whose failures they catch; fail fast and early.
   - **Add** — only now, and each addition names the failure it prevents.
6. Rank every recommendation by effort (hours to implement) versus payoff (against the baseline number), and mark the single first move — the change to make if the client does nothing else.
7. Define the verification: which baseline number gets re-measured, when, and the threshold that means the review worked. Schedule the follow-up on the Task.

## Quality bar

- The map contains at least one step that was not in the client's own description — if not, the walkthrough was too polite.
- Every "add" prescription names its prevented failure; additions without one get cut.
- The first move is implementable within a day.

## Output format

Baseline numbers → as-run map (step, input, output, executor, duration, failure rate) → defect creation-vs-discovery analysis → root cause → ranked prescription table with the first move marked → verification plan with re-measure date.
