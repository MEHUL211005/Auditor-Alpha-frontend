import ConnectionRow from './ConnectionRow';

export default function ConnectionCard({ title, systems, className = '' }) {
  return (
    <div
      className={`w-full max-w-[458px] bg-[#0D1421] border border-[#1A2438] rounded-[8px] px-[18px] py-[16px] ${className}`}
    >
      <h3 className="font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[0.88px] uppercase text-[#00C9A7] mb-[8px]">
        {title}
      </h3>

      <div>
        {systems.map((system) => (
          <ConnectionRow
            key={system.name}
            name={system.name}
            status={system.status}
          />
        ))}
      </div>
    </div>
  );
}
