---
name: sql-analytics
description: Use when writing or reviewing analytical SQL — metric queries, transformations, and reports that must be correct at production volume.
---

# SQL Analytics

Analytical SQL fails two ways: wrong answers and right answers that cost a
fortune. Guard against both.

## Steps

1. **Fix the grain before writing.** One sentence: "one row per X per Y." Every
   join is then checked against it — a join that can fan out the grain is the
   number-one source of silently doubled metrics. When fan-out is possible,
   aggregate before joining, or prove the key is unique.
2. **Define the metric in writing.** Name, formula, filters, and the edge
   decisions: refunds, cancellations, test accounts, timezone boundaries,
   nulls. Two dashboards disagreeing usually means two undocumented edge
   decisions.
3. **Prefer window functions and CTEs over cleverness.** Windows for ranking,
   running totals, and deduplication instead of correlated subqueries or
   self-joins; CTEs named for what they contain, each one testable by running
   it alone. If a CTE cannot be explained in a sentence, split it.
4. **Handle nulls and duplicates on purpose.** Every aggregate states its null
   behavior; every "latest record" pattern uses an explicit tiebreaker.
   Distinct as a bug-hider — a bare DISTINCT fixing a mystery duplicate — is a
   finding, not a fix.
5. **Check the cost before shipping.** Read the query plan at production-like
   volume: scans on partitioned columns use the partition key, joins hit
   indexes or are hash joins by choice, and the row estimates roughly match
   reality. A correct query that scans everything nightly is a failed review.
6. **Test with fixed fixtures.** Small crafted datasets where the right answer
   is known by construction — including the edge cases from step 2 — run in CI
   against every change to the query.

## Quality bar

- Grain stated, and every join provably preserves it.
- Metric definitions cover the edge decisions in writing.
- Query plan reviewed at realistic volume; cost is acceptable and stated.
- Fixture tests pin the edge-case behavior.

## Output format

The query or model with its grain statement, the written metric definition,
fixture tests, and a cost note (plan summary at expected volume).
