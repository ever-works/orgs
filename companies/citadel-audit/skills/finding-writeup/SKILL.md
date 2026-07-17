---
name: finding-writeup
description: Use when a reproduced security observation must become a written finding, so the claim, evidence, severity, and fix are complete enough for an engineer to act without contacting the auditor.
---

# Finding Writeup

A finding is a claim backed by evidence, a defensible severity, and a fix
someone can start today. Anything short of that is a note, and notes do not
ship.

## Gate before writing

1. Confirm the issue was reproduced against the actual artifact and the
   evidence is captured. Not reproduced means it is written up as an open
   question, never dressed as a finding.
2. Check past engagements for the same class and match the severity logic.
   Consistency across reports is part of the product.

## Structure

- **Title** — the weakness and the affected component in one line, phrased as
  the problem ("Withdrawal path lets any caller drain the vault"), not the
  technique that found it.
- **Severity + rationale** — the rating and one sentence of impact times
  likelihood. If the sentence does not support the rating, re-rate.
- **Location** — the exact place: file and line, contract and function,
  address in the binary, endpoint and parameter. Precise enough to open
  directly.
- **Description** — what the weakness is and the conditions under which it
  holds, written for the engineer who owns the component but did not sit in
  the audit.
- **Impact** — what a real attacker gets: which asset, which capability, at
  what scale. Label any speculative chain as speculative.
- **Evidence** — the reproduction steps and captured proof (transaction,
  crash, disassembly, timing measurement), redacted of any sensitive values
  the proof itself exposed.
- **Remediation** — a specific change with a concrete first step, plus the
  check the client can run to confirm the fix. "Validate input" is not
  remediation; naming the check and where it belongs is.

## Quality bar

- A stranger can reproduce, fix, and verify from the writeup alone.
- The one-line summary is true standing by itself, out of context.
- Tone is flat and factual. The severity carries urgency; the prose does not
  add drama or minimize.

## Output

One finding per file, in this structure, ready for the practice lead's review
and the editor's gate.
