import { integrations } from '../data/content';

export default function IntegrationBar() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1109px] min-h-[78px] box-border border-y border-[#1A2438] bg-[#08090F] py-4 px-4 sm:px-6">
        <div className="w-full max-w-[1061px] min-h-[36px] mx-auto flex items-center gap-3 sm:gap-6">
          <div className="w-[104px] sm:w-[150px] shrink-0">
            <span className="font-['Inter'] font-semibold text-[10px] sm:text-[12px] leading-[15px] sm:leading-[18px] tracking-[0.7px] sm:tracking-[0.96px] uppercase text-[#444455] block">
              Integrates with
            </span>
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex w-max animate-[integrations-marquee_36s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 items-center gap-3 pr-3 sm:gap-6 sm:pr-6"
                  aria-hidden={copy === 1 ? 'true' : undefined}
                >
                  {integrations.map((name) => (
                    <div
                      key={`${copy}-${name}`}
                      className="h-[36px] shrink-0 rounded-[6px] border border-[#1E2A3A] bg-[#111827] px-3 sm:px-[18px] flex items-center justify-center transition-colors hover:border-[#00C9A7]/40"
                    >
                      <span className="font-['Inter'] font-semibold text-[11px] sm:text-[12px] leading-[18px] text-[#8899AA] whitespace-nowrap">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
