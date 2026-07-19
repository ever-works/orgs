---
name: help-article-authoring
description: Use when turning a resolved ticket or recurring issue into a help-center article — writes task-first, tested, findable content that deflects the next ticket instead of describing the feature to someone who already knows it.
---

# Help Article Authoring

A playbook for writing help content that prevents a ticket rather than documenting a feature. The failure mode it prevents: an accurate-but-useless article that describes what a button does to a customer who is stuck and needs to know which button, in what order, to reach their goal.

## Start from the stuck customer

1. Write for the person who is blocked right now, not for the team that already knows the answer. The reader has a task and an obstacle — name both in the first line.
2. Title the article for the job to be done, in the customer's words: "Export your data to a spreadsheet," not "Data Export Module." The title is what they'll search for.
3. State up front who the article is for and what they'll have accomplished by the end, so a reader can bail immediately if they're in the wrong place.

## Structure for success, not completeness

4. Lead with the fastest path to the goal. Give the numbered steps that solve the common case first; push edge cases, caveats, and background below the fold.
5. Make each step a single concrete action with the exact label to click and what they'll see happen. If a step has a sub-decision, split it or branch it clearly.
6. Show, don't just tell — include the screenshot or example at the moment it removes doubt, and keep it current with the product.
7. End with "if this didn't work" — the two or three most likely reasons it failed and what to do next, so a near-miss doesn't become a ticket anyway.

## Make it findable and keep it true

8. Seed the article with the words customers actually use, including the wrong ones — synonyms, error text, the feature's old name — so search finds it however they phrase it.
9. Verify every step against the live product before publishing. A wrong step is worse than a missing article; it costs the customer time and then a ticket.
10. Tag the article with the ticket pattern it targets and revisit it on each relevant product change; retire or fix anything that's gone stale.

## Quality bar

- Task-first title in the customer's language.
- Fastest path first, edge cases later.
- Every step is a concrete, verified action.
- Findable by real search terms and provably accurate against the current product.

## Output format

Help article: task-first title → who it's for and the outcome → numbered steps (fastest path first) with screenshots → troubleshooting "if this didn't work" → search keywords and the ticket pattern it deflects.
