import Image from "next/image";

type LogoProps = {
  className?: string;
  iconHeight?: number;
  /** Tighter type for tight spaces like the floating navbar. */
  compact?: boolean;
};

export default function Logo({ className = "", iconHeight = 42, compact = false }: LogoProps) {
  return (
    <span className={`inline-flex shrink-0 items-center ${compact ? "gap-3" : "gap-3.5"} ${className}`}>
      <span className="relative flex shrink-0 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full blur-md"
          style={{
            background:
              "radial-gradient(circle, rgba(245,196,60,0.45) 0%, rgba(245,196,60,0) 70%)",
          }}
          aria-hidden="true"
        />
        <Image
          src="/moriva-icon.png"
          alt="Moriva Technologies logo"
          width={Math.round(iconHeight * 0.81)}
          height={iconHeight}
          style={{ height: iconHeight, width: "auto" }}
          className="relative"
          priority
        />
      </span>

      <span
        className={`w-px shrink-0 self-center opacity-60 ${compact ? "h-8" : "h-9 sm:h-10"}`}
        style={{
          background:
            "linear-gradient(180deg, #F5C43C 0%, #1C6FD8 100%)",
        }}
        aria-hidden="true"
      />

      <span className={`flex flex-col justify-center whitespace-nowrap ${compact ? "leading-[1.05]" : "leading-[1.15]"}`}>
        <span className={`font-sora font-800 tracking-tight text-white ${compact ? "text-[1.05rem]" : "text-lg sm:text-xl"}`}>
          Moriva
        </span>
        <span className="mt-0.5 inline-flex items-center gap-1.5">
          <span className={`font-semibold tracking-[0.2em] text-accent ${compact ? "text-[8.5px]" : "text-[9px] sm:text-[10px]"}`}>
            TECHNOLOGIES LLP
          </span>
          <span
            className="h-[3px] flex-1 max-w-[26px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #F5C43C 0%, #1C6FD8 100%)",
            }}
            aria-hidden="true"
          />
        </span>
        <span className={`font-script text-accent2 ${compact ? "text-[13px]" : "-mt-0.5 text-sm sm:text-base"}`}>
          Inspired to Innovate
        </span>
      </span>
    </span>
  );
}
