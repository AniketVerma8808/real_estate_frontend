import {
  ArrowRight,
  Building2,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  HeartHandshake,
  Landmark,
  Target,
  Eye,
  CheckCircle2,
  Users,
  TrendingUp,
  Home,
} from "lucide-react";
import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import WhyChooseUsAbout from "../components/about/WhyChooseUsAbout";
import ProjectHighlights from "../components/about/ProjectHighlights";
import CommonCTA from "../components/common/CommonCTA";

const services = [
  {
    icon: <Home size={30} />,
    title: "Residential Plot Development",
    desc: "Premium residential plotting projects developed in fast-growing and future-ready locations.",
  },

  {
    icon: <Building2 size={30} />,
    title: "Township Development",
    desc: "Modern township planning with roads, infrastructure, green zones and community facilities.",
  },

  {
    icon: <TrendingUp size={30} />,
    title: "Investment Consultancy",
    desc: "Professional guidance for secure, transparent and profitable real estate investments.",
  },
];

const values = [
  "Transparency",
  "Integrity",
  "Commitment",
  "Customer First",
  "Innovation",
  "Trust",
];

const process = [
  {
    step: "01",
    title: "Project Selection",
  },

  {
    step: "02",
    title: "Site Visit & Consultation",
  },

  {
    step: "03",
    title: "Documentation & Booking",
  },

  {
    step: "04",
    title: "Registration & Ownership",
  },
];

const About = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--primary-color)",
      }}
    >
      <AboutHero />

      <CompanyOverview />

      <WhyChooseUsAbout />

      <ProjectHighlights />

      <CommonCTA />
    </div>
  );
};

export default About;
