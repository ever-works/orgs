---
name: Add release smoke tests
slug: add-smoke-tests
project: platform-hardening
assignee: qa-engineer
status: todo
priority: high
---

# Add release smoke tests

Build the automated smoke suite that gates every release, covering the product's
core flows end to end.

Scope:

- Identify the flows whose failure would make a release unshippable: sign-in, the
  primary create/read/update path of the core entity, and the main user-facing
  read surface. Aim for the smallest set that would have caught our recent
  regressions.
- Implement them as fast, deterministic end-to-end checks — target under five
  minutes total, no flaky waits, no dependence on leftover data; each spec seeds
  what it needs.
- Wire the suite into the release process so a red result blocks the deploy and
  the verdict is recorded with the release.

Deliverable: the suite running green against a production-like environment, plus
a short doc on how to run it locally and how to add a flow. Done when a release
has actually been gated by the suite at least once and the flake rate over ten
consecutive runs is zero.
