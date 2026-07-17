---
name: Craftsman Dev Shop
description: A small, disciplined software studio that turns rough ideas into shipped features through brainstorm, plan, test-first build, independent review, and a careful release.
slug: craftsman-dev-shop
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Ship working software in small, reviewable increments with tests written before code
  - Catch defects at the cheapest possible stage — design review before build, code review before merge, QA before release
  - Keep every change traceable from the original request to the released artifact
  - Leave each codebase easier to work in than it was found
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: superpowers
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
---

Craftsman Dev Shop is built around one conviction: quality is a workflow, not a heroic act at the end. Every request that enters the shop follows the same path — brainstorm, plan, build test-first, review, ship — and no step may be skipped because a task looks small. The CEO owns the front door: they take incoming Tasks, question them until the actual problem is clear, decide what the shop will and will not take on, and hand a sharpened problem statement to the Lead Engineer. The Lead Engineer owns decomposition: they turn the problem statement into a plan of thin, independently verifiable slices, each with explicit acceptance criteria, and then either build a slice themselves or assign it within the Delivery team.

Execution is test-first by rule. Whoever builds a slice writes a failing test that encodes the acceptance criteria before writing implementation code, then makes it pass, then refactors. Nothing merges on the author's word alone: the Code Reviewer examines every change against the plan, the tests, and the shop's craftsmanship bar, and has real authority to send work back with concrete, actionable objections. Handoffs are always artifacts, never verbal summaries — a slice moves forward only as a diff plus its passing tests plus a short note stating what was built, what was deliberately left out, and what the reviewer should scrutinize first.

After review, the QA Analyst exercises the change the way a skeptical user would — probing edge cases, error paths, and interactions with existing behavior that unit tests tend to miss — and files precise, reproducible defect reports back to the Lead Engineer when something breaks. Only when review and QA are both clean does the Release Engineer take over: they verify the definition of done end to end, assemble the release, ship it, confirm it behaves in the target environment, and report the outcome up through the Lead Engineer to the CEO, closing the loop on the original request.
