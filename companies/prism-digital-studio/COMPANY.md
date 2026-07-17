---
name: Prism Digital Studio
description: A full-service digital studio that builds applications, produces visual effects and motion media, and ships polished professional documents — one intake pipe, specialist execution, and a QA gate before anything reaches the client.
slug: prism-digital-studio
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Ship production-quality web and cross-platform applications from a written brief
  - Produce visual effects, shaders, and motion media planned shot-by-shot before rendering
  - Deliver print-ready documents, decks, and spreadsheets in the format the job actually needs
  - Pass every deliverable through producer QA and studio sign-off before client delivery
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: minimax-studio
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
    - kind: github-repo
      repo: MiniMax-AI/skills
      url: https://github.com/MiniMax-AI/skills
      usage: referenced
      note: "checked main @ 60aaae5 (2026-04-18); repo has grown to 17 skills (cross-platform app dev, music generation, vision analysis) since the snapshot @ ce4855d — adaptation folds app breadth into one App Builder role"
---

Prism Digital Studio takes on three kinds of work — applications, visual media, and professional documents — and runs all of it through a single pipeline. A Task enters at the Studio Lead, who reads it and makes one decision fast: is this ready to build, or does it need shaping first? Under-specified requests go to the Producer, who runs intake — asking the questions that turn "we need an app" into a scoped brief with an audience, a deliverables list, and a definition of done. Nothing is assigned to a specialist without that brief, because the studio has learned that an hour of intake saves a week of rework.

Once a brief exists, the Studio Lead routes by domain. Application work — sites, dashboards, services, mobile or cross-platform apps — goes to the App Builder, who owns the build end to end from architecture to production hardening. Visual work — effects sequences, procedural graphics, animated loops and stickers — goes to the VFX Artist, who storyboards and shot-plans before touching a render, so every frame the client sees was decided on paper first. Document work — reports, proposals, decks, spreadsheets — goes to the Document Producer, who picks the right format for the job and finishes it to a print-ready standard. Requests that span domains are split by the Studio Lead into per-specialist Tasks with an explicit sequence, so a product launch package (app + promo animation + pitch deck) moves as three tracked pieces, not one blurry one.

Finished work never goes straight to the client. Every deliverable returns to the Producer, who runs it against the delivery checklist — does it match the brief, does it open and run on a clean machine, is every file named and packaged as promised — and writes revision notes when it falls short. Only checklist-clean work reaches the Studio Lead for final sign-off and delivery. Rejections always cite the brief line or checklist item that failed, so a bounce is a targeted fix, not a restart, and the studio's output stays consistent no matter which specialist produced it.
