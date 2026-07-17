---
name: data-pipelines
description: Use when building or reviewing data ingestion and transformation pipelines, so results are replayable, tested, and traceable to source.
---

# Data Pipelines

A pipeline earns trust by being rerunnable: same window, same result, no
apologies. Everything else follows from that.

## Steps

1. **State the contract first.** Sources and their formats, expected volumes
   and arrival cadence, freshness promise to consumers, and who those
   consumers are by name. A pipeline without a named consumer is declined —
   it is future debt with a schedule.
2. **Design for idempotent replay.** Partition work by natural windows (day,
   hour, batch ID); every run overwrites or merges deterministically so
   reprocessing a window is safe and routine. Late-arriving and duplicate
   source data are handled by design — decide the watermark and dedup rules
   now, not during the first discrepancy.
3. **Layer the transformations.** Raw data preserved as delivered; a staging
   layer that types, deduplicates, and standardizes; marts shaped for
   consumers. Each layer's grain is stated in the model file. Metrics compute
   in one place only.
4. **Encode quality as blocking tests.** Uniqueness of keys, referential
   integrity between layers, freshness against the contract, and volume
   within expected bounds — running inside the pipeline, failing loudly, and
   blocking downstream runs. A warning nobody acts on is deleted or promoted.
5. **Make lineage explicit.** For every mart: which sources feed it and what
   breaks downstream if a source changes shape. Schema changes at a source
   trigger a review of this map, not a surprise.
6. **Operate it like a service.** Run history visible, failures alerting the
   owner, cost per run tracked, and a backfill procedure documented and
   rehearsed — backfills are routine surgery, not emergencies.

## Quality bar

- Rerunning any historical window changes nothing but timestamps.
- Every quality check either blocks or does not exist.
- Any number in a mart traces to source rows on demand.
- The freshness promise is monitored, not assumed.

## Output format

Versioned pipeline code with layered models, blocking quality tests, a lineage
map, and the contract (sources, freshness, consumers) in the repo beside the
code.
