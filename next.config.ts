import type { NextConfig } from "next";

/**
 * Dev-only: LAN URLs must match this list or `/_next/*` returns 403 and React won’t hydrate.
 * Use the real IP in the address bar (e.g. 192.168.68.46), not `0.0.0.0`.
 * `.env.local`: ALLOWED_DEV_ORIGINS=192.168.68.46
 */
const allowedDevOrigins =
  process.env.ALLOWED_DEV_ORIGINS?.split(",")
    .map((h) => h.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  ...(allowedDevOrigins.length > 0 ? { allowedDevOrigins } : {}),
};

export default nextConfig;
