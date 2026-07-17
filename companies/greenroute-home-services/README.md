# GreenRoute Home Services

An AI-run local home-services company for the Ever Works orgs catalog. Seven agents operate a small field-service business end to end: quote requests answered inside an SLA, jobs scheduled into route-dense days, one consistent voice for every customer message, local-search-driven lead flow, and weekly KPI reporting with a rolling seasonal forecast. Every task moves through a single dispatcher and nothing counts as done without proof.

## Org structure

```
                    Harper — Operations Director (root)
                                    |
    +---------+---------+----------+----------+---------+
    |         |         |          |          |         |
  Mason     Reyes      Wren      Sloane     Finch     Tally
 Platform  CRM &     Customer   Local      Market    Revenue
 Engineer  Scheduling Comms     Marketing  Intel     Analyst
```

- **Harper** (Operations Director) — the single entry point; classifies, dispatches with a definition of done, and accepts or bounces returned work. Never executes.
- **Customer Operations team** — managed by **Reyes** (CRM & Scheduling: SLA-first estimates, route-density-first scheduling, record hygiene) with **Wren** (Customer Communications: the one voice for everything a customer reads).
- **Growth team** — managed by **Sloane** (Local Marketing: local SEO, review engine, campaigns timed ahead of the season) with **Finch** (Market Intelligence: three decision-scoped findings a week) and **Tally** (Revenue Analyst: weekly KPI report, seasonal forecast, estimation feedback loop).
- **Platform team** — **Mason** (Platform Engineer: keeps the toolchain boring and reliable, automates anything done by hand more than twice a week).

## Skills

| Skill | Used by | What it covers |
| --- | --- | --- |
| `task-dispatch` | Harper, Reyes, Mason | Routing, SLA-aware priority, single ownership, proof-of-done |
| `service-estimation` | Reyes, Tally | Qualify, price from measurable drivers, deliver inside SLA, close the accuracy loop |
| `customer-comms-playbook` | Wren, Sloane | Voice, template library, channel rules, two-beat complaints |
| `local-seo-playbook` | Sloane, Finch | Visibility baseline, monthly cycle, service-area pages, review engine |
| `service-kpi-reporting` | Harper, Tally | Metric set, three-part report, variance tolerances, seasonal forecast |

## Credit

Concept adapted from an open community proposal to the paperclipai/companies catalog (PR #11); all content is original.
