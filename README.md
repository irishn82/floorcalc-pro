# FloorCalc Pro

Production-ready foundation for a multi-page flooring utility and SEO content website.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static data-driven tools and guides
- No database or backend API in the current phase

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run typecheck
npm run build
npm run start
```

## Project Structure

- `app/` - App Router pages, sitemap, robots
- `components/` - Reusable layout, cards, calculators, FAQ, and future monetization placeholders
- `data/` - Tool and guide metadata/content
- `lib/calculators/` - Pure calculator functions
- `lib/content/` - Content lookup, brief-building, and internal-linking helpers
- `lib/seo/` - Metadata and JSON-LD helpers
- `content/drafts/` - Local, unpublished SEO draft briefs
- `content/promoted/` - Manual promotion previews and snippets
- `content/qa-reports/` - Local QA reports for promoted snippets
- `public/` - Local visual assets

## Phase 2 Draft Workflow

Phase 2 adds a production-safe SEO draft workflow. It does not call AI APIs, publish pages, write to a database, or change live guide routes.

### Add a New Keyword Topic

Add a structured topic object to `data/keywords.ts` with:

- `id`
- `primaryKeyword`
- `slug`
- `searchIntent`
- `category`
- `difficulty`
- `priority`
- `relatedKeywords`
- `relatedTools`
- `notes`

Use an existing topic as the model. Keep the slug stable because generated draft filenames use it.

### Generate One Draft

```bash
npm run generate:draft -- --slug lvp-waste-percentage
```

This writes one markdown brief to `content/drafts/lvp-waste-percentage.md`.

### Generate All Drafts

```bash
npm run generate:draft
```

This writes one markdown brief per topic into `content/drafts/`.

### Review a Draft

Every generated file is marked `status: "NOT PUBLISHED"` and `draft: true` in frontmatter. Before using a draft as a live guide:

- Verify the target keyword and search intent.
- Replace outline notes with original article copy.
- Check all flooring claims against manufacturer or installer requirements where appropriate.
- Confirm related calculators and internal links.
- Keep the disclaimer visible where the subject needs it.

### Promote a Draft Later

To promote a reviewed draft into a live guide, manually convert the approved content into a `Guide` object in `data/guides.ts`, add or refine internal links, and run:

```bash
npm run typecheck
npm run build
```

Do not wire `content/drafts/` directly into live App Router pages. Drafts are intentionally review-only.

## Phase 3 Manual Promotion Workflow

Phase 3 adds a manual editorial promotion workflow. It validates a reviewed draft and creates promotion-preview files, but it does not publish anything and does not edit `data/guides.ts`.

### Review Drafts First

Open the draft in `content/drafts/` and review it as an editorial brief. Before promotion, make sure the draft has:

- A reviewed title, slug, meta title, and meta description.
- A clear excerpt or usable meta description.
- Useful H2 headings.
- FAQ ideas that match the search intent.
- Related calculator links and internal guide links.
- A disclaimer for estimate, compatibility, installation, or warranty-sensitive advice.

### Run Promotion Preview

```bash
npm run promote:draft -- --slug lvp-waste-percentage
```

This reads `content/drafts/lvp-waste-percentage.md`, validates the required fields, checks the slug against existing live guides, and writes promotion files into `content/promoted/`.

### Promoted Output

The script writes:

- `content/promoted/{slug}.promotion-preview.md` - validation summary, internal links, and editorial checklist.
- `content/promoted/{slug}.guide-snippet.ts` - a paste-ready `Guide` snippet with placeholder body copy and FAQ answers that must be replaced before publishing.

### Manual Live Promotion

To publish a reviewed guide later:

1. Open the generated `.guide-snippet.ts`.
2. Replace placeholder section paragraphs and FAQ answers with reviewed article copy.
3. Manually add the finished `Guide` object to `data/guides.ts`.
4. Confirm the route, internal links, and mobile layout.
5. Run:

```bash
npm run typecheck
npm run build
```

### Checklist Before Publishing

The checklist lives in `lib/content/editorial-checklist.ts` and is included in each promotion preview:

- Calculator or internal link included.
- Practical flooring advice included.
- Disclaimer included.
- No unsupported claims.
- No fake product or manufacturer claims.
- FAQ included.
- Title and meta description reviewed.
- Mobile readability reviewed.
- Live route checked after promotion.

Promotion remains manual by design. There is no auto-publishing, no database write, and no AI API call.

## Phase 4 Local Editorial QA

Phase 4 adds a local QA scanner for promoted guide snippets. It checks the reviewed promotion files before a human manually adds anything to live guide data.

### When To Run QA

Run QA after creating or editing a file in `content/promoted/` and before manually copying approved content into `data/guides.ts`.

### Run All QA

```bash
npm run qa:promoted
```

This scans every `*.guide-snippet.ts` file in `content/promoted/`.

### Run QA For One Slug

```bash
npm run qa:promoted -- --slug lvp-waste-percentage
```

This scans one promoted snippet and its matching promotion preview when present.

### Report Location

Markdown reports are saved to:

```bash
content/qa-reports/
```

Each report is a local manual-review artifact. Reports do not publish content and do not modify live guide data.

### PASS, WARN, FAIL

- `PASS` means no critical issues or warnings were found.
- `WARN` means the snippet can continue through review, but a human should inspect the warning before publishing.
- `FAIL` means a critical issue exists, such as TODO placeholders, empty FAQ answers, missing body content, missing links, or duplicate live slug. Resolve failures before manual publishing.

### Manual Publishing Checklist After QA

- Resolve all `FAIL` items.
- Review every `WARN` item.
- Confirm body copy is original and practical.
- Confirm calculator links and internal links are useful.
- Confirm disclaimers are visible and accurate.
- Manually add finished guide data to `data/guides.ts`.
- Run `npm run typecheck` and `npm run build`.
- Check the live route and `/admin/qa` report list.

## Internal Admin UI

The project includes a separate read-only internal dashboard for the editorial workflow:

- `/admin` - Phase status, inventory counts, and workflow overview.
- `/admin/keywords` - Structured keyword/topic data from `data/keywords.ts`.
- `/admin/drafts` - Local draft files from `content/drafts/`.
- `/admin/promoted` - Promotion previews and snippets from `content/promoted/`.
- `/admin/qa` - Local QA report files from `content/qa-reports/` when present.

The admin UI is intentionally separate from the public site shell and is not linked from the public header or footer.

### Current Limitations

- Lightweight single-admin password protection only.
- No write actions.
- No destructive actions.
- No publish buttons.
- No external AI API calls.
- No database.
- No automatic edits to `data/guides.ts`.

### Manual Admin Workflow

Use the dashboard to inspect workflow state, then run the local scripts from the terminal:

```bash
npm run generate:draft
npm run promote:draft -- --slug lvp-waste-percentage
npm run qa:promoted -- --slug lvp-waste-percentage
```

After a promotion preview is generated, manually review the output in `content/promoted/`, replace placeholders with approved content, and only then manually add finished guide data to `data/guides.ts`.

### Deployment Warning

Add deployment-level access controls before exposing `/admin` on a public production domain. Treat the current password protection as a lightweight solo-operator layer.

## Phase 5 Admin Protection

Phase 5 adds lightweight solo-admin protection for the internal dashboard. This is environment-based access control for one operator, not a full SaaS authentication system.

### How It Works

- `middleware.ts` protects `/admin` and all nested dashboard routes.
- Unauthenticated visitors are redirected to `/admin/login`.
- `/admin/login` validates a password on the server only.
- A signed HTTP-only cookie is set after successful login.
- `/admin/logout` clears the session cookie and redirects back to login.
- Public site routes remain accessible.
- Dashboard layouts also validate the session server-side, so protection does not rely only on hidden navigation.

### Required Environment Variables

Set these outside the repo:

```bash
ADMIN_PASSWORD="use-a-long-random-password"
ADMIN_SESSION_SECRET="use-a-separate-long-random-session-secret"
```

Do not prefix these with `NEXT_PUBLIC_`. They must stay server-only and must not be committed.

### How To Log In

1. Set `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` in your local environment or deployment provider.
2. Start the app.
3. Open `/admin/login`.
4. Enter the admin password.
5. Use the logout button in the admin header when finished.

### Deployment Notes

This protection is suitable for a solo internal dashboard, but it is not a replacement for a mature auth system. Before exposing `/admin` on a production domain, strongly consider adding platform-level protection such as Vercel Deployment Protection, Vercel password protection, IP allowlists, or another access-control layer.

Current limits:

- No user accounts.
- No roles.
- No OAuth.
- No password reset.
- No audit log.
- No admin write actions.
- No database-backed sessions.

## Phase 6 Deployment Readiness

Phase 6 adds deployment safety hardening without adding new product features.

### Environment Setup

Start with `.env.example` and set real values outside the repository:

```bash
NEXT_PUBLIC_SITE_URL="https://www.floorcalcpro.net"
ADMIN_PASSWORD="use-a-long-random-password"
ADMIN_SESSION_SECRET="use-a-separate-long-random-session-secret"
```

Never commit real secrets. `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET` must not use `NEXT_PUBLIC_` because they are server-only.

### Local Production Test

Run:

```bash
npm run typecheck
npm run build
npm run start
```

Then check:

- `/`
- `/tools`
- `/guides`
- `/api/health`
- `/sitemap.xml`
- `/robots.txt`
- `/admin/login`

### Deployment Checklist

Use `docs/deployment-checklist.md` before going live. It covers Vercel setup, environment variables, admin login testing, public route smoke tests, sitemap and robots checks, Search Console, Bing Webmaster Tools, and analytics placeholders.

### Security Headers

The app sets basic security headers from `next.config.mjs`:

- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security` in production
- `X-Robots-Tag: noindex, nofollow` for `/admin`

