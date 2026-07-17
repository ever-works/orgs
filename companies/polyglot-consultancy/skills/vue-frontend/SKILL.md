---
name: vue-frontend
description: Use when building or reviewing Vue features, so composables carry the logic, reactivity stays declarative, and SSR paths behave.
---

# Vue Frontend

Vue's reactivity makes wrong data flow feel effortless. The playbook keeps
derivation declarative and logic extractable.

## Steps

1. **Extract logic into composables.** Each composable has explicit inputs and
   outputs and is testable without mounting components. Components orchestrate
   and render; they do not own business logic.
2. **Derive, don't synchronize.** Computed properties for anything derivable
   from existing state; watchers only for genuine side effects (I/O, imperative
   APIs). A watcher writing to state that a computed could express is a data
   flow hidden from the reader — refactor it.
3. **Keep stores per domain concern.** Typed state and actions; components call
   actions, never mutate store state directly. Cross-store orchestration lives
   in an action, not a component method.
4. **Enumerate and render every data state.** Loading, empty, error, partial —
   decided and built with the success path. Build against the written API
   contract; raise mismatches instead of absorbing them.
5. **Respect the SSR boundary where used.** No browser-only APIs in code that
   runs universally; data fetching declared so the server and client agree;
   hydration mismatches treated as correctness bugs and fixed at the source,
   never suppressed.
6. **Test at both levels.** Composables unit-tested through their inputs and
   outputs; components tested for each rendered state and each emitted event.
   Accessibility — keyboard paths, focus, labels — verified before review.

## Quality bar

- Composables test without a DOM; components test each declared state.
- No watcher exists where a computed would do.
- SSR builds produce zero hydration warnings.
- The feature is keyboard-operable end to end.

## Output format

Reviewed changes: composables, components, tests per state and event, and a
handoff note (built, excluded, probe-first, contract mismatches raised).
