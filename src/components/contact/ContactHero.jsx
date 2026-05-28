import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <section
      className="
    relative
    overflow-hidden
    min-h-[70vh]
    flex
    items-center
    border-b
    pt-[120px]
    md:pt-[140px]
  "
      style={{
        background: "var(--primary-color)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* ======================
          BACKGROUND GLOWS
      ====================== */}

      <div
        className="
          absolute
          top-[-150px]
          left-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          blur-[180px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          blur-[180px]
          opacity-10
        "
        style={{
          background: "#ffffff",
        }}
      />

      <div className="container-custom relative z-10">
        <div
          className="
            max-w-[950px]
            mx-auto
            text-center
          "
        >
          {/* ======================
              BADGE
          ====================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              mb-8
              backdrop-blur-xl
            "
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
              color: "var(--white-color)",
            }}
          >
            <span
              className="
                w-2
                h-2
                rounded-full
              "
              style={{
                background: "var(--secondary-color)",
              }}
            />
            Contact Us
          </motion.div>

          {/* ======================
              HEADING
          ====================== */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-[40px]
              sm:text-[50px]
              md:text-[64px]
              lg:text-[72px]
              font-bold
              leading-[1.08]
              tracking-[-2px]
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            Let's Discuss Your
            <span
              style={{
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              Next Real Estate
            </span>
            <br />
            Investment Journey
          </motion.h1>

          {/* ======================
              DESCRIPTION
          ====================== */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="
              max-w-[760px]
              mx-auto
              mt-8
              text-[15px]
              md:text-[17px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Our team is ready to help you explore premium plotting projects,
            township developments, and future-ready investment opportunities
            designed for long-term value and growth.
          </motion.p>

          {/* ======================
              BUTTONS
          ====================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
              mt-10
            "
          >
            <button className="primary-btn flex items-center justify-center gap-2">
              Get Free Consultation
              <ArrowRight size={18} />
            </button>

            <button
              className="
                flex
                items-center
                justify-center
                gap-2
                px-8
                py-4
                rounded-full
                border
                font-medium
              "
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                color: "var(--white-color)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <PhoneCall size={18} />
              Call Now
            </button>
          </motion.div>

          {/* ======================
              BREADCRUMB
          ====================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
            }}
            className="
              flex
              items-center
              justify-center
              gap-3
              mt-16
              text-sm
            "
          >
            <Link
              to="/"
              style={{
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Home
            </Link>

            <span
              style={{
                color: "rgba(255,255,255,0.3)",
              }}
            >
              /
            </span>

            <span
              style={{
                color: "var(--secondary-color)",
              }}
            >
              Contact
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
