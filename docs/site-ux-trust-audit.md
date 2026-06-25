# FloorCalc Pro UX, Trust, and Usefulness Audit

Date: 2026-06-25

## Scope

This pass reviewed the site for high-impact usability and trust improvements after the growth of the calculator, troubleshooting, installation, moisture, concrete, and movement guide library.

Reviewed areas:

- Homepage and Start Here pathways
- `/diagnose`
- `/decision-trees`
- `/guides/browse-problems`
- Troubleshooting guide pages
- Authority hub pages
- Shared guide template flow
- Compact problem selector blocks
- Related next-step and guided-help pathways

## Issues Found

- Troubleshooting and install-condition pages generally had strong content, but the trust flow was inconsistent before a user chose a repair path.
- Some pages explained causes well but did not consistently remind users to verify field conditions, product instructions, moisture conditions, subfloor support, or installer requirements before acting.
- Compact symptom selector blocks gave users quick symptom links, but did not clearly send them back to the main Problem Finder or guided decision trees.
- No broad redesign was needed. The site structure is already strong enough; the highest-value improvement was making the existing flow safer and easier to follow.

## Issues Fixed

- Added a reusable field-verification checklist for higher-risk guide pages, including troubleshooting, authority hub, repair, subfloor, radiant heat, moisture, concrete, movement, and similar install-condition pages.
- The checklist adapts to the guide topic and can include moisture checks, subfloor checks, movement checks, locking-joint inspection, wood movement context, tile movement, or carpet system checks.
- Added compact guided-help links under the symptom selector so users can return to the Problem Finder or Decision Trees instead of getting trapped in a symptom list.
- Kept the improvements centralized in shared components and the guide page template rather than editing dozens of individual articles.

## Trust Improvements

- Added clearer manufacturer-verification language before repair decisions.
- Reinforced that field conditions should be documented before acting.
- Reinforced moisture, concrete, subfloor, movement, and locking-system checks where relevant.
- Kept wording cautious and practical: the site guides planning and troubleshooting, but does not replace product instructions or installer judgment.

## UX Improvements

- Added a clearer return path from compact problem lists to guided help.
- Improved problem-page flow from symptom to field checks to guide content to next steps.
- Avoided adding another large content batch or more navigation choices.

## Orphaned Page Review

No new orphaned public pages were created. The changes rely on existing routes:

- `/diagnose`
- `/decision-trees`
- `/guides/browse-problems`

The new checklist appears through the existing guide template.

## Duplicate Content Review

No article sections were duplicated. The added checklist is intentionally short and procedural, so it complements the troubleshooting flow rather than repeating cause tables, examples, FAQs, or related links.

## Intentionally Not Changed

- No new guide pages were added.
- No ads, affiliate blocks, lead forms, provider matching, AI APIs, database, or CMS were added.
- No canonical, sitemap, robots, or domain settings were changed.
- No sitewide redesign was performed.
- Navigation structure was not rebuilt.

## Future Recommendations

- After more Search Console data arrives, review whether the field checklist improves engagement on troubleshooting pages.
- Consider a lightweight analytics-informed "common starting points" section later, but avoid fake popularity labels until there is data.
- Add provider/lead capture only after traffic and conversion paths justify it.
- Periodically audit mobile rendering for diagrams and dense tables as new guide content is added.
