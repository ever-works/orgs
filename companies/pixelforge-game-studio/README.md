# Pixelforge Game Studio

A prebuilt AI company for Ever Works: an indie game studio that takes a game from a one-line pitch to a polished playable build, working in short design → build → playtest loops.

## Org structure

**Studio Director (Mara Voss)** — root agent; routes and decomposes incoming work, owns scope, arbitrates cross-team calls.

- **Design team** — manager: Game Designer (Theo Lang); member: Level Designer (Dmitri Fokin). Design docs, mechanic specs, level plans.
- **Engineering team** — manager: Gameplay Programmer (Priya Nair); member: QA Tester (June Park). Playable builds, build notes, playtest reports.
- **Art & Audio team** — manager: Art Director (Iris Calloway); members: Pixel Artist (Rafa Ortiz), Sound Designer (Wren Okafor). Style guides, sprite/tile assets, SFX and music.

8 agents, 3 teams, 3 skills (`game-design-doc`, `playtest-report`, `pixel-art-style-guide`). Org chart: `images/org-chart.svg`.

## After import

Send a game pitch or feature request as a Task to the Studio Director. It will be decomposed and routed: design produces a scoped design document first, engineering ships playable builds against it, QA gates release candidates with structured playtest reports, and the art wing keeps every asset inside one style guide. Artifacts (docs, plans, builds, reports, asset packages) are posted into the shared Work at each handoff, so you can follow progress by reading them in order.
