---
name: clinical-data-analysis
description: Use when analyzing patient cohorts or clinical datasets — cohort definition, missing-data and censoring handling, outcome and survival modeling with honest confounding control.
---

# Clinical Data Analysis

Turn messy clinical data into defensible outcome estimates, with the cohort and model specified before the outcome is seen.

## Procedure

1. **Define the cohort before the outcome.** Write inclusion and exclusion criteria and an index date up front; post-hoc inclusion rules manufacture findings. Produce a patient flow count.
2. **Profile the data.** Missingness patterns, distributions, and data-quality issues per variable. Understand why data is missing, not just how much.
3. **Model missingness.** Choose a principled approach (complete-case only when justified, otherwise imputation) and state the assumed missingness mechanism. Silent row-dropping is a bias.
4. **Handle time correctly.** For time-to-event outcomes, define time origin carefully and guard against immortal-time bias; handle censoring explicitly.
5. **Specify the model** matched to the outcome — survival, logistic, or other — and include confounders by design or adjustment. State the formula.
6. **Check assumptions.** Proportional hazards, linearity, calibration, and influential points. A violated assumption gives a confident wrong hazard ratio.
7. **Report effects with uncertainty.** Hazard or odds ratios with confidence intervals and absolute context, not relative risk alone.
8. **Make it reproducible.** Package inputs, code path, and outputs so the result can be re-run.

## Quality bar

- Cohort and index date are fixed before outcome data is examined.
- Missingness mechanism is stated and handled principledly.
- Immortal-time and censoring are addressed explicitly.
- Effects are reported with intervals and are reproducible from raw data.

## Output format

An analysis brief: cohort definition with a flow diagram, missing-data handling, model specification and assumption checks, effect estimates with intervals, and a reproducibility package reference.
