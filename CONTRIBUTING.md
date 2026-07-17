# Contributing a company

1. Create `companies/<slug>/` (`slug` = `^[a-z0-9][a-z0-9-]*$`, unique in this repo).
2. Author the package per [agentcompanies/v1](https://agentcompanies.io/specification):
   - `COMPANY.md` — frontmatter `name`, `description`, `slug`, `schema: agentcompanies/v1`,
     `version` (semver), `license`, optional `authors`, `goals`, `metadata.sources`.
   - `agents/<slug>/AGENTS.md` — frontmatter `name`, `title`, `reportsTo` (bare agent
     slug, or `null` for exactly one root agent), optional `skills` (bare shortnames
     resolving to `skills/<shortname>/SKILL.md`). Body = the agent's instructions:
     where work comes from, what you do, what you produce, who you hand off to.
   - `teams/<slug>/TEAM.md` — frontmatter `name`, `description`, `slug`, `manager`
     (relative path to an `AGENTS.md`), `includes` (relative paths to member
     `AGENTS.md` / nested `TEAM.md` / shared `SKILL.md`).
   - Optional `projects/<slug>/PROJECT.md` (`owner`: agent slug) with
     `tasks/<slug>/TASK.md` (`assignee`: agent slug, `project`: project slug).
   - `skills/<slug>/SKILL.md` — standard Agent Skills format (frontmatter `name`,
     `description`); this repo never redefines SKILL.md semantics.
   - `.works/company.yml` — the Ever Works vendor sidecar (same `.works/<entity>.yml`
     convention as mission templates' `.works/mission.yml` and agent templates'
     `.works/agent.yml`): `schema: everworks/v1`, a `catalog:` block
     (`category`, `avatarIcon`, `tags`, optional `featured`), and optional per-agent
     `agents.<slug>.template: <ever-works/agents slug>`. Hints only; never secrets.
   - `images/org-chart.svg` and a short `README.md`.
3. Content rules:
   - **Original prose.** Do not copy text from other catalogs or from source repos
     unless their license permits it AND you record provenance in `metadata.sources`
     (`kind`, `repo`, `path`, `commit`, `license`, `usage: vendored|referenced|mirrored`).
   - No share-alike-licensed (e.g. CC-BY-SA) derived content — this repo is MIT.
   - No machine paths, no secrets, no runtime/vendor lock-in in the markdown bodies.
   - Keep companies importable: ≤ 50 agents, ≤ 10 teams, ≤ 40 skills, ≤ 2 projects
     (aligned with the platform importer's server-side caps). When adapting an
     upstream org that is larger, curate the roster down and say so in the README.
4. Run `node scripts/validate.mjs` (also `node scripts/build-manifest.mjs` to refresh
   `manifest.json` + the README catalog table) and open a PR. CI runs the same checks.

Contributions are licensed MIT.
