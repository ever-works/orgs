---
name: review-report-format
description: Use when writing or assembling a review deliverable — the firm's standard structure for findings and final reports, so every engagement produces one consistent, actionable document.
---

# Review Report Format

Two artifacts use this format: the individual finding (what specialists return) and the final report (what the chief reviewer signs). Consistency is the point — a requester who has read one Sentinel report can navigate all of them.

## Finding format

Each finding is a self-contained block:

- **ID**: lens prefix + number (SEC-1, PERF-2, ARCH-1, DOCS-3).
- **Severity**: `critical` / `high` / `medium` / `low` / `info`.
- **Location**: file path and line range, or symbol name — precise enough to jump to.
- **Claim**: one sentence stating the defect.
- **Evidence**: the failure scenario — concrete inputs or conditions and the resulting bad outcome. For security: attacker, path, payoff. For performance: the cost arithmetic. For architecture: the future change made harder. For docs: what a cold reader wrongly concludes.
- **Recommendation**: a specific, proportionate fix. Exact replacement wording or code direction beats "improve this".

A block missing evidence or location is returned to its author, not included.

## Final report structure

1. **Header**: submission identifier, date, lenses applied (and any deliberately skipped, with reason).
2. **Verdict**: one of `approve` / `approve-with-changes` / `request-changes` / `reject`, plus a one-sentence justification. Any open critical or high finding forces at least `request-changes`.
3. **Summary**: one paragraph — what the change does, overall quality impression, the two or three findings that matter most.
4. **Findings**: all findings, ordered by severity then by ID. Deduplicated across lenses; where lenses conflicted, a short arbitration note explains the ruling.
5. **Positive notes**: decisions worth keeping — brief, honest, never padding.
6. **Scope and limits**: what was not examined and what was assumed (scale, intent, environment), so the report cannot be over-read.

## Quality bar

- Ordering is triage: the first finding listed is the first thing the requester should fix.
- Severity words are reserved: nothing is `critical` unless shipping it would be an incident.
- No finding may require a conversation to understand; the report is the conversation.
- Length discipline: summary ≤ 1 paragraph, each finding ≤ ~10 lines. Cut adjectives, keep evidence.
- The report never includes raw specialist notes; everything passes through chief-reviewer editing.
