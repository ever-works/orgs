---
name: reliability-review
description: Use when defining service-level objectives, reviewing a service's production readiness, or running incident response and its postmortem.
---

# Reliability Review

Reliability is a budget spent on purpose. This playbook sets the budget,
checks readiness against it, and handles the moments it runs out.

## Setting objectives

1. Define SLOs from user experience: what the user does (load a page, submit
   an order) and the threshold at which they'd call it broken. Availability and
   latency targets per critical flow, measured where the user is, not at the
   load balancer's optimism.
2. Derive the error budget and agree what happens when it burns: feature work
   yields to reliability work at a stated burn rate. Write this down while
   everyone is calm.

## Readiness review (before launch)

3. Walk the checklist with the owning practice: dashboards and alerts live,
   runbook written, capacity model stated (what load it takes and what hits
   the wall first), backup/restore tested, rollback rehearsed, on-call named.
4. Fail the review honestly. "Launch anyway" is sometimes right, but it is a
   recorded decision with an owner, not a shrug.

## Incident response

5. Stabilize first: mitigate (roll back, shed load, fail over) before
   diagnosing. Assign one incident lead; communicate status on a fixed cadence
   to a known channel; keep a timestamped log of actions as they happen.
6. Diagnose second: change history first ("what shipped?"), then dashboards,
   then traces and logs. Fix, verify from the user's side, then stand down.

## Postmortem

7. Blameless and prompt: timeline, contributing causes (rarely one), what
   made detection or mitigation slow, and follow-up actions each with an owner
   and a date. An actionless postmortem is a story, not a correction.

## Quality bar

- Every SLO names its measurement point and its user-visible meaning.
- Every page during the incident maps to a runbook that helped or gets fixed.
- Postmortem actions are tracked to closure; repeats of a cause with an open
  action are escalated to the lead.

## Output format

SLO definitions, readiness review verdicts with gaps and owners, incident
timelines, and postmortems with tracked actions — all in the repo.
