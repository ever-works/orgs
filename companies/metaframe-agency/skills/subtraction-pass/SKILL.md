---
name: subtraction-pass
description: Use when a system, plan, document, or workflow has accreted weight — improves by removing rather than adding, separating genuine bloat from load-bearing structure with an explicit test per element.
---

# Subtraction Pass

Improve by taking away. The failure mode this prevents: every review adding a step, every draft adding a section, every quarter adding a meeting — because addition feels like contribution and removal feels like risk.

## Steps

1. Inventory the elements of the target at one consistent grain: steps of a workflow, sections of a document, features of a tool, recurring meetings of a team. Mixed grains make removal decisions incomparable.
2. For each element, answer the removal question: **"What specifically breaks if this disappears tomorrow?"** Write the answer as a concrete consequence, not a feeling.
3. Classify by the answer:
   - **Load-bearing**: a named, plausible failure follows. Keep. Record the failure it prevents — that record is valuable later.
   - **Insurance**: protects against a rare but real event. Keep only if the event's cost times its likelihood beats the element's carrying cost; show the arithmetic.
   - **Vestigial**: the honest answer is "nothing", "we'd notice eventually", or "the person who added it left". Removal candidate.
   - **Harmful**: actively causes delay, confusion, or rework. Remove first.
4. For each removal candidate, check for hidden couplings: does anything downstream consume its output, even informally? A quick consumer check prevents the one classic subtraction injury.
5. Remove in tiers, not all at once: harmful immediately, vestigial in a batch with a dated rollback note ("restore if X occurs by DATE"), insurance only after the arithmetic is reviewed by the element's owner.
6. Record the reclaimed capacity — hours, latency, cognitive load — and where it goes. Subtraction that frees capacity into vagueness gets refilled by accretion within a quarter.
7. Add a guard: for the system audited, state the new-element bar ("a new step must name the failure it prevents") so the pass does not need repeating in six months.

## Quality bar

- Every element has a written removal-question answer; "probably needed" is not an answer.
- Insurance keeps show their arithmetic.
- At least one element is actually removed — a pass that only reorganizes is a filing exercise.

## Output format

Element inventory with classifications and removal-question answers → tiered removal plan with rollback notes → reclaimed-capacity statement → the new-element bar.
