---
name: delivery-checklist
description: Use when packaging finished work for client delivery — the final gate every deliverable passes before the Studio Lead signs off, regardless of whether it's an app, a render, or a document.
---

# Delivery Checklist

The checklist is the studio's promise made checkable. It runs on every deliverable, every time — familiarity is exactly when embarrassing misses happen.

## The checklist

**Brief conformance**
1. Every item on the brief's deliverables list is present, in the specified format.
2. Each item passes its own acceptance check from the brief — actually run the check, don't recall it.
3. All deviations are documented in the delivery note with reasons; an undocumented deviation is a defect even when the deviation was right.

**Clean-machine behavior**
4. Apps: fresh checkout, documented setup, full run-through on a machine that isn't the builder's.
5. Media: final files open and play correctly in a standard viewer at target size; loops checked over five cycles; first frame works as a static preview.
6. Documents: export opened in a clean viewer — fonts embedded, layout intact, links live, no editor-only artifacts.

**The embarrassment sweep**
7. Search all text surfaces for placeholder markers, lorem ipsum, TODO/FIXME, and any prior client's name.
8. Check the small trust-killers: page numbers sequential, tables summing, dates current, version numbers matching between file and note.
9. Confirm no debug output, test data, sample credentials, or internal commentary ships in any file.

**Packaging**
10. Files named per studio convention and per the brief; folder structure self-explanatory to someone who wasn't on the project.
11. Source files included where the brief promises them, separated clearly from finals.
12. Delivery note present: what was delivered, how to open/run it, known limitations, deviations with reasons.

## Running it

- Run the checklist against the *packaged* deliverable — the thing the client will actually receive — not against your working copy.
- Check items honestly and individually; a checklist skimmed is a checklist skipped.
- Any failed item sends the work back with review notes citing the item number. The checklist re-runs in full after revision — fixes have a habit of breaking neighbors.

## Quality bar

- All twelve items checked on every delivery, no exceptions for "small" work.
- The delivery note alone tells the client everything needed to receive the work.

## Output format

Completed checklist (item / pass-fail / note) attached to the Task with the delivery package, forwarded to the Studio Lead for sign-off.
