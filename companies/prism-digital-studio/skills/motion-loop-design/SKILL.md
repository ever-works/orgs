---
name: motion-loop-design
description: Use when producing short animated loops, stickers, or ambient motion pieces — work measured in seconds, judged on seamlessness, and displayed small.
---

# Motion Loop Design

Loops are the studio's smallest visual deliverable and the least forgiving: a viewer sees the whole piece dozens of times, so every flaw compounds. This playbook covers loops, stickers, and ambient motion for pages and apps.

## Designing the loop

1. **One idea per loop.** A loop states a single visual idea — a bounce, a shimmer, a character beat. Two ideas means two loops.
2. **Choose the cycle length deliberately.** 1–3 seconds for UI accents and stickers, up to 6 for ambient pieces. Longer loops hide seams more easily but cost attention; justify anything over 6 seconds.
3. **Engineer the seam first.** Design the end state to flow into the start state before animating the middle — matching endpoints after the fact is rework. For physics-driven motion, use a whole number of oscillation periods.
4. **Animate with easing that survives repetition.** Motion that delights once can irritate on the tenth cycle; favor smooth, low-contrast easing for ambient loops and save snappy timing for sticker punchlines.
5. **Design at display size.** Compose and preview at the size and context the piece will actually appear — a sticker in a chat bubble, an accent in a corner. Detail invisible at display size is wasted render budget.
6. **Respect the surface budget.** File-size and format limits of the target surface are part of the spec: check dimensions, frame rate, and weight against the brief before production, not at export.

## Verification before handoff

- Watch five consecutive cycles at 1x at display size: the loop point must be undetectable and the motion must not fatigue.
- Check the first frame standing alone — many surfaces show it as the static preview.
- Confirm the piece reads with no sound and no caption; a loop explains itself or it fails.
- Export-verify: correct dimensions, frame rate, transparency behavior, and weight on the actual target format.

## Quality bar

- Invisible loop point at normal speed; no cumulative drift between cycles.
- Reads at display size in under one second of viewing.
- Spec-exact output — a beautiful loop in the wrong format is a rejected loop.

## Output format

Final asset in every specified format, source file named to match, and a delivery note: cycle length, formats produced, five-cycle check confirmed, deviations flagged with reasons.
