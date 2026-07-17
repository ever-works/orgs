---
name: binary-triage
description: Use to bring a closed-source binary or firmware image under control before analysis — inventory it, establish provenance, recover structure, and map the reachable attack surface.
---

# Binary Triage

Before deciding what is wrong with a binary, establish what it is. Triage turns
an opaque blob into an inventoried, structured target and keeps analysis inside
authorization and containment.

## Steps

1. **Inventory and provenance.** Record exact hashes, file type, target
   architecture and bit-width, and where the sample legitimately came from.
   Confirm the engagement authorizes analysis of this artifact. Nothing is
   analyzed that is not inventoried.
2. **Contain.** Work on copies in an isolated environment. Never execute an
   unknown or suspicious sample on shared or production infrastructure; dynamic
   analysis happens in a disposable sandbox with no path to anything valuable.
3. **Unwrap.** Detect packing, obfuscation, or encryption. Unpack or dump as
   needed to reach the real code before drawing any conclusion from what
   disassembles.
4. **Recover structure.** Identify the entry point, the functions, the imports
   and exports, statically linked libraries, and compiler provenance. Recognize
   third-party components — they carry their own histories of known issues.
5. **Map attack surface.** Determine which interfaces an attacker can actually
   reach: network listeners, IPC, parsers of external input, update and debug
   channels, command handlers. Rank effort by reachability, not by whatever
   disassembles most cleanly.

## Pitfalls

- The disassembler's output is a hypothesis; misread control flow is this
  work's characteristic false positive. Verify before asserting.
- Strings and symbols may be planted; corroborate provenance, do not trust it.
- Unreachable code can still matter, but say it is unreachable today and why.

## Output

A triage record: hashes, provenance, architecture, packing status, a recovered
function/import map, third-party component list, and a ranked reachable-attack-
surface list that directs the deep analysis.
