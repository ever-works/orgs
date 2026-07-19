---
name: support-macro-library
description: Use when building or maintaining reusable support replies — creates a library of accurate, personalizable macros for common tickets so the queue answers fast and consistently without turning into copy-paste that ignores the customer.
---

# Support Macro Library

A playbook for building canned responses that make the queue fast and consistent without making it robotic. The failure mode it prevents on both ends: agents rewriting the same answer from scratch every time, and agents pasting a template that half-answers the customer's actual question and reads as a brush-off.

## Build macros from real volume

1. Mine the queue for the highest-frequency, lowest-variation tickets — the questions asked the same way every day. Those are where a macro pays for itself; a one-off doesn't need one.
2. Write each macro to fully resolve the common case, not to acknowledge it. If the standard answer has a step, the macro contains the step, not a promise to send it.
3. Keep each macro to one clear job. A macro that tries to cover five scenarios forces the agent to edit out four — that's slower than no macro.

## Design for personalization, not copy-paste

4. Mark the variables explicitly — the customer's name, their specific value or error, the exact next step for their case — so the agent knows what must be filled in, never sent raw.
5. Write the tone to sound like a person who read the ticket: reference the customer's actual words, and open by confirming their specific problem before giving the fix.
6. Include a short internal note on each macro — when to use it, when not to, and what to check first — so an agent doesn't fire the right-sounding macro at the wrong ticket.

## Keep the library trustworthy

7. Link each macro to its help article where one exists, so the answer and the self-serve doc stay in sync and the customer gets both.
8. Version and date macros. On every product change, audit the affected ones; a macro that gives a stale or wrong answer at scale is worse than none.
9. Prune ruthlessly. Retire macros that are rarely used, duplicated, or superseded — a bloated library is one an agent can't find the right macro in.

## Quality bar

- Every macro maps to a real, high-frequency ticket and fully resolves it.
- Variables are marked; nothing is meant to be sent raw.
- Tone reads as a person who read the ticket, not a template.
- The library is current, deduplicated, and linked to help articles.

## Output format

Macro entry: trigger (the ticket pattern) → response body with marked variables → tone and personalization notes → when-not-to-use guidance → linked help article, version, and last-reviewed date.
