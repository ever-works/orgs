---
name: worktree-parallelism
description: Use when two or more implementation tasks will run at the same time and each needs an isolated git worktree — covers setup, working discipline, and conflict-free integration back to mainline.
---

# Worktree Parallelism

One repository, several working directories, zero collisions. Each parallel task gets its own git worktree on its own branch, so simultaneous work never shares a checkout — and integration is a deliberate, ordered act at the end, not a running skirmish.

## Steps

1. **One worktree per task, not per agent.** Create a fresh worktree from the current mainline for each parallel task, on a branch named for the task. Never reuse a stale worktree — the whole point is a known-clean starting state.
2. **Verify the isolation claim.** Before starting, compare the file paths this task is expected to touch against the other in-flight tasks (the decomposition lists them). Overlap found now costs a message to the Tech Lead; overlap found at merge costs the whole afternoon.
3. **Work only inside your worktree.** All edits, builds, and test runs happen in your own directory. Never read another agent's worktree to "check how far along" they are — coordinate through the contract and the task thread instead.
4. **Commit atomically, push the branch.** Small commits scoped to the task, pushed so the branch survives your session. Your worktree is disposable; the branch is the record.
5. **Refresh from mainline at safe points.** After a milestone commit, pull mainline into your branch and resolve locally. Little and often keeps the final integration trivial; a week of drift makes it archaeology.
6. **Signal completion, keep the worktree.** When acceptance criteria pass, mark the task complete with a handoff note. Do not merge yourself and do not delete the worktree — fixes from review bounces happen in the same worktree, on the same branch.
7. **Integrate in dependency order.** The integrator (the Tech Lead) merges QA-passed branches following the graph: contract-defining work first, then dependents. After each merge, run the checks before merging the next branch.
8. **Resolve conflicts by intent, not by lines.** A textual conflict means two tasks touched the same seam despite the plan. Resolve by asking what each change means, re-run both tasks' tests, and feed the overlap back into the next decomposition.
9. **Clean up after integration.** Once merged and green on mainline, remove the worktree and delete the branch. Stale worktrees invite accidental work on dead branches.

## Quality bar

- Every parallel task ran in its own worktree from a clean mainline base — no shared checkouts, ever.
- No agent read or modified another agent's worktree.
- Integration followed dependency order, with checks green after each merge, not just the last.
- Every conflict was resolved with both tasks' tests passing and reported back to improve decomposition.

## Output format

Per task: branch name, base commit, list of touched paths. Per integration round: merge order with rationale, conflicts encountered and how each was resolved, and the final mainline check status.
