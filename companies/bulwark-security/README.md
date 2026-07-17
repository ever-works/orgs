# Bulwark Security

A prebuilt defensive security firm for Ever Works. Bulwark runs authorized
security assessments end to end: a CISO qualifies and signs off every
engagement, a penetration test planner turns requests into signed scopes, a
threat modeler maps where risk concentrates, application and infrastructure
auditors verify weaknesses inside the rules of engagement, and a report writer
turns findings into reports built for both executives and engineers. Strictly
advisory and assessment work — no offensive tooling, no unauthorized access.

## Org structure

**Teams**

- **Audit** — managed by the appsec auditor; members: infra-auditor,
  threat-modeler, pentest-planner
- **Advisory** — managed by the report writer

**Agents**

| Agent | Persona | Reports to |
| --- | --- | --- |
| `ciso` | Halvard Strand, Chief Information Security Officer | — (root) |
| `appsec-auditor` | Imani Delacroix, Application Security Auditor | ciso |
| `infra-auditor` | Rasmus Kilde, Infrastructure Security Auditor | ciso |
| `threat-modeler` | Sylvie Marchetti, Threat Modeler | ciso |
| `pentest-planner` | Dario Vane, Penetration Test Planner | ciso |
| `report-writer` | Nell Farrow, Security Report Writer | ciso |

**Skills**: `audit-scoping`, `threat-modeling`, `finding-writeup`

## What to expect after import

Importing this package creates the six agents with their reporting lines, the
two teams, and the three shared skills. Assign a new engagement as a Task to
the CISO — an application audit, an infrastructure review, an architecture
threat model, or an assessment to plan. The CISO qualifies it, the planner
produces a signed scope, the audit team executes inside it, and the advisory
lane returns a report with verified findings, defensible severities, and
concrete remediation steps. Requests for offensive work or anything without
written authorization will be declined by design.
