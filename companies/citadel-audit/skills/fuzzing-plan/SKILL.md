---
name: fuzzing-plan
description: Use to design a fuzzing or property-testing campaign that actually reaches deep code and finds real bugs — target selection, harness design, seed corpus, sanitizers, and coverage-driven stopping.
---

# Fuzzing Plan

A fuzzer left running is not a campaign. A campaign picks the right targets,
reaches deep code, turns silent corruption into loud crashes, and knows when it
has done enough.

## Target selection

Fuzz the boundaries that reward it: parsers, deserializers, decoders, protocol
and file-format handlers, and anything that turns untrusted bytes into
structured data. For smart contracts, the analogue is stateful property testing
over sequences of calls. Rank targets by attacker reachability and by the cost
of a bug there.

## Harness design

1. **Reach real code.** A harness that only exercises the input-validation
   front door finds nothing. Drive the target the way real input flows, so the
   fuzzer reaches the logic that matters.
2. **Seed the corpus.** Start from valid, diverse inputs — real messages, real
   files, real call sequences. Good seeds are the difference between hours and
   weeks to first coverage.
3. **Enable sanitizers.** Address, undefined-behavior, and memory sanitizers
   turn silent corruption into an immediate, diagnosable crash. For contracts,
   assertion-backed invariants play the same role.
4. **Make it deterministic and reproducible.** Fixed seeds and recorded inputs
   so any crash replays.

## Running and stopping

- Set time and resource budgets with the lead.
- Track coverage. A green run at low coverage proves almost nothing; the number
  tells you whether the harness exercises the target or bounces off it.
- Stop when coverage plateaus and the new-bug rate falls off — not at the first
  crash, and not at an arbitrary clock time.

## Quality bar

- The harness demonstrably reaches the target logic (coverage shows it).
- Sanitizers or invariants are on, so bugs surface rather than hide.
- Runs are reproducible.

## Output

A campaign plan and its results: targets and rationale, harnesses, seed corpora,
sanitizer configuration, coverage achieved, and the raw crashes handed to crash
triage.
