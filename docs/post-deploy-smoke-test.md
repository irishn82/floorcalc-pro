# Post-Deploy Smoke Test

FloorCalc Pro includes a small local smoke test script for checking key public and admin routes after deployment.

## Run Against Localhost

Start the production server:

```bash
npm run build
npm run start
```

Then run:

```bash
npm run smoke:test -- --base-url http://localhost:3000
```

## Run Against A Deployed URL

```bash
npm run smoke:test -- --base-url https://www.floorcalcpro.net
```

You can also use an environment variable:

```bash
BASE_URL=https://www.floorcalcpro.net npm run smoke:test
```

## Routes Checked

- `/`
- `/tools`
- `/guides`
- `/sitemap.xml`
- `/robots.txt`
- `/api/health`
- `/admin`
- `/admin/login`

## What Counts As Failure

The command exits non-zero when a critical check fails:

- A public route does not return HTTP 200.
- `/api/health` does not return HTTP 200 with `status: "ok"`.
- `/admin` does not redirect to `/admin/login` or otherwise require authentication.
- `/admin/login` does not return HTTP 200.

The smoke test does not require an admin password and does not test logged-in admin pages.
