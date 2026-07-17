---
name: Quality
description: The independent review lane — verifies behavior against acceptance criteria and reads every sensitive change for abuse paths before it ships.
slug: quality
manager: ../../agents/qa-engineer/AGENTS.md
includes:
  - ../../agents/security-reviewer/AGENTS.md
---

# Quality

The quality team is a separate lane from the people who build, on purpose: it
verifies claims rather than effort. QA exercises every change against its acceptance
criteria and keeps the smoke suite fast enough that a release verdict arrives in
minutes, while security review reads auth, data, and input-handling changes for the
ways they could be abused. Nothing deploys without a quality verdict, and a
"pass with noted risks" is always written down so the risk is a decision someone
made, never a surprise someone finds.
