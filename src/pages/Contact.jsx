import ContactHero from "../components/contact/ContactHero";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactFormSection from "../components/contact/ContactFormSection";
// import ContactMapSection from "../components/contact/ContactMapSection";
// import ContactFaqSection from "../components/contact/ContactFaqSection";
// import CTASection from "../components/home/CTASection";

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

      {/* <ContactMapSection /> */}

      {/* <ContactFaqSection /> */}

      {/* <CTASection /> */}
    </div>
  );
};

export default Contact;
