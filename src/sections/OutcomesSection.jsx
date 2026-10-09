import { outcomesData } from '../data/content';
import OutcomeCard from '../components/OutcomeCard';

export default function OutcomesSection() {
  return (
    <section className="w-full bg-[#08090D] pt-12 pb-8 sm:pt-14 sm:pb-10 flex justify-center">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 flex flex-col items-center">
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <p className="font-['Inter'] font-normal text-[14px] leading-[21px] text-[#8899AA]">
            From close-date to finance sign-off, Auditor Alpha monitors everything.
          </p>
          <h2 className="max-w-[760px] font-['Inter'] font-bold text-[27px] sm:text-[32px] lg:text-[36px] leading-tight text-[#FFFFFF] tracking-[-0.5px]">
            One Platform. Measurable Enterprise Outcomes.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
