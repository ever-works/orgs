---
name: market-snapshot
description: Use when producing the scheduled state-of-the-watchlist brief — current readings, notable moves with magnitude, and an honest "nothing significant" where that is the truth.
---

# Market Snapshot

Report the state of every watched item on a fixed cadence. The snapshot's value is consistency: same structure, same items, every cycle — so change is visible against the last one.

## Procedure

1. **Walk the watchlist in registry order.** Every watched item appears every cycle, even quiet ones — a skipped item is indistinguishable from a broken monitor. If an item's data is unavailable, say so; never silently omit.
2. **Record the reading per item:** current value, change since last snapshot, and change against the item's baseline (7-day or as specified in its monitor spec). Numbers with direction and magnitude — adjectives only as summaries of numbers.
3. **Classify each item:** notable (movement exceeds the item's significance bar), routine (moved within normal range), or flat. The classification comes from the written bar in the monitor spec, not from feel.
4. **Explain the notables.** For each notable item, one or two sentences: the likely driver if verified, "driver unconfirmed" if not. Pull verified context from research briefs where it exists; never invent a narrative to fill the space.
5. **Cross-check anomalies.** A reading that looks wrong probably is: verify against an independent source before publishing it as a move. Confirmed data glitches are reported as glitches, with the monitor defect filed.
6. **Write the summary line first:** one sentence on the overall state — broadly quiet, one item moving, or broad movement — so a reader can stop there on quiet days.
7. **Flag the escalation candidates.** Items whose movement approaches the interruption bar get an explicit "watching for escalation" tag; if the bar is crossed, the escalation goes through the alerting path immediately — the snapshot is not the alert channel.
8. **Include identifiers.** Timestamps, data-source references, and precise identifiers for every reading, so any number in the snapshot can be independently checked.

## Quality bar

- Same items, same order, same structure every cycle; diffs against the previous snapshot are trivial.
- Every notable classification traces to a written significance bar.
- No narrative without verification; "driver unconfirmed" is the honest default.
- "Nothing significant across the watchlist" appears unpadded when true.

## Output format

Summary line, watchlist table (item, reading, deltas, classification), notable explanations, escalation-watch tags, data-source footnotes.
