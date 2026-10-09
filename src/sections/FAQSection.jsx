import { useState } from 'react';
import FAQItem from '../components/FAQItem';

const faqData = [
  {
    question: 'How long does setup take?',
    answer:
      'Auditor Alpha can typically be connected to your CRM and financial ledger within 48 hours. Once connected, the system begins reconciling your data automatically.',
  },
  {
    question: 'Do you write to our CRM or ledger?',
    answer:
      'No. Auditor Alpha is read-only by default. We analyze your CRM and financial data without changing your underlying records.',
  },
  {
    question: 'What accounting systems do you support?',
    answer:
      'We support common accounting and ERP systems including NetSuite, QuickBooks, Xero, and other systems through supported integrations.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Pricing is based on the size of your business, data volume, and the systems you want to connect.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. Data is encrypted in transit and at rest, with access controls designed to keep your information protected.',
  },
];

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 pt-8 sm:pt-10 pb-10 sm:pb-12">

        {/* FAQ Container */}
        <div className="w-full max-w-[700px] mx-auto">

          {/* Heading - LEFT ALIGNED */}
          <div className="w-full mb-[24px]">
            <h2
              className="
                font-['Inter']
                font-extrabold
                text-[28px] sm:text-[32px]
                leading-tight
                tracking-[-0.64px]
                text-[#FFFFFF]
                text-left
              "
            >
              Questions,
              <br />
              answered.
            </h2>
          </div>

          {/* FAQ List */}
          <div className="w-full flex flex-col gap-[8px]">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openQuestion === faq.question}
                onToggle={() =>
                  setOpenQuestion((current) =>
                    current === faq.question ? null : faq.question,
                  )
                }
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}