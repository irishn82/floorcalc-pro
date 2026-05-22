import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  isAdminAuthConfigured,
  setAdminSessionCookie,
  validateAdminPassword
} from "@/lib/admin/auth";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "FloorCalc Pro internal admin login.",
  robots: {
    index: false,
    follow: false
  }
};

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    next?: string;
  }>;
};

function sanitizeNextPath(value: FormDataEntryValue | string | undefined | null) {
  const nextPath = typeof value === "string" ? value : "";

  if (
    nextPath.startsWith("/admin") &&
    !nextPath.startsWith("/admin/login") &&
    !nextPath.startsWith("/admin/logout")
  ) {
    return nextPath;
  }

  return "/admin";
}

async function loginAction(formData: FormData) {
  "use server";

  const nextPath = sanitizeNextPath(formData.get("next"));

  if (!isAdminAuthConfigured()) {
    redirect(`/admin/login?error=config&next=${encodeURIComponent(nextPath)}`);
  }

  const password = String(formData.get("password") ?? "");
  const isValid = await validateAdminPassword(password);

  if (!isValid) {
    redirect(`/admin/login?error=invalid&next=${encodeURIComponent(nextPath)}`);
  }

  const cookieStore = await cookies();
  await setAdminSessionCookie(cookieStore);
  redirect(nextPath);
}

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const nextPath = sanitizeNextPath(params.next);
  const isConfigured = isAdminAuthConfigured();

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 px-4 py-12">
      <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-700">Internal Editorial</p>
          <h1 className="mt-3 text-2xl font-black text-slate-950">Admin Login</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter the solo-operator admin password to access the FloorCalc Pro editorial dashboard.
          </p>
        </div>

        {params.error === "invalid" ? (
          <p className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            Invalid password. Try again.
          </p>
        ) : null}

        {params.error === "config" || !isConfigured ? (
          <p className="mt-5 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900">
            Admin auth is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET before logging in.
          </p>
        ) : null}

        <form action={loginAction} className="mt-6 space-y-4">
          <input type="hidden" name="next" value={nextPath} />
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Admin password</span>
            <input
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Log In
          </button>
        </form>
      </section>
    </main>
  );
}
