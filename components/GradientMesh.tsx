type GradientMeshProps = {
  variant?: "navy" | "light";
  className?: string;
  /**
   * Fade the blobs out towards the bottom edge. For sections that run
   * straight into the next one with no divider: without it the section's
   * overflow clip cuts a blob off in a hard horizontal line.
   */
  fadeBottom?: boolean;
};

const FADE_BOTTOM = "linear-gradient(to bottom, #000 0%, #000 60%, transparent 100%)";

export default function GradientMesh({ variant = "light", className = "", fadeBottom = false }: GradientMeshProps) {
  const blobs =
    variant === "navy"
      ? [
          { color: "rgba(28,111,216,0.35)", top: "-10%", left: "8%", size: "38vw" },
          { color: "rgba(245,146,30,0.18)", top: "20%", left: "68%", size: "32vw" },
          { color: "rgba(20,60,130,0.4)", top: "55%", left: "30%", size: "40vw" },
        ]
      : [
          { color: "rgba(28,111,216,0.14)", top: "-8%", left: "5%", size: "34vw" },
          { color: "rgba(245,146,30,0.12)", top: "15%", left: "70%", size: "30vw" },
          { color: "rgba(28,111,216,0.10)", top: "60%", left: "20%", size: "36vw" },
        ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={fadeBottom ? { maskImage: FADE_BOTTOM, WebkitMaskImage: FADE_BOTTOM } : undefined}
      aria-hidden="true"
    >
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: b.color,
          }}
        />
      ))}
    </div>
  );
}
