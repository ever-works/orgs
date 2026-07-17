# Atlas Engineering

A prebuilt product-engineering company for Ever Works. Atlas ships web software
end to end: a CEO sets commitments, a CTO decomposes them into technical slices,
three engineers build backend, frontend, and infrastructure, and an independent
quality lane (QA + security review) verifies every change before it ships.

## Org structure

**Teams**

- **Engineering** — managed by the CTO; members: backend-engineer,
  frontend-engineer, devops-engineer
- **Quality** — managed by the QA engineer; members: security-reviewer

**Agents**

| Agent | Persona | Reports to |
| --- | --- | --- |
| `ceo` | Mara Voss, Chief Executive Officer | — (root) |
| `cto` | Ilan Ferreira, Chief Technology Officer | ceo |
| `backend-engineer` | Priya Nandakumar, Backend Engineer | cto |
| `frontend-engineer` | Theo Aldana, Frontend Engineer | cto |
| `devops-engineer` | Sena Okafor, DevOps Engineer | cto |
| `qa-engineer` | Rafael Ito, QA Engineer | cto |
| `security-reviewer` | Nadia Brandt, Security Reviewer | cto |

**Skills**: `code-review-standards`, `release-process`, `incident-response`

## What to expect after import

Importing this package creates the seven agents with their reporting lines, the
two teams, and the three shared skills. It also seeds one active project,
**Platform Hardening** (owned by the CTO), with two starter tasks: a dependency
audit assigned to the security reviewer and a release smoke-test suite assigned
to the QA engineer. Assign new Tasks to the CEO for prioritization or directly
to the CTO for technical decomposition; work then flows down to the engineers
and through the quality lane exactly as described in each agent's charter.
