import GlassPane from "./GlassPane";
import ApertureMark from "./ApertureMark";

export default function Testimonial() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <GlassPane tone="strong" className="relative overflow-hidden px-6 py-12 text-center sm:px-14 sm:py-16">
          <ApertureMark className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 text-sky-200/60" />
          <p className="mx-auto max-w-2xl text-balance font-display text-2xl leading-relaxed text-ink-900 sm:text-3xl">
            &ldquo;They photographed our wedding like they&apos;d known us for
            years — quiet, unobtrusive, and somehow everywhere the light
            was best.&rdquo;
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-sky-700">
            Anika &amp; Rohan — Married April 2026
          </p>
        </GlassPane>
      </div>
    </section>
  );
}
