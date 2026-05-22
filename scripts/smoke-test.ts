type SmokeResult = {
  label: string;
  path: string;
  passed: boolean;
  detail: string;
};

const publicRoutes = ["/", "/tools", "/guides", "/sitemap.xml", "/robots.txt"];

function getArgValue(name: string) {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));

  if (inline) {
    return inline.slice(prefix.length);
  }

  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) {
    return process.argv[index + 1];
  }

  const positional = process.argv.slice(2).find((arg) => !arg.startsWith("-"));
  const npmConfigValue = process.env[`npm_config_${name.replaceAll("-", "_")}`];

  if (npmConfigValue && npmConfigValue !== "true") {
    return npmConfigValue;
  }

  return positional;
}

function normalizeBaseUrl(input: string) {
  return input.replace(/\/+$/, "");
}

function buildUrl(baseUrl: string, path: string) {
  return `${baseUrl}${path}`;
}

async function fetchWithTimeout(url: string, init: RequestInit = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function checkStatus(baseUrl: string, path: string): Promise<SmokeResult> {
  try {
    const response = await fetchWithTimeout(buildUrl(baseUrl, path), { redirect: "follow" });

    return {
      label: "Public route",
      path,
      passed: response.status === 200,
      detail: `Expected 200, received ${response.status}.`
    };
  } catch (error) {
    return {
      label: "Public route",
      path,
      passed: false,
      detail: error instanceof Error ? error.message : "Request failed."
    };
  }
}

async function checkHealth(baseUrl: string): Promise<SmokeResult> {
  const path = "/api/health";

  try {
    const response = await fetchWithTimeout(buildUrl(baseUrl, path));
    const payload = (await response.json()) as { status?: string; app?: string };
    const passed = response.status === 200 && payload.status === "ok" && payload.app === "FloorCalc Pro";

    return {
      label: "Health route",
      path,
      passed,
      detail: `Expected 200 with status ok, received ${response.status} and status ${payload.status ?? "missing"}.`
    };
  } catch (error) {
    return {
      label: "Health route",
      path,
      passed: false,
      detail: error instanceof Error ? error.message : "Health request failed."
    };
  }
}

async function checkAdminProtected(baseUrl: string): Promise<SmokeResult> {
  const path = "/admin";

  try {
    const response = await fetchWithTimeout(buildUrl(baseUrl, path), { redirect: "manual" });
    const location = response.headers.get("location") ?? "";
    const redirectsToLogin = [301, 302, 303, 307, 308].includes(response.status) && location.includes("/admin/login");
    const requiresAuth = response.status === 401 || response.status === 403;
    const passed = redirectsToLogin || requiresAuth;

    return {
      label: "Admin protection",
      path,
      passed,
      detail: redirectsToLogin
        ? `Redirected to ${location}.`
        : requiresAuth
          ? `Returned ${response.status}.`
          : `Expected redirect/auth block, received ${response.status}.`
    };
  } catch (error) {
    return {
      label: "Admin protection",
      path,
      passed: false,
      detail: error instanceof Error ? error.message : "Admin protection request failed."
    };
  }
}

async function checkAdminLogin(baseUrl: string): Promise<SmokeResult> {
  const path = "/admin/login";

  try {
    const response = await fetchWithTimeout(buildUrl(baseUrl, path), { redirect: "manual" });

    return {
      label: "Admin login",
      path,
      passed: response.status === 200,
      detail: `Expected 200, received ${response.status}.`
    };
  } catch (error) {
    return {
      label: "Admin login",
      path,
      passed: false,
      detail: error instanceof Error ? error.message : "Admin login request failed."
    };
  }
}

function printResult(result: SmokeResult) {
  const status = result.passed ? "PASS" : "FAIL";
  console.log(`${status} ${result.label} ${result.path} - ${result.detail}`);
}

async function main() {
  const baseUrl = normalizeBaseUrl(getArgValue("base-url") || process.env.BASE_URL || "http://localhost:3000");
  console.log(`Running FloorCalc Pro smoke test against ${baseUrl}`);

  const results: SmokeResult[] = [];

  for (const path of publicRoutes) {
    results.push(await checkStatus(baseUrl, path));
  }

  results.push(await checkHealth(baseUrl));
  results.push(await checkAdminProtected(baseUrl));
  results.push(await checkAdminLogin(baseUrl));

  for (const result of results) {
    printResult(result);
  }

  const failures = results.filter((result) => !result.passed);
  console.log(`${results.length - failures.length}/${results.length} checks passed.`);

  if (failures.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
