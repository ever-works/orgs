---
name: retention-analytics
description: Use when published-video performance data needs to become decisions — grouping results by hook pattern and format, ranking what holds viewers, detecting decay, and recalibrating the quality gate with evidence.
---

# Retention Analytics

The point of measuring is to change what gets made next. This playbook turns raw per-video numbers into pattern-level findings that a strategist can plan against and a director can rule on.

## The metrics that matter, in order

1. **Early retention** — the share of viewers still watching after the opening seconds. This is the hook's report card and the number the quality gate is calibrated against.
2. **Completion rate** — the share who finish. High early retention with low completion means the hook wrote a check the body didn't cash.
3. **Average watch duration relative to length** — catches videos that hold well but run long.
4. **Follow-on engagement** — shares, saves, follows attributed to the video; a lagging indicator of trust, worth watching for hook-honesty problems.

Vanity totals (raw views) are context, not verdicts — distribution luck dominates them in short-form.

## Procedure

1. **Insist on labels.** Every published video must carry its metadata labels: hook pattern, topic cluster, format, voice treatment, publish slot. Unlabeled videos are excluded from pattern analysis and the labeling gap is reported as a defect.
2. **Aggregate by label, not by video.** Compute each pattern's early-retention and completion distribution across all its videos. A pattern needs a minimum sample (typically 3–5 videos) before it gets a verdict; below that, report "insufficient data" explicitly.
3. **Normalize before comparing.** Compare patterns within similar topic clusters and time windows where possible. When a comparison crosses those lines, say so — a dirty comparison labeled dirty is useful; unlabeled it is poison.
4. **Rank three lists each cycle.** Top patterns (repeat these), bottom patterns (stop these), and decayers — patterns whose trend across their last few videos is downward from a previously good baseline. Decay is the most valuable finding because it predicts boredom before averages show it.
5. **Trace anomalies.** A video far off its pattern's baseline gets a one-paragraph investigation: packaging difference, slot difference, topic outlier, or genuine signal. Anomalies never change a pattern verdict on their own.
6. **Close the loop on the gate.** When a pattern the gate keeps passing shows collapsing early retention, recommend a specific criterion change, with the numbers attached. The gate's owner decides; analytics supplies the evidence.

## Quality bar

- Every claim carries its sample size; "not enough data" is a first-class answer.
- Findings are stated at the pattern level; single-video anecdotes are flagged as such.
- Each cycle's report ends with at most three recommended actions — a report that recommends everything recommends nothing.
