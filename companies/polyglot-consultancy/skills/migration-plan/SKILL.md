---
name: migration-plan
description: Use when planning the move of a system, service, or dataset from one stack, platform, or shape to another without a big-bang cutover.
---

# Migration Plan

A migration is a sequence of boring, reversible steps or it is a gamble. Plan
the sequence, not the destination.

## Steps

1. **Map what exists.** Inventory the components, data stores, integrations,
   and traffic paths actually in use — from evidence (configs, logs, dependency
   graphs), not memory. Unknown dependencies are the classic migration killer;
   list the suspected ones explicitly.
2. **Define the target and the invariant.** The end state, plus the invariant
   that must hold throughout: "checkout keeps working", "no data loss beyond N
   minutes". Every step is judged against the invariant.
3. **Cut the path into independently shippable steps.** Each step leaves the
   system fully working and is individually reversible. Prefer strangler
   patterns: route a slice of traffic or data to the new side, verify, widen.
   Any step that cannot be undone gets flagged as a point of no return and
   scheduled deliberately.
4. **Design the coexistence period.** Old and new run together longer than
   anyone wants: define the source of truth per data domain during overlap,
   the sync mechanism, and how conflicts resolve. This is where migrations rot.
5. **Attach verification per step.** What is measured after each step, what
   values mean "proceed", and what triggers rollback. Rehearse the rollback for
   at least the riskiest step — an unrehearsed rollback is a hope.
6. **Sequence with owners and gates.** Order steps by risk-information yield:
   early steps should teach the most. Name an owner and a go/no-go gate per
   step.

## Quality bar

- No step depends on two practices deploying simultaneously.
- Every point of no return is marked and consciously scheduled.
- The plan survives the question "what if we must stop halfway and live there
  for a quarter?"

## Output format

A migration plan: current-state map, target and invariant, ordered steps each
with owner, verification, and rollback, the coexistence design, and the marked
points of no return.
