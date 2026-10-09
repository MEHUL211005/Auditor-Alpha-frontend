import Navbar from '../components/Navbar';
import AssuranceSection from '../sections/AssuranceSection';
import ConnectionsSection from '../sections/ConnectionsSection';
import ContactSection from '../sections/ContactSection';
import DiscrepancySection from '../sections/DiscrepancySection';
import HeroSection from '../sections/HeroSection';
import IntegrationBar from '../sections/IntegrationBar';
import OutcomesSection from '../sections/OutcomesSection';
import ROISection from '../sections/ROISection';
import TeamsSection from '../sections/TeamsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import TrustedBar from '../sections/TrustedBar';
import FAQSection from '../sections/FAQSection';
import FinalCTASection from '../sections/FinalCTASection';
import Footer from '../sections/Footer';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#08090D]">
      <Navbar />
      <HeroSection />
      <IntegrationBar />
      <OutcomesSection />
      <DiscrepancySection />
      <ConnectionsSection />
      <ROISection />
      <AssuranceSection />
      <TrustedBar />
      <TestimonialsSection />
      <TeamsSection />
      <ContactSection />
      <FAQSection />
      <FinalCTASection />
      <Footer/>
    </div>
  );
}