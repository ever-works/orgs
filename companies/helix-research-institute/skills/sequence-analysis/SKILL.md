---
name: sequence-analysis
description: Use when nucleotide or protein sequences must be aligned, quality-checked, or characterized — the foundation step before variant calling, phylogenetics, or annotation.
---

# Sequence Analysis

Produce clean, well-QC'd sequence data and alignments that downstream steps can trust, because a bad alignment makes everything after it confidently wrong.

## Procedure

1. **Inspect raw quality first.** Check read quality, length distribution, adapter content, and contamination before any alignment. Record what you trimmed or filtered and why.
2. **Pick the reference and method deliberately.** Choose the reference genome or database version and the aligner appropriate to read type and length; note both — defaults are decisions.
3. **Align and audit.** Run alignment, then check mapping rate, coverage uniformity, and duplication. Low or uneven mapping is a red flag to resolve, not ignore.
4. **For multiple-sequence alignment,** choose an aligner suited to the divergence level, then inspect and trim poorly aligned or gap-heavy columns; document trimming.
5. **Handle contamination and artifacts.** Screen for cross-sample or foreign-sequence contamination; flag suspicious regions rather than analyzing them.
6. **Characterize as needed.** Compute composition, identity, conserved and divergent regions, or domain content per the task, tying each metric to the biological question.
7. **Version everything.** Record tool versions, reference build, and parameters so the step is reproducible.
8. **Report coverage and confidence** honestly — where the data supports conclusions and where it does not.

## Quality bar

- QC is done and documented before alignment is trusted.
- Reference build, tool, and parameters are recorded.
- Alignments are inspected and trimmed, not taken on faith.
- Contamination and low-coverage regions are flagged, not silently included.

## Output format

Cleaned sequences and/or a trimmed alignment, plus a QC record: input quality, filtering applied, reference and tool versions, mapping/coverage metrics, and flagged regions.
