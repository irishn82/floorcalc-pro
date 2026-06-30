# Flooring Risk Assessment and Intent-Clarity Audit

Date: 2026-06-30

## Scope

This pass added a focused severity/risk-assessment layer for searchers asking whether flooring symptoms are normal, serious, or worth stopping installation over. It also reviewed overlapping clusters so the new pages support the existing troubleshooting and repair pages instead of competing with them.

## Pages Added

- `/guides/is-floor-clicking-normal`
- `/guides/is-floor-separation-serious`
- `/guides/is-this-flooring-movement-normal`
- `/guides/can-i-keep-installing-laminate`
- `/guides/when-to-stop-floor-installation`

Each page includes:

- Quick Answer
- Normal vs Not Normal
- What To Check First
- Risk Level table
- Common Causes
- What Not To Ignore
- Related decision paths
- Related guides and calculators
- When To Call a Professional
- Practical example scenario
- FAQ
- Manufacturer/jobsite verification disclaimer

## Intent-Clarity Review

### Laminate Separation Cluster

Reviewed:

- `/guides/why-is-my-laminate-floor-separating`
- `/guides/laminate-floor-separating-what-to-check-first`
- `/guides/how-to-fix-laminate-floor-separation`
- `/guides/laminate-floor-not-clicking-together`
- `/guides/why-is-my-laminate-floor-not-laying-flat`
- `/guides/can-i-keep-installing-laminate`

Intent split:

- `why-is-my-laminate-floor-separating`: cause diagnosis.
- `laminate-floor-separating-what-to-check-first`: inspection sequence.
- `how-to-fix-laminate-floor-separation`: repair decision support.
- `laminate-floor-not-clicking-together`: assembly/locking-joint problem.
- `why-is-my-laminate-floor-not-laying-flat`: flatness/layout symptom.
- `can-i-keep-installing-laminate`: stop-or-continue installation decision.

Changes made:

- Added the new laminate stop/continue page to laminate problem discovery.
- Added cross-links through related problem recommendations and `/diagnose`.
- Connected repair/diagnosis paths to risk pages so users pause before forcing boards or continuing rows.

Cannibalization risk:

- Moderate if intros become too similar. The new page is framed around installation continuation, while the existing pages remain cause, repair, or symptom-specific.

### LVP Movement Cluster

Reviewed:

- `/guides/why-is-my-lvp-floor-clicking`
- `/guides/why-is-my-lvp-lifting`
- `/guides/why-is-my-lvp-floor-separating`
- `/guides/why-is-my-lvp-floor-peaking`
- `/guides/why-are-my-lvp-seams-showing`
- `/guides/is-floor-clicking-normal`
- `/guides/is-this-flooring-movement-normal`

Intent split:

- LVP symptom pages remain material-specific diagnosis pages.
- `is-floor-clicking-normal` handles normal-vs-investigate clicking searches.
- `is-this-flooring-movement-normal` handles broad movement severity searches.
- Movement and comparison hubs continue to organize the cluster.

Changes made:

- Added the new risk pages to movement browse sections, authority hub pathways, related problem recommendations, and `/diagnose`.
- Added risk language that distinguishes likely cause from confirmed diagnosis.

Cannibalization risk:

- Low to moderate. Broad normal/serious pages should capture early-stage search intent and send users to the detailed LVP pages.

### Concrete / Moisture Cluster

Reviewed:

- `/guides/concrete-floor-problems`
- `/guides/concrete-slab-cracks-under-flooring`
- `/guides/how-to-test-concrete-moisture`
- `/guides/flooring-moisture-problems`
- `/guides/moisture-level-too-high-for-flooring`
- `/guides/when-to-stop-floor-installation`

Intent split:

- Concrete and moisture hubs organize topic clusters.
- Moisture testing pages remain testing-method guidance.
- Concrete problem pages remain slab-condition troubleshooting.
- `when-to-stop-floor-installation` is a general stop-work safety page for installation warning signs.

Changes made:

- Added the stop-work page to moisture/concrete diagnosis paths.
- Added cautious language around slab moisture, unknown field conditions, flatness, compatibility, and professional inspection.

Cannibalization risk:

- Low. The new page answers "should I continue?" while existing pages answer "what is the concrete/moisture issue?"

## Discovery and Internal Linking Updates

Updated:

- `data/guides.ts`
- `data/types.ts`
- `data/navigation.ts`
- `data/problem-navigation.ts`
- `data/diagnose.ts`
- `data/decision-trees.ts`
- `data/authority-hubs.ts`
- `app/(public)/guides/[slug]/page.tsx`
- `lib/content/industry-references.ts`

Improvements:

- Added risk/severity to Browse Problems.
- Added new pages to troubleshooting discovery.
- Added related-problem recommendations for all five new risk pages.
- Added `/diagnose` and `/decision-trees` paths into new page copy and existing discovery systems.
- Added the new risk pages to the guide-page problem-finder callout logic.

## Standards and Safety Safeguards

The new content uses conservative language aligned with:

- NWFA-style jobsite/moisture/acclimation caution for wood and engineered hardwood.
- RFCI and ASTM F710-style substrate preparation principles for resilient flooring and concrete.
- TCNA/ANSI-style tile substrate and movement caution where tile is mentioned.
- CRI 104/105-style carpet installation caution where carpet systems are included.
- Manufacturer instructions as the controlling requirement for product-specific limits.

Safeguards applied:

- No warranty promises.
- No universal moisture limits.
- No invented acclimation timelines.
- No invented flatness tolerances.
- No structural diagnosis presented as certainty.
- Distinction between likely cause, possible cause, and verified field diagnosis.

## Future Recommendations

- Watch Search Console for whether the risk pages earn impressions for "normal," "serious," "should I stop," and "can I keep installing" queries.
- If one broad page overlaps too strongly with a detailed symptom page, tighten its intro and internal links rather than deleting content.
- Consider adding a small "severity" badge to guide cards later, but only if it improves clarity without clutter.
- Keep future content additions smaller and cluster-driven until performance data shows a clear gap.
