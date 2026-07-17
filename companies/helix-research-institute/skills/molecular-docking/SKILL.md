---
name: molecular-docking
description: Use when predicting how candidate molecules bind a target — target and ligand preparation, pose generation, scoring, and honest interpretation of the results.
---

# Molecular Docking

Generate binding-mode hypotheses with their caveats attached, never presenting a docking score as a binding affinity.

## Procedure

1. **Prepare the target deliberately.** Protonation states, tautomers, added hydrogens, retained or removed waters, and any flexibility — these choices determine the answer, so record every one.
2. **Define the binding site** from structure, known ligands, or prediction; state how it was chosen and its extent.
3. **Prepare ligands** with correct protonation and stereochemistry and a sensible conformer treatment consistent with the target prep.
4. **Validate the setup by redocking** a known ligand into the site. If you cannot recover its pose, fix the setup before trusting any novel result.
5. **Dock and score.** Generate poses, then rank — but treat the score as a ranking hint, not a measured affinity.
6. **Analyze interactions.** Examine key contacts (hydrogen bonds, hydrophobic, electrostatics) for each top pose; a plausible interaction pattern matters more than a marginally better score.
7. **Separate "docked well" from "likely binds."** Carry forward candidates with both a good score and a chemically sensible interaction rationale.
8. **Flag for follow-up.** Poses whose stability is uncertain go to dynamics before being believed.

## Quality bar

- Target and ligand preparation choices are fully recorded.
- The setup is validated by redocking a known ligand.
- Scores are presented as rankings, never as affinities.
- Top poses have an interaction rationale, not just a number.

## Output format

Ranked poses with interaction analysis, the preparation record (protonation, waters, flexibility, site definition), the redocking validation result, and a shortlist separating well-scored from rationale-backed candidates.
