---
name: node-services
description: Use when building or reviewing Node.js and TypeScript services, so the result is strictly typed, event-loop-safe, and honest about async failure.
---

# Node Services

Node's failure modes are quiet: a blocked loop, a dropped rejection, a drifted
type. The playbook makes them loud.

## Steps

1. **Run strict TypeScript.** No implicit any, exhaustive switches over
   discriminated unions, and types generated or shared with consumers through a
   published contract — duplicated request/response types drift into lies.
2. **Protect the event loop.** No synchronous file, zlib, or crypto calls on
   request paths; CPU-heavy work goes to worker threads; streams are piped with
   backpressure respected. One blocked loop taxes every concurrent request.
3. **Leave no promise unhandled.** Every async path either awaits and handles,
   or explicitly propagates to a boundary that maps errors to stable responses.
   Register process-level rejection handlers that crash loudly in development
   and page in production — silence is the failure.
4. **Map errors at the edge.** A single error-mapping layer converts domain
   errors to status codes and safe messages; internals never reach clients.
   Branching on error message strings is forbidden — messages get redacted in
   production; use error types or codes.
5. **Design real-time explicitly.** For sockets and server-sent events: state
   the reconnect policy, ordering guarantee, and duplicate-delivery semantics
   in the contract; scale-out (sticky sessions or a pub/sub backplane) is
   decided before launch, not during the incident.
6. **Test per endpoint and per contract.** Success, validation failure, and
   permission failure per endpoint; contract tests that fail when the published
   types and the runtime behavior diverge; load checks where latency budgets
   exist.

## Quality bar

- `tsc --noEmit` clean at strict settings; CI enforces it.
- Zero unhandled rejections under the test suite.
- Error responses are stable codes with safe messages, verified by tests.
- Real-time features state and test their delivery semantics.

## Output format

Reviewed changes: typed code, tests, contract updates in the same change, and a
handoff note (built, excluded, probe-first).
