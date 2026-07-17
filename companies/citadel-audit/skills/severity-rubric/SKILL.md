---
name: severity-rubric
description: Use when assigning or defending a severity rating on a security finding, so ratings are consistent across auditors, practices, and engagements rather than a matter of mood.
---

# Severity Rubric

Severity is a decision, not a feeling. Rate every finding on two axes and
combine them the same way every time, so the same bug earns the same rating in
March and in May.

## The two axes

**Impact** — what an attacker gains if it works: full asset compromise, fund
loss, data disclosure, integrity violation, denial of service, information
leak. Rate by the worst realistic outcome, not the worst imaginable one.

**Likelihood** — the effort and preconditions to make it work: required access
level, whether special timing or state is needed, attacker skill, and whether
the vulnerable path is reachable in the deployed configuration.

## The ratings

- **Critical** — high impact, low precondition. Exploitable now against the
  deployed system, reaching high-value assets, by an attacker with no special
  position. Ship this to the client the day it is confirmed.
- **High** — high impact but with realistic effort or a modest precondition,
  or medium impact that is trivially exploitable. Serious, fix before release.
- **Medium** — real weakness with limited reach, or high impact gated behind a
  strong precondition an attacker cannot usually arrange.
- **Low** — narrow impact, heavy preconditions, or defense-in-depth gaps with
  no demonstrated path.
- **Informational** — hygiene, deviations from stated policy, and hardening
  opportunities with no security impact today.

## Rules that keep it honest

1. Write the one-sentence rationale next to the rating: impact times likelihood
   in plain words. If the sentence does not obviously support the rating, the
   rating is wrong.
2. Rate against the deployed configuration, not a lab default and not a
   worst-case fantasy. If deployment is unknown, state the assumption.
3. An unproven finding has no severity — it is an open question until
   reproduced.
4. Chained findings: rate each on its own, then note the chain and rate the
   chain as its own finding if the combination changes the outcome.
5. When two auditors disagree, the practice lead decides; an unresolved
   dispute escalates to the Managing Director, and the ruling is recorded.

## Output

A rating, a one-line rationale, and the deployment assumption it rests on —
attached to the finding, never delivered loose.
