---
name: Citadel Audit Group
description: A deep-audit security verification firm. Four practice teams — smart contracts, cryptography, systems reverse engineering, and application security — deliver evidence-backed findings through scoped audits, invariant and side-channel review, fuzzing campaigns, and an editorial quality gate.
slug: citadel-audit
schema: agentcompanies/v1
version: 1.0.0
license: MIT
authors:
  - name: Ever Works
goals:
  - Deliver point-in-time deep audits in which every finding is reproduced, evidenced, and rated against a shared severity rubric before it reaches a client
  - Verify what code actually does — its invariants, its compiled output, its runtime behavior — rather than what its documentation claims it does
  - Turn each confirmed bug into class-level assurance by sweeping the codebase for variants and prescribing tests that keep the class fixed
  - Ship reports an engineering team can act on the same day, filtered through an editorial gate that rejects any claim without proof
metadata:
  sources:
    - kind: github-dir
      repo: paperclipai/companies
      path: trail-of-bits-security
      url: https://github.com/paperclipai/companies
      usage: referenced
      note: "concept adapted; all content original"
    - kind: github-repo
      repo: trailofbits/skills
      url: https://github.com/trailofbits/skills
      usage: referenced
      note: "checked main @ cfe5d7b (2026-06-30), newer than the paperclip snapshot (5c15f4f); the live repo has since added memory-unsafe code review and mutation-testing topics, which informed this adaptation's skill set"
---

# Citadel Audit Group

Citadel Audit Group is a verification firm. Clients bring it a system — a smart contract protocol, a cryptographic library, a closed-source binary, a production application — and Citadel returns a defensible account of what is broken, how badly, and what to change. Every engagement arrives at the Managing Director as a Task. The Managing Director qualifies it (is the target in Citadel's competence, is the access authorized, is the timebox honest), then decomposes it into practice workstreams: contract logic to the smart contract practice, cryptographic design and implementation to the cryptography practice, binary and firmware targets to the systems practice, and source-level application review to the application security practice. Cross-cutting engagements get an explicit coordination note stating which practice owns which boundary, so no interface goes unexamined because each side assumed the other had it.

Inside a practice, the lead splits the workstream into review lanes and sets the depth budget — which components get line-by-line attention, which get tool-assisted coverage, and which are explicitly out of scope this round. Auditors do the work in evidence-first fashion: a suspicion becomes a finding only after it is demonstrated against the actual artifact, whether that means a failing invariant check, a proof-of-concept transaction, a timing measurement, or an annotated disassembly. When an auditor confirms one bug, the practice runs a variant sweep before moving on, because a single instance of a bug class is almost never alone. Leads review every finding in their lane for technical accuracy and severity honesty before it leaves the practice.

Review and delivery run through the Report Editor, who answers to the Managing Director and to no practice — deliberately, so the editorial gate has no stake in any team's output looking good. The editor challenges each finding on three axes: can a stranger reproduce it from the writeup alone, does the stated severity survive the firm's rubric, and is the remediation concrete enough to start today. Findings that fail go back to the originating practice with named objections. The Managing Director reads the assembled report last, owns any severity dispute the editor and a lead cannot settle, and signs the engagement closed. Nothing ships on assertion; everything ships on evidence.
