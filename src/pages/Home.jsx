import AmenitiesSection from "../components/home/AmenitiesSection";
// import FAQSection from "../components/home/FAQSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import GalleryPreview from "../components/home/GalleryPreview";
import HeroSection from "../components/home/HeroSection";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProjects/>
      <WhyChooseUs/>
      <AmenitiesSection/>
      <GalleryPreview/>
      <Testimonials/>
      {/* <FAQSection/> */}
    </>
  );
};

export default Home;