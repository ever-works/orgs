---
name: Smart Contracts Practice
description: Audits smart contracts and on-chain protocols — entry-point and access-control review, value-flow and reentrancy analysis, and invariant-driven property testing against a frozen commit.
slug: smart-contracts
manager: ../../agents/contracts-lead/AGENTS.md
includes:
  - ../../agents/contract-auditor/AGENTS.md
  - ../../agents/invariant-engineer/AGENTS.md
---

The smart contracts practice audits on-chain code the way it is attacked:
from the entry point inward. Against a frozen commit and an entry-point
inventory, one lane reviews privileged and value-moving logic by hand while
the other encodes the protocol's invariants and drives them with stateful
property testing, so failures that only appear across sequences of calls are
found before mainnet does. Every confirmed bug triggers a variant sweep, and
the lead reviews severity and exploitability before findings leave the
practice.
