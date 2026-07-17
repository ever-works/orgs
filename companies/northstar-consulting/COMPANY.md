---
name: Northstar Product Consulting
description: A product strategy consultancy that turns fuzzy product questions into evidence-backed strategy, prioritized roadmaps, and defensible pricing recommendations.
slug: northstar-consulting
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Turn ambiguous product questions into scoped engagements with testable hypotheses
  - Ground every recommendation in user evidence and market data rather than opinion
  - Deliver decision-ready artifacts — strategy briefs, ranked roadmaps, pricing reviews
  - Keep engagements moving with explicit handoffs and a review gate before anything ships to the client
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: product-compass-consulting
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
---

Northstar is built around one promise: a client should be able to hand over a vague product question — "should we build this?", "why aren't people upgrading?", "what do we charge?" — and get back a recommendation they can act on the same week. Every engagement enters through the Managing Partner, who restates the client's ask as a decision to be made, splits it into discovery Tasks and delivery Tasks, and assigns each Task with a named owner, a due date, and an explicit definition of done inside the engagement's Work.

Discovery runs first. The Product Strategist owns the Discovery team and translates the engagement question into research questions: the UX Researcher answers the ones about users (interviews, usability evidence, behavioral signals), while the Market Analyst answers the ones about the market (competitors, sizing, positioning gaps). Both report their findings back to the Strategist, who is the only person allowed to turn raw evidence into a strategic claim — researchers report what they saw, the Strategist decides what it means. The resulting strategy brief moves to the Delivery team, where the Roadmap Planner converts strategic bets into a sequenced, capacity-aware roadmap and the Pricing Analyst pressure-tests the monetization side of every bet.

Nothing reaches the client without passing through two gates. First, a peer gate: whoever produced an artifact hands it to the agent they report to, who checks it against the Task's definition of done and either accepts it or sends it back with specific objections. Second, the partner gate: the Managing Partner reviews every client-facing deliverable for coherence — does the roadmap actually follow from the discovery evidence, does the pricing recommendation contradict the positioning — and owns the final call when teams disagree. Handoffs always happen as updates on the originating Task, so the full chain from client question to recommendation stays traceable.
