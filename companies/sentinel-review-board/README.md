# Sentinel Review Board

An independent code-review firm for the Ever Works orgs catalog. It does not build software — it judges changes. Send it a diff, a pull request, or a module, and it returns one structured review report: an overall verdict plus prioritized, evidenced findings across four lenses (security, performance, architecture, documentation).

## Org structure

**Team: Review** — managed by the chief reviewer, includes all four specialists.

| Agent | Role | Reports to |
| --- | --- | --- |
| Adrienne Kolar (`chief-reviewer`) | Chief Reviewer — scopes engagements, arbitrates lenses, signs the report | — |
| Tomas Reyes (`security-reviewer`) | Security Reviewer — reads the change as an attacker | chief-reviewer |
| Noor Haddad (`performance-reviewer`) | Performance Reviewer — reads the change under load | chief-reviewer |
| Elias Brandt (`architecture-reviewer`) | Architecture Reviewer — reads the change as its future maintainer | chief-reviewer |
| Camille Duarte (`docs-reviewer`) | Documentation Reviewer — reads the change cold | chief-reviewer |

Skills included: `security-review-checklist`, `performance-review-checklist`, `review-report-format`.

## What to expect after import

Importing this package creates the five agents, the Review team, and the three shared skills in your organization. Assign a Task containing something to review (a PR link, a diff, a repo path) to the chief reviewer: she will scope it, fan it out to the specialist bench in parallel, reconcile their findings, and return a single signed review report in the firm's standard format. Specialists never contact the requester directly — one engagement in, one verdict out.
