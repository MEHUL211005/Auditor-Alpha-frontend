import AssuranceItem from './AssuranceItem';

export default function AssuranceCard({
  title,
  items,
  type = 'negative',
}) {
  const isPositive = type === 'positive';

  return (
    <div
      className={`
        w-full
        min-h-[280px]
        bg-[#0D1421]
        border
        rounded-[12px]
        p-4 sm:p-[24px]
        ${isPositive ? 'border-[rgba(0,201,167,0.25)]' : 'border-[#1A2438]'}
      `}
    >
      <h3
        className={`
          flex items-center gap-[9px]
          font-['Inter'] font-semibold text-[14px] leading-[22px]
          ${isPositive ? 'text-[#00C9A7]' : 'text-[#FF6B6B]'}
        `}
      >
        <span className="leading-none text-[14px]">
          {isPositive ? '✓' : '×'}
        </span>
        {title}
      </h3>

      <ul className="mt-[24px] flex flex-col gap-[14px]">
        {items.map((item) => (
          <AssuranceItem
            key={item}
            type={type}
          >
            {item}
          </AssuranceItem>
        ))}
      </ul>
    </div>
  );
}