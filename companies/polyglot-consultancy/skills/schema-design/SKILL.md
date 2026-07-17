---
name: schema-design
description: Use when designing database schemas or planning schema migrations, so data shape follows access patterns and every change has a rollback story.
---

# Schema Design

A schema is the longest-lived artifact an engagement produces. Applications
get rewritten around it; design it to deserve that.

## Steps

1. **Start from access patterns.** List the top reads and writes with their
   frequencies and latency needs before drawing tables. Normalization is the
   default; denormalize only for a named, measured access pattern, and record
   where the duplicated truth lives and how it stays consistent.
2. **Choose keys deliberately.** Stable, meaningless primary keys by default;
   natural keys enforced as unique constraints rather than primary keys.
   Decide ID generation (sequence, UUID variant) with an eye on index
   locality and external exposure.
3. **Put invariants in the database.** Not-null, unique, foreign keys, and
   check constraints for anything that must always hold — application-layer
   discipline evaporates at 2 a.m.; constraints do not. Every foreign key that
   gets joined has an index.
4. **Type columns honestly.** Money as exact decimal, time with timezone
   semantics decided (store UTC, state it), enums as constrained text or
   lookup tables with a migration story, and no stringly-typed JSON where a
   column would do. JSON columns are for genuinely variable shapes, with the
   variable part's contract documented.
5. **Plan migrations as production events.** Expand-migrate-contract for
   anything touching live tables: additive first, backfill in batches with
   progress visible, cutover, then contract. Lock behavior stated per step;
   long locks on hot tables get an online strategy or a maintenance window —
   decided, not discovered.
6. **Version everything.** Migrations are ordered, reviewed files with a
   forward path and a written rollback story — including the honest ones:
   "contract step is irreversible; rollback is restore-from-backup plus
   replay."

## Quality bar

- Every design decision cites an access pattern or an invariant.
- The schema enforces its own integrity without trusting the application.
- Any migration can state its lock behavior and rollback before it runs.
- A new engineer can read the schema and learn the domain from it.

## Output format

Schema definitions and migration scripts under version control, each migration
with lock notes and rollback story, plus a short design note mapping decisions
to access patterns.
