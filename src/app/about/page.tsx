import type { Metadata } from "next";
import { Aperture, Sun, BookImage } from "lucide-react";
import GlassPane from "@/components/GlassPane";
import PhotoFrame from "@/components/PhotoFrame";
import CTASection from "@/components/CTASection";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About — Skyglass Studio",
  description:
    "Meet Skyglass Studio: our philosophy, process, and the kit we shoot with.",
};

const principles = [
  {
    icon: Sun,
    title: "Natural light first",
    description:
      "Strobes come out when the room needs them, never before. Most sessions run on window light and open shade.",
  },
  {
    icon: BookImage,
    title: "Documentary honesty",
    description:
      "We direct gently and photograph what actually happens, not a rehearsed version of the day.",
  },
  {
    icon: Aperture,
    title: "Prints that last",
    description:
      "Every delivery is colour-managed for print, not just a bright screen. Files are yours, unwatermarked.",
  },
];

const process = [
  { step: "01", title: "Enquire", description: "Tell us the date, the people, and the feeling you're after." },
  { step: "02", title: "Plan", description: "A short call to walk through timing, locations, and light." },
  { step: "03", title: "Shoot", description: "We stay light on direction and heavy on attention." },
  { step: "04", title: "Deliver", description: "Edited gallery within 5–10 days, prints available on request." },
];

const gear = [
  { label: "Bodies", value: "Leica SL2 · Canon EOS R5 · Fujifilm GFX 100S" },
  { label: "Lenses", value: "35mm f/1.4 · 50mm f/1.2 · 85mm f/1.8 · 100mm macro" },
  { label: "Lighting", value: "Profoto B10, modified with large diffusion" },
  { label: "Film", value: "Kodak Portra 400 for select wedding coverage" },
];

export default function AboutPage() {
  const founderPhoto = photos.find((p) => p.id === "p17")!;

  return (
    <>
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <GlassPane rounded="rounded-[1.75rem]" className="mx-auto w-full max-w-sm p-2.5 lg:mx-0">
            <PhotoFrame photo={founderPhoto} className="rounded-[1.4rem]" showCaption={false} />
          </GlassPane>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
              About the studio
            </p>
            <h1 className="mt-2 text-balance font-display text-4xl font-medium text-ink-900 sm:text-5xl">
              Built around light, not equipment.
            </h1>
            <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-ink-700 sm:text-lg">
              Skyglass started in 2014 as a one-person portrait practice
              working out of a converted glasshouse studio, and has grown
              into a small team covering portraits, weddings, and editorial
              work. The brief has stayed the same throughout: chase good
              light, stay out of the way, and leave people with images that
              actually look like their life.
            </p>
            <p className="mt-4 max-w-lg text-balance text-base leading-relaxed text-ink-700">
              We shoot a limited number of weddings each season and keep
              portrait sessions unhurried, so the work stays considered
              rather than rushed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">How we work</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }) => (
              <GlassPane key={title} className="p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 font-display text-lg text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{description}</p>
              </GlassPane>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">From enquiry to delivery</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, description }) => (
              <GlassPane key={step} className="p-6">
                <span className="font-mono text-xs text-sky-600">{step}</span>
                <h3 className="mt-2 font-display text-lg text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{description}</p>
              </GlassPane>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <GlassPane tone="soft" className="p-6 sm:p-8">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
              In the bag
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {gear.map(({ label, value }) => (
                <div key={label} className="border-t border-sky-200/70 pt-3">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-ink-500">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-ink-900">{value}</dd>
                </div>
              ))}
            </dl>
          </GlassPane>
        </div>
      </section>

      <CTASection />
    </>
  );
}
