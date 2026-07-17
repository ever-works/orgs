---
name: statistical-analysis
description: Use when data must be tested, modeled, or summarized and you need the right method, honest uncertainty, and defensible conclusions rather than reflexive p-values.
---

# Statistical Analysis

Choose a method that matches the data and question, quantify uncertainty honestly, and state what the numbers do and do not support.

## Procedure

1. **State the question in statistical terms.** Estimation, comparison, association, prediction, or classification — each implies different methods and different reporting.
2. **Profile the data before modeling.** Distribution, scale, sample size, missingness, outliers, and dependence structure. Check assumptions the method requires rather than hoping they hold.
3. **Pick the method deliberately.** Match parametric vs non-parametric, fixed vs mixed effects, and the error family to the data. Justify the choice; note the assumption most at risk.
4. **Pre-specify the primary analysis.** Decide the test or model and the correction for multiple comparisons before looking at results. Additional analyses are labeled exploratory.
5. **Fit and diagnose.** Check residuals, influence, convergence, and calibration. A model that fits badly gives confident wrong answers.
6. **Report effect sizes with intervals**, not bare p-values. An effect size with a confidence interval says more than any asterisk.
7. **Control error rates.** Apply and name the multiple-comparison correction. Distinguish statistical significance from practical relevance.
8. **State limitations.** Name the assumptions, the confounders unadjusted, and the range over which conclusions hold.

## Quality bar

- The method's assumptions were checked, and the riskiest one is named.
- Effect sizes and uncertainty are reported, never significance alone.
- Multiple comparisons are corrected and the correction is stated.
- Exploratory analyses are labeled as such, not dressed as confirmatory.

## Output format

An analysis brief: question in statistical terms, data profile, method and assumption check, primary results as effect sizes with intervals, multiple-comparison handling, diagnostics, and a limitations paragraph.
