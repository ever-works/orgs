---
name: release-runbook
description: Use when a gate-passed change is being taken to production — the ordered ship checklist, docs and changelog sync, deploy verification, and pre-committed rollback.
---

# Release Runbook

Make every deploy look like the last good one. The runbook is the memory of every incident the team has already paid for.

## Steps

1. **Verify the ticket in.** Confirm the change carries a pass verdict from the review gate and a ship note. No verdict, no release — regardless of who is asking or how urgent it is.
2. **Final delivery-check on the artifact.** Run the check against the exact artifact being deployed, not the branch it was built from. Artifact and revision go into the release record.
3. **Sync the record first.** Before anything deploys: changelog entry written in user-visible terms, docs updated for changed behavior, operational notes amended if the change touches runbooks, alerts, or configuration. Shipping the words with the code is the job.
4. **Pre-commit the rollback.** Write down, before deploying: the exact rollback steps, how long they take, any data implications (migrations that cannot simply reverse), and the specific signals that trigger them. If rollback is impossible, that fact must be in the release record and acknowledged before the deploy.
5. **Walk the checklist in order.** Environment confirmation, dependency and migration steps, feature-flag posture, deploy execution. Steps that do not apply are marked not-applicable explicitly — never silently skipped.
6. **Watch the window.** After deploy, exercise the changed behavior directly, then hold a watch window sized to the change's risk: monitor the signals named in the ship note plus baseline health. The release is not done when the deploy finishes; it is done when the window closes clean.
7. **Roll back on trigger, not on debate.** If a trigger fires inside the window, execute the pre-committed rollback immediately and diagnose afterwards. Early rollback is cheap; a defended bad deploy is not.
8. **Close out.** File the release report: what shipped, verification evidence, window outcome, any deferred items. Update the runbook itself if this release taught it something.

## Quality bar

- Every step has a recorded outcome: done, or not-applicable with a reason.
- Rollback steps existed before the deploy started.
- Docs and changelog shipped with the change, not after it.
- The runbook version-controls its own lessons — a post-incident edit is part of closing the incident.

## Output format

A release record per ship: artifact and revision, checklist with outcomes, rollback plan, watch-window log, verification evidence, and the release report sent to the CEO and Planner.
