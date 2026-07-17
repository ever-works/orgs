---
name: generate-microlesson
description: Use when a learner requests a topic or a curriculum needs a new unit — turns any subject into a five-message chat lesson, each message under 160 characters, that a distracted reader can absorb one glance at a time.
---

# Generate Microlesson

Compress one atomic concept into exactly five chat messages. The format is the product: short enough for any messaging channel, complete enough that the learner could pass a quiz on it five minutes later.

## Inputs to collect first

- **Topic** — one atomic concept. "Compound interest" is a lesson; "personal finance" is a curriculum. Split before writing.
- **Level** — beginner (default), intermediate, or advanced. Beginner bans jargon outright; advanced may assume vocabulary but never assumes the conclusion.
- **Language** — write natively in the learner's language; never draft in one language and translate word-for-word.
- **Audience context** — if a client supplied one ("retail floor staff"), every example must live in that world.

## The five-message arc

1. **Hook** — why this matters to the learner, stated as a stake or a surprise. Not "today we'll learn X".
2. **Core concept** — the idea itself in the plainest possible words. One sentence of definition, one of meaning.
3. **Example or analogy** — one concrete case the learner can already picture. Numbers beat abstractions; familiar objects beat textbook setups.
4. **Misconception** — the mistake most people make with this concept, named and corrected. This is usually the highest-value message.
5. **Takeaway** — one thing the learner can do or check today. Imperative mood, actionable within the hour.

## Hard constraints

- Each message: 160 characters or fewer. Count before submitting; trim words, never meaning.
- Plain text only — no formatting markup, no links, no emoji unless the audience context invites them.
- The five messages must read as one narrative when scrolled; each must also survive alone if the learner pauses mid-lesson.
- Never invent facts to fill a message. If the honest content runs short, a tighter lesson beats a padded one — flag the format waiver to the reviewer.

## Quality gate before handoff

Read the five messages aloud in order. If any message takes more than one breath, split or trim it. If a stranger reading only message 2 could not say what the lesson teaches, rewrite message 2. If the misconception in message 4 is not something people actually believe, find the real one — it exists.

## Output

The five messages in order, tagged with topic, level, and language, plus a one-line note on any judgment call made. Hand to the reviewing lead; never deliver an unreviewed lesson to a learner.
