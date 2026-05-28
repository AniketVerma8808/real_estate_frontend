import ContactHero from "../components/contact/ContactHero";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactFormSection from "../components/contact/ContactFormSection";
import CommonCTA from "../components/common/CommonCTA";
import ContactMapSection from "../components/contact/ContactMapSection";

const Contact = () => {
  return (
    <div
      style={{
        background: "var(--primary-color)",
      }}
    >
      <ContactHero />

      <ContactInfoCards />

      <ContactFormSection />

      <ContactMapSection />

      {/* <ContactFaqSection /> */}

      <CommonCTA />
    </div>
  );
};

export default Contact;
