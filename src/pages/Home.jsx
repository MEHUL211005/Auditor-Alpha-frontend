import Navbar from '../components/Navbar';
import DiscrepancySection from '../sections/DiscrepancySection';
import HeroSection from '../sections/HeroSection';
import IntegrationBar from '../sections/IntegrationBar';
import OutcomesSection from '../sections/OutcomesSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#08090D]">
      <Navbar />
      <HeroSection />
      <IntegrationBar />
      <OutcomesSection />
      <DiscrepancySection />
    </div>
  );
}