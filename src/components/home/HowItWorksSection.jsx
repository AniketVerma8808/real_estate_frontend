import { motion } from "framer-motion";
import {
  PhoneCall,
  MapPinned,
  FileCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Inquiry",
    description:
      "Connect with our property experts and discuss your investment requirements.",
  },

  {
    number: "02",
    icon: MapPinned,
    title: "Site Visit",
    description:
      "Visit project locations, explore amenities, and verify property details.",
  },

  {
    number: "03",
    icon: FileCheck,
    title: "Booking",
    description:
      "Select your preferred plot and complete the booking process with ease.",
  },

  {
    number: "04",
    icon: BadgeCheck,
    title: "Registration",
    description:
      "Complete legal registration and secure ownership with full transparency.",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      className="
        relative
        py-20
        md:py-24
        lg:py-28
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* GLOW */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[320px]
          h-[320px]
          rounded-full
          blur-[140px]
          opacity-20
        "
        style={{
          background: "var(--secondary-color)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-center
            max-w-[850px]
            mx-auto
            mb-20
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              border
              mb-8
            "
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
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

            Simple Buying Process
          </div>

          <h2
            className="
              text-[34px]
              md:text-[48px]
              lg:text-[58px]
              font-bold
              leading-[1.1]
              tracking-[-2px]
            "
            style={{
              color: "var(--white-color)",
            }}
          >
            How It
            <span
              style={{
                color: "var(--secondary-color)",
              }}
            >
              {" "}
              Works
            </span>
          </h2>

          <p
            className="
              mt-6
              text-[15px]
              md:text-[16px]
              leading-8
            "
            style={{
              color: "rgba(255,255,255,0.72)",
            }}
          >
            From your first inquiry to final registration,
            our transparent process ensures a smooth and
            hassle-free property buying experience.
          </p>
        </motion.div>

        {/* STEPS */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  relative
                  p-7
                  rounded-[30px]
                  border
                  overflow-hidden
                "
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* STEP NUMBER */}

                <h3
                  className="
                    text-[48px]
                    font-bold
                    leading-none
                    mb-6
                  "
                  style={{
                    color: "rgba(200,169,107,0.18)",
                  }}
                >
                  {step.number}
                </h3>

                {/* ICON */}

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                  style={{
                    background:
                      "rgba(200,169,107,0.12)",
                  }}
                >
                  <Icon
                    size={26}
                    style={{
                      color: "var(--secondary-color)",
                    }}
                  />
                </div>

                {/* TITLE */}

                <h4
                  className="
                    text-[22px]
                    font-bold
                  "
                  style={{
                    color: "var(--white-color)",
                  }}
                >
                  {step.title}
                </h4>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-7
                  "
                  style={{
                    color:
                      "rgba(255,255,255,0.68)",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;