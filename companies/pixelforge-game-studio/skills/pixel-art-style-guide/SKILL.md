---
name: pixel-art-style-guide
description: Use when establishing or auditing a project's pixel art rules — palette, resolution grid, outlines, animation standards, readability, and export conventions — so every asset from any hand looks like one game.
---

# Pixel Art Style Guide

Write the rulebook that makes a hundred assets by different hands read as one game — or audit existing assets against it. The guide comes before batch production, always.

## Steps

1. **Anchor references.** Name 2-3 existing games or images that define the target mood, and one sentence each on what to take from them (palette warmth, outline weight, animation snappiness). References are direction, never material to copy.
2. **Fix the grid.** Base resolution (e.g. 16x16 or 32x32 tiles), character cell sizes, and the display scale factor. State the mixing rule explicitly (single grid only, or which exceptions — e.g. bosses at 2x cell — are allowed).
3. **Lock the palette.** A fixed global palette (typically 16-48 colors) listed as hex values, with named ramps (skin, foliage, metal, UI) and per-sprite color budgets. State the law: no off-palette colors; new colors require a guide amendment, not a local exception.
4. **Outline and light rules.** Outline convention (none / selective / full, interior or exterior, which ramp color), one global light direction, and the shading style (flat, two-step, dither policy). Dither especially: where it's welcome, where it's banned.
5. **Readability hierarchy.** Rank the visual loudness of element classes: player > enemies > hazards > interactables > pickups > decoration > background. Give each class a concrete separator (saturation band, outline treatment, value contrast) so the ranking survives a busy screen.
6. **Animation standards.** Frame budgets per animation class (idle, walk, attack, death, FX), the telegraph rule (wind-up pose before any attack lands), pivot/anchor conventions, and timing notes (frames-per-step at target FPS).
7. **Export conventions.** Sheet layout, naming pattern (`enemy-slime-walk-01`), file format, transparency handling, and pivot metadata — everything engineering needs to integrate without questions.
8. **Test at game conditions.** Validate every rule and every audited asset at gameplay zoom, over real backgrounds, in motion. Editor-zoom beauty proves nothing.

## Quality bar

- The palette section alone is enough to recreate the game's mood.
- Any two assets built by different hands under this guide sit side by side without visible seams.
- Hazard vs. decoration is distinguishable in a 2-second glance at gameplay zoom — the guide's readability rules make this inevitable, not lucky.
- Every rule is checkable ("outlines use ramp color N") rather than aspirational ("outlines should feel cohesive").
- Amendments are dated, listed in a changelog, and never retroactive without a stated re-export plan.

## Output format

Markdown document: sections in the order above, palette as a hex table with ramp names, one "forbidden list" of the project's specific temptations (off-palette glow, mixed resolutions, banned dither zones), and a changelog at the bottom.
