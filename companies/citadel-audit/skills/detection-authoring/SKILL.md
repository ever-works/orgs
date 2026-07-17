---
name: detection-authoring
description: Use when a suspicious sample or threat needs a detection rule — to write signatures that catch the real threat precisely without flooding production with false positives.
---

# Detection Authoring

A detection rule is a claim: "this pattern indicates this threat." A bad rule
that fires on benign files is worse than no rule, because it trains responders
to ignore the alert. Precision is the product.

## Method

1. **Analyze the sample first.** Understand what the artifact does and identify
   indicators that are both stable (survive recompilation or minor variation)
   and unique (unlikely in benign software): distinctive code sequences,
   embedded strings and configuration, structural traits, or characteristic
   behavior. Avoid indicators that a compiler or common library would produce.
2. **Choose the indicator set deliberately.** Prefer a small number of strong,
   correlated indicators combined with an AND condition over a long list of
   weak ones. Anchor on things an attacker cannot trivially change without
   breaking their own tool.
3. **Write the rule.** Express the condition clearly, comment why each indicator
   was chosen, and keep the matching logic efficient so it can run at scale
   without degrading the scanning pipeline.
4. **Test both ways.** Validate against known-bad samples (it must fire) and a
   representative known-good corpus (it must stay silent). A rule untested
   against benign data is untested.
5. **Document limits.** State what the rule detects, what evasions it does not
   cover, and the expected false-positive profile, so operators deploy it with
   eyes open.

## Quality bar

- Fires reliably on the threat and its close variants.
- Stays silent on a realistic benign corpus.
- Efficient enough for production scanning.
- Every indicator has a documented rationale.

## Output

The rule, a rationale for each indicator, test results against good and bad
corpora, and a stated coverage-and-limitations note — handed to detection
infrastructure for deployment.
