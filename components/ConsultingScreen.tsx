/**
 * A coded screen for IT consulting instead of a stock photo: a written
 * recommendation, not a slide deck — findings ranked by severity, options
 * weighed against each other with one clearly recommended, and a roadmap to
 * act on. Sample content only.
 */

const FINDINGS = [
  { tone: "bg-red-500", level: "High", text: "Orders re-typed into three separate tools" },
  { tone: "bg-accent", level: "Medium", text: "Paid CRM licences, 2 of 9 seats in use" },
  { tone: "bg-accent2", level: "Low", text: "Server access held by one person only" },
];

const OPTIONS = [
  { name: "Keep & patch", cost: "Low", effort: "Low", risk: "High" },
  { name: "Connect existing tools", cost: "Medium", effort: "Medium", risk: "Low", pick: true },
  { name: "Rebuild from scratch", cost: "High", effort: "High", risk: "Medium" },
];

const ROADMAP = [
  { when: "Now", what: "Automate order sync" },
  { when: "Next", what: "Retire unused CRM" },
  { when: "Later", what: "Shared admin access" },
];

function Findings() {
  return (
    <div>
      <p className="text-[0.72em] font-700 uppercase tracking-[0.16em] text-inkTextDim">1 · Findings</p>
      <ul className="mt-[0.4em] space-y-[0.3em]">
        {FINDINGS.map((f) => (
          <li key={f.text} className="flex items-center gap-[0.55em]">
            <span className={`w-[4.4em] shrink-0 rounded-full px-[0.5em] py-[0.1em] text-center text-[0.72em] font-700 text-white ${f.tone}`}>
              {f.level}
            </span>
            <span className="min-w-0 truncate text-inkText">{f.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Options() {
  return (
    <div>
      <p className="text-[0.72em] font-700 uppercase tracking-[0.16em] text-inkTextDim">2 · Options & trade-offs</p>
      <table className="mt-[0.45em] w-full border-collapse text-left">
        <thead>
          <tr className="text-[0.75em] text-inkTextDim">
            <th className="pb-[0.3em] font-semibold">Option</th>
            <th className="pb-[0.3em] font-semibold">Cost</th>
            <th className="pb-[0.3em] font-semibold">Effort</th>
            <th className="pb-[0.3em] font-semibold">Risk</th>
          </tr>
        </thead>
        <tbody>
          {OPTIONS.map((o) => (
            <tr key={o.name} className={o.pick ? "bg-accent/10" : ""}>
              <td className={`border-t border-lineDark py-[0.3em] pl-[0.4em] ${o.pick ? "font-700 text-inkText" : "text-inkText/80"}`}>
                <span className="flex items-center gap-[0.4em] whitespace-nowrap">
                  {o.name}
                  {o.pick && (
                    <span className="whitespace-nowrap rounded-full bg-accent px-[0.5em] py-[0.05em] text-[0.68em] font-700 text-white">
                      Recommended
                    </span>
                  )}
                </span>
              </td>
              <td className="border-t border-lineDark py-[0.3em] text-inkText/80">{o.cost}</td>
              <td className="border-t border-lineDark py-[0.3em] text-inkText/80">{o.effort}</td>
              <td className="border-t border-lineDark py-[0.3em] text-inkText/80">{o.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Roadmap() {
  return (
    <div>
      <p className="text-[0.72em] font-700 uppercase tracking-[0.16em] text-inkTextDim">3 · Roadmap</p>
      <div className="relative mt-[0.6em] grid grid-cols-3 gap-[0.6em]">
        <span aria-hidden className="absolute left-[0.45em] right-[0.45em] top-[0.45em] h-[0.12em] bg-gradient-to-r from-accent via-accent2 to-lineDark" />
        {ROADMAP.map((r, i) => (
          <div key={r.when} className="relative">
            <span className={`block h-[0.9em] w-[0.9em] rounded-full border-[0.18em] border-white ${i === 0 ? "bg-accent" : "bg-accent2"}`} />
            <span className="mt-[0.35em] block text-[0.75em] font-700 text-inkText">{r.when}</span>
            <span className="block text-[0.8em] leading-snug text-inkTextDim">{r.what}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Full screen for the browser frame: the written recommendation as a page. */
export default function ConsultingScreen() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden bg-gradient-to-br from-ink2 to-[#0b2a57] px-[5%] pt-[1.1em] text-[clamp(7px,2.05cqw+0.5px,14px)]"
    >
      <div className="h-full rounded-t-[0.6em] bg-white px-[1.4em] pt-[1em] shadow-[0_0_3em_rgba(4,16,38,0.5)]">
        <div className="flex items-start justify-between gap-[1em] border-b border-lineDark pb-[0.7em]">
          <div className="min-w-0">
            <p className="text-[0.72em] font-semibold uppercase tracking-[0.16em] text-accent">Technology review</p>
            <p className="mt-[0.15em] truncate font-sora text-[1.35em] font-800 leading-tight text-inkText">
              Recommendations
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-lineDark px-[0.6em] py-[0.15em] text-[0.72em] text-inkTextDim">
            6 pages · written
          </span>
        </div>

        {/* stacked full width so each finding and option reads in full;
            the right-hand padding keeps the phone overlay off the table */}
        <div className="mt-[0.8em] flex flex-col gap-[0.9em] pr-[20%]">
          <Findings />
          <Options />
          <Roadmap />
        </div>
      </div>
    </div>
  );
}

/** Narrow version for the phone overlay: the one line that matters. */
export function ConsultingPhoneScreen() {
  return (
    <div aria-hidden className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-ink2 to-[#0b2a57] p-[0.5em] pb-[2.9em] text-[5.5px]">
      <div className="rounded-[0.8em] bg-white p-[0.8em] text-inkText">
        <p className="text-[0.8em] font-700 uppercase tracking-[0.12em] text-accent">Recommended</p>
        <p className="mt-[0.2em] font-700 leading-snug">Connect existing tools</p>
        <p className="mt-[0.3em] text-inkTextDim">Medium cost · Low risk</p>
      </div>
    </div>
  );
}
