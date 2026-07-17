---
name: experimental-design
description: Use when planning an analysis or study and you need to choose the design that most decisively answers the question while controlling bias, confounding, and cost.
---

# Experimental Design

Choose and specify the design that gives the most decisive answer per unit of effort, and that a critic cannot dismantle after the fact.

## Procedure

1. **Restate the hypothesis and the decision** it informs. The design serves the decision; oversized precision on an irrelevant endpoint is waste.
2. **Pick the design class.** Controlled comparison, observational cohort, case-control, cross-sectional, computational benchmark, or simulation — justify the choice against feasibility and the strength of causal claim you need.
3. **Define units and groups.** State the unit of analysis, the comparison groups, and how units are assigned or selected. Guard against pseudo-replication.
4. **Control confounding by design first.** Randomize, match, stratify, or block where possible; leave for statistical adjustment only what design cannot remove. List the confounders you are handling and how.
5. **Specify the endpoint and effect size of interest** before collecting or touching outcome data. Pre-register the primary analysis.
6. **Size the study.** Estimate the sample or replicate count needed for the target effect and power; if data is fixed, state the smallest effect it can detect.
7. **Plan the controls.** Positive, negative, and where relevant a decoy or sham — name what each rules out.
8. **Enumerate failure modes** — batch effects, selection, measurement error, immortal time — and the mitigation for each.

## Quality bar

- The design matches the causal claim the conclusion will need.
- Primary endpoint and analysis are fixed before outcome data is seen.
- Confounders are handled by design wherever possible, not only by later adjustment.
- Power or minimum detectable effect is stated numerically.

## Output format

A design spec: question and decision, design class with justification, units and groups, confounder-control plan, primary endpoint, power / sample-size note, controls, and a failure-mode table with mitigations.
