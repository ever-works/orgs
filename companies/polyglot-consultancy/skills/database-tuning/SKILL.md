---
name: database-tuning
description: Use when diagnosing slow queries, designing indexes, or improving database performance with evidence rather than folklore.
---

# Database Tuning

The query plan is the ground truth. Every tuning action starts and ends with
it.

## Steps

1. **Reproduce at realistic scale.** Measure on production-shaped data volumes
   and statistics — a query fast on ten thousand rows tells you nothing about
   ten million. Capture the baseline: plan, wall time, rows examined versus
   returned.
2. **Read the plan for the real bottleneck.** Sequential scans on large
   tables, misestimated row counts, sort spills, nested loops over big sets —
   find the operation that dominates, not the first suspicious line. Fix the
   estimate (statistics, expression indexes) before fixing the plan by force.
3. **Prefer fixes in this order:** index, then query rewrite, then schema
   change, then configuration. Each step up the ladder costs more to maintain;
   take the cheapest one that meets the budget.
4. **Design indexes for named queries.** Every index cites the query it
   serves: column order matching the predicate-then-sort pattern, covering
   columns where the win justifies the write cost. Audit periodically: unused
   indexes are deleted — they tax every write for nothing.
5. **Mind the workload, not just the query.** Lock contention, connection-pool
   exhaustion, and vacuum or maintenance debt masquerade as slow queries.
   Check what else runs at the incident hour before blaming the SQL.
6. **Verify and record.** Re-measure after the change with the same method as
   the baseline; keep before/after plans and numbers in the tuning report.
   A fix that cannot show its numbers did not happen.

## Quality bar

- Baseline and after-measurements use identical method and realistic data.
- Every index in the change names its query; no speculative indexes.
- The fix meets the stated budget, and the report shows it.
- No configuration change ships without a note on its system-wide effect.

## Output format

A tuning report: symptom and budget, baseline plan and numbers, root cause in
the plan, the change and its rung on the fix ladder, after numbers, and any
follow-up debt identified.
