---
name: qa-only
description: Use when testing must observe and document without intervening — report-only QA that records bugs with screenshots and repro steps but changes no code, no data, and no configuration.
---

# QA Only

Report-only testing. The same disciplined eyes as a full QA pass, with one
absolute constraint: nothing gets changed. No code edits, no data cleanup,
no config tweaks, no "quick fixes while I'm in here". The mode exists for
audits of unfamiliar systems, third-party handoffs, and any occasion where
the tester's neutrality is part of the deliverable.

## Steps

1. **Declare the constraint up front** in the report header: observation
   only, no modifications performed. The declaration is what lets others
   trust that the system's state after the audit equals its state before.
2. **Scope the pass.** Agree what is under test — pages, flows,
   environments — and which accounts may be used. Within scope, read-only
   liberties are full; outside it, nothing.
3. **Test as in a standard QA pass**: walk the flows, try the unhappy
   variants, watch the console, screenshot end states. The discipline of
   observation is identical; only the response to findings differs.
4. **When a bug is found, document — do not touch.** Record exact repro
   steps from a fresh state, expected versus observed, severity,
   screenshot, and console or network evidence. Resist diagnosis beyond
   what observation supports: "the request returns 500" is a fact, "the
   database is misconfigured" is a guess wearing a fact's clothes. Guesses
   are permitted only when labeled as hypotheses.
5. **Note near-misses and hazards** — things not yet broken but observably
   fragile: a form that accepts obviously invalid input, a page that takes
   nine seconds, an error message leaking internals. These become a
   separate hazards list, distinct from bugs.
6. **Leave no footprint.** Test data created during the pass is listed in
   the report (what and where) so the owner can remove it; nothing else is
   left behind or taken away.
7. **Deliver the report as the sole output.** The receiving team owns all
   fixes, priorities, and follow-ups. The report must therefore stand
   alone: complete enough to act on with no access to the tester.

## Quality bar

- Zero modifications, and the report says so explicitly.
- Facts and hypotheses are visibly separated in every finding.
- Each finding is actionable by a stranger with only the report in hand.

## Output format

A report-only QA document: constraint declaration, scope, flows tested with
status, numbered findings (severity, repro, evidence), hazards list, test
data left behind, and the health verdict.
