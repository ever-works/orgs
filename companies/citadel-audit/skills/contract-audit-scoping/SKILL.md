---
name: contract-audit-scoping
description: Use to scope a smart contract audit before review begins — freeze the artifact, enumerate entry points, set the depth budget, and record exclusions so the engagement has a defensible boundary.
---

# Contract Audit Scoping

Scope is the audit's contract with the client. It fixes what was reviewed, at
what depth, and — just as important — what was not, so the report's silence is
never mistaken for assurance.

## Steps

1. **Freeze the artifact.** Record the exact commit hash under review. Any code
   change after the freeze restarts scope for the changed files; a moving target
   cannot be audited.
2. **Enumerate contracts in and out of scope.** List every contract, library,
   and inherited base. Mark third-party and standard-library contracts as
   in-scope-for-integration or out-of-scope, explicitly.
3. **Map entry points.** Identify every externally callable function that can
   change state, and categorize by access level: open to anyone, restricted to
   a role, or owner/admin only. This inventory is the audit's table of
   contents.
4. **Trace value and privilege flows.** Note where funds move, where privileges
   are granted or checked, where the contract calls out to untrusted code, and
   where upgrade or initialization logic lives. These get the deepest review.
5. **Set the depth budget.** Given the time box, decide which components get
   line-by-line manual review, which get tool-assisted coverage, and which are
   explicitly out of scope this round. Write it down.
6. **Record assumptions.** Deployment configuration, trusted roles, oracle
   sources, and off-chain components the contract relies on — state each, since
   findings depend on them.

## Quality bar

- A reader can tell exactly which code was reviewed and how deeply.
- The entry-point inventory is complete; a missing entry point is itself a
  finding about scope.
- Exclusions are as visible as inclusions.

## Output

A scope document: frozen commit, in/out contract lists, categorized entry-point
inventory, depth budget, and stated assumptions — signed off by the lead before
any lane starts.
