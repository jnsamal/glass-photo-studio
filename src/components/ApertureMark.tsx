interface ApertureMarkProps {
  className?: string;
  blades?: number;
}

/**
 * A minimal aperture-blade glyph — the studio's signature mark. Built from
 * `blades` rotated quadrilaterals around a shared center, echoing how a
 * camera iris opens and closes.
 */
export default function ApertureMark({ className, blades = 7 }: ApertureMarkProps) {
  const paths = Array.from({ length: blades }).map((_, i) => {
    const angle = (360 / blades) * i;
    return (
      <path
        key={i}
        d="M50 50 L50 6 A44 44 0 0 1 88 28 Z"
        transform={`rotate(${angle} 50 50)`}
        opacity={0.92}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" strokeWidth={1} opacity={0.35} />
      <g>{paths}</g>
      <circle cx="50" cy="50" r="12" strokeWidth={1.2} />
    </svg>
  );
}
