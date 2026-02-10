import StickyHeader from "@/components/landing/StickyHeader";
import HeroSection from "@/components/landing/HeroSection";
import TargetAudience from "@/components/landing/TargetAudience";
import TenReasons from "@/components/landing/TenReasons";
import Deliverables from "@/components/landing/Deliverables";
import Methodology from "@/components/landing/Methodology";
import Authority from "@/components/landing/Authority";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import ScrollRevealBlocks from "@/components/landing/ScrollRevealBlocks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <ScrollRevealBlocks />
      <TargetAudience />
      <TenReasons />
      <Deliverables />
      <Methodology />
      <Authority />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
