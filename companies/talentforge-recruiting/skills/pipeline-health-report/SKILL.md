---
name: pipeline-health-report
description: Use when reporting on hiring health or investigating a stalled role — measures funnel conversion and time-in-stage, locates bottlenecks and drop-offs, and turns each finding into a recommended fix with a named owner.
---

# Pipeline Health Report

A playbook for turning the pipeline's raw activity into a decision-ready read on where hiring is winning and where it's leaking. The failure mode it prevents: a dashboard full of numbers that names no bottleneck, assigns no owner, and changes nothing.

## Define the funnel and pull the data

1. Fix the stages you'll measure end to end: sourced → replied → screened → advanced → onsite/loop → offered → accepted. Use the same stages across roles so comparisons hold.
2. Pull the counts from the logged Tasks. Before analyzing, check completeness — if touches or grades aren't logged, note the gap; a report built on missing records misleads.

## Measure conversion and speed

3. Compute stage-to-stage conversion: what fraction advances from each stage to the next, per role and in aggregate.
4. Compute time-in-stage: median (not just mean) days a candidate waits at each step. Slow stages lose good candidates as surely as low-conversion stages do.
5. Compare against a baseline — a prior period, other roles, or a target — so a number reads as good or bad, not just as a number.

## Find and diagnose the problems

6. Rank bottlenecks by cost in hires, not by how bad the percentage looks. A modest drop at a high-volume stage can outweigh a steep drop at a tiny one.
7. Separate signal from small samples — two declines is a coincidence; call a trend only when the count supports it.
8. Bucket drop-offs by cause where you can: comp, speed, candidate experience, competing offer, mis-set expectations. Trace declines back to the stage and reason.

## Recommend, don't just report

9. For each finding, name the owner who can act, the specific change to try, and the metric that would prove it worked.
10. Lead the report with the one or two fixes that would recover the most hires; everything else is supporting detail.

## Quality bar

- Every headline metric has a baseline for comparison.
- Bottlenecks are ranked by cost in hires and separated from noise.
- Each finding names an owner, a fix, and a success metric.
- Data-quality gaps are stated up front.

## Output format

Pipeline health report: funnel table (counts, conversion, time-in-stage vs. baseline) → ranked bottlenecks with cost in hires → drop-off/decline analysis by cause → recommended fixes with owner and success metric → data-quality notes.
