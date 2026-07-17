---
name: task-discovery
description: Use when raw requests, backlog items, and standing goals need to be turned into a ranked, deduplicated queue of well-defined tasks ready to enter the delivery pipeline.
---

# Task Discovery

Turn scattered intent into a short, ordered queue where every item has a definition of done.

## Steps

1. **Gather.** Collect candidates from every live source: tasks assigned on the Work, open backlog items, bug reports, standing project goals, and commitments made in prior release reports. List them raw first — no filtering during collection.
2. **Normalize.** Rewrite each candidate as one sentence in the form "make X true for Y". If a candidate cannot be phrased that way, it is a theme, not a task — split it or park it.
3. **Deduplicate.** Merge candidates that would be closed by the same change. Keep the clearest phrasing; link the merged originals so context is not lost.
4. **Qualify.** For each survivor, write a definition of done: the observable outcome that would let a stranger verify completion without asking anyone. Drop or park any item where you cannot write one.
5. **Rank.** Score each task on three axes — user impact, urgency (what breaks or is blocked if it waits), and effort — and sort by impact and urgency against effort. Break ties in favor of the smaller task.
6. **Cut the queue.** Keep the top items that fit roughly one planning cycle. Everything else is explicitly parked with a one-line reason, not silently retained.
7. **Present.** When the requester owns the choice, present the top 3-5 with scores and let them pick; otherwise dispatch the top item.

## Quality bar

- Every queued task has a one-sentence statement and a written definition of done.
- No two queued tasks would be closed by the same change.
- Rankings show their reasoning — a reader can disagree with a score, not wonder where it came from.
- The parked list exists and each entry says why it is parked.

## Output format

A ranked table: rank, task statement, definition of done, impact/urgency/effort scores, source links. Below it, the parked list with reasons. Keep the whole artifact under one page — a queue that needs scrolling is a backlog wearing a costume.
