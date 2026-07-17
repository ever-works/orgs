---
name: differential-expression
description: Use when quantifying which genes or features change between conditions — choosing the right model, controlling false discovery, and reporting effect sizes honestly.
---

# Differential Expression

Quantify condition-linked expression changes with a properly specified model and honest false-discovery control.

## Procedure

1. **State the comparison and design.** Write the contrast explicitly and identify covariates — batch, sequencing depth, subject, condition. Confounded designs cannot be rescued later.
2. **Check the count structure.** Confirm the data type (bulk vs single-cell, counts vs normalized) and choose a method whose error model matches it.
3. **Filter low-signal features** before testing to improve power, and record the filter.
4. **Model covariates explicitly.** Include batch and known confounders in the model rather than hoping randomization handled them. Note the model formula.
5. **Fit and inspect dispersion.** Check the mean-variance relationship and model fit; a misfit dispersion gives false hits.
6. **Control false discovery.** Apply and name a multiple-testing correction; report adjusted p-values, never raw ones, across thousands of tests.
7. **Report effect sizes.** Give log-fold-changes with the significance so a reader sees magnitude, not just a yes/no. Distinguish statistically from biologically meaningful.
8. **Sanity-check hits.** Inspect top genes for plausibility and for driving by a single sample or outlier.

## Quality bar

- The design and covariates are explicit; confounders are modeled.
- Method matches the count structure.
- Adjusted p-values and effect sizes are reported together.
- Top hits are checked against single-sample artifacts.

## Output format

A results table (feature, log-fold-change, adjusted p-value), the model formula and filtering used, a dispersion/fit note, and a short list of sanity-checked top hits with any caveats.
