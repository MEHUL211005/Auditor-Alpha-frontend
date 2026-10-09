export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="
        w-full
        bg-[#0D1421]
        border
        border-[#1A2438]
        rounded-[8px]
        overflow-hidden
        transition-all
        duration-200
      "
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          w-full
          min-h-[52px]
          px-[18px]
          py-[14px]
          flex
          items-center
          justify-between
          text-left
        "
      >
        <span
          className="
            font-['Inter']
            font-normal
            text-[12px]
            leading-[18px]
            text-[#FFFFFF]
          "
        >
          {question}
        </span>

        <span
          className="
            flex
            items-center
            justify-center
            w-[20px]
            h-[20px]
            flex-shrink-0
            font-['Inter']
            font-medium
            text-[15px]
            leading-none
            text-[#00C9A7]
          "
        >
          {isOpen ? '×' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="px-[18px] pb-[18px]">
          <div className="border-t border-[#1A2438] pt-[14px]">
            <p
              className="
                font-['Inter']
                font-normal
                text-[12px]
                leading-[20px]
                text-[#6677AA]
              "
            >
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}