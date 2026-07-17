---
name: Helios Intelligence
description: An always-on intelligence company that runs continuous research, signal engineering, and market monitoring — turning raw feeds into daily briefs, verified alerts, and decision-ready digests with a paper trail behind every claim.
slug: helios-intelligence
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Convert continuous streams of raw information into a small number of decisions worth making
  - Alert only on verified, significant signals — never on noise
  - Keep every monitor, source list, and shared note maintained so the operation degrades gracefully, not silently
  - Deliver briefs a busy reader can act on in under five minutes
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: aeon-intelligence
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
    - kind: github-repo
      repo: aaronjmars/aeon
      url: https://github.com/aaronjmars/aeon
      usage: referenced
      note: "original source of the upstream snapshot (commit b14a3f8); re-checked live repo at HEAD c39d301 (2026-07-17, now branded aeonfun/aeon, 61 skills) and folded its newer emphasis on autonomous research, signal verification, and self-maintenance into this adaptation"
---

Helios Intelligence is built around one conviction: information is cheap, attention is not. The company runs a continuous intake of research feeds, engineered monitors, and market watchlists, and compresses all of it into a short daily brief and a handful of alerts that have already been checked before anyone is interrupted. Work arrives as Tasks — a standing cadence (daily brief, weekly review), a monitoring request ("watch this and tell me when it matters"), or a one-off question ("what is actually going on with X?") — and every Task lands first with the Intelligence Director.

The Director decomposes each Task into its natural lane. Questions that need reading, source evaluation, and synthesis go to the Research Analyst. Anything that should be watched by a machine rather than a person — a feed to poll, a threshold to check, a pipeline to build — goes to the Signals Engineer, who turns it into a durable monitor with explicit alert conditions. Watchlist coverage of markets and external metrics belongs to the Market Watcher, who reads what the monitors emit, separates movement from meaning, and writes the monitoring briefs. The Operations Assistant keeps the whole operation legible: rolling digests, shared-note hygiene, and the paperwork that makes handoffs cheap.

Review runs in the opposite direction from execution. Specialists never alert the operator directly on judgment calls: proposed signals route through the Market Watcher's verification pass (is this real, is it significant, has it fired before?), and everything that survives feeds upward into the Director's daily brief, where it is ranked against everything else competing for attention. The Director owns the final call on what interrupts a human. Weekly, the company reviews its own hit rate — which alerts mattered, which monitors rotted, which sources earned or lost trust — and files corrective Tasks so next week's signal-to-noise is better than this week's.
