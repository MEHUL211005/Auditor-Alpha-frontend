import { integrations } from '../data/content';

export default function IntegrationBar() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-[1109px] max-w-full h-[78px] box-border border-y border-[#1A2438] bg-[#08090F] pt-[20px] pr-[24px] pb-[20px] pl-[24px]">
        <div className="w-[1061px] max-w-[1200px] h-[36px] flex items-center gap-[40px]">
          <div className="w-[200px] h-[18px] shrink-0">
            <span className="font-['Inter'] font-semibold text-[12px] leading-[18px] tracking-[0.96px] uppercase text-[#444455] block">
              Integrates with
            </span>
          </div>
          {integrations.map((item) => (
            <div
              key={item.name}
              className={`${item.width} h-[36px] shrink-0 rounded-[6px] border border-[#1E2A3A] bg-[#111827] pt-[8px] pr-[18px] pb-[8px] pl-[18px] flex items-center justify-center hover:border-[#00C9A7]/40 transition-colors`}
            >
              <span className="h-[18px] font-['Inter'] font-semibold text-[12px] leading-[18px] tracking-[0px] text-[#8899AA] whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
