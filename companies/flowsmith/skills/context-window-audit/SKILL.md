---
name: context-window-audit
description: Use when working sessions feel slow, spend trends upward, or on the standing efficiency cadence — measures what actually occupies the context window and the session's operating surface, then returns ranked trims with expected savings.
---

# Context Window Audit

A session's context window is a budget, and most of it is spent before the first task token: standing instructions, tool inventories, preloaded references, accumulated history. The audit measures that overhead honestly, separates load-bearing weight from dead weight, and prices every proposed trim.

## Taking the measurement

1. Define the window: which sessions, over what period, doing which kinds of work. An audit without a defined window produces anecdotes.
2. Inventory the standing overhead by category, with sizes:
   - Persistent instructions and configuration loaded into every session
   - Tool and integration inventories, including ones never invoked
   - Preloaded skills, references, and templates
   - Conversation history and carried-over state
3. Measure actual use against the inventory: which instructions changed behavior, which tools were invoked, which references were consulted. Unused-but-loaded is the primary finding category.
4. Look for repetition: the same file re-read many times, the same explanation re-derived, the same output regenerated. Repetition is cheaper to fix than size.
5. Score session health 0-100 against the company baseline, so trend matters more than any single reading.

## Classifying findings

For each item of overhead, assign one verdict:

- **KEEP** — demonstrably used and load-bearing; note what it does.
- **TRIM** — used, but oversized for its value; propose the smaller form.
- **DEFER** — needed sometimes; propose loading on demand instead of always.
- **DROP** — no observed use in the window; propose removal with a rollback note.

## Reporting

- Rank recommendations by net expected saving: (tokens saved per session x sessions per period) minus the cost of making and maintaining the change.
- Every recommendation names its risk: what breaks if the item turns out to be quietly load-bearing, and how fast it can be restored.
- After adoption, re-measure the same window and report realized against predicted — misses get recorded like any other correction.

## Quality bar

- Every number in the report is measured or explicitly labeled an estimate; no unlabeled guesses.
- No DROP without a rollback path stated.
- The health score is comparable across audits — same method, same categories, every time.
- A trim that degrades output quality is reported as a failure, not a saving.
