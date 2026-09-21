import Image from "next/image";
import type { Service } from "@/data/services";
import RagScreen, { RagPhoneScreen } from "./RagScreen";
import ChatbotScreen, { ChatbotPhoneScreen } from "./ChatbotScreen";
import CloudScreen, { CloudPhoneScreen } from "./CloudScreen";
import ConsultingScreen, { ConsultingPhoneScreen } from "./ConsultingScreen";
import MaintenanceScreen, { MaintenancePhoneScreen } from "./MaintenanceScreen";

/**
 * Services whose idea a photo cannot show get a coded screen in the frames
 * instead. The photo stays in the data for cards and link previews.
 */
const SCREENS: Record<
  string,
  { browser: () => JSX.Element; phone: () => JSX.Element }
> = {
  "rag-application-development": { browser: RagScreen, phone: RagPhoneScreen },
  "ai-chat-bots": { browser: ChatbotScreen, phone: ChatbotPhoneScreen },
  "cloud-solutions": { browser: CloudScreen, phone: CloudPhoneScreen },
  "it-consulting": { browser: ConsultingScreen, phone: ConsultingPhoneScreen },
  "maintenance-support": { browser: MaintenanceScreen, phone: MaintenancePhoneScreen },
};

/**
 * Service hero visual: the service image in a tilted browser frame with a
 * phone overlapping the lower corner, on the project's navy and accent glow.
 */
export default function ServiceHeroVisual({ service }: { service: Service }) {
  const screen = SCREENS[service.slug];

  return (
    <div className="relative mx-auto w-full max-w-xl pb-8 lg:max-w-none lg:pb-0">
      {/* glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] blur-2xl sm:-inset-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(28,111,216,0.28), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-4 top-1/4 h-28 w-28 rounded-full blur-3xl sm:-right-6 sm:h-40 sm:w-40"
        style={{ background: "rgba(245,146,30,0.22)" }}
      />

      <div className="relative" style={{ perspective: "1400px" }}>
        {/* browser frame */}
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-ink2 shadow-[0_40px_80px_-24px_rgba(11,35,71,0.55)] lg:[transform:rotateY(-6deg)_rotateX(4deg)]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3.5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-2 flex-1 truncate rounded-full bg-white/[0.07] px-3 py-1 text-[0.625rem] font-medium tracking-wide text-white/50 sm:text-[0.6875rem]">
              moriva.tech/services/{service.slug}
            </div>
          </div>

          {/* container query units let a coded screen scale with the frame */}
          <div
            className="relative aspect-[16/11] w-full"
            style={{ containerType: "inline-size" }}
          >
            {screen ? (
              <screen.browser />
            ) : (
              <>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top right, rgba(11,35,71,0.45), transparent 55%, rgba(28,111,216,0.15))",
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* phone overlapping the lower corner */}
        <div className="absolute -bottom-5 -right-1 w-[26%] min-w-[5.25rem] max-w-[7rem] sm:-bottom-8 sm:-right-3 sm:w-[28%] md:w-[30%] md:max-w-[7.5rem]">
          <div className="overflow-hidden rounded-[1.1rem] border border-white/15 bg-ink2 p-1.5 shadow-[0_18px_40px_rgba(11,35,71,0.45)]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[0.85rem]">
              {screen ? (
                <screen.phone />
              ) : (
                <>
                  <Image
                    src={service.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,35,71,0.75), transparent 60%)",
                    }}
                  />
                </>
              )}
              <span className="absolute inset-x-1.5 bottom-1.5 block h-1.5 rounded-full bg-gradient-to-r from-accent to-accentDim" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
