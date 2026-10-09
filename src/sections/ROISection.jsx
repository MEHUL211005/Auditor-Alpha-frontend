import ActionButton from '../components/ActionButton';
import ROIMetricCard from '../components/ROIMetricCard';

const primaryMetrics = [
  {
    label: 'Estimated Annual Leakage',
    value: '$150K',
    description: 'based on 3% of $5M ARR',
    valueColor: 'red',
  },
  {
    label: 'Projected Annual Recovery',
    value: '$117K',
    description: '78% average recovery rate',
    valueColor: 'green',
  },
];

const recoveryMetrics = [
  {
    label: 'Setup time',
    value: '48h',
    valueColor: 'white',
  },
  {
    label: 'underbooked revenue',
    value: '$150K',
    valueColor: 'green',
    accent: true,
  },
];

export default function ROISection() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 py-10 sm:py-14">
        <div className="w-full max-w-[1021px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,491px)] gap-8 lg:gap-10">

          {/* LEFT COLUMN */}
          <div className="w-full pt-[2px]">
            <p className="font-['Inter'] font-semibold text-[11px] leading-[12px] tracking-[1.32px] uppercase text-[#00C9A7]">
              ROI Calculator
            </p>

            <h2 className="mt-[21px] font-['Inter'] font-extrabold text-[34px] leading-[50px] tracking-[-0.7px] text-[#FFFFFF]">
              See What Your
              <br />
              Leakage is Costing You
            </h2>

            <p className="mt-[17px] max-w-[490px] font-['Inter'] font-normal text-[14px] leading-[25px] tracking-[0.47px] text-[#6677AA]">
              Revenue leakage is silent. It doesn&apos;t show up on dashboards — it
              shows up as missed targets and unexplained gaps between forecast
              and actuals.
            </p>

            {/* ARR */}
            <div className="mt-[31px]">
              <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#8899AA]">
                Annual Recurring Revenue (ARR):{' '}
                <span className="font-semibold text-[#FFFFFF]">$5M</span>
              </p>

              <div className="mt-4 sm:mt-[23px] h-[4px] w-full bg-[#1A2438]" />
            </div>

            {/* Leakage Rate */}
            <div className="mt-[33px]">
              <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#8899AA]">
                Estimated Leakage Rate:{' '}
                <span className="font-semibold text-[#FFFFFF]">3%</span>
              </p>

              <div className="mt-4 sm:mt-[23px] h-[4px] w-full bg-[#1A2438]" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full flex flex-col gap-[18px]">

            {/* Main metric cards */}
            {primaryMetrics.map((metric) => (
              <ROIMetricCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                description={metric.description}
                valueColor={metric.valueColor}
              />
            ))}

            {/* Small metric cards */}
            <div className="grid grid-cols-2 gap-[10px]">
              {recoveryMetrics.map((metric) => (
                <ROIMetricCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  valueColor={metric.valueColor}
                  accent={metric.accent}
                  variant="compact"
                />
              ))}
            </div>

            {/* CTA */}
            <ActionButton
              variant="roi"
              className="-mt-[2px] font-['Inter'] font-bold text-[14px] text-[#000000]"
            >
              Start Your Free Revenue Health Check →
            </ActionButton>

          </div>
        </div>
      </div>
    </section>
  );
}
