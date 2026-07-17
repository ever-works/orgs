---
name: architecture-decision
description: Use when a technology or system-shape choice would be expensive to reverse and needs options developed, compared, and recorded as a decision the whole firm can cite.
---

# Architecture Decision

Expensive-to-reverse choices deserve a written record; everything else deserves
a quick call and no ceremony. This playbook is for the first kind.

## Steps

1. **State the decision and its trigger.** One sentence each: what must be
   decided, and what forces a decision now. If nothing forces it, defer — the
   cheapest decision is the one you legitimately postpone.
2. **Fix the criteria before the options.** List what matters for this choice —
   team fluency, operational cost, scaling ceiling, hiring reality, exit cost —
   and rank them. Criteria chosen after the options are chosen by the options.
3. **Develop 2-3 genuinely viable options.** Each gets: how it works here (not
   in general), what it costs to adopt and to leave, its failure modes, and the
   conditions under which it is the right answer. A strawman option is a lie
   with a bullet point.
4. **Compare against the criteria, in order.** Note where options tie — ties on
   top criteria mean the decision hinges on lower ones; say so explicitly.
5. **Decide and record consequences.** The chosen option, the reasoning, the
   rejected options with why, and the consequences accepted knowingly —
   including what becomes harder.
6. **Name the revisit trigger.** The observable condition under which this
   decision should be reopened ("exceeds N tenants", "team loses its last
   specialist in X"). A decision without a revisit trigger becomes dogma.

## Quality bar

- Each rejected option's strongest case is stated fairly enough that its
  advocate would sign it.
- Consequences include at least one genuine downside of the chosen option.
- A newcomer could reconstruct the reasoning without interviewing anyone.

## Output format

A decision record: context and trigger, ranked criteria, options with honest
trade-offs, decision with reasoning, accepted consequences, revisit trigger.
Keep it under two pages; length is where these die.
