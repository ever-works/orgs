---
name: game-design-doc
description: Use when a game concept, new mechanic, or major feature needs to be specified before production — turns a pitch into a scoped, testable design document that engineering, level design, and art can build against.
---

# Game Design Document

Produce a document another agent can build from without asking you what you meant. Length target: 1-3 pages for a jam-scale game, more only if the scope genuinely demands it.

## Steps

1. **Pitch line.** One sentence: player fantasy + core verb + twist ("a ghost janitor who cleans haunted rooms by possessing the mess"). If you can't write it, the concept isn't ready — stop and clarify with the requester.
2. **Core loop.** Describe the 30-90 second cycle the player repeats: action, feedback, reward, escalation. Draw it as a numbered cycle. Name explicitly what makes iteration N+1 different from iteration N.
3. **Player verbs.** List every action the player can take (move, dash, possess, buy). More than 6 verbs at v1 scope is a red flag — cut or merge.
4. **Mechanic specs.** For each mechanic: trigger, effect, numbers (speed, duration, cooldown, cost, damage), edge cases, and how the player learns it. Write real numbers even if provisional; mark provisional ones with `(t)` for tunable.
5. **Win/lose/end states.** What ends a run, a level, the game. What persists between runs.
6. **Scope tiers.** Three lists: **Core** (game doesn't exist without it), **Target** (what v1 ships with), **Dream** (explicitly not now). Every feature named in the doc must appear in exactly one tier.
7. **Fun hypothesis.** One paragraph: what feeling the game delivers, and 2-3 observable playtest signals that would confirm it ("players retry immediately after death without being prompted").
8. **Needs from other teams.** Bullet list of implied asset families (art), audio moments (sound), and technical risks (engineering) so leads can start batching early.

## Quality bar

- Every mechanic has numbers; every number is either final or marked `(t)`.
- A reader can answer "what do I do, moment to moment?" from the loop section alone.
- The Core tier fits in a jam weekend; if it doesn't, re-cut before publishing.
- No orphan features: nothing appears in a spec section without a scope tier, and nothing sits in a tier without a spec.
- Updated same-day whenever the built game intentionally diverges — a doc that lies is worse than no doc.

## Output format

Markdown document titled with the game/feature name, sections in the order above, changelog line at the bottom on every revision (what changed, why, which playtest finding drove it if any).
