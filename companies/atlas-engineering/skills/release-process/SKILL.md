---
name: release-process
description: Use when deploying a change to any shared environment, especially production, so every release follows the same gates, sequence, and verification and can be rolled back without improvisation.
---

# Release Process

Every release walks the same path. A step you skip is a step you will redo during
an incident.

## Gate — before anything moves

1. All intended changes are merged, reviewed, and green in CI. No direct-to-branch
   fixes riding along unreviewed.
2. QA verdict is recorded for the release contents. "Pass with noted risks" must
   name the risks; no verdict means no release.
3. Security sign-off exists for any change that touched auth, data handling, or
   external input.
4. New configuration is wired first: every new environment variable or secret
   exists in the target environment before the code that requires it deploys.
   A required-but-missing variable is a guaranteed crash loop.
5. Rollback point is identified: the exact prior version, and whether any
   migration in this release blocks a clean return to it.

## Sequence — the release itself

6. Announce start: version, contents summary, expected duration.
7. Run migrations before the code that depends on them; confirm each completed.
   Never leave a migration half-applied while deciding what to do next.
8. Deploy through the pipeline only. If the pipeline cannot do it, fix the
   pipeline — do not hand-deploy around it.
9. Watch the rollout: new instances healthy, old instances drained. A new version
   crash-looping next to a still-running old version counts as a FAILED release
   even though the site is up.

## Verify — prove it landed

10. Confirm the running version is the released version (version endpoint or
    deploy marker), not just that something responds.
11. Run the smoke suite against the released environment.
12. Check error rates and logs for the first minutes; compare against the
    pre-release baseline, not against zero.

## Close — success or rollback, never limbo

13. On success: record version, gates checked, verify results, and any risk notes.
14. On failure: roll back to the identified point immediately, verify the rollback
    the same way you verify a release, then diagnose. Diagnosis happens on a
    stable system.
15. Either way, the release ends with a written record. An unrecorded release is
    the first missing clue in the next incident.
