---
name: Constellation Agency
description: A full-service AI agency of 41 specialists across ten divisions — engineering, design, marketing, product, sales, QA, operations, game development, spatial computing, and specialized operations — coordinated by a CEO through division directors.
slug: constellation-agency
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Turn client briefs into delivered work through division-level decomposition and explicit handoffs
  - Keep every division's output behind a quality gate before it ships
  - Coordinate cross-division initiatives without losing single-owner accountability
  - Report status in one shared format so the whole agency stays legible
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: agency-agents
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
    - kind: github-repo
      repo: msitarzewski/agency-agents
      url: https://github.com/msitarzewski/agency-agents
      usage: referenced
      note: "checked main @ 459dce8 (2026-07-17); roster has grown well past the 167-agent snapshot, division structure retained"
---

# Constellation Agency

Constellation Agency is a full-service agency organized as ten divisions under a
single CEO. Work enters at the top as briefs and initiatives; the CEO qualifies
each one, splits multi-division work into division-sized Tasks, and hands every
Task to exactly one division director. Directors decompose further inside their
divisions — slicing at natural boundaries like API contracts, design stages, or
campaign channels — and assign each slice to a specialist with acceptance
criteria attached. Specialists execute inside the Work they were handed and
raise blockers upward rather than silently expanding scope.

Execution runs on explicit handoffs. When work crosses a division boundary —
design specs into engineering, campaign assets into paid media, closed deals
into delivery — the sender states what was done, what was deliberately left
out, and what to check first, and the receiver actively accepts before ownership
transfers. The Product division's delivery producer tracks these cross-division
handoffs and runs the launch checklist for every release, while directors report
status upward weekly in a shared format that leads with an honest verdict.

Review is a separate lane. The Quality Assurance division verifies API
contracts, performance budgets, and accessibility standards against written
criteria, and holds the gate: nothing ships with an open blocker. After each
milestone, campaign, or incident, the owning division runs a retro with at most
three changes, each owned and dated, and files the lessons with the knowledge
manager so the agency compounds instead of repeating itself.
