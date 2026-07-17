---
name: cleanup-pass
description: Use when a finished diff needs machine-generated cruft stripped out — debug leftovers, dead code, redundant comments, over-engineering — before it goes to review.
---

# Cleanup Pass

Review your own diff as a hostile editor before anyone else has to.

## Steps

1. **Diff only.** Scope the pass to the change itself — the diff against the base branch — not the whole codebase. Fixing surrounding code is a separate task; flag it, don't do it.
2. **Hunt debug leftovers.** Print/log statements added while iterating, commented-out experiments, temporary constants, hardcoded test values, TODO markers with no owner. Every one goes, or gets a written justification for staying.
3. **Kill dead branches.** Code paths the final design made unreachable: obsolete conditionals, unused parameters, helpers written for an approach that was abandoned mid-build, imports nothing uses anymore.
4. **Deflate comments.** Delete comments that restate the code, narrate the obvious, or apologize. Keep only comments that explain *why* — a non-obvious decision, a workaround with a reference, a warning to future editors.
5. **Right-size the engineering.** Abstractions with one caller, configuration for cases that cannot occur, defensive checks against impossible states, generalized helpers built for a hypothetical future — collapse them to the simplest form that serves the actual requirement.
6. **Check naming and tone.** Names should match the codebase's existing vocabulary; error messages should be calm, specific, and actionable; nothing in the diff should read like scaffolding.
7. **Re-run the checks.** Cleanup is code change; types, lint, and the relevant tests run again after it. A cleanup pass that breaks the build is a build step, not a cleanup.

## Quality bar

- Zero debug leftovers, zero unreachable code, zero orphan imports in the final diff.
- Every surviving comment answers "why", not "what".
- No abstraction in the diff has fewer than two real callers unless the brief demanded it.
- Checks are green after the pass, and the pass itself is an atomic commit.

## Output format

A cleanup commit (or commits) plus a three-line summary in the handoff note: what categories were found, what was removed, and anything deliberately kept with its justification.
