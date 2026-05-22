import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Admin",
  description: "Internal FloorCalc Pro editorial workflow dashboard.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminRouteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
