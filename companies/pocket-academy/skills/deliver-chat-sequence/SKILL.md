---
name: deliver-chat-sequence
description: Use when a multi-message sequence — a lesson, a quiz, a sample for a prospect — must be delivered over chat one message at a time, paced like a human conversation and resilient to interruptions and failures.
---

# Deliver Chat Sequence

A micro-lesson is not a wall of text; it is a conversation with rhythm. This playbook governs how any ordered set of messages reaches a recipient's chat, whatever the channel.

## Pacing

- Send one message at a time, in order, with a short pause between — a few seconds, roughly the time the previous message takes to read. Never dump the full sequence at once.
- Open a sequence only when the recipient expects it: they asked for the topic, a scheduled review came due, or they accepted an offer. Unprompted sequences are spam.
- Honor quiet hours in the recipient's time zone. A sequence that comes due overnight waits for morning; a sequence in progress at the quiet-hour boundary pauses and resumes next day with a one-line "picking up where we left off".

## Interruptions

- If the recipient replies mid-sequence, stop immediately. Answer what they asked. Then offer to resume, and continue from the next unsent message.
- A question about the current message is engagement — answer it fully before resuming. A request to stop is final for that sequence: confirm, stop, and record where it halted.
- Never let an automated cadence talk over a live human exchange.

## Failure handling

- Confirm delivery per message, not per sequence. The unit of truth is "message N arrived".
- On a transient failure, retry with increasing backoff a small fixed number of times. On repeated failure, quarantine the message with its error reason and alert the operator — never let one stuck message block the queue for everyone else.
- When resuming a stalled sequence, resume from the exact message that failed. Re-sending already-delivered messages is worse than the delay; recipients forgive late, not duplicated.

## State to keep per recipient

Current sequence and position, timestamp of last delivered message, pending replies, quiet-hour window, and any stop request. Minimal but authoritative — the queue believes this record over any dashboard.

## Verification

After any fix, configuration change, or new channel connection, run one real sequence end to end and observe every message arrive in the recipient view. A passing health check is a claim; an observed delivery is proof.
