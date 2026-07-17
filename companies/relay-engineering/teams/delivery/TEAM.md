---
name: Delivery
description: The delivery pod that carries every task from approved brief to verified production release — build, gate, ship.
slug: delivery
manager: ../../agents/planner/AGENTS.md
includes:
  - ../../agents/builder/AGENTS.md
  - ../../agents/reviewer/AGENTS.md
  - ../../agents/shipper/AGENTS.md
---

Delivery is the team that runs the last three legs of the relay under the Planner's direction. The Builder turns approved briefs into atomic, tested commits; the Reviewer holds every change at the multi-pass gate with real authority to bounce; the Shipper walks gate-passed work through the release runbook and confirms it healthy in production. The pod's operating rule is separation of legs — nobody builds what they planned alone, reviews what they built, or ships what they reviewed — and its output is a steady stream of small, boring, verified releases.
