// next.config.mjs
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// CSP: dev is looser for HMR; prod is strict but allows required inline scripts
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action https://formspree.io",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  // Next.js needs inline bits; allow in prod. Dev also needs eval + ws.
  isProd ? "script-src 'self' 'unsafe-inline'" : "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  // Allow Speed Insights + dev websocket
  isProd ? "connect-src 'self' https://vitals.vercel-insights.com"
         : "connect-src 'self' ws: https://vitals.vercel-insights.com",
  "object-src 'none'",
  // Only in prod (breaks http://localhost)
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // HSTS only on HTTPS in production
  ...(isProd ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }] : []),
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
