---
name: monitor-setup
description: Use when turning a "please watch X" request into a durable, documented monitor — choosing the data source, cadence, and alert condition, and writing the spec before anything goes live.
---

# Monitor Setup

Convert a watching request into a monitor that outlives its author. The spec is the deliverable; the running monitor is its implementation.

## Procedure

1. **Extract the real question.** "Watch X" always means "tell me when Y about X". Pin down Y with the requester: what change, what direction, what magnitude, and what they will do when told. If no action follows from any answer, decline the monitor.
2. **Choose the data source.** Prefer sources already graded trusted in the source map; anything new goes through source-triage first. Record the exact access path and what field or value the monitor reads.
3. **Set the cadence** from the decay rate of the signal, not from habit: how stale can the reading be before the reader's action changes? Poll no faster than that — over-polling burns quota and creates noise.
4. **Write the alert condition as a testable rule.** A threshold, a delta, a pattern — expressed so that two people applying it to the same data reach the same verdict. "Significant movement" is not a rule; "±15% against the 7-day baseline" is.
5. **Backtest the rule** with the backtest-note skill before going live. Tune until the historical false-positive rate is acceptable for the alert's severity tier.
6. **Wire the alert path** per the incident-alerting playbook: severity tier, dedup window, destination, quiet hours.
7. **Add the liveness check.** Every monitor must prove it is alive — a heartbeat, a last-successful-run timestamp, or a scheduled "still watching" line. A monitor that can fail silently is not done.
8. **Write the spec** and register it: purpose (the Y from step 1), source and grade, cadence, alert rule, severity, dedup window, liveness mechanism, owner, review date.
9. **Hand off the output lane.** Confirm who interprets firings (default: the Market Watcher) and that they have the spec.

## Quality bar

- The monitor is reproducible from its spec alone by someone who never spoke to the author.
- The alert rule is testable, backtested, and quotes its evidence.
- Liveness failure is detectable within one cadence period.
- The registry entry exists before the monitor's first live run.

## Output format

The spec document (nine fields from step 8) plus the registry entry and backtest note reference.
