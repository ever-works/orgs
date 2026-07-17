---
name: static-triage
description: Use to run static analysis on application source and turn raw scanner output into confirmed findings — separating real, reachable bugs from noise before anything is reported.
---

# Static Triage

Static analyzers produce leads, not findings. The value is in the triage: every
result is confirmed against the code and proven reachable before it leaves the
practice, and unreachable sinks are reported as hygiene, never as
vulnerabilities.

## Running the tools

1. Select analyzers that fit the language and stack, and the rule sets that
   match the threat model. More rules is not better; relevant rules triaged
   well is better.
2. Tune out known-irrelevant categories deliberately and record the decision,
   so a suppressed class is a choice, not an accident.

## Triaging every result

For each finding the tool reports, decide one of three verdicts:

- **Confirmed** — you traced attacker-controlled input from an entry point to
  the dangerous sink and the path is reachable in the deployed configuration.
  Write it up with the path as evidence.
- **Unreachable** — the sink exists but no attacker-controlled input reaches it,
  or a guard upstream neutralizes it. Report as hygiene at most; do not inflate
  it into a vulnerability.
- **False positive** — the tool misread the code (sanitization it did not model,
  a type or framework guarantee it missed). Dismiss with the specific reason.

## What tools miss — check by hand

- **Object-level authorization** — missing "is this caller allowed this
  object" checks rarely show up in scanner output; find them by reading each
  data access.
- **Business-logic flaws** — abuse of legitimate features in an unintended
  order.
- **Trust assumptions** — inputs the code treats as safe that cross a boundary.

## Quality bar

- Zero raw, unconfirmed scanner output reaches the report.
- Every confirmed finding carries the reachability path.
- Every dismissal has a recorded reason, so the triage is auditable.

## Output

A triaged result set — confirmed (with paths), unreachable, false positive
(with reasons) — plus the manual findings the tools could not have found.
