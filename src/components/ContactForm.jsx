import ActionButton from './ActionButton';

export default function ContactForm() {
  return (
    <div className="w-full max-w-[360px] bg-[#0D1421] border border-[#1A2438] rounded-[10px] p-4 sm:p-[20px]">
      <form className="w-full h-full">

        {/* Work Email */}
        <div className="mb-[14px]">
          <label
            htmlFor="email"
            className="
              block
              font-['Inter']
              font-normal
              text-[12px]
              leading-[18px]
              text-[#8899AA]
              mb-[6px]
            "
          >
            Work Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="
              w-full
              h-[36px]
              px-[12px]
              rounded-[6px]
              border
              border-[#1A2438]
              bg-[#080F1B]
              outline-none
              font-['Inter']
              text-[12px]
              text-[#FFFFFF]
              placeholder:text-[#596B82]
              focus:border-[#00C9A7]
            "
          />
        </div>

        {/* Company */}
        <div className="mb-[16px]">
          <label
            htmlFor="company"
            className="
              block
              font-['Inter']
              font-normal
              text-[12px]
              leading-[18px]
              text-[#8899AA]
              mb-[6px]
            "
          >
            Company
          </label>

          <input
            id="company"
            type="text"
            placeholder="Your company name"
            className="
              w-full
              h-[36px]
              px-[12px]
              rounded-[6px]
              border
              border-[#1A2438]
              bg-[#080F1B]
              outline-none
              font-['Inter']
              text-[12px]
              text-[#FFFFFF]
              placeholder:text-[#596B82]
              focus:border-[#00C9A7]
            "
          />
        </div>

        <ActionButton
          type="submit"
          variant="primary"
          className="
            w-full
            h-[38px]
            rounded-[6px]
            px-[16px]
            py-[8px]
            font-['Inter']
            font-semibold
            text-[12px]
            leading-[18px]
            text-[#06100E]
          "
        >
          Book a Discovery Call →
        </ActionButton>

      </form>
    </div>
  );
}