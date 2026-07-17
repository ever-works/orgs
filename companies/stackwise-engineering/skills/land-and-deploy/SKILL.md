---
name: land-and-deploy
description: Use when an approved merge request must reach production — merging, following the deploy through the pipeline, and verifying live health directly, so "merged" and "deployed and working" are never confused.
---

# Land and Deploy

The last mile: from approved merge request to verified production. The skill
exists because "merged" is where attention usually ends and where outages
usually begin — the deploy that silently failed, the pod that crash-looped
back to the old version, the config that never arrived.

## Steps

1. **Pre-merge check.** The merge request is approved, checks are green, and
   the branch is current with the mainline. Confirm any configuration the
   change requires — environment variables, secrets, migrations — already
   exists in the target environment. Code that boots against missing config
   is a guaranteed crash loop.
2. **Identify the rollback point** before merging: the exact currently-live
   version, and whether any migration in this change blocks a clean return
   to it. Write it down now; during an incident is too late to research it.
3. **Merge** through the normal path — no direct pushes around the pipeline.
4. **Watch the deploy through, do not fire and forget.** Follow the pipeline
   to completion for the target environment. If the platform reports success
   but instances are restarting, treat it as a failure in progress.
5. **Verify production directly**, in order of increasing depth:
   - the version or build identifier endpoint reports the new release —
     this single check catches silent rollbacks
   - health and status endpoints are green
   - the key user flows the change touched respond correctly
   - error logs for the minutes after deploy show no new failure signature
6. **Declare or roll back.** Deployed-and-verified gets announced with the
   version and verification performed. Anything less within the watch
   window triggers the rollback plan from step 2, executed calmly because
   it was written calmly.

## Quality bar

- The live version identifier is checked, not assumed from pipeline green.
- Rollback point recorded before merge, every time, even for trivial
  changes.
- "Deployed" is never reported without the verification list attached.

## Output format

A deploy report: merge reference, rollback point, pipeline outcome, the
verification checklist with results, and DEPLOYED-VERIFIED or ROLLED-BACK
(with trigger) as the final line.
