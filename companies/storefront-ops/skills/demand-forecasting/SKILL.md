---
name: demand-forecasting
description: Use when forecasting product-level sales for reorder decisions, setting safety stock and reorder points, confirming stock cover before a campaign, or scoring how accurate past forecasts were.
---

# Demand Forecasting

A forecast exists to make one of two decisions: how much to order, or whether a planned promotion can be supported. Forecast at the level the decision needs — usually per product per week — and always write down the number so accuracy can be scored later.

## Building the baseline

1. **Velocity.** Compute average weekly units sold over the last 8–12 weeks, excluding weeks distorted by stockouts (a stockout week is missing demand, not low demand — either exclude it or estimate what would have sold).
2. **Trend.** Compare the last 4 weeks to the 4 before them. A product moving more than ±20% between the two windows gets a trend adjustment; smaller drift is noise, leave it alone.
3. **Seasonality.** If a year of history exists, index each week against the yearly average and apply the index. If not, borrow the shape from the closest comparable product or category and mark the forecast as low-confidence.
4. **Lifecycle position.** New products get no baseline — forecast from the launch plan and comparable launches, review weekly, and expect to be wrong by half in either direction.

## Layering promotion uplift

- Uplift is always a separate line, never blended into the baseline. When the promotion ends, the baseline must still be visible.
- Estimate uplift from the store's own history of similar promotions: same discount depth, same channel push, same product tier. First-of-its-kind promotions get a range, not a point estimate.
- Ask what marketing is actually committing: an email to the full list, a paid flight, and a homepage feature are three different uplifts. Get the campaign calendar, not the campaign vibe.
- After the promotion, record actual uplift next to the estimate. The library of these pairs is what makes next quarter's estimates credible.

## From forecast to order

- **Reorder point** = expected demand over supplier lead time + safety stock.
- **Safety stock** covers variability, not hope: size it from demand variance and the supplier's *actual* lead-time record. Proven sellers earn generous cover; unproven products earn none — a stockout on an unproven product is information, an overstock is a write-off.
- **Order quantity** balances price breaks and shipping efficiency against carrying cost and obsolescence risk. State the weeks of cover the order creates; an order creating more than a season of cover needs an explicit justification.

## Stock-cover checks (pre-launch)

- Cover in weeks = on-hand ÷ forecast weekly velocity *including the planned uplift*.
- Answer in one of three forms: "yes" (cover exceeds campaign window plus replenishment), "no" (it does not and cannot), or "yes if" (an order placed by a named date closes the gap).

## Scoring accuracy

- Score every forecast at 4 and 12 weeks: percentage error per product, and bias across products (persistently high or low is a process fault, not bad luck).
- Diagnose misses into: baseline wrong, uplift wrong, or supply event. Each has a different fix — better history, better promotion library, or better supplier tracking.
