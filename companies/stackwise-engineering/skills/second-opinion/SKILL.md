---
name: second-opinion
description: Use when a contested or expensive-to-reverse decision, plan, or diff deserves an independent structured second opinion — a review, challenge, or consultation run from deliberately different assumptions than the original author's.
---

# Second Opinion

A structured cross-examination by an independent reviewer who did not produce
the work. The value is not a second pair of eyes; it is a second set of
assumptions — the reviewer must start from a different premise than the
author, or the opinion is an echo.

## Steps

1. **Choose the mode** to match the question:
   - *Review* — examine a finished artifact (plan, diff, design) and return
     findings.
   - *Challenge* — argue against the chosen approach as strongly as the
     evidence allows; the goal is to lose honestly or win usefully.
   - *Consult* — answer a specific technical question with a recommendation
     and its confidence level.
2. **Blind the reviewer to the conclusion first.** State the problem and
   constraints, and have the reviewer commit to an initial position before
   seeing the author's answer. Divergence between the two positions is the
   most valuable output — surface it explicitly.
3. **Run the examination.** In review mode, findings with location and
   severity. In challenge mode, the strongest case against, steelmanned — no
   weak objections offered just to fill space. In consult mode, a direct
   answer plus the assumption that would change it.
4. **Force the disagreements to ground.** Every point where the second
   opinion differs from the original must end in one of three states: the
   author amends, the reviewer withdraws, or the disagreement is recorded
   with both rationales for the decision-maker to rule on.
5. **Deliver the verdict** with calibration: agree / agree-with-changes /
   disagree, and what evidence would flip it.

## Quality bar

- The reviewer's initial position is recorded before exposure to the
  author's — otherwise anchoring makes the exercise theater.
- Objections are steelmanned; a challenge that loses to a weak version of
  the idea proves nothing.
- Unresolved disagreements are preserved verbatim, not averaged away.

## Output format

A second-opinion note: Mode, Initial Position, Findings or Case, Resolved
Points, Unresolved Disagreements (both rationales), Verdict with flip
conditions.
