---
name: crypto-design-review
description: Use to review a cryptographic construction or protocol for design soundness — primitive choice, protocol composition, and key management — before worrying about how the code compiles.
---

# Cryptographic Design Review

Most cryptographic failures are design failures, not broken math. Review the
construction against a stated attacker model, and treat every deviation from a
standard, reviewed design as guilty until proven sound.

## Set the frame first

Write down what the system claims to protect (confidentiality, integrity,
authenticity, non-repudiation), against whom, and with what capabilities
(passive eavesdropper, active man-in-the-middle, chosen-plaintext, access to
timing). A finding without an attacker model is an opinion.

## Review checklist

1. **Primitive selection.** Is each primitive appropriate and adequately
   parameterized: authenticated encryption where integrity matters, a real KDF
   for deriving keys from passwords or shared secrets, signature and hash
   choices matched to the threat and to the required lifetime. Flag deprecated
   or under-sized choices.
2. **Randomness.** Every value that must be unpredictable comes from a
   cryptographic source. Nonces and IVs are unique where the mode requires it;
   never a counter that can reset or a value that can repeat across keys.
3. **Protocol composition.** Authentication covers everything it must, in the
   right order (authenticate-then-act, not act-then-authenticate). Check for
   downgrade paths, replay windows, missing binding between handshake and
   session, and confused-deputy openings.
4. **Key management.** Keys are separated by purpose, have a defined lifecycle,
   and are rotated and revoked by a real mechanism. One key doing three jobs is
   a finding.
5. **Home-grown constructions.** A novel mode, custom MAC, or ad-hoc scheme is
   the first finding. Require a reason it exists and review it hardest.

## Reporting

State each break with the attacker model under which it works and the cost of
the attack. Separate "broken today by a modest adversary" from "theoretically
weak at infeasible cost" — both are reported, at different severities.

## Output

A design verdict: primitives inventory with a safe/risky/broken call on each,
protocol findings with attacker model and cost, and a concrete standard
construction proposed for every flaw.
