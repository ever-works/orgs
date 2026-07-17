---
name: react-frontend
description: Use when building or reviewing React features, so components render every data state, state lives at the right layer, and performance budgets hold.
---

# React Frontend

A React feature is done when every state the data can be in has a deliberate
rendering, not when the happy path matches the mock.

## Steps

1. **Enumerate states before components.** For each server-backed view, list
   loading, empty, error, partial, and stale states and decide what each shows.
   Build the state renderings alongside the success path, not after.
2. **Place state at the right layer.** Server state lives in a fetching layer
   with explicit cache keys and invalidation rules; UI state stays local to the
   component that owns it; global stores are reserved for genuinely global
   concerns (session, theme). Lifting state "just in case" is how apps rot.
3. **Build against the written contract.** Types come from the API contract,
   not from inspecting responses. When runtime reality disagrees with the
   contract, stop and raise it — absorbing the difference hides a defect
   someone else owns.
4. **Compose for testability.** Logic in hooks with explicit inputs/outputs;
   components thin; side effects contained in effects with correct dependency
   arrays. If testing a behavior requires mounting half the app, the
   composition is wrong.
5. **Spend performance from a measured budget.** Split bundles at route
   boundaries, memoize only where the profiler shows re-render cost, and
   virtualize long lists. A regressed interaction budget fails the slice.
6. **Ship accessibility as part of done.** Keyboard operability, focus
   management on route and dialog changes, labeled controls, and contrast —
   verified before review, not found in audit.

## Quality bar

- Every enumerated state has a test that renders it.
- No effect fetches what the fetching layer should own.
- The profiler justifies every memoization present.
- The feature is operable start-to-finish with a keyboard.

## Output format

Reviewed changes: components, hooks, state-rendering tests, and a handoff note
(built, excluded, probe-first, any contract mismatches raised).
