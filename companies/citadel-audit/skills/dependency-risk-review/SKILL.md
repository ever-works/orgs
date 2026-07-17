---
name: dependency-risk-review
description: Use to assess the third-party and supply-chain risk of a project's dependencies — known vulnerabilities, maintenance health, reachable exposure, and takeover surface — as part of an application audit.
---

# Dependency Risk Review

Most application code is not written by the application's authors. The
dependency tree is attack surface, and it is part of the audit, not an optional
extra.

## Steps

1. **Build the real tree.** Resolve the full transitive dependency graph as it
   ships, from the lockfile, not the loose version ranges in the manifest. The
   version that runs is the one you assess.
2. **Check known vulnerabilities.** Cross-reference each package and version
   against advisory data. For every hit, do not stop at "a CVE exists" — check
   whether the vulnerable function or path is actually reachable from the
   application. A vulnerable dependency whose flawed code is never called is a
   lower-priority upgrade, not a critical.
3. **Assess maintenance health.** For dependencies on sensitive paths, look at
   whether the project is maintained, how many maintainers hold publish rights,
   how recently it was updated, and whether it has a history of abrupt
   ownership changes. Abandoned or single-maintainer packages on critical paths
   are a standing risk.
4. **Look for takeover surface.** Flag dependency-confusion openings (internal
   names resolvable from public registries), unpinned or mutable references,
   install-time scripts that run with the build's privileges, and typosquat-
   prone names.
5. **Weigh reachability into severity.** A supply-chain finding's rating follows
   the same rubric: impact times likelihood, where likelihood includes whether
   the risky code or update path is reachable in this application.

## Quality bar

- Assessment is against the resolved, shipped versions.
- Every known-vulnerability hit has a reachability judgment, not just an
  advisory ID.
- Findings distinguish "upgrade hygiene" from "exploitable today".

## Output

A dependency risk summary: the resolved tree, prioritized known-vulnerability
findings with reachability, maintenance-health flags on critical-path packages,
and any takeover surface — each rated on the firm's rubric.
