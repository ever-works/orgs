---
name: materials-property-prediction
description: Use when predicting material properties by physics-based or data-driven models — choosing the method, validating without leakage, and flagging the applicability domain.
---

# Materials Property Prediction

Predict properties with a method matched to the accuracy the decision needs, and never let a model extrapolate silently outside the chemistry it knows.

## Procedure

1. **Match method to decision.** Cheap empirical or ML models for screening large spaces; physics-based methods to confirm survivors. State why the chosen fidelity fits the question.
2. **For data-driven models, featurize with provenance.** Choose structure or composition descriptors deliberately and record the featurization so it is reproducible.
3. **Split to prevent leakage.** Hold out by composition or structure family, not at random. Randomly splitting related materials inflates every metric and hides overfitting.
4. **Validate honestly.** Report held-out performance, not training fit, and compare against a sensible baseline so the model earns its complexity.
5. **Quantify per-prediction uncertainty**, not just aggregate accuracy — a screen needs to know which predictions to trust.
6. **Define the applicability domain.** Flag inputs outside the training distribution; a prediction there is a guess and must be labeled one.
7. **Cross-check against references.** Validate predictions on known materials before trusting them on novel ones.
8. **Rank with confidence.** Return candidates ordered by predicted property and confidence, framed as a filter that still needs physics confirmation.

## Quality bar

- Method fidelity matches the decision; the choice is justified.
- Validation splits prevent leakage; held-out performance is reported against a baseline.
- Per-prediction uncertainty and applicability domain are provided.
- Predictions are cross-checked on known references.

## Output format

A prediction report: method and rationale, featurization and split scheme (for ML), held-out performance vs baseline, ranked candidates with per-prediction uncertainty, applicability-domain flags, and a reference cross-check.
