---
name: performance-review-checklist
description: Use when reviewing a code change for performance regressions — a structured pass over query patterns, cost curves, hot paths, and resource lifecycles, with a rule that every finding shows its arithmetic.
---

# Performance Review Checklist

Before starting, write down the scale assumptions you are reviewing under (rows, requests/sec, payload sizes, latency budget). If the requester gave none, state your own and label them as assumptions — every severity call depends on them.

## 1. Query and I/O patterns

- Any data access inside a loop is a suspect: count how many round trips one realistic request causes. One query per collection is the target; one per element is a finding.
- New query shapes: is there an index that serves the filter and sort, or does this scan? Check the WHERE/ORDER BY columns against known or likely indexes.
- Unbounded reads: every list query needs a limit or pagination; "load all then filter in memory" is a finding at any non-toy scale.
- Repeated identical reads within one request: cacheable, or at least hoistable.

## 2. Cost curves

- For each loop or recursion touched by the diff, classify growth: constant, linear, quadratic, worse. Nested iteration over two collections that grow together is the quadratic to hunt for.
- Serialization and copying: does the change copy, encode, or re-parse a payload that grows with data size, on a per-request basis?
- Show the arithmetic in the finding: "N orders × M lines each = N×M round trips; at the stated 200×50 that is 10,000 per page load."

## 3. Hot paths and concurrency

- Identify whether the changed code sits on a hot path (per-request, per-message) or a cold one (startup, admin, batch). The same inefficiency is a different severity in each.
- Sequential awaits/calls that are independent: could they overlap? Serialized external calls multiply tail latency.
- New locks, transactions, or singletons on hot paths: what is the contention story under the stated request rate?
- Work moved from background into request handling (or vice versa) changes the latency budget — call it out.

## 4. Resource lifecycles

- Connections, file handles, subscriptions, watchers, timers introduced by the diff: where are they closed, and on error paths too?
- Caches added by the diff: bounded size? invalidation trigger? A cache without both is a slow memory leak with extra steps.
- Retry logic: bounded attempts and backoff, or a stampede amplifier?

## Quality bar and output

- Every finding carries: location, the cost model (what grows with what), the scale at which it becomes user-visible, and a cheaper alternative that preserves the change's intent.
- Separate regressions (the diff made it worse) from observations (pre-existing debt near the diff); only regressions count against the verdict by default.
- Severity: high = user-visible today at stated scale; medium = becomes visible within plausible growth; low = wasteful but bounded.
- A clean pass lists the paths examined and the scale assumed.
