import Icon from "./Icon";

/**
 * Brand artwork for the portfolio hero mockup — a built composition rather
 * than a screenshot, in the same register as the homepage hero image.
 */
export default function PortfolioHeroArt() {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 85% 10%, #1C6FD8 0%, #123566 42%, #0B2347 100%)",
      }}
      aria-hidden
    >
      {/* dot field */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(80% 70% at 15% 80%, #000 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(80% 70% at 15% 80%, #000 0%, transparent 100%)",
        }}
      />

      {/* sweeping arcs */}
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M -40 380 Q 260 250 420 40"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.5"
        />
        <path
          d="M -40 440 Q 320 300 520 20"
          fill="none"
          stroke="rgba(245,146,30,0.30)"
          strokeWidth="1.5"
        />
        <circle cx="120" cy="120" r="3" fill="#F5921E" />
        <circle cx="612" cy="404" r="2.5" fill="rgba(255,255,255,0.5)" />
      </svg>

      {/* dashboard panel */}
      <div className="absolute left-[7%] top-[16%] w-[47%] rounded-lg border border-white/15 bg-white/[0.07] p-3 shadow-[0_24px_60px_rgba(4,16,38,0.45)] backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="h-1.5 w-8 rounded-full bg-white/35" />
          <span className="ml-auto h-1.5 w-10 rounded-full bg-white/15" />
        </div>
        <div className="relative mt-3">
          <svg
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M 6 44 L 34 34 L 62 38 L 90 22 L 118 28 L 146 10 L 190 18"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="146" cy="10" r="3" fill="#F5921E" />
          </svg>
          <div className="flex h-[60px] items-end gap-[3px]">
            {[34, 52, 40, 70, 58, 92, 74].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-[2px]"
                style={{
                  height: `${h}%`,
                  background:
                    i === 5
                      ? "linear-gradient(180deg,#F5921E,#DD7E0F)"
                      : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>
          <span className="mt-1 block h-px w-full bg-white/20" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["", "", ""].map((_, i) => (
            <span key={i} className="rounded-sm bg-white/10 px-2 py-2">
              <span className="block h-1 w-8 rounded-full bg-white/40" />
              <span className="mt-1.5 block h-1 w-5 rounded-full bg-white/20" />
            </span>
          ))}
        </div>
      </div>

      {/* phone panel */}
      <div className="absolute bottom-[10%] right-[9%] w-[16%] rounded-[0.9rem] border border-white/20 bg-white/[0.1] p-1.5 shadow-[0_24px_60px_rgba(4,16,38,0.5)] backdrop-blur-sm">
        <span className="mx-auto mb-1.5 block h-1 w-6 rounded-full bg-white/30" />
        <div className="rounded-[0.6rem] bg-ink2/80 p-2">
          <span className="block h-1.5 w-10 rounded-full bg-accent" />
          <span className="mt-2 block h-1 w-full rounded-full bg-white/25" />
          <span className="mt-1.5 block h-1 w-3/4 rounded-full bg-white/15" />
          <span className="mt-3 block h-4 w-full rounded-md bg-gradient-to-r from-accent to-accentDim" />
        </div>
      </div>

      {/* glass callouts */}
      <div className="absolute left-[5%] top-[7%] flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.09] px-3 py-2 backdrop-blur-md">
        <Icon name="bulb" className="h-3.5 w-3.5 text-accent" />
        <span className="text-[0.625rem] font-semibold leading-tight text-white/85">
          Design · Build · Ship
        </span>
      </div>

      <div className="absolute bottom-[14%] left-[12%] flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.09] px-3 py-2 backdrop-blur-md">
        <Icon name="cloud" className="h-3.5 w-3.5 text-accent" />
        <span className="text-[0.625rem] font-semibold leading-tight text-white/85">
          Built to scale
        </span>
      </div>

      <div className="absolute right-[8%] top-[13%] flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.09] px-3 py-2 backdrop-blur-md">
        <Icon name="shield" className="h-3.5 w-3.5 text-accent" />
        <span className="text-[0.625rem] font-semibold leading-tight text-white/85">
          Secure by default
        </span>
      </div>

      <span className="absolute bottom-[6%] left-[7%] font-script text-sm text-white/70 md:text-base">
        Inspired to Innovate
      </span>
    </div>
  );
}
