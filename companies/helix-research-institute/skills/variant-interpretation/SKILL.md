---
name: variant-interpretation
description: Use when called genomic variants must be filtered, annotated, and classified for biological or clinical significance against curated evidence and population frequency.
---

# Variant Interpretation

Turn a raw call set into annotated, classified variants where every kept variant has a documented reason and every classification has evidence behind it.

## Procedure

1. **Quality-filter the call set.** Apply depth, allele-balance, mapping-quality, and strand-bias filters appropriate to the platform. Record thresholds and how many variants each removes.
2. **Annotate functionally.** Add gene context, predicted consequence, and affected transcripts using a stated annotation source and genome build.
3. **Add population frequency.** Cross-reference population databases to identify common variants unlikely to be causal for a rare phenotype. Note the populations used.
4. **Gather evidence per variant of interest.** Pull clinical significance, functional-study evidence, and computational predictions; keep the sources and their versions.
5. **Classify against explicit criteria.** Use a defined evidence framework (e.g., pathogenic / likely pathogenic / uncertain / likely benign / benign) with the specific evidence codes that drove each call — never intuition.
6. **Respect uncertainty.** A variant of uncertain significance stays uncertain; do not round it toward the answer someone wants.
7. **Separate biology from decision.** State what the evidence supports; leave clinical action to the clinical context and reporting step.
8. **Log provenance.** Record every database and guideline version so the interpretation can be revisited as knowledge updates.

## Quality bar

- Every filter and its variant-removal count is documented.
- Classifications cite explicit evidence codes and the frequency data behind them.
- Uncertain variants are reported as uncertain, not inflated.
- Database and guideline versions are recorded.

## Output format

An annotated, classified variant table (variant, consequence, frequency, evidence codes, classification, rationale), a filtering record, and a provenance list of sources and versions consulted.
