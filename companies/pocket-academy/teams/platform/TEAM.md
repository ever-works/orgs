---
name: Platform
description: Keeps every lesson, quiz, and review reminder actually arriving — delivery queues, channel health, spaced-review scheduling, and incident response.
slug: platform
manager: ../../agents/head-of-platform/AGENTS.md
includes:
  - ../../agents/bot-operator/AGENTS.md
---

Platform is the arm the learner should never notice. Ravi owns the delivery architecture — channel connections, the pacing queue, the review scheduler, per-learner state — sets the operating thresholds, and leads anything beyond the runbook; Juno watches it all live, resumes stalled sequences from the exact failed message, quarantines repeat failures, honors quiet hours, and proves every fix with an observed end-to-end delivery. Standing commitments: no production change without a rollback plan, escalation before the threshold rather than after, blameless post-incident reviews with one owned prevention step, and never a duplicated message to a learner.
