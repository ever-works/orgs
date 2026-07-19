---
name: prd-writing
description: Use when a funded bet needs to become a buildable, testable feature slice — to write a PRD that names the problem, the smallest scope, explicit non-goals, and one success metric.
---

# PRD Writing

A PRD's job is to turn a fuzzy bet into the smallest thing you can ship to learn whether the bet was right. It is a decision document, not a wish list. If a reader can't tell what is in, what is out, and how you'll know it worked, the PRD isn't done.

## Steps

1. **State the problem, not the feature.** One paragraph: what job is the user trying to do, who specifically has this problem, and what they do today instead. Use the user's own words, pulled from support tickets or sales calls — not invented in the doc.
2. **Name the bet.** One sentence: "We believe that [change] will cause [outcome] because [evidence]." If you can't write the "because," you're guessing — go get a signal first.
3. **Cut to the thinnest slice.** Describe the smallest version that tests the bet. Ask of every element: if we removed this, would the bet still be testable? If yes, it goes to Later.
4. **Write the non-goals.** List what this slice deliberately does not do. Non-goals prevent scope creep more reliably than goals create focus. Be specific — "no bulk import in v1," not "keep it simple."
5. **Design the first-win path.** Name the single action that delivers value and describe the shortest route to it. Activation is a requirement, not a follow-up.
6. **Attach one success metric with a target.** Pick the one number that moves if the bet is right — activation rate, retention, conversion — and state the target and the window. One metric, not a dashboard.
7. **List the open questions.** Everything unresolved, each with an owner and a "needed by." Ship the PRD with open questions visible rather than pretending they're answered.

## Quality bar

- The problem is stated in the user's language and backed by a real signal.
- Scope is the thinnest testable slice; non-goals are explicit and specific.
- Exactly one success metric, with a target and a measurement window.
- The first-win action is named and its path designed in.
- A stranger could read it and build the right thing without a meeting.

## Output format

```
# PRD: <feature slice>
Problem: <one paragraph, user's words + the signal>
Bet: We believe <change> will cause <outcome> because <evidence>.
In scope (this slice): <bulleted, thin>
Non-goals: <bulleted, specific>
First win: <the single value action> — path: <steps>
Success metric: <one number> — target <value> within <window>
Open questions: <question — owner — needed by>
```
