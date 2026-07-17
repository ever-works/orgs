---
name: phylogenetic-inference
description: Use when reconstructing evolutionary relationships from sequences — model selection, tree inference, and support assessment built on an audited alignment.
---

# Phylogenetic Inference

Build a defensible tree and the reasoning behind it, remembering that a tree from a bad alignment is confidently wrong.

## Procedure

1. **Audit the alignment first.** The alignment is the experiment. Inspect it, trim ambiguous or gap-heavy columns, and confirm the sequences are homologous and correctly oriented before inferring anything.
2. **Select the substitution model** with a model-selection criterion rather than a default. State the chosen model and why; the model shapes the topology.
3. **Choose the inference method** — maximum likelihood, Bayesian, or distance — matched to dataset size and the strength of claim needed. Justify the choice.
4. **Infer the tree** and root it explicitly, stating the rooting rationale (outgroup or midpoint) since interpretation depends on it.
5. **Quantify support.** Compute bootstrap or posterior support for branches; never present a single tree as certainty. Low-support nodes are collapsed or clearly marked.
6. **Check for known pathologies.** Long-branch attraction, saturation, and unbalanced taxon sampling — assess each and note its risk.
7. **Compare alternatives** where the question hinges on topology; test whether competing arrangements are statistically distinguishable.
8. **Interpret against the biology.** Tie divergence, lineage, or clade conclusions back to the original question, with support attached.

## Quality bar

- The alignment was audited and trimmed before inference.
- The substitution model and rooting are stated and justified.
- Branch support is reported; low-support nodes are not overinterpreted.
- Long-branch attraction and sampling bias are assessed, not ignored.

## Output format

An annotated tree with branch support and the model used, the audited/trimmed alignment, a methods note (model selection, inference method, rooting), and an interpretation tied to the question.
