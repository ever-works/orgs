---
name: cross-division-handoff
description: Use when passing work between agents or divisions, so the receiver can continue without re-discovering context the sender already had.
---
# Cross-Division Handoff

A handoff is complete when the receiver can act without asking the sender
anything. Anything less is a delegation of confusion.

## Steps — sender

1. **State what was done.** Deliverables, where they live, and their state
   (draft, reviewed, final).
2. **State what was deliberately not done.** Exclusions and known gaps, so the
   receiver does not assume completeness that was never claimed.
3. **State what to check first.** The riskiest or least-finished part, named
   explicitly. Every piece of work has one.
4. **Attach the context that cost you something.** Decisions made and why,
   dead ends already explored, constraints discovered en route.
5. **Name the deadline and the decider** for the receiver's part of the work.
6. **Confirm receipt actively.** A handoff is not sent; it is accepted. Wait for
   the receiver's acknowledgment or their questions.

## Steps — receiver

1. Read the whole note before asking anything.
2. Ask your questions in one batch, within one working day.
3. Restate what you now own and by when. Silence is not acceptance.

## Quality bar

- Zero follow-up questions caused by information the sender already had.
- Exclusions are stated, not discovered downstream.
- The "check first" item is genuinely the riskiest part, not a formality.
- Ownership transfer is explicit — at no moment do both or neither own the work.

## Output format

    DONE: <what exists, where, in what state>
    NOT DONE: <deliberate exclusions and known gaps>
    CHECK FIRST: <the risky bit>
    CONTEXT: <decisions, dead ends, discovered constraints>
    NEEDED BY: <date> / DECIDER: <name>
