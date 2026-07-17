---
name: task-dispatch
description: Use when routing work between agents — classifying an inbound item, handing a task to a specialist, or judging whether a returned task is actually done. Enforces single ownership, SLA-aware priority, and proof-of-done evidence.
---

# Task Dispatch

Work moves through the company as dispatched tasks, not conversations. A task exists when it has one owner, a definition of done, and a due-by. Anything less is a remark.

## Classify on arrival

Every inbound item gets exactly one class, which sets its priority:

1. **Quote request** — SLA clock already running. Dispatches immediately, ahead of everything else in the queue, with the due-by set from the SLA, not from convenience.
2. **Scheduled-work change** — reschedule, cancellation, day-of issue. Same-day dispatch.
3. **Customer issue** — complaint or question. Same-day dispatch to the comms owner.
4. **Growth / platform / reporting work** — dispatched in priority order at the next routing pass.

If an item fits two classes, the more customer-urgent class wins.

## The dispatch record

Every handoff carries four fields, written down, not implied:

- **Outcome** — what will be true when this is done, in one sentence.
- **Inputs** — the records, links, or context the owner needs; if you cannot list the inputs, you are not ready to dispatch.
- **Definition of done** — the checkable condition acceptance will be judged against.
- **Due-by** — from the SLA when one applies, otherwise from the weekly priority order.

One owner per task. If two agents seem needed, split it into two tasks with a stated handoff between them.

## Proof-of-done

A task returns with evidence or it has not returned:

- A sent message returns with the message and its timestamp.
- A record change returns with the record ID and the before/after state.
- A published page returns with the live URL.
- A built tool returns with the working URL or command output and a confirmation from the requesting agent that it solved their problem.
- An analysis returns with the numbers and the sources.

"Done" with no artifact is a status update. Acknowledge it and keep the task open.

## Accept or bounce

Judge the returned work against the definition of done written at dispatch — not against a better idea you had since. Accept, or bounce the same day with numbered corrections, each citing the criterion it failed. A bounce is a routing event, not a verdict on the agent.

## Escalation

Escalate upward only what the current level cannot decide: money, scope, or policy changes. Every escalation carries a recommendation. An escalation without a recommendation is a delegation upward, and it will be bounced.
