"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import PhotoFrame from "./PhotoFrame";
import GlassPane from "./GlassPane";
import Lightbox from "./Lightbox";
import { categories, photos, type Category } from "@/lib/photos";

export default function GalleryClient() {
  const [active, setActive] = useState<Category | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? photos : photos.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active === cat
                ? "glass glass-strong text-ink-900"
                : "text-ink-700 hover:bg-white/40"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-2 gap-3 sm:mt-10 sm:gap-4 lg:columns-3">
        {filtered.map((photo, i) => (
          <GlassPane
            key={photo.id}
            rounded="rounded-2xl"
            className="mb-3 break-inside-avoid p-1.5 sm:mb-4"
          >
            <PhotoFrame
              photo={photo}
              className="rounded-xl"
              onOpen={() => setLightboxIndex(i)}
            />
          </GlassPane>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-500">
          No frames in this category yet.
        </p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
