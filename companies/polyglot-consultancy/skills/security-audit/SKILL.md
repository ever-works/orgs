---
name: security-audit
description: Use when a codebase, service, or change set needs a structured security assessment with findings ranked by exploitability and impact.
---

# Security Audit

An audit answers one question with evidence: how would this system be abused,
and how badly? Work from the attack surface inward.

## Steps

1. **Map the attack surface.** Every entry point where untrusted data or
   untrusted users reach the system: endpoints, file uploads, webhooks, queue
   consumers, admin panels, third-party callbacks. Unlisted surface is
   unaudited surface.
2. **Trace authentication and authorization separately.** Who can get a
   session, and what does a session entitle? For every object reference in
   every request, verify an ownership or permission check exists — missing
   object-level checks are the most common critical finding.
3. **Follow untrusted input to its sinks.** For each entry point, trace data to
   queries, commands, templates, file paths, and deserializers. Anything
   templated rather than parameterized is a finding; anything reaching a shell
   or interpreter is a critical one.
4. **Audit secrets and data handling.** Secrets in code, logs, or fixtures;
   personal data stored without need, logged, or returned in errors; transport
   and at-rest encryption for anything sensitive.
5. **Probe the failure modes.** What do errors reveal? Do rate limits exist on
   auth and expensive endpoints? Can workflows be replayed, re-ordered, or
   raced (double-spend, double-submit)?
6. **Rank findings by exploitability × impact.** Critical: remotely exploitable
   with severe impact. High: exploitable with conditions. Medium: defense gaps.
   Low: hardening. Resist inflating clever-but-harmless findings.

## Quality bar

- Every finding has a concrete exploit scenario — inputs, steps, result — not
  just a rule citation.
- Every finding has remediation guidance the owning practice can act on
  without the auditor.
- Absence of findings in an area states what was checked, so silence is
  distinguishable from omission.

## Output format

An audit report: surface map, findings ranked by severity each with exploit
scenario and remediation, and a checked-areas appendix. Re-test and close
findings only on verified fixes.
