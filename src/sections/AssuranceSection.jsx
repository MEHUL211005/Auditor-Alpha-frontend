import AssuranceCard from '../components/AssuranceCard';

const traditionalAuditing = [
  'Point-in-time audit (quarterly/annual)',
  'Manual spreadsheet reconciliation',
  'Reactive — finds issues after close',
  'High cost per audit cycle',
  'Limited to sampled transactions',
  'No CRM integration',
];

const continuousGovernance = [
  'Continuous, real-time monitoring',
  'Automated CRM-to-ledger matching',
  'Proactive — flags issues before close',
  'Fixed SaaS pricing at scale',
  '100% transaction coverage',
  'Native CRM & ERP integrations',
];

export default function AssuranceSection() {
  return (
    <section className="w-full border-b border-[#1A2438] bg-[#07090F]">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 py-10 sm:py-14 mx-auto">
        <div className="w-full max-w-[1061px] mx-auto">
          <div className="w-full text-center">
            <h2 className="font-['Inter'] font-extrabold text-[32px] sm:text-[40px] leading-tight tracking-[-2px] text-white">
              A Generational Leap
              <br />
              in Assurance
            </h2>

            <p className="mt-[15px] pr-[40px] font-['Inter'] font-normal text-[15px] leading-[24px] text-[#6677AA]">
              Audit the entire revenue lifecycle. Not just the bits your team remembers to check.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-[1021px] mx-auto mt-8 sm:mt-12">
            <AssuranceCard
              title="Traditional Internal Auditing"
              items={traditionalAuditing}
              type="negative"
            />

            <AssuranceCard
              title="Continuous & Governance"
              items={continuousGovernance}
              type="positive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}