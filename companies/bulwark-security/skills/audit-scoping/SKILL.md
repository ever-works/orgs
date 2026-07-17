---
name: audit-scoping
description: Use when a new security engagement arrives and a vague request must become a bounded, authorized, testable scope before any assessment work begins — or when a running engagement needs its boundary moved.
---

# Audit Scoping

A scope is the contract that makes an assessment legal, safe, and finishable.
Work that starts before the scope is signed is the failure mode this skill
exists to prevent.

## Establish authorization

1. Identify who is granting permission and confirm they are entitled to grant
   it for every asset they name. A team lead cannot authorize another team's
   system; nobody can authorize a third party's.
2. Get it in writing before planning a single probe. Verbal authorization is
   scheduling, not authorization.
3. For assets on shared platforms or managed providers, check the provider's
   assessment rules and fold their limits into the scope.
4. If any asset's ownership is unclear, park it in a "pending authorization"
   list — it is out of scope until resolved, and the document says so.

## Bound the work

5. Enumerate in-scope assets precisely: named systems, environments, accounts,
   repositories, address ranges. No "and related infrastructure".
6. Enumerate exclusions with the same precision, plus the reason for each —
   fragile, third-party, pending authorization, client choice.
7. Write the rules of engagement: permitted techniques and their limits,
   read-only versus interactive testing per asset, timing windows, load
   ceilings, and how sensitive data encountered mid-assessment is handled.
8. Define stop conditions in advance: evidence of an active intruder,
   instability in a fragile system, exposure of out-of-scope data. Each one
   names who gets told and how fast.

## Define done

9. State the coverage promised (which surfaces, to what depth), the
   deliverables, and the schedule. "Done" must be checkable against this list.
10. Agree the evidence rules: what is captured, where it is stored, when it is
    destroyed.

## Quality bar

- Someone outside the engagement can read the document and answer: what may be
  touched, how hard, until when, and what happens if X — without asking anyone.
- Every asset is either in scope, excluded with a reason, or pending
  authorization. No fourth category.
- Mid-engagement changes are amendments: written, dated, re-signed. Never
  verbal.

## Output format

A scope document with sections: Authorization (who, for what, evidence),
Assets In Scope, Exclusions, Rules of Engagement, Stop Conditions, Success
Criteria & Deliverables, Schedule, Evidence Handling. Signed by the approver
before execution begins.
