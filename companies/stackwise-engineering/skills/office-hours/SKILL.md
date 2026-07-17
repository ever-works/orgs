---
name: office-hours
description: Use when a new product idea or feature request arrives and needs a structured diagnostic — interrogating the real problem, extracting hidden capabilities, and choosing the narrowest valuable wedge — before anyone writes a plan or code.
---

# Office Hours

A product interrogation run before planning. The goal is not to validate the
idea as stated; it is to find out what the requester is actually trying to
build, which is usually adjacent to what they asked for.

## Steps

1. **Get the pain in specifics.** Ask for concrete examples of the problem —
   real incidents, not hypotheticals. "When did this last hurt? What did it
   cost you?" Refuse generalities until at least two specific episodes are on
   the table.
2. **Challenge the framing.** Restate what the requester described (not what
   they named). If they said "a briefing app" but described a delegation
   problem, say so directly and let them react.
3. **Extract implied capabilities.** List the distinct capabilities hiding in
   their description — usually three to six that they never itemized. Number
   them so later stages can reference them.
4. **Challenge the premises.** State each assumption the idea rests on and
   force an explicit agree / disagree / adjust on every one. Record answers.
5. **Generate approaches.** Offer three implementation approaches with honest
   effort estimates: the narrow wedge, the balanced build, and the full
   vision. Name what each one deliberately gives up.
6. **Recommend the wedge.** Default to the narrowest version that can ship
   soonest and teach the most from real usage. Make the recommendation a
   sentence, not a hedge.
7. **Write the design brief.** One page: problem episodes, capability list,
   premise verdicts, chosen approach, success test, explicit non-goals. This
   brief is the input to the plan reviews downstream.

## Quality bar

- At least two concrete pain episodes captured verbatim.
- Every premise gets an explicit verdict — none skipped.
- Effort estimates in ranges, with the assumption that would break them named.
- The recommendation commits to one approach; alternatives stay in the brief.

## Output format

A design brief titled with the reframed problem (not the requested feature),
sections: Pain Episodes, Capabilities, Premises & Verdicts, Approaches
Considered, Recommendation, Success Test, Non-Goals.
