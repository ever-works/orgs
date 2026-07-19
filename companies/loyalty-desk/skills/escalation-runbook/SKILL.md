---
name: escalation-runbook
description: Use when an issue outgrows the support queue or threatens an account — assigns a single owner, sets severity and communication cadence, drives resolution, and closes the loop with the customer plus a prevention step so the same fire doesn't start twice.
---

# Escalation Runbook

A playbook for handling the issue that jumped a team — a bug, an outage, an account-threatening problem — so it gets one owner, honest communication, and a real close instead of a silent drift. The failure mode it prevents: an escalation that everyone is "aware of" and no one owns, going dark on the customer until the account is lost.

## Own it and size it

1. Assign one named owner on contact. The customer must know exactly one person now owns their problem — ambiguity about ownership is how escalations rot.
2. Assess severity by impact and blast radius: is one account or many affected, is it degraded or fully broken, is a renewal or a reference at stake. Severity sets the pace and who gets pulled in.
3. Confirm the facts before you act — who's affected, since when, reproducible or not — so the response targets the real problem, not the loudest symptom.

## Communicate and drive

4. Set a communication cadence sized to severity and tell the customer what it is. A predictable "still working, here's where we are" beats a silent wait every time.
5. Never give a false ETA and never go dark. If you don't know when it'll be fixed, say what you're doing and when you'll next check in — and hit that check-in.
6. Drive the fix, don't just track it. Pull in the people who can resolve it, clear their blockers, and keep pressure on the path to resolution rather than narrating it.

## Close the loop and prevent the repeat

7. Close only when the customer confirms it's resolved from their side — an internal fix or a merged change is not a close.
8. Run a short post-incident review: root cause, whether the signal was visible earlier, and what would have caught it sooner.
9. Route every prevention item as a Task to the team that owns it — a documentation gap to knowledge, a triage or macro fix to support, a relationship repair to success — and log the whole trail on the escalation's Task.

## Quality bar

- Exactly one owner, named to the customer.
- Severity assessed and cadence communicated, not improvised.
- No false ETAs, no silence.
- Closed by customer confirmation, and ending in an assigned prevention Task.

## Output format

Escalation record: owner + severity + impact → communication log with timestamps → resolution confirmed by the customer → post-incident review with root cause and prevention Tasks assigned to named owners.
