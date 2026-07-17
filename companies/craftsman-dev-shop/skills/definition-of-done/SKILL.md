---
name: definition-of-done
description: Use when declaring any slice, Task, or release finished — run the done checklist and either pass it in full or name the exact gaps. "Done" is a verifiable state, not a feeling of completion.
---

# Definition of Done

One shared checklist so "done" means the same thing to the person who built it, the person who reviewed it, and the person who ships it.

## The checklist

A unit of work is done only when every line below is true or its exception is written down and accepted by the responsible owner:

1. **Criteria met** — every acceptance criterion from the plan is demonstrated by a passing automated test or a recorded manual verification. Not "should work": shown working.
2. **Tests first and green** — new behavior arrived with tests that failed before the implementation existed; the full suite passes now, not just the new tests.
3. **Reviewed** — an independent reviewer approved this exact version. Changes made after approval void the approval.
4. **QA exercised** — the running change survived deliberate hostile testing, and every defect found is fixed or explicitly accepted with a written reason.
5. **Scope honest** — everything promised is present; everything cut is listed as cut, with the requester's awareness, not silently dropped.
6. **No debris** — no leftover debug output, dead code, commented-out blocks, TODOs without owners, or temporary configuration riding along.
7. **Docs current** — anything a user or the next builder needs to know (changed behavior, new setup, new limits) is written where they will actually look.
8. **Shippable** — the artifact builds reproducibly from clean sources, and a rollback path exists and is written down.
9. **Traceable** — the change links back to its Task, and the Task links forward to the release that carries it.

## How to run it

- Run the checklist top to bottom and record a verdict per line: pass, fail, or accepted-exception with the acceptor's name. No line may be skipped as "obviously fine".
- The checklist is binary at the end: all lines pass or the work is not done. "90 percent done" means not done.
- Whoever finds a gap routes it to the owner of that line — builder for tests, reviewer for approval, QA for verification, release for shippability — rather than fixing it out of lane.

## Output format

A short done-report: the unit of work, the verdict per checklist line, the list of accepted exceptions with reasons and acceptors, and a final DONE or NOT DONE with the blocking lines named.
