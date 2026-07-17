---
name: crystal-structure-analysis
description: Use when analyzing or manipulating crystal structures — symmetry, defects, phase behavior — as the foundation for materials property prediction.
---

# Crystal Structure Analysis

Build and validate structures that property calculations can trust, because a property computed from a broken structure is confidently meaningless.

## Procedure

1. **Validate the structure first.** Check charge balance, bond lengths, coordination, and geometry sanity. Reject or repair anything unphysical before computing on it.
2. **Establish symmetry.** Determine the space group and the primitive cell; a wrong symmetry assignment propagates into every downstream calculation.
3. **Set up the model deliberately.** Choose supercell size, boundary conditions, and any relaxation; state each choice, since results depend on them.
4. **Model defects and substitutions explicitly** where relevant — vacancies, dopants, interfaces — and note how they were introduced and their concentration.
5. **Assess phase stability.** Where the question involves phases, compute or compare formation energies against named reference states; a phase diagram is only as good as its references.
6. **Characterize structural properties** the task needs: density, coordination environment, lattice parameters, or surface structure, each tied to the question.
7. **Cross-check against references.** Compare computed lattice parameters or known properties to experimental or benchmark values before trusting novel results.
8. **Record provenance.** Structure source, symmetry, cell, and any modifications, so the analysis is reproducible.

## Quality bar

- The structure is validated (charge, geometry, symmetry) before use.
- Model choices (cell, boundaries, relaxation) are stated.
- Phase results name their reference states.
- Results are cross-checked against known references.

## Output format

A validated structure and analysis report: symmetry and cell, defect/substitution setup, computed structural properties, phase-stability findings with references, and a benchmark cross-check.
