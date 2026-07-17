# Craftsman Dev Shop

A small, disciplined software studio in a box. Every request follows the same path — brainstorm, plan, build test-first, review, ship — with real gates between the stations and artifacts, not conversations, at every handoff.

## Org structure

**Agents (5)**

- **Rowan Ashford — Founder & CEO** (root): owns intake, problem statements, priorities, and client-facing outcomes.
- **Mira Holt — Lead Engineer** (reports to CEO): decomposes problems into thin testable slices, builds test-first, owns debugging.
- **Felix Marren — Code Reviewer** (reports to Lead Engineer): holds the merge bar; verifies tests, boundaries, and scope on every slice.
- **Theo Brandt — QA Analyst** (reports to Lead Engineer): attacks the running change with hostile inputs and files reproducible defect reports.
- **Sana Iqbal — Release Engineer** (reports to Lead Engineer): runs the definition-of-done gate, assembles reproducible releases, ships with a rollback plan.

**Teams (1)**

- **Delivery** — managed by the Lead Engineer; includes the Code Reviewer, Release Engineer, and QA Analyst.

**Skills (3)**

- `test-driven-development` — the red/green/refactor loop and its quality bar.
- `systematic-debugging` — reproduce, isolate by halving, prove the cause, fix under a test.
- `definition-of-done` — the shared nine-line done checklist and how to run it.

## After import

Importing this package creates the five agents with their reporting lines, the Delivery team, and the three attached skills. Send new work to the CEO as a Task inside a Work: the CEO will sharpen it into a problem statement, the Lead Engineer will plan and build it in test-first slices, and it will pass code review, QA, and the release gate before anything is declared shipped. Expect pushback on vague requests — that is the shop working as designed.

Concept adapted from the "superpowers" company in the paperclipai/companies catalog; all prose, personas, and skills here are original.
