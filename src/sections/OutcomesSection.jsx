import { outcomesData } from '../data/content';
import OutcomeCard from '../components/OutcomeCard';

export default function OutcomesSection() {
  return (
    <section className="w-full bg-[#08090D] pt-[80px] pb-[12px] flex justify-center">
      <div className="w-[1109px] max-w-full min-h-[695.19px] px-[24px] flex flex-col items-center">
        <div className="text-center mb-[56px] space-y-3">
          <p className="font-['Inter'] font-normal text-[14px] leading-[21px] text-[#8899AA]">
            From close-date to finance sign-off, Auditor Alpha monitors everything.
          </p>
          <h2 className="font-['Inter'] font-bold text-[36px] leading-[44px] text-[#FFFFFF] tracking-[-0.5px]">
            One Platform. Measurable Enterprise Outcomes.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {outcomesData.map((card) => (
            <OutcomeCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              features={card.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
