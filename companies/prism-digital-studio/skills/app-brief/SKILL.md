---
name: app-brief
description: Use when scoping an application build — turning an intake brief into a concrete build plan with stack, screens, data, and a done-check — or when reviewing whether a proposed build matches its brief.
---

# App Brief

An app brief is the layer between "the client wants a dashboard" and the first line of code. It commits the build to a stack, a surface area, and a definition of done small enough to check.

## Writing the app brief

1. **Restate the job in one sentence** — who uses this app and for what outcome. If you cannot, the intake brief is not ready; send it back.
2. **Inventory the surface.** List every screen or page (for UI work) and every endpoint (for services): name, purpose, and the one thing that must work on it. Ten lines beats a wireframe nobody maintains.
3. **Sketch the data.** The three-to-seven entities the app manipulates, their key fields, and which screen reads or writes each. Mismatches between the screen list and the data sketch are scope bugs — fix them now.
4. **Commit to a stack** and record why in two lines. Default to the studio's boring, well-known choices; every novel dependency needs a stated reason and a fallback.
5. **Mark the risk.** Name the single hardest part of the build (an integration, an algorithm, a performance target) and how you'll prove it works early — the risky bit gets built first, never last.
6. **Define done as a checklist**: each screen/endpoint working as inventoried, fresh-checkout run documented, error and empty states handled, brief's constraints met.
7. **List non-goals.** What this build deliberately excludes, so "while you're in there" requests become follow-up Tasks instead of scope creep.

## Review pass

- Could a different builder produce roughly the same app from this document? If not, tighten the surface inventory.
- Does every screen trace to the objective? Cut any screen that exists because dashboards traditionally have one.
- Is the risky part scheduled first?

## Quality bar

- Two pages maximum; surface inventory as a table.
- No screen without an acceptance line; no entity without a screen that uses it.
- Stack choices are decisions with reasons, not lists of technologies.

## Output format

Markdown: one-sentence job statement, surface table (name / purpose / must-work check), data sketch, stack + reasons, risk-first note, done checklist, non-goals. Version line at top.
