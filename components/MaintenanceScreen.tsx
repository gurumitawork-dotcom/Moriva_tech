/**
 * A coded screen for maintenance & support instead of a stock photo: a monthly
 * care report — the site watched, updates applied, backups checked, and small
 * requests handled and written down by the team that built it. Sample content
 * only.
 */

const CHECKS = [
  { label: "Uptime monitored", value: "24/7" },
  { label: "Security updates", value: "14 applied" },
  { label: "Backups verified", value: "30 of 30" },
  { label: "Broken links", value: "0 found" },
];

const REQUESTS = [
  { id: "#142", title: "Update opening hours on contact page", when: "Today", time: "2 h" },
  { id: "#141", title: "Contact form not sending on Safari", when: "Mon", time: "Same day" },
  { id: "#140", title: "Add new team member profile", when: "Last week", time: "1 day" },
  { id: "#139", title: "Framework security patch applied", when: "Last week", time: "Same day" },
  { id: "#138", title: "Speed up image loading on gallery", when: "2 weeks ago", time: "2 days" },
];

function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-[0.75em] w-[0.75em]">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

/** Full screen for the browser frame. */
export default function MaintenanceScreen() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex flex-col gap-[0.9em] bg-gradient-to-br from-ink2 to-[#0b2a57] p-[1.2em] text-[clamp(7.5px,1.9cqw+0.5px,14px)]"
    >
      <div className="flex items-center justify-between gap-[1em]">
        <div className="min-w-0">
          <p className="text-[0.72em] font-semibold uppercase tracking-[0.16em] text-accent">Care report · this month</p>
          <p className="mt-[0.1em] truncate font-sora text-[1.3em] font-800 text-white">Everything still working.</p>
        </div>
        <span className="flex shrink-0 items-center gap-[0.4em] rounded-full bg-emerald-400/15 px-[0.7em] py-[0.2em] text-[0.8em] font-semibold text-emerald-300">
          <span className="h-[0.5em] w-[0.5em] rounded-full bg-emerald-400" />
          Healthy
        </span>
      </div>

      <div className="grid grid-cols-4 gap-[0.6em]">
        {CHECKS.map((c) => (
          <div key={c.label} className="min-w-0 rounded-[0.7em] border border-white/10 bg-white/[0.04] p-[0.7em]">
            <span className="flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full bg-emerald-400 text-ink">
              <Tick />
            </span>
            <span className="mt-[0.5em] block truncate font-sora text-[1.05em] font-800 text-white">{c.value}</span>
            <span className="block truncate text-[0.75em] text-white/50">{c.label}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.9em] pr-[24%]">
        <div className="flex items-center justify-between">
          <span className="text-[0.72em] font-semibold uppercase tracking-[0.16em] text-white/45">Your requests</span>
          <span className="text-[0.75em] text-white/45">Every change documented</span>
        </div>
        <ul className="mt-[0.4em] divide-y divide-white/10">
          {REQUESTS.map((r) => (
            <li key={r.id} className="flex items-center gap-[0.6em] py-[0.5em]">
              <span className="shrink-0 font-mono text-[0.78em] text-white/40">{r.id}</span>
              <span className="min-w-0 flex-1 truncate text-white/85">{r.title}</span>
              <span className="shrink-0 whitespace-nowrap text-[0.75em] text-white/45">{r.when}</span>
              <span className="shrink-0 rounded-full bg-emerald-400/15 px-[0.55em] py-[0.05em] text-[0.72em] font-semibold text-emerald-300">
                Done
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Narrow version for the phone overlay: the latest request, closed. */
export function MaintenancePhoneScreen() {
  return (
    <div aria-hidden className="absolute inset-0 flex flex-col justify-end gap-[0.6em] bg-gradient-to-b from-ink2 to-[#0b2a57] p-[0.5em] pb-[2.9em] text-[5.5px] text-white/85">
      <div className="rounded-[0.8em] border border-white/10 bg-white/[0.06] p-[0.8em]">
        <span className="font-mono text-white/45">#142</span>
        <p className="mt-[0.2em] leading-snug">Update opening hours</p>
        <span className="mt-[0.4em] inline-flex items-center gap-[0.3em] rounded-full bg-emerald-400/20 px-[0.6em] py-[0.1em] font-semibold text-emerald-300">
          <Tick /> Done · 2 h
        </span>
      </div>
    </div>
  );
}
