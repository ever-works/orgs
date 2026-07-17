---
name: requirements-brief
description: Use when an accepted engagement needs its requirements developed into user stories and acceptance criteria concrete enough for technical decomposition.
---

# Requirements Brief

Requirements are promises the firm will be held to. Write them so they can be
kept, tested, and priced.

## Steps

1. **List the actors.** Every human role and external system that touches the
   solution. Requirements without an actor are decoration.
2. **Write stories per actor.** "As X, I need Y, so that Z" — where Z is a real
   consequence, not a restatement of Y. Cut stories no actor would recognize.
3. **Attach acceptance criteria per story.** Given/when/then form, covering the
   success path, at least one failure path, and the permission boundary (who
   must NOT be able to do this).
4. **State the non-functionals as numbers.** Latency, volume, availability,
   device or browser floor, data retention. "Fast" and "secure" are not
   requirements; "p95 under 500ms at 100 rps" is.
5. **Rank ruthlessly.** Must-have (engagement fails without it), should-have
   (client feels the absence), nice-to-have (cut first under pressure). No more
   than half the stories may be must-have — if they all are, ranking has not
   happened.
6. **Walk the edges.** For each must-have story ask: what happens on empty
   data, duplicate submission, offline, concurrent edit, and abuse? Record the
   decided behavior — "undefined" is a decision to have an incident later.

## Quality bar

- Every acceptance criterion is decidable by a tester without asking anyone.
- Failure and permission paths are covered, not just success.
- Non-functionals are numeric with a named measurement point.
- The ranking would let the CTO cut scope in an afternoon without a meeting.

## Output format

A requirements brief: actors, ranked stories with given/when/then acceptance
criteria, numeric non-functionals, and an edge-case decision table.
