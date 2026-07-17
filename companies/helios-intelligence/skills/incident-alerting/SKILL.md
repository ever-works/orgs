---
name: incident-alerting
description: Use when designing or tuning how alerts reach people — severity tiers, deduplication, escalation, and quiet hours — so one real event produces one interruption and noise produces none.
---

# Incident Alerting

Design the path between "a condition fired" and "a person was interrupted". Alert fatigue is a system defect: every unnecessary interruption spends trust that real alerts need.

## Procedure

1. **Define the severity tiers** and what each is allowed to do. A three-tier default:
   - **Act now** — interrupts immediately, any hour. Reserved for events where delay is costlier than a wake-up.
   - **Today** — delivered to the alert channel, expected to be read within hours, never interrupts quiet hours.
   - **Brief-worthy** — no alert at all; the item waits for the next scheduled brief or digest.
2. **Map each alert rule to a tier** using the written interruption bar for its topic. When unsure, tier down — a missed "today" item surfaces in the daily brief anyway; a false "act now" erodes the channel.
3. **Set the dedup window per rule:** the period during which repeat firings of the same condition collapse into a counter on the original alert instead of a new interruption. Size it to the signal's natural oscillation — a threshold crossed forty times in an hour is one event.
4. **Define the "changed materially" exception.** A deduped repeat breaks out of the window only if the situation escalates (magnitude tier jumps, direction reverses). Write that trigger down per rule.
5. **Set escalation paths:** what happens when an act-now alert is not acknowledged — who is notified next, after how long. An alert with no acknowledgment loop is a message in a bottle.
6. **Configure quiet hours** for every tier below act-now, and a morning delivery batch so suppressed alerts arrive together, ranked, rather than trickling.
7. **Write the alert template:** what fired, current value versus rule, severity, link to the monitor spec, and the recommended action. An alert whose reader must go look things up is half an alert.
8. **Audit monthly:** pull the period's alerts, count per tier, and check acknowledgment and action rates. Tiers with sub-50% action rates are over-alerting — retune or demote their rules.

## Quality bar

- One real-world event produces at most one interruption per audience.
- Every act-now alert has an acknowledgment loop and a recommended action.
- Dedup windows and breakout triggers are written per rule, not applied ad hoc.
- The monthly audit exists and its retuning decisions are logged.

## Output format

The alerting playbook for the rule set: tier map, per-rule dedup windows and breakout triggers, escalation paths, quiet-hours config, alert template.
