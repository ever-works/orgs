---
name: key-hygiene-audit
description: Use to audit how secret material is generated, stored, used, and destroyed across a system's lifecycle — the stage where real systems leak keys, not through clever cryptanalysis.
---

# Key Hygiene Audit

Systems rarely lose keys to broken math; they lose them to bad handling. Audit
the full lifecycle — generation, storage, use, rotation, destruction — because
a review that checks only "use" has checked one fifth of the surface.

## Lifecycle checklist

1. **Generation.** Keys and secrets come from a cryptographic random source
   with adequate entropy. No predictable seeds, no time-based derivation, no
   reuse of a demo or default key in production.
2. **Storage.** Secrets are never hardcoded in source, config committed to
   version control, container images, or client-side code. At rest they are in
   a secrets manager, HSM, keychain, or an encrypted store — not a world-
   readable file or an environment variable dumped into logs.
3. **In memory.** Secrets are held for the minimum time, not copied into extra
   buffers, and kept out of anything that persists: logs, error messages, crash
   dumps, swap. Watch for accidental capture in exceptions and debug output.
4. **Destruction.** After use, key material is zeroed — and the zeroization
   survives the compiler. Dead-store elimination happily deletes a `memset` on
   memory that is never read again; confirm the wipe in the compiled output or
   use a guaranteed-erase primitive.
5. **Rotation and revocation.** There is a real mechanism to rotate keys and
   revoke compromised ones, exercised, not just documented. Purpose separation
   holds: one key does one job.

## What to flag hardest

- Any secret discoverable by reading the artifact — repo, image, firmware
  partition, binary strings.
- Secrets that outlive their use in memory or logs.
- Zeroization that the compiler can and does optimize away.

## Output

Findings mapping each hygiene gap to the lifecycle stage, the location of the
exposure, and the concrete fix — with memory-hygiene fixes verified against
compiled output.
