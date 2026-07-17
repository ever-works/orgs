---
name: cloud-architecture
description: Use when designing or reviewing cloud environments — topology, trust boundaries, scaling, and cost — for an engagement's workloads.
---

# Cloud Architecture

A cloud environment is a set of decisions about blast radius, cost, and
recovery. Make them on purpose.

## Steps

1. **Start from workload facts.** Traffic shape, statefulness, latency
   tolerance, data residency, and compliance constraints — gathered from the
   engagement brief, not assumed. The architecture serves these; anything else
   is hobbyism.
2. **Draw trust boundaries first.** Private by default: nothing reachable from
   the internet except the designated edge; services talk through internal
   networking; every credential is least-privilege and scoped to one service.
   The diagram shows what an attacker owns if each component falls.
3. **Choose managed over bespoke, boring over novel.** Managed databases,
   queues, and load balancers unless a measured requirement says otherwise;
   the client's team must operate this after the engagement ends.
4. **Design failure domains explicitly.** What fails together (zone, region,
   provider service), what the recovery objectives are (RTO/RPO per data
   domain), and how backup restoration is actually tested — an untested backup
   is a wish.
5. **Make scaling a policy, not a hope.** What scales automatically on which
   signal, what the ceilings are, and which component hits its limit first
   under growth — name the next bottleneck in writing.
6. **Treat cost as a design input.** Estimate the monthly bill per environment
   before building; tag everything for attribution; identify the two largest
   cost drivers and the lever for each.

## Quality bar

- The environment can be rebuilt from code plus documented secrets, from
  nothing, within the stated RTO.
- No credential grants more than its service uses.
- The next scaling bottleneck and the two biggest cost levers are named.
- A staging pass predicts a production pass because they share modules.

## Output format

An environment design: topology diagram with trust boundaries, failure domains
with RTO/RPO, scaling policies and ceilings, cost estimate with drivers, and
the infrastructure-as-code layout that implements it.
