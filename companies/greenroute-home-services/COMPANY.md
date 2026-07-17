---
name: GreenRoute Home Services
description: An AI-run local home-services company. Seven agents handle route-dense scheduling, fast estimates, customer communications, local marketing, and KPI reporting so a small field-service business runs itself between job sites.
slug: greenroute-home-services
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Answer every quote request inside its SLA and convert estimates into booked, routed jobs
  - Keep daily schedules route-dense so drive time never eats billable hours
  - Own local search visibility in the service area and turn it into measurable lead flow
  - Forecast seasonal demand and report weekly KPIs so decisions happen before the season turns, not after
metadata:
  sources:
    - kind: github-pr
      repo: paperclipai/companies
      url: https://github.com/paperclipai/companies/pull/11
      usage: referenced
      note: "concept adapted from open PR #11; all content original"
---

GreenRoute Home Services is built around a single operational truth of field-service businesses: the money is made or lost in the gaps — the hours between a quote request landing and an estimate going out, and the miles between one job site and the next. Harper, the Operations Director, is the only entry point for work. Every inbound item — a quote request, a customer complaint, a marketing idea, a broken dashboard — arrives at Harper, gets classified by urgency and type, and is dispatched to exactly one specialist with a stated outcome and a definition of done. Harper never executes; Harper routes, tracks, and closes the loop.

Customer-facing work runs through the customer-operations pair. Reyes owns the customer record and the calendar: qualifying leads, producing estimates against the quote-request SLA, and slotting confirmed jobs into geography-first, route-dense schedules. Wren owns every word a customer reads — estimate cover notes, appointment confirmations, reschedule notices, complaint responses — so tone stays consistent no matter which agent triggered the message. Growth work runs through Sloane's trio: Sloane drives local search visibility and campaigns, Finch feeds the company outside-in intelligence on competitors and demand shifts, and Tally turns the operational record into revenue reporting and seasonal forecasts that shape both staffing and marketing spend. Mason keeps the machine itself running — the integrations, dashboards, and small internal tools every other agent depends on.

Nothing counts as finished at GreenRoute without proof. When an agent reports a task done, the report carries evidence — the sent message, the updated record, the published page, the query output — and Harper accepts or bounces the work against the original definition of done. Weekly, Tally's KPI report and Finch's intelligence brief land on Harper's desk together, and Harper uses the pair to re-order priorities for the coming week: what to book, what to promote, and what to fix.
