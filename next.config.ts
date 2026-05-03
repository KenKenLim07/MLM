import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

function isPrivateIpv4(ip: string): boolean {
  return (
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(ip)
  );
}

function getAutoAllowedDevOrigins(): string[] {
  const nets = networkInterfaces();
  const ips = new Set<string>(["localhost", "127.0.0.1"]);

  for (const entries of Object.values(nets)) {
    if (!entries) continue;
    for (const net of entries) {
      if (net.family === "IPv4" && !net.internal && isPrivateIpv4(net.address)) {
        ips.add(net.address);
      }
    }
  }

  const fromEnv =
    process.env.ALLOWED_DEV_ORIGINS?.split(",")
      .map((h) => h.trim())
      .filter(Boolean) ?? [];
  for (const host of fromEnv) ips.add(host);

  return [...ips];
}

const nextConfig: NextConfig = {
  // Dev-only origin allowlist used by Next.js to protect /_next/* in dev.
  // This auto-includes localhost + current private LAN IPv4 addresses.
  allowedDevOrigins: getAutoAllowedDevOrigins(),
};

export default nextConfig;
