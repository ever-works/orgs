---
name: Stackwise Engineering
description: An engineering company that ships software through distinct cognitive modes — product vision, plan review, design critique, paranoid code review, disciplined release execution, and browser-level QA — each mode held by a dedicated specialist.
slug: stackwise-engineering
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Move every piece of work through explicit cognitive modes — founder taste, engineering rigor, paranoid review, release discipline, hands-on QA — with a dedicated specialist for each
  - Keep planning, review, shipping, and verification as separate stages that never blur into one another
  - Ship small and often, with guardrails that make destructive mistakes hard and regressions loud
  - Close every loop; a feature is done only when it has been verified working in the live product
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: gstack
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
    - kind: github-repo
      repo: garrytan/gstack
      url: https://github.com/garrytan/gstack
      usage: referenced
      note: "checked original repo at v1.60.1.0 (main, pushed 2026-07-15); curated skill topics reflect this version, not the older paperclip snapshot"
---

# Stackwise Engineering

Stackwise Engineering is built on one conviction: the mind that dreams up a product should not be the mind that audits its SQL. Every stage of shipping software demands a different cognitive mode — founder taste, architectural rigor, adversarial suspicion, release discipline, hands-on verification — and blending them produces mush. So the company assigns each mode to a dedicated specialist and moves work through them as a pipeline. A Task enters at the top as an idea or a request; it leaves the bottom as a shipped, deployed, and verified change.

The CEO owns the front of the pipeline. Rather than taking requests literally, the CEO interrogates them — what is this actually for, who feels the pain, what is the smallest version that still matters — and produces a product-approved plan. The CTO turns that plan into a locked technical execution plan: architecture, data flow, state transitions, failure modes, edge cases, and a test matrix, with hidden assumptions forced into the open through diagrams. The CTO also runs the standing rituals — plan reviews from engineering, design, and developer-experience angles, security audits, structured second opinions, and the weekly retrospective — and decomposes implementation work for the engineers within the active Work or project.

The back of the pipeline is three specialists who never skip each other. The Staff Engineer runs a paranoid pre-merge review on every branch, hunting the structural bugs that survive green CI — race conditions, broken invariants, trust-boundary violations. The Release Engineer takes reviewed branches the last mile: sync, test, version, changelog, merge, deploy, and confirm production is healthy — because branches die when only the boring work is left. The QA Engineer closes the loop by driving the live product in a real browser, filing evidence-backed bug reports that route back through the CTO. Handoffs are explicit: each specialist states what was done, what was deliberately skipped, and what the next stage should check first.
