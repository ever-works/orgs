---
name: crash-triage
description: Use to turn raw fuzzer crashes into findings — reproduce, minimize, deduplicate, root-cause, and judge exploitability, so ten crashes from one bug become one well-understood finding.
---

# Crash Triage

A pile of crashes is not a pile of findings. Most of them are the same bug, and
a crash without a root cause is not yet a finding. Triage is where dynamic
analysis earns its severity ratings.

## Steps

1. **Reproduce.** Replay the crashing input against a build with symbols and
   sanitizers. A crash you cannot reproduce is set aside, not reported.
2. **Minimize.** Reduce the input to the smallest that still triggers the crash.
   A minimized case makes the root cause visible and the report actionable.
3. **Deduplicate.** Group crashes by root cause, not by stack address or input.
   Different inputs hitting the same underlying bug are one finding; cluster by
   the faulting operation and call path.
4. **Root-cause.** Trace from the crash back to the actual defect: which write
   corrupted which memory, which unchecked value reached which sink, why the
   invariant broke. Report the cause, not the symptom.
5. **Judge exploitability.** Classify what the bug gives an attacker: memory
   disclosure, control-flow hijack potential, denial of service, or a benign
   assertion. Consider mitigations in the deployment (memory protections,
   sandboxing) that raise or lower the real severity.

## Quality bar

- Every reported crash is reproduced and minimized.
- Findings are grouped by root cause — no ten-copies-of-one-bug in the report.
- Each finding states the cause and an exploitability judgment, not just
  "it crashed".

## Output

Per unique bug: a minimized reproducer, the root-cause analysis, an
exploitability classification, and a severity — written to the firm's finding
structure and handed to the lead for review.
