---
name: api-design
description: Use when designing or reviewing an API surface — resources, contracts, versioning, pagination, and errors — before implementation hardens the mistakes.
---

# API Design

An API is a promise made to code you do not control. Design it as one.

## Steps

1. **Model resources from the consumer's vocabulary.** Nouns the client
   application actually thinks in, not your table names. One concept, one
   resource — if two endpoints return the same shape with different names,
   merge the concepts or split them honestly.
2. **Define the contract per operation.** Request shape, response shape, and
   every status the consumer can receive. Write the failure responses first —
   validation, permission, not-found, conflict — because consumers build retry
   and UI logic on them.
3. **Make errors machine-usable.** A stable error code, a human message, and
   the offending field for validation failures. Never leak internals; never
   return a bare 500 for a knowable failure.
4. **Decide pagination, filtering, and ordering up front.** Cursor pagination
   for anything unbounded; document the maximum page size and enforce it.
   Retrofitting pagination is a breaking change wearing a minor version.
5. **Version for breakage only.** Additive changes need no version; breaking
   changes need a new version and a stated deprecation window for the old one.
   Define "breaking" in writing: removed fields, changed types, changed
   semantics.
6. **State the operational envelope.** Rate limits, auth scheme, idempotency
   behavior for retried writes, and payload ceilings — the consumer will hit
   all of them; decide the behavior now.

## Quality bar

- A consumer could build against the contract with the service turned off.
- Every write endpoint states its idempotency and concurrent-update behavior.
- Failure responses are as fully specified as success responses.
- Nothing in the contract exposes storage details a refactor would break.

## Output format

A contract document per API: resource model, per-operation request/response/
errors, pagination and versioning rules, and the operational envelope — kept in
the repo beside the code and updated in the same change as any behavior it
describes.
