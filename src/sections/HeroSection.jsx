import { heroDiscrepancies, heroMetrics, heroStats } from '../data/content';
import ActionButton from '../components/ActionButton';

export default function HeroSection() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-[1069px] max-w-full h-[723.75px] pl-[40px] bg-[linear-gradient(90deg,rgba(0,201,167,0.04)_0.09%,rgba(0,0,0,0)_0.09%),linear-gradient(180deg,rgba(0,201,167,0.04)_0.14%,rgba(0,0,0,0)_0.14%)]">
        <div className="w-[1061px] max-w-[1200px] h-[495.18798828125px] mt-[80px] ml-[24px] flex gap-[60px] items-center">
          <div className="w-[500px] h-[578px] flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="w-[500px] h-[17px]">
                <span className="h-[17px] font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[1.32px] text-[#00C9A7] uppercase block">
                  Revenue Assurance Platform
                </span>
              </div>

              <div className="w-[500px] h-[214px] pt-[20px]">
                <h1 className="w-[500px] h-[194px] font-['Inter'] font-extrabold text-[42px] leading-[48.3px] tracking-[-0.84px] text-[#FFFFFF]">
                  Stop Silent CRM-to-Ledger Revenue Leakage Before Month-End Close
                </h1>
              </div>

              <div className="w-[500px] h-[102px] pt-[20px]">
                <p className="w-[500px] h-[82px] font-['Inter'] font-normal text-[16px] leading-[27.2px] tracking-[0px] text-[#8899AA]">
                  Continuously audit your sales pipeline against your accounting ledger, recovering on average 3-5% in unbooked revenue every quarter.
                </p>
              </div>

              <div className="w-[500px] h-[134px] pt-[32px]">
                <div className="w-[500px] h-[102px] flex flex-col items-start gap-[12px]">
                  <ActionButton>
                    <span className="h-[21px] font-['Inter'] font-bold text-[14px] leading-[21px] tracking-[0px] text-center text-[#000000] whitespace-nowrap">
                      Start 7-Day Free Revenue Health Check &rarr;
                    </span>
                  </ActionButton>
                  <ActionButton variant="secondary">
                    <span className="h-[21px] font-['Inter'] font-semibold text-[14px] leading-[21px] tracking-[0px] text-center text-[#FFFFFF] whitespace-nowrap">
                      See How It Works
                    </span>
                  </ActionButton>
                </div>
              </div>
            </div>

            <div className="w-[500px] h-[111px] pt-[40px] flex items-start gap-[32px]">
              {heroStats.map((stat) => (
                <div key={stat.value} className={`${stat.width} h-[71px]`}>
                  <div className="h-[33px]">
                    <span className="font-['Inter'] font-extrabold text-[22px] leading-[33px] tracking-[0px] text-[#00C9A7] block">
                      {stat.value}
                    </span>
                  </div>
                  <div className="h-[38px] pt-[2px]">
                    <p className="font-['Inter'] font-normal text-[12px] leading-[18px] tracking-[0px] text-[#6677AA]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[461px] h-[339px] rounded-[12px] border border-[#1A2438] bg-[#0D1421] shadow-[0px_0px_0px_1px_rgba(0,201,167,0.08),0px_24px_80px_0px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden">
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

            <div className="flex-1 pt-[18px] pr-[18px] pb-[12px] pl-[18px]">
              <div className="w-full h-[63.5px] grid grid-cols-4 gap-[4px]">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="h-[63.5px] rounded-[8px] border border-[#1A2438] bg-[#0A0F1C] pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
                  >
                    <div className="h-[15px]">
                      <span className="font-['Inter'] font-normal text-[10px] leading-[15px] tracking-[0px] text-[#6677AA] block">
                        {metric.label}
                      </span>
                    </div>
                    <div className="h-[27px] pt-[4px]">
                      <span className={`font-['Inter'] font-bold text-[15px] leading-[22.5px] tracking-[0px] ${metric.valueClass}`}>
                        {metric.value}
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
                    className="w-full h-[36px] rounded-[6px] border border-[#1A2438] grid grid-cols-[121px_80.65625px_80.671875px_80.65625px_6px] gap-x-[8px] items-center pl-[11px]"
                  >
                    <span className="font-['Inter'] font-normal text-[12px] leading-[18px] tracking-[0px] text-[#CCCCDD] truncate">
                      {row.name}
                    </span>
                    <span className="font-['Inter'] font-normal text-[12px] leading-[18px] tracking-[0px] text-[#8899AA]">
                      {row.crm}
                    </span>
                    <span className="font-['Inter'] font-normal text-[12px] leading-[18px] tracking-[0px] text-[#8899AA]">
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
