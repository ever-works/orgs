---
name: threat-model
description: Use at the start of an engagement to map what a system protects, from whom, and where trust boundaries sit — so audit effort lands on reachable, high-value attack surface instead of on whatever is easiest to read.
---

# Threat Model

A threat model is a map that tells the audit where to spend its hours. Build it
before deep review; update it whenever a finding contradicts it.

## Steps

1. **Inventory assets.** List what the system protects — funds, private keys,
   customer data, availability, integrity of a computation. Each asset gets a
   worst-case-if-compromised note. Effort follows value.
2. **Identify actors and their capabilities.** Anonymous internet user,
   authenticated user, privileged operator, insider, a compromised dependency,
   a peer contract or service. For each, write what they can already do
   legitimately — that is the launch pad.
3. **Draw trust boundaries.** Mark every place data or control crosses from a
   less-trusted actor to a more-trusted context: network edges, API surfaces,
   deserialization points, privilege transitions, external calls, the
   user/kernel or on-chain/off-chain line. Boundaries are where bugs become
   breaches.
4. **Enumerate entry points.** Every externally reachable way in — endpoints,
   public functions, message handlers, file and format parsers, update
   channels. Tie each to the boundary it crosses.
5. **Derive abuse cases.** For each asset-actor pair, ask how this actor
   reaches this asset. Note the plausible paths as hypotheses to test — these
   become the review and fuzzing priorities.

## Quality bar

- Every high-value asset has at least one traced path from an untrusted actor,
  or a stated reason it is unreachable.
- Boundaries are concrete locations in the system, not abstract layers.
- Assumptions ("the operator is trusted", "TLS terminates here") are written
  down, because assumptions are what audits exist to test.

## Output

A short document: asset list, actor/capability table, a boundary-and-entry-point
map, and a ranked list of abuse cases that drives where the practice reviews
first. Living artifact — annotate it as findings land.
