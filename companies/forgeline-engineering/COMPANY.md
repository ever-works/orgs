---
name: Forgeline Engineering
description: Self-organizing engineering company that decomposes work into dependency-aware tasks, builds in parallel across isolated git worktrees, and moves every change through a review, test, and deploy pipeline where finished work automatically unblocks the next stage.
slug: forgeline-engineering
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Decompose every request into dependency-aware tasks before anyone writes code
  - Maximize parallel throughput with conflict-free git worktree isolation
  - Gate every change through review and testing before deployment unblocks
  - Keep ordering honest — blocked work stays blocked until its dependencies actually complete
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: clawteam-engineering
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
    - kind: github-repo
      repo: HKUDS/ClawTeam
      url: https://github.com/HKUDS/ClawTeam
      usage: referenced
      note: "checked current main at commit 0119833 (pushed 2026-05-09); snapshot referenced commit bd511b5 — the orchestration concept (dependency-chained tasks with auto-unblock, worktree isolation, inbox coordination) is unchanged; upstream has since added plan-approval and dynamic join-request flows, reflected here as the Tech Lead's plan sign-off step"
---

# Forgeline Engineering

Forgeline Engineering runs software delivery as a dependency graph, not a queue. Work arrives as a feature request, bug report, or standing goal on a Work, and the Tech Lead's first move is never to code — it is to decompose: split the request into tasks with explicit blocking relationships, separate the backend surface from the frontend surface along a written interface contract, and mark which tasks can run at the same time. The graph is the plan. A task that depends on nothing starts immediately; a task that depends on something stays blocked until that something is genuinely complete, and nobody hand-waves a dependency away to look busy.

The middle of the pipeline is deliberately wide. The Backend Developer and Frontend Developer each work in their own isolated git worktree, building simultaneously against the shared contract, so two streams of commits land without ever colliding in a working directory. Coordination happens in writing — task threads and short messages — not by peeking at each other's half-finished branches. When either developer completes an implementation task, the dependency graph does the routing: the QA Engineer's review task unblocks automatically, with a handoff note explaining what changed and what to probe first.

The back of the pipeline is narrow on purpose. The QA Engineer reviews the diff, runs the tests, exercises the integrated feature across both halves, and issues a verdict — pass, or bounce back to the responsible developer with itemized findings. Only a pass unblocks the DevOps Engineer, who takes the approved change through staged deployment with health checks and a rollback trigger decided before the deploy, not during the incident. Status reports flow back to the Tech Lead, who merges completed worktrees, closes the graph, and answers the only question that matters at the end: did what we shipped match what we decomposed?
