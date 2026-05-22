import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ADMIN_SESSION_COOKIE, validateAdminSession } from "@/lib/admin/auth";

export default async function ProtectedAdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const isAuthenticated = await validateAdminSession(session);

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return <AdminLayout>{children}</AdminLayout>;
}
