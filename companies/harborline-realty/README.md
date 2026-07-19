# Harborline Realty

An AI-run real-estate brokerage for the Ever Works orgs catalog. Eight agents carry a property through the full lifecycle: evidence-based pricing, listing prep and launch, marketing and professional media, buyer and seller representation, and a deadline-driven path to closing — with a concierge keeping every client informed at each milestone. Every engagement is decomposed by a single principal broker, executed by one owner per task, and nothing counts as done without the finished artifact.

## Org structure

```
                          Marina — Principal Broker (root)
                                        |
   +----------+----------+----------+----------+----------+----------+
   |          |          |          |          |          |
 Sabine     Elias       Juno       Priya       Dev        Noor
 Listing    Buyer's    Marketing  Transaction Market     Client
 Agent      Agent      Lead       Coordinator Analyst    Concierge
                        |
                       Rhys
                     Photography
                     Coordinator
```

Reporting lines run to Marina; team membership is separate — Juno and Rhys sit on the Operations team that Priya manages, while Noor sits on the Sales team that Sabine manages.

- **Marina** (Principal Broker) — the single entry point; classifies and decomposes every engagement, dispatches with a definition of done, reviews and signs off, and holds compliance and fiduciary duty. Never executes.
- **Sales team** — managed by **Sabine** (Listing Agent: evidence-based pricing, prep, launch, and seller-side negotiation) with **Elias** (Buyer's Agent: brief-first search, financing verification, and winning offers) and **Noor** (Client Concierge: milestone-driven, plain-language updates for both sides).
- **Operations team** — managed by **Priya** (Transaction Coordinator: the deadline calendar and contingency ledger that carry every contract to a clean closing) with **Juno** (Marketing Lead: per-property campaigns and listing copy) and **Rhys** (Photography Coordinator: scheduled, quality-checked media timed to land before launch).
- **Dev** (Market Analyst) — the evidence layer: comparative analyses, absorption reads, and offer-competitiveness assessments that keep every pricing decision grounded.

## Skills

| Skill | Used by | What it covers |
| --- | --- | --- |
| `comparative-market-analysis` | Marina, Sabine, Elias, Dev | Honest comps, real adjustments, and a defensible value range for pricing and offers |
| `listing-launch-checklist` | Sabine, Juno | Gate-by-gate launch: price, prep, disclosures, media, copy, syndication |
| `property-marketing-plan` | Juno, Rhys | Target buyer, message, media spec, channels, launch sequence, and repositioning |
| `transaction-timeline` | Marina, Priya | Deadline calendar, contingency ledger, document verification, clean closing |
| `buyer-needs-brief` | Elias, Noor | Must-haves, deal-breakers, verified budget and financing, timeline, communication style |

## What to expect after import

Importing Harborline Realty creates one company with eight agents, two teams (Sales and Operations), and five skills, wired into the org hierarchy shown above. Each agent arrives with a role-specific operating guide describing where its work comes from, what it produces, and who it hands off to; the skills attach to the agents that use them. On the Ever Works platform the agents receive Tasks, work within Works and projects, use their attached skills, and coordinate through Tasks — the principal broker as the single intake and review point, the two team managers running sales and operations, and the market analyst supplying evidence across both. Point it at a listing, a buyer, or an in-flight transaction and the roster picks up its part of the lifecycle.
