import ConnectionCard from '../components/ConnectionCard';
import ContainerLive from '../assets/Containerlive.png';

const crmSystems = [
  { name: 'Salesforce', status: 'Connected' },
  { name: 'HubSpot', status: 'Connected' },
  { name: 'Pipedrive', status: 'Connected' },
  { name: 'Zoho CRM', status: 'Connected' },
];

const ledgerSystems = [
  { name: 'QuickBooks', status: 'Connected' },
  { name: 'Xero', status: 'Connected' },
  { name: 'NetSuite', status: 'Connected' },
  { name: 'Sage Intacct', status: 'Connected' },
];

function LiveSync() {
  return (
    <div className="flex flex-col items-center justify-center shrink-0">
      <img
        src={ContainerLive}
        alt="Live sync between CRM and ledger"
        className="w-[40px] h-[80px] sm:w-[57px] sm:h-[130px] object-contain"
      />
    </div>
  );
}

export default function ConnectionsSection() {
  return (
    <section className="w-full bg-[#08090D] flex justify-center">
      <div className="w-full max-w-[1109px] px-4 sm:px-6 pt-10 sm:pt-14 pb-12 sm:pb-16 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center">
          <p className="font-['Inter'] font-semibold text-[11px] leading-[16.5px] tracking-[1.32px] uppercase text-[#00C9A7] mb-[12px]">
            Connected Sources
          </p>

          <h2 className="font-['Inter'] font-extrabold text-[28px] sm:text-[32px] leading-tight tracking-[-0.64px] text-[#FFFFFF]">
            Two Connections,
            <br />
            Complete Visibility.
          </h2>

          <p className="max-w-[560px] mx-auto mt-[16px] font-['Inter'] font-normal text-[16px] leading-[24px] text-[#8899AA]">
            Connect your CRM and financial ledger once. Auditor Alpha continuously
            reconciles both data streams to surface every discrepancy.
          </p>
        </div>

        {/* Connection Cards */}
        <div className="mt-8 sm:mt-12 w-full flex flex-col xl:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 xl:gap-8">
          <ConnectionCard title="CRM Systems" systems={crmSystems} />

          <LiveSync />

          <ConnectionCard title="Ledger Systems" systems={ledgerSystems} />
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-[40px] max-w-[620px] font-['Inter'] font-normal text-[11px] leading-[16.5px] text-[#3F4B5C]">
          All connections are read-only. We never write to your CRM or ledger. SOC 2 Type II certified.
        </p>
      </div>
    </section>
  );
}
