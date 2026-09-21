/** Thin outline icons used by the hero's capability strip and floating cards. */

type IconProps = { className?: string };

const base = "h-full w-full";

export function DevicesIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="13" height="11" rx="1.6" />
      <path d="M6 19h6" />
      <rect x="16.5" y="9" width="5.5" height="11" rx="1.4" />
    </svg>
  );
}

export function CloudIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7.2 19h9.9a3.9 3.9 0 0 0 .5-7.77 5.6 5.6 0 0 0-10.83-1.4A4.2 4.2 0 0 0 7.2 19Z" />
    </svg>
  );
}

export function ShieldIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3 4.8 5.9v5.2c0 4.3 3 8.3 7.2 9.7 4.2-1.4 7.2-5.4 7.2-9.7V5.9Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  );
}

export function ChipIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.6" />
      <rect x="10.4" y="10.4" width="3.2" height="3.2" rx="0.6" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
    </svg>
  );
}

export function GrowthIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 19h16" />
      <rect x="6" y="12" width="3" height="5" rx="0.7" />
      <rect x="11" y="8.5" width="3" height="8.5" rx="0.7" />
      <rect x="16" y="5" width="3" height="12" rx="0.7" />
    </svg>
  );
}

export function BulbIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9.2 17.2a6 6 0 1 1 5.6 0v1.6a1.2 1.2 0 0 1-1.2 1.2h-3.2a1.2 1.2 0 0 1-1.2-1.2Z" />
      <path d="M9.6 17.4h4.8" />
    </svg>
  );
}
