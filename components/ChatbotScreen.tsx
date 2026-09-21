/**
 * A coded screen for the AI chatbot service instead of a stock photo: a
 * business site with its assistant open after hours. It answers a routine
 * question on the spot, then hands the real question to a person on WhatsApp —
 * the "answer, then get out of the way" promise. Sample content only.
 */

function Bot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-end gap-[0.5em]">
      <span className="flex h-[1.9em] w-[1.9em] shrink-0 items-center justify-center rounded-full bg-accent text-[0.8em] font-700 text-white">
        AI
      </span>
      <div className="max-w-[84%] rounded-[1em] rounded-bl-[0.3em] bg-paper2 px-[0.9em] py-[0.6em] leading-[1.5] text-inkText">
        {children}
      </div>
    </div>
  );
}

function User({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto max-w-[80%] rounded-[1em] rounded-br-[0.3em] bg-accent2 px-[0.9em] py-[0.6em] leading-[1.5] text-white">
      {children}
    </div>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1.1em] w-[1.1em]">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Z" />
    </svg>
  );
}

function Widget({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1em] bg-white shadow-[0_1.2em_3em_-0.8em_rgba(4,16,38,0.6)]">
      <div className="flex items-center gap-[0.6em] bg-ink px-[0.9em] py-[0.7em] text-white">
        <span className="relative flex h-[2.1em] w-[2.1em] items-center justify-center rounded-full bg-accent text-[0.85em] font-700">
          AI
          <span className="absolute -bottom-[0.1em] -right-[0.1em] h-[0.7em] w-[0.7em] rounded-full border-[0.15em] border-ink bg-emerald-400" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-tight">Ask us anything</span>
          <span className="block text-[0.78em] text-white/60">Replies instantly · 10:42 pm</span>
        </span>
      </div>

      {/* anchored to the bottom like a real chat: when space runs out, older
          messages slide off the top and the handover always stays in view */}
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-[0.55em] overflow-hidden p-[0.8em]">
        {!compact && <User>Are you open on Sunday?</User>}
        {!compact && (
          <Bot>
            Yes — Sundays 10 am to 4 pm.
            <span className="mt-[0.5em] flex flex-wrap gap-[0.35em]">
              {["Book a slot", "Directions"].map((c) => (
                <span key={c} className="rounded-full border border-accent/50 bg-white px-[0.65em] py-[0.15em] text-[0.82em] font-semibold text-accent">
                  {c}
                </span>
              ))}
            </span>
          </Bot>
        )}
        <User>I need a custom quote for 40 units.</User>
        <Bot>That one is best answered by our team — I have passed your chat on.</Bot>

        {/* the handover */}
        <div className="rounded-[0.8em] border border-emerald-500/30 bg-emerald-50 p-[0.7em]">
          <span className="flex items-center gap-[0.4em] text-[0.8em] font-semibold text-emerald-700">
            <span className="h-[0.5em] w-[0.5em] rounded-full bg-emerald-500" />
            Handed to a person
          </span>
          <span className="mt-[0.45em] flex items-center justify-center gap-[0.4em] rounded-full bg-emerald-500 py-[0.45em] text-[0.88em] font-semibold text-white">
            <WhatsAppMark />
            Continue on WhatsApp
          </span>
        </div>
      </div>
    </div>
  );
}

/** Full screen for the browser frame: a site in the background, the assistant open on top. */
export default function ChatbotScreen() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden bg-paper text-[clamp(8px,1.75cqw+1px,13px)]"
    >
      {/* the business's own site, kept as quiet placeholder blocks */}
      <div className="absolute inset-0 p-[1.4em]">
        <div className="flex items-center gap-[0.8em]">
          <span className="h-[1.4em] w-[1.4em] rounded-[0.35em] bg-ink/80" />
          <span className="h-[0.55em] w-[5em] rounded-full bg-ink/20" />
          <span className="ml-auto h-[0.55em] w-[3em] rounded-full bg-ink/10" />
          <span className="h-[0.55em] w-[3em] rounded-full bg-ink/10" />
        </div>
        <div className="mt-[2.4em] max-w-[34%] space-y-[0.6em]">
          <span className="block h-[1.3em] w-[90%] rounded-[0.3em] bg-ink/75" />
          <span className="block h-[1.3em] w-[70%] rounded-[0.3em] bg-accent/70" />
          <span className="block h-[0.55em] w-full rounded-full bg-ink/15" />
          <span className="block h-[0.55em] w-[85%] rounded-full bg-ink/15" />
          <span className="mt-[1.2em] block h-[2em] w-[45%] rounded-full bg-accent/80" />
        </div>
        <div className="mt-[2em] grid max-w-[34%] grid-cols-2 gap-[0.6em]">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="block h-[3.5em] rounded-[0.5em] bg-ink/[0.07]" />
          ))}
        </div>
      </div>

      {/* the assistant, set in from the right so the phone overlay never covers it */}
      <div className="absolute bottom-[1.2em] right-[15%] top-[1.2em] w-[47%]">
        <Widget />
      </div>
    </div>
  );
}

/** Narrow version for the phone overlay: the handover moment on its own. */
export function ChatbotPhoneScreen() {
  return (
    <div aria-hidden className="absolute inset-0 bg-paper p-[0.35em] pb-[2.9em] text-[5px]">
      <Widget compact />
    </div>
  );
}
