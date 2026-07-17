---
name: finding-writeup
description: Use when a verified security observation must become a written finding — to structure the claim, evidence, severity, and remediation so an engineer can fix it and an executive can weigh it.
---

# Finding Writeup

A finding is a claim with evidence, a defensible severity, and a fix someone
can start tomorrow. Anything less is a note, and notes do not ship to clients.

## Before writing

1. Confirm the finding was reproduced within the rules of engagement and the
   evidence is captured. If it was not reproduced, it is written up separately
   as an open question — never dressed as a finding.
2. Check for an existing similar finding from past engagements and match its
   severity logic. Consistency across reports is part of the product.

## Structure

3. **Title** — the weakness and the asset in one line ("Order API allows
   reading other tenants' invoices"), not the technique used to find it.
4. **Severity with rationale** — the rating plus one sentence of why:
   exploitability times blast radius. If the rationale does not obviously
   support the rating, the rating is wrong.
5. **Affected assets** — enumerated precisely: endpoints, accounts, roles,
   versions.
6. **Description** — what the weakness is and the conditions under which it
   holds. Write for an engineer who owns the component but has not seen the
   audit.
7. **Impact** — what a real adversary gets: which data, which capability, at
   what scale. No hypothetical chains presented as fact; if a chain is
   speculative, label it.
8. **Evidence** — the reproduction conditions and captured proof, redacted of
   any sensitive values the evidence itself exposed.
9. **Remediation** — a specific change with a suggested first step, plus the
   verification the client can run to confirm the fix. "Improve validation" is
   not remediation; "reject requests where the invoice's tenant differs from
   the caller's, and add the check server-side in the order service" is.

## Severity rubric

- **Critical** — exploitable now, reaches high-value assets broadly, no
  meaningful precondition.
- **High** — exploitable with realistic effort or preconditions; serious blast
  radius.
- **Medium** — real weakness with limited reach, or strong preconditions.
- **Low / Informational** — defense-in-depth gaps, hygiene, deviations from
  stated policy with no demonstrated path.

## Quality bar

- The engineer can reproduce, fix, and verify without contacting the auditor.
- The executive summary line for this finding is true standing alone.
- Tone is flat and factual — no drama, no minimizing. The severity carries the
  urgency; the prose does not need to.
