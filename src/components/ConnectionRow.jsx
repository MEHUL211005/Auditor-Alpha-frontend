export default function ConnectionRow({ name, status }) {
  return (
    <div className="flex items-center justify-between h-[34px] border-b border-[#182233] last:border-b-0">
      <div className="flex items-center gap-[10px]">
        <span className="w-[5px] h-[5px] rounded-full bg-[#00C9A7] flex-shrink-0" />

        <span className="font-['Inter'] font-normal text-[12px] leading-[18px] text-[#C6D0E1]">
          {name}
        </span>
      </div>

      <span className="font-['Inter'] font-normal text-[9px] leading-[13px] text-[#00C9A7] bg-[#00C9A71A] px-[8px] py-[3px] rounded-[3px]">
        {status}
      </span>
    </div>
  );
}
