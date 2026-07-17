---
name: service-kpi-reporting
description: Use when producing the weekly KPI report, maintaining the seasonal demand forecast, or judging whether a metric movement deserves action. Defines the metric set, the three-part report shape, and variance tolerances.
---

# Service KPI Reporting

Reporting exists to change next week's decisions. A number that cannot change a decision does not belong in the report.

## The metric set

Track a deliberately small set, each with a target and a tolerance:

- **Quote-request SLA hit rate** — share of estimates delivered inside the SLA window. The single best leading indicator of revenue.
- **Quote-to-booked conversion** — by service line; a drop localizes the problem to pricing, speed, or follow-up.
- **Booked revenue and served revenue** — served is truth, booked is near-truth; pipeline is noted but never headlines.
- **Route density** — revenue per crew-day and drive-time share per day; the profitability lever the schedule controls.
- **Repeat and recurring share** — the fraction of revenue from existing customers; the cheapest growth there is.
- **Estimate accuracy** — actual versus quoted time and cost; drift here quietly poisons margin.
- **Lead flow by source** — counted at the booked-job level, not the click level.

## The three-part report

Every weekly report has exactly three parts, in order:

1. **What happened.** Each metric against its target and against the same week last season — seasonal businesses must compare seasonally or every summer looks like genius and every winter like crisis.
2. **Why it moved.** Drivers traced to specifics: named campaigns, particular route days, a pricing change, weather. "Revenue was up" is not analysis; "revenue was up because the pre-season promotion filled two extra route days in the north cluster" is.
3. **What to do.** At most three recommended actions, each with a named owner. A report that ends at observations is half a report.

## Variance tolerances

Each metric has a stated tolerance band. Inside the band: note it, move on — do not narrate noise. Outside the band: flagged the day it is seen, not held for the weekly report. Two consecutive weeks outside the band escalates from "watch" to "act".

## The seasonal forecast

- Maintain a rolling per-service-line projection built from: booking history by week-of-season, known seasonal shape, and current-year demand signals (search interest, weather patterns, market intelligence).
- State the assumptions in the forecast document itself. When actuals diverge beyond tolerance, update the forecast and record which assumption broke — that record is how forecasting improves.
- The forecast's consumers are explicit: campaign timing (promote before the curve rises), capacity planning (crew and schedule decisions), and cash planning (the slow-season trough is not a surprise, it is a line on the chart).

## Hygiene rules

- Every chart answers a stated question; decoration is deleted.
- Ranges with assumptions, never bare point estimates, for anything forward-looking.
- Distrust smooth series — field data is lumpy, and suspicious cleanliness usually means a broken extract upstream.
