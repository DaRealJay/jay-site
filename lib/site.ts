// lib/site.ts
export const site = {
  brand: "Webflix",
  url: "jay-site-nine.vercel.app", // after deploy: "https://YOUR-LIVE-DOMAIN"

  seo: {
    title: "Jay – Modern Web Design",
    description: "Fast, clean websites that convert. SEO + performance baked in.",
    // Safe default so you don't need an image yet; later drop /public/og-image.png and change this:
    ogImage: "/next.svg",
  },

  nav: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    heading: "Fast, clean websites that convert",
    subheading:
      "No bloat. Clear copy. SEO & performance baked in. Built with Next.js + Tailwind and deployed on Vercel.",
    primaryCta: { label: "Get a quote", href: "#contact" },
    secondaryCta: { label: "See features", href: "#features" },
  },

  features: [
    { title: "Performance", desc: "Image optimization, minimal JS, Lighthouse 90+ target." },
    { title: "SEO-ready", desc: "Titles, meta, OpenGraph, sitemap, robots configured." },
    { title: "Responsive", desc: "Looks great on mobile, tablet, and desktop." },
    { title: "Easy edits", desc: "Clear content structure. Optional CMS if needed." },
  ],

  testimonials: [
    { name: "Sam – Barber", quote: "Site looks crisp and loads instantly on 4G. Bookings up 20%." },
    { name: "Mia – Trainer", quote: "Clear sections and easy pricing — clients stopped asking basic questions." },
  ],

  pricing: [
    { name: "Starter", price: "£149", bullets: ["1 page", "Contact form", "SEO basics", "1 revision"] },
    { name: "Business", price: "£399", bullets: ["Up to 5 pages", "Analytics", "Animations", "2 revisions"] },
    { name: "Pro", price: "£799", bullets: ["Up to 8 pages + blog", "Email capture", "Advanced SEO", "3 revisions"] },
  ],

  form: {
    formspreeId: "xovlzjyq", // replace per client
    redirectPath: "/thanks",
  },

  social: [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "GitHub", href: "#" },
  ],
} as const;
