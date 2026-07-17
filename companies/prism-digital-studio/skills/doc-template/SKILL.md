---
name: doc-template
description: Use when choosing the right document format for a job, building a reusable template for a recurring document type, or filling an existing template correctly.
---

# Doc Template

Templates are how document quality compounds: solve a layout once, then reuse it. This playbook covers picking the format, building the template, and filling it without breaking it.

## Choosing the format

| Job | Format |
|---|---|
| Narrative the client reads: report, proposal, case study | Polished fixed-layout document |
| Document the client edits or signs: contract, letter, resume | Editable structured document |
| Numbers the client recalculates: model, budget, tracker | Spreadsheet |
| Content presented aloud: pitch, review, training | Slide deck |

If the brief names a format that fights the content (a 40-row comparison "report" that's really a spreadsheet), raise it before producing — format disputes cost a message now or a rebuild later.

## Building a template

1. **Extract the invariants.** From two or three past examples of the document type, identify what never changes: section order, cover elements, header/footer, typography scale, table styles.
2. **Parameterize the variables.** Mark every slot that changes per use with an unmistakable placeholder (`{{CLIENT_NAME}}`, `{{DATE}}`) — never realistic-looking sample text, which is how a previous client's name ships to a new one.
3. **Encode the design system**: two typefaces maximum, a stated heading scale, one accent color with usage rules, consistent spacing. Write these into the template's styles so fillers inherit them instead of improvising.
4. **Document the template** in a short companion note: what it's for, every placeholder listed, and any section that may be deleted when not needed.
5. **Name and register it** so the studio can find it: type, version, date.

## Filling a template

- Fill every placeholder or delete its optional section — then search the document for leftover placeholder markers before handoff. A shipped `{{...}}` is an automatic QA fail.
- Never restyle while filling; if the template's style is wrong, fix the template and bump its version.

## Quality bar

- A first-time user can fill the template correctly from the companion note alone.
- No placeholder that could pass as real content; no styling decisions left to the filler.

## Output format

The template file plus its companion note, registered under a versioned name. Filled documents reference the template version they came from.
