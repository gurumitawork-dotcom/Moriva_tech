export type IconName =
  | "code"
  | "phone"
  | "cloud"
  | "shield"
  | "bot"
  | "design"
  | "gear"
  | "support"
  | "bulb"
  | "team"
  | "handshake"
  | "headset";

type IconProps = {
  name: IconName;
  className?: string;
};

const paths: Record<IconName, React.ReactNode> = {
  code: (
    <path
      d="M9 8L4 12.5L9 17M16 8L21 12.5L16 17"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  phone: (
    <>
      <rect x="8" y="3" width="9" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11.5 18H13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  cloud: (
    <path
      d="M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16 9a4.5 4.5 0 0 1 1 8.9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  shield: (
    <>
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.5 12l1.8 1.8L14.8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  bot: (
    <>
      <rect x="5" y="9" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.2" fill="currentColor" />
      <circle cx="9.5" cy="14" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="14" r="1.2" fill="currentColor" />
    </>
  ),
  design: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6.2" cy="7.2" r="0.7" fill="currentColor" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6M18.4 18.4l-1.6-1.6M7.2 7.2 5.6 5.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  support: (
    <>
      <path
        d="M4 13a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="3" y="13" width="4" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="13" width="4" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 18v1a3 3 0 0 1-3 3h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  bulb: (
    <>
      <path
        d="M9 18h6M10 21h4M8 11a4 4 0 1 1 8 0c0 1.8-1 2.6-1.8 3.4-.6.6-1.2 1.2-1.2 2.1H11c0-.9-.6-1.5-1.2-2.1C9 13.6 8 12.8 8 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M14.5 19c0-2.2-1.1-4-2.8-4.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </>
  ),
  handshake: (
    <path
      d="M3 12l4-4 4 3 3-3 4 4M3 12l3.5 3.5M21 12l-3.5 3.5M8 12l2.5 2.5a1.5 1.5 0 0 0 2.1-2.1L11 10.8M14 12l1.5 1.5a1.5 1.5 0 0 1-2.1 2.1L12 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  headset: (
    <>
      <path
        d="M4 13a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="3" y="13" width="4" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="13" width="4" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {paths[name]}
    </svg>
  );
}
