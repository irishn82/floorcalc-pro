import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/seo/metadata";
import packageJson from "../../../package.json";

export function GET() {
  return NextResponse.json({
    status: "ok",
    app: siteConfig.name,
    environment: process.env.NODE_ENV ?? "unknown",
    version: packageJson.version,
    timestamp: new Date().toISOString()
  });
}
