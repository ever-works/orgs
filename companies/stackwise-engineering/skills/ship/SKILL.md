---
name: ship
description: Use when a reviewed branch is ready to leave the workshop — the disciplined ship sequence of sync, test, version, changelog, commit, push, and merge request, with any red step halting the line.
---

# Ship

The release sequence for a branch that has passed review. Shipping is
execution, not discussion: the decisions were made upstream, and the only
questions left are mechanical ones with checkable answers.

## Steps

1. **Confirm the entry gate.** The branch has an approving review verdict
   and no unresolved critical findings. No verdict, no ship — the sequence
   does not begin on "it's probably fine".
2. **Sync with the mainline.** Merge or rebase the latest mainline into the
   branch and resolve conflicts now, in the branch, where mistakes are
   cheap. A conflict resolved during the merge itself is a conflict resolved
   under pressure.
3. **Run the full test suite** — not the subset that touches the change.
   The point of shipping-time tests is catching the interaction nobody
   predicted. Any failure halts the sequence; fix or bounce, never skip.
4. **Bump the version** according to the repo's convention, and honestly:
   breaking changes are majors even when inconvenient.
5. **Update the changelog.** Entries describe user-visible effects
   ("uploads over 10 MB no longer stall"), not implementation acts
   ("refactored uploader"). Group by added / changed / fixed.
6. **Commit and push** with a message that names the change and references
   the Task or plan it implements.
7. **Open or update the merge request.** The description states what
   shipped, what was deliberately left out, how it was verified, and
   anything the reviewer of the merge itself should check first.
8. **Resolve outstanding review threads.** Every open comment gets a
   response — fixed, follow-up filed, or declined with a reason. Merging
   over silent threads is shipping with the door open.
9. **Halt loudly on failure.** If any step goes red and cannot be fixed in
   place, stop, report the exact step and error, and hand back. A precise
   failure report is a successful outcome of this skill.

## Quality bar

- Steps run in order; no step is skipped because the change "is small".
- The changelog entry would make sense to a user who never saw the code.
- A halted ship names the step, the error, and the recommended next action.

## Output format

A ship report: entry-gate confirmation, per-step status line, version and
changelog entry as written, merge request reference, and SHIPPED or HALTED
(with step and reason) as the final line.
