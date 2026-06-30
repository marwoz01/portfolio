import type { Dictionary } from "@/i18n/dictionary";
import { Reveal } from "./Reveal";
import { RippleButton } from "./RippleButton";

type ContactCtaProps = {
  t: Dictionary["contactCta"];
};

export function ContactCta({ t }: ContactCtaProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg py-24 text-fg md:py-32"
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-primary p-8 text-primary-contrast shadow-[0_0_80px_rgba(244,244,239,0.12),0_32px_100px_rgba(0,0,0,0.38)] md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(280px,0.42fr)] lg:items-end">
            <div>
              <Reveal
                as="h2"
                className="mb-8 max-w-[12ch] font-display text-[clamp(42px,5.8vw,88px)] font-medium leading-[0.98] tracking-[-0.04em] text-primary-contrast"
              >
                {t.title}
              </Reveal>

              <Reveal
                as="p"
                className="max-w-[620px] text-[18px] leading-[1.55] text-primary-contrast/70"
              >
                {t.description}
              </Reveal>
            </div>

            <Reveal as="div" className="flex flex-col gap-5 lg:items-end">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <RippleButton
                  href="/contact"
                  variant="black"
                  size="lg"
                  arrowSwap
                >
                  {t.button}
                </RippleButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
