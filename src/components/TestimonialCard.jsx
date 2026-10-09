export default function TestimonialCard({
  quote,
  name,
  role,
  rating = 5,
  className = '',
}) {
  return (
    <article
      className={`w-full bg-[#0D1421] border border-[#1A2438] rounded-[12px] p-4 sm:p-[24px] flex flex-col ${className}`}
    >
      {/* Rating */}
      <div className="flex items-center gap-[6px] mb-[12px]">
        {Array.from({ length: rating }).map((_, index) => (
          <span
            key={index}
            className="font-['Inter'] font-bold text-[12px] leading-[14px] text-[#F5C518]"
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <div className="flex-1">
        <p className="font-['Inter'] font-normal text-[13px] leading-[20px] text-[#C6D0E1]">
          “{quote}”
        </p>
      </div>

      {/* Author */}
      <div className="mt-[18px]">
        <p className="font-['Inter'] font-semibold text-[11px] leading-[16px] text-[#FFFFFF]">
          {name}
        </p>

        <p className="font-['Inter'] font-normal text-[10px] leading-[14px] text-[#596B82] mt-[4px]">
          {role}
        </p>
      </div>
    </article>
  );
}