/**
 * A coded screen for the RAG service instead of a stock photo: a question, an
 * answer with numbered citations, and the source passages those numbers point
 * to, highlighted. It shows the one idea a photo cannot — every answer traces
 * back to a document. Sample content only.
 */

const SOURCES = [
  {
    n: 1,
    file: "Refund-Policy-2025.pdf",
    where: "p. 4",
    before: "Customers on annual plans may request a ",
    mark: "full refund within 30 days of purchase",
    after: ", no questions asked.",
  },
  {
    n: 2,
    file: "Enterprise-Terms.docx",
    where: "§ 7.2",
    before: "After the first 30 days, enterprise contracts are ",
    mark: "refunded pro rata for unused months",
    after: " on written notice.",
  },
];

function Cite({ n }: { n: number }) {
  return (
    <sup className="mx-[0.15em] inline-flex h-[1.35em] min-w-[1.35em] items-center justify-center rounded-[0.35em] bg-accent px-[0.3em] align-[0.35em] text-[0.7em] font-700 not-italic text-white">
      {n}
    </sup>
  );
}

function Answer() {
  return (
    <div className="flex flex-col gap-[0.9em]">
      {/* question */}
      <div className="ml-auto max-w-[88%] rounded-[1em] rounded-br-[0.3em] bg-accent2 px-[1em] py-[0.65em] text-white">
        What is the refund window for annual plans?
      </div>

      {/* answer */}
      <div className="max-w-[94%] rounded-[1em] rounded-bl-[0.3em] border border-white/10 bg-white/[0.06] px-[1em] py-[0.8em] leading-[1.55] text-white/90">
        <span className="mb-[0.4em] flex items-center gap-[0.45em] text-[0.8em] font-semibold text-accent">
          <span className="h-[0.55em] w-[0.55em] rounded-full bg-accent" />
          Answer from your documents
        </span>
        Annual plans get a full refund within 30 days of purchase
        <Cite n={1} />. After that, enterprise contracts are refunded pro rata
        for the unused months
        <Cite n={2} />.
      </div>

      <div className="flex flex-wrap items-center gap-[0.5em] text-[0.8em] text-white/55">
        <span className="rounded-full border border-white/15 px-[0.7em] py-[0.2em]">3 passages retrieved</span>
        <span className="rounded-full border border-white/15 px-[0.7em] py-[0.2em]">2 cited</span>
      </div>
    </div>
  );
}

function SourceCard({ s }: { s: (typeof SOURCES)[number] }) {
  return (
    <div className="rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.8em]">
      <div className="flex items-center gap-[0.55em]">
        <span className="flex h-[1.6em] w-[1.6em] shrink-0 items-center justify-center rounded-[0.4em] bg-accent text-[0.8em] font-700 text-white">
          {s.n}
        </span>
        <span className="min-w-0 flex-1 truncate font-semibold text-white/90">{s.file}</span>
        <span className="shrink-0 text-[0.8em] text-white/45">{s.where}</span>
      </div>
      <p className="mt-[0.6em] text-[0.88em] leading-[1.55] text-white/55">
        {s.before}
        <mark className="rounded-[0.2em] bg-accent/25 px-[0.15em] text-white">{s.mark}</mark>
        {s.after}
      </p>
    </div>
  );
}

/** Full screen for the browser frame: answer on the left, sources on the right. */
export default function RagScreen() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-[1.2em] bg-gradient-to-br from-ink2 to-[#0b2a57] p-[1.4em] text-[clamp(8.5px,2.05cqw+1px,14.5px)]"
    >
      <Answer />
      <div className="flex flex-col gap-[0.7em] border-l border-white/10 pl-[1.2em]">
        <span className="text-[0.75em] font-semibold uppercase tracking-[0.16em] text-white/45">Sources</span>
        {SOURCES.map((s) => (
          <SourceCard key={s.n} s={s} />
        ))}
      </div>
    </div>
  );
}

/** Narrow version for the phone overlay: one cited answer and its first source. */
export function RagPhoneScreen() {
  return (
    <div aria-hidden className="absolute inset-0 flex flex-col justify-end gap-[0.6em] bg-gradient-to-b from-ink2 to-[#0b2a57] p-[0.7em] pb-[2.4em] text-[6px] leading-[1.45] text-white/85">
      <div className="rounded-[0.8em] border border-white/10 bg-white/[0.06] p-[0.7em]">
        Full refund within 30 days
        <Cite n={1} />
      </div>
      <div className="rounded-[0.8em] border border-white/10 bg-white/[0.04] p-[0.7em] text-white/55">
        <span className="font-semibold text-white/85">Refund-Policy-2025.pdf</span>
        <br />
        <mark className="rounded-[0.2em] bg-accent/25 px-[0.15em] text-white">full refund within 30 days</mark>
      </div>
    </div>
  );
}
