import { HTMLAttributes } from "react";
import clsx from "clsx";

interface GlassPaneProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "default" | "strong" | "soft";
  edge?: "top" | "bottom" | "none";
  rounded?: string;
}

export default function GlassPane({
  tone = "default",
  edge = "top",
  rounded = "rounded-3xl",
  className,
  children,
  ...props
}: GlassPaneProps) {
  return (
    <div
      className={clsx(
        "glass",
        rounded,
        tone === "strong" && "glass-strong",
        tone === "soft" && "glass-soft",
        edge === "bottom" && "glass-edge-b",
        edge === "none" && "[&::after]:hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
