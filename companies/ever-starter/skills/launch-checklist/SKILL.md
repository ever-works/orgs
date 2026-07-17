---
name: launch-checklist
description: Use when anything is about to go public — a product, a landing page, a feature, an announcement — to verify readiness systematically and produce a go/no-go verdict instead of relying on a gut feeling.
---

# Launch Checklist

A launch is any moment when work becomes visible to people outside the company. Run this before that moment, not after.

## Steps

1. **Name the launch.** One sentence: what is going public, to whom, and when. If you cannot fill in all three, stop — the launch is not defined yet.
2. **Verify the thing itself.**
   - Walk the primary path end to end as a first-time outsider would, starting from wherever they will actually arrive.
   - Try the two most likely mistakes (wrong input, double-click, back button) and confirm they fail gracefully.
   - Confirm every claim made about the thing is demonstrably true today — no "will be true by next week".
3. **Verify the surroundings.**
   - Every link in or out works and points where it says.
   - Names, prices, and dates are consistent across every surface that mentions them.
   - Whoever answers customers knows this is launching and has a first-response ready for the top three predictable questions.
4. **Verify the exit.** Decide in advance what "this is going badly" looks like and what the rollback or pause action is. Write it down; a rollback plan invented mid-incident is not a plan.
5. **Issue the verdict.** GO, GO WITH RISKS (list them), or NO-GO (list the blocking items). One person owns the verdict; others contribute checks.

## Quality bar

- Every checklist item is marked pass, fail, or not-applicable-with-reason. No blanks.
- "Someone checked it" is not a pass — the pass records who checked and how.
- A GO WITH RISKS verdict names each accepted risk and who accepted it.
- The checklist is completed no earlier than one working day before launch; stale checks are re-run.

## Output format

A short launch-readiness note:

```
LAUNCH: <one-sentence definition>
VERDICT: GO | GO WITH RISKS | NO-GO
CHECKS: <item> — pass/fail/n-a — <who/how>   (one line each)
RISKS ACCEPTED: <risk> — accepted by <name>  (if any)
ROLLBACK: <trigger> → <action>
```

Deliver it to the decision-maker before the launch moment, and attach it to the project record afterward.
