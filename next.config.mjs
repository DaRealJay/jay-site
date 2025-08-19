// next.config.mjs
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// Looser CSP in dev; strict in prod
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action https://formspree.io",
  "img-src 'self' data: blob:",
  "style-src 'self' 'unsafe-inline'",
  // Dev needs eval (and some inline) for HMR; prod must be strict
  isProd ? "script-src 'self'" : "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  // Dev needs websocket for HMR
  isProd ? "connect-src 'self'" : "connect-src 'self' ws:",
  "object-src 'none'",
  // Only upgrade in prod (breaks localhost over http)
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // HSTS only on HTTPS prod
  ...(isProd
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }]
    : []),
];

export default {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
