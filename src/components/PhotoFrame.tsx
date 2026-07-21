"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import clsx from "clsx";
import type { Photo } from "@/lib/photos";

interface PhotoFrameProps {
  photo: Photo;
  sizes?: string;
  priority?: boolean;
  showCaption?: boolean;
  className?: string;
  onOpen?: () => void;
}

export default function PhotoFrame({
  photo,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  showCaption = true,
  className,
  onOpen,
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);

  const content = (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-2xl bg-sky-100",
        photo.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]",
        className
      )}
    >
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-sky-200 via-sky-100 to-white text-sky-600">
          <Camera className="h-7 w-7" strokeWidth={1.4} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-sky-600/80">
            {photo.category}
          </span>
        </div>
      ) : (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/0 to-ink-900/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {showCaption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-white/90 sm:text-[11px]">
            {photo.settings}
          </p>
          <p className="mt-0.5 text-xs text-white/70 sm:text-sm">{photo.camera}</p>
        </div>
      )}
    </div>
  );

  if (onOpen) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`Open ${photo.alt} in the lightbox`}
      >
        {content}
      </button>
    );
  }

  return content;
}
