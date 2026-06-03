# FloorCalc Pro Site Architecture Audit

Date: 2026-06-03

## Scope

This audit reviewed the current FloorCalc Pro public architecture after the site expanded into calculators, guide ecosystems, troubleshooting pages, authority hubs, moisture content, concrete slab content, movement content, and installation checklists.

The audit focused on organization, discoverability, navigation flow, duplicate/overlapping content, orphaned content, crawl paths, and production UX. It did not add ads, affiliate links, lead forms, provider matching, AI APIs, a database, a CMS, or canonical/domain changes.

## Inventory Reviewed

- 92 live guide routes
- 6 calculator routes
- 8 configured flooring ecosystems
- Public routes: home, tools, guides, troubleshooting, browse problems, guide ecosystems, individual guides, individual tools
- Private/noindex routes: admin routes and `/tishflooring`

## Issues Found

### Navigation

- The global top navigation had become slightly crowded because both `Troubleshooting` and `Browse Problems` were present as top-level items.
- The symptom browser is useful, but it works better as a guide/troubleshooting entry point than as a permanent global nav item.
- Footer guide links were missing a direct symptom-browse path.
- Footer text contained visible encoding artifacts in production-facing copy.

### Content Discovery

- `/guides` had the right structure, but it promoted every configured ecosystem, including an empty Sheet Vinyl ecosystem.
- The active authority hubs were visible, but calculator pages needed a stronger path back to the main problem hubs.
- Ecosystem pages had a path back to all guides, but no clear shortcut into symptom-based troubleshooting.

### Authority Hubs

The current authority hubs are present and useful:

- `/guides/flooring-separation-problems`
- `/guides/flooring-movement-problems`
- `/guides/flooring-moisture-problems`
- `/guides/concrete-floor-problems`
- `/guides/concrete-slab-flooring-guide`

These hubs are connected through related guides, troubleshooting groups, browse-problem sections, tool recommendations, and next-step panels.

### Internal Linking

Data-level checks found:

- No duplicate guide slugs
- No broken guide references
- No broken tool references
- No true orphaned guide pages by current link maps

The main architecture issue is not orphaning; it is density. Several troubleshooting pages have many nearby links because movement, moisture, concrete, and separation topics overlap heavily.

### Guide Organization

Ecosystem counts showed strong coverage in:

- LVP
- Laminate
- Hardwood & Engineered Hardwood
- Tile
- Carpet & Padding
- Planning, Measuring & Transitions

Issues:

- Planning, Measuring & Transitions is carrying many cross-material troubleshooting and install-condition pages.
- LVT has no primary guides, but relevant secondary content exists.
- Sheet Vinyl has no primary or secondary guides yet.

### Duplicate / Overlapping Content

No duplicate slugs were found. Several topics intentionally overlap:

- Floor separating vs flooring joints opening
- Moisture problems vs concrete moisture vs slab problems
- Movement problems vs clicking, squeaking, peaking, buckling, gapping
- Hardwood acclimation vs humidity vs install-too-soon content

This overlap is acceptable for search intent, but each cluster should continue using hub pages and next-step links to reduce user confusion.

## Issues Fixed

### Navigation Cleanup

- Removed `Browse Problems` from the global top navigation.
- Kept `Home`, `Tools`, `Guides`, and `Troubleshooting` as the primary public nav path.
- Left symptom browsing accessible from `/guides`, `/guides/troubleshooting`, guide pages, and the footer.

### Footer Cleanup

- Fixed visible encoding artifacts in footer links and copyright text.
- Added `Browse by symptom` to the footer guide links.
- Kept footer links compact and practical.

### Breadcrumb Cleanup

- Updated breadcrumb separators so spacing is handled by CSS rather than embedded whitespace.
- Expected display remains: `Home › Guides › Laminate › Page Title`.

### Guides Hub Cleanup

- `/guides` now promotes only ecosystems with live guide content.
- The empty Sheet Vinyl ecosystem is no longer shown in the guide dropdown or ecosystem card grid.
- Authority hubs remain prominent near the top of the guide hub.

### Ecosystem Page Cleanup

