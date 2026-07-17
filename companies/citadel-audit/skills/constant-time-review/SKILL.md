---
name: constant-time-review
description: Use to check that cryptographic code runs in secret-independent time — not only in source, but in the compiled output that actually ships, where compilers reintroduce timing variation.
---

# Constant-Time Review

Secret-dependent execution time leaks secrets to anyone who can measure it. The
trap is that source code can look constant-time while the compiled binary is
not — compilers optimize for speed, not for secrecy.

## Method

1. **Find the secrets.** Identify every value that is or derives from a key,
   password, nonce, or plaintext under attacker interest. These are what must
   not influence timing.
2. **Source-level review.** For each operation touching a secret, confirm it is
   branchless and data-independent:
   - No `if`/`switch`/early-return whose condition depends on a secret.
   - No memory access at a secret-dependent index (table lookups, array
     indexing) — cache timing leaks the index.
   - No secret-dependent loop bounds.
   - Comparisons of secrets use a constant-time equality, never a short-
     circuiting one.
   - No variable-time arithmetic (some big-integer and division paths) on
     secret operands.
3. **Compiled-output review.** This is the step that matters. Disassemble at the
   optimization level actually shipped and look for branches, conditional moves
   turned into branches, short-circuited comparisons, and variable-latency
   instructions the compiler introduced into branchless source.
4. **Assess reach.** Classify the channel: local-only, adjacent (same host or
   network segment), or remote. Severity turns on this — a remotely measurable
   channel on a signing key is critical; a local one on ephemeral data may be
   low.

## Remediation and verification

Recommend the concrete fix — constant-time selection primitives, compiler
barriers, volatile accesses, or a vetted assembly implementation — and then
verify the fix in the recompiled output. A fix confirmed only in source is not
confirmed.

## Output

Findings naming the operation, the compiled evidence, the channel's reach, and
a fix verified against the regenerated assembly.
