---
name: lessons-ledger
description: Use when a correction, surprise, or repeated mistake occurs — or before starting work in an area where the company has been burned before — so hard-won knowledge is written once and consulted forever instead of re-learned at full price.
---

# Lessons Ledger

The ledger is the company's persistent memory of corrections: every time reality disagreed with what we believed, the disagreement gets recorded in a shape that future work can actually consult. A lesson that lives only in one agent's session is a lesson the company will pay for again.

## When to write an entry

Write immediately — before the current gate closes — whenever:

- A reviewer returns work for a defect that better knowledge would have prevented
- An investigation disproves something the company previously assumed
- A debugging session confirms a root cause, especially one that took real effort to find
- A plan step fails in execution for a reason the plan could have anticipated
- An efficiency prediction (saving, cost, timing) turns out wrong in either direction

Do not write entries for one-off typos or trivia; the ledger's value is density. If it would not change how someone works next month, it is not a lesson.

## Entry shape

One entry, five fields, kept terse:

```
AREA:    <module, workflow, or topic the lesson attaches to>
BELIEF:  <what we thought or did>
REALITY: <what turned out to be true, with the evidence>
RULE:    <the forward-looking instruction — imperative, checkable>
COST:    <what the mistake cost this time — rework, delay, defect shipped>
```

The RULE field is the working part. "The config loader ignores nested overrides" is trivia; "verify nested config overrides by running the loader, not by reading the schema" is a rule someone can follow.

## When to read the ledger

- **Planning:** before writing any plan, search the ledger for the areas the plan touches, and cite applicable entries in the plan itself — an uncited applicable lesson is a plan defect.
- **Review:** check diffs against the ledger; re-committing a recorded mistake is an automatic return.
- **Research:** when the codebase contradicts an existing entry, the entry gets updated, not ignored — stale lessons are worse than none.

## Quality bar

- Entries are written in the same working session as the correction, never batched for later.
- Every entry has a checkable RULE; entries without one get rewritten before they are accepted.
- The ledger is searched at every Plan gate — provably, by citation.
- Duplicate lessons get merged on sight; a ledger nobody can skim is a ledger nobody reads.
