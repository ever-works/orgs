---
name: devex-review
description: Use when a plan or shipped surface targets developers — an API, CLI, SDK, webhook, or config format — and needs a developer-experience review of naming, ergonomics, errors, docs, and time-to-first-success.
---

# Developer Experience Review

Products for developers fail differently: not because the feature is missing,
but because the tenth minute of using it is humiliating. This review walks the
surface the way a new developer would and grades the friction.

## Steps

1. **Run time-to-first-success.** Start from nothing — no context, no
   credentials — and follow only the documented path to the first working
   call or command. Record every stumble and the elapsed step count. More
   than ten steps to first success is a finding by default.
2. **Audit the naming.** Nouns and verbs must come from one consistent
   vocabulary: the same concept never has two names, and no name collides
   with a well-known convention meaning something else. List every mismatch.
3. **Grade the errors.** Trigger the common failures deliberately: bad auth,
   malformed input, missing resource, rate limit. Each error must say what
   went wrong, which input caused it, and what to do next — in the response
   itself, not in a support article. An error that only a maintainer can
   interpret scores zero.
4. **Check the defaults.** The zero-config path should do the safe, common
   thing. Every required knob is a tax; justify each one or default it.
5. **Probe the escape hatches.** When the abstraction runs out, is there a
   documented lower-level path — raw request, verbose flag, dry-run mode —
   or does the developer hit a wall?
6. **Review versioning and change posture.** Breaking changes must be
   detectable (versioned surface) and announced (changelog); silent behavior
   changes are the cardinal sin of developer products.
7. **Score and demand.** Rate each area 1–5 with evidence; convert every 1–2
   into a numbered required change.

## Quality bar

- Time-to-first-success is measured by actually walking it, never estimated.
- Every finding quotes the actual name, error text, or step that offends.
- Recommendations preserve backward compatibility or say loudly when they
  cannot.

## Output format

A DX report: Time-to-First-Success narrative with step count, area scores
with evidence, numbered Required Changes, and a Verdict line.
