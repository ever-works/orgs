---
name: Ship the first change through the full relay
slug: first-ship
project: lifecycle-bootstrap
assignee: shipper
status: todo
priority: high
---

# Ship the first change through the full relay

Carry the agreed first-ship candidate from approved brief all the way to a verified
production release, exercising every leg and every handoff of the pipeline once.

Scope:

- Take the candidate selected in map-backlog through the standard legs with no
  shortcuts: Planner brief, Builder implementation with cleanup-pass and
  delivery-check, Reviewer gate with all four passes recorded, then release.
- As the release leg, walk the release-runbook in full on this first ship even where
  steps feel oversized for the change: record every step's outcome, pre-commit the
  rollback, sync changelog and docs, and hold a real watch window.
- Log every point of friction across all legs — an ambiguous handoff note, a check
  that could not be run as written, a runbook step that did not fit the project's
  deploy process — and file each one against the playbook that owns it.

Deliverable: the change live in production with a completed release record, plus the
friction log with a fix applied or filed for every entry. Done when the release
report has gone to the CEO and Planner and the watch window has closed clean.
