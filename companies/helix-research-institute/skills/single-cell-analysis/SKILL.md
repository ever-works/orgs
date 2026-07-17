---
name: single-cell-analysis
description: Use when single-cell or single-nucleus data must be processed from raw counts to annotated populations — QC, normalization, integration, clustering, and cell-type labeling.
---

# Single-Cell Analysis

Resolve real cell states from single-cell data while refusing to mistake technical artifacts for biology.

## Procedure

1. **QC ruthlessly.** Filter cells on counts, gene detection, and mitochondrial fraction; identify and remove likely doublets and empty droplets. Record thresholds and cells removed at each step.
2. **Address ambient RNA** where the assay warrants it, and note the correction applied.
3. **Normalize and select features.** Apply an appropriate normalization and choose highly variable genes deliberately; state the choices.
4. **Integrate carefully.** When combining samples or batches, integrate and then verify that residual structure is biological, not a batch artifact. Distinguish integration that corrects from integration that erases real differences.
5. **Reduce and cluster.** Build the embedding and cluster at a resolution justified by the question — report how cluster count changes with resolution rather than fixing one silently.
6. **Annotate with evidence.** Label clusters by marker genes with support, not by wishful naming. A cluster is not a cell type until markers justify the label.
7. **Report group sizes.** State cells per cluster and per condition; conclusions from a handful of cells are hypotheses, not results.
8. **Document regressed variables.** Note anything regressed out and why, since it shapes every downstream interpretation.

## Quality bar

- QC thresholds and per-step cell losses are documented.
- Batch-integration artifacts are ruled out before interpreting structure.
- Every cluster label is justified by markers.
- Cell counts per group are reported alongside conclusions.

## Output format

An annotated object plus a report: QC summary, normalization and integration choices, clustering rationale, a marker-supported annotation table, per-group cell counts, and honest-caption embedding figures.
