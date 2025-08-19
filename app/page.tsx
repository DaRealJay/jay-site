import { site } from "@/lib/site";
import Image from "next/image";

export default function Home() {
  const formAction = `https://formspree.io/f/${site.form.formspreeId}`;
  const redirectUrl = `${site.url}${site.form.redirectPath}`;

  return (
    <main className="min-h-screen flex flex-col bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur">
        <div className="relative mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <span className="font-bold">{site.brand}</span>

          {/* Desktop nav (config-driven) */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {site.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.href === "#contact" ? "rounded-lg border px-3 py-1.5" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu (no JS) */}
          <details className="md:hidden">
            <summary className="list-none cursor-pointer rounded-lg border px-3 py-1.5 text-sm">
              Menu
            </summary>
            <div className="absolute right-4 mt-2 w-40 rounded-xl border bg-white shadow-lg p-2 flex flex-col text-sm">
              {site.nav.map((item) => (
                <a
                  key={item.label}
                  className="px-3 py-2 rounded-lg hover:bg-neutral-50"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {site.hero.heading}
            </h1>
            <p className="text-neutral-600">{site.hero.subheading}</p>
            <div className="flex gap-3">
              <a
                href={site.hero.primaryCta.href}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white hover:bg-neutral-800"
              >
                {site.hero.primaryCta.label}
              </a>
              <a
                href={site.hero.secondaryCta.href}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold border"
              >
                {site.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Right-hand hero image */}
          <div className="rounded-2xl border border-neutral-200/80 aspect-video w-full overflow-hidden">
            {/* Default to Next logo; swap to /hero.png after you drop a file into /public/hero.png */}
            <Image
              src="/next.svg" // change to "/hero.png" after you add public/hero.png
              alt="Website preview"
              width={1200}
              height={675}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold">Everything you actually need</h2>
          <p className="mt-3 text-neutral-600">Focus on clarity, speed, and conversions.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {site.features.map((i) => (
              <div key={i.title} className="rounded-2xl border border-neutral-200/80 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-neutral-600">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold">Clients get results</h2>
          <p className="mt-3 text-neutral-600">Short, honest outcomes over fluff.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {site.testimonials.map((q) => (
              <figure key={q.name} className="rounded-2xl border border-neutral-200/80 p-6 shadow-sm">
                <blockquote>“{q.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-neutral-500">{q.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold">Simple pricing</h2>
          <p className="mt-3 text-neutral-600">Scope is clear. Delivery is fast.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {site.pricing.map((t) => (
              <div key={t.name} className="rounded-2xl border border-neutral-200/80 p-6 shadow-sm">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mt-2 text-3xl font-extrabold">{t.price}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {t.bullets.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl md:text-4xl font-bold">Ready to launch?</h2>
          <p className="mt-3 text-neutral-600">Tell me your pages, deadline, and any reference sites.</p>

          <form
            action={formAction}
            method="POST"
            className="mt-8 grid gap-4 md:grid-cols-2 rounded-2xl border border-neutral-200/80 p-6 shadow-sm"
          >
            <input type="hidden" name="_subject" value="New website enquiry" />
            <input type="hidden" name="_next" value={redirectUrl} />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-2">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required className="rounded-xl border px-3 py-2 bg-transparent" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="rounded-xl border px-3 py-2 bg-transparent" />
            </div>

            <div className="md:col-span-2 grid gap-2">
              <label htmlFor="message">Project brief</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="rounded-xl border px-3 py-2 bg-transparent"
                placeholder="Pages, features, deadline, examples you like"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-black text-white hover:bg-neutral-800"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/70">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            {site.social.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
