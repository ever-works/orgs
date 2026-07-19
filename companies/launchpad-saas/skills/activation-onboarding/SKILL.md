---
name: activation-onboarding
description: Use when new signups aren't reaching value — to define the first-win action, design the shortest path to it, and build the onboarding and lifecycle sequence that gets users there.
---

# Activation & Onboarding

Activation is the moment a new user first gets real value from the product — the single event that predicts whether they'll stay. Onboarding is everything you do to get them there fast. Most products die not from lack of signups but from signups that never activate. This skill exists to make the first win happen sooner and more often.

## Steps

1. **Define the first-win action precisely.** Name the one concrete thing a user must do to get real value — not "explore the product," but a specific event ("created and shared their first report"). If you can't name it in one sentence, you can't design toward it.
2. **Measure the current activation rate and time-to-first-win.** What fraction of signups reach that action, and how long does it take them? These two numbers are your baseline; everything you do is judged against them.
3. **Map every step between signup and the first win.** List them honestly, including the invisible ones — email verification, empty states, setup, decisions. Each step is a place users leak.
4. **Cut ruthlessly.** For each step ask: does the user need this before their first win, or can it wait until after? Defer, pre-fill, or remove everything that isn't load-bearing. Sensible defaults beat configuration screens.
5. **Design the empty state as a teacher.** The first screen should point at the first-win action and nothing else. Show the shortest path, ideally with sample or pre-populated data so the user sees value before doing work.
6. **Sequence behavior-triggered nudges.** For users who stall before activating, trigger help on what they did (or didn't do), not on elapsed days. One nudge, aimed at the next step, at a time.
7. **Separate messaging leaks from product leaks.** If users stall because the value isn't there yet, that's a product problem to route upstream — not something a cheerier email fixes.

## Quality bar

- The first-win action is a single, specific, measurable event.
- Activation rate and time-to-first-win are baselined and tracked.
- Every step before the first win is justified or cut; defaults replace configuration.
- Nudges are behavior-triggered and singular, never a time-based drip of noise.

## Output format

```
First-win action: <specific event>
Baseline: activation rate <%> | time-to-first-win <duration>
Steps to first win: <ordered list> → cut/deferred: <list>
Empty state: <what it shows, the one action it points to>
Nudge sequence: <trigger behavior → message → next step> (one per stall point)
Target: activation rate <%> | time-to-first-win <duration>
```
