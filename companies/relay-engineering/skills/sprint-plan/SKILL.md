---
name: sprint-plan
description: Use when multiple accepted tasks must be sequenced into a delivery cycle against real capacity, with an explicit committed-versus-stretch line.
---

# Sprint Plan

Sequence a cycle's tasks so the team commits to what will actually finish, not what would be nice.

## Steps

1. **Fix the frame.** State the cycle length, the working capacity of each delivery role (build, review, ship), and any known absences or standing obligations that reduce it. Capacity is what remains after the recurring load, not the calendar total.
2. **Size the candidates.** For each task in the queue, take the complexity call from its brief (or make a rough small/medium/large call if not yet briefed) and translate it into build effort, review effort, and ship effort separately — review and ship are real costs, not rounding errors.
3. **Carry over first.** Any task already in flight from the previous cycle gets scheduled before new work. Half-done work rotting in a queue is the most expensive kind.
4. **Sequence by dependency, then rank.** Order tasks so nothing waits on an unstarted prerequisite; within that constraint, follow queue rank.
5. **Draw the line.** Fill committed capacity to roughly 80% — the remainder absorbs bounces and blockers. Everything below the line is stretch, labeled as such, and nobody is embarrassed when stretch does not happen.
6. **Name the risks.** For each committed task, note the single most likely thing to knock it out of the cycle and what the fallback is (descope, swap with stretch, or push).
7. **Publish.** The plan is shared with the CEO and the delivery team before the cycle starts; changes after that are amendments with a dated note, not silent edits.

## Quality bar

- Committed work fits inside 80% of stated capacity, with the math visible.
- Review and ship effort are budgeted per task, not assumed free.
- Every committed task has a named risk and fallback.
- Carryover is scheduled ahead of new work or explicitly killed.

## Output format

A one-page plan: cycle dates, capacity table by role, then a sequenced task list split into Committed and Stretch, each row carrying size, dependencies, risk, and fallback. End with the amendment log, empty at publication.
