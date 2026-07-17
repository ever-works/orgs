---
name: secure-coding
description: Use when writing or reviewing code that handles authentication, authorization, user input, secrets, or personal data, in any language or framework.
---

# Secure Coding

Security is a set of defaults applied every time, not a review phase. These are
the firm's defaults; deviations need a written reason.

## Boundaries and input

1. Validate at the boundary — type, length, format, range — and reject, never
   repair, malformed input. Interior code assumes validated data.
2. Parameterize everything: SQL, shell commands, LDAP, template contexts. User
   input concatenated into any interpreter is a defect regardless of "it's
   internal".
3. Treat file uploads as hostile: validate type by content not extension,
   store outside the web root under generated names, and scan or sandbox
   anything that will be reprocessed.

## Authentication and authorization

4. Passwords are hashed with a modern adaptive algorithm and never logged;
   sessions and tokens expire, rotate on privilege change, and invalidate on
   logout.
5. Authorize per object, not per endpoint: every ID in a request is checked
   against the caller's rights. Role checks alone do not authorize access to a
   specific row.
6. Deny by default. New endpoints, queues, and admin surfaces start
   inaccessible and are opened deliberately.

## Secrets and data

7. Secrets live in a managed store, never in code, config files under version
   control, or logs. Rotation must be possible without a deploy.
8. Collect the minimum personal data, encrypt it in transit and at rest, and
   keep it out of logs, error messages, and test fixtures.

## Failure behavior

9. Errors tell users what to do and tell attackers nothing: no stack traces,
   no "user exists but wrong password", no internal paths.
10. Rate-limit authentication and expensive operations; make security-relevant
    actions (login, permission change, export) auditable with actor and time.

## Quality bar

Code following this playbook survives the security-audit playbook's checks
without findings above Low. That is the definition of done for
security-sensitive work.
