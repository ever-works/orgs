---
name: test-driven-development
description: Use when building or changing any behavior in code — write a failing test that encodes the acceptance criterion first, make it pass with the least code that could work, then refactor with the tests green.
---

# Test-Driven Development

A discipline for building in small proven steps. The loop is red, green, refactor — in that order, every time.

## The loop

1. Pick exactly one acceptance criterion or one behavior of the current slice. Not two.
2. Write a test that asserts the observable outcome of that behavior. Name it after the behavior ("rejects an expired token"), not the method it calls.
3. Run it and watch it fail. Read the failure message: it must fail because the behavior is missing, not because of a typo, a bad import, or a broken fixture. A test you never saw fail proves nothing.
4. Write the least implementation that makes it pass. Resist generalizing for cases no test demands yet.
5. Run the whole suite, not just the new test. Everything green before you continue.
6. Refactor while green: remove duplication, improve names, extract what wants extracting. Run the suite after each refactor step.
7. Repeat until the slice's criteria are all encoded as passing tests.

## Choosing the next test

- Start with the simplest case that forces real logic to exist, then add one boundary at a time: empty, one, many, too-many, malformed, unauthorized.
- When fixing a bug, the first move is always a failing test that reproduces it. The fix is not done until that test passes and stays in the suite.
- If a test is hard to write, treat that as design feedback — the code under test is doing too much or hiding its inputs. Restructure before pressing on.

## Quality bar

- Each test asserts outcomes a user or caller could observe, not internal call sequences. Mock at boundaries you do not own (network, clock, filesystem); avoid mocking your own modules.
- One logical assertion per test; a failure should point at one behavior.
- Tests run in any order and leave no state behind. A test that depends on another test's leftovers is a defect.
- Delete or rewrite tests that merely restate the implementation — they rot into noise that blocks refactoring.

## Output format

Submit the slice as: the diff, the new or changed tests, proof the suite is green (test run summary), and a handoff note listing which acceptance criterion each new test encodes plus anything deliberately untested and why.
