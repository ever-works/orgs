---
name: weekly-review
description: Use when auditing a week of intelligence output — scoring alert hit rate, checking monitor and source health, tracking goals, and filing the corrective tasks that improve next week's signal-to-noise.
---

# Weekly Review

Audit the company's own performance for the week and convert the findings into corrective work. The review exists to make next week measurably better, not to summarize this one.

## Procedure

1. **Assemble the packet.** Pull the week's daily briefs, every escalation with its outcome, monitor fleet-health summaries, the goal register, and the source map. Refuse to run the review on memory alone.
2. **Score the alerts.** For each escalation: did it prove out (action was warranted), fizzle (real but insignificant), or misfire (wrong)? Compute the week's hit rate and compare to the trailing month.
3. **Audit the misses.** Harder and more valuable: scan for significant events the company failed to surface. Each miss gets a one-line cause — no monitor, monitor silent, threshold too loose, verification too slow.
4. **Check monitor health.** From fleet summaries, list monitors that fired wrongly, went quiet, or no longer match their Task. Each defect becomes a corrective task with an owner.
5. **Re-grade sources.** Promote sources that drove proven-out items; demote ones that fed misfires or went stale. Update the source map, dated.
6. **Track goals.** For each standing goal: progress evidence this week, or an explicit "no movement" with a reason. Goals quiet for two consecutive reviews get escalated or retired — never silently carried.
7. **Decide the threshold changes.** Translate the audit into concrete tuning: which alert conditions tighten, which loosen, which monitors retire, which new ones are proposed.
8. **File the corrective tasks.** Every decision from steps 4-7 becomes a tracked task with an owner and a deadline. A review that produces no tasks is either a perfect week or a lazy review — say which.

## Quality bar

- Hit rate is a number with a trend, not an adjective.
- Every miss has a named cause and a corrective task; "we'll watch for it" is not a correction.
- Goal status is evidence-linked; "on track" without a link does not count.
- The review closes the loop on last week's corrective tasks before opening new ones.

## Output format

Scorecard (hit rate, misses, trend), monitor health table, source-map changes, goal register update, and the numbered list of corrective tasks with owners.
