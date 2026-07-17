---
name: infrastructure-as-code
description: Use when writing or reviewing infrastructure code — modules, state, environments, and the change workflow around plan and apply.
---

# Infrastructure as Code

Infrastructure code is production code with a bigger blast radius. Review it
like code; run it like surgery.

## Steps

1. **Modularize by lifecycle, parameterize by environment.** Things that change
   together live together (network, cluster, app stack as separate roots);
   environments differ by parameters, never by copy-pasted variants. A change
   tested in staging must be the same code arriving in production.
2. **Keep state remote, locked, and boring.** Remote backends with locking;
   state never edited by hand; state surgery (imports, moves) done through
   tooling, recorded in the change description.
3. **Read the plan as the review artifact.** Every change ships with its plan
   output; destroys and replaces are called out explicitly and justified.
   A reviewer approves the plan, not just the diff — the diff is the intent,
   the plan is the consequence.
4. **Name blast radius per change.** What breaks if this apply half-fails?
   Changes touching stateful resources (databases, volumes, DNS) get a stated
   rollback path before apply, and run in a window agreed with the lead.
5. **Ban console drift.** Anything created or edited by hand is either
   imported into code the same week or destroyed. Scheduled drift detection
   runs and its findings are defects, not curiosities.
6. **Handle secrets outside the code.** References to a managed store, never
   values — not in code, not in variable files, not in state where avoidable.
   Rotation must work without editing infrastructure code.

## Quality bar

- Any environment rebuilds from code plus the secret store, from nothing.
- Plans in review contain no unexplained destroys or replaces.
- Drift detection is green or has an owner per finding.
- Staging and production differ only in parameter values, provably.

## Output format

Reviewed infrastructure changes: code, the plan output, blast-radius note, and
rollback path for stateful changes — plus environment docs updated in the same
change.
