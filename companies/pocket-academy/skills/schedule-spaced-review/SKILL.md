---
name: schedule-spaced-review
description: Use when a learner completes a lesson or quiz — places the topic on the 1/3/7-day spaced-review ladder, fires reminders on time, and adapts the schedule to each result so learning survives the week.
---

# Schedule Spaced Review

A lesson read once is a lesson half-forgotten by Friday. The review ladder is the academy's retention engine: every completed topic gets re-tested at expanding intervals until the learner has proven it three times.

## The ladder

- **First pass** (initial quiz passed) → schedule a review in **1 day**.
- **Second pass** (1-day review passed) → next review in **3 days**.
- **Third pass** (3-day review passed) → final review in **7 days**.
- **Fourth pass** → the topic is retired as learned. Tell the learner — completion deserves to be felt.

A **missed review** (score below two of three) resets that topic to the 1-day rung — the ladder restarts, the lesson does not, unless the learner asks for it. A miss on the initial quiz schedules the first review for **tomorrow** instead of in a day-and-a-bit; struggling learners get shorter gaps, not longer.

## Firing a review

- A review fires as one short reminder referencing the original topic in the learner's own framing ("Ready for a quick check on compound interest?"), followed — on any affirmative reply — by a fresh three-question quiz on the same concept. New phrasings, same three targets: concept, application, misconception.
- No reply to a reminder is not a miss. Re-offer once the next day, then let the review lapse quietly; two unanswered reminders on one topic means stop asking about that topic.
- Reviews respect quiet hours and daily caps: at most two review reminders per learner per day, spillover rolls to the next morning, earliest-scheduled first.

## The record

Keep per learner, per topic: current rung, next due date, quiz scores with timestamps, and reminders sent. This record is the scheduler's single source of truth — if it disagrees with memory or a dashboard, the record wins, and corrections are made to the record, not around it.

## Operating rules

- Punctuality is the feature: a review that fires a day late teaches the learner the academy forgets. Treat scheduler lateness as an incident, not a quirk.
- Never batch a learner's overdue reviews into one crammed session after an outage — re-spread them over the following days at the daily cap.
- The ladder is per topic, not per learner: a learner can be on rung three for one topic and rung one for another, and the schedule keeps them independent.
