---
name: memory-hygiene
description: Use when maintaining the company's shared notes on cadence — merging duplicates, retiring stale entries, fixing the index — so any agent can find the current truth in one hop.
---

# Memory Hygiene

Keep the shared knowledge base small, current, and navigable. A note store that only grows becomes write-only: everyone files, nobody finds.

## Procedure

1. **Sweep the index first.** Verify every index entry points at a live note and every note is reachable from the index. Orphans get indexed or deleted; dead links get fixed. The index is the contract — repair it before touching content.
2. **Hunt duplicates.** Find notes covering the same subject (same monitor, same source, same goal, same decision). Merge into the most current one, carry over anything unique from the losers, and leave a redirect line at the old locations if anything links there.
3. **Retire the stale.** A note is stale when acting on it would be wrong: superseded decisions, retired monitors, sources no longer watched. Move to an archive section with a dated retirement line — deletion loses history; unmarked staleness poisons it.
4. **Reconcile registries against reality.** The monitor registry, source map, and goal register each claim to describe the live world — spot-check claims against actual state. Every mismatch gets fixed in the registry or flagged to the owning agent, never left standing.
5. **Date the undated.** Any assertion that could age ("currently", "recently", "the latest") gets an explicit date. Undated freshness claims are the primary vector of stale-note damage.
6. **Normalize names.** One canonical name per monitor, source, goal, and project, applied everywhere. Synonyms drift into duplicates; note the canonical form in the index.
7. **Compress the bloated.** Notes that accreted history until the current state is buried get restructured: current truth at the top, dated changelog below.
8. **Log the pass.** Record what was merged, retired, fixed, and flagged, with counts. The log makes hygiene auditable and shows whether the store is converging or the intake habits need fixing upstream.

## Quality bar

- Post-pass, any current fact is findable from the index in one hop.
- No two live notes claim to be the current truth on the same subject.
- Every registry spot-checked this pass matches reality or has an open flag.
- The pass log exists; a hygiene pass without a log did not happen.

## Output format

The pass log: counts per action (merged, retired, dated, fixed, flagged), the list of flags raised to owning agents, and any upstream intake habit worth correcting.
