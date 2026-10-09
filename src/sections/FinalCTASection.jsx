import ActionButton from '../components/ActionButton';

export default function FinalCTASection() {
  return (
    <section className="w-full bg-[#08090D] border-t border-[#1A2438] flex justify-center">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 py-10 sm:py-14">
        
        <div className="w-full max-w-[900px] mx-auto flex flex-col items-center text-center">

          <p
            className="
              font-['Inter']
              font-semibold
              text-[11px]
              leading-[17px]
              tracking-[1.5px]
              uppercase
              text-[#00C9A7]
              mb-[16px]
            "
          >
            Start for free
          </p>

          
          <h2
            className="
              max-w-[700px]
              font-['Inter']
              font-extrabold
              text-[28px] sm:text-[34px]
              leading-tight
              tracking-[-0.68px]
              text-[#FFFFFF]
            "
          >
            Find the revenue you're losing,
            <br />
            free for 7 days.
          </h2>

          
          <p
            className="
              max-w-[620px]
              mt-[16px]
              font-['Inter']
              font-normal
              text-[14px]
              leading-[21px]
              text-[#6677AA]
            "
          >
            Connect your CRM and ledger. Get your first Revenue Health Check
            delivered within 24 hours. No credit card required.
          </p>

          
          <ActionButton
            type="button"
            variant="primary"
            className="
              w-full max-w-[260px]
              h-[46px]
              mt-[24px]
              rounded-[6px]
              px-[20px]
              py-[12px]
              font-['Inter']
              font-semibold
              text-[12px]
              leading-[18px]
              text-[#06100E]
            "
          >
            Start 7-Day Free Revenue Health Check →
          </ActionButton>

          
          <p
            className="
              mt-[12px]
              font-['Inter']
              font-normal
              text-[10px]
              leading-[15px]
              text-[#3F4B5C]
            "
          >
            No credit card required · Cancel anytime · SOC 2 certified
          </p>

        </div>
      </div>
    </section>
  );
}