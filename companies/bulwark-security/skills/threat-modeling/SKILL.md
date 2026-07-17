---
name: threat-modeling
description: Use when a system design needs its risks enumerated before or during an engagement — to map trust boundaries, list what can go wrong at each one, rank the threats, and attach mitigations.
---

# Threat Modeling

A threat model answers four questions in order: what are we building, what can
go wrong, what are we doing about it, and did we miss anything? Answer them in
that order — mitigations proposed before the boundaries are mapped are
decoration.

## Map the system

1. Draw the data flows: what enters the system, where it travels, where it
   rests, what leaves. Use the system as built or as actually specified, not
   the marketing diagram.
2. Mark every trust boundary — any line where the caller's identity,
   privilege, or honesty changes: internet to edge, service to service, user
   tier to admin tier, first party to third party.
3. For each boundary, write down the assumption it depends on ("this queue is
   only reachable from the cluster"). Unwritten assumptions are where models
   fail.
4. List the assets worth protecting, concretely: which data, which
   capabilities, which credentials — and what losing each would actually cost.

## Enumerate threats

5. Walk each boundary against a fixed checklist of failure kinds: a caller
   pretending to be someone else; data tampered in transit or at rest;
   confidential material leaking out; the service being denied to legitimate
   users; a low privilege becoming a high one. Fixed lists beat brainstorming
   because they find the boring, likely threats.
6. For each threat, sketch the attacker path: entry point, steps, asset
   reached. A threat with no plausible path is recorded but ranked to the
   bottom.
7. Rank by plausibility of the path times value of the asset reached. Resist
   ranking by novelty.

## Mitigate and bound

8. Attach to each ranked threat the mitigation closest to its root: a boundary
   control, a design change, a detection. Note which mitigations already exist
   versus which are proposed.
9. State the model's exclusions explicitly — trusted third parties, components
   out of scope — so silence is never mistaken for safety.
10. Date the model and tie it to a design version. When the design moves, the
    model is stale and says so on its face.

## Quality bar

- Every trust boundary has at least one named assumption and was walked
  against the full failure checklist.
- Every top-ranked threat has a plausible path an engineer could follow.
- An engineer can find their component and see its threats and mitigations
  without reading the whole document.

## Output format

The boundary map, the assumption list, the ranked threat table (threat, path,
asset, rank, mitigation, status), and the exclusions — plus, when supporting
an audit, a one-page brief naming the three to five boundaries where
verification hours should go first.
