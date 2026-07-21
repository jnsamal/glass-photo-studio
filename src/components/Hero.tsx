import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import GlassPane from "./GlassPane";
import PhotoFrame from "./PhotoFrame";
import ApertureMark from "./ApertureMark";
import { photos } from "@/lib/photos";

export default function Hero() {
  const [primary, secondary] = photos;

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:px-10">
      {/* ambient sky blobs */}
      <div
        className="sky-blob animate-drift left-[-8%] top-[-6%] h-72 w-72 bg-sky-300/70 sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="sky-blob animate-drift right-[-10%] top-[18%] h-64 w-64 bg-sky-400/40 [animation-delay:3s] sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="animate-rise">
          <GlassPane
            tone="soft"
            rounded="rounded-full"
            className="inline-flex items-center gap-2 px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-600" strokeWidth={1.8} />
            <span className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
              Now booking — Autumn sessions
            </span>
          </GlassPane>

          <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Portraits, weddings, and stories, held in natural light.
          </h1>

          <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-ink-700 sm:text-lg">
            Skyglass is a small studio built around available light, honest
            moments, and prints you&apos;ll still want on the wall in twenty
            years.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-sky-500 to-sky-600 px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_32px_-14px_rgba(46,134,190,0.75)] transition hover:from-sky-400 hover:to-sky-500"
            >
              View the gallery
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="glass inline-flex items-center rounded-full px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:bg-white/70"
            >
              Book a session
            </Link>
          </div>

          <dl className="mt-10 grid max-w-sm grid-cols-3 gap-4 border-t border-sky-200/70 pt-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-sky-700">
                Sessions
              </dt>
              <dd className="mt-1 font-display text-xl text-ink-900">450+</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-sky-700">
                Since
              </dt>
              <dd className="mt-1 font-display text-xl text-ink-900">2014</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-sky-700">
                Format
              </dt>
              <dd className="mt-1 font-display text-xl text-ink-900">Film + digital</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms] lg:max-w-none">
          <ApertureMark className="pointer-events-none absolute -right-6 -top-8 h-20 w-20 text-sky-300/70 sm:-right-10 sm:-top-10 sm:h-28 sm:w-28" />

          <div className="relative">
            <GlassPane
              tone="strong"
              rounded="rounded-[1.75rem]"
              className="relative z-10 ml-10 -rotate-2 p-2.5 sm:ml-16"
            >
              <PhotoFrame photo={primary} showCaption priority className="rounded-[1.4rem]" />
            </GlassPane>

            <GlassPane
              rounded="rounded-[1.75rem]"
              className="absolute -bottom-8 -left-2 z-0 w-2/3 rotate-3 p-2.5 sm:-bottom-10 sm:-left-4"
            >
              <PhotoFrame
                photo={secondary}
                showCaption={false}
                className="rounded-[1.4rem]"
                sizes="40vw"
              />
            </GlassPane>
          </div>
        </div>
      </div>
    </section>
  );
}
