/**
 * A coded screen for the cloud service instead of a photo of a server hall:
 * a deployment dashboard where shipping a change is a routine green pipeline,
 * every release is on record and one click from rollback, and the site stays
 * up — "deployed properly, quiet ever after". Sample content only.
 */

const PIPELINE = ["Push", "Build", "Tests", "Deploy", "Live"];

const DEPLOYS = [
  { msg: "Update pricing page", sha: "a3f9c1e", when: "2 min ago", current: true },
  { msg: "Fix contact form validation", sha: "7be20d4", when: "yesterday" },
  { msg: "Add Hindi translations", sha: "19c4f8a", when: "3 days ago" },
];

const ENVS = [
  { name: "Production", state: "Live", tone: "bg-emerald-400" },
  { name: "Staging", state: "Ready", tone: "bg-accent2" },
  { name: "Preview", state: "Ready", tone: "bg-accent2" },
];

/** Flat, low response times: the "nothing happening" a good host looks like. */
const LATENCY = [42, 38, 45, 40, 36, 41, 39, 44, 37, 40, 38, 35, 39, 41, 37, 36];

function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" className="h-[0.8em] w-[0.8em]">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function Pipeline() {
  return (
    <div className="rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.9em]">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-white/90">Latest deployment</span>
        <span className="rounded-full bg-emerald-400/15 px-[0.6em] py-[0.1em] text-[0.8em] font-semibold text-emerald-300">
          Succeeded · 48s
        </span>
      </div>
      <div className="mt-[0.9em] flex items-center">
        {PIPELINE.map((step, i) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-[0.35em]">
              <span className="flex h-[1.7em] w-[1.7em] items-center justify-center rounded-full bg-emerald-400 text-ink">
                <Tick />
              </span>
              <span className="text-[0.75em] text-white/60">{step}</span>
            </div>
            {i < PIPELINE.length - 1 && <span className="mx-[0.3em] mb-[1.3em] h-[0.15em] flex-1 rounded-full bg-emerald-400/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function History() {
  return (
    <div className="rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.9em]">
      <span className="text-[0.75em] font-semibold uppercase tracking-[0.14em] text-white/45">Deployments</span>
      <ul className="mt-[0.5em] divide-y divide-white/10">
        {DEPLOYS.map((d) => (
          <li key={d.sha} className="flex items-center gap-[0.6em] py-[0.5em]">
            <span className="h-[0.55em] w-[0.55em] shrink-0 rounded-full bg-emerald-400" />
            <span className="min-w-0 flex-1 truncate text-white/85">{d.msg}</span>
            <span className="shrink-0 font-mono text-[0.78em] text-white/40">{d.sha}</span>
            <span className="shrink-0 whitespace-nowrap text-right text-[0.78em] text-white/45">{d.when}</span>
            {d.current ? (
              <span className="shrink-0 rounded-full bg-accent px-[0.6em] py-[0.1em] text-[0.72em] font-700 text-white">Current</span>
            ) : (
              <span className="shrink-0 rounded-full border border-white/20 px-[0.6em] py-[0.1em] text-[0.72em] text-white/60">Rollback</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Uptime({ compact = false }: { compact?: boolean }) {
  const max = Math.max(...LATENCY);
  return (
    <div className="rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.9em]">
      <span className="flex items-center gap-[0.45em] text-[0.8em] font-semibold text-emerald-300">
        <span className="h-[0.55em] w-[0.55em] rounded-full bg-emerald-400" />
        All systems operational
      </span>
      <div className="mt-[0.5em] flex items-end justify-between gap-[0.5em]">
        <div className="shrink-0">
          <span className="block font-sora text-[1.9em] font-800 leading-none text-white">99.98%</span>
          <span className="text-[0.75em] text-white/45">Uptime · 90 days</span>
        </div>
        {!compact && (
          <div className="flex h-[2.4em] min-w-0 max-w-[45%] flex-1 items-end justify-end gap-[0.18em] overflow-hidden">
            {LATENCY.map((v, i) => (
              <span key={i} className="w-[0.32em] min-w-[1px] shrink rounded-full bg-accent2/80" style={{ height: `${(v / max) * 100}%` }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Environments() {
  return (
    <div className="rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.9em]">
      <span className="text-[0.75em] font-semibold uppercase tracking-[0.14em] text-white/45">Environments</span>
      <ul className="mt-[0.5em] space-y-[0.45em]">
        {ENVS.map((e) => (
          <li key={e.name} className="flex items-center gap-[0.55em]">
            <span className={`h-[0.55em] w-[0.55em] rounded-full ${e.tone}`} />
            <span className="flex-1 text-white/85">{e.name}</span>
            <span className="text-[0.78em] text-white/50">{e.state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Mini({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="min-w-0 rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.9em]">
      <span className="text-[0.75em] font-semibold uppercase tracking-[0.14em] text-white/45">{label}</span>
      <span className="mt-[0.35em] flex items-center gap-[0.45em] truncate font-semibold text-white/90">
        <span className="h-[0.55em] w-[0.55em] shrink-0 rounded-full bg-emerald-400" />
        {value}
      </span>
      <span className="mt-[0.2em] block truncate text-[0.78em] text-white/45">{note}</span>
    </div>
  );
}

/** Full screen for the browser frame. */
export default function CloudScreen() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 grid grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] content-start gap-[0.9em] bg-gradient-to-br from-ink2 to-[#0b2a57] p-[1.2em] text-[clamp(7.5px,2.1cqw+0.5px,14.5px)]"
    >
      <div className="flex min-w-0 flex-col gap-[0.9em]">
        <Pipeline />
        <History />
      </div>
      <div className="flex min-w-0 flex-col gap-[0.9em]">
        <Uptime />
        <Environments />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-[0.9em] pr-[22%]">
        <Mini label="Domain & SSL" value="Certificate valid" note="Auto-renews · HTTPS enforced" />
        <Mini label="Backups" value="Daily at 03:00" note="Last run 7 h ago · restore ready" />
      </div>
    </div>
  );
}

/** Narrow version for the phone overlay: the status at a glance. */
export function CloudPhoneScreen() {
  return (
    <div aria-hidden className="absolute inset-0 flex flex-col justify-end gap-[0.6em] bg-gradient-to-b from-ink2 to-[#0b2a57] p-[0.5em] pb-[2.9em] text-[5.5px]">
      <Uptime compact />
      <div className="rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.8em] text-white/85">
        <span className="flex items-center gap-[0.4em]">
          <span className="flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full bg-emerald-400 text-ink">
            <Tick />
          </span>
          Deployed · 2 min ago
        </span>
      </div>
    </div>
  );
}
