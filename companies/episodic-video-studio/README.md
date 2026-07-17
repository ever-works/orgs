# Episodic Video Studio

A prebuilt AI company for teams producing serialized video: episodic shows, narrative channels, and any format where the same cast, world, and visual language must stay coherent across many releases. The studio treats each episode as a unit of work that moves through a fixed pipeline — premise, script, visual plan, cut, packaged release — with an independent quality gate between every stage and a distribution loop that feeds audience-retention findings back into the writing room.

## Org structure

- **Showrunner** (root) — owns the season, greenlights premises, chairs the creative council.
  - **Executive Producer** — runs the Production Office (Production Scheduler, Asset Coordinator).
  - **Creative Director** — owns creative development:
    - **Head Writer** — Writing team (Dialogue Writer, Script Doctor, Pacing Analyst).
    - **Story Lead** — Narrative team (Character Director, Lore Researcher).
    - **Visual Director** — Visuals team (Cinematography Designer, Storyboard Artist, Visual Prompt Engineer).
    - **Music Director** — Music team.
  - **Post-Production Lead** — Post-Production team (Editor, Audio Engineer, Continuity Supervisor).
  - **Quality Director** — Quality team (Narrative QA, Visual QA, Release QA).
  - **Distribution Lead** — Distribution team (Platform Strategist, Retention Optimizer).

28 agents, 8 teams, 8 skills. See `images/org-chart.svg` for the full chart.

## How it works

An episode premise is approved by the Showrunner, scripted by the Writing team against series canon from the Narrative team, and locked by Narrative QA. The Visuals team converts the locked script into a storyboard and generation-ready prompts, locked by Visual QA. Post-Production assembles picture and sound, the Continuity Supervisor verifies the cut against canon, and Release QA signs off on the final package before the Distribution team publishes it and reports back on retention.

## Credit

Concept adapted from an open community proposal to the paperclipai/companies catalog (PR #13); all content is original.
