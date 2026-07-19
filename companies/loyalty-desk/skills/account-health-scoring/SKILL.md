---
name: account-health-scoring
description: Use when scoring an account's health or refreshing a book of accounts — builds a weighted score from real usage, support, and relationship signals so red accounts surface early and interventions are owned before renewal is at risk.
---

# Account Health Scoring

A playbook for turning what you know about an account into a single, honest signal that predicts whether it will renew. The failure mode it prevents: a "green" account that quietly churns because the score measured sentiment, not usage — and a red account nobody owned until it was too late.

## Pick signals that predict, not signals that flatter

1. Choose inputs across three dimensions: product usage (are core features actually used, by how many seats, trending up or down), support (ticket volume, reopen rate, unresolved escalations), and relationship (is the champion still in seat, executive engagement, sentiment from recent contact).
2. Prefer behavioral signals over stated ones. Logins and feature adoption predict renewal; a warm quarterly call does not. When the two disagree, trust the behavior.
3. Drop any input you can't actually observe or that never moves — a signal that's always the same value is noise dressed as data.

## Weight and threshold

4. Weight the dimensions by how well they've predicted churn historically, with product usage usually carrying the most. Don't split weight evenly out of fairness; split it by predictive power.
5. Set red / yellow / green thresholds tied to action, not vanity. Red means "an owned intervention starts now"; yellow means "watch and confirm"; green means "on track." If a threshold doesn't trigger a decision, it's decoration.
6. Compute the score per account and, critically, its trend — a green account sliding toward yellow is often more urgent than a stable red one.

## Turn the score into an owned play

7. For every red account, name the real cause (onboarding stall, missing champion, unused core workflow, unresolved pain) — the score flags the account, the cause picks the play.
8. Assign each red account to an owner with an intervention Task and a due date ahead of renewal. A red score without an owner is just a prediction of churn.
9. Log the score, its inputs, and the trend on the account's Task so the next reviewer inherits the reasoning, not just the color.

## Quality bar

- The score is built from observable behavior, weighted by predictive power.
- Every threshold maps to a specific action.
- Trend is scored, not just the current value.
- Every red account has a named cause, a named owner, and a due date.

## Output format

Health score card: per-account score + trend → dimension breakdown (usage / support / relationship) with the inputs behind each → red-account list with named cause, owner, and intervention due date.
