---
name: Lifecycle Bootstrap
slug: lifecycle-bootstrap
owner: planner
status: active
description: Stand up the relay on a real codebase — map the backlog into a ranked queue with a first cycle plan, then run one small change through every leg to prove the pipeline end to end.
---

# Lifecycle Bootstrap

A pipeline that has never carried a change is a diagram, not a company. This project
makes the relay real on whatever codebase the company is attached to. First, the
intake side: turn the raw backlog, open issues, and standing goals into a ranked
queue with definitions of done and a first cycle plan, so the CEO has something
defensible to dispatch from. Second, the delivery side: pick the smallest genuinely
useful change from that queue and carry it through every leg — brief, build, gate,
ship — accepting no shortcuts, so every handoff contract gets exercised once while
the stakes are low.

The project is done when a ranked queue and cycle plan exist and have been accepted,
and when one change has reached production through the full relay with a completed
release record. Friction found along the way — an ambiguous handoff, a runbook gap,
a check that could not actually be run — is the primary deliverable; each instance
gets written down and fixed in the relevant playbook before the project closes.
