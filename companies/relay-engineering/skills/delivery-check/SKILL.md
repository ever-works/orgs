---
name: delivery-check
description: Use when a change claims to be done and that claim needs mechanical verification — tests, build, and each acceptance criterion checked against evidence.
---

# Delivery Check

"Done" is a claim; this playbook is how the claim gets proven or falsified.

## Steps

1. **Pin the target.** Identify exactly what is being checked: the branch and revision, or the built artifact. Checks against "roughly this code" prove nothing — record the identifier in the result.
2. **Clean-run the build.** Build from a clean state, not an incremental cache. A build that only works warm is a latent failure.
3. **Run the full check suite.** Types, lint, and the test suite relevant to the change's blast radius — not just the tests nearest the diff. Record counts: run, passed, failed, skipped. Investigate skips; a conveniently skipped test is a finding.
4. **Walk the acceptance criteria.** Take the brief's criteria one by one. For each: run the stated check or exercise the behavior, and record the evidence — command and output, or observed behavior. A criterion without evidence is unmet, whatever the code looks like.
5. **Probe for regressions.** Exercise the two or three most important behaviors adjacent to the change (from the recon's blast radius) even though they "shouldn't" be affected. This is where silent breakage lives.
6. **Check the collateral.** Migrations run cleanly both directions where applicable; configuration changes are documented; anything the change requires at deploy time is written down, not remembered.
7. **Render the verdict.** Ready, or not-ready with the failing items listed. There is no "ready except" — an exception is a not-ready with paperwork.

## Quality bar

- The checked revision is recorded; the check is reproducible from the record.
- Every acceptance criterion has attached evidence, not a checkbox.
- Skipped tests and warnings are explained or converted to findings.
- The verdict is binary.

## Output format

A check record: target identifier, build result, suite counts, criteria table (criterion, evidence, met/unmet), regression probes, collateral notes, verdict. Short enough to read in two minutes; complete enough to re-run from.
