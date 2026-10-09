export default function AssuranceItem({
  children,
  type = 'negative',
}) {
  const isPositive = type === 'positive';

  return (
    <li className="flex items-center gap-[10px] font-['Inter'] font-normal text-[14px] leading-[19px]">
      <span className={`leading-none text-[16px] ${isPositive ? 'text-[#00C9A7]' : 'text-[#FF6B6B]'}`}>
        {isPositive ? '✓' : '×'}
      </span>

      <span className={isPositive ? 'text-[#8899AA]' : 'text-[#6677AA]'}>
        {children}
      </span>
    </li>
  );
}