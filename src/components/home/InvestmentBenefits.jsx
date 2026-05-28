import { motion } from "framer-motion";

import {
  TrendingUp,
  ShieldCheck,
  Landmark,
  MapPinned,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Appreciation",
    description:
      "Projects located in rapidly developing investment corridors with strong future value growth.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Investment",
    description:
      "Legally verified plotting projects with transparent documentation and trusted approvals.",
  },

  {
    icon: Landmark,
    title: "Easy Financing",
    description:
      "Flexible EMI plans and bank loan assistance available for selected premium projects.",
  },

  {
    icon: MapPinned,
    title: "Prime Locations",
    description:
      "Strategically connected townships near highways, schools, and commercial zones.",
  },
];

const InvestmentBenefits = () => {
  return (
    <section
      className="
        relative
        py-16
        md:py-20
        lg:py-28
        overflow-hidden
      "
      style={{
        background: "var(--primary-color)",
      }}
    >
      {/* ======================
          BACKGROUND GLOW
      ====================== */}

      <div
        className="
          absolute
          top-0
          left-0
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
        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-20
            items-center
          "
        >
          {/* ======================
              LEFT CONTENT
          ====================== */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* TAG */}

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
                backdrop-blur-md
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
              Investment Benefits
            </div>

            {/* HEADING */}

            <h2
              className="
                text-[34px]
                sm:text-[42px]
                md:text-[52px]
                lg:text-[64px]
                font-bold
                leading-[1.08]
                tracking-[-2px]
                max-w-[700px]
              "
              style={{
                color: "var(--white-color)",
              }}
            >
              Smart Investments
              <span
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {" "}
                With Long-Term{" "}
              </span>
              Growth Potential
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                text-[15px]
                md:text-[16px]
                leading-8
                max-w-[620px]
              "
              style={{
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Invest in premium plotting developments designed for future
              appreciation, secure ownership, and modern township living with
              excellent infrastructure connectivity.
            </p>

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                mt-10
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                font-semibold
                transition-all
                duration-300
              "
              style={{
                background: "var(--secondary-color)",
                color: "white",
              }}
            >
              Explore Investment Plans
              <ArrowUpRight size={20} />
            </motion.button>
          </motion.div>

          {/* ======================
              RIGHT CARDS
          ====================== */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-6
            "
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    relative
                    overflow-hidden
                    rounded-[30px]
                    p-7
                    md:p-8
                    border
                    backdrop-blur-xl
                    transition-all
                    duration-500
                  "
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {/* CARD GLOW */}

                  <div
                    className="
                      absolute
                      top-[-50px]
                      right-[-50px]
                      w-[140px]
                      h-[140px]
                      rounded-full
                      blur-[90px]
                      opacity-0
                      group-hover:opacity-20
                    "
                    style={{
                      background: "var(--secondary-color)",
                    }}
                  />

                  {/* ICON */}

                  <div
                    className="
                      w-[68px]
                      h-[68px]
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      mb-7
                    "
                    style={{
                      background: "rgba(200,169,107,0.12)",
                    }}
                  >
                    <Icon
                      size={30}
                      style={{
                        color: "var(--secondary-color)",
                      }}
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      text-[24px]
                      md:text-[28px]
                      font-bold
                      leading-[1.3]
                    "
                    style={{
                      color: "var(--white-color)",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-5
                      text-[15px]
                      leading-8
                    "
                    style={{
                      color: "rgba(255,255,255,0.68)",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* ARROW */}

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="
                      mt-8
                      w-12
                      h-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