- Ecosystem pages now include a direct `Browse by symptom` link in the planning focus panel.
- Empty ecosystem pages get `noindex, follow` metadata when visited directly.

### Sitemap Cleanup

- The sitemap now includes only ecosystem pages that have live primary or secondary guide content.
- Public guides, tools, troubleshooting, browse-problem pages, and active ecosystem pages remain in the sitemap.
- `/tishflooring` remains excluded from sitemap behavior by design.

### Calculator Flow Improvement

- `/tools` now includes a compact problem-hub section:
  - Browse problems by symptom
  - Movement problems
  - Moisture problems
  - Concrete floor problems

This strengthens the path from calculators back into troubleshooting and authority hubs.

### Troubleshooting Flow Label

- Troubleshooting guide pages now use `Back to symptom menu` instead of `Back to problem menu`, which better matches the visitor's task.

## Orphaned Page Report

No true orphaned guide pages were found in the data-level audit.

Checked sources included:

- Guide `relatedGuides`
- Tool-to-guide recommendations
- Troubleshooting guide registry
- Browse-problem sections
- Related problem maps
- Troubleshooting problem groups

The site also has a universal `/guides` discovery path for all live guides.

## Duplicate Content Report

No duplicate guide routes were found.

Content overlap exists by design in the following clusters:

- Separation, joints opening, LVP separation, laminate separation, engineered hardwood separation
- Moisture, humidity, concrete slab moisture, wet subfloors, flooring failures over concrete
- Movement, clicking, squeaking, peaking, buckling, lifting, hollow sound
- Hardwood acclimation, humidity, cupping, crowning, gapping

Current recommendation: do not delete these pages. Keep the hub-and-spoke structure, continue linking overlapping pages through the authority hubs, and periodically trim repeated FAQ/table wording when pages are updated.

## Pages Reorganized

No URLs were changed and no pages were moved.

Organization changes were limited to:

- Hiding empty ecosystem promotion on `/guides`
- Excluding empty ecosystem pages from the sitemap
- Adding noindex to empty ecosystem pages if directly visited
- Improving links between tools, symptom browsing, and authority hubs

## Pages Requiring Future Review

- `/guides/ecosystems/sheet-vinyl`: should remain a future expansion target. Add real Sheet Vinyl guides before promoting or indexing it.
- `/guides/ecosystems/lvt`: has secondary coverage, but would benefit from dedicated LVT primary guides.
- Planning, Measuring & Transitions ecosystem: consider splitting out a dedicated `Moisture, Movement & Subfloor Problems` ecosystem if these clusters keep growing.
- Troubleshooting pages with heavy overlap: periodically check for repeated FAQ answers and over-dense related-link sections.

## Navigation Recommendations

Keep the top nav simple:

- Home
- Tools
- Guides
- Troubleshooting

Use internal hubs for deeper navigation:

- `/guides` for material ecosystems and authority hubs
- `/guides/troubleshooting` for problem ecosystems
- `/guides/browse-problems` for symptom-first browsing
- Authority hubs for movement, separation, moisture, and concrete slab issues

## SEO Architecture Notes

Current crawl hierarchy is healthy:

- Calculators connect to related guide clusters.
- Guide hubs connect to ecosystems and problem hubs.
- Troubleshooting groups connect to symptom pages.
- Authority hubs connect to supporting troubleshooting pages.
- Checklists connect back to calculators, moisture, concrete, acclimation, transitions, and troubleshooting.

No canonical/domain changes were made.

## Industry Reference Audit

The industry reference system remains in place and is appropriate for the current content:

- NWFA for hardwood, engineered hardwood, acclimation, concrete, and moisture concerns
- CRI 104/105 for carpet seams, padding, and installation concerns
- TCNA/ANSI-style tile guidance through TCNA references
- RFCI and ASTM F710-style resilient flooring substrate references for concrete, resilient flooring, moisture, and prep
- NALFA references for laminate where relevant

Future editorial review should continue checking for manufacturer-specific variability around moisture limits, acclimation, underlayment, radiant heat, adhesive systems, and flatness tolerances.
