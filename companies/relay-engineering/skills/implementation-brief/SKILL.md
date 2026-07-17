---
name: implementation-brief
description: Use when an accepted task must be turned into an ordered, file-level build plan that an implementer can execute cold, or when executing such a brief step by step.
---

# Implementation Brief

Write the plan that makes building boring: ordered steps, file-level actions, named risks, checkable criteria.

## Steps

1. **Start from recon.** The brief consumes a codebase-recon report; if there is none, stop and produce one. Every step in the brief must trace to something the recon actually saw.
2. **State the goal.** Open with the task's definition of done, restated in terms of the system: which behaviors change, which must not.
3. **Order the steps.** Break the change into steps where each one leaves the codebase compiling and testable. Prefer steps that are independently revertible. For each step specify: the action (create, modify, delete), the exact files, what the change does, and how to check it worked.
4. **Sequence for risk.** Put the riskiest or most uncertain step as early as possible — if the plan is going to fail, fail in step two, not step nine.
5. **Name the risks.** For each risk from the recon (scarred files, untested invariants, tangled seams): what could go wrong, how the builder will detect it, and whether it blocks or merely warns.
6. **Write acceptance criteria.** Convert the definition of done into checks a machine or a stranger could run: commands, expected outputs, behaviors to exercise. Each criterion should map to at least one test the build must add or keep green.
7. **Make the complexity call.** Small, medium, or large — with one sentence of justification. This feeds the cycle plan.
8. **Define the escalation line.** State explicitly what the builder should do on divergence: which classes of surprise they may absorb (rename, minor refactor) and which must come back as blockers (schema changes, contract changes, anything touching an invariant).

## Quality bar

- A competent builder can execute the brief without asking a single clarifying question.
- Every step names its files and its check; no step says "and related changes".
- Acceptance criteria are runnable, not aspirational.
- The escalation line makes silently improvising indefensible.

## Output format

A brief document: goal, ordered step table (action, files, description, check), risk register, acceptance criteria list, complexity call, escalation line. Amendments append with a date and reason — history is never rewritten.
