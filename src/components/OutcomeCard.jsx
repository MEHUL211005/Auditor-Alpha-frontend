export default function OutcomeCard({
  icon,
  title,
  description,
  features,
  variant = 'default',
  className = '',
}) {
  const isCompact = variant === 'compact';

  if (isCompact) {
    return (
      <div className={`w-[354px] bg-[#0D1421] border border-[#1A2438] rounded-[12px] p-[24px] ${className}`}>
        <h3 className="font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[0.88px] uppercase text-[#00C9A7] mb-[12px]">
          {title.toUpperCase()}
        </h3>

        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#8899AA]">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-[#0D0E15] border border-gray-800/80 rounded-[12px] p-[32px] flex flex-col justify-between hover:border-gray-700/80 transition-colors ${className}`}>
      <div>
        <div className="w-[40px] h-[40px] rounded-[8px] bg-[#141622] flex items-center justify-center text-[20px] mb-[24px]">
          {icon}
        </div>

        <h3 className="font-['Inter'] font-bold text-[20px] leading-[28px] text-[#FFFFFF] mb-[12px]">
          {title}
        </h3>

        <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#8899AA] mb-[32px]">
          {description}
        </p>
      </div>

      <ul className="space-y-[12px] border-t border-gray-800/60 pt-[24px]">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-[10px] text-[13px] text-[#8899AA] font-['Inter']">
            <svg className="w-[14px] h-[14px] text-[#00C9A7] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
