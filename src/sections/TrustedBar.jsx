// src/sections/IntegrationBar.jsx

const trustedCompanies = [
  'Deloitte',
  'KPMG',
  'PwC',
  'EY',
  'Salesforce',
  'NetSuite',
];

export default function TrustedBar() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center border-t border-[#1A2438]">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 py-10 sm:py-12">
        <div className="w-full max-w-[1061px] mx-auto">

          {/* Heading */}
          <div className="w-full min-h-[20px] flex items-center justify-center">
            <h2 className="font-['Inter'] font-semibold text-[10px] sm:text-[13px] leading-[16px] sm:leading-[19.5px] tracking-[0.8px] sm:tracking-[1.3px] text-[#59627A] text-center uppercase">
              Trusted across finance, consulting and technology.
            </h2>
          </div>

          {/* Company Pills */}
          <div className="w-full max-w-[1021px] mx-auto pt-6 sm:pt-8 overflow-x-auto">
            <div className="flex w-max min-w-full items-center justify-start sm:justify-center gap-3 sm:gap-5">
              {trustedCompanies.map((company) => (
                <div
                  key={company}
                  className="
                    h-[51px]
                    px-5 sm:px-[28px]
                    py-[14px]
                    rounded-[8px]
                    border
                    border-[#1A2438]
                    bg-[#0D1421]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <span className="font-['Inter'] font-bold text-[14px] leading-[21px] tracking-[0.56px] text-[#6677AA] text-center">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}