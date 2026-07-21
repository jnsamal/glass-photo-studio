import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PhotoFrame from "./PhotoFrame";
import GlassPane from "./GlassPane";
import { featuredPhotos } from "@/lib/photos";

export default function FeaturedStrip() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
              Selected frames
            </p>
            <h2 className="mt-2 text-balance font-display text-3xl font-medium text-ink-900 sm:text-4xl">
              Recent work
            </h2>
          </div>
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:text-sky-800"
          >
            View full gallery
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {featuredPhotos.map((photo) => (
            <GlassPane key={photo.id} rounded="rounded-2xl" className="p-1.5">
              <PhotoFrame photo={photo} className="rounded-xl" />
            </GlassPane>
          ))}
        </div>
      </div>
    </section>
  );
}
