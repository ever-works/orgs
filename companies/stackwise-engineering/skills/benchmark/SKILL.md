---
name: benchmark
description: Use when a change might affect performance — measuring load timing, rendering milestones, payload sizes, and request counts against a recorded baseline so regressions are caught as numbers before users feel them.
---

# Benchmark

Performance regression detection by comparison, not impression. A single
measurement is an anecdote; the skill is keeping a baseline and reading the
delta.

## Steps

1. **Fix the conditions.** Same environment, same data volume, same
   network profile, cold and warm variants measured separately. A benchmark
   whose conditions drift between runs measures the drift, not the code.
2. **Measure the user-facing set** for each key page or flow:
   - time to first byte
   - first meaningful render and largest visible element render
   - time to interactive on pages with heavy scripting
   - total transfer size and the size of the largest bundles
   - request count, and any request that blocks rendering
   For non-UI work, the analogous set: endpoint latency at p50 and p95,
   payload size, and query count per request.
3. **Run enough times to trust.** Take multiple runs, report the median,
   and note the spread. If the spread swamps the delta, say "no detectable
   change" rather than narrating noise.
4. **Compare against the recorded baseline.** Every metric gets: baseline,
   current, delta, and a verdict. Thresholds by default: flag anything
   user-facing that regresses more than 10%, and any new render-blocking
   request or query-count increase regardless of percentage.
5. **Attribute the regressions.** For each flagged metric, identify the
   change most plausibly responsible — a new dependency, an added query, a
   grown bundle — so the finding arrives with a suspect, not just a number.
6. **Update the baseline deliberately.** Baselines change only when a
   regression is explicitly accepted or an improvement lands; silent
   baseline creep is how products get slow one accepted percent at a time.

## Quality bar

- Medians with spread, never single runs.
- Every flagged regression names a suspect change.
- The baseline's date and conditions are recorded with the baseline.

## Output format

A benchmark report: Conditions, metric table (baseline / current / delta /
verdict), Flagged Regressions with suspects, and Baseline Status (kept or
updated, and why).
