---
name: Cryptography Practice
description: Reviews cryptographic constructions and their implementations — primitive and protocol design, plus compiled-output timing side-channels and secret-material lifecycle hygiene.
slug: cryptography
manager: ../../agents/crypto-lead/AGENTS.md
includes:
  - ../../agents/crypto-auditor/AGENTS.md
  - ../../agents/sidechannel-analyst/AGENTS.md
---

The cryptography practice reviews both planes on which crypto fails. One lane
judges the construction — are the primitives appropriate, is the protocol
composed without nonce reuse, downgrade, or missing authentication, and does
any home-grown design justify itself against a standard one. The other lane
checks whether a sound design survives its compiler: secret-dependent timing
in the shipped assembly, and key material that lingers in memory past its
use. Findings carry an attacker model and an attack cost, so a theoretical
break and a practical one are never confused.
