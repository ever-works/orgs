---
name: Audit third-party dependencies
slug: audit-dependencies
project: platform-hardening
assignee: security-reviewer
status: todo
priority: high
---

# Audit third-party dependencies

Inventory every third-party dependency across the codebase — runtime and build —
and produce a ranked findings report.

Scope:

- Known vulnerabilities: check each dependency against current advisories; record
  affected version ranges and whether our usage actually reaches the vulnerable
  path.
- Health: flag packages that are unmaintained, deprecated, or have a single point
  of failure with unusual publish patterns.
- Surface: flag install scripts, network access at build time, and packages with
  permissions far beyond their job.

Deliverable: a report ranking findings by exploitability and blast radius, each
with a proposed action (upgrade, replace, remove, or accept with rationale).
Upgrades that may change behavior are listed separately so the smoke-test work in
this project can target them. Done when every critical and high finding has a
decision recorded and the fixes are filed as follow-up work.
