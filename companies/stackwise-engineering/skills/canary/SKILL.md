---
name: canary
description: Use in the risk window after a deploy — actively watching the live application for console errors, performance regressions, and visual anomalies, with a rollback recommendation ready if the canary sings.
---

# Canary

Post-deploy monitoring as an active practice. Most regressions that escape
QA reveal themselves in the first hour of real traffic; the canary watch is
the difference between catching them then and hearing about them from users.

## Steps

1. **Define the watch window** when the deploy lands: how long (an hour for
   routine changes, a day for risky ones), which pages and flows are in
   scope, and what "normal" looked like before the deploy — error rate,
   timing medians, and screenshots of key pages for visual comparison.
2. **Sweep on a cadence.** At intervals through the window, visit the key
   pages in a browser and record three channels:
   - *Console* — new errors or warnings that were not present pre-deploy.
     One new repeated error signature is a finding regardless of whether
     the page "looks fine".
   - *Performance* — page timing against the pre-deploy numbers; flag
     sustained regressions, not single slow samples.
   - *Visual* — compare against the pre-deploy screenshots; layout shifts,
     missing elements, and broken assets are exactly the class of bug that
     monitoring dashboards never see.
3. **Check the error stream.** Between sweeps, watch server logs and error
   trackers for new failure signatures. New signature plus deploy proximity
   equals guilty until proven otherwise.
4. **Classify each finding fast**: rollback-worthy (data corruption, auth
   failures, core flow broken), fix-forward (visible but contained), or
   note-only (cosmetic, pre-existing). The classification is a
   recommendation to the deploy owner, delivered with evidence, within
   minutes of detection.
5. **Close the watch explicitly.** At window end, declare the deploy stable
   with the evidence summarized, or extend the window with a reason.
   A watch that just trails off protects nothing.

## Quality bar

- Baseline captured before the deploy, not reconstructed after.
- Findings arrive with screenshot or log excerpt, timing, and the sweep
  that caught them.
- Every watch ends in an explicit STABLE or ESCALATED declaration.

## Output format

A canary log: window definition and baseline, timestamped sweep entries per
channel, classified findings with evidence, and the closing declaration.
