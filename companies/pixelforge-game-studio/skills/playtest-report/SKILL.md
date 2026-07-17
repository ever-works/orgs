---
name: playtest-report
description: Use when a build has been played and the observations need to become an actionable report — covers defect logging with reproductions, experience findings against design intent, and a release-candidate verdict.
---

# Playtest Report

Turn a play session into a document the programmer can triage from and the designer can retune from, without either of them asking follow-up questions.

## Steps

1. **Header.** Build identifier, what the build note said changed, session length, and the play style used (intended path, hostile/chaotic, completionist, speedrun). Milestone builds require at least two contrasting styles.
2. **Play first, write after each incident.** Log findings the moment they happen — memory flattens severity. Keep playing through non-blockers; stop only for hard blockers.
3. **Log defects.** For each: one-line summary, severity, minimal reproduction steps (numbered, starting from a known state), expected vs. actual, and frequency (always / sometimes-with-count / once). If you can't reproduce it, label it INTERMITTENT and record everything you remember about the circumstances.
4. **Verify specs.** Check each changed mechanic against its spec numbers. Log divergence even when it feels better — route those as design notes, not defects.
5. **Log experience findings.** Where you were bored, lost, confused, frustrated, or breezing; where difficulty diverged from the design doc's stated curve; which mechanics you ignored because they weren't worth using. Tie each to a place ("cavern room 3") and a moment, never "the game feels off".
6. **Re-test claimed fixes.** Run each previous finding marked fixed against its original repro; record VERIFIED FIXED or REGRESSED explicitly.
7. **Verdict.** One of: RELEASE CANDIDATE (no blockers/criticals, majors have workarounds), NOT RC (list exactly which findings block), or NEEDS RETEST (build was untestable — say why).

## Severity scale

- **Blocker** — cannot progress or build crashes; testing stopped or detoured.
- **Critical** — progression breakable, save/checkpoint loss, or a core mechanic off-spec.
- **Major** — clearly wrong but avoidable; players will hit and remember it.
- **Minor** — polish: visual glitches, typos, small audio issues.
- **Note** — experience observation or suggestion; no defect claimed.

## Quality bar

- Every non-intermittent defect has a reproduction another agent can follow cold.
- Observations and interpretations are separated — "fell through floor at X" is a finding; "probably the collision layer" is a labeled guess.
- Severities are honest; no diplomatic downgrades.
- The verdict line is quotable on its own and consistent with the findings above it.

## Output format

Markdown: header, verdict line up top, then findings grouped by severity (defects first, experience findings after), fix-verification section, and a one-paragraph overall impression at the end — the only place opinion runs free.