### Admin Protection Notes

The admin dashboard is protected by middleware and a signed HTTP-only cookie. Public SEO routes stay accessible. Before relying on `/admin` in production, add platform-level access controls such as Vercel Deployment Protection, password protection, or IP restrictions.

## Phase 7 Observability Basics

Phase 7 adds lightweight production visibility without adding a database, AI calls, admin writes, or auto-publishing.

### Analytics

Analytics is off by default. The root layout includes `components/analytics/AnalyticsProvider.tsx`, which only loads a script when explicitly configured with public environment variables.

Default:

```bash
NEXT_PUBLIC_ANALYTICS_PROVIDER=none
```

Plausible placeholder:

```bash
NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
```

Google Analytics placeholder:

```bash
NEXT_PUBLIC_ANALYTICS_PROVIDER=google-analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Leave analytics disabled until the privacy and cookie implications are reviewed.

### Health Check

The public health endpoint is:

```bash
/api/health
```

It returns `status`, app name, environment, package version, and timestamp. It does not expose secrets and does not require admin login.

### Admin System Page

The protected admin dashboard includes:

```bash
/admin/system
```

It shows app name, environment, site URL, current timestamp, health route link, analytics mode, and a deployment check list. It does not display secrets.

### Uptime Monitoring

Use `docs/uptime-monitoring.md` to set up an external uptime check against `/api/health`. Suggested tools include Better Stack, UptimeRobot, Vercel logs/status, or a future scheduled GitHub Actions smoke test.

### Post-Deploy Checks

After every deployment:

- Check `/api/health`.
- Check `/`, `/tools`, and `/guides`.
- Check `/sitemap.xml` and `/robots.txt`.
- Confirm `/admin` redirects to `/admin/login` in a private browser.
- Confirm `/admin/system` loads only after login.
- Confirm analytics is disabled unless intentionally configured.

## Phase 8 Post-Deploy Smoke Test

Phase 8 adds a local smoke test script for checking the most important routes after deployment.

### Run Locally

Start the app, then run:

```bash
npm run smoke:test -- --base-url http://localhost:3000
```

### Run Against Production

```bash
npm run smoke:test -- --base-url https://www.floorcalcpro.net
```

or:

```bash
BASE_URL=https://www.floorcalcpro.net npm run smoke:test
```

### Routes Checked

- `/`
- `/tools`
- `/guides`
- `/sitemap.xml`
- `/robots.txt`
- `/api/health`
- `/admin`
- `/admin/login`

### Failure Conditions

The smoke test exits non-zero if a public route fails, `/api/health` is unhealthy, `/admin` is not protected, or `/admin/login` does not load. It does not require an admin password and does not test logged-in admin pages.

## Future Ready Areas

- Programmatic guide generation can extend the keyword and brief layers before reviewed content is promoted into `data/guides.ts`.
- Keyword data can later move from `data/keywords.ts` into a database-backed editorial pipeline.
- Affiliate blocks can extend `components/affiliate/`.
- Ad placements can extend `components/ads/`.
- Lead forms can extend `components/lead-capture/`.
- Dynamic sitemap logic already centralizes published routes.
