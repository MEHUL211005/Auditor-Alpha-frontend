import OutcomeCard from '../components/OutcomeCard';

const statusStyles = {
  Flagged: 'text-[#FF6B6B] bg-[#FF6B6B]/10',
  Matched: 'text-[#00C9A7] bg-[#00C9A7]/10',
  Warning: 'text-[#F5C76A] bg-[#FBBF24]/10',
};

const discrepancyRows = [
  { deal: 'Enterprise Seat', crm: '$48,000', ledger: '$36,000', gap: '-$12,000', status: 'Flagged' },
  { deal: 'Pro License', crm: '$24,000', ledger: '$24,000', gap: '$0', status: 'Matched' },
  { deal: 'Add-on Module', crm: '$18,500', ledger: '$5,500', gap: '-$13,000', status: 'Flagged' },
  { deal: 'Support Tier', crm: '$8,000', ledger: '$8,000', gap: '$0', status: 'Matched' },
  { deal: 'Training Pack', crm: '$12,000', ledger: '$11,000', gap: '-$1,000', status: 'Warning' },
];

const rightCardData = [
  {
    title: 'METHODOLOGY & MATCHING ENGINE',
    description:
      'Auditor Alpha uses fuzzy matching and semantic normalization to reconcile deal names across CRM and ledger systems, even when naming conventions differ.',
  },
  {
    title: 'SMART AI DETECTION',
    description:
      'Our ML model is trained on 14M+ revenue records to identify split deals, deferred revenue misclassifications, and common revenue recognition errors.',
  },
  {
    title: 'FORENSIC RULES',
    description:
      '100+ built-in audit rules covering timing, amount, account, and entity discrepancies. Fully configurable per your revenue recognition policy.',
  },
];

export default function DiscrepancySection() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1109px] opacity-100 py-10 sm:py-12 px-4 sm:px-6">
        <div className="w-full max-w-[1061px] mx-auto">
          <div className="mb-[8px] pl-0">
            <p className="font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[1.32px] text-[#00C9A7] uppercase">
              Auditor Alpha in Action
            </p>
          </div>

          <h2 className="font-['Inter'] font-extrabold text-[27px] sm:text-[32px] leading-tight tracking-[-0.64px] text-[#FFFFFF] mb-[8px]">
            See what a caught discrepancy looks like.
          </h2>

          <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#8899AA] mb-[28px]">
            Auditor Alpha shows you which deals are bleeding and how the numbers don&apos;t match.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-[1.3fr_0.95fr] gap-4 sm:gap-6">
            <div className="bg-[#0D1421] border border-[#1A2438] rounded-[12px] overflow-hidden">
              <div className="flex items-center h-[48px] px-[18px] border-b border-[#1A2438] bg-[#0D1421]">
                <span className="flex items-center gap-[8px] font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[0.88px] text-[#7C8DA6] uppercase">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#FF6B6B]"></span>
                  Q4 Enterprise Audit — Acme Corp
                </span>
              </div>

              <div className="overflow-x-auto px-3 sm:px-[16px] pt-[14px] pb-[8px]">
                <div className="min-w-[500px]">
                <div className="grid grid-cols-[1.45fr_0.9fr_0.9fr_0.9fr_0.7fr] gap-[8px] px-[4px] pb-[8px] text-left">
                  <span className="font-['Inter'] font-medium text-[10px] leading-[15px] tracking-[0.8px] uppercase text-[#6D7D9B]">Deal</span>
                  <span className="font-['Inter'] font-medium text-[10px] leading-[15px] tracking-[0.8px] uppercase text-[#6D7D9B]">CRM Value</span>
                  <span className="font-['Inter'] font-medium text-[10px] leading-[15px] tracking-[0.8px] uppercase text-[#6D7D9B]">Ledger Value</span>
                  <span className="font-['Inter'] font-medium text-[10px] leading-[15px] tracking-[0.8px] uppercase text-[#6D7D9B]">Gap</span>
                  <span className="font-['Inter'] font-medium text-[10px] leading-[15px] tracking-[0.8px] uppercase text-[#6D7D9B]">Status</span>
                </div>

                <div className="space-y-[8px]">
                  {discrepancyRows.map((row) => (
                    <div
                      key={row.deal}
                      className="grid grid-cols-[1.45fr_0.9fr_0.9fr_0.9fr_0.7fr] items-center gap-[8px] px-[4px] py-[6px] text-[12px]"
                    >
                      <span className="font-['Inter'] font-normal text-[#E8EDF9]">{row.deal}</span>
                      <span className="font-['Inter'] font-normal text-[#C6D0E1]">{row.crm}</span>
                      <span className="font-['Inter'] font-normal text-[#C6D0E1]">{row.ledger}</span>
                      <span className={`font-['Inter'] font-bold ${row.gap.startsWith('-') ? 'text-[#FF6B6B]' : 'text-[#00C9A7]'}`}>
                        {row.gap}
                      </span>
                      <span className={`inline-flex items-center justify-center rounded-[4px] px-[6px] py-[2px] text-[9px] font-['Inter'] font-semibold uppercase ${statusStyles[row.status]}`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
                </div>
              </div>

              <div className="mx-[16px] mt-[8px] mb-[16px] rounded-[6px] bg-[#FF6B6B14] px-[12px] py-[10px] flex items-center justify-between">
                <span className="font-['Inter'] font-medium text-[11px] leading-[16.5px] uppercase tracking-[0.88px] text-[#F8E8E8]">
                  Total Discrepancy Detected
                </span>
                <span className="font-['Inter'] font-bold text-[18px] leading-[27px] text-[#FFFFFF]">-$26,000</span>
              </div>
            </div>

            <div className="space-y-[16px]">
              {rightCardData.map((card) => (
                <OutcomeCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  variant="compact"
                  className="!w-full !bg-[#0D1421] !border-[#1A2438] !rounded-[12px] !p-[16px] sm:!p-[20px]"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
