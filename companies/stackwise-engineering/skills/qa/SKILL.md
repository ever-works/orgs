---
name: qa
description: Use when a deployed change or a whole application needs hands-on browser testing — choosing between diff-aware, quick-smoke, full-sweep, and regression modes, and producing an evidence-backed QA report.
---

# QA

Systematic testing of the live product in a real browser. Code review judges
what the change says; QA judges what the product does. The two disagree more
often than anyone likes.

## Steps

1. **Choose the mode** to match the occasion:
   - *Diff-aware* (default after a feature ships) — read the change, list
     the pages and flows it plausibly touched, and test those first.
   - *Quick smoke* (after any deploy) — the homepage, sign-in, and the two
     or three flows the product exists for, in minutes.
   - *Full sweep* (before milestones) — systematic exploration of every
     reachable page and interactive element.
   - *Regression* — re-run a recorded scenario list against a previous
     baseline and report divergence.
2. **Set up as a real user.** Use the environment's designated test
   accounts and data. Authenticated areas get tested authenticated; testing
   only the logged-out shell is testing the brochure.
3. **Walk the flows deliberately.** For each flow: perform the action,
   observe the result, check the console for errors, and screenshot the
   end state. Try the unhappy variants too — empty input, double submit,
   back-button mid-flow, expired session — because users find them within
   the hour.
4. **Record every anomaly immediately** with the four elements a fix needs:
   exact repro steps from a fresh state, expected versus observed, a
   screenshot, and any console or network errors captured at the moment.
   An anomaly remembered at report-writing time is half lost.
5. **Rate severity honestly**: blocker (core flow broken or data at risk),
   major (feature wrong but avoidable), minor (rough edge), cosmetic.
   Severity inflation and deflation both destroy the report's authority.
6. **Compose the health verdict.** Healthy, healthy-with-findings, or
   unhealthy — justified by the bug list, so two readers reach the same
   verdict from the same evidence.

## Quality bar

- Every bug is reproducible from its own written steps by someone else.
- Screenshots accompany every finding and every tested flow's end state.
- The report states what was tested and found working, not only what broke.

## Output format

A QA report: mode and scope, environment and account used, flows tested
with status, numbered findings (severity, repro, expected/observed,
evidence), and the health verdict.
