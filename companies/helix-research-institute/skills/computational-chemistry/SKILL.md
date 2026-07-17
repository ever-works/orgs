---
name: computational-chemistry
description: Use when computing molecular energetics or electronic structure — choosing a defensible level of theory, verifying convergence, and reporting results with their limits.
---

# Computational Chemistry

Compute energetics and electronic-structure properties at a level of theory matched to the question, and report results with the caveats the method demands.

## Procedure

1. **Define the property and accuracy needed.** Relative energies, reaction barriers, geometries, or spectra each imply a different method and basis. Expensive is not automatically correct.
2. **Choose the level of theory deliberately.** Select the method (and basis set, where applicable) with justification, and state its known failure modes for this class of system.
3. **Prepare the input geometry** sensibly — reasonable starting structure, correct charge and spin state, and a clear conformer treatment.
4. **Optimize and verify.** Confirm geometry optimizations converged to genuine minima or transition states (frequency check where relevant), not saddle points mistaken for minima.
5. **Check numerical convergence.** Basis-set adequacy, grid and SCF convergence; a loosely converged calculation gives a confident wrong number.
6. **Benchmark where possible.** Compare against experimental data or a higher-level reference for a related system to bound the error.
7. **Report relative, not just absolute, quantities.** Energy differences are usually more reliable and more meaningful than raw totals; state the reference.
8. **Document the method fully** so another chemist could reproduce and judge it.

## Quality bar

- Level of theory is justified and its limitations for the system are named.
- Optimizations are verified as true minima/transition states.
- Numerical convergence is checked and stated.
- Results are benchmarked or their error is otherwise bounded.

## Output format

A results report: property and required accuracy, level of theory with justification, verified geometries, convergence and benchmark notes, and relative energies with their reference state.
