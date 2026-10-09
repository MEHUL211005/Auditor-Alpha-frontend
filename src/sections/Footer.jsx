import FooterColumn from '../components/FooterColumn';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Security', href: '#security' },
      { label: 'API', href: '#api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'GDPR', href: '#gdpr' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full !bg-[#050609] border-t border-[#1A2438] flex justify-center">
      <div className="w-full px-5 pt-8 pb-3">

        {/* Main Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-[1.9fr_1fr_1fr_1fr] gap-x-5 gap-y-6 pb-6 sm:min-h-[189px] sm:pb-0">

          {/* Brand */}
          <div className="flex flex-col items-start">
            <a href="#" className="flex items-center gap-[7px]">
              <span className="w-[16px] h-[16px] rounded-[3px] bg-[#00C9A7]" />

              <span className="font-['Inter'] font-semibold text-[11px] leading-[17px] text-white">
                Auditor Alpha
              </span>
            </a>

            <p className="max-w-[270px] mt-[14px] font-['Inter'] font-normal text-[11px] leading-[18px] text-[#454B5D]">
              Continuous CRM-to-ledger revenue reconciliation for high-growth SaaS companies.
            </p>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1A2438]" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[12px] pt-[18px]">
          <p className="font-['Inter'] font-normal text-[10px] leading-[15px] text-[#454B5D]">
            © 2024 Auditor Alpha Ltd. All rights reserved.
          </p>

          <p className="font-['Inter'] font-normal text-[10px] leading-[15px] text-[#454B5D]">
            SOC 2 Type II · ISO 27001 · GDPR Compliant
          </p>
        </div>

      </div>
    </footer>
  );
}