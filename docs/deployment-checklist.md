# FloorCalc Pro Deployment Checklist

Use this checklist before exposing the site on a public production domain.

## Vercel Setup

- Create a new Vercel project from the repository.
- Use the standard Next.js framework preset.
- Confirm the build command is `npm run build`.
- Confirm the install command is `npm install`.
- Set the production domain.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL.

## Required Environment Variables

Set these in the deployment provider, not in the repository:

- `NEXT_PUBLIC_SITE_URL`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`

Use a long random value for `ADMIN_PASSWORD`. Use a separate long random value for `ADMIN_SESSION_SECRET`.

## Pre-Deploy Checks

Run locally:

```bash
npm run typecheck
npm run build
```

Optional local production test:

```bash
npm run start
```

## Public Route Smoke Test

After deployment, check:

- `/`
- `/tools`
- `/tools/flooring-square-footage-calculator`
- `/guides`
- `/guides/how-much-flooring-do-i-need`
- `/api/health`

Confirm public pages load without requiring admin login.

## Admin Protection Test

- Open `/admin` in a private browser window.
- Confirm it redirects to `/admin/login`.
- Log in with `ADMIN_PASSWORD`.
- Confirm `/admin`, `/admin/keywords`, `/admin/drafts`, `/admin/promoted`, and `/admin/qa` load.
- Click logout.
- Confirm `/admin` requires login again.

Do not expose `/admin` without protection. Add platform-level protection such as Vercel Deployment Protection, password protection, or IP restrictions before relying on the admin dashboard in production.

## SEO Files

Check:

- `/sitemap.xml`
- `/robots.txt`

Confirm the sitemap uses the production domain and public routes are indexable. Confirm admin routes are noindex/nofollow.

## Search Console

- Add the production domain to Google Search Console.
- Submit `/sitemap.xml`.
- Inspect the home page and one calculator page.
- Watch for crawl or indexing errors after deployment.

## Bing Webmaster Tools

- Add the production domain to Bing Webmaster Tools.
- Submit `/sitemap.xml`.
- Review crawl and index coverage after deployment.

## Analytics Placeholder

Analytics is not configured yet. When added later, use a privacy-aware setup and document where scripts are loaded.

## Final Manual Content Gate

- Do not publish generated drafts directly.
- Run local QA for promoted snippets before manually adding guide data.
- Keep admin write actions disabled until a stronger auth and review model exists.
