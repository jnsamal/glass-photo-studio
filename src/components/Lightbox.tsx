"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/lib/photos";

interface LightboxProps {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const photo = photos[index];

  const goNext = useCallback(
    () => onNavigate((index + 1) % photos.length),
    [index, photos.length, onNavigate]
  );
  const goPrev = useCallback(
    () => onNavigate((index - 1 + photos.length) % photos.length),
    [index, photos.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <div
        className="glass glass-strong relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl p-3 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-900 shadow-md transition hover:bg-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative flex-1 overflow-hidden rounded-2xl bg-sky-100">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink-900 shadow-md transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink-900 shadow-md transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 px-2 pb-1 pt-3 sm:px-3">
          <div>
            <p className="text-sm text-ink-900">{photo.alt}</p>
            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-sky-700">
              {photo.camera} · {photo.settings}
            </p>
          </div>
          <p className="font-mono text-[11px] text-ink-500">
            {index + 1} / {photos.length}
          </p>
        </div>
      </div>
    </div>
  );
}
