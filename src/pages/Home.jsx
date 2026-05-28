import AboutSection from "../components/home/AboutSection";
import AmenitiesSection from "../components/home/AmenitiesSection";
import CTASection from "../components/home/CTASection";
import FAQSection from "../components/home/FAQSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import FinanceSection from "../components/home/FinanceSection";
import GalleryPreview from "../components/home/GalleryPreview";
import HeroSection from "../components/home/HeroSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import InvestmentBenefits from "../components/home/InvestmentBenefits";
import StatsSection from "../components/home/StatsSection";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />

      <StatsSection />
      <AboutSection />
      <FeaturedProjects />
      <InvestmentBenefits />
      <FinanceSection />
      <AmenitiesSection />
      <WhyChooseUs />

      <HowItWorksSection />

      <GalleryPreview />

      <Testimonials />

      <CTASection />
    </>
  );
};

export default Home;
