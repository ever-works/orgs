---
name: product-led-growth-loop
description: Use when you need to model, measure, or improve the self-serve growth engine — to map the acquisition→activation→retention→referral loop, find the leakiest stage, and run one experiment against it.
---

# Product-Led Growth Loop

Product-led growth treats the product as the primary way users are acquired, activated, retained, and referred — a loop where each turn feeds the next, not a funnel that empties out the bottom. The whole discipline is: measure every stage, find the one that leaks worst, fix that one, re-baseline, repeat. Scattering effort across all stages at once is how you stay busy and flat.

## Steps

1. **Map the loop as stages with rates.** Lay it out: Acquisition → Signup → Activation (first win) → Retention (repeat use) → Referral (user brings the next user). For each transition, write the current conversion rate. If a stage has no number, instrument it before you touch it.
2. **Find the leakiest stage.** Compare against sane benchmarks and against your own trend. The worst-converting stage is your only target this cycle — a 2x improvement there beats a 10% lift everywhere else.
3. **Diagnose before you design.** Is the leak a messaging problem (wrong expectation set upstream), a friction problem (too many steps to value), or a product problem (the value isn't there yet)? The fix differs entirely. Product problems get packaged and handed to Product, not patched with a nudge.
4. **Run one experiment.** One hypothesis, targeting the one stage, changing one thing, measured by the one stage rate. State what result would make you ship it and what would make you kill it, before you run it.
5. **Ship the winner, re-baseline, move on.** Roll a winning change into the default flow, re-measure the whole loop, and find the new leakiest stage. The loop is never "done."
6. **Favor compounding mechanisms.** Prefer changes that get stronger with each user — referral built into the value moment, content that keeps ranking, network effects — over one-shot pushes that decay the moment you stop.

## Quality bar

- Every stage has a real, instrumented rate — no vibes.
- Exactly one target stage and one experiment in flight; results are re-baselined.
- Product-caused leaks are routed to Product with evidence, not worked around.
- Compounding loops are preferred over decaying pushes.

## Output format

```
Loop scorecard:
  Acquisition → Signup: <rate>
  Signup → Activation: <rate>   <-- leakiest
  Activation → Retention: <rate>
  Retention → Referral: <rate>
Target stage: <stage> — because <diagnosis: messaging | friction | product>
Experiment: <hypothesis> | change: <one thing> | ship if <result>, kill if <result>
Result: <rate before → after> → <shipped | killed> → new target: <stage>
```
