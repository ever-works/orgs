#!/usr/bin/env node
// Validates every company package against agentcompanies/v1 conventions and this
// repo's rules, plus manifest.json consistency. Exits non-zero on any error.
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';
import Ajv from 'ajv';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const COMPANIES_DIR = join(ROOT, 'companies');
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,63}$/;
// Aligned with the platform importer's server-side caps (teams-and-companies
// spec §6.2) so every catalog company imports whole, never truncated.
const LIMITS = { agents: 50, teams: 10, skills: 40, projects: 2 };

const errors = [];
const err = (company, msg) => errors.push(`[${company}] ${msg}`);

function frontmatter(file) {
	const raw = readFileSync(file, 'utf8');
	const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
	if (!m) return { fm: null, body: raw };
	try {
		return { fm: parseYaml(m[1]), body: raw.slice(m[0].length) };
	} catch (e) {
		return { fm: undefined, body: raw, parseError: e.message };
	}
}

function listDirs(dir) {
	return existsSync(dir)
		? readdirSync(dir).filter((d) => statSync(join(dir, d)).isDirectory())
		: [];
}

function validateCompany(slug) {
	const dir = join(COMPANIES_DIR, slug);
	if (!SLUG_RE.test(slug)) err(slug, `folder name is not a valid slug`);

	// COMPANY.md
	const companyFile = join(dir, 'COMPANY.md');
	if (!existsSync(companyFile)) return err(slug, 'missing COMPANY.md');
	const { fm: company, parseError } = frontmatter(companyFile);
	if (parseError) return err(slug, `COMPANY.md frontmatter YAML error: ${parseError}`);
	if (!company) return err(slug, 'COMPANY.md has no frontmatter');
	for (const f of ['name', 'description', 'slug']) {
		if (!company[f]) err(slug, `COMPANY.md missing required field "${f}"`);
	}
	if (company.schema !== 'agentcompanies/v1') err(slug, `COMPANY.md schema must be "agentcompanies/v1" (got ${company.schema})`);
	if (company.slug !== slug) err(slug, `COMPANY.md slug "${company.slug}" != folder "${slug}"`);
	if (!company.license) err(slug, 'COMPANY.md missing license');

	// agents
	const agentSlugs = listDirs(join(dir, 'agents'));
	if (agentSlugs.length === 0) err(slug, 'no agents/ — at least one agent required');
	if (agentSlugs.length > LIMITS.agents) err(slug, `${agentSlugs.length} agents exceeds limit ${LIMITS.agents}`);
	const roots = [];
	const agents = new Map();
	for (const a of agentSlugs) {
		if (!SLUG_RE.test(a)) err(slug, `agent folder "${a}" is not a valid slug`);
		const f = join(dir, 'agents', a, 'AGENTS.md');
		if (!existsSync(f)) { err(slug, `agents/${a}/AGENTS.md missing`); continue; }
		const { fm, parseError: pe, body } = frontmatter(f);
		if (pe) { err(slug, `agents/${a}/AGENTS.md YAML error: ${pe}`); continue; }
		if (!fm) { err(slug, `agents/${a}/AGENTS.md has no frontmatter`); continue; }
		if (!fm.name) err(slug, `agents/${a} missing name`);
		if (!fm.title) err(slug, `agents/${a} missing title`);
		if (!('reportsTo' in fm)) err(slug, `agents/${a} missing reportsTo (use null for the root agent)`);
		if (fm.reportsTo === null) roots.push(a);
		if (!body.trim()) err(slug, `agents/${a} has an empty body`);
		agents.set(a, fm);
	}
	for (const [a, fm] of agents) {
		if (fm.reportsTo != null && !agents.has(fm.reportsTo)) {
			err(slug, `agents/${a} reportsTo "${fm.reportsTo}" does not resolve to a bare agent slug in this package`);
		}
		for (const s of fm.skills ?? []) {
			if (!existsSync(join(dir, 'skills', s, 'SKILL.md'))) {
				err(slug, `agents/${a} references skill "${s}" but skills/${s}/SKILL.md is missing`);
			}
		}
	}
	if (roots.length !== 1) err(slug, `expected exactly 1 root agent (reportsTo: null), found ${roots.length}`);
	// cycle check
	for (const [a] of agents) {
		let cur = a;
		const seen = new Set();
		while (cur != null && agents.has(cur)) {
			if (seen.has(cur)) { err(slug, `reportsTo cycle involving agents/${a}`); break; }
			seen.add(cur);
			cur = agents.get(cur).reportsTo;
		}
	}

	// teams
	const teamSlugs = listDirs(join(dir, 'teams'));
	if (teamSlugs.length > LIMITS.teams) err(slug, `${teamSlugs.length} teams exceeds limit ${LIMITS.teams}`);
	for (const t of teamSlugs) {
		const f = join(dir, 'teams', t, 'TEAM.md');
		if (!existsSync(f)) { err(slug, `teams/${t}/TEAM.md missing`); continue; }
		const { fm, parseError: pe } = frontmatter(f);
		if (pe) { err(slug, `teams/${t}/TEAM.md YAML error: ${pe}`); continue; }
		if (!fm) { err(slug, `teams/${t}/TEAM.md has no frontmatter`); continue; }
		for (const field of ['name', 'description', 'slug']) {
			if (!fm[field]) err(slug, `teams/${t} missing ${field}`);
		}
		const refs = [...(fm.manager ? [fm.manager] : []), ...(fm.includes ?? [])];
		if (!fm.manager) err(slug, `teams/${t} missing manager`);
		for (const ref of refs) {
			const target = resolve(join(dir, 'teams', t), ref);
			const rel = relative(dir, target);
			if (rel.startsWith('..') || rel.includes(`..${sep}`)) {
				err(slug, `teams/${t} reference "${ref}" escapes the package`);
			} else if (!existsSync(target)) {
				err(slug, `teams/${t} reference "${ref}" does not exist`);
			}
		}
	}

	// skills
	const skillSlugs = listDirs(join(dir, 'skills'));
	if (skillSlugs.length > LIMITS.skills) err(slug, `${skillSlugs.length} skills exceeds limit ${LIMITS.skills}`);
	for (const s of skillSlugs) {
		const f = join(dir, 'skills', s, 'SKILL.md');
		if (!existsSync(f)) { err(slug, `skills/${s}/SKILL.md missing`); continue; }
		const { fm, parseError: pe } = frontmatter(f);
		if (pe) { err(slug, `skills/${s}/SKILL.md YAML error: ${pe}`); continue; }
		if (!fm?.name || !fm?.description) err(slug, `skills/${s} missing name/description`);
	}

	// projects + tasks
	const projectSlugs = listDirs(join(dir, 'projects'));
	if (projectSlugs.length > LIMITS.projects) err(slug, `${projectSlugs.length} projects exceeds limit ${LIMITS.projects}`);
	for (const p of projectSlugs) {
		const f = join(dir, 'projects', p, 'PROJECT.md');
		if (!existsSync(f)) { err(slug, `projects/${p}/PROJECT.md missing`); continue; }
		const { fm, parseError: pe } = frontmatter(f);
		if (pe) { err(slug, `projects/${p}/PROJECT.md YAML error: ${pe}`); continue; }
		if (!fm?.name) err(slug, `projects/${p} missing name`);
		if (fm?.owner && !agents.has(fm.owner)) err(slug, `projects/${p} owner "${fm.owner}" unknown`);
		for (const t of listDirs(join(dir, 'projects', p, 'tasks'))) {
			const tf = join(dir, 'projects', p, 'tasks', t, 'TASK.md');
			if (!existsSync(tf)) { err(slug, `projects/${p}/tasks/${t}/TASK.md missing`); continue; }
			const { fm: task, parseError: tpe } = frontmatter(tf);
			if (tpe) { err(slug, `projects/${p}/tasks/${t}/TASK.md YAML error: ${tpe}`); continue; }
			if (!task?.name) err(slug, `projects/${p}/tasks/${t} missing name`);
			if (task?.assignee && !agents.has(task.assignee)) err(slug, `tasks/${t} assignee "${task.assignee}" unknown`);
			if (task?.project && task.project !== p) err(slug, `tasks/${t} project "${task.project}" != "${p}"`);
		}
	}

	// .works/company.yml (Ever Works vendor sidecar — .works/<entity>.yml convention)
	const ewFile = join(dir, '.works', 'company.yml');
	if (!existsSync(ewFile)) err(slug, 'missing .works/company.yml');
	else {
		try {
			const ew = parseYaml(readFileSync(ewFile, 'utf8'));
			if (ew?.schema !== 'everworks/v1') err(slug, `.works/company.yml schema must be "everworks/v1"`);
			const ICON_RE = /^[a-z0-9][a-z0-9-]*$/;
			for (const [a, cfg] of Object.entries(ew?.agents ?? {})) {
				if (!agents.has(a)) err(slug, `.works/company.yml references unknown agent "${a}"`);
				// Optional per-agent import hints — validated only when present (additive).
				if (cfg && typeof cfg === 'object') {
					if (cfg.avatarIcon !== undefined && !ICON_RE.test(String(cfg.avatarIcon)))
						err(slug, `.works/company.yml agents.${a}.avatarIcon must be a kebab-case icon id`);
					if (cfg.heartbeatCadence !== undefined && typeof cfg.heartbeatCadence !== 'string')
						err(slug, `.works/company.yml agents.${a}.heartbeatCadence must be a string (cron or "manual")`);
					if (cfg.budgetMonthly !== undefined && !(typeof cfg.budgetMonthly === 'number' && cfg.budgetMonthly >= 0))
						err(slug, `.works/company.yml agents.${a}.budgetMonthly must be a non-negative number`);
					if (cfg.tags !== undefined && !Array.isArray(cfg.tags))
						err(slug, `.works/company.yml agents.${a}.tags must be an array`);
				}
			}
			if (!ew?.catalog?.category) err(slug, '.works/company.yml missing catalog.category');
			if (!ew?.catalog?.avatarIcon) err(slug, '.works/company.yml missing catalog.avatarIcon');
			// Optional catalog fields (additive).
			if (ew?.catalog?.summary !== undefined && typeof ew.catalog.summary !== 'string')
				err(slug, '.works/company.yml catalog.summary must be a string');
			if (ew?.catalog?.maturity !== undefined && !['stable', 'beta', 'experimental'].includes(ew.catalog.maturity))
				err(slug, '.works/company.yml catalog.maturity must be stable|beta|experimental');
		} catch (e) {
			err(slug, `.works/company.yml YAML error: ${e.message}`);
		}
	}

	if (!existsSync(join(dir, 'README.md'))) err(slug, 'missing README.md');
	if (!existsSync(join(dir, 'images', 'org-chart.svg'))) err(slug, 'missing images/org-chart.svg');

	return {
		slug,
		counts: {
			agents: agentSlugs.length,
			teams: teamSlugs.length,
			skills: skillSlugs.length,
			projects: projectSlugs.length,
		},
	};
}

