import { heroDiscrepancies, heroMetrics, heroStats } from '../data/content';
import ActionButton from '../components/ActionButton';
import AnimatedNumber from '../components/AnimatedNumber';

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1069px] px-4 sm:px-6 lg:pl-10 bg-[linear-gradient(90deg,rgba(0,201,167,0.04)_0.09%,rgba(0,0,0,0)_0.09%),linear-gradient(180deg,rgba(0,201,167,0.04)_0.14%,rgba(0,0,0,0)_0.14%)]">
        <div className="w-full max-w-[1061px] min-h-[578px] mx-auto py-12 sm:py-14 flex flex-col xl:flex-row gap-10 xl:gap-[60px] items-center justify-center">
          <div className="w-full max-w-[500px] flex flex-col gap-8 xl:gap-0 xl:h-[578px] xl:justify-between">
            <div className="flex flex-col">
              <div className="w-full h-[17px]">
                <span className="h-[17px] font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[1.32px] text-[#00C9A7] uppercase block">
                  Revenue Assurance Platform
                </span>
              </div>

              <div className="w-full pt-4 sm:pt-5">
                <h1 className="w-full font-['Inter'] font-extrabold text-[34px] sm:text-[42px] leading-[1.12] tracking-[-0.84px] text-[#FFFFFF]">
                  Stop Silent CRM-to-Ledger Revenue Leakage Before Month-End Close
                </h1>
              </div>

              <div className="w-full pt-4 sm:pt-5">
                <p className="w-full font-['Inter'] font-normal text-[15px] sm:text-[16px] leading-[1.7] tracking-[0px] text-[#8899AA]">
                  Continuously audit your sales pipeline against your accounting ledger, recovering on average 3-5% in unbooked revenue every quarter.
                </p>
              </div>

              <div className="w-full pt-6 sm:pt-8">
                <div className="w-full flex flex-col sm:flex-row sm:flex-wrap items-start gap-3">
                  <ActionButton>
                    <span className="font-['Inter'] font-bold text-[13px] sm:text-[14px] leading-[21px] tracking-[0px] text-center text-[#000000]">
                      Start 7-Day Free Revenue Health Check &rarr;
                    </span>
                  </ActionButton>
                  <ActionButton variant="secondary">
                    <span className="font-['Inter'] font-semibold text-[13px] sm:text-[14px] leading-[21px] tracking-[0px] text-center text-[#FFFFFF]">
                      See How It Works
                    </span>
                  </ActionButton>
                </div>
              </div>
            </div>

            <div className="w-full flex items-start gap-5 sm:gap-8 pt-2">
              {heroStats.map((stat) => (
                <div key={stat.value} className="min-w-0 flex-1 h-[71px]">
                  <div className="h-[33px]">
                    <span className="font-['Inter'] font-extrabold text-[19px] sm:text-[22px] leading-[33px] tracking-[0px] text-[#00C9A7] block">
                      <AnimatedNumber value={stat.value} />
                    </span>
                  </div>
                  <div className="h-[38px] pt-[2px]">
                    <p className="font-['Inter'] font-normal text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] tracking-[0px] text-[#6677AA]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="-mx-4 w-[calc(100%+2rem)] max-w-none rounded-[12px] border border-[#1A2438] bg-[#0D1421] shadow-[0px_0px_0px_1px_rgba(0,201,167,0.08),0px_24px_80px_0px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden sm:mx-0 sm:w-full xl:max-w-[461px]">
            <div className="w-full h-[47px] shrink-0 flex items-center gap-[6px] border-b border-[#1A2438] pt-[14px] pr-[18px] pb-[14px] pl-[18px]">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <div className="w-[156px] h-[18px] pl-[8px]">
                <span className="h-[18px] font-['Inter'] font-normal text-[12px] leading-[18px] tracking-[0px] text-[#444455] block">
                  Revenue Audit Dashboard
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0 p-3 min-[480px]:pt-[18px] min-[480px]:px-[18px] min-[480px]:pb-[12px]">
              <div className="w-full min-h-[63.5px] grid grid-cols-2 min-[480px]:grid-cols-4 gap-1">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="min-w-0 min-h-[63.5px] rounded-[8px] border border-[#1A2438] bg-[#0A0F1C] p-2 min-[480px]:pt-[10px] min-[480px]:px-[12px] min-[480px]:pb-[10px]"
                  >
                    <div className="h-[15px]">
                      <span className="font-['Inter'] font-normal text-[9px] min-[480px]:text-[10px] leading-[15px] tracking-[0px] text-[#6677AA] block truncate">
                        {metric.label}
                      </span>
                    </div>
                    <div className="h-[27px] pt-[4px]">
                      <span className={`font-['Inter'] font-bold text-[13px] min-[480px]:text-[15px] leading-[22.5px] tracking-[0px] ${metric.valueClass}`}>
                        <AnimatedNumber value={metric.value} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full h-[33px] pt-[16px]">
                <span className="h-[17px] font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[0.88px] uppercase text-[#444455] block">
                  Recent Discrepancies
                </span>
              </div>

              <div className="w-full pt-[8px] flex flex-col gap-[4px]">
                {heroDiscrepancies.map((row) => (
                  <div
                    key={row.name}
                    className={`w-full min-h-[36px] rounded-[6px] border border-[#1A2438] grid grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))_6px] gap-x-1 min-[480px]:gap-x-2 items-center pl-2 pr-[10px] ${
                      row.negative ? 'bg-[#FF6B6B0D]' : 'bg-[#00C9A708]'
                    }`}
                  >
                    <span className="font-['Inter'] font-normal text-[10px] min-[480px]:text-[12px] leading-[18px] tracking-[0px] text-[#CCCCDD] truncate">
                      {row.name}
                    </span>
                    <span className="font-['Inter'] font-normal text-[10px] min-[480px]:text-[12px] leading-[18px] tracking-[0px] text-[#8899AA] truncate">
                      {row.crm}
                    </span>
                    <span className="font-['Inter'] font-normal text-[10px] min-[480px]:text-[12px] leading-[18px] tracking-[0px] text-[#8899AA] truncate">
                      {row.ledger}
                    </span>
                    <span
                      className={`font-['Inter'] text-[12px] leading-[18px] tracking-[0px] ${
                        row.negative ? 'font-bold text-[#FF6B6B]' : 'font-normal text-[#00C9A7]'
                      }`}
                    >
                      {row.diff}
                    </span>
                    <span
                      className={`w-[6px] h-[6px] rounded-full ${
                        row.negative ? 'bg-[#FF6B6B]' : 'bg-[#00C9A7]'
                      }`}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
