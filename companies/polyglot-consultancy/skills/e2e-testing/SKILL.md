---
name: e2e-testing
description: Use when writing or repairing end-to-end tests that drive the real application, so they verify user journeys without becoming flake debt.
---

# End-to-End Testing

An e2e test buys confidence at the highest maintenance price. Buy few, buy
well, and defend their credibility ruthlessly.

## Steps

1. **Test journeys, not pages.** Each test is one user intention completed:
   sign up through first success, add-to-cart through paid order. Assert on
   the outcome the user cares about plus its server-side truth (the record
   exists, the email queued) — not on incidental UI.
2. **Select on stable handles.** Dedicated test IDs over text or CSS
   structure; text assertions only where the text is the feature. A redesign
   should break zero selectors.
3. **Wait on conditions, never clocks.** Await the element, the request, the
   state change. Every fixed sleep is a future flake at a slower machine's
   speed.
4. **Own your data lifecycle.** Each test creates what it needs — via API or
   seeded factory, not UI detours — and can run in parallel with itself.
   Login happens through a fast path (API session, storage state), not
   through the login form in every test; the login form gets its own test.
5. **Design for diagnosis.** On failure: screenshot, trace, and the request
   log captured automatically; test names state the journey and the expected
   outcome so a red run reads as a sentence about what broke.
6. **Enforce the flake covenant.** A test that fails intermittently is
   quarantined that day, owned, and fixed or deleted within the agreed
   window. Auto-retry as policy is forbidden — it converts signal into
   silence. Suite trust is measured: green must mean ship.

## Quality bar

- Every ranked-critical journey from the test strategy has exactly one e2e
  test.
- Zero fixed sleeps; zero selectors on visual structure.
- Any test runs alone, in parallel, and twice in a row, passing all three.
- A failure's cause is diagnosable from artifacts without a local rerun.

## Output format

Journey tests in the repo, wired into the release pipeline at the blocking
bar, with a quarantine list (owner and date per entry) visible to the lead.
