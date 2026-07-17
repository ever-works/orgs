---
name: parallel-worktrees
description: Use when two or more independent work streams need to run concurrently on the same repository — each stream gets its own isolated worktree and branch so experiments, builds, and half-done edits never contaminate each other.
---

# Parallel Worktrees

One working copy per stream, always. Sharing a checkout between concurrent streams is how a debugging experiment ends up inside a feature diff and how two half-finished changes produce a build failure neither owner can explain.

## Setting up a stream

1. Confirm independence first. Two streams qualify for parallel execution only if they touch disjoint areas or their overlap is read-only. Streams that write to the same files run sequentially — no exceptions, coordination costs more than waiting.
2. Create a dedicated worktree per stream from the integration branch, on its own branch named for the stream. The main checkout stays clean and belongs to no stream.
3. Record the assignment in the stream register: worktree path, branch, owner, stream. An unregistered worktree is an orphan waiting to confuse someone.
4. Each stream installs its own dependencies and runs its own builds inside its worktree. Shared caches are fine; shared build output directories are not.

## Working rules

- Everything a stream does — edits, experiments, instrumentation, scratch files — happens inside its own worktree. Debugging especially: probes and temporary logging must die with the worktree, not leak into a stream diff.
- Rebase each stream onto the integration branch before its Review gate, and resolve conflicts inside the stream's own worktree so the resolution is reviewed with the change.
- If mid-stream work reveals a dependency on another active stream, stop and escalate for re-sequencing; do not reach into the other worktree or cherry-pick from it sideways.
- Long-lived worktrees rot. If a stream stalls past its expected life, its gate goes to HOLD and the worktree is either refreshed by rebase or retired.

## Tearing down

1. After the stream's change merges, delete the worktree and its branch the same day.
2. Sweep the register on a cadence: any worktree with no matching active stream gets investigated and removed. The register and the filesystem must agree.

## Quality bar

- Zero cross-stream contamination: every diff contains only its own stream's changes, verifiable at review.
- The stream register always answers "which worktrees exist and who owns each" accurately.
- No worktree outlives its stream by more than a sweep interval.
- Conflicts are resolved and reviewed inside the owning stream, never in the integration branch directly.
