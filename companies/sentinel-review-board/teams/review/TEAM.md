---
name: Review
description: The full review bench — four specialist lenses coordinated by the chief reviewer into a single signed report per engagement.
slug: review
manager: ../../agents/chief-reviewer/AGENTS.md
includes:
  - ../../agents/security-reviewer/AGENTS.md
  - ../../agents/performance-reviewer/AGENTS.md
  - ../../agents/architecture-reviewer/AGENTS.md
  - ../../agents/docs-reviewer/AGENTS.md
---

# Review

The Review team is the whole operating surface of Sentinel Review Board: one coordinating chief and four specialists who examine the same submission through deliberately different lenses. Its charter is to turn any incoming change — diff, pull request, module, or service — into exactly one structured review report the requester can act on without follow-up. The specialists work in parallel and independently so their findings carry different assumptions; the chief reviewer scopes the engagement before dispatch, arbitrates conflicts between lenses after return, and signs the final verdict. The team measures itself on whether findings were specific enough to fix on the first attempt and whether anything material was missed that later surfaced in production.
