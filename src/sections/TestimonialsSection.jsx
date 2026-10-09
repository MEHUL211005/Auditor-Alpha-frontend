// src/sections/TestimonialsSection.jsx

import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    quote:
      'Auditor Alpha found €340K in unbooked revenue in the first month. Our finance team couldn’t believe it had been sitting there for two quarters.',
    name: 'Sarah M.',
    role: 'CFO, Series C SaaS',
    rating: 5,
  },
  {
    quote:
      'We used to spend three days reconciling CRM to ledger before every board meeting. Now it’s automated and we get alerts in real time.',
    name: 'James T.',
    role: 'VP Finance, Enterprise Tech',
    rating: 5,
  },
  {
    quote:
      'That compliance audit trail alone was worth it. SOX prep went from 8 weeks to 2 days.',
    name: 'Rachel K.',
    role: 'Director of Accounting',
    rating: 5,
  },
  {
    quote:
      'Caught a rep who had been sandbagging deals. That pattern detection is genuinely impressive.',
    name: 'David L.',
    role: 'CRO, FinTech scale-up',
    rating: 5,
  },
  {
    quote:
      'Implementation took 48 hours. First discrepancy found in 72 hours. ROI was immediate.',
    name: 'Tom W.',
    role: 'Head of RevOps',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 py-10 sm:py-14">
        <div className="w-full max-w-[1061px] mx-auto">

          {/* Heading */}
          <div className="w-full flex flex-col items-center text-center">
            <h2 className="
  w-full max-w-[813px]
  font-['Inter']
  font-extrabold
  text-[27px] sm:text-[32px]
  leading-tight
  tracking-[-0.68px]
  text-[#FFFFFF]
  text-center
  mx-auto
">
  Trusted by teams who can&apos;t afford to lose revenue.
</h2>

            <p
  className="
    w-full max-w-[519px]
    font-['Inter']
    font-normal
    text-[15px]
    leading-[22.5px]
    tracking-[0px]
    text-[#6677AA]
    text-center
    mx-auto
    mt-[10px]
  "
>
  Trusted by financial teams at companies like these. Here&apos;s what they say.
</p>
          </div>

          {/* Testimonials */}
          <div className="mt-[40px]">

            {/* First row — 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  {...testimonial}
                  className="min-h-[220px]"
                />
              ))}
            </div>

            {/* Second row — 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              {testimonials.slice(3).map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  {...testimonial}
                  className="min-h-[190px]"
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}