# FloorCalc Pro Site Flow Audit

Date: 2026-06-04

## Scope

This audit focused on the symptom-first diagnosis flow and the internal paths that support FloorCalc Pro as a flooring problem diagnosis resource.

Pages and systems reviewed:

- Homepage start paths
- `/diagnose`
- `/guides`
- `/guides/troubleshooting`
- `/guides/browse-problems`
- `/guides/flooring-separation-problems`
- `/guides/flooring-moisture-problems`
- `/guides/concrete-floor-problems`
- `/tools`
- Search Console signal pages:
  - `/guides/why-is-my-lvp-floor-clicking`
  - `/guides/why-is-my-laminate-floor-separating`
  - `/guides/which-direction-should-flooring-run`
  - `/guides/what-is-pattern-match-in-carpet`
  - `/guides/why-is-my-lvp-lifting`
  - `/guides/can-you-install-lvp-over-concrete`
  - `/guides/how-to-test-concrete-moisture`

## Diagnosis Flow Improvements

The `/diagnose` flow was expanded from a simple symptom selector into a stronger symptom-first guide path.

Changes made:

- Expanded diagnosis options from broad categories into 15 symptom paths:
  - Clicking
  - Separating
  - Buckling
  - Lifting
  - Peaking
  - Squeaking
  - Bouncing
  - Hollow Sound
  - Swelling
  - Moisture
  - Concrete Problems
  - Cracks
  - Carpet Seams
  - Carpet Buckling
  - Pattern Match
- Added plain-language explanations for what each symptom usually means.
- Added "Most likely causes" and "What to check first" guidance.
- Added cautious seriousness labels:
  - Cosmetic / minor
  - Needs inspection
  - Possible moisture issue
  - Possible structural concern
  - Installer/professional review recommended
- Added "When to get help" guidance for each symptom.
- Added related installation checklist links where useful.
- Added a new `/diagnose` section: "Is this something to worry about?"

The seriousness copy is intentionally cautious. It does not diagnose structural failure, promise warranty outcomes, or create alarmist conclusions.

## New Guide Added

Added one justified concern-intent guide:

- `/guides/are-bouncy-floors-dangerous`

Reason:

- Search Console signals include bouncy-floor and structural-concern intent.
- The site already had `/guides/why-is-my-floor-bouncing`, but not a direct concern-answer page for users searching whether bounce is dangerous.

The guide links to:

- `/guides/why-is-my-floor-bouncing`
- `/guides/why-is-my-floor-squeaking`
- `/guides/why-does-my-floor-feel-hollow`
- `/diagnose`
- `/guides/browse-problems`

## Hub Improvements

Authority hub pathways were reviewed and lightly strengthened.

Updated:

- `/guides/flooring-separation-problems`
  - Added bouncy/springy floor symptom lookup.
- `/guides/concrete-floor-problems`
  - Added tile-crack symptom lookup.

Existing hub structure remains strong:

- Start Here section
- Quick symptom lookup
- Recommended calculators
- Installation checklists
- Related troubleshooting
- Related hubs
- Problem Finder CTA

No hub was redesigned.

## Flagship Page Pathways

Search Console signal pages were reviewed for path quality.

Improvements:

- Added a small "Not sure what you are seeing?" Problem Finder callout to non-troubleshooting flagship pages where useful:
  - `/guides/which-direction-should-flooring-run`
  - `/guides/what-is-pattern-match-in-carpet`
  - `/guides/can-you-install-lvp-over-concrete`
  - `/guides/how-to-test-concrete-moisture`
- Troubleshooting pages already show the compact symptom selector, so duplicate callouts were avoided.
- Strengthened related problem mappings for:
  - LVP clicking
  - Laminate separating
  - LVP lifting
  - LVP over concrete
  - Concrete moisture testing
  - Flooring direction
  - Bouncy floors

## Browse Problems Improvements

Updated browse-problems symptom shortcuts to include missing high-intent paths:

- Bouncing
- Cracks
- Carpet buckling
- Pattern match

Movement and troubleshooting groupings were updated so the new bouncy-floor concern guide appears in logical browse paths.

## Link Audit Results

A local TypeScript data audit checked:

- Guide slugs
- Tool slugs
- Diagnosis guide/tool/checklist/hub references
- Browse-problems sections
- Related problem mappings
- Troubleshooting navigation
- Tool-to-guide links
- Authority hub pathways
- Problem symptom links

Results:

- Guides checked: 93
- Tools checked: 6
- Diagnosis options checked: 15
- Problem symptoms checked: 15
- Duplicate guide slugs: none
- Duplicate tool slugs: none
- Empty guide sections: none
- Broken guide/tool references: none

## Orphaned Page Review

No route-level orphan was found in the content data.

The new bouncy-floor concern page is connected through:

- Diagnosis option: Bouncing
- Troubleshooting guide list
- Movement troubleshooting group
- Browse-problems movement section
- Related problem mappings
- Existing bouncy-floor guide next steps
- Sitemap through guide generation

## Duplicate Link Review

The guide renderer already dedupes related guides, troubleshooting links, and next-step links by URL.

No duplicate slug or broken-link issues were found in the audited source data.

## Industry and Factual Safety

New and edited content follows the existing industry-aligned framing:

- Manufacturer instructions override general guidance.
- Moisture limits and installation requirements vary by product.
- Structural concerns are described cautiously.
- Flooring installers are recommended for finished-floor and installation-condition review.
- Qualified contractors or structural professionals are recommended when symptoms suggest framing, joists, beams, stairs, sagging, or large soft areas.

The new bouncy-floor guide uses broad subfloor/framing language and avoids diagnosing structural failure.

## Remaining Recommendations

- After traffic grows, review Search Console queries for `/diagnose` and `/guides/are-bouncy-floors-dangerous` before adding more concern-intent articles.
- Consider a future visual polish pass for `/diagnose` after real click behavior is known.
- Keep future diagnosis additions symptom-first. Avoid adding material-first options unless they clearly improve the user's path.
- Monitor whether carpet pattern-match and buckling pages start gaining impressions after the new diagnosis paths.
