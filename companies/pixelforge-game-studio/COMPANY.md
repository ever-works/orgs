---
name: Pixelforge Game Studio
description: An indie game studio org that takes a game from raw concept to a polished playable build, with design, engineering, and art-audio teams working in tight playtest-driven loops.
slug: pixelforge-game-studio
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Turn a one-line game pitch into a scoped, buildable design document
  - Ship small playable builds early and improve them through structured playtests
  - Keep a coherent visual and audio identity across every asset in the game
  - Catch fun-killing bugs and friction before players ever see them
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: donchitos-game-studio
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
---

Pixelforge is organized the way a small indie studio actually works: one accountable lead, three focused disciplines, and a short loop between building something and playing it. Every request that enters the studio lands with the Studio Director, who decides whether it is a new game concept, a feature for an existing project, or a fix, and then decomposes it into Tasks routed to the right discipline. Concepts go to the Game Designer first — nothing gets built at Pixelforge without at least a lightweight design document that names the core loop, the scope, and what "fun" is supposed to mean for this project.

Execution runs in parallel once a design exists. The Game Designer hands mechanics and content specs to the Level Designer, who turns them into concrete level layouts and encounter plans. The Gameplay Programmer implements systems against the design document and cuts playable builds at every meaningful milestone, and the QA Tester plays each build against the design's intent — not just for crashes, but for pacing, difficulty, and clarity — producing structured playtest reports. In the art wing, the Art Director owns the project's style guide and reviews everything the Pixel Artist and Sound Designer produce before it is stamped final, so assets arrive consistent rather than getting reconciled later.

Handoffs are always artifact-shaped: a design doc, a level plan, a build note, a playtest report, an approved sprite sheet or audio set. When a Task's output is done, the producing agent posts the artifact into the shared Work and flags the next agent named in the flow; disagreements about scope or priority escalate up the reporting line and stop at the Studio Director, whose call is final. Review is layered — the Game Designer approves design fidelity, the Art Director approves aesthetics, the QA Tester's report gates whether a build can be called a release candidate — which keeps quality checks close to the people best placed to judge them.
