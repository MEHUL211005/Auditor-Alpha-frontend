import ContactForm from '../components/ContactForm';

export default function ContactSection() {
  return (
    <section className="w-full bg-[#08090D] border-t border-[#1A2438] flex justify-center">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 py-10 sm:py-12">
        
        <div className="w-full max-w-[1061px] mx-auto flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-8 lg:gap-10">

          {/* Left */}
          <div className="w-full max-w-[430px] pt-[2px]">

            <p className="
              font-['Inter']
              font-semibold
              text-[11px]
              leading-[17px]
              tracking-[1.3px]
              uppercase
              text-[#00C9A7]
            ">
              Get in touch
            </p>

            <h2 className="
              w-full
              mt-[16px]
              font-['Inter']
              font-extrabold
              text-[30px]
              leading-[42px]
              tracking-[-0.6px]
              text-[#FFFFFF]
            ">
              Talk to us about your
              <br />
              revenue assurance.
            </h2>

            <p className="
              w-full
              mt-[16px]
              font-['Inter']
              font-normal
              text-[14px]
              leading-[21px]
              text-[#6677AA]
            ">
              Start the audit by entering your email or WhatsApp, or book a
              30-minute discovery call with the Auditor Alpha team.
            </p>

          </div>

          {/* Form */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
}