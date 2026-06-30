import { ArrowDown } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionary";
import { HeroScene } from "./HeroScene";
import { Reveal } from "./Reveal";
import { RippleButton } from "./RippleButton";
import { SplineInfoBadge } from "./SplineInfoBadge";

type HeroProps = {
  t: Dictionary["hero"];
};

export function Hero({ t }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden md:min-h-svh">
      <div className="shell grid grid-cols-1 items-start gap-y-12 pb-20 pt-36 md:min-h-svh md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:items-center md:gap-x-[clamp(88px,9vw,160px)] md:py-0">
        <div className="flex flex-col items-start text-left">
          <Reveal
            as="h1"
            className="mb-4 max-w-[14ch] text-balance font-display text-[clamp(34px,4.8vw,70px)] font-medium leading-[0.98] tracking-[-0.04em] text-fg"
          >
            {t.name}
          </Reveal>

          <Reveal
            as="p"
            delay={120}
            className="font-display text-[clamp(18px,2vw,28px)] font-medium leading-[1.08] tracking-[-0.02em] text-fg"
          >
            {t.role}
          </Reveal>

          <Reveal
            as="p"
            delay={240}
            className="mt-10 max-w-[520px] text-[clamp(16px,1.25vw,18px)] font-medium leading-[1.55] text-fg-muted"
          >
            {t.description}
          </Reveal>

          <Reveal
            as="div"
            delay={360}
            className="mt-10 flex flex-wrap gap-4"
          >
            <RippleButton
              href="#work"
              variant="white"
              arrowSwap
            >
              {t.primaryCta}
            </RippleButton>
            <RippleButton
              href="/contact"
              variant="black"
            >
              {t.secondaryCta}
            </RippleButton>
          </Reveal>
        </div>
        <div className="pointer-events-none relative mt-12 hidden h-[60svh] w-full md:absolute md:inset-y-0 md:right-0 md:mt-0 md:block md:h-svh md:w-[40vw]">
          <HeroScene />
          <SplineInfoBadge badges={t.badges} />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <Reveal
          as="a"
          href="#work"
          aria-label={t.scrollAria}
          rootMargin="0px"
          className="group inline-flex text-fg-muted transition-colors duration-200 ease-out hover:text-fg"
        >
          <ArrowDown
            size={28}
            strokeWidth={1.5}
            className="transition-transform duration-200 ease-out group-hover:translate-y-1"
          />
        </Reveal>
      </div>
    </section>
  );
}
