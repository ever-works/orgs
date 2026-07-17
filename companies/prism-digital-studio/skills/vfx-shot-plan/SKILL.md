---
name: vfx-shot-plan
description: Use when breaking an approved storyboard or effects request into individual shots with per-shot technique, spec, and acceptance checks — the production contract for any visual-effects work.
---

# VFX Shot Plan

The shot plan turns an approved storyboard into a numbered production list. Each entry is a small contract: what the shot shows, how it will be made, and how anyone can check it's done.

## Building the plan

1. **Derive shots from the storyboard.** Usually one shot per key frame, but split any beat that mixes two techniques (say, a particle burst over a camera move) into separately checkable shots.
2. **Write each shot entry** with six fields:
   - **Shot number and name** — stable IDs; renumbering mid-production breaks every reference.
   - **Description** — what the viewer sees, two lines maximum.
   - **Technique** — the approach that produces it: procedural noise, particle system, fluid sim, keyframed motion, shader pass, composite. Name the primary technique and any secondary passes.
   - **Spec** — resolution, frame rate, duration, output format, and alpha/background requirements. Inherit from the brief; never leave "same as usual" implied.
   - **Acceptance check** — one sentence a non-artist could apply: "the smoke fully clears the logo by frame 40", "loop point is invisible at 1x speed".
   - **Dependencies** — assets or shots this one needs first.
3. **Order by risk, not by sequence.** The storyboard's flagged risk frame is shot 1 in production order regardless of where it appears in the timeline.
4. **Budget the renders.** Estimate per-shot production time; if the total exceeds the Task's window, flag it to the Studio Lead now — before production, while trimming a shot is still cheap.
5. **Name files to the plan.** Working files and outputs carry the shot ID; a revision must never begin with an archaeology dig.

## Quality bar

- Every shot independently checkable; no entry whose acceptance check is "looks right".
- Specs complete enough that a render started from the entry alone comes out in the correct format.
- Risk-first ordering visible in the plan, with a stated production sequence.

## Output format

Markdown table (shot / description / technique / spec / acceptance / dependencies) plus a production-order list and the render budget. Attach to the Task alongside the storyboard it implements.
