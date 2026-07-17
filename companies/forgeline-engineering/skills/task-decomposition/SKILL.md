---
name: task-decomposition
description: Use when a feature request, bug report, or project goal must be broken into dependency-aware tasks that maximize parallel execution — before any implementation begins.
---

# Task Decomposition

Turn one request into a graph of tasks whose blocking edges make the execution order — and the parallelism — explicit. The graph is the plan; if the graph is wrong, everything downstream is wrong.

## Steps

1. **Restate the request as an outcome.** One or two sentences: what will be observably true when this is done. If you cannot write it, the request is not understood — ask before decomposing.
2. **Inventory the surfaces.** List what the change touches: data model, server logic, API surface, client UI, infrastructure, docs. Each surface is a candidate task boundary.
3. **Draft the interface contract first.** For any work that spans backend and frontend, write the contract before the tasks: endpoints, request/response shapes, error cases, auth expectations. The contract is what lets two developers build simultaneously without watching each other.
4. **Cut tasks along ownership lines.** Each task should be completable by one agent in one worktree without touching another task's files. If two draft tasks edit the same module, merge them or re-split along a cleaner seam.
5. **Declare blocking edges explicitly.** For every task, name what must complete before it can start. Contract design blocks implementation; implementation blocks review; review blocks deployment. Two tasks with no edge between them are a claim that they can run in parallel — make that claim deliberately.
6. **Write acceptance criteria per task.** Two to five checkable statements each. A criterion someone cannot verify mechanically ("works well") is not a criterion.
7. **Walk the graph for bottlenecks.** Find the longest blocking chain — that is your delivery time. If one task blocks everything, try splitting it; if the graph is a straight line, question whether the seams are real.
8. **Assign owners and publish.** Every task gets exactly one owner, its blockers, its criteria, and the contract attached. Publish the whole graph at once so every agent sees where their work sits.

## Quality bar

- Every task has one owner, explicit blockers, and mechanically checkable acceptance criteria.
- The backend/frontend split references a written contract, not "you two sync up".
- No two parallel tasks touch the same files — verified by listing expected paths, not by hope.
- The longest chain is identified, and no task is blocked by anything it does not actually need.

## Output format

A task plan: the outcome statement, the interface contract, a task table (id, title, owner, blocked-by, acceptance criteria), and a one-line note naming the longest chain and the intended parallel pairs.
