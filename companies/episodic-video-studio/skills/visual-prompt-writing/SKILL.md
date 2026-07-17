---
name: visual-prompt-writing
description: Use when converting an approved storyboard panel into a text-to-image or text-to-video generation prompt, or when diagnosing why generated frames drift from the board or from previous episodes.
---

# Visual Prompt Writing

A generation prompt is a specification, not a wish. The board panel is ground truth; the prompt's only job is to reproduce it inside the show's visual language, repeatably.

## Prompt structure — fixed order

1. **Subject and action.** Who or what, doing what, stated first and concretely. One subject cluster per prompt; compound scenes generate compound failures.
2. **Setting.** Location and time of day, using the exact descriptor block for any recurring location.
3. **Camera.** Framing, angle, and lens feel translated from the cinematography spec — distance and height in plain words, lens character as its visual effect (compression, distortion, shallow focus), not as equipment trivia.
4. **Light.** Source, direction, quality, and color temperature. Light is the single strongest style lever; never leave it implicit.
5. **Style anchors.** The show's fixed style phrases from the style guide, identical across every prompt in the season. Style is enforced by repetition, not by inspiration.

## Consistency descriptors

- Every recurring character and location has a locked descriptor block — a fixed phrase sequence covering the features that must never drift (build, face geometry, wardrobe signature, distinguishing marks).
- Descriptor blocks are pasted verbatim, never paraphrased; paraphrase is how faces drift.
- Blocks change only when the reference library changes, and the change is versioned so old episodes remain reproducible.

## Exclusions

- Maintain a standing exclusion list of the pipeline's known failure modes (anatomy errors, style bleed, unwanted text, modern artifacts in a period setting) and attach it to every prompt.
- When a new failure mode appears twice, it enters the list; the list is institutional memory.

## Iteration discipline

- Generate, compare against the panel — composition, pose, light, continuity-critical details — and change ONE element per retry, logging what changed and what it fixed.
- Three failed iterations means the problem is upstream: the panel is ambiguous or the design exceeds the pipeline; escalate rather than brute-force.
- The shipped prompt set is the set that reproduced the boards; the iteration log ships with it.

## Quality bar

- A stranger with the same backend could rerun the set and recognize the episode.
- No prompt depends on an unwritten convention; everything load-bearing is in the text.
- Vendor-neutral phrasing throughout — a backend swap should cost a dialect pass, not a rewrite.
