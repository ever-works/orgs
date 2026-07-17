---
name: data-analysis-brief
description: Use when a task involves analyzing a dataset or computing quantitative results — the brief format forces data auditing, pre-registered methods, uncertainty reporting, and honest limitations.
---

# Data Analysis Brief

Every quantitative result the lab reports must arrive inside a brief with this structure. The format exists to make silent methodological choices loud.

## Procedure

1. **Audit the data before touching it.** Record provenance (who collected it, how, when), sample size, unit of observation, missing-value profile, and known collection biases. If the data cannot support the question, stop and deliver the refusal with reasons — that is a complete, valid brief.
2. **Pre-register the plan.** Before computing anything, write the methods section: which comparisons you will run, which statistics you will use, which thresholds count as meaningful, and how you will handle missing values and outliers. Date-stamp it.
3. **Compute the boring baseline first.** Distributions, base rates, group sizes, and denominators for every rate you intend to report. Most analytical errors are denominator errors; catch them here.
4. **Run the pre-registered analysis.** Report every planned comparison, including the ones that came out null. Nulls are results.
5. **Log deviations.** If you departed from the plan, record what changed and why in a deviations subsection. An unlogged deviation is a defect.
6. **Label exploration.** Anything computed beyond the plan goes in a clearly marked exploratory section and must never appear as a headline finding.
7. **Attach uncertainty to every number.** Ranges, intervals, or explicit variability statements — a point estimate alone is half a result.
8. **Write the causal-language check.** For each result, state in one line whether the design supports a causal reading or association only, and why.
9. **Bundle reproducibility material.** Queries, scripts, or an exact step list sufficient for a reviewer to retrace every reported number.

## Quality bar

- Every rate shows its denominator; every estimate shows its uncertainty.
- Pre-registered vs. exploratory results are visually impossible to confuse.
- Limitations are specific ("sample covers only Q1 signups") not generic ("more data needed").
- A reviewer can reproduce every number from the attached material without asking you anything.

## Output format

One brief: (1) question, (2) data audit, (3) pre-registered methods, (4) baseline figures, (5) results with uncertainty and causal-language check, (6) deviations, (7) exploratory findings, (8) limitations, (9) plain-language "what this does and does not show," (10) reproducibility attachments.
