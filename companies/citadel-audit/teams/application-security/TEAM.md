---
name: Application Security Practice
description: Audits application source — threat-model-driven manual code review with confirmed static analysis, plus fuzzing harnesses and crash triage, folding dependency risk into scope.
slug: application-security
manager: ../../agents/appsec-lead/AGENTS.md
includes:
  - ../../agents/code-auditor/AGENTS.md
  - ../../agents/fuzzing-engineer/AGENTS.md
---

The application security practice audits source against a threat model that
decides where the review hours go. One lane reviews the high-value paths by
hand — authentication, object-level authorization, injection sinks,
deserialization, server-side request paths — confirming every scanner result
against the code and proving reachability before calling it a finding. The
other builds fuzzing harnesses for the parsers and boundaries that reward
them, then triages, minimizes, and root-causes the crashes. The lanes trade
leads: static suspicions become fuzz targets, crashes become review targets.
