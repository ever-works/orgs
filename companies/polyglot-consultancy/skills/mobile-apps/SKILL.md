---
name: mobile-apps
description: Use when building or reviewing mobile app features, native or cross-platform, so they survive hostile networks, respect platform conventions, and release safely.
---

# Mobile Apps

Mobile is web development with the safety off: no instant rollback, hostile
networks, and users who never update. Build for that reality.

## Steps

1. **Design offline-first flows.** For each feature, state what works with no
   network, what queues for sync, and how conflicts resolve when the same data
   changed in two places. Write the sync semantics down before building; the
   ad-hoc version becomes a data-loss bug.
2. **Respect the platform.** Navigation patterns, gestures, typography, and
   permission etiquette users already know from the OS. In cross-platform
   codebases, isolate platform-specific behavior behind one seam per concern
   rather than scattering conditionals.
3. **Budget resources as acceptance criteria.** Cold-start time, memory
   ceiling, battery behavior in background, and binary size — numbers agreed
   with the lead, measured on the low-end device profile, regressions failing
   the slice.
4. **Handle permissions honestly.** Request at the moment of need with the
   reason visible, degrade gracefully on denial, and re-check on every use —
   a granted permission is a snapshot, not a contract.
5. **Test on the real matrix.** Logic unit-tested; critical flows tested on
   the device matrix the engagement names (including the low-end profile);
   interruption cases — backgrounding mid-flow, rotation, incoming call —
   exercised deliberately.
6. **Release in stages.** Signed reproducible builds, staged rollout starting
   small, crash-rate and key-metric gates before widening, and a kill-switch or
   remote-config path for features that might need retreat — because the
   binary itself cannot be recalled.

## Quality bar

- Every flow states its offline behavior; none of them lose user input.
- Budgets measured on the low-end profile, not the developer's device.
- Rollout plan has numeric gates and a named abort criterion.
- Permission denial paths are built and tested, not assumed.

## Output format

Reviewed changes with tests, a device-matrix note, and per release: a staged
rollout plan with gates, abort criteria, and monitoring dashboards named.
