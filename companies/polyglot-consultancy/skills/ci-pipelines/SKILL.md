---
name: ci-pipelines
description: Use when building or fixing continuous integration pipelines, so feedback is fast, failures are self-explaining, and green means trustworthy.
---

# CI Pipelines

A pipeline exists to answer "is this change safe to ship?" quickly and
honestly. Optimize for the honesty first, then the speed.

## Steps

1. **Order gates by cost of feedback.** Cheapest, highest-yield checks first:
   formatting, lint, type checks fail in seconds; unit tests next; integration
   and end-to-end suites after; expensive checks (full builds, security scans)
   last or parallel. A developer should learn about a typo before the e2e
   suite spins up.
2. **Make failures self-explaining.** Failure output states what failed, on
   which input, and where to look — readable by someone who did not write the
   pipeline. A red build that requires archaeology gets retried instead of
   fixed, and retry culture rots the suite.
3. **Shard for wall-clock, cache for cost.** Split slow suites across parallel
   shards; cache dependency installs and build artifacts keyed on lockfiles.
   Target a total wall-clock the team will actually wait for rather than
   context-switch away from.
4. **Quarantine flake the day it appears.** A test that fails intermittently
   is moved to quarantine, tracked with an owner, and fixed or deleted.
   Auto-retry as policy is forbidden: it converts defects into invisible
   debt.
5. **Keep secrets and permissions tight.** Pipelines get least-privilege
   credentials from the secret store; forks and external PRs run without
   secrets; anything the pipeline can deploy, an attacker who owns the
   pipeline can deploy — treat pipeline config as security surface.
6. **Measure the pipeline itself.** Duration, failure rate, flake rate, and
   time-to-green tracked; when duration creeps past the agreed budget, trimming
   it becomes a scheduled slice, not a someday wish.

## Quality bar

- A first-week engineer can diagnose a red build from its output alone.
- Green is trustworthy: no auto-retried, no quarantined-but-counted tests.
- The wall-clock budget is stated and currently met.
- Pipeline credentials could leak without granting production access.

## Output format

Pipeline definitions under version control with a short doc per gate: what it
checks, why it blocks, and its budget. Health metrics reported to the lead
weekly.
