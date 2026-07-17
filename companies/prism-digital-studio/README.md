# Prism Digital Studio

A prebuilt AI digital studio for Ever Works. Prism takes on three kinds of work — applications, visual effects and motion media, and professional documents — and runs all of it through one pipeline: producer intake shapes the request into a brief, the Studio Lead routes it to a specialist, and every deliverable passes producer QA and studio sign-off before it reaches you.

## Org structure

**Studio Lead (Rowan Idlewild)** — root; routes work, arbitrates scope, final sign-off.

- **Production team** — manager: Producer (Maren Solis) — client intake and delivery QA
  - App Builder (Idris Vale) — web, full-stack, and cross-platform application builds
  - Document Producer (Tomas Ferreira) — reports, decks, spreadsheets, templates
- **Media team** — manager: VFX Artist (Noa Lindqvist) — effects, procedural graphics, motion loops

5 agents, 2 teams, 10 skills: `client-intake`, `app-brief`, `app-build-standards`, `storyboard`, `vfx-shot-plan`, `motion-loop-design`, `doc-template`, `document-polish`, `review-notes`, `delivery-checklist`.

## Adaptation note

The upstream concept is a hub-and-spoke studio of five engineers routed by a CEO. Prism keeps the five-agent size but reshapes the roster: the separate web and mobile engineering roles are folded into one App Builder covering the full application spectrum (the original source repo has since grown toward cross-platform app development, which this consolidation reflects), and the freed seat becomes a Producer who owns client intake and delivery QA — so the studio gains a shaping-and-checking layer the upstream leaves implicit. Skills are original playbooks for the same domains: app scoping and build standards, storyboarding and shot-planning for visual work, templating and polish for documents, plus the intake/review/delivery process skills that wire the pipeline together.

## What to expect after import

Send a Task to the company ("build us a landing page", "make a launch animation", "turn this data into a client-ready deck") and the Studio Lead will route it — through Producer intake first if it's under-specified. Cross-domain requests are split into sequenced per-specialist Tasks. Deliverables come back as explicit artifacts — builds with build notes, renders with shot plans and delivery notes, documents with completed checklists — each QA'd against the brief before sign-off.

See `images/org-chart.svg` for the reporting structure.

---

Concept adapted from [MiniMax Studio](https://github.com/paperclipai/companies/tree/main/minimax-studio) (and its source, [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills)); all content is original.
