"use client";

import { useId } from "react";

type RotatingBadgeProps = {
  text: string;
  className?: string;
  size?: number;
  icon?: React.ReactNode;
};

export default function RotatingBadge({
  text,
  className = "",
  size = 96,
  icon,
}: RotatingBadgeProps) {
  const pathId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const repeated = `${text} • ${text} • `;

  return (
    <div
      className={`pointer-events-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[spin_9s_linear_infinite]"
      >
        <defs>
          <path
            id={pathId}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text fontSize="8.2" letterSpacing="1.5" fill="currentColor">
          <textPath href={`#${pathId}`}>{repeated}</textPath>
        </text>
      </svg>
      <span className="relative flex h-9 w-9 items-center justify-center">
        {icon}
      </span>
    </div>
  );
}
