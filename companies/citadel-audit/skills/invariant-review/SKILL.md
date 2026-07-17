---
name: invariant-review
description: Use to identify the properties a system must always uphold and turn them into checkable statements — the foundation for property testing and for reasoning about what "correct" means for this code.
---

# Invariant Review

An invariant is a statement that must be true no matter what sequence of
operations runs. Finding and stating them precisely is how you turn "audit the
contract" into "prove these twelve things never break".

## Where invariants come from

- **Conservation** — value in equals value out; total supply matches the sum of
  balances; nothing is minted or burned except through the sanctioned path.
- **Access** — privileged state changes only through authorized callers; roles
  cannot be granted except by the role admin.
- **Monotonicity and bounds** — a share price only moves in the stated
  direction under the stated conditions; counters do not overflow; indices stay
  in range.
- **Solvency and accounting** — the system can always honor what it owes;
  per-user accounting sums to the global figures.
- **State-machine legality** — the system only transitions along defined edges;
  no operation reaches a state the design forbids.

## Method

1. Read the specification and the economic design, then the code, and write
   each invariant as a concrete, testable predicate — not "funds are safe" but
   "for every account, cumulative withdrawals never exceed cumulative deposits
   plus earned yield".
2. For each invariant, note the operations that could plausibly break it. Those
   are the sequences worth testing hardest.
3. Distinguish global invariants (always true) from transient ones (true
   between operations but temporarily violated mid-transaction); encode them at
   the right checkpoint.
4. Flag any invariant the code assumes but does not enforce — that gap is often
   the finding.

## Quality bar

- Each invariant is a predicate a machine could evaluate on any state.
- The list is derived from intent, not reverse-engineered from current
  behavior — testing that the code equals itself proves nothing.

## Output

An invariant catalog: each property, why it must hold, the operations that
threaten it, and whether the code enforces it. Hand to property testing to
encode and drive.
