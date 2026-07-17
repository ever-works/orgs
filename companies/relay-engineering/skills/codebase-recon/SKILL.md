---
name: codebase-recon
description: Use when a task needs its footprint in the codebase mapped — touched files, change history, dependencies, and blast radius — before any plan is written.
---

# Codebase Recon

Ground the plan in what the code actually is, not what anyone remembers it being.

## Steps

1. **Extract search terms.** Pull the nouns and verbs from the task statement — entity names, endpoint paths, error messages, feature flags — and search the codebase for each. Record hits, not impressions.
2. **Map the surface.** List every file plausibly touched by the change: the primary implementation sites, their tests, their configuration, and any docs that describe the current behavior.
3. **Read the history.** For each primary file, scan recent change history: who touched it, how often, and whether past changes there have a record of breaking things. A file with a scarred history earns extra caution in the plan.
4. **Trace dependencies both ways.** What do the primary files import, and — more important — what imports them? Walk callers up until the effect becomes user-visible. This is the blast radius; write it down as a list of affected behaviors, not filenames alone.
5. **Find the invariants.** Note the contracts the change must not break: API shapes, schema constraints, event formats, anything with an external consumer. Check whether tests actually pin these down; untested invariants are risks by definition.
6. **Probe the seams.** Identify where the new behavior will attach — existing extension points, or places that will need surgery. Flag any spot where the code's current structure fights the task's intent; that tension belongs in the brief, not in a mid-build surprise.
7. **Summarize honestly.** Close with what you did not figure out: unexplored corners, ambiguous behavior, files too tangled to read confidently. Unknown unknowns become brief risks.

## Quality bar

- Every claim cites a file path or a specific search result — no "I believe this is handled in…".
- Blast radius is expressed as affected behaviors, traced to entry points.
- Untested invariants are explicitly listed.
- The gaps section is present and honest; an empty one is a red flag, not a badge.

## Output format

A recon report: task reference, touched-files table (path, role, history note), blast-radius list, invariants list with test status, attachment-point notes, and the gaps section. Feed it directly into the implementation brief.
