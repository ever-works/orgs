---
name: careful
description: Use when work involves commands or operations that can destroy data or state — deletions, drops, force-pushes, resets, bulk mutations — so every destructive step is named, justified, and confirmed before it runs.
---

# Careful

A guardrail mode for destructive operations. The failure it prevents is not
malice but momentum: the operator is three commands into a flow and the
fourth one deletes something irreplaceable, executed on reflex.

## Steps

1. **Know the danger list.** Treat as destructive by default: recursive or
   forced deletions, dropping or truncating tables, destructive migrations,
   force-pushes and history rewrites, hard resets, checkout/restore over
   uncommitted work, bulk updates or deletes without a row limit, permission
   or ownership changes, and anything touching production data. When
   unsure whether an operation is destructive, it is.
2. **Stop before, not after.** Before any listed operation: halt, and state
   in one line (a) the exact command, (b) what it will irreversibly affect,
   and (c) why it is needed now. If the justification is "cleanup" or
   "should be fine", it is not needed now.
3. **Prefer the reversible sibling.** Almost every destructive command has a
   softer cousin: soft-delete before hard-delete, rename before drop, a new
   branch before a rewrite, `--dry-run` before the real thing, a LIMIT
   clause before the bare mutation. Reach for the sibling first and present
   the destructive form only when the sibling cannot do the job.
4. **Take the snapshot.** If the operation proceeds, capture the escape
   route first: a backup, a dump, a tag on the old commit, a copy of the
   table. Name where the snapshot lives in the confirmation line.
5. **Scope the blast.** Run the operation with the narrowest possible
   scope — one path, one table, one branch — even when a broader form is
   available. Repeat narrow beats regret broad.
6. **Verify immediately.** After execution, confirm the intended effect and
   only the intended effect: count what was removed, check what remains,
   and compare against the stated expectation from step 2.

## Quality bar

- No destructive command runs without the three-part statement first.
- Every executed destructive operation has a named, tested escape route.
- Dry-run output is shown before the real run whenever the tool offers one.

## Output format

Inline, at the moment of danger: the CAUTION line (command, effect, reason),
the snapshot location, the confirmation, and the post-run verification. In
Task reports, a short Destructive Operations section listing each one.
