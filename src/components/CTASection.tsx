import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlassPane from "./GlassPane";

export default function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-sky-400 to-sky-600" />
        <div
          className="sky-blob absolute -left-10 -top-16 h-56 w-56 bg-white/30"
          aria-hidden="true"
        />
        <GlassPane
          tone="soft"
          rounded="rounded-[2rem]"
          className="relative flex flex-col items-start gap-6 border-white/40 px-8 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-14"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-white/80">
              Limited autumn slots
            </p>
            <h2 className="mt-2 max-w-md text-balance font-display text-3xl font-medium text-white sm:text-4xl">
              Let&apos;s find your light.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-sky-700 shadow-lg transition hover:bg-sky-50"
          >
            Start the conversation
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </GlassPane>
      </div>
    </section>
  );
}