// ---- run ----
const companyDirs = listDirs(COMPANIES_DIR);
if (companyDirs.length === 0) errors.push('no companies found under companies/');
const results = companyDirs.map(validateCompany).filter(Boolean);

// manifest.json consistency
const manifestPath = join(ROOT, 'manifest.json');
if (!existsSync(manifestPath)) {
	errors.push('manifest.json missing (run scripts/build-manifest.mjs)');
} else {
	const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
	const ajv = new Ajv({ allErrors: true });
	const schema = JSON.parse(readFileSync(join(ROOT, 'schema', 'orgs-manifest.schema.json'), 'utf8'));
	if (!ajv.validate(schema, manifest)) {
		errors.push(`manifest.json schema errors: ${ajv.errorsText(ajv.errors)}`);
	}
	const inManifest = new Set((manifest.companies ?? []).map((c) => c.slug));
	for (const r of results) {
		if (!inManifest.has(r.slug)) errors.push(`manifest.json missing company "${r.slug}"`);
	}
	for (const c of manifest.companies ?? []) {
		if (!companyDirs.includes(c.slug)) errors.push(`manifest.json lists "${c.slug}" but companies/${c.slug} does not exist`);
		const r = results.find((x) => x.slug === c.slug);
		if (r) {
			for (const k of ['agents', 'teams', 'skills']) {
				if (c[k] !== r.counts[k]) errors.push(`manifest.json "${c.slug}".${k}=${c[k]} but package has ${r.counts[k]}`);
			}
		}
	}
}

if (errors.length) {
	console.error(`✗ validation failed with ${errors.length} error(s):\n` + errors.map((e) => `  - ${e}`).join('\n'));
	process.exit(1);
}
console.log(`✓ ${results.length} companies valid: ${results.map((r) => r.slug).join(', ')}`);
