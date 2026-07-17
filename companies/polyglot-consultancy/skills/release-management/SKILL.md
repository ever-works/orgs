---
name: release-management
description: Use when taking a build from merged to production — promotion, verification, rollback, and the coordination around migrations and flags.
---

# Release Management

A release is a decision executed by machinery, not a project executed by
heroes. The machinery is this playbook.

## Steps

1. **Version artifacts immutably.** One build per release candidate, promoted
   through environments unchanged — never rebuilt per environment. The thing
   verified in staging is bit-for-bit the thing deployed to production.
2. **Sequence migrations before code that needs them.** Expand-migrate-contract:
   additive schema change deploys first, code that uses it second, cleanup of
   the old shape last, each step independently deployable and reversible.
   Migration ordering is agreed in writing with the owning practice.
3. **Gate promotion on named checks.** Per environment: automated smoke checks,
   the release-blocking test bar from the quality practice, and for risky
   changes a canary or staged rollout with numeric health gates before full
   traffic.
4. **Prepare the undo before the do.** One-command rollback to the previous
   artifact, verified to work; for changes where rollback is impossible
   (contracted schemas, external side effects), the release plan says so and
   compensating actions are written down in advance.
5. **Make the release observable.** Deploy markers in monitoring, the on-call
   party named, and the first fifteen minutes watched deliberately: error
   rates, latency, and the specific metrics the change should move.
6. **Record what shipped.** Version, changes included, migrations run, flags
   flipped, and any deviation from the runbook — so the next incident
   responder can answer "what changed?" in one lookup.

## Quality bar

- Any release can be rolled back or compensated within the stated window.
- No environment ever runs an artifact that skipped a gate.
- "What changed and when" is answerable from records, not memory.
- Two consecutive releases look identical in process; surprise means the
  runbook is wrong or was ignored — fix whichever.

## Output format

A release runbook per engagement (promote, verify, roll back, contacts) plus a
release record per shipment. Both live in the repo, not in chat history.
