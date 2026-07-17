---
name: review-notes
description: Use when reviewing a deliverable against its brief and writing revision notes — feedback that names the failed requirement and the fix, so a bounce is a targeted revision, not a restart.
---

# Review Notes

A review note is a defect report, not a reaction. Its test: could the specialist act on it without asking you anything? This playbook covers both running the review and writing the notes.

## Running the review

1. **Re-read the brief first**, not the deliverable. Reviews drift toward taste when the reviewer's memory of the requirements is fuzzy.
2. **Check conformance before quality.** Pass one: does each deliverable item exist, in the right format, meeting its acceptance check? Pass two: does it meet the studio's quality bar? Never mix the passes — a missing deliverable and an awkward sentence are different classes of problem.
3. **Exercise, don't inspect.** Run the app from a fresh checkout, watch the loop five times at display size, open the exported document in a clean viewer. Reviews conducted by looking at things catch half of what reviews conducted by using things catch.
4. **Separate blockers from suggestions.** A blocker violates the brief or the checklist; a suggestion would improve the work but isn't promised anywhere. Suggestions are always welcome and never block delivery.

## Writing the notes

5. **One note per defect**, numbered, each with three parts:
   - **Where** — file, screen, page, shot, or timestamp, precise enough to find in seconds.
   - **What** — the observed problem, stated as observation ("total in the summary table is 4,200; body says 4,180"), not judgment ("numbers are sloppy").
   - **Against** — the brief line, checklist item, or skill-standard the defect violates. A note that cites nothing is an opinion; move it to suggestions.
6. **Propose the fix when it's obvious**, in one line. When it's not obvious, say what "fixed" would look like instead — the acceptance test for the revision.
7. **Cap the round.** More than ten blockers means the deliverable failed at a structural level; stop, write the top three structural notes, and escalate to the Studio Lead rather than itemizing symptoms.

## Quality bar

- Every blocker cites its violated requirement; every note is independently actionable.
- Verdict is explicit: pass, or revise with N numbered notes. No "mostly fine".
- The revision comes back with a change list; review the change list against your notes before re-reviewing the whole work.

## Output format

Markdown on the Task: verdict line, numbered blockers (where / what / against / fix), then a separate "suggestions" list. Same numbering carried through every revision round.
