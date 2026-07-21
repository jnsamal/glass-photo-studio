import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Skyglass Studio",
  description:
    "Browse portrait, wedding, editorial, landscape, and product work from Skyglass Studio.",
};

export default function GalleryPage() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-wider text-sky-700">
          The gallery
        </p>
        <h1 className="mt-2 max-w-xl text-balance font-display text-4xl font-medium text-ink-900 sm:text-5xl">
          Frames from recent work
        </h1>
        <p className="mt-4 max-w-lg text-balance text-base leading-relaxed text-ink-700">
          Filter by category to see the range, or click any frame for the
          full image and shooting details.
        </p>

        <div className="mt-10">
          <GalleryClient />
        </div>
      </div>
    </section>
  );
}
