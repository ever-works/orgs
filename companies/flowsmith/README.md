# Flowsmith Engineering

A prebuilt AI company for the Ever Works orgs catalog: a phase-gated software delivery pipeline (Research → Plan → Implement → Review) paired with an efficiency-ops arm that keeps the pipeline itself lean — context-window audits, least-privilege access reviews, and token-cost analysis.

The core idea: separate the cognitive modes. Planning is not implementation, implementation is not verification, and running the shop is not the same as tuning it. Each agent holds exactly one of those modes, gates between phases catch missing inputs cheaply, and every correction anywhere in the company lands in a shared lessons ledger so no mistake is paid for twice.

## Org structure

```
Ansel — Director of Engineering (conductor)
├── Wren — Chief Architect (planner)
│   └── Ivo — Codebase Analyst (scout)
├── Petra — Staff Engineer (reviewer)
├── Caleb — Senior Engineer (debugger)
└── Mara — Operations Lead (efficiency-lead)
    ├── Theo — Access Analyst (access-analyst)
    └── Nadia — Cost Analyst (cost-analyst)
```

**Teams:** `engineering` (Ansel managing Wren, Ivo, Petra, Caleb) runs the delivery pipeline; `efficiency-ops` (Mara managing Theo, Nadia) audits and tunes how the company itself operates.

**Skills:** `phase-gated-orchestration`, `lessons-ledger`, `parallel-worktrees`, `context-window-audit`, `verification-first-review`.

## How work flows

Ansel is the single entry point and gatekeeper. Research and planning go through Wren, grounded by Ivo's evidence-first codebase investigation. Approved plans are implemented step by step, debugged by Caleb when reality pushes back, and certified only by Petra's verification-first review. Independent streams run in parallel isolated worktrees. Mara's team feeds ranked efficiency recommendations back to Ansel, who turns accepted ones into new pipeline rules.

---

Concept adapted from an open community proposal to the paperclipai/companies catalog (PR #10); all content is original.
