---
name: perf-audit
description: Use when a system needs its performance measured against a budget — load verification, latency analysis, or hunting a regression.
---

# Performance Audit

Without a budget, every measurement is trivia. With one, performance work
becomes engineering: measure, find, fix, re-measure.

## Steps

1. **Agree the budget first.** With the owning practice: latency percentiles
   per endpoint or interaction (p50/p95/p99 — users live in the tail),
   throughput floor, and resource ceilings. Numbers, not adjectives, and per
   the load level that matters commercially.
2. **Build a realistic harness.** Production-shaped data volumes, real traffic
   mix and think-time, cold and warm variants, and the same infrastructure
   class as production. A benchmark against an empty database on a laptop is
   fiction with charts.
3. **Measure before touching anything.** Baseline runs, repeated until stable,
   variance recorded. One run is an anecdote; report medians of repeated runs
   with the spread.
4. **Find the bottleneck with instruments.** Profilers, query plans, and
   distributed traces — follow the time, not the intuition. Distinguish
   saturation (a resource at its wall) from contention (waiting on locks or
   pools) from pure inefficiency; each has a different class of fix.
5. **Recommend with expected gains.** Each finding: the evidence, the fix, the
   estimated improvement against the budget, and the effort class. Ranked so
   the owning practice can stop when the budget is met — performance work
   past the budget is spending someone's money on your curiosity.
6. **Re-measure to close.** Same harness, same method, after the fix. The
   delta is the deliverable; a fix without its after-numbers is a hypothesis.
   Where a budget matters permanently, wire the check into the pipeline as a
   gate.

## Quality bar

- Budgets exist in numbers before any measurement is reported.
- The harness's realism gaps are stated (what it does not simulate).
- Every recommendation carries evidence and an expected gain.
- Closed findings show before/after under identical method.

## Output format

An audit report: budget, harness description with realism caveats, baseline,
bottleneck evidence, ranked recommendations with expected gains, and
after-measurements for what was fixed.
