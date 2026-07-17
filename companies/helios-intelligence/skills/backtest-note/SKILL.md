---
name: backtest-note
description: Use when validating an alert rule or signal hypothesis against historical data before trusting it live — counting the true and false positives it would have produced.
---

# Backtest Note

Run a proposed rule against history and write down what it would have done. No alert rule goes live, and no recurring signal gets trusted, on intuition alone.

## Procedure

1. **State the rule exactly** as it will run live: data source, computation, threshold, evaluation cadence. If the rule cannot be stated precisely enough to replay, it is not ready for backtesting — fix that first.
2. **Choose the history window.** Long enough to include both calm and volatile periods for the watched signal; note explicitly if the available history lacks one of the two regimes.
3. **Replay honestly.** Apply the rule to each historical evaluation point using only data that would have been available at that moment. No peeking at later values, no retroactive smoothing.
4. **Label every firing:** true positive (a person acting on it then would have been right to be interrupted), false positive (noise, glitch, or insignificant), or ambiguous. Label the misses too: significant events in the window the rule slept through.
5. **Compute the numbers:** firings per week, true-positive rate, misses, and the worst cluster (the noisiest single day the rule would have produced).
6. **Judge against the tier.** An act-now rule needs a high true-positive rate and a tolerable worst cluster; a brief-worthy rule can run looser. State the target and whether the rule meets it.
7. **Tune and re-run** if it fails: adjust the threshold, baseline window, or dedup assumption, and replay again. Log each iteration — the tuning history is part of the note.
8. **State the verdict:** ship as-is, ship with a modified threshold, or reject with the reason. Include the rule's expected behavior in one line ("~2 firings/week, ~80% actionable") so the alert's reader knows what they signed up for.
9. **Set the re-test trigger:** the condition under which this backtest expires — a regime change in the signal, a source change, or a fixed review date, whichever comes first.

## Quality bar

- The replay is point-in-time honest; any place it could not be is disclosed.
- Every number in the note is reproducible from the stated rule and window.
- Ambiguous labels are counted as false positives when judging act-now rules — pessimism is the safe default for interruptions.
- The note names its re-test trigger; no backtest is treated as permanent.

## Output format

One note: exact rule, window and regimes covered, firing labels and counts, tuning iterations, verdict with expected behavior, re-test trigger.
