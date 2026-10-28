import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <section className="rounded-2xl bg-gradient-to-r from-emerald-700 to-cyan-700 p-8 text-white shadow-lg lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-100">
            AquaVeris ActionIQ
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            Turn water-quality measurements into understandable risk insights and
            practical next steps.
          </h1>
          <p className="mt-4 max-w-3xl text-base text-emerald-50 md:text-lg">
            This Phase 0 release establishes the product foundation: a dependable
            frontend architecture, clear public-health messaging, and an
            implementation-ready structure for future modules.
          </p>
          <div className="mt-6">
            <Link
              href="/app/dashboard"
              className="inline-flex rounded-md bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm hover:bg-emerald-50"
            >
              Open ActionIQ workspace
            </Link>
          </div>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Section title="What AquaVeris will do">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Ingest water sample measurements and metadata</li>
              <li>• Explain contamination risk in plain language</li>
              <li>• Suggest practical prevention and follow-up actions</li>
            </ul>
          </Section>
          <Section title="Why this matters">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Technical reports are often hard to interpret quickly</li>
              <li>• Early, understandable guidance supports safer decisions</li>
              <li>• Public-health communication must be clear and responsible</li>
            </ul>
          </Section>
          <Section title="Current implementation scope">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Reusable landing + application layout shells</li>
              <li>• Responsive navigation for planned ActionIQ sections</li>
              <li>• Placeholder pages for iterative feature delivery</li>
            </ul>
          </Section>
        </div>

        <section
          aria-labelledby="safety-disclaimer-title"
          className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6"
        >
          <h2
            id="safety-disclaimer-title"
            className="text-lg font-semibold text-amber-900"
          >
            Safety disclaimer
          </h2>
          <p className="mt-2 text-sm leading-6 text-amber-900">
            AquaVeris ActionIQ is an educational risk-assessment tool. It does not
            replace certified laboratory testing, official water advisories, or
            professional medical advice.
          </p>
        </section>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Foundation architecture for upcoming phases
          </h2>
          <p className="mt-2 text-slate-600">
            The repository includes dedicated areas for features, shared
            components, and utility code so each upcoming phase can be added in
            small, testable increments without restructuring core foundations.
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
