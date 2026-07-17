---
name: incident-response
description: Use when production is degraded, down, or behaving in a way that could harm users or data — to stabilize first, diagnose second, and leave behind a record that prevents a repeat.
---

# Incident Response

The order is fixed: stabilize, communicate, diagnose, fix, learn. Skipping ahead
to diagnosis while users are down is the most common failure.

## Declare and size

1. Say out loud that this is an incident and name a lead — one person owns
   decisions until it is over.
2. Size it: SEV1 = users cannot use the product or data is at risk; SEV2 = a
   major function is degraded with no workaround; SEV3 = degraded with a
   workaround. When unsure between two levels, pick the higher.
3. Start a timeline immediately. Timestamp every observation and action as it
   happens; memory reconstructions are fiction.

## Stabilize

4. Ask first: "what changed?" Recent deploys, config changes, dependency or
   provider events. The most recent change is the prime suspect.
5. Prefer the reversible move: roll back the deploy, disable the feature, shed
   the load. Stabilizing on the old version is a win even before you understand
   the bug.
6. If data is being corrupted or leaked, stopping the damage outranks uptime —
   turning the affected surface off is a valid stabilization.
7. For suspected security incidents: revoke and rotate exposed credentials
   before deep diagnosis; every minute of a live token is exposure.

## Communicate

8. Post a first status early: what is affected, severity, that a lead is on it.
   A thin honest update beats a polished late one.
9. Update on a fixed cadence (SEV1: every 30 minutes) even when the update is
   "still investigating". Silence reads as abandonment.

## Diagnose and fix

10. Form one hypothesis at a time and test it against the timeline; change one
    variable per test.
11. When the fix is identified, ship it through the normal release process —
    incident pressure is when pipeline discipline matters most.
12. Close only after verifying recovery the way a user would, plus error rates
    back to baseline.

## Learn

13. Within a few days, write a blameless postmortem: timeline, root cause,
    contributing factors, what shortened or lengthened the incident.
14. File concrete follow-ups with owners — detection that would have caught it
    sooner, and the fix that makes this class of failure impossible, not just
    this instance. An incident without follow-ups is scheduled to repeat.
