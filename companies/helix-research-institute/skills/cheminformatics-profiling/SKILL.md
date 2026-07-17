---
name: cheminformatics-profiling
description: Use when characterizing molecules and their structure-activity relationships — computing descriptors, drug-likeness, and separating real SAR trends from noise.
---

# Cheminformatics Profiling

Characterize compounds and turn scattered activity data into structure-activity insight on a clean, standardized dataset.

## Procedure

1. **Standardize structures first.** Normalize tautomers, protonation, salts, and stereochemistry; deduplicate. Everything computed on messy structures is quietly wrong.
2. **Attach activity to its assay.** Tie every potency value to the assay and units that produced it. Cross-assay comparisons get an explicit caveat.
3. **Compute descriptors and fingerprints** appropriate to the question — physicochemical properties, drug-likeness metrics, and structural fingerprints. State which and why.
4. **Assess drug-likeness** against relevant rule sets as guidance, not gospel; note where useful chemistry legitimately breaks the rules.
5. **Map SAR.** Cluster analogs and relate structural changes to activity changes. Look for activity cliffs and consistent trends.
6. **Test the trend.** An SAR pattern over a handful of analogs is a hypothesis — check whether it holds statistically before drawing the arrow.
7. **Flag liabilities** visible from structure: reactive groups, known toxicophores, and assay-interference (PAINS) motifs.
8. **Summarize tractability** per series so the lead decision rests on more than potency.

## Quality bar

- Structures are standardized and deduplicated before any computation.
- Activity values are tied to their assay; cross-assay caveats are explicit.
- SAR trends are tested, not asserted from a few points.
- Structural liabilities are flagged early.

## Output format

A profiled dataset (standardized structures, descriptors, drug-likeness) and a SAR summary: clustered analogs, tested trends with confidence, activity cliffs, flagged liabilities, and a per-series tractability note.
