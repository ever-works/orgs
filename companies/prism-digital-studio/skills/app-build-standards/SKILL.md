---
name: app-build-standards
description: Use when building or revising any application deliverable — the studio's quality bar for structure, hardening, and handoff — or when checking a build before it goes to QA.
---

# App Build Standards

These are the checks that make a build a deliverable instead of a demo. Apply them during the build, not as a scramble at the end.

## Foundation first

1. **Prove the build system before feature work.** Fresh clone → install → run must succeed on a clean environment before any business logic exists. If setup needs more than two commands, script it.
2. **Structure for the next reader.** Predictable layout, names that say what things are, no cleverness that needs a tour guide. Assume the next person to open this repo has never met you.
3. **Configuration out of code.** Secrets and environment-specific values come from the environment, with an example config file checked in and real values never committed.

## During the build

4. **Risky part first.** Build and prove the hardest piece named in the app brief before polishing anything.
5. **Design the unhappy paths.** Every input validated at the boundary; every list has an empty state; every remote call has a failure state the user can understand. Default error screens are unfinished work.
6. **Keep it running.** The app should be startable at any point in the build — long stretches of "broken while I rewire" hide integration surprises until it's expensive.
7. **Write down deviations as they happen.** Any departure from the app brief goes in the build note the moment you make it, with its reason — not reconstructed at handoff.

## Before handoff to QA

8. **Clean-machine run.** Fresh checkout, documented steps, whole app exercised — every screen visited, every endpoint hit once.
9. **Strip the scaffolding.** No debug output, no commented-out corpses, no test data masquerading as content.
10. **Write the build note**: stack and why, how to run, what was deliberately excluded (with the brief line that excludes it), known limitations.

## Quality bar

- Two commands from checkout to running app, stated in the README.
- Zero secrets in the repo; zero unhandled failure states on the main flows.
- The build note lets QA test the app without asking you anything.

## Output format

The deliverable is the repository plus the build note (Markdown, attached to the Task). Revisions add a change list mapping each QA note to its fix.
