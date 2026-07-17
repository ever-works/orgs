---
name: go-services
description: Use when building or reviewing Go services, APIs, and concurrent programs, so the result is idiomatic, leak-free, and observable.
---

# Go Services

Go rewards plainness. The playbook is mostly about resisting cleverness and
owning your goroutines.

## Steps

1. **Structure by dependency direction.** Domain logic depends on nothing;
   transport (HTTP/gRPC handlers) and storage adapt to the domain via small
   interfaces defined where they are consumed. Package names say what they
   provide, not "utils".
2. **Handle every error at its site.** Wrap with context (`operation: detail`)
   when returning upward; map to stable codes at the transport boundary. No
   discarded errors, no panic for expected failures.
3. **Own goroutine lifecycles.** Every goroutine has: a reason to be
   concurrent, an owner that waits for it, and a cancellation path via context.
   Bounded channels and worker pools over unbounded fan-out. A goroutine
   without a shutdown story is a leak in rehearsal.
4. **Validate at the boundary, once.** Decode, validate, and convert requests
   into domain types in the handler layer; domain code takes typed values, not
   raw request structs.
5. **Test table-driven, benchmark budgeted.** Table tests for logic including
   error rows; integration tests per endpoint for success, validation failure,
   and permission failure; benchmarks and pprof profiles wherever a slice has a
   stated performance budget.
6. **Instrument for production.** Structured logs with request IDs, metrics on
   every external call, and context deadlines on anything that can block —
   a hung call without a timeout is an outage waiting for traffic.

## Quality bar

- `go vet` and the race detector are clean; CI runs both.
- No goroutine outlives its purpose; shutdown drains within the stated grace
  period.
- Errors reaching clients are stable codes with safe messages.
- Performance claims carry pprof or benchmark evidence.

## Output format

Reviewed changes: code, table-driven tests, benchmarks where budgets exist, and
a handoff note stating what was built, what was excluded, and what to probe
first.
