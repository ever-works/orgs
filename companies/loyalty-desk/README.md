# Loyalty Desk

Loyalty Desk is a prebuilt AI-company package for the Ever Works orgs catalog. It models a
customer success and support organization whose single job is retention — keeping customers
by system rather than by luck. It pairs the proactive side (account health scoring, adoption,
renewals prepared before they're due) with the reactive side (a fast, correct support queue
and a self-serve help center), and wraps both in a cross-cutting operations layer that runs
escalations to a closed loop and measures where accounts are actually leaking. Import it when
you want a CX function that turns at-risk accounts into renewals through evidence and owned
interventions, not hope.

## How it works

Everything enters through the **Head of Customer Experience**, who owns the book of accounts
and the retention target. Incoming signals — a backing-up support queue, a cohort trending
red on health, a quarter of renewals coming due — become Works, each decomposed into Tasks
with a single named owner and a definition of done. Support tickets are resolved and then
reviewed for a knowledge gap before they close; red health scores become owned interventions;
renewals are worked from a written risk review. Every handoff between teams is logged on the
account's or ticket's Task, so the trail from first signal to renewal stays intact.

## Org structure

**Head of Customer Experience** (Priya Ravel) is the single root. Reporting to her: the
Customer Success Lead, the Support Lead, the Escalation Manager, and the Retention Analyst.
The Customer Success Manager reports to the Customer Success Lead; the Support Agent and the
Knowledge Base Lead report to the Support Lead.

### Teams

- **Success** — manager: Customer Success Lead (Tomas Vega); includes the Customer Success
  Manager (Ana Belova). Owns the proactive side: health scoring, adoption, outcome-focused
  business reviews, and renewals prepared and protected before they come due.
- **Support** — manager: Support Lead (Rachel Nkemdi); includes the Support Agent (Kofi
  Mensah) and the Knowledge Base Lead (Ingrid Solberg). Owns the reactive side: a fast,
  correct queue backed by a shared macro library, and a help center that turns each resolved
  issue into an article so volume moves off the queue.
- **Operations** — manager: Escalation Manager (Daniel Okafor); includes the Retention
  Analyst (Lena Farsi). Owns the cross-cutting layer: disciplined escalations run to a closed
  loop, and the analytics that show where accounts leak and which renewals are truly at risk.

### Agents

| Agent | Persona | Reports to |
| --- | --- | --- |
| head-of-cx | Priya Ravel — Head of Customer Experience | — (root) |
| csm-lead | Tomas Vega — Customer Success Lead | head-of-cx |
| csm | Ana Belova — Customer Success Manager | csm-lead |
| support-lead | Rachel Nkemdi — Support Lead | head-of-cx |
| support-agent | Kofi Mensah — Support Agent | support-lead |
| knowledge-lead | Ingrid Solberg — Knowledge Base Lead | support-lead |
| escalation-manager | Daniel Okafor — Escalation Manager | head-of-cx |
| retention-analyst | Lena Farsi — Retention Analyst | head-of-cx |

### Skills

- **account-health-scoring** — build a weighted, predictive health score and turn red accounts into owned plays.
- **escalation-runbook** — one owner, honest cadence, customer-confirmed close, and a prevention step.
- **help-article-authoring** — write task-first, findable articles that deflect the next ticket.
- **support-macro-library** — build accurate, personalizable canned replies that stay fast without going robotic.
- **renewal-risk-review** — classify each renewal on leading indicators and work it early with a play and a walk line.

## What to expect after import

You'll get one company with 8 agents, 3 teams, and 5 skills, wired so the reporting lines,
team memberships, and skill references all resolve. Agents receive Tasks, work within the
account's or ticket's Work, use their attached skills, and coordinate handoffs through Task
updates. Point the Head of Customer Experience at a renewal cycle to kick off risk reviews,
hand the Support Lead a backing-up queue to triage, or ask the Retention Analyst where the
funnel is leaking. There are no external dependencies or credits — every file in this package
is original.
