---
name: Pipeline
description: The delivery pipeline pod — parallel backend and frontend build in isolated worktrees, a QA gate, and staged deployment, ordered by the Tech Lead's dependency graph.
slug: pipeline
manager: ../../agents/tech-lead/AGENTS.md
includes:
  - ../../agents/backend-developer/AGENTS.md
  - ../../agents/frontend-developer/AGENTS.md
  - ../../agents/qa-engineer/AGENTS.md
  - ../../agents/devops-engineer/AGENTS.md
---

Pipeline is Forgeline's single delivery pod, run by the Tech Lead's dependency graph rather than a rota. The Backend and Frontend Developers form the wide middle — building simultaneously in isolated git worktrees against a shared interface contract — while the QA Engineer holds the narrow gate that every change must pass and the DevOps Engineer carries gate-passed work through staged, reversible deploys. The pod's operating rule is that the graph does the choreography: completing a task is what unblocks the next one, handoffs travel as written notes on the task, and no stage starts on a verbal "should be fine".
