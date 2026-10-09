export default function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="font-['Inter'] font-semibold text-[11px] leading-[17px] text-white mb-[15px]">
        {title}
      </h3>

      <ul className="flex flex-col gap-[6px]">
        {links.map((link) => (
          <li key={link.label} className="leading-[16px]">
            <a
              href={link.href}
              className="
                font-['Inter']
                font-normal
                text-[11px]
                leading-[16px]
                text-[#596174]
                hover:text-[#00C9A7]
                transition-colors
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
