---
name: source-triage
description: Use when evaluating a new information source for the watchlist, or re-grading an existing one after it earns or loses trust — so every feed the company reads has a known reliability grade.
---

# Source Triage

Grade an information source before the company depends on it, and keep the grade current. An ungraded source silently poisons every digest and monitor built on top of it.

## Procedure

1. **Identify the source precisely.** Name, URL or access path, publisher or maintainer, update cadence, and the topics it covers. A "source" that cannot be pinned down this precisely is rejected at intake.
2. **Establish provenance.** Who produces this, and what is their incentive? Primary data, independent analysis, interested-party publication, or aggregation of other sources? Aggregators get traced one level down to what they aggregate.
3. **Grade on five axes**, each strong / moderate / weak with a one-line justification:
   - **Accuracy track record** — spot-check three recent claims against independent evidence.
   - **Timeliness** — how quickly it reflects events relative to alternatives.
   - **Independence** — distance from parties who benefit from its claims.
   - **Coverage depth** — completeness within its stated beat.
   - **Stability** — likelihood it still exists and behaves the same in six months.
4. **Assign the composite grade:** trusted (usable as sole source for routine claims), corroborate (usable only alongside an independent source), or reject (do not wire anything to it). Note which axis drove the grade down.
5. **Define the usage rule.** State what the source may be used for: digest input, monitor feed, verification reference — and what it may not. A source can be trusted for facts and rejected for interpretation.
6. **Record in the source map** with the grade, date, justification, and a re-review date. Default re-review: quarterly for trusted, monthly for corroborate.
7. **On re-grade**, diff against the prior entry: what changed, which incidents drove the change. Keep the history — a source's grade trajectory is itself intelligence.

## Quality bar

- Every grade is justified by checkable evidence, not reputation or familiarity.
- No source enters a monitor pipeline at corroborate or below without a paired independent source.
- The source map never contains an entry without a date and a re-review date.

## Output format

One source-map entry: identification block, five-axis grades with justifications, composite grade, usage rule, dates.
