---
name: molecular-dynamics
description: Use when running molecular dynamics simulations — force-field choice, equilibration, and sampling adequacy — before reading any observable off a trajectory.
---

# Molecular Dynamics

Run simulations that earn their conclusions: nothing is read off a trajectory until convergence, equilibration, and sampling are demonstrated.

## Procedure

1. **State the question and observable.** What property or behavior the simulation must deliver determines the system size, timescale, and ensemble.
2. **Choose the force field or model deliberately.** Match it to the system chemistry and note its known limitations. The force field is an assumption, not a given.
3. **Build and check the system.** Solvation, charge neutrality, box size, and initial geometry sanity. Minimize energy before dynamics.
4. **Equilibrate properly.** Run the equilibration protocol and demonstrate it reached a stable state — temperature, pressure, energy, and relevant structural metrics plateaued — before any production run.
5. **Sample adequately.** Run long enough, or with enough replicas, that the observable is converged. One short trajectory is an anecdote; quantify sampling.
6. **Monitor stability.** Watch for drift, blow-ups, and unphysical behavior throughout; a numerically unstable run is discarded, not reported.
7. **Analyze with uncertainty.** Compute the observable with error estimates from block averaging or replicas, not a single number.
8. **Record the setup.** Force field, ensemble, thermostat/barostat, timestep, and length, so the run is reproducible.

## Quality bar

- Equilibration is demonstrated before production analysis.
- Sampling adequacy is quantified; observables carry uncertainty.
- Force-field and ensemble choices are stated with their limits.
- Unstable or unconverged runs are excluded, not reported.

## Output format

Trajectory results with the target observable and its uncertainty, equilibration and convergence evidence, and a setup record (force field, ensemble, thermostat/barostat, timestep, length).
