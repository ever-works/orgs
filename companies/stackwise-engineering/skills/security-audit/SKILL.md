---
name: security-audit
description: Use when a plan, change, or whole system needs a security audit — an infrastructure-first, phased review covering secrets, authentication, authorization, injection, and threat modeling — before it ships or on a recurring cadence.
---

# Security Audit

A phased, infrastructure-first security review. Application bugs get the
headlines, but the walk starts at the outside — exposure and secrets — because
that is where real compromises usually begin.

## Steps

Work the phases in order; each produces findings rated critical / high /
medium / low.

1. **Exposure.** Enumerate what is reachable: ports, endpoints, buckets,
   admin panels, debug routes, forgotten subdomains. Anything reachable that
   should not be is critical by default.
2. **Secrets.** Hunt credentials in code, config, history, logs, and error
   output. Check rotation posture: could a leaked secret be revoked within
   the hour, and would anyone notice it leaked?
3. **Authentication.** Session lifetime, token storage, password and reset
   flows, brute-force posture, and every unauthenticated endpoint justified
   in writing.
4. **Authorization.** The IDOR sweep: for each resource endpoint, can an
   authenticated user reach another tenant's object by changing an
   identifier? Check horizontal and vertical privilege, and default-deny on
   new routes.
5. **Input handling.** Injection in all its dialects — query, command,
   template, path traversal, deserialization — plus upload handling and
   outbound-request forgery from user-supplied URLs.
6. **Data protection.** What is stored, for how long, encrypted how, logged
   where; what would a database snapshot in the wrong hands actually expose?
7. **Dependencies and build.** Known-vulnerable packages, unpinned versions,
   install scripts, and who can modify the build pipeline.
8. **Threat model.** For the two or three assets most worth stealing, walk
   attacker goal → entry path → detection: would the current logging even
   notice the attempt?

## Quality bar

- Every finding has severity, exact location, exploit scenario, and a
  concrete remediation — no "consider hardening".
- Absence of findings in a phase is stated as "checked, none found", never
  silently skipped.
- Criticals are reported the moment they are found, ahead of the full report.

## Output format

An audit report: phase-by-phase findings table (severity, location, scenario,
remediation), a top-risks summary ordered by exploitability, and an explicit
list of phases checked clean.
