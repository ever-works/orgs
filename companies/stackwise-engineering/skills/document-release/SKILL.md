---
name: document-release
description: Use after a release lands — synchronizing the readme, architecture notes, changelog, task lists, and version markers so the documentation describes the software that actually shipped, not the one from three releases ago.
---

# Document Release

The post-ship documentation sync. Docs do not rot at release time — they rot
in the gap between releases, one undocumented change at a time. This skill
closes the gap while the change is still fresh enough to describe honestly.

## Steps

1. **Diff the release against the docs.** Read what actually shipped —
   commits, merged requests, changelog draft — and list every place the
   documentation now lies: features described that changed, features
   shipped that are undescribed, setup steps that no longer work.
2. **Sync the readme.** The readme's promises must match the shipped
   product: capabilities, requirements, install and quick-start steps.
   Walk the quick-start literally as written; if a fresh user following it
   verbatim would fail, that is the bug to fix now.
3. **Sync the architecture notes.** If the release moved a boundary, added
   a service, changed a data flow, or introduced a dependency, the
   architecture document gets the update — a few honest lines, not a
   rewrite. Record decisions as context, choice, consequence.
4. **Finalize the changelog.** Confirm the entry for this version describes
   user-visible effects, is grouped added / changed / fixed, and carries
   the release date. Backfill any change that shipped without an entry.
5. **Groom the task list.** Items completed by this release get closed;
   items invalidated by it get removed with a note; new follow-ups
   discovered during the release get filed. A task list that ignores
   releases becomes fiction within three of them.
6. **Confirm version markers agree.** The version file, package manifests,
   changelog heading, and any user-visible version string must all name the
   same release. Disagreement between them is a released bug.
7. **Commit the sync as part of the release**, referencing the version, so
   the docs' history aligns with the code's.

## Quality bar

- The quick-start was actually walked, not skimmed.
- Every doc edit traces to a shipped change; no opportunistic rewrites
  smuggled in.
- All version markers verified equal, listed in the report.

## Output format

A sync report: Lies Found (doc vs. reality), files updated with one-line
summaries, changelog entry as finalized, task-list actions, and the version
markers checked.
