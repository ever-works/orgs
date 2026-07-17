---
name: python-services
description: Use when building or reviewing Python services, APIs, and workers, so the result is typed, testable, and safe to run unattended.
---

# Python Services

Python's flexibility is the hazard. The playbook is discipline: types at the
boundaries, explicit failure behavior, deliberate dependencies.

## Steps

1. **Type the public surface.** Full annotations on every public function and
   a strict type checker in CI. Validation models (dataclasses or a validation
   library) at every point where external data enters; interior code receives
   constructed objects, never raw dicts.
2. **Choose sync or async per service, not per file.** Async where I/O
   concurrency pays; synchronous elsewhere. Never block the event loop with
   CPU work or synchronous I/O — move it to a thread or a worker process.
3. **Make workers idempotent.** Anything consumed from a queue can arrive
   twice: key side effects on a natural or explicit idempotency key. Every
   handler states its retry policy — max attempts, backoff, and where poisoned
   messages go.
4. **Fail with intent.** Timeouts on every external call; retries with backoff
   and jitter only on idempotent operations; exceptions mapped to stable error
   responses at the boundary. A bare `except:` is a finding.
5. **Manage dependencies deliberately.** Pinned versions with a lock file, an
   upgrade cadence, and a reason for every new package — the standard library
   is underrated.
6. **Test with pytest, at the seams.** Unit tests for logic, integration tests
   per endpoint and per worker covering success, validation failure, and the
   retry/duplicate path. Shared fixtures over repeated setup; test names that
   read as behavior claims.

## Quality bar

- Type checker passes strict on changed code; CI enforces it.
- Every worker survives duplicate delivery in a test that proves it.
- No unbounded external call: everything has a timeout.
- A new engineer can run the service and its tests from the README alone.

## Output format

Reviewed changes: typed code, tests including failure paths, migration scripts
when data shape changes, and a handoff note (built, excluded, probe-first).
