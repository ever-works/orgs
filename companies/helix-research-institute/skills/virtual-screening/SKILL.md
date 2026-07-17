---
name: virtual-screening
description: Use when filtering a large compound library against a target — designing the scoring cascade, running it, and returning an auditable, tractable hit list.
---

# Virtual Screening

Run a library-scale funnel that returns a defensible hit list and can show exactly what each stage removed and why.

## Procedure

1. **Confirm the target is screen-ready.** A validated site and a clear success criterion; without them the campaign has nothing to enrich toward.
2. **Curate the library.** Standardize structures, remove reactive and undesirable chemotypes, and apply property filters up front. Record starting count and post-curation count.
3. **Design the cascade.** Order filters cheap-to-expensive: property and structural filters, then a faster docking or similarity stage, then more expensive scoring on survivors. State each stage's criterion.
4. **Validate with a decoy set.** Confirm the cascade enriches known actives over decoys before trusting its ranking. Report the enrichment.
5. **Run and track attrition.** Record how many compounds each stage removes so the funnel is auditable end to end.
6. **Triage hits.** Screen surviving compounds for assay-interference (PAINS), aggregation liability, and physicochemical tractability; drop nuisances.
7. **Cluster the survivors** to ensure chemical diversity rather than one over-represented scaffold.
8. **Rank and rationalize.** Return a prioritized list where each top hit has a reason beyond its score.

## Quality bar

- Per-stage attrition counts make the funnel auditable.
- The cascade's enrichment over decoys is demonstrated.
- Nuisance and interference compounds are removed before the hit list ships.
- The final list is chemically diverse, not one scaffold repeated.

## Output format

A prioritized hit list with per-hit rationale, funnel documentation (library, per-stage criteria and attrition), the decoy-enrichment result, and nuisance/diversity notes.
