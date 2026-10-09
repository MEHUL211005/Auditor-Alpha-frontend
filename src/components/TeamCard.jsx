export default function TeamCard({
  image,
  name,
  role,
  className = '',
}) {
  return (
    <article
      className={`
        w-full
        min-h-[272px]
        overflow-hidden
        rounded-[10px]
        border
        border-[#1E2B3D]
        bg-[#0B1423]
        ${className}
      `}
    >
      <div className="w-full h-[201px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="h-[71px] px-[12px] py-[12px]">
        <h3 className="font-['Inter'] font-semibold text-[15px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
          {name}
        </h3>

        <p className="mt-[2px] font-['Inter'] font-normal text-[11px] leading-[17px] text-[#7F8BA3]">
          {role}
        </p>
      </div>
    </article>
  );
}