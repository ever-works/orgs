---
name: Systems Security Practice
description: Analyzes closed-source and low-level targets — binary reverse engineering, unknown-executable and malware triage, and firmware security including boot integrity, update paths, and on-device secrets.
slug: systems-security
manager: ../../agents/systems-lead/AGENTS.md
includes:
  - ../../agents/binary-analyst/AGENTS.md
  - ../../agents/embedded-analyst/AGENTS.md
---

The systems security practice works where source code is absent. Every
artifact is inventoried by hash and provenance and analyzed only as a copy in
a contained environment. One lane reverses general binaries and unknown
executables for memory-safety flaws, unsafe trust decisions, and embedded
secrets, authoring precise detection rules for suspicious samples. The other
takes firmware and embedded targets apart — boot integrity, update-path
subversion, and secrets left in the filesystem. Findings are proven with
annotated disassembly or reproducing inputs, never with "this looks unsafe".
