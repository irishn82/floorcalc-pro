# Uptime Monitoring

FloorCalc Pro includes a simple public health endpoint:

```text
/api/health
```

## Healthy Response

A healthy response returns HTTP 200 and JSON like:

```json
{
  "status": "ok",
  "app": "FloorCalc Pro",
  "environment": "production",
  "version": "0.1.0",
  "timestamp": "2026-05-22T00:00:00.000Z"
}
```

The health route does not expose secrets and does not require admin login.

## Suggested Free Monitoring Tools

- Better Stack free uptime checks
- UptimeRobot free monitors
- Vercel built-in deployment status and logs
- GitHub Actions scheduled smoke test, if added later

## What To Monitor

Monitor the production URL:

```text
https://your-domain.example/api/health
```

Recommended check behavior:

- Expect HTTP 200.
- Confirm JSON `status` is `ok`.
- Alert after more than one failed check to avoid noisy transient failures.
- Keep checks lightweight and avoid hitting admin routes.

## Post-Deploy Checks

After deployment:

- Open `/api/health`.
- Confirm the `environment` is `production`.
- Confirm the app version matches the deployed package version.
- Check `/`, `/tools`, `/guides`, `/sitemap.xml`, and `/robots.txt`.
- Confirm `/admin` redirects to `/admin/login`.
- Confirm admin routes are not indexed and are protected by middleware.
