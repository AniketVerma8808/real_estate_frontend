import React from "react";
import ProjectsHero from "../components/projects/ProjectsHero";
import InvestmentBenefits from "../components/home/InvestmentBenefits";
import FinanceSection from "../components/home/FinanceSection";
import GalleryPreview from "../components/home/GalleryPreview";
import CTASection from "../components/home/CTASection";

const Projects = () => {
  return (
    <>
      <ProjectsHero />

      {/* <ProjectsIntro /> */}

      {/* <FeaturedProjects /> */}

      {/* <ProjectCategories /> */}

      <InvestmentBenefits />

      <FinanceSection />

      {/* <LocationAdvantages /> */}

      <GalleryPreview />

      <CTASection />
    </>
  );
};

export default Projects;
