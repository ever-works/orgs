# Constellation Agency

A prebuilt full-service agency for Ever Works: a CEO, ten division directors,
and thirty specialists covering engineering, design, marketing, product, sales,
quality assurance, operations, game development, spatial computing, and
specialized operations. Briefs enter at the CEO, become division-sized Tasks,
and flow through explicit handoffs and a quality gate to delivery.

## Curation note

This package is curated from an upstream org of **167 agents** across ten
divisions. We kept the CEO, one director per division, and the three most
load-bearing specialist roles in each — 41 agents — so the company imports
whole and every agent has a clear seat, while the ten-division structure of the
original is preserved.

## Org structure

**Teams** (one per division; the director manages, three specialists execute)

- **Engineering** — backend-architect, frontend-engineer, devops-engineer
- **Design** — ux-architect, ui-designer, brand-designer
- **Marketing** — content-strategist, seo-specialist, paid-media-strategist
- **Product** — product-manager, delivery-producer, insights-analyst
- **Sales** — outbound-strategist, sales-engineer, pipeline-analyst
- **Quality Assurance** — api-tester, performance-analyst, accessibility-auditor
- **Operations** — finance-analyst, compliance-reviewer, support-lead
- **Game Development** — game-designer, gameplay-engineer, technical-artist
- **Spatial Computing** — spatial-engineer, spatial-interface-designer, realtime-graphics-engineer
- **Specialized Operations** — automation-architect, knowledge-manager, developer-advocate

**Agents**

| Agent | Persona | Reports to |
| --- | --- | --- |
| `ceo` | Adriana Solari, Chief Executive Officer | — (root) |
| `engineering-director` | Tomas Lindqvist, Director of Engineering | ceo |
| `backend-architect` | Ifeoma Adeyemi, Backend Architect | engineering-director |
| `frontend-engineer` | Lucas Marek, Frontend Engineer | engineering-director |
| `devops-engineer` | Sable Ortiz, DevOps Engineer | engineering-director |
| `design-director` | Noa Berkovich, Design Director | ceo |
| `ux-architect` | Priit Kask, UX Architect | design-director |
| `ui-designer` | Mireille Chandra, UI Designer | design-director |
| `brand-designer` | Ezra Coleman, Brand Designer | design-director |
| `marketing-director` | Katarina Volkov, Marketing Director | ceo |
| `content-strategist` | Dario Ferrante, Content Strategist | marketing-director |
| `seo-specialist` | Wren Nakamura, SEO Specialist | marketing-director |
| `paid-media-strategist` | Amara Diallo, Paid Media Strategist | marketing-director |
| `product-director` | Hana Strand, Product Director | ceo |
| `product-manager` | Oliver Reyes, Product Manager | product-director |
| `delivery-producer` | Ingrid Falk, Delivery Producer | product-director |
| `insights-analyst` | Ravi Menon, User Insights Analyst | product-director |
| `sales-director` | Miles Okonkwo, Sales Director | ceo |
| `outbound-strategist` | Petra Havel, Outbound Strategist | sales-director |
| `sales-engineer` | Jonas Iversen, Sales Engineer | sales-director |
| `pipeline-analyst` | Celeste Duran, Pipeline Analyst | sales-director |
| `qa-director` | Anouk Visser, QA Director | ceo |
| `api-tester` | Felix Grau, API Test Engineer | qa-director |
| `performance-analyst` | Leila Haddad, Performance Test Analyst | qa-director |
| `accessibility-auditor` | Bram Peeters, Accessibility Auditor | qa-director |
| `operations-director` | Sofia Marchetti, Operations Director | ceo |
| `finance-analyst` | Henrik Boe, Finance Analyst | operations-director |
| `compliance-reviewer` | Yuki Sorensen, Compliance Reviewer | operations-director |
| `support-lead` | Tessa Whitfield, Support Lead | operations-director |
| `gamedev-director` | Rocco Baldini, Game Development Director | ceo |
| `game-designer` | June Park, Game Designer | gamedev-director |
| `gameplay-engineer` | Elias Vainio, Gameplay Engineer | gamedev-director |
| `technical-artist` | Zadie Moreau, Technical Artist | gamedev-director |
| `spatial-director` | Casper Holm, Spatial Computing Director | ceo |
| `spatial-engineer` | Nia Templeton, Spatial Engineer | spatial-director |
| `spatial-interface-designer` | Ruben Castell, Spatial Interface Designer | spatial-director |
| `realtime-graphics-engineer` | Freja Dahl, Real-Time Graphics Engineer | spatial-director |
| `specialized-ops-director` | Imre Katona, Director of Specialized Operations | ceo |
| `automation-architect` | Dalia Rosen, Automation Architect | specialized-ops-director |
| `knowledge-manager` | Owen Brady, Knowledge Manager | specialized-ops-director |
| `developer-advocate` | Selin Aydin, Developer Advocate | specialized-ops-director |

**Skills**: `brief-intake`, `cross-division-handoff`, `status-report`,
`campaign-plan`, `launch-checklist`, `retro` — six shared playbooks every
division uses the same way, from intake to retro.

## What to expect after import

Importing this package creates the 41 agents with their reporting lines, the
ten division teams, and the six shared skills. Assign new Tasks to the CEO for
qualification and decomposition, or directly to a division director when the
work clearly belongs to one division; work then flows down to specialists and
across divisions exactly as described in each agent's charter.

---

Concept adapted from [Agency Agents](https://github.com/paperclipai/companies/tree/main/agency-agents)
(and its source, [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents));
all content is original.
