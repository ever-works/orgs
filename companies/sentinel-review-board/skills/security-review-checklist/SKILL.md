---
name: security-review-checklist
description: Use when reviewing a code change for security flaws — a systematic pass over trust boundaries, input handling, authorization, secrets, and dangerous operations that turns suspicion into evidenced findings.
---

# Security Review Checklist

Work the checklist top to bottom against the diff. For each item, either clear it or convert it into a finding with an abuse scenario.

## 1. Establish the attack surface

- List every input the change introduces or modifies: HTTP params, headers, body fields, file uploads, queue messages, CLI args, env vars, webhook payloads.
- For each input, note who can supply it: anonymous, authenticated user, admin, internal service.
- Mark every place data crosses a trust boundary — that is where the rest of the checklist concentrates.

## 2. Input handling

- Is every externally supplied value validated for type, length, range, and format before use? Server-side, not just client-side.
- Trace each input to its sinks: SQL/ORM queries (parameterized?), shell or process invocation, file paths (traversal via `..`?), HTML output (escaped?), template engines, `eval`-like constructs, deserializers.
- Check parsers of rich formats (XML, YAML, archives) for entity expansion, unsafe types, or zip-slip style extraction.

## 3. Authentication and authorization

- Every new or modified endpoint/handler: is authentication actually enforced, or assumed?
- Authorization checks the caller's right to THIS resource (object-level), not just their role. Look for IDs taken from the request and used directly — the classic IDOR shape.
- Trace one representative request end to end and confirm the check runs on every code path, including error paths and batch variants.
- Anything relaxed in the diff — removed guard, widened role, broadened CORS, disabled flag — is guilty until explained.

## 4. Secrets and sensitive data

- No credentials, tokens, or keys in code, config committed to the repo, logs, error messages, or URLs.
- New logging: does it capture PII, tokens, or request bodies it should not?
- Sensitive fields in responses: are they filtered, or does the serializer leak the whole entity?

## 5. Dangerous operations

- New crypto: standard library and modern primitives only; flag homemade constructions, ECB, static IVs, weak hashes for passwords.
- SSRF: any user-influenced URL fetched by the server needs an allowlist story.
- Race conditions on money- or quota-shaped operations: check-then-act without a transaction or lock.

## Quality bar and output

- A finding must name: who can trigger it, the exact location, the concrete abuse scenario, and the payoff. No payoff, no finding.
- Severity: critical = unauthenticated compromise or data breach; high = authenticated user exceeds their rights; medium = hardening gap with plausible path; low = defense-in-depth.
- If the pass is clean, output the list of sections checked and the representative paths traced — a clean result is a claim backed by coverage, not silence.
