---
name: seo-technical-audit
description: Use when search visibility drops, before a campaign publishes onto a site section, or on a recurring schedule to verify the technical foundation content depends on.
---

# SEO Technical Audit

An audit answers one question: can search engines find, understand, and rank this content — and if not, exactly what is in the way. Every finding ships with severity, evidence, and a fix. An audit that only lists problems is half a deliverable.

## Audit sequence

1. **Crawlability.** Can a crawler reach every page that should rank? Check robots directives, blocked paths, orphaned pages with no internal links in, redirect chains, and dead links. A page nobody links to is a page that barely exists.
2. **Indexation.** Of the pages that can be crawled, which are actually indexed? Compare the intended-to-rank list against what is indexed; investigate every gap — noindex leftovers, canonical tags pointing away, duplicates competing with themselves.
3. **Metadata and structure.** Every target page has one unique title stating the query it answers, a description written for the click, one H1, and a heading hierarchy that outlines the content honestly. Structured data where the format warrants it.
4. **Internal linking.** The pages that matter most receive the most internal links, with descriptive anchor text. Check that new campaign content is linked from established pages — publishing without inbound internal links is publishing into a void.
5. **Performance and rendering.** Pages load fast enough that neither users nor crawlers give up, render their main content without requiring interactions, and behave on mobile viewports.
6. **Intent alignment spot-check.** For the top target queries, read the ranking page as a searcher would: does it actually answer the query it targets? Technical health cannot rescue content aimed at the wrong intent.

## Reporting findings

- One finding per row: what is wrong, where (with a representative URL), the evidence, severity, and the concrete fix.
- Severity is about consequence: blocking (rankings impossible), degrading (rankings handicapped), or hygiene (worth fixing, not urgent).
- Rank the report by severity, and separate fixes the content team can make from fixes requiring engineering — the second list gets escalated, not buried.

## Quality bar

- Every finding is reproducible from the evidence given; no "seems slow" without a number.
- The report ends with a one-paragraph verdict: is the foundation sound enough to publish onto, yes or no, and what must change first if no.
- Re-audit after fixes land and mark each finding resolved or still open — an audit without a follow-up is a snapshot, not a process.
