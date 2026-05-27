import AmenitiesSection from "../components/home/AmenitiesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProjects/>
      <WhyChooseUs/>
      <AmenitiesSection/>
    </>
  );
};

export default Home;