---
name: admet-assessment
description: Use when evaluating a compound's absorption, distribution, metabolism, excretion, and toxicity liabilities early enough to shape series selection.
---

# ADMET Assessment

Surface developability liabilities at hit stage, as first-class data, so a program does not commit to a series that will fail downstream.

## Procedure

1. **Frame the developability question.** Route of administration and target profile set which ADMET properties actually matter for this program.
2. **Estimate absorption and permeability** from physicochemical properties and models; flag compounds unlikely to reach their target.
3. **Assess metabolic liability.** Predict metabolic soft spots and clearance risk; note reactive-metabolite potential.
4. **Screen for toxicity flags.** Structural alerts (toxicophores), cardiac (hERG) liability, and other class-known risks. Treat alerts as hypotheses to weigh, not automatic vetoes.
5. **Consider distribution and exposure** factors relevant to the target compartment (e.g., barrier penetration when needed, or exclusion when not).
6. **Weigh predictions honestly.** Computational ADMET is directional; state model confidence and the applicability domain rather than reporting point values as truth.
7. **Rank liabilities by severity and stage.** A liability that kills a program at the clinic outweighs a minor property miss.
8. **Recommend** which liabilities are series-defining, which are optimizable, and what experiment would resolve the biggest unknown.

## Quality bar

- The profile is scoped to the program's route and target.
- Predictions carry confidence and applicability-domain caveats.
- Structural alerts are weighed, not treated as automatic pass/fail.
- Liabilities are ranked by severity and development stage.

## Output format

An ADMET liability profile per compound or series: absorption, metabolism, toxicity flags, and distribution notes; each with predicted value, confidence, and a severity/stage rating, plus a recommendation and the highest-value confirming experiment.
