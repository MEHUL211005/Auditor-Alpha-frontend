export default function ROIMetricCard({
  label,
  value,
  description,
  valueColor = 'red',
  variant = 'default',
  accent = false,
  className = '',
}) {
  const isCompact = variant === 'compact';

  const valueColors = {
    red: 'text-[#FF6B6B]',
    green: 'text-[#00C9A7]',
    white: 'text-[#FFFFFF]',
  };

  const shell = accent
    ? 'bg-[#00C9A70F] border-[#00C9A759]'
    : 'bg-[#0D1421] border-[#1A2438]';

  if (isCompact) {
    return (
      <div
        className={`w-full h-[97px] ${shell} border rounded-[8px] flex flex-col items-center pt-[27px] ${className}`}
      >
        <p
          className={`font-['Inter'] font-bold text-[21px] leading-[26px] text-center ${valueColors[valueColor]}`}
        >
          {value}
        </p>
        <p className="font-['Inter'] font-medium text-[11.5px] leading-[16px] text-[#6677AA] text-center">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-[154px] ${shell} border rounded-[8px] flex flex-col items-center pt-[23px] ${className}`}
    >
      <p className="font-['Inter'] font-normal text-[13px] leading-[16px] text-[#6677AA] text-center">
        {label}
      </p>

      <p
        className={`mt-[18px] font-['Inter'] font-extrabold text-[42px] leading-[50px] text-center ${valueColors[valueColor]}`}
      >
        {value}
      </p>

      {description && (
        <p className="mt-[6px] font-['Inter'] font-normal text-[11.5px] leading-[14px] text-[#3F4B5C] text-center">
          {description}
        </p>
      )}
    </div>
  );
}
